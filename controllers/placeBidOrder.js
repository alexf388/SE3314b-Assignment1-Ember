/**
 * Created by alex on 09/03/15.
 */
StockMarket.PlaceBidOrderController = Ember.ObjectController.extend({
    actions:{
        submit: function(){
            var company = this.get('model');
            var currentvolume = parseFloat(this.get('numberOfShares'));
            var currentprice = parseFloat(this.get('purchasePrice'));
            var link = this.get ('id');
            var sharetraded = 0;

            var sellstocks = company.get('sellOrders');
            console.log("sellstocks.get('length'):  ", sellstocks.get('length'));

            for (var i = 0 ; i < sellstocks.get('length');i++ ){
                //grab price and volume
                var tempvolume = parseFloat(sellstocks.objectAt(i).get('volume'));
                var tempprice = parseFloat(sellstocks.objectAt(i).get('price'));

                //if the prices are equal or higher
                if (tempprice == currentprice){
                    //set the current price with the new price
                    company.set('lastSale', currentprice );

                    //if sellorder has more shares than the bidorder
                    if(tempvolume > currentvolume){
                        alert("tempvolume > currentvolume");
                        var trade = tempvolume - currentvolume;

                        sellstocks.objectAt(i).set('volume', tempvolume - currentvolume);

                        sharetraded += trade;
                        currentvolume = 0;
                        break;
                    }
                    //else if the volume is exactly equal
                    else if(tempvolume == currentvolume){
                        alert ("tempvolume == currentvolume");
                        console.log("sellstocks: ", sellstocks);

                        sellstocks.objectAt(i).destroyRecord();

                        //var id = sellstocks.objectAt(i).get('id');
                        //sellstocks.removeObject(id);
                        console.log("sellstocks: ", sellstocks);

                        //added traded shares and reset input shares
                        sharetraded += currentvolume;
                        currentvolume = 0;

                        break;

                    }
                    //else if sell has less shares than the buy
                    else{
                        alert ("tempvolume < current volume");
                        sharetraded += tempvolume;
                        currentvolume= currentvolume - tempvolume;
                        sellstocks.objectAt(i).destroyRecord();
                    }

                }//end if statement
            }//end for loop

            if(currentvolume > 0) {
                alert ("currentvolume > 0 ");

                var newbuyorder;
                newbuyorder = this.store.createRecord('buy',{
                    companyid: link,
                    volume: currentvolume,
                    price:  this.get('purchasePrice')
                });

                this.store.find('post',link).then(function(post){
//                    post.get('bidOrders').addObject(newBuy);
//                    post.save();
                    newbuyorder.set('company',post);
                    newbuyorder.save();


                });
                //this.store.save();

                //company.save();



                //save sellorder
                //newbuyorder.save();

                //save data to company's sellOrders
                /*
                company = this.get('model');
                company.get('bidOrders').pushObject(newbuyorder);
                company.save();
                */
            }

            //update share volume
            company.set('shareVolume', parseFloat(company.get('shareVolume')) + parseFloat(sharetraded));

            //TODO: update change
            var change = parseFloat(company.get('lastSale')) - parseFloat(company.get('openPrice'));
            company.set('changeNet', change);
            var changePercentage = (change /parseFloat(company.get('openPrice')))*100;
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
            }

        },

        cancel:function(){
            this.transitionToRoute('posts');
        }

});