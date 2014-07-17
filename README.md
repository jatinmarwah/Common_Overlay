Overlay-Modal-Window
==============

Plugin for overlay - lightweight

Plugin for invoking modal window, it is lightweight and works cross browser. Has very minimal but useful features for those who like to invoke content via ajax or inline and need only few features.

Uses NO image, jquery dependent and inspired from http://fancybox.net/, though not all features were required hence recreated it.

There are lot of jquery modal/overlay plugins out there, but this comes as 2Kb minified JS file.

So go ahead and enjoy.


Get Started

a) Download "Production Version" folder and unzip to your repository, which contains the minified JS and CSS file required to created the modal.

b) Include Jquery (jquery-1.11.1.min.js), Overlay JS File (common-overlay.min.js) from JS Folder and common-overlay.min.css from CSS Folder

c) Refer to index.html for sample implementation options.


There are 2 ways by which Overlay can be invoked

1) Ajax - you can load external content to your overlay window.
2) Inline - if content needs to be referred from within the page then this method is useful.

There are multiple actions that can be performed using the callback function once the overlay is done loading, apart from that few other options are listed below.


//below are some of the overlay options that can be configured directly
//overlay is invoked for all the tags with class overlay-init and data attribute mentioned against it.

 debug: false, //enable debugging mode, default is false
 closeBtn: '.close', //mention the class or id that needs to be used for closing the overlay, default setting
 outerWrapper: '.outer-overlay', //
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
