var app = app || {};

// Display each model on the page
app.indexView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click':'showRace'
  },

  showRace: function(){
    app.router.navigate("/races/"+this.model.get("id"), true);
  },

  render: function() {
    var output = this.$el.append(this.model.get("name"));
    $('.container-races').append(output);
  }

});
