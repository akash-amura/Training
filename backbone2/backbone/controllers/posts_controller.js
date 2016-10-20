App.Controllers.postsController = Marionette.Controller.extend({

  initialize: function(options){
    this.views = {};
    this.mainRegion = options.mainRegion;
  },

  index: function(){
    var layout = new App.Layouts.PostLayout();
    $(this.mainRegion).prepend(layout.render().el)
  },
  
});
