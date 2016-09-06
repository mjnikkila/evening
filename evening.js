require("backbone-relational");
require("backbone.epoxy");

global.Evening = {
    run: function(app) {
        app();
    },

    Model: Backbone.Epoxy.Model.extend({

    }),

    Collection: Backbone.Collection.extend({

    }),

    View: Backbone.Epoxy.View.extend({
        initialize: function() {
            this.render();
        },

        render: function() {
            var template = _.template(this.viewTemplate);
            var attributes = {};
            if(_.has(this, "model") && _.has(this.model, "attributes"))
                attributes = this.model.attributes;
            this.$el.html(template(attributes));
            return this;
        }
    })
};