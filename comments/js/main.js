var app = app || {};

$(document).ready(function() {
  app.comments = new app.Comments([
    {description: 'Poo and wee'},
    {description: 'Wee'},
    {description: 'Vomit'},
    {description: 'Apple'}
  ]);

  app.commentsFormView = new app.CommentsFormView({
    collection: app.comments
  });

  app.commentsView = new app.CommentsView({
    collection: app.comments
  });


  $('#app').append(app.commentsFormView.render().el);
  $('#app').append(app.commentsView.render().el);
});
