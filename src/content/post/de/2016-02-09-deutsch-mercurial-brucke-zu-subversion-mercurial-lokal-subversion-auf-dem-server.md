---
title: "Mercurial Brücke zu Subversion: Mercurial lokal, Subversion auf
dem Server"
publishDate: 2016-02-09 13:28:40.000000000 +01:00
published: true
categories: []
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
excerpt: "Falls man nicht <a href="http://patrick.mukherjee.de/?page_id=31">PlatinVC</a> nutzen will/kann, man, noch
  viel schlimmer, einen Subversion-Server benutzen muss, kann man trotzdem mercurial lokal mit all seinen Vorteilen
  nutzen. Änderungen können erst lokal eingecheckt werden und dann global zum Subversionserver gepuscht werden. Aus der
  Sicht des Servers erkennt man keinen Unterschied."
---
<p>Falls man nicht <a href="http://patrick.mukherjee.de/?page_id=31">PlatinVC</a> nutzen will/kann, man, noch
  viel schlimmer, einen Subversion-Server benutzen muss, kann man trotzdem mercurial lokal mit all seinen Vorteilen
  nutzen. Änderungen können erst lokal eingecheckt werden und dann global zum Subversionserver gepuscht werden. Aus der
  Sicht des Servers erkennt man keinen Unterschied.<br />
<br />
  Vorteil: Man kann lokal viele kleine Schritte versionieren, die das Projekt für andere unkompilierbar werden lassen
  würden, und branches nach belieben anlegen.
</p>
<p>Hat man einen Stand erreicht, bei dem das Projekt wieder kompilierbar ist, kann man alle commits gleichzeitig zum
  Subversion Server schicken (wobei auch lokal angelegte Branches lokal bleiben können).</p>
<p>So wird das ganze konfiguriert:</p>
<p>(siehe auch:<br />
  <a
    href="http://mercurial.selenic.com/wiki/WorkingWithSubversion">http://mercurial.selenic.com/wiki/WorkingWithSubversion</a><br />
  <a href="http://mercurial.selenic.com/wiki/HgSubversionhg">http://mercurial.selenic.com/wiki/HgSubversionhg</a><br />
  <a
    href="http://mercurial.aragost.com/kick-start/en/hgsubversion/">http://mercurial.aragost.com/kick-start/en/hgsubversion/</a>)<br />
  <!--more-->
</p>
<p>1. hgsubversion Erweiterung installieren:</p>
<p><code>hg clone http://bitbucket.org/durin42/hgsubversion/ <em>Zielverzeichnis</em></code></p>
<p>Als <em>Zielverzeichnis</em> empfehle ich:<br />
  <code><em>hg-Installertionsverzeichnis</em>/hgext/hgsubversion</code>
</p>
<p>2. Leeres Projekt anlegen:<br />
  (auf diese Weise kann man bei einem Übertragunsabbruch wärend des initialen checkouts den Checkout wieder
  aufnehmen)<br />
  <code>hg init <em>Projektverzeichnis</em></code>
</p>
<p>3. hgrc konfigurieren:<br />
  Entweder in der gobal Konfiguration (~/.hgrc) oder in der lokalen im Projekt (.hg/hgrc) hinzufügen:<br />
  [extensions]<br />
  <code>hgsubversion =<em>hg-Installertionsverzeichnis/Zielverzeichnis</em></code>
</p>
<p>4. installertion testen<br />
  Zunächst die Tests für die heruntergeladene Erweiterung:<br />
  <code>cd <em>Zielverzeichnis</em><br />
nose: http://code.google.com/p/python-nose/<br />
</code><br />
  Falls nose nicht installiert ist kann man das nachholen:<br />
  <code>easy_install nose</code><br />
  Oder die Tests nur mit Python durchführen:<br />
  <code>python tests/run.py</code>
</p>
<p>5. prüfen, ob hgsubversion aufrufbar ist:<br />
  <code>hg version --svn</code><br />
  Es sollte erscheinen:<br />
  <code>Mercurial Distributed SCM (...)<br />
</code>
</p>
<p>Erscheint weiter unten<br />
  <code>Subversion 1.5.0 or later required, but no bindings were found<br />
Subvertpy 0.7.4 or later required, but not found</p>
<p>Please install either Subvertpy or the Subversion Python SWIG bindings!</code><br />
  muss man noch die Bindings (Subvertpy) installieren (5a):<br />
  5a. Subvertpy installieren:<br />
  5a.1. von https://launchpad.net/subvertpy/+download herunterladen
</p>
<p>6. Svn Repository auschecken:<br />
  Entweder ein branch oder mehr ... falls ein Ordner angegeben wird, in dem die SVN-Typische Struktur<br />
  <code>/branches<br />
/tags<br />
/trunc<br />
</code><br />
  liegt, erkennt das hgsubversion automatisch und gleicht tags und branches ab. Ansonsten wird der übergebene Ordner als
  branch lokal angelegt.
</p>
<p>Initial, und auch später, holt man sich die Änderungen vom Subversionsverver mit:<br />

</p>