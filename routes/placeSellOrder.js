/**
 * Created by alex on 10/03/15.
 */
StockMarket.PlaceSellOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("PlaceSellOrderRoute");
        return this.store.find('buy').then(function(units){
            return units;
        });
    }
});