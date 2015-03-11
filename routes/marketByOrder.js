/**
 * Created by alex on 09/03/15.
 */
StockMarket.PostsMarketByOrderRoute = Ember.Route.extend({
    model: function(params) {
        console.log("This course sucks");
        var store = this.store;
        var countArray = [1,2,3,4,5,6,7,8,9,10];
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