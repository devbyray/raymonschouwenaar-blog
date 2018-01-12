---
title: ES6 VAR, LET and CONST explained!
author: Raymon Schouwenaar
type: post
date: 2016-08-03T14:58:44+00:00
url: /es6-var-let-and-const-explained/
featured_image: es6-var-let-and-const-explained-1200x750.jpg
dsq_thread_id:
  - 5037139521
categories:
  - Javascript
tags:
  - ES2015
  - ES6

---
ES6 (ES2015) is one of the buzzwords in JavaScript nowadays. There are a lot of new features in it. Let&#8217;s watch the `var`, `let` and `const`!

## What is a VAR?

### VAR can be used for anything everywhere

The `var` keyword can be used everywhere. You can put in all kinds of information. Strings, Int, Object, Array, Function. That is great, well most of the time!

Variables can be used for everything, but also everywhere. You can access a `var` from inside a function, object, if-else statement, really everywhere! That maybe sounds cool, but can have a big effect on the performance of a website or web-application.

### Globally scoped

A `var` is or can be globally scoped. Cool to access everything from inside anything! But is that good? With the coming of ES6 there are a few alternatives ahead. There are called `let` and `const`. They have different behavior than `var`. But let&#8217;s talk about that later.

### Can be changed later

A variable can be defined with a string, later on, reassigned to an integer and later it could be a function. That is a power but also a weakness.

    var globalVariable;

    globalVariable = 'I Love Pizza!';

    console.log(globalVariable); // Will be 'I Love Pizza!'


Now I defined a global variable (_yes I do love pizza_ :-)), right after it I added a string to it. So you can see, you can define it and later on change it to the other value.

    function iChangeTheVariable() {
        globalVariable = [59, 600, 843];
    }

    iChangeTheVariable();

    console.log(globalVariable); // Will be [59, 600, 843]


So guess what, the globalVariable is change. Sounds cool right! Well If it was your intention to change it, yes! But if you didn&#8217;t know that you already used that variable, then it is a problem! There is the weakness!!

### Can be locally scoped

Now you can see the danger of globally scoped variables. So if I may advise you, never use globally scoped variables.

    (function() {
        var var1 = 'variable 1 value in parent scope';

        (function() {
            // Scope 1
            var1 = 'variable 1 value in scope 1';
            console.log('scope 1: ', var1); // Is 'variable 1 value in scope 1'
        }());

        (function() {
            // Scope 2
            var1 = 'variable 1 value in scope 2';
            console.log('scope 2: ', var1); // Is 'variable 1 value in scope 2'
        }());

        console.log('Parent scope: ', var1); // Is 'variable 1 value in parent scope'

    }());
    console.log('Global scope: ', var1); // Is undefined


You can make the variable locally scoped, by putting it inside a function. Like the example here, if you execute the function in your console, the last `console.log()` with &#8220;Parent scope:&#8221; in it, will be changed by the one before it!

### Can be hoisted

Variables can be hoisted. Hoisted means, declare them all on top of the function (_I hope you don&#8217;t put everything in the global scope!_).

    (function() {

        var localVar1, localVar2, localVar3;

        localVar1 = 'Variable value 1';
        localVar2 = [74, 88, 97, 112];
        localVar3 = {name: 'Ray', website: 'http://personaldomain.com'};

    }());


This how most developer usally hoist their variables. This is to make sure that they declared the variables before the got a value. But also to prevent the variables be globally accessible.

## What is a LET?

### Let is block scoped

`let` is one of the new kids on the block in ES6. A `let` variable is block scoped. You can create a scope by any `{}`. With a function, for and while loop and a lot more.

Finally, a variable type that is not globally but locally scoped!

### can be changed later

A `let` variable can be changed later, but only if it is in the same scope as where it is declared! It is declared in the other scope, it is just a new variable that is defined.

_This example will run in the latest version of Google Chrome (not in Safari)_

    (function() {
        let letVar1 = 'Let variable 1 value in parent scope';

        (function() {
            // Scope 1
            let letVar1 = 'Let variable 1 value in scope 1';
            console.log('scope 1: ', letVar1); // Is 'Let variable 1 value in scope 1'
        }());

        (function() {
            // Scope 2
            let letVar1 = 'Let variable 1 value in scope 2';
            console.log('scope 2: ', letVar1); // Is 'Let variable 1 value in scope 2'
        }());

        console.log('Parent scope: ', letVar1); // Is 'Let variable 1 value in parent scope'

    }());
    console.log('Global scope: ', letVar1); // Is undefined



If you tried to paste this snippet into the devtools console you will see that the parent scope, scope 1 & 2 give different values. That is because it is block scoped. The global scope will give an error that it is undefined.

With the normal `var` you can just give `letVar1` a new value. But since a `let` can&#8217;t be re-defined later, this is not possible for the `let`.

If we would forget to assign `letVar1` in scope 1, then the console in scope 1 would output &#8220;Let variable 1 value in parent scope&#8221;. Because it will lookup to the parent scope.

### Can&#8217;t be hoisted

If you try to hoist `let` variables, then you will get errors. So define a `let` and give it a value. If you first try to define it and give it a value later, you will end with errors!

## What is a CONST?

The things that you read about `const` is that the are immutable. Most people think that it means that you can&#8217;t change the value, but instead you can change the value. But you can&#8217;t re-assign the reference to the `const` itself.

### Const is block scoped

A `const` is block scoped, the same as the `let` variable. In the other scope, you can define the `const` again. But you can&#8217;t re-assign the same `const` in the other scope.

    (function() {
        const constVar1 = 'const variable 1 value in parent scope';

        (function() {
            // Scope 1
            const constVar1 = 'const variable 1 value in scope 1';
            console.log('scope 1: ', constVar1);
            // scope 1:  const variable 1 value in scope 1
        }());

        console.log('Parent scope: ', constVar1);
        // Parent scope:  const variable 1 value in parent scope

    }());



In this example, you can see that it is possible to assign a constant with the same name in a different scope with the other value.

### Can&#8217;t be re-assigned

    (function() {
        const constVar1 = 'const variable 1 value in parent scope';

        (function() {
            // Scope 1
            console.log('scope 1: ', constVar1);
            // scope 1:  const variable 1 value in parent scope
            constVar1 = 'const variable 1 value in scope 1';
            // Is Identifier 'constVar1' has already been declared
            console.log('scope 1: ', constVar1);    }());

    }());



In this example, you can see that it is not possible to re-assign the same constant with a different value.

### Can&#8217;t be hoisted

Because you can&#8217;t re-assign a `const`, you know it is not possible to hoist them. For hoisting, you need to re-assign.

## ES6 / ES2015

If you want to check which browser (or the browser you are currently using) supports ES6 /ES2015, check:<http://kangax.github.io/compat-table/es6/>

If something is not clear or confusing about `var`, `let` or `const` please add your questions to the comments!