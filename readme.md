# web-template

Minimalist starting point for web project using pug (formerly Jade), sass (with .sass extension) and watch. 

## How to Run
- `npm install` to install all dependencies.
- `grunt` to compile template files and start `watch`.

## How it's Made
- `npm init` to setup project.

Dependencies:
```
npm install —save-dev gulp to install gulp
npm install —save-dev gulp to install gulp-pug
npm install —save-dev gulp to install gulp-sass
npm install --save-dev gulp-watch
```

### `--save-dev` versus `--save`
There are (at least) two types of package dependencies you can indicate in your `package.json` files:

1. Those packages that are required in order to use your module are listed under the "dependencies" property. Using npm you can add those dependencies to your `package.json` file this way:
`npm install --save packageName`.
2. Those packages required in order to help develop your module are listed under the "devDependencies" property. These packages are not necessary for others to use the module, but if they want to help develop the module, these packages will be needed. Using npm you can add those devDependencies to your `package.json` file this way:
`npm install --save-dev packageName`.
