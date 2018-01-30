var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.empty();
    
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player'),
    }).render();
    
    new VideoListView({
      collection: this.videos,
      el: this.$('.list'),
    }).render();
    
    return this;
  },
  
  
  
  template: templateURL('src/templates/app.html')

});
