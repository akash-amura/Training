App.Collections.postsCollection = Backbone.Collection.extend({
  url: "http://jsonplaceholder.typicode.com/posts",
  model: App.Models.postModel
});
