---
title: 'Github for Beginners: Push files from local project to new Github repository with console'
author: Raymon Schouwenaar
type: post
date: 2014-03-12T13:08:33+00:00
url: /github-beginners-push-files-local-project-new-github-repository-console/
featured_image: create-account-at-github-825x510.jpg
dsq_thread_id:
  - 2413950736
categories:
  - Github

---
This week i started to learn a couple of new things for my development. One of these things was learn to use Github. I had never had the time or the needing of learn myself how to use Github, but now was the right time.

Because i&#8217;ve put all my time in it to learn i wanna share it with those who want to learn it. And because it cost me a lot of time to figure out how to use it and add it in my workflow, i write this article. Now you can learn it faster than me 🙂

**Good to know:** Where gonna use the commandline. I&#8217;m using Windows 8 so if you&#8217;re on Mac i looks a little bit different but that&#8217;s not a problem. Can&#8217;t you find the Terminal on Mac? <a href="https://www.youtube.com/watch?v=OK5eMj7Uxus" target="_blank">Check this video</a>! For Windows i&#8217;m using Console2, because you can open multiple tab&#8217;s. (You can <a href="http://sourceforge.net/projects/console/" target="_blank">download Console2 here</a>) But you can also use the default console.

**First you need to <a href="http://github.com" target="_blank">create an account by Github</a>.**

<img class="alignnone size-full wp-image-1711" alt="Create account at Github" src="https://i1.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/create-account-at-github.jpg?resize=700%2C344" width="700" height="344" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-account-at-github.jpg?w=1600&ssl=1 1600w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-account-at-github.jpg?resize=300%2C147&ssl=1 300w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-account-at-github.jpg?resize=1024%2C503&ssl=1 1024w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-account-at-github.jpg?w=1400&ssl=1 1400w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Create an new repository at Github**

<img class="alignnone size-full wp-image-1712" alt="Create new repository at Github" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/create-new-repository-at-github.jpg?resize=700%2C344" width="700" height="344" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-new-repository-at-github.jpg?w=1600&ssl=1 1600w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-new-repository-at-github.jpg?resize=300%2C147&ssl=1 300w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-new-repository-at-github.jpg?resize=1024%2C503&ssl=1 1024w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/create-new-repository-at-github.jpg?w=1400&ssl=1 1400w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Watch your new repository at Github**

<img class="alignnone size-full wp-image-1713" alt="Watch your new repository at Github" src="https://i1.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/watch-your-new-repository-at-github.jpg?resize=700%2C344" width="700" height="344" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/watch-your-new-repository-at-github.jpg?w=1600&ssl=1 1600w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/watch-your-new-repository-at-github.jpg?resize=300%2C147&ssl=1 300w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/watch-your-new-repository-at-github.jpg?resize=1024%2C503&ssl=1 1024w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/watch-your-new-repository-at-github.jpg?w=1400&ssl=1 1400w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Install Git**

To get access to Github with the console you need to install Git. Just <a href="http://git-scm.com/downloads" target="_blank">download the latest version and install Git</a>.

<img class="alignnone size-full wp-image-1716" alt="Install Git" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/install-git.jpg?resize=700%2C342" width="700" height="342" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/install-git.jpg?w=1600&ssl=1 1600w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/install-git.jpg?resize=300%2C147&ssl=1 300w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/install-git.jpg?resize=1024%2C500&ssl=1 1024w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/install-git.jpg?w=1400&ssl=1 1400w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

If you allready install Git, go to the next step.

**Open your terminal or console and go to your local development project**

<img class="alignnone size-full wp-image-1715" alt="Open console/terminal and go to your local development project" src="https://i2.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/open-console-terminal-go-to-local-project-github.jpg?resize=700%2C265" width="700" height="265" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/open-console-terminal-go-to-local-project-github.jpg?w=788&ssl=1 788w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/open-console-terminal-go-to-local-project-github.jpg?resize=300%2C113&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Typ in your console:**

