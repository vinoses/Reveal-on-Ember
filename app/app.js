import Application from '@ember/application';
import { schedule } from '@ember/runloop';
import $ from 'jquery';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  rootElement: '#slides',
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

schedule('actions', function(){
  console.log('actions');
  $('.slidesshow').insertBefore('.ember-view');
  $('.ember-view').hide();
});

schedule('routerTransitions', function(){
  console.log('routerTransitions');
  $('.slidesshow').insertBefore('.ember-view');
  $('.ember-view').hide();
});

schedule('afterRender', function(){
  console.log('afterRender');
  $('.slidesshow').insertBefore('.ember-view');
  $('.ember-view').hide();
});

schedule('destroy', function(){
  console.log('destroy');
  $('.slidesshow').insertBefore('.ember-view');
  $('.ember-view').hide();
});

// schedule('sync', function(){
//   console.log('sync');
//   $('.slidesshow').insertBefore('.ember-view');
//   $('.ember-view').hide();
// });
//
// schedule(_rsvpErrorQueue, function(){
//   console.log('_rsvpErrorQueue');
//   $('.slidesshow').insertBefore('.ember-view');
//   $('.ember-view').hide();
// });


loadInitializers(App, config.modulePrefix);



export default App;
