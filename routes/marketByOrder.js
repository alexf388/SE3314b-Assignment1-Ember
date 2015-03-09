/**
 * Created by alex on 09/03/15.
 */
StockMarket.MarketByOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("sigh");
        return  this.store.find('posts.marketByOrder') ;
        // "this.store" is the data store represented by the adapter
    }
});