$(document).ready(function() {
    $('.minus').hide();
    $('.captions').hide();
    $(".plus").click(function(){
        $(this).parents().next('.captions ').slideToggle();
        $(this).closest('.project').find('.available').slideToggle();
        $(this).toggleClass('plus minus');
	});
	

    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 'slow');
    });

});

// background moving
var dir_h="right";
var dir_v="down";
function reset1(){
	clearTimeout(my_time);
	document.getElementById("i1").style.left="500px";
	document.getElementById("i1").style.top="100px";
	document.getElementById("msg").innerHTML=""
}

function disp(){
	var b=1;var c=document.getElementById("i1").offsetTop;
	var a=document.getElementById("i1").offsetLeft;
	if(a>=-800){dir_h="left"}
	if(a <=-920){dir_h="right" }
	if(dir_h=="right" ){a=a+b}else{a=a-b}
	if(c>=-1300){dir_v="up"}
	if(c<=-1646){dir_v="down" }
	if(dir_v=="down"){c=c+b}else{c=c-b}
	document.getElementById("i1").style.top=c+ "px";
	document.getElementById( "i1").style.left=a+ "px"}
	
function timer(){disp();
	var b=document.getElementById( "i1").offsetTop;
	var a=document.getElementById("i1").offsetLeft;my_time=setTimeout( "timer()",45)}

//tabs
window.addEventListener("load", function load() {
	document.getElementById("defaultOpen").click();
	});

function openTab(evt, tabName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
  }

//back to top 
window.addEventListener("scroll", function() {
    showArrow();
});

function showArrow() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 300 ){
        document.getElementsByClassName('arrow-up')[0].classList.add('reveal')
        } else if (scrollTop < 1300 ) {
            document.getElementsByClassName('arrow-up')[0].classList.remove('reveal')
    }
}
