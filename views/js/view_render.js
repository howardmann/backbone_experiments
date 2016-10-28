// Create movie model
var Movie = Backbone.Model.extend();

// Create movie view
// HM. Think of the backbone view as simply the displayContent callback we used in Ajax HM: MIND BLOWN
var MovieView1 = Backbone.View.extend({
  template: _.template($("#template-movie").html()),

  initialize: function(options){
    console.log("MovieView initialize");
    console.log(this.$el); // references an empty jQuery selected div
  },
  // Is a function you call to display HTML on page
  // HM MIND BLOWN: Within backbone JS source, render doesn't do anything at all, it is simply an anonymous function which you could call with anything else you wanted. Purpose is merely for standardization
  render: function(){
    console.log("MovieView render");
    // Append text of model title to empty jQuery div

    // Option 1:Using string concatenation
    // var htmlOutput = (this.$el.append("Title: "+this.model.get("title"))).text();

    // Option 2:Using underscore templates (refer to index page with script type=text/template placeholder)
    var htmlOutput = this.template(this.model.toJSON());

    // Replace text of html div container-movie with the new appended div
    $("#container-movie").append(htmlOutput);

    // By returning this we can use chaining of this view object
    return this;
  }
});

// Execute code in within document ready function
$(document).ready(function(){
  var movie = new Movie({title: "Lion King"});
  var movieView1 = new MovieView1({ model: movie, el: $("#container-movie")});
  // Chain functions because render returns this
  movieView1.render().$el.append(" - Great Movie");

});
