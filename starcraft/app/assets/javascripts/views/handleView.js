var app = app || {};

// Handle and loop through each model in the collection of app.races and pass on to the indexView to render
app.handleView = Backbone.View.extend({
  tagName: "li",

  render: function() {
    // loop through each model in the collection
    this.collection.each(function(model){
      var indexView = new app.indexView({model: model});
      indexView.render();
    });
  }

});
