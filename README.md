# Eveningjs

Light weight bundle to create elegant web applications. Evening is designed for small
projects or prototyping ideas.

## Installing
Install using npm:

    npm install evening --save
    
... or use it as a dependency in your package.json file
    
## Getting started

To get started you might want to check [evening-todo](https://github.com/mjnikkila/evening-todo) - 
an example app following [TodoMVC](https://github.com/tastejs/todomvc/blob/master/app-spec.md) guidelines.

## Why?

To make your work straight forward we solved a bunch of common problems for you.

* Clean html templates. Yes! there are no need to do brackets or extra attributes. Just pure html.
* Easy two-way-bindings
* Nesting
* Bundling
* Easy developement with webpack-dev-server

## What's baked in?

Evening is not state of the art solution with all the fancy stuff like real js
frameworks. It is built with rock solid technologies proven in production
and having long term support.

Evening is built with following libraries and then is bundled using webpack.

* jQuery
* Backbone stack (backbonejs & underscorejs)
* Epoxyjs for elegant data bindings
* webpack and it's webpack-dev-server

## Structure

    ├── app
    │   ├── bundle.js          # Automatically created by bundler process
    ├── src                    # Source files (place your code here)
    │   ├── app                
    │   │   ├── context        # Contains models and collections called context
    │   │   │   ├── view       # Contains views and templates
    │   │   │   ├── app.js     # Your app initialization file
    ├── init.js                # Evening init file
    ├── package.json           # npm package file
    ├── README.md              # This file
    
## Documentation

For up to date documentation and tutorials see [eveningjs.org](http://eveningjs.org)

  