import Splide from '@splidejs/splide';
import '@splidejs/splide/src/css/core/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    let testimonialSliderRef = document.querySelector('[data-testimonial-slider]');
    let testimonilSliderOptions = {
        "type" : 'loop',
        "arrows" : false,
        "autoplay" : true,
    }
    const testimonialSlider =  new Splide(testimonialSliderRef, testimonilSliderOptions);
    testimonialSlider.mount();
});