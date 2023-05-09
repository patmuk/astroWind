---
title: "avoid switch to default language when searching with qTranslate"
description: "wordpress i18n tweak"
publishDate: 2012-06-12 01:14:17.000000000 +02:00
published: false
categories:
- Wordpress
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
---
Nutzt man den Query-Modus (die Sprache wird mit '?lang=de' ausgewählt) springt bei jeder Such die Webseite auf die Standardsprache (z.B.: nach Browser-Einstellungen) um.<br />
Abhilfe:<br />
Unter 'Design' -&gt; 'Editor' bei der Datei 'Searchform.php'<br />
vor dem '<\from>' Tag folgendes hinzufügen:
<code>&lt;input type="hidden" name="lang" value="&lt;?php echo qtrans_getLanguage(); ?&gt;"&gt;</code>
... so wird der Sprachenparameter als verstecktes Feld an der URL hinzugefügt.
Quelle: http://stackoverflow.com/questions/8435113/wordpress-qtranslate-keep-dont-keep-lang-on-word-search