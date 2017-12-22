---
title: JavaScript addEventListener onblur doesn’t work in Firefox, this is the fix!
author: Raymon Schouwenaar
type: post
date: 2015-02-11T09:55:15+00:00
url: /javascript-addeventlistener-onblur-doesnt-work-firefox-fix/
featured_image: /wp-content/uploads/2015/02/firefox-onblur-event-doesnt-work-825x510.jpg
dsq_thread_id:
  - 3505655570
categories:
  - Javascript
  - Webdevelopment
tags:
  - Events
  - Firefox
  - Input
  - Javascript

---
For a cool project is was building an Email validation script. But Firefox got some weird thing with the &#8220;onblur&#8221; event. Since I&#8217;ve decided to leave jQuery behind, and make more use of (Vanilla) JavaScript, i got this problem that my code wasn&#8217;t working.

**Example 1: Doesn&#8217;t work:**

    // HTML
    Enter your name: <input type="text" id="fname">
    
    <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>
    
    
    // JavaScript
    document.getElementById('fname').addEventListener('onblur', function() {
    input.value = input.value.toUpperCase();
    });
    

**Example 2: Does work:**

    // HTML
    Enter your name: <input type="text" id="fname" onblur="myFunction()">
    
    <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>
    
    
    // JavaScript
    function myFunction() {
        var x = document.getElementById("fname");
        x.value = x.value.toUpperCase();
    }
    

The &#8220;onblur&#8221; event worked on every other browser, except Firefox. Even on the website of [W3schools][1] the report that the onblur event should work in Firefox, but it doesn&#8217;t. After a lot of testing and searching i saw there was also the &#8220;blur&#8221; event.

So i thought, I could try the &#8220;blur&#8221; event. And magically it works!!

**Solution:**

    document.getElementById('fname').addEventListener('onblur', function() {
    input.value = input.value.toUpperCase();
    });
    

If you have any comments on this solution, check the comment field below 🙂

 [1]: http://www.w3schools.com/jsref/event_onblur.asp