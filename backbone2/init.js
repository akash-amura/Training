$(document).ready(function(){
  console.log(App);
  App.addInitializer(function(){

    this.controllers = {
      postsController: new App.Controllers.postsController({})
    };

    this.routers = {
      postRouter: new App.Routers.postRouter({controller: App.Controllers.postsController})
    };

  });
  App.start();
});
