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
  titel: 'Dr.-Ing.'
excerpt: "<p>Falls man auf einer Linux-Maschine ohne root-Rechte nicht auf mercurial (oder git) verzichten will kann man
  diesen Anweisungen folgen:<br />
  <br />
  If you happen to be on a linux box without root privileges you can nevertheless install the two very usefull
  distributed version control systems, git and mercurial:"
---
<p>Falls man auf einer Linux-Maschine ohne root-Rechte nicht auf mercurial (oder git) verzichten will kann man
  diesen Anweisungen folgen:<br />
  <br />
  If you happen to be on a linux box without root privileges you can nevertheless install the two very usefull
  distributed version control systems, git and mercurial:<br />
  <br />
  <br />
  === für mercurial ===<br />
  Voraussetzungen:<br />
  a. make sollte installiert sein<br />
  (sonst bei 3. "<code>python setup.py build_py -c -d . build_ext -i build_mo</code>" ausführen)<br />
  b. Python (&gt;2.4) sollte installiert sein.<br />
  (Alternativ kann man auch phyton lokal installieren: Den Anweisungen unter
  http://weblogs.java.net/blog/fabriziogiudici/archive/2009/07/installing_merc.html folgen)<br />
  1. Quellcode runterladen: http://mercurial.selenic.com/release/mercurial-2.2.3.tar.gz (oder eine neuere Version)<br />
  2. im Zielordner für die lokal installieren Programme entpacken<br />
  (<code>tar xf mercurial-2.2.3.tar.gz</code>)<br />
  1. <code>make install local</code><br />
  2. zur ~/.bash_profile folgendes hinzufügen:<br />
  <code>PATH=$PATH:/<em>&lt;Zielverzeichnis&gt;</em></code><em></em><code><em></em>/mercurial</code><br />
  1. die Umgebungsvariablen neu laden:<br />
  <code>source ~/.bash_profile</code>
</p>
<p>Viel Spaß mit Mercurial!!!<br />
  ==============</p>
<p>=== für git ===<br />
  Git zu installieren hat bei mir nicht funktioniert, wahrscheinlich weil 'perl-ExtUtils-MakeMaker' nicht installiert
  waren. Trotzdem hier die Anweisung wie es gehen müsste:<br />
  Voraussetzungen:<br />
  Die build-essentials (gcc, make, ...) und perl-ExtUtils-MakeMaker (und perl) müssen installiert sein:<br />
  1. Quellcode runterladen von:<br />
  https://github.com/git/git/tags/<br />
  (auf "zip" klicken, um alle Dateien zu erhalten)<br />
  1. Entpacken und in das neue Verzeichnis wechseln<br />
  2. kompilieren &amp; Installieren:<br />
  (schnellere Installertionsvorgang, aber später langsamer in der Ausführung von git)<br />
  <code>make configure</code><br />
  ./configure --prefix=/<em>&lt;Zielverzeichnis&gt;</em><br />
  <code>make install</code>
</p>
<p>besser: (langsamerer Installertionsvorgang, aber bessere Performanz bei der täglichen Nutzung von git):<br />
  <code>make prefix=/</code><em>&lt;Zielverzeichnis&gt;</em><code> PROFILE=BUILD all</code><br />
  <code>make prefix=/</code><em>&lt;Zielverzeichnis&gt;</em><code> PROFILE=BUILD install</code><br />
  1. die git-binary zur den Umgebungsvariablen hinzufügen:<br />
  (e.g.) <code>vi ~/.bash.profile</code><br />
  <code>PATH=$PATH;</code><em>&lt;Zielverzeichnis&gt;</em><code>/bin/git</code>
</p>
<p>Wobei natürlich <em>&lt;Zielverzeichnis&gt;</em> für das Verzeichnis steht, in dem die Binärdateien liegen sollen.
  Dieses Verzeichnis muss natürlich zugreifbar sein (z.B. /local/user/bin/git)!<br />
  =======