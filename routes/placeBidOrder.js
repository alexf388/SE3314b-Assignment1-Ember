/**
 * Created by alex on 11/03/15.
 */
StockMarket.PlaceBidOrderRoute = Ember.Route.extend({
    model: function(params) {
        console.log("PlaceBidOrderRoute");
        return  this.store.find('post', params.post_id) ;
        // "this.store" is the data store represented by the adapter
    }
});