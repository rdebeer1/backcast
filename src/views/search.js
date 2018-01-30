var SearchView = Backbone.View.extend({
  
  events: {
    'click button': 'searchColl',
    'keyup input': 'keyUpHandler'
  },
  
  keyUpHandler: function(e) {
    if (e.keyCode === 13) {
      this.searchColl();
    }
  },
  
  searchColl: function() {
    this.collection.search(this.$('input').val().trim());
    this.$('input').val('');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
