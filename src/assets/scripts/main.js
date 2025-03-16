/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

  /**
   * Slick carousel configuration
   */
  $('.my-slider').slick({
    slidesToShow: 1,  
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
  
} )();



