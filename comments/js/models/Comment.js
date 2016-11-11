var app = app || {};

app.Comment = Backbone.Model.extend({
  defaults: {
    description: 'description',
    date: new Date().toLocaleDateString('en-US',{hour: 'numeric', minute: 'numeric'})
  }
});
