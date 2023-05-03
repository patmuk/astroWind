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
  I (re-)created gpg-keys.<br />
  Here my recommended steps:<br />
  1. First create one or more keys:<br />
  There are many tutorials, I recommend the one mentioned in my last post:<br />
  http://patrick.mukherjee.de/?p=151
</p>
<p>2. List all keys:<br />
  gpg --list-secret-keys</p>
<p>now save each:<br />
  1. export the public-key as a text-file. This can be distributed without being afraid of mail-filtern, etc.:<br />
  gpg -ao pubKey_<id>.asc --export <id><br />
      where <id> stands for either the short-ID of the key or the associated email-addresse.</p>
<p>3. The most important step: create a "revokation certificate"! So that you can revocate your published key at any
  time (maybe you forget the passphrase). This is only possible using the passphrase and the private key!<br />
  gpg -ao revokeCert_<id>.asc --gen-revoke <id>
</p>
<p>4. Optionally save the private key in a ASCCII-file. The file is, of cause, encrypted using a passphrase. Store it
  very secure (you can even print it).<br />
  gpg -a --export-secret-keys <id> | gpg -aco privKey_<id>.asc </p>
<p>5. Now publish your key(s) to a key-server. It is sufficient to publish it to one server - the server distributes it
  to all other server.<br />
  gpg --send-keys <id>
</p>
<p>... while trying around I made a mistake and deleted my key prior revoking the key. Now the wrongly published keys
  are stored online for all eternety and will confuse people, who look for my key.<br />
  So, please, do not use these keys, as they do not exist anymore:<br />
  <br />
  <a href="http://pgp.surfnet.nl/pks/lookup?op=get&search=0x3A5F851AC80A87DF">2048R/C80A87DF</a><br />
  <a href="http://pgp.surfnet.nl/pks/lookup?op=get&search=0xD60D17993BD998A9">2048R/3BD998A9</a></id>
  </id>
  </id>
  </id>
  </id>
  </id>
  </id>
  </id>
</p>