/**
 * Created by alex on 09/03/15.
 */

StockMarket.PlaceSellOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){

            var volume = this.get('numberOfShares');
            var price = this.get('purchasePrice');
            var link = this.get ('id');
            var tradeWasMade= false;

            //data is buys
            var data = this.get('model');

            var newSell = this.store.createRecord('sell',{
                companyid: link,
                volume: volume,
                price: price
            });
            newSell.save();
            console.log("datalength: ", data.get('length'));

            if (volume != null && price != null && link!= null && data.get('length') != null){
                /*
                newSell = this.store.createRecord('sell',{
                    companyid: link,
                    volume: volume,
                    price: price
                });

                //console.log("link:", link);
                newSell.save();

                this.transitionToRoute('posts');
                */

                for (var i = 0 ; i < data.get('length'); i++)
                {
                    console.log("hello motherfucker");
                    //console.log("data: ", data.objectAt(i).get('companyid'))
                    if (data.objectAt(i).get('companyid') == link) {
                        console.log("SAY YES MOTHERFUCKER")

                        //check if the price is equal to the price
                        if (data.objectAt(i).get('price') == parseFloat(this.get('purchasePrice'))){
                            //if it is equal, then we subtract the volume from each other

                            data.objectAt(i).destroyRecord();
                            newSell.destroyRecord();
                            console.log("TRADE IS MADE IN PLACESELLORDER");
                            alert ("A trade was made!");
                            //this.transitionToRoute('posts');
                            break;
                        }

                    }
                    /*
                    else{
                        newSell.save();
                        console.log("FUCK THIS SHIT" );
                        this.transitionToRoute('posts');
                    }
                    */

                }


                this.transitionToRoute('posts');
            }
            else{
                this.transitionToRoute('posts');
            }


        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});