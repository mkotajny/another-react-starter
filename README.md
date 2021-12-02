<p align="center">
  <img src="https://user-images.githubusercontent.com/33925073/144449499-b6f4ef21-d442-4ec6-998b-47dab3665dbd.png" />
</p>
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
//create a folder for your project
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

// replace the content of README.md with the content dedicated for your project
```

<br/><br/>

# Modules in the starter

The starter contains many parts. Some of them are components, some of them are libraries. I've decided to named them "**modules**" .

<table>
<thead>
	<tr>
		<th style="border: 1px solid">Category</th>
		<th style="border: 1px solid">Module</th>
		<th style="border: 1px solid">Description</th>
    <th style="border: 1px solid">More info</th>
	</tr>
</thead>
<tbody>
  <tr>
		<td style="border: 1px solid">-</td>
		<td style="border: 1px solid">
			<img src="https://user-images.githubusercontent.com/33925073/144419384-1deb6fde-61f3-48e3-9e5f-d57ac4530028.png" />
			<br/>
			<a href="https://reactjs.org" target="_blank"><b>React</b></a>
    	</td>
		<td style="border: 1px solid">Core of the starter - a JavaScript library for building user interfaces</td>
    <td style="border: 1px solid" rowspan=3><a href="#anchor-customization">Customization of code-quality rules</a></td>
	</tr>
	<tr>
		<td style="border: 1px solid" rowspan=3>Code Quality</td>
		<td style="border: 1px solid">
			<img src="https://user-images.githubusercontent.com/33925073/144420826-006d41f8-72f0-4280-bcd4-56735c04c705.png" />
			<br/>
			<a href="https://www.typescriptlang.org" target="_blank"><b>Typescript</b></a>
    </td>
		<td style="border: 1px solid">Strongly typed programming language that builds on JavaScript</td>
	</tr>
  <tr>
		<td style="border: 1px solid">
			<img src="https://user-images.githubusercontent.com/33925073/144421230-cd9bc574-0005-4a4e-94fa-0fa23ae8f271.png" />
			<br/>
			<a href="https://prettier.io" target="_blank"><b>Prettier</b></a>
    </td>
		<td style="border: 1px solid">An opinionated code formatter with support for JS, JSX, Typescript and many other languages</td>
	</tr>
  <tr>
		<td style="border: 1px solid">
			<img src="https://user-images.githubusercontent.com/33925073/144421573-68893864-75c0-4c94-9251-70f7647ae62c.png" />
			<br/>
			<a href="https://eslint.org" target="_blank"><b>ESLint</b></a>
    </td>
		<td style="border: 1px solid">A code analysis tool for "linting" - identifying errors or problematic patterns in your  JavaScript code</td>
    <td style="border: 1px solid">-</td>
	</tr>
</tbody>
</table>
<br/>

<div id="anchor-customization" />

# Customization of code-quality rules

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit config files (located in the root folder of the project):

<ul>
  <li>For <b>Typescript</b> - edit rules in <b>tsconfig.json</b> file</li>
  <li>For <b>Prettier</b> - edit rules in <b>.prettierc</b> file</li>
  <li>For <b>ESLint</b> - edit rules in <b>.eslintrc.js</b> file (in the "rules" node)</li>
</ul>

<br/><br/>

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
