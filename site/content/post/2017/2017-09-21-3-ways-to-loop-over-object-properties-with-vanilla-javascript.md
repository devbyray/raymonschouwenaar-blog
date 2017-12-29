---
title: 3 ways to loop over Object properties with Vanilla JavaScript
author: Raymon Schouwenaar
type: post
date: 2017-09-21T18:59:43+00:00
url: /3-ways-to-loop-over-object-properties-with-vanilla-javascript/
featured_image: /wp-content/uploads/2017/06/love-javascript-shorthand-else-statement.jpg
dsq_thread_id:
  - 6160658068
categories:
  - Javascript

---
It happens a lot that you need to loop over an Array with JavaScript Objects! But sometimes you just don’t know what kind of properties that Object has. Lucky we are that JavaScript offers a few ways of looping over JavaScript Object properties.

<!--more-->

I wanted to share 3 of them with you. So hopefully this will help you in the right direction.

## The Object to loop over

First, we need an example object to loop over. So I put some of my experience in it 😉 (hahaha)! Keep the fun in it!

{{< code type="javascript" >}}
let experienceObject = {
    name: 'Raymon',
    title: 'Lead Frontend/JavaScript Developer',
    yearsExperience: 8,
    projects: [
        {
            name: 'ANWB',
            title: 'Senior JavaScript Developer',
            techniques: ['Angular', 'ES6', 'Vanilla JavaScript', 'Less', 'CSS']
        },
        {
            name: 'NATO',
            title: 'Lead JavaScript Developer',
            techniques: ['Angular 2', 'AngularJS', 'ES6', 'Vanilla JavaScript', 'Web Sockets', 'D3']
        },
        {
            name: 'Rabobank',
            title: 'Senior Frontend Developer',
            techniques: ['Vanilla JavaScript', 'CSS', 'Responsive Webdesign']
        }
    ]
}
{{< /code >}}

## Object.keys(experienceObject).map()

The first example is the Object.keys map method to loop over the properties of the Object it.

{{< code type="javascript" >}}
Object.keys(experienceObject).map(e =&gt; {
    console.log(`key= ${e} value = ${experienceObject[e]}`)
});
{{< /code >}}

## Object.entries(experienceObject).forEach()

The second example is the Object.keys with the forEach method over the properties of the Object it.

{{< code type="javascript" >}}
Object.entries(experienceObject).forEach(([key, value]) =&gt; {
    console.log(`key= ${key} value = ${value}`)
})
{{< /code >}}

## For-in loop

The last example is the For-in loop to loop over the properties of the Object it.

{{< code type="javascript" >}}
for (property in experienceObject) {
  console.log(`key= ${property} value = ${experienceObject[property]}`)
}
{{< /code >}}