`git init`

<img class="alignnone size-full wp-image-1717" alt="Type git init in your console for Github" src="https://i2.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/type-git-init-in-your-console-for-github.jpg?resize=700%2C265" width="700" height="265" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/type-git-init-in-your-console-for-github.jpg?w=788&ssl=1 788w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/type-git-init-in-your-console-for-github.jpg?resize=300%2C113&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

Now your local development folder is initialized with git we can take the next step.

**Add all the folders and files to git

** Typ in your console:

`git add -A`

<img class="alignnone size-full wp-image-1719" alt="Add all files and folders to git for Github" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/add-all-files-and-folders-to-git-for-github.jpg?resize=700%2C312" width="700" height="312" srcset="https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/add-all-files-and-folders-to-git-for-github.jpg?w=788&ssl=1 788w, https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/add-all-files-and-folders-to-git-for-github.jpg?resize=300%2C134&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Commit the folders and files to git

** Type in your console:

`git commit -m "Upload all new files"`

<img class="alignnone size-full wp-image-1720" alt="Commit all files and folders to git for Github" src="https://i1.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/commit-all-files-and-folders-to-git-for-github.jpg?resize=700%2C385" width="700" height="385" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/commit-all-files-and-folders-to-git-for-github.jpg?w=788&ssl=1 788w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/commit-all-files-and-folders-to-git-for-github.jpg?resize=300%2C165&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Get the url of your Github repository**

<img class="alignnone size-full wp-image-1721" alt="Get the Github repository url of your project" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/get-the-github-repository-url.jpg?resize=700%2C216" width="700" height="216" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/get-the-github-repository-url.jpg?w=788&ssl=1 788w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/get-the-github-repository-url.jpg?resize=300%2C93&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Add the url where the files must be uploaded/pushed

** Type in your console:

`git remote add origin https://github.com/raymonschouwenaar/sample-repo.git`

_replace the url with your repository url_

<img class="alignnone size-full wp-image-1722" alt="Add remote url of Github repository" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/add-remote-url-github-repository.jpg?resize=700%2C395" width="700" height="395" srcset="https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/add-remote-url-github-repository.jpg?w=788&ssl=1 788w, https://i1.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/add-remote-url-github-repository.jpg?resize=300%2C169&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

**Push all it all to your Github repository

** Type in your console:

`git push -u origin master`

<img class="alignnone size-full wp-image-1723" alt="Push your project to Github" src="https://i0.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/push-your-project-to-github-repository.jpg?resize=700%2C414" width="700" height="414" srcset="https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/push-your-project-to-github-repository.jpg?w=788&ssl=1 788w, https://i2.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/push-your-project-to-github-repository.jpg?resize=300%2C177&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

if you entered the code above, Github wil ask for your username and password. When you added your username it will ask for your password. By typing your password you won&#8217;t see anything apear. Just typ your password an hit enter. If you press a wrong letter or somthing just press a couple times on the backspace button.

**Now your project is in the Github repository!**

<img class="alignnone size-full wp-image-1724" alt="Your files are now on the Github repository" src="https://i1.wp.com/raymonschouwenaar.raymons.webfactional.com/wp-content/uploads/2014/03/your-files-are-now-on-the-github-repository.jpg?resize=700%2C506" width="700" height="506" srcset="https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/your-files-are-now-on-the-github-repository.jpg?w=788&ssl=1 788w, https://i0.wp.com/www.raymonschouwenaar.nl/wp-content/uploads/2014/03/your-files-are-now-on-the-github-repository.jpg?resize=300%2C217&ssl=1 300w" sizes="(max-width: 767px) 89vw, (max-width: 1000px) 54vw, (max-width: 1071px) 543px, 580px" data-recalc-dims="1" />

Congratulations! Your project is now on Github!

If there was something wrong? Or you have any problems with getting your project on Github, just fill in the comments and i will answer 🙂

Sharing = cool 🙂

&nbsp;