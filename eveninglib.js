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

                Evening.repositoryAdd(this, attributes.name);
            },

            render: function() {
                var template = _.template(this.viewTemplate);
                var attributes = {};
                if(_.has(this, "model") && _.has(this.model, "attributes"))
                    attributes = this.model.attributes;
                this.$el.html(template(attributes));
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

        repositoryAdd: function(object, name, type) {
            if(_.isUndefined(object) || !_.isObject(object)) {
                console.error("Cannot add non object into repository");
                return false;
            }

            if(_.isUndefined(type)) {
                if(object instanceof this.View) {
                    type = "view";
                } else if(object instanceof this.Collection) {
                    type = "collection";
                }
            }

            if(_.isUndefined(type) || !_.isString(type)) {
                console.error("Could not add repository item of unknown type");
                console.error(object);
                return false;
            }

            if(_.isUndefined(name) || _.isNaN(name) || !_.isString(name)) {
                name = _.uniqueId(type);
            }

            if(_.has(this._repository[type], name)) {
                console.error(name + " already exists in the view repository");
                return false;
            }

            this._repository[type][name] = object;
            return true;
        },

        repositoryGet: function(type, name) {
            if(_.has(this._repository, type) && _.has(this._repository[type], name)) {
                return this._repository[type][name];
            }
            return false;
        }
    }
};