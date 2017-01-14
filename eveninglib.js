/* Evening.js - A light weight bundle to create elegant web applications
 * Copyright (C) 2016 Mika Nikkilä
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * http://eveningjs.org
 */

module.exports = function() {
    return {
        _repository: {
            view: {},
            collection: {}
        },

        _routes: {

        },

        Model: Backbone.Epoxy.Model.extend({

        }),

        Collection: Backbone.Collection.extend({

        }),

        View: Backbone.Epoxy.View.extend({
            initialize: function(attributes) {
                this.render();

                if(_.has(this.__proto__, "construct")) {
                    this.construct(attributes);
                }

                Evening.repository.add(this, attributes.name);
            },

            render: function() {
                var template = _.template(this.viewTemplate);
                var attributes = {};
                if(_.has(this, "model") && _.has(this.model, "attributes"))
                    attributes = this.model.attributes;
                this.$el.html(template(attributes));

                if(_.has(this.__proto__, "post_render")) {
                    this.post_render();
                }

                return this;
            }
        }),

        Router: Backbone.Router.extend({
            start: function(opts) {
                Backbone.history.start(opts);
            }
        }),

        run: function(app) {
            app();
        },

        repository: {
            add: function(object, name, type) {
                if(_.isUndefined(object) || !_.isObject(object)) {
                    console.error("Cannot add non object into repository");
                    return false;
                }

                if(_.isUndefined(type)) {
                    if(object instanceof Evening.View) {
                        type = "view";
                    } else if(object instanceof Evening.Collection) {
                        type = "collection";
                    }
                }

                if(_.isUndefined(type) || !_.isString(type)) {
                    console.error("Could not add repository item of unknown type");
                    console.error(object);
                    return false;
                }

                if(!_.has(Evening._repository, type)) {
                    Evening._repository[type] = {};
                }

                if(_.isUndefined(name) || _.isNaN(name) || !_.isString(name)) {
                    name = _.uniqueId(type);
                }

                if(_.has(Evening._repository[type], name)) {
                    console.error(name + " already exists in the view repository");
                    return false;
                }

                Evening._repository[type][name] = object;
                return true;
            },

            get: function(type, name) {
                if(_.has(Evening._repository, type) && _.has(Evening._repository[type], name)) {
                    return Evening._repository[type][name];
                }
                return false;
            }
        }
    }
};