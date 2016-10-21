App.Views.Posts.postCompositeView = Backbone.Marionette.CompositeView.extend({
  template: JST["post-composite-template"],
  itemView: App.Views.Posts.postItemView
});
