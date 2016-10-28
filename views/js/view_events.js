console.log("View events");

var MovieInput = Backbone.View.extend({
  el: "#container-movieInput",
  initialize: function() {
  },
  // View event listeners
  events: {
    // "event selector: callback"
    "keyup #txtMovieTitle": "titleChange"
  },
  titleChange: function(e) {
    console.log(e);
    console.log("txtMovieTitle: " + $(e.target).val());
  }
});

$(document).ready(function(){

  var movieInput = new MovieInput();
});
