---
title: How to Install mercurial (and maybe git) on a linux box without root privileges
publishDate: 2012-08-01 09:27:42.000000000 +02:00
published: true
categories:
- Development Tools
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
excerpt: "If you happen to be on a linux box without root privileges you can nevertheless install the two very usefull
  distributed version control systems, git and mercurial:"
---
  If you happen to be on a linux box without root privileges you can nevertheless install the two very usefull
  distributed version control systems, git and mercurial:<br />
  <br />
  === for mercurial ===<br />
  Prerequisites:<br />
  a. make should be installed (alternatively you can execute "python setup.py build_py -c -d . build_ext -i build_mo" in
  step 3.)<br />
  b. you will need to have python (&gt;2.4) installed<br />
  (alternatively you can install a local phyton: follow the instructions detailed in
  http://weblogs.java.net/blog/fabriziogiudici/archive/2009/07/installing_merc.html)<br />
  1. download the sources: http://mercurial.selenic.com/release/mercurial-2.2.3.tar.gz (or a more recent version)<br />
  2. unpack to desired bin directory (tar xf mercurial-2.2.3.tar.gz)<br />
  3. <code>make install local</code><br />
  4. add to ~/.bash_profile the lines<br />
  <code>PATH=$PATH:/</code><em>&lt;desired directory&gt;</em><code>/mercurial</code><br />
  1. reload the PATH settings:<br />
  <code>source ~/.bash_profile</code>
</p>
<p>Enjoy mercurial!!!<br />
  ==============</p>
<p>=== for git ===<br />
  Installing git did not work out for me, as 'perl-ExtUtils-MakeMaker' was missing. Nevertheless, here are the
  instructions:<br />
  Prerequisites:<br />
  you will need to have the build-essentials (gcc, make, ...) and perl-ExtUtils-MakeMaker installed:<br />
  1.: dowload the sources from:<br />
  https://github.com/git/git/tags/<br />
  (click on "zip" to get all files in a nice zip-ball)<br />
  1. unzip and cd into the unzipped directory<br />
  2. compile &amp; install:<br />
  (faster install, worse performance later)<br />
  <code>make configure</code><br />
  <code>./configure --prefix=/</code><em>&lt;desired directory&gt;</em><br />
  <code>make install</code>
</p>
<p>better way (slower install, faster performance later):<br />
  (do a profile feedback build)<br />
  <code>make prefix=/</code><em>&lt;desired directory&gt;</em><code> PROFILE=BUILD all</code><br />
  <code>make prefix=/</code><em>&lt;desired directory&gt;</em><code> PROFILE=BUILD install</code><br />
  1. add the git-binary to your path<br />
  (e.g.) <code>vi ~/.bash.profile</code><br />
  <code>add PATH=$PATH;</code><em>&lt;desired directory&gt;</em><code>/bin/git</code>
</p>
<p>Of course, <em>&lt;desired directory&gt;</em> should be replaced by a directory where you want to have the bin files
  installed to, and which has to be accessible by you (e.g. <code>/local/user/bin/git</code>)!<br />
  =======
</p>