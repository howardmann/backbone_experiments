var app = app || {};

app.showView = Backbone.View.extend({
  el: '.container-races',

  render: function(){
    var template = _.template("<p>Name: <%=name%></p><p>Homeworld: <%=homeworld%></p><p>Description: <%=description%></p>");
    var output = template(this.model.toJSON());
    this.$el.append(output);
  }

});
