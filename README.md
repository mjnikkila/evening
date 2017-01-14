# Evening.js

A light weight bundle to create elegant web applications. Evening is designed for small
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
* Easy development with webpack-dev-server

## What's baked in?

Evening is not a framework, but it can evolve as such. It bundles rock solid technologies proven in production
and having long term support.

Evening.js bundles and uses following libraries.

* [jQuery](https://jquery.com)
* Backbone stack ([Backbone.js](http://backbonejs.org) & [Underscore.js](http://underscorejs.org))
* [Backbone-relational](http://backbonerelational.org) for relating models
* [Epoxyjs](http://epoxyjs.org) for elegant data bindings
* [Webpack](https://webpack.github.io) and it's webpack-dev-server

## Application structure

    ├── app                    # Contains your production files
    │   ├── bundle.js          # Automatically created by building process
    ├── src                    # Source files (place your code here)
    │   ├── app
    │   │   ├── context        # Contains models and collections called context
    │   │   ├── view           # Contains views and templates
    │   │   ├── app.js         # Your app initialization file
    │   ├── lib                # Reserved for external libraries
    ├── init.js                # Evening.js init file
    ├── package.json           # npm package file

## Documentation

For up to date documentation and tutorials see [eveningjs.org](http://eveningjs.org)

## License

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

See LICENSE.txt for more details