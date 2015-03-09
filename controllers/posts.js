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
    sortProperties: ['id'],
    theFilter: "",

    checkFilterMatch: function(theObject, str) {
        var field, match;
        match = false;
        for (field in theObject) {
            if (theObject[field].toString().slice(0, str.length) === str) {
                match = true;
            }
        }
        return match;
    },

    filterPeople: (function() {
        return this.get("arrangedContent").filter((function(_this) {
            return function(theObject, index, enumerable) {
                if (_this.get("theFilter")) {
                    return _this.checkFilterMatch(theObject, _this.get("theFilter"));
                } else {
                    return true;
                }
            };
        })(this));
    }).property("theFilter", "sortProperties"),
    //end: used for sorting table

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
        },
        //sort table action
        sortBy: function(property) {
            this.set("sortProperties", [property]);
        }

    }
});