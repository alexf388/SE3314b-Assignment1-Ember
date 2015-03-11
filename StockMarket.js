/**
 * Created by Abdelkader on 2015-01-31.
 */
StockMarket = Ember.Application.create();

StockMarket.ApplicationSerializer = DS.LSSerializer.extend();
StockMarket.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'StockMarket'
});

StockMarket.PostAdapter = DS.FixtureAdapter.extend();


StockMarket.Buy = DS.LSAdapter.extend();
StockMarket.Sell = DS.LSAdapter.extend();








