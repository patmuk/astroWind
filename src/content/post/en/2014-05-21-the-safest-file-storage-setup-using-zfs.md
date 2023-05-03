---
title: the safest file storage setup (using zfs)
publishDate: 2014-05-21 20:23:06.000000000 +02:00
published: true
categories: 
- storage
- zfs
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
excerpt: "I recently set up a file storage with the purpose of being super safe.<br />
  Here is what one needs to do and why:"

---
  I recently set up a file storage with the purpose of being super safe.<br />
  Here is what one needs to do and why:<br />
<p>1. First one needs a machine which supports ECC RAM.<br />
  Why? It is not so much the correction of a faulty bit which matters, but to avoid any faulty bit to be undetected, as
  a ECC supporting machine (RAM, CPU and Motherboard needs to support it) halts on RAM errors.<br />
  To illustrate why this is important imagine the second and third bits in your RAM are faulty, meaning they stick to
  the state '1' permanently. Every time a file is read to ram and written to disk (when editing or copying) the file
  will be corrupted - the second and third bit will be changed to '1' no matter what it really is (simplified example).
  When using ZFS this will be even more disastrous: The checksum for each file will be calculated wrong, and in the
  effort to repair the wrongly presumed file with the parity copy it will be written corrupted. All files would be lost!
  See another explanation in the <a href="http://forums.freenas.org/index.php?threads/ecc-vs-non-ecc-ram-and-zfs.15449/"
    title="Why ECC is important for zfs">FreeNAS Forum</a>.</p>
<p>As a side note: An external storage or NAS, like a synology, etc, will not be sufficient. First only a few, "pro"
  graded systems have dcc ram. But when your computer does have normal RAM which is faulty, it will corrupt the file and
  copy it to the NAS's ECC RAM, which will write the corrupted file to disk, as it can not detect the corruption. So,
  when editing or downloading a file better do it on the storage machine directly and not with a non-ECC machine.</p>
<p>2. Use ZFS.<br />
  Why? ZFS maintains data integrity and avoids silent failures. ZFS is not only self-healing, and self-checking, it does
  not have a write-whole as a hardware raid, for example. In any other RAID system a file would be corrupted when the
  machine fails while the file is written (as files are overwritten in most filesystems). ZFS copies-on-write, which
  means first a copy is written, then the to-be-overwritten file will be deleted. It has many other cool features too,
  but the avoidance of silent data corruption is most important to me. <a href="http://en.wikipedia.org/wiki/ZFS">Read
    here about ZFS</a>.</p>
<p>3. Set up ZFS mirrors instead of a ZFS RAID-Z1<br />
  Why? You can better upgrade mirrors and there is more data redundancy. If you have four disks, making a RAID-Z1 would
  give you 3 disks for data and one for parity - so if one disk fails your data is recoverable, if two fail it is lost.
  Using them as two mirrors you only have two disks for data, but two for protection, meaning your data will be lost
  only if three disks fail. But the main reason for using mirrors is upgrading: Let's assume you have four 3 TB drives
  and want to upgrade them to 4 TB drives. Having a RAID-Z1 you need to replace all disks before you get more storage
  capacity (as the storage is limited to the size of the smallest disk), while with a two mirror setup you only need to
  replace two disks for an increase. IN ZFS terminology: A vdev is only a big as it's smallest device. A four disks
  RAID-Z1 is one vdev, while each mirror is a vdev.<br />
  <a href="http://constantin.glez.de/blog/2010/01/home-server-raid-greed-and-why-mirroring-still-best">This article</a>
  surely is more convincing.
</p>
<p>4. Create a spool for each mirror!<br />
  Why? If I could convince you to use mirrors don't do the mistake to add them together as one virtual device (called
  zpool in ZFS). If you do so the mirrors will be striped, meaning that all data is spread other the mirrors. If,
  instead, you have a zpool for each mirror, you have a safer setup:<br />
  Let's again assume one has four drives. If they are added into one zpool, if one drive fails nothing is lost. If two
  drives fail it depends on which drives fail. If it is one of each mirror everything is recoverable, but is the failing
  drives both belong to one mirror all data in the whole zpool is lost! Remember, the data on the still fine mirror
  consists only of data blocks, which where spread over all drives. So, in order to have a complete file, all blocks on
  all mirrors are needed.<br />
  If one has two zpools instead, only the data on the failing mirror would be lost, the over zpool would be not
  affected.</p>
<p>However, having multiple zpools means that you have multiple virtual drives which have their storage limit. So you
  might need to shift files around, when the space on one of them runs out. But I pay this price for the gained safety.
</p>
<p>5. Use '<a href="https://openzfsonosx.org">Open ZFS on OS X (O3X)</a>' for ZFS on a Mac.<br />
  Why? It currently supports zpool 5000 and ZFS 5. zpool 5000 is version 28 plus support for feature flags, but does not
  support the closed-source Oracle Solaris ZFS pool versions 29 and up.</p>
<p>There are only two alternatives:<br />
  <a href="https://code.google.com/p/maczfs/">MacZFS</a> currently only supports zpool version 8 and zfs version
  2.<br />
  I assume that the it might be superseded by O3X.<br />
  The other alternative, <a href="http://getgreenbytes.com/solutions/zevo/">ZEVO</a> does not support OS X 10.9
  (Mavericks) yet. It is developed by a company which charges for a pro version, and even for the free version one needs
  to register.
</p>
<p>6. Use these commandos for setup:<br />
  <code><br />
sudo zpool create -f -o ashift=12 \<br />
-O compression=lz4 \<br />
-O casesensitivity=insensitive \<br />
-O atime=off \<br />
-O normalization=formD \<br />
-poolname- mirror /dev/disk<x> /dev/disk<y><br />
</y></x></code><br />
  The main options are:<br />
  - compression=lz4, which not only saves space, but is faster as well. Loading a file from even an SSD is slow,
  decompressing it the CPU faster. So, the reduced file size helps loading it faster, while the time needed for
  decompression is still smaller, resulting in overall lesser time used. Follow <a
    href="https://blogs.oracle.com/observatory/entry/zfs_compression_a_win_win">this link</a> for experimental
  results.<br />
  - atime=off switches of the access time file attribute. Otherwise every time a file is read the access time would be
  set to the current date, issuing an unnecessary write (wearing down the hard drive and endangering the file).<br />
  - ashift=12 adapts the block size to suit modern hard drives (Advanced Format Disks). <a
    href="http://zfsonlinux.org/faq.html#HowDoesZFSonLinuxHandlesAdvacedFormatDrives">Read on</a> for a better
  explanation.
</p>
<p>7. Have an offsite disaster recovery backup.<br />
  Well, if something drastically happens to this super safe storage machine, and even the disks are not recoverable, one
  better has an offsite backup for disaster recovery. I decided to not have all files, but only the important,
  non-retrievable files backed up like this.<br />
  For data thief safety have extra disk(s) where you back up your important data:<br />
  Either synchronise it using rsync, or ifs attach+resilver+detach, and bring it yourself to a save location.<br />
  Or use a cloud storage service - like dropbox or flicker (offers 1 TB for photos!). For the latter I still have to
  find out if the data is save from silent data corruption ... do they use ECC RAM and ZFS as well? Or a better
  alternative?</p>
<p>If you read the whole post (wow!) here is a bonus for you: The best <a
    href="https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/">ZFS manual</a> and a <a
    href="http://thegeekdiary.com/solaris-zfs-command-line-reference-cheat-sheet/">CheatSheet</a> I found!<br />

</p>