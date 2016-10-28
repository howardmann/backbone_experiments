console.log("Fruit salad list");

// Create Fruit model
var Fruit = Backbone.Model.extend({});
// Create Fruits collection
var Fruits = Backbone.Collection.extend({});
// Create FruitItemView
var FruitItemView = Backbone.View.extend({
  tagName: 'li',
  render: function(){
    var htmlOutput = this.$el.append(this.model.get("name"));
    $("#container-fruit").append(htmlOutput);
    return this;
  }
});
// Create FruitListView
var FruitListView = Backbone.View.extend({
  render: function(){
    _.each(this.collection.models, this.handleFruit, this );
    return this;
  },
  handleFruit: function(el){
    var childFruitView = new FruitItemView({model: el});
    childFruitView.render();
  }
});

// Create a Route class
  // Create routes object  with custom routes
var Route = Backbone.Router.extend({
  routes: {
    "":"index",
    "fruit/:name":"show",
    "fruit/:name/:location":"showMultiple",
    "password":"redirect"
  },
  index: function(){
    var fruitListView = new FruitListView({collection:fruits});
    fruitListView.render();
  },
  show: function(name){
    $("#container-fruit").html("<h1>Show: "+name+" </h1>");
  },
  showMultiple: function(name,location){
    $("#container-fruit").html("<h1>Show: "+name+" from "+location+"</h1>");
  },
  redirect: function(){
    console.log("trigger");
    this.navigate("",{
      trigger: true
    });
  }
});

var fruits;
// Execute code
$(document).ready(function(){
  var apple = new Fruit({name: "apple"});
  var appleView = new FruitItemView({model: apple});
  appleView.render();

  fruits = new Fruits([
    {name: "banana"},
    {name: "orange"},
    {name: "pear"},
    {name: "strawberry"},
    {name: "lychee"}
  ]);
  console.log(fruits);
  fruits.forEach(function(el){
    console.log(el.get("name"));
  });

  // var fruitListView = new FruitListView({collection:fruits});
  // fruitListView.render();

  console.clear();

  // Instantiate a route after doc ready
    // Call Backbone.history.start() after instantiating
  var router = new Route();
  Backbone.history.start();



});
