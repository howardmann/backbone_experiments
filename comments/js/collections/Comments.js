var app = app || {};

app.Comments = Backbone.Collection.extend({
  model: app.Comment,

  localStorage: new Store("backbone-todo"),
  
  comparator: function(item){
    return item.get('description').toUpperCase();
  }
});
