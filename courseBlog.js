/**
 * Created by Abdelkader on 2015-01-31.
 */
CourseBlog = Ember.Application.create();

CourseBlog.ApplicationSerializer = DS.LSSerializer.extend();
CourseBlog.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'CourseBlog'
});

CourseBlog.PostAdapter = DS.FixtureAdapter.extend();








