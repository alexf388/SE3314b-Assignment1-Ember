/**
 * Created by Abdelkader on 2015-02-01.
 */
// We create a model of type CourseBlog.Posts
StockMarket.Post= DS.Model.extend({
    //id: DS.attr(''),
    companyid: DS.attr(''),
    name: DS.attr('string'),
    link: DS.attr('string'),
    imageName: DS.attr('string'),
    openPrice: DS.attr('number'),
    lastSale: DS.attr('number'),
    changeNet: DS.attr('number'),
    changeNetSymbol: DS.attr('string'),
    changePercent: DS.attr('number'),
    shareVolume: DS.attr('number'),
    textColor: DS.attr('string')

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
        changePercent: 0.00,
        shareVolume: 0,
        textColor:"text-warning"
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
        changePercent: 0.00,
        shareVolume: 0,
        textColor: "text-warning"
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
        changePercent: 0.00,
        shareVolume: 0,
        textColor: "text-warning"
    },
    {
        id: 4,
        name: "Cisco Systems, Inc.",
        link:"CISCO",
        imageName: "images/cisco.png",
        openPrice: 27.41,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        changePercent: 0.00,
        shareVolume: 0,
        textColor: "text-warning"
    },
    {
        id: 5,
        name: "Intel Corporation",
        link:"INTEL",
        imageName: "images/intel.png",
        openPrice: 0.55,
        lastSale: 0.00,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        changePercent: 0.00,
        shareVolume: 0,
        textColor: "text-warning"
    }
];

*/

//test data for FIXTURES, for testing sorting stock state summary
StockMarket.Post.FIXTURES = [
    {
        id: 1,
        companyid:1,
        name: "Microsoft Corporation (MSFT)",
        link:"MSFT",
        imageName: "images/microsoft.png",
        openPrice: 42.59,
        lastSale: 43.59,
        changeNet: 1.00,
        changeNetSymbol: "images/up.png",
        changePercent: 2.35,
        shareVolume: 1000,
        textColor: "text-success"
    },
    {
        id: 2,
        companyid:2,
        name: "Apple Inc. (AAPL)",
        link:"AAPL",
        imageName: "images/apple.png",
        openPrice: 121.62,
        lastSale: 120.62,
        changeNet: -1.00,
        changeNetSymbol: "images/down.png",
        changePercent: -0.82,
        shareVolume: 750,
        textColor: "text-danger"
    },
    {
        id: 3,
        companyid:3,
        name: "Facebook, Inc. (FB)",
        link:"FB",
        imageName: "images/facebook.png",
        openPrice: 74.98,
        lastSale: 74.99,
        changeNet: 0.01,
        changeNetSymbol: "images/up.png",
        changePercent: 0.01,
        shareVolume: 750,
        textColor:"text-success"
    },
    {
        id: 4,
        companyid:4,
        name: "Cisco Systems, Inc.",
        link:"CISCO",
        imageName: "images/cisco.png",
        openPrice: 27.41,
        lastSale: 27.45,
        changeNet: 0.04,
        changeNetSymbol: "images/up.png",
        changePercent: 0.15,
        shareVolume: 500,
        textColor:"text-success"
    },
    {
        id: 5,
        companyid:5,
        name: "Intel Corporation",
        link:"INTEL",
        imageName: "images/intel.png",
        openPrice: 0.55,
        lastSale: 0.55,
        changeNet: 0.00,
        changeNetSymbol: "images/noChange.png",
        changePercent: 0.00,
        shareVolume: 100,
        textColor:"text-warning"
    }
];
