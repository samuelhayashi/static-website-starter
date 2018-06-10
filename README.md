# Website Project Starter Kit

This is a starter kit intended to be used for any kind of static website.

***

## Requirements
This project have some requirements you need to meet in order to compile it. First of all, you need NodeJS in order to run JavaScript through the console/terminal, you can go to the [NodeJS](http://nodejs.org) site and follow the installation process. After you get the `node` command in the console you will have the node package manager `npm` as well. Now you need to install Gulp with the following command.

```
npm install -g gulp
```
Gulp is the one that will run all the compilation, watchers and others tasks. To learn more about Gulp and all it's magical abilities, check out the official site [here.](https://gulpjs.com/)

***

## Install
In order to start using the project you need to clone it to your computer. You can also download the zip version.
```
git clone [Repo URL]
```

After you have it on you computer, you need to go in the console to the project folder and execute the following command to gather all the dependencies.
```
npm install
```

***

## How to use
Once you have the project open you should be able to open your terminal and type gulp in the command line and magic will take place.
```
gulp
```

Here are all the commands you can run.

* **default**: Compile and watch for changes
* **styles**: Compile the [Stylus](http://stylus-lang.com/) styles to CSS and copy to the build folder
* **scripts**: Compile the ES6 scripts to JavaScript (ES5) using [Babel](https://babeljs.io/) and copy to the build folder
* **vendors**: Copy the vendor scripts to the build folder
* **nunjucks**: Compile the Nunjucks template files to HTML and copy to the build folder
* **images**: Copy the newer images to the build folder
* **favicon**: Copy the newer favicon to the build folder
* **watch**: Watch for any changes on the each section

The `gulp` command is the best choice for you most likely. Go to the project folder in the console and execute `gulp`, it will compile the project and start a server that will refresh every time you change something in the code. Gulp will be watching for changes and will tell you how to access the project from local and public url. Every browser that point to that url will be auto refreshed.

Cheers 👍🏼
