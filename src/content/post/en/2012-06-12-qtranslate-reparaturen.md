---
title: repair qTranslate for the theme 'Twenty Eleven'
publishDate: 2012-06-12 00:36:44.000000000 +02:00
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
---
<p>I use qTranslate to multilingualize my posts.</p>
<p>Saidly installing it overwrote some translations that have been working before. For example, "Hinterlasse eine
  Antwort" (german) should be shown instead of "leave a reply", which isn't.</p>
<p>The solution: (Re-)Install the latest translation files:</p>
<p>Download them from:</p>
<p>http://svn.automattic.com/wordpress-i18n/de_DE/trunk/messages/twentyeleven/</p>
<p>Files: *.po and *.mo, copy them to:</p>
<p>[WordpressInstallation]/wp-content/themes/twentyeleven/languages</p>
<p></p>