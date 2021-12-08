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

The starter contains many parts. Some of them are components, some of them are libraries. I've decided to call them as "**modules**" .

<table>
	<thead>
		<tr>
			<th style="border: 1px solid">Category</th>
			<th style="border: 1px solid">Module</th>
			<th style="border: 1px solid">Description</th>
			<th style="border: 1px solid">Module Doc</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td style="border: 1px solid">-</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144419384-1deb6fde-61f3-48e3-9e5f-d57ac4530028.png" />
				<br/>
				<a href="https://reactjs.org" target="_blank"><b>React</b></a>
			</td>
			<td style="border: 1px solid">
				Core of the starter - a JavaScript library for building user interfaces
			</td>
			<td style="border: 1px solid">-</td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144420826-006d41f8-72f0-4280-bcd4-56735c04c705.png" />
				<br/>
				<a href="https://www.typescriptlang.org" target="_blank"><b>Typescript</b></a>
			</td>
			<td style="border: 1px solid">
				Strongly typed programming language that builds on JavaScript
			</td>
			<td style="border: 1px solid"><a href="#typescript">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144421230-cd9bc574-0005-4a4e-94fa-0fa23ae8f271.png" />
				<br/>
				<a href="https://prettier.io" target="_blank"><b>Prettier</b></a>
			</td>
			<td style="border: 1px solid">
				An opinionated code formatter with support for JS, JSX, Typescript and many other languages
			</td>
			<td style="border: 1px solid"><a href="#prettier">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">Code Quality</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/144421573-68893864-75c0-4c94-9251-70f7647ae62c.png" />
				<br/>
				<a href="https://eslint.org" target="_blank"><b>ESLint</b></a>
			</td>
			<td style="border: 1px solid">
				A code analysis tool for "linting" - identifying errors or problematic patterns in your  JavaScript code
			</td>
			<td style="border: 1px solid"><a href="#eslint">redirect</a></td>
		</tr>
		<tr>
			<td style="border: 1px solid">-</td>
			<td style="border: 1px solid; text-align: center">
				<img src="https://user-images.githubusercontent.com/33925073/145224397-411537f8-c539-4d21-8444-a632c679ca1a.png" />
				<br/>
				<a href="https://react.i18next.com/" target="_blank"><b>I18next</b></a>
			</td>
			<td style="border: 1px solid">
				An Internationalization framework for React / React Native which is based on i18next.
			</td>
			<td style="border: 1px solid"><a href="#i18n">redirect</a></td>
		</tr>
	</tbody>
</table>

<br/><br/><a id="typescript" ></a>

# Typescript

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>tsconfig.json</b> file (located in the root folder of the project).

<br/><br/><a id="prettier" ></a>

# Prettier

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.prettierc</b> file (located in the root folder of the project).

<br/>

## Using of Prettier in the project

<br/>

### Manually

via terminal run command, which should fix or prettier issues in the project files.:

```
yarn format:fix
```

... the "format:fix" script is defined in the "package.json" file.

Recommendation: install also **"Prettier" plugin** in your IDE (e.g. "VS code"), where you may configure the plugin for run prettier on every save of changes on any project file. For the "VS code" - the configuration (for the mentioned plugin) is already added into ".csCode" folder in the project, but to use this config - you must install the Prettier plugin.

<br/>

## Automatic run with the pre-commit hook

Prettier automatically runs (fixes prettier issues in the project files) on every attempt of sending commit to the git repository.

<br/><br/><a id="eslint" ></a>

# ESLint

## Rules customization

The easiest way of customization of Typescript/Prettier/ESLint rules is to edit <b>.eslintrc.js</b> file (located in the root folder of the project).

<br/>

## Using of ESLint in the project

<br/>

### Manually

via terminal run command, which should fix or ESlint issues in the project files.:

```
yarn lint
```

... which shows (doesn't fix !) ESlint issues in the code
OR

```
yarn validate
```

... which does both (prettier and linting): fixes Prettier issues and shows or ESlint issues

... the "format:fix" script is defined in the "package.json" file.

<br/>

## Automatic run with the pre-commit hook

ESLint automatically runs on every attempt of sending commit to the git repository, so the hook **prevents developer from committing** changes with unresolved ESlint-issues in the code.

<br/><br/><a id="i18n" ></a>

# i18next

## How it works

UI Texts (in different languages) are located in the /src/i18n/translations folder. To check how the texts are invoked in the application find any component with invocation of _useTranslate_ hook, for example:

```
t('MAIN.WELCOME');
```

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
