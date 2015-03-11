/**
 * Created by alex on 09/03/15.
 */
StockMarket.Buy = DS.Model.extend({
    company:DS.belongsTo('Post'),
    volume: DS.attr(''),
    price: DS.attr('')

});
