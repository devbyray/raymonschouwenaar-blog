---
title: What is the JavaScript Set in ES2015 and when should you use it?
author: Raymon Schouwenaar
type: post
date: 2018-01-21T12:40:43+00:00
url: /what-is-set-javascript-es2015-es6-when-use-it/
featured_image: ES2015-set.jpg
categories:
  - Javascript
---
The ES2015 spec is full of new features that continuously be introduced in all the new browsers. The `Set` collection is one of those new things.

My first thought was, well I could just use a normal `Array`! But I will show you what you can do with the `Set` collection.

<!--more-->

## What is the ES2015 Set?

What is a `Set` and what can you do with it? Well, the Mozilla Docs are very clear about this:

> The `Set` collection lets you store unique values of any type, whether primitive values or object references. **source: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

This special Object can store all kinds of values like normal objects, but they have to be unique, duplicate values will be filtered out of it.

Thanks to the tweet of Addy Osmani, I discovered it `Set()`!

{{< tweet 952805052086824960 >}}

Filtering duplicate values out of a JavaScript Array, was always a hassle, you needed to loop through the Array and figure it out yourself, so `Set` is making it a lot easier. 😁


## Add data to Set

There are a few ways to add data to a `Set` collection.

### Pass as parameter

This is an example of adding data as a parameter to a `Set` collection.

{{< code type="javascript" >}}

    const numbersSet = new Set([1,2,3,4,5]);
    const stringSet = new Set(['Jan', 'Rick', 'Raymon', 'Tim']);
    const objectSet = new Set([{a: 1, b: 2}]);
    const arraySet = new Set([['javascript', 'coffeescript'], ['css', 'sass']]);

{{< /code >}}

### Add data by the add method

The other way of passing data into a `Set` collection is by using the  `add()` method.

{{< code type="javascript" >}}
    
    const newSetObject = new Set();
    newSetObject.add('Raymon');
    newSetObject.add({a: 1, b: 2});
    newSetObject.add(1).add(2).add(3).add(4).add(5)
    
// Result: Raymon, {a: 1, b: 2}, 1, 2, 3, 4, 5

{{< /code >}}

## Check values inside Set with has method

The `Set` collection has a very handy method for checking if a certain value is inside the object.

{{< code type="javascript" >}}

    const numbersSet = new Set([1,2,3,4,5]);
    const stringSet = new Set(['Jan', 'Rick', 'Raymon', 'Tim']);
    const objectSet = new Set([{a: 1, b: 2}]);
    const arraySet = new Set([['javascript', 'coffeescript'], ['css', 'sass']]);
    
    numberSet.has(4); // true
    numberSet.has(6); // false
    stringSet.has('Raymon'); // true
    objectSet.has({a: 1, b: 2}); // false
    arraySet.has('css'); // false

{{< /code >}}

The `has()` method works fine on [primitive values](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), but non-primitive values like the `Object` and `Array` is not working.

There is 1 reason why the non-primitive values are not working link the primitive values. The reason is that the `has()` method is comparing not only the values but also it's reference with the `===` operator.

If you have the reference to the `Object` or `Array` in a variable and use that in the `has()` method, then the result will be as expected.

{{< code type="javascript" >}}

    const exampleObject = {a: 1, b: 2};
    const exampleArray1 = ['javascript', 'coffeescript']
    const exampleArray2 = ['css', 'sass'];
    const objectSet = new Set([exampleObject]);
    const arraySet = new Set([exampleArray1, exampleArray2]);
    
    objectSet.has({a: 1, b: 2}); // false
    objectSet.has(exampleObject); // true
    arraySet.has('css'); // false
    arraySet.has(exampleArray1); // true
    arraySet.has(exampleArray2); // true

{{< /code >}}

So keep in mind that it is important to have a reference to the non-primitive values when you use the `has()` method on the `Set` collection.

## Remove data from the Set

Adding data to a `Set` collection was very simple, but deleting data from the collection is as easy.

### Remove data with delete method

If you want to remove an item on the `Set` collection, simply use the `remove` method.

