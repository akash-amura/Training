App.Routers.postRouter = Backbone.Marionette.AppRouter.extend({

  appRoutes:{
    "index":"index",
    "post/:id":"show"
  }
});
