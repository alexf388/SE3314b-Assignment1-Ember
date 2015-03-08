/**
 * Created by alex on 07/03/15.
 */

StockMarket.PostsController = Ember.ObjectController.extend({
    companyChosen : false,
    imageString: '',

    PositiveNet: false,
    NegativeNet: false,
    NeutralNet: false,

    actions: {
        showThisShit: function (imageName) {
            this.set('companyChosen', true);
            //var shortNameTemp = shortName;
            //var imageFormat = ".png";
            //var result = shortNameTemp.concat(imageFormat);
            var result = imageName;
            //console.log("shortName: ", shortName);
            this.set('imageString', result);
        },
        buyStock: function (company) {
            console.log(company);
            this.transitionToRoute('placeBidOrder',{queryParams:{company:"astring"}});
        }   

    }
});