/**
 * Created by Abdelkader on 2015-01-31.
 */
StockMarket.Router.map(function () {
    this.resource('placeBidOrder', {
        path: '/buy/:post_id'
    });
    this.resource('placeSellOrder', {
        path: '/sell/:post_id'
    });
    this.resource("posts", {
        path: '/'
    }, function () {
        this.route("marketByOrder", {
            path: "/marketByOrder/:post_id"
        });

    });
    this.resource('placeBidOrder', {
        path: '/buy/:post_id'
    });
    this.resource('placeSellOrder', {
        path: '/sell/:post_id'
    });

});