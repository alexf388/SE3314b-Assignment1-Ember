/**
 * Created by alex on 09/03/15.
 */
StockMarket.PlaceSellOrderController = Ember.ObjectController.extend({
    actions:{
        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});