// Get the modal
var modal = document.getElementById('myModal');

// Get the images
var img1 = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//handle click for myImg1
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
