/**
 * Created by alex on 09/03/15.
 */
StockMarket.BuyRoute = Ember.Route.extend({
    model: function() {
        console.log("FUCK EMBER");
        return this.store.find('buy');
        // "this.store" is the data store represented by the adapter
    }
});