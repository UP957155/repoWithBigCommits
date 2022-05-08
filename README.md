# Repository with big commits

This repository is part of the academic research project from University of Portsmouth.

Responsible authors: 

- Josef Picha, Software Engineering Bsc, Final Year, University of Portsmouth

- Alistair Julnes, Software Engineering Bsc, Final Year, University of Portsmouth

Contact email: up957155@myport.ac.uk

## Pre-requirements

- basic knowledge of the git rebase process

- installed git on your machine

- basic knowledge of the JavaScript language

## Clone repository

To clone repository into your machine use the command:

```bash

git clone https://github.com/UP957155/repoWithSmallCommits.git
cd repoWithSmallCommits

```

## Start rebase process

First please ensure yourself that you have 2 branches inside the repository by running this command:

```bash

git branch

```

You should see 2 branches inside the terminal: One called "main" and second called "newBranch". You also should be currently located inside the "main" branch.

Now ensure yourself that the "main" branch is up to date with the latest changes. Run this command:

```bash

git pull

```

You should see the message "Already up to date" in the terminal.

Once the "main" branch is up to date you can start the rebase process.

Go to the "newBranch" branch. Use this command:

```bash

git checkout newBranch

```

Ensure yourself again that you are located inside the "newBranch" branch. (optional)

```bash

git branch

```

Now you are ready to start the rebase process. Run command below and start recording your time:

```bash

git rebase -i main

```

!!!IF ANY COMPLICATIONS DURING THE PROCESS JUST RUN COMMAND BELOW AND START AGAIN!!!

```bash

git rebase --abort

```

!!!IF YOU SUCCESSFULLY RESOLVED ALL CONFLICTS PLEASE DO NOT PUSH ANY CHANGES. ONLY CLOSE THE REPOSITORY WITHOUT PUSHING ANY CHANGES!!!

Once you are done feel free to delete the repository from your machine.

Enjoy the challenge!!!


