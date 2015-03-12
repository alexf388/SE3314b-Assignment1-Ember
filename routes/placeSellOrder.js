/**
 * Created by alex on 11/03/15.
 */
StockMarket.PlaceSellOrderRoute = Ember.Route.extend({
    model: function(params) {
        console.log("PlaceSellOrderRoute");
        return  this.store.find('post', params.post_id) ;
        // "this.store" is the data store represented by the adapter
    }
});