var app = app || {};

app.CommentView = Backbone.View.extend({
  className: 'comment-view',

  template: _.template('<h2>CommentView</h2><p><%=description%> | Likes: <%=likes%> | Date: <%=date%></p>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
