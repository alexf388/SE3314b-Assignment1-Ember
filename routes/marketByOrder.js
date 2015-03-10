/**
 * Created by alex on 09/03/15.
 */
StockMarket.PostsMarketByOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("This course sucks");
        var store = this.store;
        return Ember.RSVP.hash({
            buys: store.find('buy'),
            sells: store.find('sell')
        });
    }

});