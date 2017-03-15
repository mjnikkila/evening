var assert = require("assert"),
    should = require("should"),
    expect = require('chai').expect;

describe('Evening.js test suite tests', function () {

    describe('Test mocha test setup', function () {
        it('has document', function () {
            var div = document.createElement('div');
            expect(div.nodeName).eql('DIV');
        })
    });

    describe("Evening.js tests", function() {

        require("backbone-relational");
        require("backbone.epoxy");
        var EveningLib = require("../../eveninglib.js");
        global.Evening = new EveningLib();

        describe("Evening.Model", function() {
            it("should be possible to create new model object", function() {
                var c_test = require("context/test");
                var testModel = new c_test.model({name: "John Dog", "weight": "82kg"});
                testModel.should.be.an.instanceOf(Object);
            });
        });

        describe("Evening.View", function() {
            it("should be automatically stored upon construct when name attribute given", function() {
                var v_test = require("view/general/general");
                var testView = new v_test({
                    name: "testView",
                    el: "body"
                });

                var testView2 = Evening.repository.get("view", "testView");

                testView2.should.be.an.instanceOf(Evening.View);
            });
        });
    });
});