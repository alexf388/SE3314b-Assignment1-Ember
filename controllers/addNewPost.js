/**
 * Created by Abdelkader on 2015-02-06.
 */
CourseBlog.AddNewPostController = Ember.Controller.extend({
    actions: {
        save: function() {
            var newPost = this.store.createRecord('post', {
                name: this.get('name'),
                openPrice: this.get('openPrice')
            });
            newPost.save();
            this.transitionToRoute('posts');
        }
    }
});

