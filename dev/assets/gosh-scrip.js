(function($) {

  var min = 0;
  jQuery('.home-feature .row > .col-md-6.col-sm-6.col-xs-12').each(function(){
    var hei = jQuery(this).outerHeight();
    if(min < hei){ min = hei } 
    jQuery('.home-feature .row > .col-md-6.col-sm-6.col-xs-12 img').height(min)
  })

  jQuery( ".header-links .icons" ).append( '<i class="fa fa-user"></i>' );
  jQuery(".header-links .cusstom-link").hide();
  jQuery(".header-links .icons i").addClass("accordion-show");
  jQuery(".header-links .icons i").click(function(){
    if(jQuery(this).parent().next().is(":visible")){
      jQuery(this).addClass("accordion-show");
    }else{
      jQuery(this).removeClass("accordion-show");
    }
    jQuery(this).parent().next().toggle(400);
  });




  var switchImage = function(newImageSrc, newZoomedImageSrc, mainImageDomEl) {
    jQuery(mainImageDomEl).attr('src', newImageSrc);
    jQuery(mainImageDomEl).attr('data-zoom-image', newZoomedImageSrc);
    $(mainImageDomEl).parents('a').attr('href', newImageSrc);

    if ($(window).width() > 782) {
      jQuery(mainImageDomEl).parent().trigger('zoom.destroy');
    }


  };


  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 200) {
      jQuery("#back-top").fadeIn()
    } else {
      jQuery("#back-top").fadeOut()
    }
  });
  jQuery( "div.button-accrion" ).append( '<p class="more btn harman_btn4">more<i class="clever-icon-plus"></i></p>' );
 
  jQuery(".footer-top h3.module-title i").addClass("accordion-show");
  jQuery("div.button-accrion").click(function(){
    
    if(jQuery('.footer-container').hasClass('show-footer')){
      jQuery( "div.button-accrion" ).append( '<p class="more btn harman_btn4">more<i class="clever-icon-plus"></i></p>' );
      jQuery('.footer-container').removeClass('show-footer');
      jQuery( "div.button-accrion p.less" ).remove();
    }else{
      jQuery('.footer-container').addClass('show-footer');
      
      jQuery( "div.button-accrion p.more" ).remove();
      jQuery( "div.button-accrion" ).append( '<p class="less btn harman_btn4">less<i class="clever-icon-minus"></i></p>' );
    }

  });


  $(document).ready(function() {

    $(".novetty_caret").click(function(){
      if ($(this).parent().parent().parent().find(".widget-content").is(":hidden")) {
        $(this).parent().parent().parent().find(".widget-content").slideDown(300);
        $(this).find('i').removeClass('fa-caret-right');
        $(this).find('i').addClass('fa-caret-down');      
      } else {
        $(this).parent().parent().parent().find(".widget-content").slideUp(300);
        $(this).find('i').removeClass('fa-caret-down');
        $(this).find('i').addClass('fa-caret-right');
      }
    });
  });


  jQuery(document).ready(function($){
    $('#zoom-full-img').click(function(){
      $('#product-featured-image').trigger('click');
    });
  

    /* Update main product image when a thumbnail is clicked. */
    /*==========================*/
    jQuery('#product .thumbs a').on('click', function(e) {
      e.preventDefault();
      switchImage(jQuery(this).attr('data-image'), jQuery(this).attr('data-zoom-image'), '#product-featured-image');
    } );


    /* Initialize zoom on main product image */
    var mainProductImage = jQuery('.featured img');
    if (mainProductImage.size()) {
      if (jQuery(window).width() > 782) {
        var zoomedSrc = $('.featured img').attr('src').replace('_master', '');
        $('.featured img')
        .wrap('<span style="display:inline-block; max-width: 100%;"></span>')
        .css('display', 'block')
        .parent()
        .zoom( { url: zoomedSrc } );
      }
    }
  });
  
}(jQuery)); 
