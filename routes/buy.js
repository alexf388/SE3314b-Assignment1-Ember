/**
 * Created by alex on 11/03/15.
 */
StockMarket.BuyRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('buy', params.buy_id);
    }
});