/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
//Section and navbar__list are given variables which are constant
const navMenu = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

let x = 0;

//Main part of the navbar

const navbar = () => {
	const navElmt = document.createElement('li');
	navElmt.innerHTML = '<em>Title<em>';
	navElmt.classList.add('menu__link');
	navList.appendChild(navElmt);
	navElmt.addEventListener('click', function(elmt) {
		$('html, body').animate({ scrollTop: $(`#${elmt}`).offset().top }, 800);
	});
};

//The required sections are added to the navbar and when clicked,
// scroll to the required section
const elemtNavbar = () => {
	function pointSect(part) {
		$('html, body').animate({ scrollTop: $(`#${part}`).offset().top }, 800);
	}
	for (let x = 0; x < navMenu.length; x++) {
		const secElmt = document.createElement('li');
		secElmt.innerHTML = navMenu[x].getAttribute('data-nav');
		secElmt.classList.add('menu__link');
		navList.appendChild(secElmt);
		secElmt.addEventListener('click', function() {
			pointSect(navMenu[x].getAttribute('id'));
		});
	}
};

//Calling the essential functions
navbar();
elemtNavbar();

//The main part of activating the sections on the navbar,
// according to the section displayed
const navbarActiveSections = () => {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() !== 0) {
			$('section').each(function() {
				if ($(window).scrollTop() >= $(this).offset().top - 340) {
					this.classList.add('activeSection');
					for (const sect of navMenu) {
						if (this !== sect) {
							sect.classList.remove('activeSection');
						}
					}
					for (const navbarEl of navList.childNodes) {
						if (navbarEl.innerHTML === this.getAttribute('data-nav')) {
							navbarEl.classList.add('activeLink');
						} else {
							navbarEl.classList.remove('activeLink');
						}
					}
				}
			});
		}
	});
	const Section1part = $('#sections1').offset().top;
	const Section2part = $('#sections2').offset().top;
	const Section3part = $('#sections3').offset().top;
	let activeList;
	if (scrollTops < Section1part) {
		activeList = $('sections1');
	} else if (scrollTops < Section2part) {
		activeList = $('#sections2');
	} else {
		activeList = $('#sections3');
	}
};
navbarActiveSections();
