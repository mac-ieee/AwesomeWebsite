//JavaScript
var cards = document.getElementsByClassName('cover-card');
var branch_cards = document.getElementsByClassName('branch-card');

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y > 1) {
    	cards[0].style.opacity = 0.5;
		cards[1].style.opacity = 0.5;
		cards[2].style.opacity = 0.5
		cards[3].style.opacity = 0.5
    }

    if (y > 700) {
        branch_cards[0].style.opacity = 0.5;
        branch_cards[1].style.opacity = 0.5;
        branch_cards[2].style.opacity = 0.5;
        branch_cards[3].style.opacity = 0.5;
    }
};

window.addEventListener("scroll", myScrollFunc);