// Create movie model
var Movie = Backbone.Model.extend({
  defaults: {
    rating: "NR"
  },
  initialize: function(){
    console.log("Movie Model created");
  }
});

// Create movie view
var MovieView1 = Backbone.View.extend({
  //model:
  tagName: "span",
  className: "important",
  //el:
  //container:
  //myValue

  initialize: function(options){ // Options arg represents {key1: value1, key2: value2} we pass in to the instantiated object
    console.log("Movie view initialize");
    console.log(this.model);
    console.log(this.tagName);
    console.log(this.className);
    console.log(this.el);
    console.log(this.$el);
    console.log(options.myValue);
  }
});

// Execute code in within document ready function
$(document).ready(function(){
  var movie = new Movie({title: "Lion King"});
  var movieview1 = new MovieView1({
    model: movie, tagName: "li", className: "critical", myValue: "Some value",
    el: $('#container-movie')
  });


});
