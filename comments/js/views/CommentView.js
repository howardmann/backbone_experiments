var app = app || {};

app.CommentView = Backbone.View.extend({
  className: 'comment-view',

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events: {
    'click .remove': 'removeComment',
    'click .submit-comment': 'updateDescription'
  },

  updateDescription: function(e){
    e.preventDefault();
    var text = this.$('.edit-comment').val();
    this.model.updateDescription(text);
  },

  removeComment: function(){
    this.remove();
  },

  template: _.template('<h2>CommentView</h2><p><%=description%> | Date: <%=date%></p><button class="remove">Remove</button><form><input type="text" class="edit-comment" placeholder="description"></input><input type="submit" class="submit-comment"></input></form>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
