---
title: xtend pass functions as parameters to other functions
publishDate: 2012-08-09 11:21:01.000000000 +02:00
published: true
categories:
- programming
- xtend
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  title: 'Dr.-Ing.'
excerpt: "Alles in xtend ist eine <em>Expression</em>. Dadurch ist es möglich eine Methode einer anderen Methode als
  Parameter zu übergeben, wie hier beschrieben:"
---
<p>Alles in xtend ist eine <em>Expression</em>. Dadurch ist es möglich eine Methode einer anderen Methode als
  Parameter zu übergeben, wie hier beschrieben:<br />
</p>
<p>Wir brauchen dafür die folgenden Methoden:<br />
  (1) Die <strong><em>calledFunction</em></strong>, welche als Argument übergeben wird,<br />
  (2) die <strong><em>callingFunction</em></strong>, welche die calledFunction übergibt<br />
  (3) und die <strong><em>genericFunction</em></strong>, welche die calledFunction empfängt.</p>
<p>Die (3) <em>genericFunction</em> wird immer wie folgt implementiert:</p>
<p><code>def Type genericFunction((Type)=&gt;Type calledFunction){<br />
Type parameter = new Type()<br />
   val result = calledFunction.apply(parameter)<br />
}</code></p>
<p>Um (1) und (2) zu implementieren haben wir die zwei Möglichkeiten (A) und (B):</p>
<p>A: (1) und (2) können als Methoden implementiert werden:</p>
<p>(1) <em>calledFunction</em>:<br />
  <code>def Type calledFunction(Type parameter){<br />
parameter.foobar<br />
}</code>
</p>
<p>(2) <em>callingFunction</em>:<br />
  <code>def Type callingFunction(){<br />
genericFunction([Type parameter | parameter.calledFunction])<br />
}<br />
</code>oder, noch besser lesbar (da wir nur einen Parameter haben):<br />
  (2) callingFunction:<br />
  <code>def Type callingFunction(){<br />
genericFunction([calledFunction])<br />
}</code>
</p>
<hr />
<p>B: (1) kann als Variable implementiert werden:</p>
<p>(1) <em>calledFunction</em>:<br />
  (Type)=&gt;Type calledFunction = [parameter | parameter.foobar]</p>
<p>(2) callingFunction:<br />
  <code>def Type callingFunction(){<br />
genericFunction(calledFunction)<br />
}</code>
</p>
<p>Ich bevorzuge A, da (1) und (3) wie immer implementiert werden und in (2) die Übergabe einer Funktion als Parameter
  deutlich erkennbar ist.</p>
