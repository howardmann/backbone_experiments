var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    "":"index",
    "races":"index",
    "races/:id":"show",
    "*splat":"error"
  },

  index: function(){
    $('.container-races').html("");
    var handleView = new app.handleView({collection: app.races});
    handleView.render();
    console.log("index");
  },

  show: function(id){
    $('.container-races').html("");
    var race = app.races.get(id);
    var showView = new app.showView({model: race});
    showView.render();
    console.log("show");
  },

  error: function(){
    console.log("error");
  }

});
