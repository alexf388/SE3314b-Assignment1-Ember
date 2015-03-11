StockMarket.BuysRoute = Ember.Route.extend({
    model: function() {
        return  this.store.find('buy') ;
        // "this.store" is the data store represented by the adapter
    }
});