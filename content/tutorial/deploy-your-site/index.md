---
title: "6. Deploy Your Site"
description: "Deploy your Doks site to Netlify or any other static web host."
lead: "Deploy your Doks site to Netlify or any other static web host."
date: 2020-11-30T14:28:08+01:00
lastmod: 2020-11-30T14:28:08+01:00
draft: false
images: []
menu: 
  tutorial:
    parent: "tutorial"
weight: 080
toc: true
---

## Deploy to Netlify

Continuous Deployment (CD) works by connecting a Git repository to a Netlify site and keeping the two in sync. Netlify will run the Doks build command and deploy the result whenever you push to your Git repo.

### Set up Git repository

Set up your Git repository in 8 steps.

#### 1. Create a new repository

{{< alert icon="👉" text="To avoid errors, do not initialize the new repository with README, LICENSE, and .gitignore files." >}}

Create a new repository on [GitHub](https://github.com/) (or [GitLab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/)):

{{< img-simple src="create-new-repo.png" alt="Create New Repository" >}}

[Create new repository →](https://github.com/new)

#### 2. Initialize your local directory

Initialize your local Doks site directory as a Git repository:

{{< btn-copy text="npm run init" >}}

```bash
npm run init
```

#### 3. Add your local files

Add the files in your new local repository. This stages them for the first commit:

{{< btn-copy text="git add ." >}}

```bash
git add .
```

#### 4. Commit your local files

Commit the files that you've staged in your local repository:

{{< btn-copy text="git commit -m \"First commit\"" >}}

```bash
git commit -m "First commit"
```

#### 5. Copy your remote repository URL

At the top of your GitHub repository's Quick Setup page, click the copy icon:

{{< img-simple src="copy-remote-repository-url-quick-setup.png" alt="Copy Remote Repository URL Quick Setup" >}}

#### 6. Set the new remote

Set the new remote — replace `<remote repository URL>` with yours:

```bash
git remote add origin <remote repository URL>
```

#### 7. Verify the new remote

Verify the new remote:

{{< btn-copy text="git remote -v" >}}

```bash
git remote -v
```

#### 8. Push local changes

Push the changes in your local repository to GitHub:

{{< btn-copy text="git push origin main" >}}

```bash
git push origin main
```

### Create new Netlify site

Create your new Netlify site in 3 steps.

{{< img-simple src="create-new-netlify-site.png" alt="Create New Netlify Site" >}}

[New site from Git →](https://app.netlify.com/start)

#### 1. Connect to Git provider

#### 2. Pick a repository

#### 3. Build options, and deploy!

## Deploy to other hosts

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/).
