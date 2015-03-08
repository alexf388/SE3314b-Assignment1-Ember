/**
 * Created by Abdelkader on 2015-02-01.
 */
StockMarket.PostsRoute = Ember.Route.extend({
    model: function() {
     return  this.store.find('post') ;
     // "this.store" is the data store represented by the adapter
    }
});