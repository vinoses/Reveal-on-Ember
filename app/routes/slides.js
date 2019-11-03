import Route from '@ember/routing/route';

export default Route.extend({

   model(){

     let slides = [];
     for(let i = 0; i<32; i++){
       slides[i] = {'name':'Slide' + i,'url':'assets/images/Slide' + i + '.gif', 'id': '.' + i};
     }

     return slides;
   },
  afterModel() {
    console.log('after slides model ' + this.get('routeName'));
  }
});
