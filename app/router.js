import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('slides', { path: '/' }, function() {
    this.route('.0'), { path: '/.0' };
  });
});

export default Router;
