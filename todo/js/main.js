// Model class
var ToDoItem = Backbone.Model.extend({
  // Sets default state and properties
  defaults: {
    name: 'name',
    quantity: 1,
    price: 0,
    subtotal: ''
  },

  // Custom functions to change above state
  updateSubTotal: function(){
    this.set({'subtotal': this.get('quantity') * this.get('price')});
  },

  addQuantity: function(){
    this.set({'quantity': this.get('quantity') + 1});
  },

  reduceQuantity: function(){
    this.set({'quantity': this.get('quantity') - 1});
  },

  // Function to call to destroy model
  removeItem: function(){
    this.destroy();
  }
});

// View class
var ToDoView = Backbone.View.extend({
  // Optional id for the div element
  id: 'todo-view',

  // Event listeners on classes within element calling on custom functions within the View class
  events: {
    'click .add':'addQuantity',
    'click .reduce': 'reduceQuantity',
    'click .remove': 'removeItem'
  },

  // Two way data binding which listen for changes to the model and either re-render the view or remove from DOM accordingly
  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },

  // Functions which trigger model methods based on event listeners above. Two way data binding mean any changes to model will trigger view to update
  addQuantity: function(){
    this.model.addQuantity();
  },

  reduceQuantity: function(){
    this.model.reduceQuantity();
  },

  removeItem: function(){
    this.model.removeItem();
  },

  // Underscore template helper which renders JSON attributes passed to it. Similar to ruby erb helpers and React JSX
  template: _.template("<p>Name: <%=name%> | Qty: <%=quantity%> | Price: $<%=price%> | Subtotal: $<%=subtotal%> </p><a href='#' class='add'>Add</a> | <a href='#' class='reduce'>Reduce</a> | <a href='#' class='remove'>Remove</a>"),

  // Render function which passes the Views model attributes to the template string and assigns to the view's default el div. Added updateSubTotal() method to dynamically update state on rendering. Return this at the end of render to enable chaining
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    this.model.updateSubTotal();
    return this;
  },

  // When model is destroyed this function will remove element from DOM
  remove: function(){
    this.$el.remove();
  }

});

// Instantiate a new model passing in custom state attributes
var toDoItem1 = new ToDoItem();
toDoItem1.set({'name':'beer','quantity': 3, 'price': 20.00});

var toDoItem2 = new ToDoItem({'name':'chips','quantity': 1, 'price': 5.00});

// Instantiate a new view class passing in the relevant model and call render to set the views .el value
var toDoView1 = new ToDoView({model: toDoItem1});
toDoView1.render();

var toDoView2 = new ToDoView({model: toDoItem2});
toDoView2.render();

// Wait for html to load and then append elements to #app div
$(document).ready(function(){
  $('#app').append(toDoView1.el, toDoView2.el);
});
