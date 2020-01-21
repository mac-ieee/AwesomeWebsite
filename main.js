//JavaScript
var cards = document.getElementsByClassName('cover-card');
var branch_cards = document.getElementsByClassName('branch-card');

var cover_title = document.getElementsByClassName('cover-title-heading');
var cover_subheading = document.getElementsByClassName('cover-sub-heading');
var cover_ctalink = document.getElementsByClassName('cover-cta-link');
var cover_titleprice = document.getElementsByClassName('cover-title-price');


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y > 1) {
        console.log("asd");
    	cards[0].style.opacity = 0.8;
		cards[1].style.opacity = 0.8;
		cards[2].style.opacity = 0.8;
		cards[3].style.opacity = 0.8;

        // make cover-text dissapear on scroll
        cover_title[0].style.opacity = 0;

    }

    if (y > 700) {
        branch_cards[0].style.opacity = 0.5;
        branch_cards[1].style.opacity = 0.5;
        branch_cards[2].style.opacity = 0.5;
        branch_cards[3].style.opacity = 0.5;
    }
};

document.addEventListener("scroll", myScrollFunc);