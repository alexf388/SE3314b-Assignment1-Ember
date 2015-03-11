/**
 * Created by alex on 10/03/15.
 */
StockMarket.PlaceSellOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("PlaceBidOrderRoute");
        return this.store.find('buy');
    }
});