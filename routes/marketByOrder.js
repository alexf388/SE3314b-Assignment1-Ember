/**
 * Created by alex on 09/03/15.
 */
StockMarket.PostsMarketByOrderRoute = Ember.Route.extend({
    model: function() {
        console.log("This course sucks");
        var store = this.store;
        return Ember.RSVP.hash({
            buys: store.find('buy').then(function(buys){
                return buys.filterBy('companyid','1');
            }),
            sells: store.find('sell').then(function(sells){
                return sells.filterBy('companyid','2');
            })
        });
    }

});