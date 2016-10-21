App.Controllers.postsController = Marionette.Controller.extend({

  initialize: function(options){
  },

  index: function(){
    console.log('in index');
    var postsCollection = new App.Collections.postsCollection();
    postsCollection.fetch().then(function(){
      console.log(postsCollection);
    });
  },

  show: function(id){
    console.log('in show '+id);
  }
});
