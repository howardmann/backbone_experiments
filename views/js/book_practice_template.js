console.log("Backbone book view using template");

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
  tagName: 'li',
  // bookTemplate: _.template($("#template-book").html()),
  bookTemplate: _.template("Title: <%=title%> by Author: <%=author%>"),


  initialize: function(){
    console.log("New book view instantiated");
    console.log(this.el);
  },

  render: function(){
    var attributes = this.model.toJSON();
    var htmlOutput = (this.$el.append(this.bookTemplate(attributes)));

    $('#container-book').append(htmlOutput);

    return this
  }
});

$(document).ready(function(){
  var bookPotter = new Book({title: "Harry Potter", author: "JK Rowling"});
  var bookViewPotter = new BookView({model:bookPotter, className: 'hot'});
  bookViewPotter.render();

  var bookKing = new Book({title: "The Thing", author: "Stephen King"});
  var bookViewKing = new BookView({model:bookKing});
  bookViewKing.render();

});
