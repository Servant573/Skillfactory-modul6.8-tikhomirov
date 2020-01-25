

const a = 0.01;
const b = 0.03;
const c = 0.07;
let progressBarMax = $("#progressbar-main").width();
let progressBar = 0;


$(".btn-1").on("click", function() {
	if(progressBar<progressBarMax){
    progressBar += a*progressBarMax;
    $(".progress-bar").width(progressBar);
    procent = progressBar/(progressBarMax/100);
    $(".progress-bar").html("Свобода " + procent.toFixed() + "%");
    console.log("Прибавляем 1%");}
    else {
    	progressBar = 0;
    	alert("Свобода достигла максимума");
    	  	
}});


$(".btn-3").on("click", function() {
    switch(progressBar<progressBarMax) {
    	case (progressBar<=progressBarMax*(1-b)):
	    	progressBar += b*progressBarMax;
	    	$(".progress-bar").width(progressBar);
	    	procent = progressBar/(progressBarMax/100);
	    	$(".progress-bar").html("Свобода " + procent.toFixed() + "%");
	    	console.log("Прибавляем 3%");
	    break;	
    	case (progressBarMax-progressBar)<(b*progressBarMax):
    		progressBar += (progressBarMax-progressBar);
    		procent = progressBar/(progressBarMax/100);
	    	$(".progress-bar").html("Свобода " + procent.toFixed() + "%");
    		alert("Свобода достигла максимума");
    		progressBar = 0;
    	break;
    	default:
	    progressBar = 0;
	    alert("Ошибка");  	
}});


$(".btn-7").on("click", function() {
    switch(progressBar<progressBarMax) {
    	case (progressBar<=progressBarMax*(1-c)):
	    	progressBar += c*progressBarMax;
	    	$(".progress-bar").width(progressBar);
	    	procent = progressBar/(progressBarMax/100);
	    	$(".progress-bar").html("Свобода " + procent.toFixed() + "%");
	    	console.log("Прибавляем 7%");
	    break;	
    	case (progressBarMax-progressBar)<(c*progressBarMax):
    		progressBar += (progressBarMax-progressBar);
    		procent = progressBar/(progressBarMax/100);
	    	$(".progress-bar").html("Свобода " + procent.toFixed() + "%");
    		alert("Свобода достигла максимума");
    		progressBar = 0;
    	break;
    	default:
	    progressBar = 0;
	    alert("Ошибка");  	
}});

    	

