// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

document.querySelector('body').addEventListener('click', function(evt) {
    if ( evt.target.parentNode.parentNode.classList.contains('tile') ) {

		var tileDivs = document.getElementsByClassName('tile');

        for(var i=0; i<tileDivs.length; i++){
        	tileDivs[i].classList.remove('expanded');
        }

        evt.target.parentNode.parentNode.classList.add('expanded');
    }
}, true);