---
title: archive mails in iOS 7 using a gmail exchange push account
publishDate: 2014-01-11 12:22:17.000000000 +01:00
published: true
categories: []
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
excerpt: "Der 'Löschen' Knopf hat unter iOS 7 ein anderes Verhalten: Er verschiebt die meine GMails in den
  'Papierkorb', statt sie zu archivieren.
  So kann man das beheben:" 
---
Der 'Löschen' Knopf hat unter iOS 7 ein anderes Verhalten: Er verschiebt die meine GMails in den
  'Papierkorb', statt sie zu archivieren.<br />
  So kann man das beheben:
<p>Gmail auf meinem iPhone nutze ich mit dem Exchange Protokoll (ExchangeAccountSync), da dadurch push Mails unterstützt
  werden. Da Google diesen Dienst für neue Benutzer deaktiviert hat, ist es nicht mehr möglich das so aufzusetzen.<br />
  Hat man es schon so konfiguriert, kann man den Dienst auch weiterhin, auch trotz iOS upgrade, weiter nutzen. Laut
  Gerüchten verliert man die Funktion erst, wenn man das Greät wechselt ...<br />
  Unter http://gigaom.com/2013/07/05/push-alternatives-for-your-gmail-messages-on-ios/ sind neben diesen Infos auch
  Alternativen genannt, wie man trotzdem push mit GMail nutzen kann.</p>
<p>Um das zu korrigieren muss man die Einstellungen auf 'Deleted Mailbox' setzen.</p>
<p>Auch die Änderung auf "archivieren" in den iOS Einstellungen bringt nichts und zeigt die Fehlermeldung "E-Mail konnte
  nicht bewegt werden. Die E-Mail konnte nicht in das Postfach Archiv bewegt werden.", wenn man eine Mail archivieren
  will.</p>
<p>Um das zu korrigieren muss man die Einstellungen auf '"Gelöscht"' setzen:<br />
  Unter 'Einstellungen' -> 'Mail, Contacts, Calendars' -> auf den Account tippen -> auf das Wort 'Account' tippen ->
  'Erweiterte Einstellungen' -> unter der Überschrift 'Gelöschte Nachrichten bewegen nach ''"Gelöscht"' auswählen.</p>
<p>Dann im browser des iPhone (!)<br />
  http://m.google.com/sync/settings<br />
  aufrufen.<br />
  !Achtung! Die Seite wird nur angezeigt, wenn man als Sprache im iPhone English (U.S.) ausgewählt hat! Ansonsten wird
  man zu einer anderen Seite weitergeleitet!</p>
<p>Auf dieser Webseite nun den Hacken unter 'Enable "Delete Email As Trash" for this device.' entfernen.</p>
<p>Voilà! Obwohl es in der Mail app "Löschen" heißt wird die Mail nun archiviert.<br />
  Bei Problemen könnt Ihr den Anweisungen unter https://support.google.com/a/users/answer/138740?hl=en<br />
  folgen.<br />
