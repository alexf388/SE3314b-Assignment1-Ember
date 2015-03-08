/**
 * Created by Abdelkader on 2015-02-01.
 */
// We create a model of type CourseBlog.Posts
CourseBlog.Post = DS.Model.extend({
    name: DS.attr('string'),
    imageName: DS.attr('string'),
    openPrice: DS.attr('number'),
    lastSale: DS.attr('number'),
    changeNet: DS.attr('number'),
    shareVolume: DS.attr('number')

});

CourseBlog.Post.FIXTURES = [
    {
        id: 1,
        name: "Microsoft Corporation (MSFT)",
        imageName: "images/microsoft.png",
        link:"MSFT",
        openPrice: 42.59,
        lastSale: 0.00,
        changeNet: 0.00,
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
        shareVolume: 0
    }
];

