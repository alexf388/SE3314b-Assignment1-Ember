/**
 * Created by alex on 09/03/15.
 */
StockMarket.PostsMarketByOrderRoute = Ember.Route.extend({
    model: function(params) {
        console.log("This course sucks");
        var store = this.store;
        console.log(params.post_id);
        return Ember.RSVP.hash({
            buys: store.find('buy').then(function(buys){
                return buys.filterBy('companyid', params.post_id);
            }),
            sells: store.find('sell').then(function(sells){
                return sells.filterBy('companyid',params.post_id);
            })
        });
    }

});