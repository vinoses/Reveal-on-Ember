import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel(){
    console.log('before .0 model ' + this.get('routeName'));
  },
  model(){
    console.log('.0 model')
  },
  afterModel() {
    console.log('after .0 model ' + this.get('routeName'));
  }

});
