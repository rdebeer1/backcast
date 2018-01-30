var VideoPlayerView = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, 'select', function(video) {
      this.current(video);
    });
  },
  
  current: function(video) {
    this.render(video);
  },
  
  render: function(video) {
    if (video) {
      this.$el.html(this.template(video.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
