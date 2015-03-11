/**
 * Created by alex on 09/03/15.
 */
StockMarket.PlaceBidOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var newBuy;
            var volume = this.get('numberOfShares');
            var price = this.get('purchasePrice');
            var link = this.get('id');
            //var link = document.getElementById('link').textContent;

            //console.log("numberOfShares: ", volume);
            //console.log("price: ", price);
            //console.log("link: ", link);

            if (volume != null && price != null && link!= null){
                newBuy = this.store.createRecord('buy',{
                    companyid: link,
                    volume: volume,
                    price: price
                });
                console.log("link:", link);
                newBuy.save();

                var data = this.get('model')
                //console.log("data: ", data.objectAt(0).get('price'))
                console.log(data.get('length'))

                this.transitionToRoute('posts');
            }

        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});