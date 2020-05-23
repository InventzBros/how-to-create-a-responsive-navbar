var opener = document.getElementById('mobile_menu_flipper');
var icon_control = 1;

opener.addEventListener("click", function() {

	var nav_overlay = document.querySelector('.nav_overlay');
	var nav_bar = document.querySelector('nav');
	var mobile_menu_icon = document.querySelector('.menu-toggle i');

	nav_overlay.classList.toggle("menu-open");
	nav_bar.classList.toggle("menu-open");

	if(icon_control) {
		mobile_menu_icon.classList.remove("fa-bars");
		mobile_menu_icon.classList.add("fa-times");
		icon_control = 0;
	} else {
		mobile_menu_icon.classList.remove("fa-times");
		mobile_menu_icon.classList.add("fa-bars");
		icon_control = 1;
	}
});