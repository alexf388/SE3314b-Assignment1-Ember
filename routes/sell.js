/**
 * Created by alex on 09/03/15.
 */
StockMarket.SellRoute = Ember.Route.extend({
    model: function() {
        console.log("FUCK EMBER");
        return this.store.find('sell');
        // "this.store" is the data store represented by the adapter
    }
});