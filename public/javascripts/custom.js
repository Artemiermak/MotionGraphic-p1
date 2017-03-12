/**
 * Created by Artem on 10.02.2017.
 */
/*<!--  File name: custom javascript file
      Author's name: Artem Iermak
      web site name: artemwebportfolio.herokuapp.com
      File description: custom javascript for Artem's portfolio website
-->*/

function myFunction() {
    console.log('Clicked');
}

// ===================================== start NAVIGATION =====================================

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// ===================================== end of NAVIGATION =====================================



// ===================================== start CURRENT year =====================================
var today = new Date();
var year = today.getFullYear();

function CurrentYear() {
    document.getElementById("CurrentYear").innerHTML = year;
};
CurrentYear();
// ===================================== end of CURRENT year =====================================




// ===================================== start scroll up =====================================
var navLength =  document.getElementById("Nav").offsetHeight;

var footer = document.getElementsByTagName("footer")[0];

var footerLength = footer.offsetHeight;

var footerMargin = screen.height - navLength - footerLength;

console.log(footerMargin);
console.log(footerLength);

footer.setAttribute("style", "margin-top:" + footerMargin + "px");
// ===================================== end of scroll up =====================================



// ===================================== start Waves hover effect =====================================
Waves.attach('.waves');
Waves.init();

// ===================================== end of Waves hover effectp =====================================

// ===================================== start of Toggle =====================================
$(document).ready(function(){
    // jQuery - Event handler for onclick
    $("#slider").click(function(event){
        // Add/remove CSS class that moves the button
        $("#sliderBox").toggleClass(function(){
            return "on"
        });

        if ($("#sliderBox").hasClass("on")) {
            console.log("on")
            $("#sliderBox").html("On")
            $("#animate").addClass("rotate")


        } else {
            console.log("off")
            $("#sliderBox").html("Off")
            $("#animate").removeClass("rotate")
        }

    });
});
// ===================================== end of Toggle =====================================