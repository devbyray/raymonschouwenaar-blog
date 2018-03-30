---
title: Commit together with multiple users on Github
author: Raymon Schouwenaar
type: post
date: 2018-04-02T08:32:08+00:00
url: /commit-together-multiple-users-github/
featured_image: intersection-observer
draft: false
categories:
  - Github
---

I don't know about you, but I love to pair program with my team members. We build a ton of features with multiple people. But is was never possible to bind multiple authors to a single commit.

But since the end of January 2018 Github came with some news about a possibility to [commit with co-authors](https://blog.github.com/2018-01-29-commit-together-with-co-authors/). That is awesome news Github!!

<!--more-->

Off-course I had to check that out! And it seems pretty easy. In this blog I want to share with you how you can do that to!

## Add an co-author to your commit

I'm a fan of using the terminal for git instead of a GUI. But adding a co-author can be done on both. 

### Terminal

On the terminal you start writing your commit message as usual. But now you add 2 empty lines and put in a row of `Co-authored-by: Firstname Lastname <usernam@users.noreply.github.com>` for every co-author. After the last line of the co-author you close the message with the quotes.

```bash
 > git commit -m "Your commit message
 >
 >
 > Co-authored-by: Name <username@users.noreply.github.com>
 > Co-authored-by: Name2 <username2@users.noreply.github.com>"
```

For every co-author you need a name, that can be a first and lastname or a name of choice. After the name you add a email adress of that user between the `<>` arrows. 

If a co-author wil keep his/her emailadress private you can simply use the github noreply email adress "githubusername@users.noreply.github.com". 

### Git GUI and via Github website

Via a Git GUI of choice and via the Github website you can also make changes to a file. If you do that, below the file will be a field for your commit message.

Then just put in the same message as in the terminal.

```text
	Your commit message
	
	
	Co-authored-by: Name <username@users.noreply.github.com>
	Co-authored-by: Name2 <username2@users.noreply.github.com>"
```

## Result

Than in your commit log on Github you will se the author and co-authors instead of only 1 author.

![Github commit log](https://user-images.githubusercontent.com/602352/35053024-b818ee72-fbb1-11e7-93f8-11baf411f1c1.gif)

## Thanks

If you have some additional Github tips or some questions? Please let me know on twitter 😉: [@rsschouwenaar](https://twitter.com/rsschouwenaar)
