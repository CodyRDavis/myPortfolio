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