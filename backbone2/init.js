$(document).ready(function(){
  console.log(App);
  _.extend(App,{

    initialize: function(){
      this.controllers = {
        postsController: new App.Controllers.postsController({mainRegion:"#mainRegion"})
      };

      this.routers = {
        postRouter: new App.Routers.PostRouter({controller: App.Controllers.postsController})
      };

      Backbone.history.start({pushState:true});
    }
    
  });

  App.start();
});
