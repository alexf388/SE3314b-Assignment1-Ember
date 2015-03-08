/**
 * Created by Abdelkader on 2015-02-01.
 */
// We create a model of type CourseBlog.Posts
StockMarket.Post= DS.Model.extend({
    name: DS.attr('string'),
    imageName: DS.attr('string'),
    link: DS.attr('string'),
    openPrice: DS.attr('number'),
    lastSale: DS.attr('number'),
    changeNet: DS.attr('number'),
    changeNetSymbol: DS.attr('string'),
    shareVolume: DS.attr('number')

    /*
    ,ChangeNet: function() {
        return this.get('changeNet') == 4;
    }.property('changeNet')
    */
});

//original FIXTURES provided by Ouda
/*
StockMarket.Post.FIXTURES = [
    {
        id: 1,
        name: "Microsoft Corporation (MSFT)",
        imageName: "images/microsoft.png",
        link:"MSFT",
        openPrice: 42.59,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 0
    },
    {
        id: 2,
        name: "Apple Inc. (AAPL)",
        link:"AAPL",
        imageName: "images/apple.png",
        openPrice: 121.62,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 0
    },
    {
        id: 3,
        name: "Facebook, Inc. (FB)",
        link:"FB",
        imageName: "images/facebook.png",
        openPrice: 74.98,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 0
    },
    {
        id: 4,
        name: "Cisco Systems, Inc.",
        imageName: "images/cisco.png",
        link:"CISCO",
        openPrice: 27.41,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 0
    },
    {
        id: 5,
        name: "Intel Corporation",
        imageName: "images/intel.png",
        link:"INTEL",
        openPrice: 0.55,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 0
    }
];

*/

//test data for FIXTURES, for testing sorting stock state summary
StockMarket.Post.FIXTURES = [
    {
        id: 1,
        name: "Microsoft Corporation (MSFT)",
        imageName: "images/microsoft.png",
        openPrice: 42.59,
        lastSale: 43.59,
        changeNet: 1.00,
        changeNetSymbol: "images/up.png",
        shareVolume: 1000
    },
    {
        id: 2,
        name: "Apple Inc. (AAPL)",
        imageName: "images/apple.png",
        openPrice: 121.62,
        lastSale: 120.62,
        changeNet: -1.00,
        changeNetSymbol: "images/down.png",
        shareVolume: 750
    },
    {
        id: 3,
        name: "Facebook, Inc. (FB)",
        imageName: "images/facebook.png",
        openPrice: 74.98,
        lastSale: 74.99,
        changeNet: 0.01,
        changeNetSymbol: "images/up.png",
        shareVolume: 750
    },
    {
        id: 4,
        name: "Cisco Systems, Inc.",
        imageName: "images/cisco.png",
        openPrice: 27.41,
        lastSale: 27.45,
        changeNet: 0.04,
        changeNetSymbol: "images/up.png",
        shareVolume: 500
    },
    {
        id: 5,
        name: "Intel Corporation",
        imageName: "images/intel.png",
        openPrice: 0.55,
        lastSale: 0.55,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        shareVolume: 100
    }
];
