var app = app || {};

app.CommentsFormView = Backbone.View.extend({
  className: 'comments-form-view',

  events: {
    'click .add-comment': 'addComment'
  },

  addComment: function(e){
    e.preventDefault();
    var $text = this.$('input[type="text"]');
    if ($text.val().length < 1) {return;};

    var comment = new app.Comment({'description':$text.val()});
    this.collection.add(comment);
    $text.val('');
  },

  template: _.template('<h2>CommentsFormView</h2><form><input type="text" placeholder="type comment"></input><input type="submit" class="add-comment"></input></form>'),

  render: function(){
    this.$el.html(this.template);
    return this;
  }
});
