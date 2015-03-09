/**
 * Created by alex on 09/03/15.
 */

StockMarket.PlaceSellOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var newSell;
            var volume = this.get('numberOfShares');
            var price = this.get('purchasePrice');
            var link = document.getElementById('link').textContent;
            //console.log("numberOfShares: ", volume);
            //console.log("price: ", price);
            //console.log("link: ", link);

            if (volume != null && price != null && link!= null){
                newSell = this.store.createRecord('sell',{
                    link: link,
                    volume: volume,
                    price: price
                });
                console.log("newSell: ", newSell);
                newSell.save();
                this.transitionToRoute('posts');
            }

        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});