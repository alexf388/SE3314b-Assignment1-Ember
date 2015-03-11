/**
 * Created by alex on 10/03/15.
 */
StockMarket.PlaceBidOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("PlaceBidOrderRoute");
        return this.store.find('sell').then(function(units) {
            return units;
        });
    }
});