{{< code type="javascript" >}}
    
    const numbersSetObject = new Set([1,2,3,4,5,6,7,8,9]);
    numbersSetObject.has(2); // true
    numbersSetObject.delete(2);
    numbersSetObject.has(2); // false
    console.log(numbersSetObject); // 1,3,4,5,6,7,8,9
    
{{< /code >}}

### Remove all data with clear method

But if you want to remove all the data from the `Set` collection, use the `clear` method.

{{< code type="javascript" >}}
    
    const numbersSetObject = new Set([1,2,3,4,5,6,7,8,9]);
    numbersSetObject.has(2); // true
    numbersSetObject.clear();
    console.log([...numbersSetObject]); // []
    
{{< /code >}}


## Check the number of items with the size property

Like the `Array` you check the number of items with the `length` property, the `Set` collection has the `size` property for that.

If we check the `Set` collection from the previous example, the size will be 7.

{{< code type="javascript" >}}

    newSetObject.size // 7

{{< /code >}}


## Filter duplicate primitive values

If I try to put duplicated primitive values into the `Set`, only the unique ones stay.

{{< code type="javascript" >}}
    
    const uniqueArray = new Set([1,2,2,2,3,4,5,5,6,7,9,9,8]);
    console.log('uniqueArray: ', uniqueArray)
    // unique: 1, 2, 3, 4, 5, 6, 7, 9, 8

{{< /code >}}

## Filter duplicate non-primitive values

The nonprimitive values are bit different with filtering out the duplicates. The docs are very clear, the `Set` is not comparing Objects in itself, they compare the reference. 

See it as comparing things with the `==` operator, but with the `===` operator the reference and value will be compared.

If we try to put 2 equal objects, with a different reference in the `Set`, then there will be no problem.

{{< code type="javascript" >}}

    const objectSet = new Set([{a: 1, b: 2}, {a: 1, b: 2}]);
    console.log('objectSet: ', objectSet);
    // objectSet: {a: 1, b: 2}, {a: 1, b: 2};

{{< /code >}}

But what happened when we put in equal objects with the same reference?

{{< code type="javascript" >}}

    const demoObject = {a: 1, b: 2};
    const objectSet = new Set([demoObject, demoObject]);
    console.log('objectSet: ', objectSet);
    // objectSet: {a: 1, b: 2};

{{< /code >}}

Hope you guessed that the `objectSet` contains only 1 `demoObject`. It clears the duplicated 😁

## Loop over a Set

The nice thing about a `Set` is, you can loop over a `Set`!

The docs tell more about the Set:

> Set objects are collections of values. You can iterate through the elements of a set in insertion order. **source: [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

To loop over a `Set` collection we can use the `for-of` loop and the `forEach` method which is attached to the `Set`.


### Loop with forEach method

With `Set.forEach()` you can loop through all the data in the `Set` collection.

{{< code type="javascript" >}}

    const objectSet = new Set([{a: 1, b: 2}, {a: 1, b: 2}]);
    objectSet.forEach(object => {
        console.log('Object: ', object);
    })
    
    // result:  
    // Object:  {a: 1, b: 2}
    // Object:  {a: 1, b: 2}

{{< /code >}}

### Loop with for-of loop method

With the `for-of` loop we have a few methods to loop over all the items inside the `Set` collection.

- `entries()`
- `keys()`
- `values()`

{{< code type="javascript" >}}
    const objectSet = new Set([{a: 1, b: 2}, {a: 1, b: 2}]);
    for (let [key, value] of objectSet.entries())  {
        console.log(key);
    }
    
    // {a: 1, b: 2}
    // {a: 1, b: 2}

{{< /code >}}

The only weird thing is, that `entries`, `keys` and `values` methods give back exactly the same thing on the `Set`. Maybe it is because `Set` and `Map` API have a lot in common. 

## Difference between Set and Map

The biggest difference between a `Map` and ` Set` is that the `Set` looks very similar to an `Array` and a `Map` looks more like an `Object`.

I hope that this article will help you! If you got questions please let me know in the comments?