var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        maxResults: 5,
        q: query,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true,
      }
    });
  },
  parse: function(response) {
    console.log(response.items);
    return response.items;
  }
});