var app = app || {};

app.Race = Backbone.Model.extend({
  urlRoot: "/races",

  defaults: {
    name: "race",
    homeworld: "homeworld",
    description: "description"
  }
});
