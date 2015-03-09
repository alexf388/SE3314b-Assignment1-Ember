/**
 * Created by Abdelkader on 2015-01-31.
 */
StockMarket.Router.map(function() {
    //this.resource('posts', {path: '/'});
    this.resource('addNewCompany');
    this.resource('addNewPost');
    this.resource('placeBidOrder',{path:'/buy/:post_id'});
    this.resource('placeSellOrder',{path:'/sell/:post_id'});



     this.resource("posts", {path: '/'}, function(){
        //this.resource("marketByOrder");
        //this.route("comment", { path: "/comments/:comment_id" });
         this.route("marketByOrder");
         this.route("marketByPrice");

         //insert route marketByPrice

     });




});
