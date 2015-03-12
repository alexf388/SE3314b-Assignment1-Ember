/**
 * Created by alex on 09/03/15.
 */

StockMarket.PlaceSellOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var company = this.get('model');
            var currentvolume = parseFloat(this.get('numberOfShares'));
            var currentprice = parseFloat(this.get('purchasePrice'));
            var link = this.get ('id');
            var sharetraded = 0;

            var buystocks = company.get('bidOrders');
            console.log("buystocks.get('length'):  ", buystocks.get('length'));

            for (var i = 0 ; i < buystocks.get('length');i++ ){
                //grab price and volume
                var tempvolume = parseFloat(buystocks.objectAt(i).get('volume'));
                var tempprice = parseFloat(buystocks.objectAt(i).get('price'));

                //if the prices are equal or higher
                if (tempprice == currentprice){
                    //set the current price with the new price
                    company.set('lastSale', currentprice );

                    //if buyer has more shares than seller
                    if(tempvolume > currentvolume){
                        alert("tempvolume > currentvolume");
                        var trade = tempvolume - currentvolume;

                        buystocks.objectAt(i).set('volume', tempvolume - currentvolume);

                        sharetraded += trade;
                        currentvolume = 0;
                        break;
                    }
                    //else if the volume is exactly equal
                    else if(tempvolume == currentvolume){
                        alert ("tempvolume == currentvolume");
                        console.log("buystocks, ", buystocks)

                        buystocks.objectAt(i).destroyRecord();

                        //var id = buystocks.objectAt(i).get('id');
                        //buystocks.removeObject(id);

                        console.log("buystocks, ", buystocks)

                        //added traded shares and reset input shares
                        sharetraded += currentvolume;
                        currentvolume = 0;

                        break;

                    }
                    //else if buy has less shares than sell
                    else{
                        alert ("tempvolume < current volume");
                        sharetraded += tempvolume;
                        currentvolume= currentvolume - tempvolume;
                        buystocks.objectAt(i).destroyRecord();
                    }

                }//end if statement
            }//end for loop

            if(currentvolume > 0) {
                alert ("currentvolume > 0 ");

                var newsellorder;
                newsellorder = this.store.createRecord('sell',{
                    companyid: link,
                    volume: currentvolume,
                    price:  this.get('purchasePrice')
                });

                this.store.find('post',link).then(function(post){
//                    post.get('bidOrders').addObject(newBuy);
//                    post.save();
                    newsellorder.set('company',post);
                    newsellorder.save();

                });
                //this.store.save();
                //company.save();



                //save sellorder
                /*
                newsellorder.save();

                //save data to company's sellOrders
                company = this.get('model');
                company.get('sellOrders').pushObject(newsellorder);
                company.save();
                */
            }

            //update share volume
            company.set('shareVolume', parseFloat(company.get('shareVolume'))+ parseFloat(sharetraded));

            //TODO: update change
            var change = parseFloat(company.get('lastSale')) - parseFloat(company.get('openPrice'));
            company.set('changeNet', change);
            var changePercentage = (change / parseFloat(company.get('openPrice')))*100;
            company.set('changePercent', changePercentage);

            //if to see if the change is positive, negative, or neutral to change pictures
            if (change > 0 ){
                company.set('changeNetSymbol', "images/up.png");
            }
            else if (change < 0 ){
                company.set('changeNetSymbol', "images/down.png");
            }
            else if (change == 0 ){
                company.set('changeNetSymbol', "images/noChange.png");
            }

            //go back to stock state summary table
            this.transitionToRoute('posts');

        },

        cancel:function(){
            this.transitionToRoute('posts');
        }
    }
});