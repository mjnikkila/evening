var model = Evening.Model.extend({
    defaults: {
        name: "",
        weight: ""
    }
});

var collection = Evening.Collection.extend({
    model: model
});

module.exports = {
    model: model,
    collection: collection
};