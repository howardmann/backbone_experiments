console.log("Fundie");

// Create Project model
  // Defaults name, amount, author
  // Initialize log model created

// Create Projects collection
  // Link to mode: Project
  // Seed with project data

// Create Projects view
  // Create render function to display collection


var Project = Backbone.Model.extend({
  defaults: {
    name: "name",
    author: "author",
    amount: 0,
    current: true
  },

  initialize: function() {
    this.on("change", function(model){
      console.log("project changed");
    });
  }
});

var Projects = Backbone.Collection.extend({
  model: Project,
  initialize: function(){
    this.on('add',function(model){
      console.log("Project added: " + model.get("name"));
    });
  }
});

// Create view for list of models
var ProjectListView = Backbone.View.extend({
  render: function(){
    _.each(this.collection.models, this.handleProject, this);
    return this;
  },
  handleProject: function(project){
    var childProjectView = new ProjectView({model: project});
    childProjectView.display();

    console.log("ProjectListView: "+project.get("name"));
  }
});

var ProjectView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("Project: <%=name%> by <%=author%>"),

  // Binds views to changes in the model
  initialize: function(){
    this.model.on("change", this.change, this);
  },

  events: {
    "click": "viewClicked"
  },

  viewClicked: function(){
    console.log("Clicked: "+this.model.get("name"));
  },

  display: function(){
    console.log("Render: " + this.model.get("name"));
    var attributes = this.model.toJSON();
    var htmlOutput = (this.$el.append(this.template(attributes)));
    $('.container-projects').append(htmlOutput);
    return this;
  },

  change: function(){
    var htmlOutput = this.template(this.model.toJSON());
    this.$el.text(htmlOutput);
  }
});

$(document).ready(function(){
  var project1 = new Project({name: "banana", author:"joe"});
  var project2 = new Project({name: "peach", author:"billy"});
  var projects = new Projects();
  projects.add(project1);
  projects.add([
    {name: "pear", author: "bill"},
    {name: "cow", author: "ken", amount: 100},
    {name: "table", author: "jen", amount: 50}
  ]);

  // var project1View = new ProjectView({model:project1});
  // project1View.display();
  // var project2View = new ProjectView({model:project2});
  // project2View.display();

  project1.set({name: "changed"});
  project1.set({name: "changed again"});
  project1.set({name: "bananaboat"});


  // Create a new view passing in a colleciton of models as a property called collection
  var projectListView = new ProjectListView({collection:projects});
  // Call the render function which executes code
  projectListView.render();

  project1.set({name: "only once"});

});
