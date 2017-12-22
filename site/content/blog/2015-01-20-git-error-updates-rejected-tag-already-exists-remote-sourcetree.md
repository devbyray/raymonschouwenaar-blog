---
title: 'Git error: Updates were rejected because tag already exists in the remote! (Sourcetree)'
author: Raymon Schouwenaar
type: post
date: 2015-01-20T08:20:33+00:00
excerpt: |
  A while ago i worked at a big project with a big team. But for Git i use Sourcetree. And when i wanted to push my changes, i got this error:
  ! [rejected] folder-name/folder-name-1.3 -> folder-name/folder-name-1.3 (already exists)
  updating local tracking ref 'refs/remotes/origin/master'
  error: failed to push some refs to 'https://username@git.domain.com/gitrepo.git'
  hint: Updates were rejected because the tag already exists in the remote.
url: /git-error-updates-rejected-tag-already-exists-remote-sourcetree/
featured_image: /wp-content/uploads/2015/01/error-git-push-tag-825x510.jpg
dsq_thread_id:
  - 3437431852
categories:
  - Git
tags:
  - Git
  - Github
  - Sourcetree
  - Tags

---
&nbsp;

A while ago i worked at a big project with a big team. But for Git i use Sourcetree. And when i wanted to push my changes, i got this error:

    ! [rejected] folder-name/folder-name-1.3 -> folder-name/folder-name-1.3 (already exists)
    
    updating local tracking ref 'refs/remotes/origin/master'
    error: failed to push some refs to 'https://username@git.domain.com/gitrepo.git'
    hint: Updates were rejected because the tag already exists in the remote.
    
    

So it seems that i was trying to push an tag that already exists in the remote repository. But how you can avoid this? This solution worked for me!

When you want to push your changes with Sourcetree. Un-select the &#8220;Push all tags&#8221; option. So you avoid to get this error.

If you have any questions or comments on this solution? Or did it helped you? Please add them below! 🙂

&nbsp;