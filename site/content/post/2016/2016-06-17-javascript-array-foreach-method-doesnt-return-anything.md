---
title: The JavaScript array.forEach() method doesn’t return anything!
author: Raymon Schouwenaar
type: post
date: 2016-06-17T09:34:53+00:00
url: /javascript-array-foreach-method-doesnt-return-anything/
dsq_thread_id:
  - 4917636774
categories:
  - Frontend Development
tags:
  - Angular2
  - Javascript
  - TypeScript

---
A while ago working on a cool Angular2 project I discovered some weird behavior, weird because I didn&#8217;t realise it was working that way.

I was checking if an id property of an object, was already in an array. If it was, it won&#8217;t push it again. It is wasn&#8217;t in there, it could push the object in the array.

It doesn&#8217;t seem that difficult. So I created a little function so I could check it from anywhere in my application. (_take into account that the code is from an Angular2 Typescript application._)

    private doesFormExistsInSubmittedArray(list, val) {
        if (list !== undefined && list.length > 0) {
            list.forEach(function (item, index, arr) {
                if(item.formObject.id === val.id) {
                    return true;
                }
            });
        }
        return false;
    }
    

But every time the function was fired, in the end where duplicated object&#8217;s in the array! At that moment, I thought WHAT? This was a simple thing that I overlooked. I spend hours to find the issue. Even a smarter team member didn&#8217;t find the solution.

But in many cases in programming, you wonder why something doesn&#8217;t work, but it should. Well, this was 1 of these cases.

We where comparing the `array.forEach()` with the `for()` loop. The simplest thing to see (if you already used the `forEach()` function) is that the `forEach()` is a bit easier to read. With the `for()` loop, you need a bit more code.

One of the major things we didn&#8217;t realize, the `array.forEach()` function is creating a different scope, because it is a function. So when it meets the if statement, and will come&#8217;s across the return true, it doesn&#8217;t move the return outside of the `forEach()` function.

A second remark of the `forEach()` function is: The `for()` loop will stop with running after you return a something. But the `forEach()` function will first finish running trough the array when it is finished it can return something.

That was my AHA moment! That I didn&#8217;t saw that! Well, that the next question was, how do we get that returned value outside of its scope.

Pretty simple, declare a variable (in Typescript you can use `let`) with a false value. When running trough the `forEach()` function and it meets the if statement, it will assign true to the variable. When the `forEach()` is done running, it will return the variable. So when you run this function, it will run true or false.

**Eventually, this is the result that works (Typescript).**

    private doesFormExistsInSubmittedArray(list, val) {
        let found = false;
        if (list !== undefined && list.length > 0) {
            list.forEach(function (item, index, arr) {
                if(item.formObject.id === val.id) {
                    found = true;
                }
            });
        }
        return found;
    }
    

**This is the Vanilla JavaScript version.**

    function doesFormExistsInSubmittedArray(list, val) {
        var found = false;
        if (list !== undefined && list.length > 0) {
            list.forEach(function (item, index, arr) {
                if(item.formObject.id === val.id) {
                    found = true;
                }
            });
        }
        return found;
    }
    

Hopefully, this will help you to get the returned value from the `forEach()` function! If you have problems or questions with this? Or have a different problem with the `for()` loop or `forEach()`method? Please let me know in the comments!