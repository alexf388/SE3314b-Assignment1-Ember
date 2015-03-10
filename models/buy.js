/**
 * Created by alex on 09/03/15.
 */
StockMarket.Buy = DS.Model.extend({
    company:DS.belongsTo('Post'),
    volume: DS.attr(''),
    price: DS.attr('')

});

StockMarket.Buy.FIXTURES = [
    {
        company:1,
        volume: 10000,
        price: 3.00
    },
    {
        company:1,
        volume: 9999,
        price: 3.01
    },
    {
        company:1,
        volume: 3000,
        price: 5.00
    },
    {
        company:1,
        volume: 10000,
        price: 3.00
    }


];