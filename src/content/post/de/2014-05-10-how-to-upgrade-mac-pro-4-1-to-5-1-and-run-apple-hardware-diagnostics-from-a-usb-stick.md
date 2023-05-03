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
excerpt: "Vor kurzem habe ich mich gegen einen selbstgebauten Server und für einen älteren Mac Pro entschieden. Das
  kostete mich zwar ca. 200€ mehr, aber dafür kann ich OS X nutzen, dass weniger Zeit zum Babysitten verschlingt.</p>
<p>Aber ohne ein wenig hacken bin ich natürlich nicht ausgekommen ;)<br />
  <!--more So habe ich den Mac Pro auf 5.1 erneuert und Apples Hardware Tests von einem USB-Stick ausgeführt:"
---
<p>Vor kurzem habe ich mich gegen einen selbstgebauten Server und für einen älteren Mac Pro entschieden. Das
  kostete mich zwar ca. 200€ mehr, aber dafür kann ich OS X nutzen, dass weniger Zeit zum Babysitten verschlingt.</p>
<p>Aber ohne ein wenig hacken bin ich natürlich nicht ausgekommen ;)<br />
So habe ich den Mac Pro auf 5.1 erneuert und Apples Hardware Tests von einem USB-Stick ausgeführt:
</p>
<p>Um Mac Pro 4.1 (Frühjahr 2009) auf 5.1 (Mitte 2010) zu bringen muss man nur ein Programm ausführen, wie <a
    href="http://www.yourdailymac.net/2011/05/how-to-upgrade-your-mac-pro-2009-to-the-mac-pro-2010-firmware-supports-faster-cpus-and-memory/">hier</a>
  beschrieben.</p>
<p>Ich habe die Hardware noch nicht ausgetauscht, in der Zukunft kann ich aber einen schnelleren Prozessor und
  schnelleres RAM (bis zu PC3-10600) installieren (muss vom Processor unterstützt werden).</p>
<p>Apples Hardware Tests laufen zu lassen war die schwerigere Aufgabe, da ich keine OS DVDs mehr fand!<br />
  Es gibt mehrere Anleitungen im Netz, aber nur folgendes hat bei mir funktioniert:</p>
<p>1. <a href="https://github.com/upekkha/AppleHardwareTest">Apple Hardware Test Software</a> herunterladen:<br />
  (Oder direct für einen <a href="http://download.info.apple.com/Apple_Hardware_Test/022-4831-A.dmg">MacPro
    5.1</a>)<br />
  1. Die heruntergeladene dmg-Datei aug einen USB-Stick wiederherstellen:<br />
  2.1 in 'Disk Utility' den Stick auswählen<br />
  2.2 aug den Tab "Wiederherstellen" klicken, die dmg-Datei als Quelle und den Stick ale Ziel wählen<br />
  2.3 falls eine Fehlermeldung "das Image muss gescannt werden..." erscheint:<br />
  2.3.1 im Menü "Images" auf den Eintrag "Scan Image für eine Wiederherstellung..." klicken, das Quell-Image (in Schritt
  1 heruntergeladen) auswählen<br />
  2.4 <code>cp /Volumes/AHTOne/System/Library/CoreServices/.diagnostics/diags.e* /Volumes/AHTOne/.</code><br />
  2.5 Mit den Stick rebooted, mittels des 'terminal' Kommandos:<br />
  <code><br />
cd /Volumes/AHTDOne/ && sudo bless --mount /Volumes/AHTDOne --setBoot --file diags.efi && sudo reboot<br />
</code><br />
  (Wobei man eventuell "AHTDOne" durch den vergebenen Namen des Sticks ersetzen muss, solute diesel abweichen.)
</p>
<p>Jetzt sollte der Mac direct vom USB-Stick in den Testmodus booten. Sind die Tests durchgelaufen muss man den Stick
  entfernen, um wieder nach OS X zu booten.<br />
  Vielen Dank an http://rivenbyfive.blogspot.de/2012/01/download-and-run-apple-hardware-test.html, durch den ich auf
  diesen Lösungsweg gestoßen bin!<br />
