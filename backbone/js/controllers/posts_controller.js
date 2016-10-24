App.Controllers.postsController = Marionette.Controller.extend({

  initialize: function(options){
    this.mainRegion = options.mainRegion;
  },

  index: function(){
    console.log('in index');
    var postsCollection = new App.Collections.postsCollection();
    postsCollection.fetch().then(function(){
      console.log(postsCollection);
    });

    var layout = new App.Layouts.PostLayout();
    $(this.mainRegion).prepend(layout.render().el);
    var compositeView = new App.Views.Posts.postCompositeView({collection:postsCollection});
    $(this.mainRegion).append(compositeView.render().el);
  },

  show: function(id){
    console.log('in show '+id);
  }

});
