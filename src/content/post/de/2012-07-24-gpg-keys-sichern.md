---
title: secure gpg keys
publishDate: 2012-07-24 16:18:43.000000000 +02:00
published: true
categories: 
- pgp
tags: []
author:
email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
---
<p><br />
  Ich habe mir wieder gpg-keys zugelegt.<br />
  Hier meine empfohlenen Schritte:<br />
  1. Erstmal einen oder mehrere Keys anlegen:<br />
  Tutorials gibt es hierfür viele, ich verweise auf meinen letzten Post:</p>
<p>http://patrick.mukherjee.de/?p=151</p>
<p>2. eigene Keys auflisten:<br />
  <code>gpg –list-secret-keys</code>
</p>
<p>Jetzt für jeden Key:<br />
  1. Public Key als Textdatei speichern. Kann man weitergeben, ist durch ASCCII-Format sicher for Mailfiltern,
  etc.:<br />
  gpg -ao pubKey_.asc –export<br />
  wobei entweder für die short-ID des keys oder die assoziierte Mailadresse steht.</p>
<p>3. Jetzt unbedingt “revokation Certificate” erzeugen! So kann man jederzeit seinen Key von den Key-Servern entfernen,
  sollte man sein Passwort mal vergessen. Das Certificate kann man nur mit dem Passwort und den privaten Schlüsselteil
  erstellen!<br />
  gpg -ao revokeCert_.asc –gen-revoke</p>
<p>4. Nun, optional, den privaten Schlüsselteil als ASCCII-Datei speichern. Das ganze aber durch ein Passwort
  verschlüsselt! Gut gesichert aufheben.<br />
  gpg -a –export-secret-keys | gpg -aco privKey_.asc</p>
<p>5. Den Schlüssel bei Keyservern bekannt machen. Es reicht der eine – der öffentliche Schlüsselteil wird dabei
  automatisch auf die anderen Server verteilt.<br />
  gpg –send-keys</p>
<p>… mir ist beim Ausprobieren ein kleineres Maleur passiert … ich habe einen (Sub-)Schlüssel erstellt, diesen
  veröffentlicht und vor dem löschen nicht zurückgezogen. Nun bleibt er leider für ewig online und wird jeden verwirren,
  der meinen Schlüssel sucht.<br />
  Also, bitte verwendet nicht diese Schlüssel (da sie nirgends existieren):</p>
<p><br />
