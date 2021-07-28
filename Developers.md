# branch
Every time we meet, a new RELEASE branch is created with the current date. For example, if today is 2021/07/27, then we would create a release-20210727 branch

# pull code
Choose the latest branch to develop on, not the main

# merge into main
Before each meeting, zejia liu will merge the code on the latest release branch into main, and after the meeting a new release branch will be created

# work space
As some students are not familiar with git, we will create a workspace directory and each student can only modify the contents of their own directory to prevent merging conflicts

# commit
We should have used eslint as the specification for the submission, but for convenience we just made our own stipulations. The stipulation is as follows:
```
   //for change the origion content:
   fix: {content}

   //for summit new contents:
   feat: {content}
```