---
title: qTranslate horizontal flaggs
publishDate: 2012-06-12 00:39:33.000000000 +02:00
published: true

categories:
- Wordpress
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
excerpt: "Die Sprachenauswahl kann man auch schöner, mit horizontalen Flaggen anzeigen lassen.
Zuerst erstellt man am besten ein "<a href="http://codex.wordpress.org/Child_Themes" title="how to create a child theme" target="_blank">Child Theme</a>".
Dann einfach folgendes zur Style.css hinzufügen (unter Design -> Editor):"
---
Die Sprachenauswahl kann man auch schöner, mit horizontalen Flaggen anzeigen lassen.
Zuerst erstellt man am besten ein "<a href="http://codex.wordpress.org/Child_Themes" title="how to create a child theme" target="_blank">Child Theme</a>".
Dann einfach folgendes zur Style.css hinzufügen (unter Design -> Editor):<br />
<br />
<code><br />
/*--------------------------------*/<br />
/** flags horizontal */<br />
ul.qtrans_language_chooser { list-style: none; margin: 0px; padding: 0px; }<br />
ul.qtrans_language_chooser li { display: inline; float: left; position: relative; margin: 0px; padding: 0px; }<br />
a.qtrans_flag { margin-left: 10px; margin-top: 0px }<br />
/*-----------------------------------*/<br />
</code><br />
<em>ul.qtrans_language_chooser</em> steht für die Liste der Flaggen. <em>list-style: none</em> blendet den Aufzählungspunkt vor jeder Flagge aus, <em>margin</em> und <em>padding</em> verschiebt die position. Hier eigentlich unnötig, da deaktiviert.<br />
<em>ul.qtrans_language_chooser li</em> ist nun jeder Listeneintrag. <em>display: inline</em> bestimmt, dass die Flaggen in der Liste angezeigt werden, <em>float: left</em>, dass diese linksbündig positioniert werden und <em>position: relative</em>, dass die folgenden Positionsangaben relativ zu den anderen Elementen auf der Seite interpretiert werden sollen.<br />
<em>a.qtrans_flag</em> ist nun die Flagge selbst (bzw. der Link),  <em>margin-left: 10px</em> gibt an, dass links von jeder Flagge 10 Pixel Platz sein soll, während <em>margin-top: 0px</em> angibt, dass über den Flaggen kein Platz reserviert wird.
Hier kann man natürlich alle gängigen <a href="http://www.w3schools.com/css/css_list.asp">CSS Listenattribute</a> nutzen.<br />
<br />
<code><br />
/*--------------------------------*/<br />
/** flags horizontal */<br />
ul.qtrans_language_chooser { list-style: none; margin: 0; padding: 0; }<br />
ul.qtrans_language_chooser li { display: inline-block; float: left; position: relative; margin: 0; padding: 0; }<br />
a.qtrans_flag { margin-left: 10px; margin-top: 0px }<br />
/*-----------------------------------*/<br />
</code><br />
