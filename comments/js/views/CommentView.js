var app = app || {};

app.CommentView = Backbone.View.extend({
  className: 'comment-view',

  initialize: function(){
    this.model.on('change', this.render, this);
  },

  events: {
    'click .remove': 'removeComment',
    'click .show-edit': 'showEditComment',
    'click .submit-comment': 'updateComment',
    'click .like': 'likeOne'
  },

  removeComment: function(){
    this.remove();
    this.model.destroy();
  },

  showEditComment: function(){
    var time = new Date(this.model.get('date')).toLocaleTimeString('en-AU', {hour12:false, hour: 'numeric', minute: 'numeric'});

    this.$('form').toggle();
    this.$('input[type="time"]').val(time);
  },

  updateComment: function(e){
    e.preventDefault();
    var text = this.$('.edit-description').val();
    var time = this.$('.edit-time').val();
    if (time.length < 1 || text.length < 1) {return;};
    this.model.updateComment(text, time);
    this.model.save();
  },

  likeOne: function(){
    this.model.likeOne();
    this.model.save();
    this.$('.like').hide();
  },

  template: _.template('<h2>CommentView</h2><p><%=description%> | Likes: <%=likes%> | Date: <%=date%></p><button class="remove">Remove</button><button class="show-edit">Edit</button><button class="like">Like</button><form class="show-edit-form" style="display:none;"><input type="text" class="edit-description" placeholder="description"></input><input type="time" placeholder="wat" class="edit-time"></input><input type="submit" class="submit-comment"></input></form>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
