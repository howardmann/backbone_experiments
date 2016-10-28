console.log("Backbone book view");

// Create a Book Model class
  // Set default params
  // Initialize message to log book being created

// Create a Book View class
  // Link to book model
  // Set el as #container-book
  // Create render function which displays book Title and author to screen
  // Refactor to use template

// Within document ready execute following
  // Instantiate a new book model
  // Instantiate a new book view
  // Render the book view

var Book = Backbone.Model.extend({
  defaults: {
    title: "N/A",
    author: "N/A"
  },
  initialize: function(){
    console.log("New book model instantiated");
  }
});

var BookView = Backbone.View.extend({
  el: $('#container-book'),
  initialize: function(){
    console.log("New book view instantiated");
  },
  render: function(){
    var htmlOutput = "<p>Title: " + this.model.get("title") + " by Author: " + this.model.get("author") + "</p>";
    console.log(htmlOutput);
    this.$el.append(htmlOutput);
    return this
  }
});

$(document).ready(function(){
  var bookPotter = new Book({title: "Harry Potter", author: "JK Rowling"});
  var bookViewPotter = new BookView({model:bookPotter});
  bookViewPotter.render();

  var bookKing = new Book({title: "The Thing", author: "Stephen King"});
  var bookViewKing = new BookView({model:bookKing});
  bookViewKing.render();



});
