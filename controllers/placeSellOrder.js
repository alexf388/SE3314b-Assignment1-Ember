/**
 * Created by alex on 09/03/15.
 */

StockMarket.PlaceSellOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var newSell;
            var volume = this.get('numberOfShares');
            var price = this.get('purchasePrice');
            var link = this.get ('id');

            //data is buys
            var data = this.get('model');
            //var link = document.getElementById('link').textContent;

            //console.log("numberOfShares: ", volume);
            //console.log("price: ", price);
            //console.log("link: ", link);

            if (volume != null && price != null && link!= null){
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
                    //console.log("data: ", data.objectAt(i).get('companyid'))
                    if (data.objectAt(i).get('companyid') == link) {
                        //console.log("SAY YES MOTHERFUCKER")

                        //check if the price is equal to the price
                        if (data.objectAt(i).get('price') == parseFloat(this.get('purchasePrice'))){
                            //if it is equal, then we subtract the volume from each other

                            //if the buy volume is equal to the sell share volume
                            if (data.objectAt(i).get('volume') == parseFloat(this.get('numberOfShares'))) {
                                //destroy the sales, do not create bids
                                data.objectAt(i).destroyRecord();

                                //TODO: also need to update stock state summary

                                //transition back to posts
                                this.transitionToRoute('posts');

                            }
                            //if buy volume is bigger than the sell share volume
                            else if (data.objectAt(i).get('volume') > parseFloat(this.get('numberOfShares'))){
                                //if the sell volume is bigger than the buy volume
                                //do not create the buy object, but alter the sell volume
                                var newVolume =  data.objectAt(i).get('volume') - parseFloat(this.get('numberOfShares'));
                                data.objectAt(i).get('volume').set('volume', newVolume);

                                //TODO: need to update stock state summary

                                //transition back to posts
                                this.transitionToRoute('posts');

                            }
                            //if buy volume is smaller than the sell share volume
                            else if (data.object(i).get('volume') < parseFloat(this.get('numberOfShares'))){
                                //if the sell volume is less than the buys volume
                                //more buys than sells
                                //create new buy object with new volume, destroy the sell object
                                data.objectAt(i).destroyRecord();

                                var newVolume =  parseFloat(this.get('numberOfShares')) - data.objectAt(i).get('volume');

                                newSell = this.store.createRecord('sell',{
                                    companyid: link,
                                    volume: newVolume,
                                    price: price
                                });
                                newSell.save();

                                //TODO: need to update stock state summary

                                //transition back to posts
                                this.transitionToRoute('posts');
                            }

                        }

                    }
                    else{
                        newSell = this.store.createRecord('sell',{
                            companyid: link,
                            volume: volume,
                            price: price
                        });

                        newSell.save();
                    }

                }

            }

        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});