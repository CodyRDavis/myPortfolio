var menuOpen = false;
console.log("nav.js loaded. SideNav open:", menuOpen);
document.getElementById('buttonMenu').addEventListener('click', function(event){
    if (!menuOpen){
        console.log("Open Slide");
        document.getElementById('sideNav').style.setProperty('margin-left', "0vw");
        document.getElementById('content').style.setProperty('margin-left', "200px");
        menuOpen = true;
    }
    else{
        console.log("Close Slide");
        document.getElementById('sideNav').style.setProperty('margin-left', '-200px');
        document.getElementById('content').style.setProperty('margin-left', "0px");
        menuOpen = false; 
    }

});

//SOCIAL NAVBUTTONS
document.getElementById('button-twitter').addEventListener('click', function(event){
    window.open("https://twitter.com/WizardSchnoz");
});

document.getElementById('button-github').addEventListener('click', function(event){
    window.open("https://github.com/CodyRDavis");
});

document.getElementById('button-linkedIn').addEventListener('click', function(event){
    window.open("https://www.linkedin.com/in/cody-r-davis/");
});

//PORTFOLIO LINKS
document.getElementById('button-dicebag').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/DiceBag/");
});
document.getElementById('button-essentals').addEventListener('click', function(event){
    window.open("https://jjmonte20.github.io/project1Team2/");
});
document.getElementById('button-giphy').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/AJAXexample/");
});
document.getElementById('button-getout').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/timerGame/");
});
document.getElementById('button-rpg').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/jQueryGame/");
});
document.getElementById('button-hangman').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/guessLetter/");
});
document.getElementById('button-bootstrap').addEventListener('click', function(event){
    window.open("https://codyrdavis.github.io/Bootstrap-Portfolio/");
});

/*  BLANK BUTTON LISTENER
document.getElementById('button-').addEventListener('click', function(event){
    window.open("");
}); 
*/