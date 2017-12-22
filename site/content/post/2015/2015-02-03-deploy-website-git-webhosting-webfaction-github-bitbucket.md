---
title: How to deploy your website with Git to your web-hosting and use Github or Bitbucket instead!
author: Raymon Schouwenaar
type: post
date: 2015-02-03T14:14:04+00:00
url: /deploy-website-git-webhosting-webfaction-github-bitbucket/
featured_image: /wp-content/uploads/2015/02/continuous-deployment-825x510.jpg
dsq_thread_id:
  - 3481483161
categories:
  - Git
  - Github
  - Webdevelopment
tags:
  - Bitbucket
  - Deployment
  - Git
  - Github

---
For a long time, i was searching for a good solution to automatically deploy my websites to my web-hosting (Webfaction) via Git. I use Git (Github or Bitbucket) with all my Web-Dev projects, i was searching for a solution to setup my personal Continuous Deployment/Delivery work-flow.

## Before you follow this guid

In my guide, i assume that you are already familiar with Git. So i&#8217;m not gonna explain all the Git basics. If you want to learn Git? [Follow this free course on CodeSchool][1]. Good luck!

## Install Git on your webhosting

I don&#8217;t know what kind of web-hosting you have, but if you have SSH authorization it will be good (i think). The great think about the developer web-hosting on Webfaction is, that [you can easily install Git with a few clicks][2].

If you don&#8217;t use Webfaction, [checkout this manual SSH installation][3]. Otherwise i would advice you to transfer everything to [Webfaction][4].

## Create a local Git Repository

{{< code type="bash" >}}
    $ mkdir projectfolder
    $ cd projectfolder
    $ git init
{{< /code >}}

**initialized local project**

When you initialized your local &#8220;projectfolder&#8221; with Git, you can add your files to the project. It is also possible to initialize Git in an existing project folder.

**Commit files to local Git Repository**

{{< code type="bash" >}}$ git add index.html
    $ git commit -m "Initial commit"
{{< /code >}}

After these commands your files (in my case the index.html) are stored in the local repository.

## Create a Git Repository on your server/web-hosting

In my case, i have to login on my hosting via SSH. (Git is already installed on my webfaction hosting) For every web-hosting that could be different. So you have to check that with your hosting or on your server.

{{< code type="bash" >}}$ cd webapps/raymon_git
    $ mkdir myprojectrepo.git
    $ cd myprojectrepo.git
    $ git init --bare
{{< /code >}}

> What does `$ git init --bare`

> Bare repositories contain only the .git folder and no working copies of your source files. A bare repository strictly contains the version history of your code. `$ git init` normal repositories contains also your files (working copy). _source: [saintjsd.com][5]_

Now you created your project repository on your hosting. In the &#8220;myprojectrepo.git&#8221; has all kinds of folders in it. One of the is &#8220;hooks&#8221;, there are the Git hooks stored. Git hooks are scripts that run automatically every time a special event occurs in a Git repository (_[read the good explanation of Atlassian][6]_).

## Create a Git Hook to deploy your code.

{{< code type="bash" >}}
    $ cd hooks
    $ vi post-receive
{{< /code >}}

Your console will show an empty file (in the VI editor). Add the code below to the document & save it.

{{< code type="bash" >}}
    GIT_WORK_TREE=/path/to/deploy/code git checkout -f develop
{{< /code >}}

([check this tutorial for basics of the VI editor][7])

With this command, the code (from the develop branch) will be deployed to the specified location (every push on the develop branch). You can replace the path that i defined, for yours.

On Webfaction i needed to give the `post-receive` file some write permissions. So i added `chmod +x post-receive`, so it can write to the specified location. I don&#8217;t know if your web-hosting need this, but you can try it if it doesn&#8217;t work.

## Connect to post-receive hook

To connect you local repository to the remote on your server, you need to add it as en remote. And after that you can push it to that specific remote git repository.

{{< code type="bash" >}}
    $ git remote add devlocation ssh://location/to/home/git/repo/myprojectrepo.git
    $ git push devlocation +develop:refs/heads/develop
{{< /code >}}

The path on webfaction hosting is `username@servername.webfaction.com`. The servername your account use, is displayed in the dashboard.

## Future commit&#8217;s and pushes

In the future, when you made changes to your repo. You can just push that with the normal git push command.

{{< code type="bash" >}}
    $ git push devlocation
{{< /code >}}

## But i have my code already on Github and / or Bitbucket

If your repository already exists on Github or Bitbucket, the only thing you have to change on your local repository is. Add the new remote of your server. Because Github / Bitbucket is already defined as &#8220;origin&#8221;.

Adding a new remote to your git repo will also work with Sourcetree (like me). I prefer working with Sourcetree. Even than it&#8217;s pretty

easy. The only thing you need to changes is the remote:

<img src="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2015/02/screenshot-git-sourcetree-choose-remote-repository.jpg?w=700" alt="Change remote repository for Git in Sourcetree" data-recalc-dims="1" />

## If you haven&#8217;t pushed your code to Github and / or Bitbucket

If you haven&#8217;t pushed it yet to Github / Bitbucket? You can do this with adding the git url as &#8220;origin&#8221; remote.

{{< code type="bash" >}}
    $ git remote add origin git@github.com:username/gitrepository.git
    $ git push -u origin master
{{< /code >}}

 [1]: https://www.codeschool.com/courses/try-git
 [2]: http://docs.webfaction.com/software/git.html
 [3]: http://joemaller.com/908/how-to-install-git-on-a-shared-host/
 [4]: https://www.webfaction.com/?aid=73781
 [5]: http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/
 [6]: https://www.atlassian.com/git/tutorials/git-hooks/
 [7]: http://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/