---
title: show qTranslate on every page
publishDate: 2012-06-12 10:03:09.000000000 +02:00
published: true
categories:
- Wordpress
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
---
<p>Beim öffnen eines Posts wird mit dem Theme 'Twenty Eleven' keine sidebar angezeigt.<br />
  Somit wird das 'qTranslate choose language'-widged auch nicht angezeigt.<br />
  Abhilfe:<br />
  In die header.php des Themes<br />
  direkt über<br />
  <code><br />
&lt;/header>&lt;!-- #branding --&gt;<br />
</code><br />
  folgendes einfügen:<br />
  <code><br />
  &lt;div id="access-language" class="access-language"&gt;<br />
       &lt;?php qtrans_generateLanguageSelectCode('image'); ?&gt;<br />
  &lt;/div&gt;<br />
</code><br />
  'image' zeigt nur die Flaggen an,<br />
  'text' nur den Text und beides erhält man mit<br />
  'both'