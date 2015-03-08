/**
 * Created by alex on 07/03/15.
 */
<<<<<<< HEAD
CourseBlog.PostsController = Ember.ObjectController.extend({
    companyChosen: false,
=======
StockMarket.PostsController = Ember.ObjectController.extend({
    companyChosen : false,
>>>>>>> bbae5083417dd88422b1498a619dcd2467343912
    imageString: '',
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
            this.transitionToRoute('placeBidOrder',{queryParams:{company:company}});
        }   

    }
});