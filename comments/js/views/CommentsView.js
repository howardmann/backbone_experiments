var app = app || {};

app.CommentsView = Backbone.View.extend({
  className: 'comments-view',

  events: {
    'click .sort': 'updateView'
  },

  updateView: function(){
    this.$el.html('');
    this.render();
  },

  initialize: function(){
    this.collection.on('add', this.addOne, this);
  },

  addOne: function(comment){
    var commentView = new app.CommentView({model: comment});
    this.$el.append(commentView.render().el);
  },

  template: _.template('<h2>CommentsView</h2><button class="sort">SORT</button>'),

  render: function(){
    this.$el.prepend(this.template);
    this.collection.sort().each(this.addOne,this);
    return this;
  }
});
