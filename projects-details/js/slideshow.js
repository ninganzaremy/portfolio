
var playing = true;
var pauseButton = document.getElementById('pause');
var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("Certificates");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
}


function pauseSlideshow(){
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(carousel, 2000);
}

pauseButton.onclick = function(){
    if(playing){
        pauseSlideshow();
    }
    else{
        playSlideshow();
    }
};

carousel();
playSlideshow();
