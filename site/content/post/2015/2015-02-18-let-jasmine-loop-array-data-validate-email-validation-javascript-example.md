---
title: Let Jasmine loop to array of data to validate (Email Validation JavaScript example)
author: Raymon Schouwenaar
type: post
date: 2015-02-18T09:10:59+00:00
excerpt: Writing a lot of Jasmine tests for each email I wanted to test, is a waste of time! You can loop trough an array of all emails. So for each email there will be an test! Find out how I did it! (included Jasmine code and code of my Email Validation JavaScript Module)
url: /let-jasmine-loop-array-data-validate-email-validation-javascript-example/
featured_image: jasmine-loop-data-array-validate-825x510.jpg
dsq_thread_id:
  - 3525898061
categories:
  - Javascript
  - Webdevelopment
tags:
  - Jasmine
  - Vanilla JavaScript

---
For a couple of day&#8217;s I&#8217;m working on an emailValidation module in (Vanilla) JavaScript ([download it here][1]). But after some browser testing (and it works good), I wanted to write some [Jasmine][2] tests to validate some usual and unusual emails.

But writing a lot of tests for each email i wanted to test, is a waste of time. So i find out that you could loop to an array of emails. I wanted to share it with you, so you can save time writing Jasmine tests. And spend more time writing valuable code.

{{< code type="javascript" >}}/* Write your test */
describe('Test Email Validation', function() {

    it("Is the emailValidation available and is it an Object", function() {
        expect(emailValidation).toEqual(jasmine.any(Object));
    });

    var emails = [
        {emailadress: 'email@example.com', validate: true, message: 'is valid'},
        {emailadress: 'forename.lastname@example.com', validate: true, message: 'is valid'},
        {emailadress: 'email@subdomain.example.com', validate: true, message: 'is valid'},
        {emailadress: 'firstname+lastname@example.com', validate: true, message: 'is valid'},
        {emailadress: 'email@123.123.123.123', validate: true, message: 'is valid'},
        {emailadress: 'email@[123.123.123.123]', validate: false, message: 'is invalid'},
        {emailadress: '"email"@example.com', validate: false, message: 'is invalid'},
        {emailadress: '1234567890@example.com', validate: true, message: 'is valid'},
        {emailadress: 'email@example-one.com', validate: true, message: 'is valid'},
        {emailadress: '_______@example.com', validate: true, message: 'is valid'},
        {emailadress: 'email@example.name', validate: true, message: 'is valid'},
        {emailadress: 'email@example.museum', validate: true, message: 'is valid'},
        {emailadress: 'email@example.co.jp', validate: true, message: 'is valid'},
        {emailadress: 'firstname-lastname@example.com', validate: true, message: 'is valid'},
        {emailadress: 'much.”more\ unusual”@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'very.unusual.”@”.unusual.com@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'very.”(),:;&lt;>[]”.VERY.”very@\\ "very”.unusual@strange.example.com', validate: false, message: 'is invalid'},
        {emailadress: 'plainaddress', validate: false, message: 'is invalid'},
        {emailadress: '#@%^%#$@#$@#.com', validate: false, message: 'is invalid'},
        {emailadress: 'username@kasdkasd', validate: false, message: 'is invalid'},
        {emailadress: '@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'Joe Smith email@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'email.example.com', validate: false, message: 'is invalid'},
        {emailadress: 'email@example@example.com', validate: false, message: 'is invalid'},
        {emailadress: '    .email@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'email.@example.com', validate: true, message: 'is valid'},
        {emailadress: 'email..email@example.com', validate: true, message: 'is valid'},
        {emailadress: 'あいうえお@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'email@example.com (Joe Smith)', validate: false, message: 'is invalid'},
        {emailadress: 'email@example', validate: false, message: 'is invalid'},
        {emailadress: 'email@-example.com', validate: false, message: 'is invalid'},
        {emailadress: 'email@example.web', validate: true, message: 'is valid'},
        {emailadress: 'email@111.222.333.44444', validate: true, message: 'is valid'},
        {emailadress: 'Abc..123@example.com', validate: true, message: 'is valid'},
        {emailadress: '”(),:;&lt;>[\]@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'just”not”right@example.com', validate: false, message: 'is invalid'},
        {emailadress: 'this\ is"really"not\allowed@example.com', validate: false, message: 'is invalid'},
    ];

    describe('emailValidation.emailValidator', function () {
        emails.forEach( function(email) {
            var verb = email.validate ? 'passes' : 'fails';
            it('"' + email.emailadress + '" => ' + email.message, function() {

                var result = emailValidation.emailValidator(email.emailadress);
                expect(result).toEqual(email.validate);
            });
        });
    });

});
{{< /code >}}

Hopefully you can use this in your work-flow with Jasmine! If you have some comments please add them below. If you liked my Email Validation JavaScript Module? Please share it with others, I love open-source!!!

 [1]: https://gist.github.com/raymonschouwenaar/87c624bbd65e80371e2d
 [2]: http://jasmine.github.io/