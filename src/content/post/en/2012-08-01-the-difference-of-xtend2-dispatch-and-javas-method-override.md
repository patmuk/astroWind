---
title: The difference of xtend(2) dispatch and Java's method override
publishDate: 2012-08-01 15:18:32.000000000 +02:00
published: true
categories:
- Programming
tags: []
author:
  email: patrick.mukherjee@gmail.com
  display_name: patmuk
  first_name: 'Patrick'
  last_name: 'Mukherjee'
  titel: 'Dr.-Ing.'
excerpt: " The difference is single dispatch vs polymorphic dispatch. This theoretical concept becomes more
  clear with a comprehensive example:"
---
  The difference is single dispatch vs polymorphic dispatch. This theoretical concept becomes more
  clear with a comprehensive example:<br />

Let's assume we have a method <code>print</code> which is printing the type of an argument along this the content. With
  method overloading the java code would look like this:
</p>
<p><code><br />
    public class Printer {<br />
        public void print(String str) {<br />
            System.out.println("String: "+str);<br />
        }<br />
        public void print(Object obj) {<br />
            System.out.println("Object: "+obj);<br />
        }<br />
        public static void main(String[] args) {<br />
            Object obj = new String("abc");<br />
            new Printer().print(obj);<br />
        }<br />
    }<br />
</code></p>
<p>The result of this method is "Object abc"! This happens, because the type is statically resolved at compile time, so
  only <code>print(Object)</code> can be bound.</p>
<p>When specifying this construct with xtend(2) we can use real polymorphic method dispatching:<br />
  <code><br />
class Printer {<br />
    def dispatch print(String str) {<br />
        "String: "+str<br />
    }</p>
<p>    def dispatch print(Object obj) {<br />
        "Object: "+obj<br />
    }</p>
<p>    def static void main(String[] args) {<br />
        val Object obj = new String("abc");<br />
        new Printer().print(obj);<br />
    }<br />
}<br />
</code><br />
  The result would really be "String: abc".<br />
  The generated code is made up of <code>if instanceof else</code> cascades. For the two dispatch methods in the example
  above the following Java code would be generated:<br />
  <code><br />
import java.util.Arrays;<br />
import org.eclipse.xtext.xbase.lib.StringExtensions;</p>
<p>@SuppressWarnings("all")<br />
public class Printer {<br />
  protected String _print(final String str) {<br />
    String _operator_plus = StringExtensions.operator_plus("String: ", str);<br />
    return _operator_plus;<br />
  }</p>
<p>  protected String _print(final Object obj) {<br />
    String _operator_plus = StringExtensions.operator_plus("Object: ", obj);<br />
    return _operator_plus;<br />
  }</p>
<p>  public static void main(final String[] args) {<br />
      String _string = new String("abc");<br />
      final Object obj = _string;<br />
      Printer _printer = new Printer();<br />
      _printer.print(obj);<br />
  }</p>
<p>  public String print(final Object str) {<br />
  <strong>  if (str instanceof String) {<br />
      return _print((String)str);<br />
    } else if (str != null) {<br />
      return _print(str);</strong><br />
    } else {<br />
      throw new IllegalArgumentException("Unhandled parameter types: " +<br />
        Arrays.<object>asList(str).toString());<br />
    }<br />
  }<br />
}<br />
<code><br />
This way the method with the more specific parameter is choosen, while using java's normal method overloading the method with the exact signiture as called for is taken.</p>
<p>Sources & kudos:<br />
http://www.2ality.com/2009_05_01_archive.html<br />
and<br />
http://www.eclipse.org/xtend/documentation/index.html#polymorphicDispatch</code></object></code></code></object></code>
</p>