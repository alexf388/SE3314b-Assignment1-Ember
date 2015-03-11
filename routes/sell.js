/**
 * Created by alex on 11/03/15.
 */
StockMarket.SellRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('sell', params.sell_id);
    }
});