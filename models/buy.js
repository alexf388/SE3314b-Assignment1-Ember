/**
 * Created by alex on 09/03/15.
 */
StockMarket.Buy = DS.Model.extend({
    companyid: DS.attr(''),
    volume: DS.attr(''),
    price: DS.attr('')

});

StockMarket.Buy.FIXTURES = [
    {
        companyid: 1,
        volume: 10000,
        price: 3.00
    },
    {
        companyid: 1,
        volume: 9999,
        price: 3.01
    },
    {
        companyid: 1,
        volume: 3000,
        price: 5.00
    },
    {
        companyid: 2,
        volume: 10000,
        price: 3.00
    }


];