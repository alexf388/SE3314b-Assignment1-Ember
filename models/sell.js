/**
 * Created by alex on 09/03/15.
 */
StockMarket.Sell = DS.Model.extend({
    company: DS.belongsTo('post'),
    companyid: DS.attr(''),
    volume: DS.attr(''),
    price: DS.attr('')

});