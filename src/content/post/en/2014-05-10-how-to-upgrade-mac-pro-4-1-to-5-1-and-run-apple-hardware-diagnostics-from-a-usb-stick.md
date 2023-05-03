---
title: How to upgrade Mac Pro 4.1 to 5.1 and run Apple's Hardware Tests from a USB
stick
publishDate: 2014-05-10 14:19:30.000000000 +02:00
published: true
categories: []
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
excerpt: "I recently decided against building my own server from ordered parts and simply bought an older Mac Pro for
  a good value. It was roughly 200€ more than the build-it-yourself way, but therefor it can run OS X smoothly, which
  saves me time where I don't need to babysit my machine.
</p>
<p>Nevertheless, it can not go without a bit of hacking.<br />
  Read on how to upgrade to 5.1 and run Apple's Hardware Tests from an USB Stick:"
---
I recently decided against building my own server from ordered parts and simply bought an older Mac Pro for
  a good value. It was roughly 200€ more than the build-it-yourself way, but therefor it can run OS X smoothly, which
  saves me time where I don't need to babysit my machine.
</p>
<p>Nevertheless, it can not go without a bit of hacking.<br />
  How to upgrade to 5.1 and run Apple's Hardware Tests from an USB Stick:
</p>
<p>Upgrading it to the next year's version (from 4.1 (early 2009) to 5.1 (mid 2010)) is as easy as running a program,
  just follow <a
    href="http://www.yourdailymac.net/2011/05/how-to-upgrade-your-mac-pro-2009-to-the-mac-pro-2010-firmware-supports-faster-cpus-and-memory/">these
    instructions</a>.</p>
<p>For now I did not change the hardware, so everything is the same, but in future I can opt for a faster processor and
  can install faster (up to PC3-10600) RAM (needs to be supported by the processor as well).</p>
<p>The harder part was getting Apple's Hardware Test to run, without finding my old OS DVDs!<br />
  There are several descriptions to be found, however, only this worked for me:<br />
  1. Download <a href="https://github.com/upekkha/AppleHardwareTest">Apple's Hardware Test Software</a>.<br />
  (or direct link for a <a href="http://download.info.apple.com/Apple_Hardware_Test/022-4831-A.dmg">MacPro
    5.1</a>)<br />
  1. Restore the downloaded dmg file to a usb stick:<br />
  2.1 Select a usb stick in 'Disk Utility'<br />
  2.2 Click on the tab "Restore", choose the dmg file as source and the stick as target<br />
  2.3 if it complains "the image has to be scanned ..." do it:<br />
  2.3.1 Click on the menu item "images"->"Scan Image for Restore...", chose the source image (which you downloaded in
  step 1)<br />
  2.4 <code>cp /Volumes/AHTOne/System/Library/CoreServices/.diagnostics/diags.e* /Volumes/AHTOne/.</code><br />
  2.5 Reboot from the stick with the terminal command:<br />
  <code><br />
cd /Volumes/AHTDOne/ && sudo bless --mount /Volumes/AHTDOne --setBoot --file diags.efi && sudo reboot<br />
</code><br />
  (you might need to replace "AHTDOne" with the name your stick got, if it is different).
</p>
<p>Now the mac should boot directly into the hardware test. Once finished you have to remove the stick to boot normally
  into OS X.<br />
  Thank you http://rivenbyfive.blogspot.de/2012/01/download-and-run-apple-hardware-test.html, which showed me the right
  way!</p>