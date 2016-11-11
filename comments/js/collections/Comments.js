var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,

  comparator: function(item){
    return item.get('description').toUpperCase();
  }
});
