console.log("List King");

// Validate form value input
// Cache value of search value
// Create model of list item
// Display list item
// Add event listener on list item to remove


// Item model
var Item = Backbone.Model.extend({
  defaults: {
    description: "N/A"
  },
  initialize: function(){
    console.log("New item added " + this.get("description"));
  }
});

// Item view
var ItemView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click.todo': 'remove'
  },

  remove: function(){
    console.log("removed");
    item = this.$el.text();
    this.$el.remove();
    $('#done').append('<li>'+item+'</li>');
  },

  render: function (){
    var htmlOutput = this.$el.append(this.model.get('description'));
    $("#container-list").append(htmlOutput);
    $("#add-item").val('');
    return this;
  }
});

// Form input to listen for search item
var ListInput = Backbone.View.extend({
  el: "#container-form",

  events: {
    "submit":"add"
  },

  add: function(e){
    e.preventDefault();
    var description = $("#add-item").val();
    if (description === ""){
      console.log("blank");
      return false;
    } else {
      var newItem = new Item({description: description});
      var newItemView = new ItemView({model: newItem, className: 'todo'});
      newItemView.render();
    }
  }
});


$(document).ready(function(){
  var listInput = new ListInput();

});
