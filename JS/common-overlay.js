
/*
 * @author: Jatin Marwah (https://github.com/jatinmarwah)
 * @License: The MIT License (MIT)
 * @Release Date: 19 July 2014
 */

;
(function(window, document, $, undefined) {
    "use strict";
    //common variables
    var h = $("body"),
            d = $(document);
    //plugin initialization
    $.fn.overlay = function(options) {

        var mainscope = this,
                option = options || {},
                opts = $.extend({}, $.fn.overlay.defaults, option),
                methods = {
                    _options: opts,
                    _init: function() {
                        //check method type
                        opts.ajax = opts.ajax || ($(mainscope).data('ajax') || false);
                        opts.inline = opts.inline || ($(mainscope).data('inline') || false);
                        //invoke modal overlay
                        methods._open();
                        //close modal
                        methods._closeonEscape();
                        methods._close();
                        
                    },
                    _debug: function(param) {
                        if (opts.debug && typeof console !== 'undefined')
                            console.log(param);
                    },
                    _open: function() {
                        //debug
                        methods._debug(opts.inline);
                        methods._debug(opts.ajax);
                        //initialize modal
                        h.append(methods._getTemplate());
                        methods._loading();
                        //options trigger
                        if (opts.ajax && !opts.inline) {
                            methods._debug('you opted ajax method');
                            if (!opts.ajax) {
                                methods._debug('ajax url not found');
                                return;
                            }
                            methods._fireAjax(opts.ajax);
                        } else if (opts.inline) {
                            methods._debug('you opted inline method');
                            if ($(opts.inline).length == 0)
                                methods._debug('Inline content not found');
                            methods._inline(opts.inline);
                        } else {
                            methods._debug('no method found - ajax or inline');
                        }
                        //fire callback after completion
                        opts.callback.call(this);
                    },
                    _fireAjax: function(url) {
                        $.ajax({
                            url: url,
                            async: false,
                            cache: false,
                            success: function(data, textStatus, jqXHR) {
                                methods._append(data);
                            }
                        });
                    },
                    _inline: function(id) {
                        var _id = $(id).clone();
                        methods._append(_id);
                    },
                    _append: function(data) {
                        $(opts.loadingClass).remove();
                        $(opts.innerWrapper).append(data);
                    },
                    _getTemplate: function() {
                        return opts.template;
                    },
                    _loading: function() {
                        //apply some styles before appending data
                        $(opts.innerWrapper).css('background-color', opts.colors.background);
                        $(opts.innerWrapper).find(opts.closeBtn).css('color', opts.colors.closeButton);
                        $(opts.innerWrapper).find(opts.loadingClass).css('color', opts.colors.loading);
                        $(opts.outerWrapper).find('.overlay').css('opacity', opts.colors.opacity);


                        $(opts.loadingClass).append(opts.loadingText);
                    },
                    _closeonEscape: function() {
                        if (opts.closeonEscape) {
                            d.bind('keypress.myEvent keydown.myEvent', function(e) {
                                if ((e.which || e.keyCode) === 27) {
                                    e.preventDefault();
                                    methods._removeWrapper();
                                }
                            });
                        }
                    },
                    _close: function() {
                        $(opts.closeBtn).on('click', function() {
                            methods._removeWrapper();
                        });
                    },
                    _removeWrapper: function() {
                        $(opts.outerWrapper).remove();
                        d.unbind('keypress.myEvent keydown.myEvent');
                    }
                };
        return methods._init();
    };
    //configuration options
    $.fn.overlay.defaults = {
        debug: false,
        template: '<div class=\'outer-overlay\' id=\"outer-overlay\"><div class="overlay"></div><div class=\'inner-overlay modal\' id=\"inner-overlay\"><a title="Close" class="close" href="javascript:;">X</a><div class=\'loading\' style=\'font-size:19px\'></div></div></div>',
        closeBtn: '.close',
        outerWrapper: '.outer-overlay',
        innerWrapper: '.inner-overlay',
        loadingClass: '.loading',
        loadingText: 'loading...',
        closeonEscape: true,
        colors: {
            closeButton: "#fff",
            background: "none",
            loading: "#fff",
            opacity: '0.7'
        },
        callback: function() {
        }
       
    };
    //default plugin invoke
    /*$('.overlay-init').on('click', function() {
        var $this = $(this);
        $this.overlay({
            callback: function() {

            },
             inline: "#some-id"
        });
    });*/
}(window, document, jQuery));