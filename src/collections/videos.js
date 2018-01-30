var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        maxResults: 5,
        part: 'snippet',
        q: query,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true',
      }
    });
  },
  parse: function(response) {
    return response.items;
  }
});
