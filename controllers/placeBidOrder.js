/**
 * Created by alex on 09/03/15.
 */
StockMarket.PlaceBidOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var data = this.get('model');
            var volume = this.get('numberOfShares');
            var price = this.get('purchasePrice');
            var link = this.get('id');
            var tradeWasMade = false;

            console.log("data: ", data);
            console.log("datalength: ", data.get('length'));
            var newBuy = this.store.createRecord('buy',{
                companyid: link,
                volume: volume,
                price: price
            });
            newBuy.save();
            console.log("What is this life");

            var sells = this.store.find('sell');
            console.log("sells: ", sells);


            if (volume != null && price != null && link!= null && data.get('length') != null){
                console.log("What");

                console.log("data length: ", data.get('length'));

                for (var i = 0 ; i < data.get('length'); i++)
                {
                    console.log("data: ", data.objectAt(i).get('companyid'));
                    if (data.objectAt(i).get('companyid') == link) {
                        console.log("SAY YES MOTHERFUCKER");

                        //check if the price is equal to the price
                        if (data.objectAt(i).get('price') == parseFloat(this.get('purchasePrice'))){
                            //if it is equal, then we subtract the volume from each other

                            data.objectAt(i).destroyRecord();
                            newBuy.destroyRecord();
                            console.log("TRADE IS MADE IN PLACEBIDORDER");
                            //this.transitionToRoute('posts');
                            alert("A trade was made!");
                            break;
                        }

                    }
                    /*
                    else{
                        newBuy.save();
                        console.log("YOUR MOM");
                        this.transitionToRoute('posts');
                    }
                    */

                }

                //transition to routes
                this.transitionToRoute('posts');
            }
            else {
                this.transitionToRoute('posts');
            }


        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});