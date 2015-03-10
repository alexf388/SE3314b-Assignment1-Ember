/**
 * Created by alex on 07/03/15.
 */

StockMarket.PostsController = Ember.ArrayController.extend({
    companyChosen : false,
    imageString: '',

    PositiveNet: false,
    NegativeNet: false,
    NeutralNet: false,


    //used for sorting table
    filter: '',

    filteredContent: function(){
        var companies = this.get('arrangedContent');

        return companies;
    }.property('arrangedContent'),
    //end: used for sorting table

    actions: {
        showThisShit: function (imageName) {
            this.set('companyChosen', true);
            var result = imageName;
            this.set('imageString', result);
        },

        lol: function (id) {
            //this function will do the trading before the marketByOrder/post_id will load
            console.log("LULZ");

            var store = this.store;
            var buys = store.find('buy').then(function(buys){
                return buys.filterBy('companyid', id)   ;
            });
            var sells = store.find('sell').then(function(sells){
                return sells.filterBy('companyid', id);
            });
            console.log("BUYS MOTHERFUCKER: ", buys);
            console.log("SELLS MOTHERFUCKER: ", sells);

        },


        showMoreShit: function(link){
            this.transitionToRoute('posts/marketByOrder');
        },


        //sort table action
        sortByVolume: function(property) {
            this.set('sortProperties', [property]);
            this.set('sortAscending', false);
        },
        sortByGainers: function(){
            this.set('sortProperties',["changeNet"]);
            this.set('sortAscending', false);
        },
        sortByLosers: function(){
            this.set('sortProperties',["changeNet"]);
            this.set('sortAscending', true);
        }
    }
});