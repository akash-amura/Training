window.App = new Backbone.Marionette.Application();
_.extend(App, {
	Collections: {},
	Models: {},
	Controllers: {},
	Routers: {},
	Layouts: {},
  Views:{
    Posts:{}
  },
	Constants: {},
	vent: _.extend({}, Backbone.Events),
	//base_url: "http://localhost:3000"
	base_url: ""
});
