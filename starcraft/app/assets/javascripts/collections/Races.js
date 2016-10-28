var app = app || {};

app.Races = Backbone.Collection.extend({
  url: "/races",
  model: app.Race
});
