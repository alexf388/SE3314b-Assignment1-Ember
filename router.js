/**
 * Created by Abdelkader on 2015-01-31.
 */
CourseBlog.Router.map(function() {
    this.resource('posts', {path: '/'});
    this.resource('post', {path: 'posts/:post_id'});
    this.resource('addNewCompany');
    this.resource('addNewPost');
    this.resource('placeBidOrder');
    this.resource('placeSellOrder');


});
