console.log("Movie list");

// Create Movie model with defaults
var Movie = Backbone.Model.extend({});

// Create Movies collection
var Movies = Backbone.Collection.extend({});

// Create MovieListView
var MovieListView = Backbone.View.extend({
  // loops through and assigns values to movies before passing on to function below to display single movies
  render: function(){
    _.each(this.collection.models, this.handleMovie, this);
  },
  handleMovie: function(movie){
    var childView = new MovieItemView({model: movie});
    childView.render();
  }
});

// Create MovieItemView
var MovieItemView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("Movie: <%=title%>, year: <%=year%>"),

  render: function(){
    var attributes = this.model.toJSON();
    var htmlOutput = this.$el.append(this.template(attributes));
    $("#container-movies").append(htmlOutput);
    return this;
  }
});

// <div id="container-movies"></div>

// Execute and seed data
$(document).ready(function(){
  var movies = new Movies([
    {title: "Star Wars", year: 1972},
    {title: "Indiana Jones", year: 1985},
    {title: "Goodfellas", year: 1990},
    {title: "Casino", year: 1995},
    {title: "The Departed", year: 2007},
    {title: "Shuter Island", year: 2011},
  ]);

  // For debugging: Check if one display works
  var jaws = new Movie({title:"jaws",year:1980});
  console.log(jaws.attributes);

  var jawsView = new MovieItemView({model: jaws});
  jawsView.render();

  var movieListView = new MovieListView({collection:movies});
  console.log(movieListView);
  movieListView.render();

});
