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
    var myModel2 = new App.Models.postModel({title:"def",body:"abc"});

    var myCollection = new App.Collections.postsCollection();
    myCollection.add([myModel,myModel2]);

    console.log(myModel.toJSON());
    var layout = new App.Layouts.PostLayout();
    $(this.mainRegion).prepend(layout.render().el);
    //console.log(layout.render().el);
    //var itemView = new App.Views.Posts.postItemView({model:myModel});
    //console.log(itemView.render().el);
    //$(this.mainRegion).append(itemView.render().el);
    var compositeView = new App.Views.Posts.postCompositeView({collection:postsCollection});
    console.log(compositeView);
    console.log(compositeView.render().el);
    $(this.mainRegion).append(compositeView.render().el);
  },

  show: function(id){
    console.log('in show '+id);
  }
});
