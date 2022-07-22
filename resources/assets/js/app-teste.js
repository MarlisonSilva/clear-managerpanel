$(function() {
    console.log( "ready!" );

    var toggleMenu = document.querySelector('.toggle-menu');
    var wrapper = document.querySelector('#wrapper');

    if (!toggleMenu) {
        console.log(toggleMenu)        
        console.log(document)
        console.log(document.getElementById('wrapper')) // null    
        console.log(document.getElementById('app')) // visível - pai de wrapper
        console.log("filho do #app: " + document.getElementById('app').children[0]) 

        console.log($("#wrapper")) // null
        console.log($("#app")) // visível - pai de wrapper
    }

});