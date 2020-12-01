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

{{< alert icon="👉" text="To avoid errors, do not initialize the new repository with README, license, or `gitignore` files." >}}

1. Create a new repository on [GitHub](https://github.com/) (or [GitLab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/)):

    {{< img-simple src="create-new-repo.png" alt="Create New Repository" >}}

    [Create new repository →](https://github.com/new)

2. Initialize your local Doks site directory as a Git repository:

    {{< btn-copy text="npm run init" >}}

    ```bash
    npm run init
    ```

3. Add the files in your new local repository. This stages them for the first commit:

    {{< btn-copy text="git add ." >}}

    ```bash
    git add .
    ```

4. Commit the files that you've staged in your local repository:

    {{< btn-copy text="git commit -m \"First commit\"" >}}

    ```bash
    git commit -m "First commit"
    ```

5. At the top of your GitHub repository's Quick Setup page, click <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> to copy the remote repository URL:

    {{< img-simple src="copy-remote-repository-url-quick-setup.png" alt="Copy Remote Repository URL Quick Setup" >}}

6. Set the new remote — paste the remote repository URL:

    ```bash
    git remote add origin <remote repository URL>
    ```

7. Verify the new remote URL:

    {{< btn-copy text="git remote -v" >}}

    ```bash
    git remote -v
    ```

8. Push the changes in your local repository to GitHub:

    {{< btn-copy text="git push origin main" >}}

    ```bash
    git push origin main
    ```

### Create new Netlify site

{{< img-simple src="create-new-netlify-site.png" alt="Create New Netlify Site" >}}

[New site from Git →](https://app.netlify.com/start)

1. Connect to Git provider

2. Pick a repository

3. Build options, and deploy!

## Deploy to other hosts

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/).
