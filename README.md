Overlay-Modal-Window
====================

Lightweight Plugin for creating Overlay Window


This plugin is used to create Overlay or Modal window by clicking on any hyperlink within a page.

It is lightweight and works cross browser, this plugin contains very minimal but useful features, solves the purpose of displaying external or inline content within a inbuilt popup like window, modify content CSS as you like and ready to go as per your requirements.

Uses NO images at all, jquery dependent and inspired from http://fancybox.net/, though not all features were required hence recreated it with code written from scratch.

There are lot of jquery modal/overlay plugins out there, but this comes as 2.4Kb minified JS file, and is not restricted towards any HTML structure.

So go ahead and enjoy and do Star this project if you like it.


************************
Get Started

************************


a) Download folder and unzip to your repository, non compressed files are contained in folder CSS and JS.

b) In order to run this plugin you need to include
    
    a) Jquery - JS/jquery-1.11.1.min.js used here but you can download any version you like from jquery.com
    
    b) Overlay Plugin - JS/common-overlay.js used to invoke the modal window
    
    c) Overly CSS - CSS/common-overlay.css used to style the modal window, contains common styles required

c) Refer to index.html for sample implementation options.



************************
Few steps to remember:

************************


Plugin can be initialized using the following syntax

$('.your-class-name').on("click", function(){

      $(this).overlay()

});

Preferred class name here is 'overlay-init' in order to keep consistency.


The content in the overlay can be inserted by 2 ways:

1) Ajax - you can load external content to your overlay window.

    using data attribute 
    <a data-ajax="ajax.txt" class="overlay-init" href="javascript:void(0);">Ajax content</a>
                            
    using options
    
    $('.your-class-name').on("click", function(){

      $(this).overlay({
        ajax: "file-url"
      });

    });

2) Inline - if content needs to be referred from within the page then this method is useful.

    While using inline option remember to use ID as the option and not the class, in order to make sure that the target inline content is loaded and not all.
    
    using data attribute 
    <a data-inline="#some-id" class="overlay-init" href="javascript:void(0);">Inline content</a>
                            
    using options
    
    $('.your-class-name').on("click", function(){

      $(this).overlay({
        inline: "#some-id"
      });

    });


Below are some of the options available within the plugin, so that YOU have the flexibility.

$('.overlay-init').on('click', function() {
        var $this = $(this);
        
        $this.overlay({
        
          debug: false, //enable debugging mode, default is false
  
          closeBtn: '.close', //mention the class or id that needs to be used for closing the overlay, default setting
          
          outerWrapper: '.outer-overlay', 
          
          innerWrapper: '.inner-overlay',
          
          loadingClass: '.loading', // used for customizing the loading icon
          
          loadingText: 'loading...',//text can be configured or directly loading img path can be given
          
          closeonEscape: true, // mention if closing using esc key is required, default is true
          
          colors: {
            closeButton: "#fff", //close icon color, can be overridden from CSS or can be configured using options as well
            
            background: "#222", //modal window background color
            
            loading: "#fff", //loading icon color
            
            opacity: '0.7' //modal window opacity
            
          },
          
          callback: function() { //callback function once modal is loaded
         
          },
         //overlay can be invoked by any of the following methods or by data-ajax/data-inline in html
          inline: "#some-id", //if using inline, mention the div id or any tag you like
         ajax: "file-url" //if using ajax, mention the url, default method is ajax
        
        });
    });


***

**Like my Work? Although this is 100% free to use, but if you're feeling generous then you can**  

<a href="https://www.paypal.com/cgi-bin/webscr?business=jjatinm87@gmail.com&cmd=_xclick&currency_code=USD&item_name=Love_Overlay
" target="_blank"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" 
alt="Buy me a coffee.."/></a>
