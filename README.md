<p align="center">
  <img src="https://user-images.githubusercontent.com/33925073/144180579-049ed1d2-5dc9-456e-b7c3-e40bc93ef6b2.jpg" />
</p>
<br/>
<h1 align="center">Oh boy &#128580;<br/>Another React Starter ?</h1>
<br/><br/><br/>

# About the project
**_"Another React Starter"_** is my own set of extra-configuration and extra-libraries, which boosts start of **React** projects. So the main goal for this project - is an **initial-config time saver**
(for me or anybody who is interested in using this boilerplate).

This repo is inspired by similar project named [react-starter-boilerplate](https://github.com/TheSoftwareHouse/react-starter-boilerplate) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br/><br/>

# How to start

Please be aware, that this project is configured for usage of [yarn](https://yarnpkg.com/) package manager (all commands listed below uses yarn not npm !)

To start the development, run:

```
//create a folder for a new project
mkdir new-project 

//enter into the folder
cd new-project 

// clone another-react-starter repo
git clone https://github.com/mkotajny/another-react-starter.git  

// remove .git folder from the cloned repo
sudo rm -r .git

// initialize your git repo for your project
git init

// set remote to your github repo
git remote add origin [url to your github repo]
git remote -v

// make a first commit to your repo
git add .
git commit -m 'initial commit'
git push origin master

// install the boilerplate for your new app
yarn install

// run the boilerplate
yarn start
```

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
