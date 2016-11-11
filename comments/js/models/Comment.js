var app = app || {};

var formatDate = function(date){
  return date.toLocaleDateString('en-AU',{hour: 'numeric', minute: 'numeric'});
};

app.Comment = Backbone.Model.extend({
  defaults: {
    description: 'description',
    date: formatDate(new Date())
  },

  updateComment: function(comment, time){
    var time = time.match(/\d{2}/g);
    var date = new Date();
    date.setHours(time[0],time[1]);
    this.set({'description': comment, 'date': formatDate(date)});
  }

});
