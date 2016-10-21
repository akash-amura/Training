App.Controllers.postsController = Marionette.Controller.extend({

  initialize: function(options){
    this.mainRegion = options.mainRegion;
  },

  index: function(){
    console.log('in index');
    var postsCollection = new App.Collections.postsCollection();
    postsCollection.fetch().then(function(){
      //console.log(postsCollection);
    });

    var myModel = new App.Models.postModel({title:"xyz",body:"abc"});
    console.log(myModel.toJSON());
    var layout = new App.Layouts.PostLayout();
    //console.log(layout.render().el);
    var itemView = new App.Views.Posts.postItemView({model:myModel});
    console.log(itemView.render().el);
    $(this.mainRegion).prepend(layout.render().el);
    $(this.mainRegion).append(itemView.render().el);
  },

  show: function(id){
    console.log('in show '+id);
  }
});
