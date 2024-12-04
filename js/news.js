/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu


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