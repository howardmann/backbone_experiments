var app = app || {};

$(document).ready(function(){
  console.log("doc loaded");
  // Create new races collection and fetch from server
  app.races = new app.Races();
  app.races.fetch().done(function(){

    app.router = new app.Router();
    Backbone.history.start();

  });

});
