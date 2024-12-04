/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Loaders


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var hamb = $('.hamburger');
	var hambActive = false;
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initLoaders();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu() {
        if ($('.hamburger').length) {
            var hamb = $('.hamburger');

            hamb.on('click', function(event) {
                event.stopPropagation();

                if (!menuActive) {
                    openMenu();

                    $(document).one('click', function cls(e) {
                        if (!$(e.target).closest('.menu_container').length) {
                            closeMenu();
                        } else {
                            $(document).one('click', cls);
                        }
                    });
                } else {
                    closeMenu();
                }
            });
        }

		if($('.menu_close').length) {
            var menuClose = $('.menu_close');

            menuClose.on('click', function(event) {
                event.stopPropagation();
                closeMenu();
            });
        }

        $('.menu_container').on('click', '.menu_item_dropdown > a', function(e) {
            e.preventDefault();
            var parent = $(this).parent();
            var submenu = parent.find('.submenu_list');

            if (submenu.length) {
                if (submenu.hasClass('active')) {
                    submenu.removeClass('active');
                    submenu.slideUp();
                } else {
                    $('.submenu_list').removeClass('active');
                    $('.submenu_list').slideUp();
                    submenu.addClass('active');
                    submenu.slideDown();
                }
            }
        });
    }

    function openMenu() {
        var fs = $('.menu_container');
        fs.addClass('active');
        hambActive = true;
        menuActive = true;
    }

    function closeMenu() {
        var fs = $('.menu_container');
        fs.removeClass('active');
        hambActive = false;
        menuActive = false;
        $('.submenu_list').removeClass('active');
        $('.submenu_list').slideUp();
    }



	/* 

	8. Init Loaders

	*/

	function initLoaders()
	{
		if($('.loader').length)
		{
			var loaders = $('.loader');

			loaders.each(function()
			{
				var loader = this;
				var endValue = $(loader).data('perc');

				var loaderScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		var bar = new ProgressBar.Circle(loader,
					{
						color: '#20d34a',
						// This has to be the same size as the maximum width to
						// prevent clipping
						strokeWidth: 3,
						trailWidth: 0,
						trailColor: 'transparent',
						easing: 'easeInOut',
						duration: 1400,
						text:
						{
							autoStyleContainer: false
						},
						from:{ color: '#20d34a', width: 3 },
						to: { color: '#20d34a', width: 3 },
						// Set default step function for all animate calls
						step: function(state, circle)
						{
							circle.path.setAttribute('stroke', state.color);
							circle.path.setAttribute('stroke-width', state.width);

							var value = Math.round(circle.value() * 100);
							if (value === 0)
							{
								circle.setText('0%');
							}
							else
							{
								circle.setText(value + "%");
							}
						}
					});
					bar.text.style.fontFamily = '"Roboto", sans-serif';
					bar.text.style.fontSize = '30px';
					bar.text.style.fontWeight = '500';
					bar.text.style.color = "#232323";


					bar.animate(endValue);  // Number from 0.0 to 1.0
		    	})
			    .addTo(ctrl);
			});
		}
	}

});

let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}