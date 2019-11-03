import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: ['slidesshow'],

  didRender() {
    console.log('section didRender');
    let sliders = document.getElementsByClassName('slidesshow');
    let dive = document.getElementById('slides');

    let count = 32;
    for(let i =0; i< count; i++){
      console.log('slide a slide');
      dive.appendChild(sliders.namedItem('.' + i.toString()));
    }

  }

});
