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
        /*
        buyStock: function (company) {
            console.log("fucking company:", company);
            this.transitionToRoute('placeBidOrder',{queryParams:{company:"astring"}});
        },
        */
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