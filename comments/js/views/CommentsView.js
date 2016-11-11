var app = app || {};

app.CommentsView = Backbone.View.extend({
  className: 'comments-view',

  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('remove', this.updateView, this);
  },

  events: {
    'click .sort': 'updateView',
    'click .remove': 'removeComment'
  },

  updateView: function(){
    this.$el.html('');
    this.render();
  },

  removeComment: function(comment){
    this.collection.remove(comment)
  },

  addOne: function(comment){
    var commentView = new app.CommentView({model: comment});
    this.$('.comments-view-content').append(commentView.render().el);
  },

  template: _.template('<h2>CommentsView</h2><button class="sort">SORT</button><div class="comments-view-content"></div>'),

  render: function(){
    this.$el.prepend(this.template);
    this.collection.sort().each(this.addOne,this);
    return this;
  }
});
