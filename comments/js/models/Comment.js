var app = app || {};

app.Comment = Backbone.Model.extend({
  defaults: {
    description: 'description',
    likes: 0,
    date: new Date().toDateString()
  }
});
