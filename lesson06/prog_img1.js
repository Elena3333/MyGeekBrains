var count = 1;
var images;

function init() {
    images = document.getElementsByClassName('small');
    maxCount = images.length;
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
    var left = document.getElementById('left');
    left.onclick = moveBack;
    var right = document.getElementById('right');
    right.onclick = moveForward;
   }

init();

function changeBigPicture() {
    var big_picture = document.getElementById('big_picture');

    big_picture.innerHTML = '';

    var img = this;
    console.log(img);
    var imageNameParts = this.src;           
    console.log(imageNameParts);
    var src = imageNameParts.replace("small", "big");                   
    console.log(src);
    var imageDomElement = document.createElement('img');
    imageDomElement.src = src;
    imageDomElement.onerror = badpicture;
    big_picture.appendChild(imageDomElement);

}

function badpicture() {
    
    this.src = "img/big/dog_none.png";
    
    this.appendChild(imageDomElement);
}

function moveBack() {
    
    if (count > 1){
        big_picture.innerHTML = '';
        images[2].src = "img/small/dog_"+ (count+1 ) + ".jpg";
        images[1].src = "img/small/dog_"+ (count ) + ".jpg";
        images[0].src = "img/small/dog_"+ (count-1 ) + ".jpg";
        --count;
            }
}


function moveForward() {
  
    if ( count < 7){
        console.log(images[2]);
        images[2].src = "img/small/dog_"+ (count+3 ) + ".jpg";
        images[1].src = "img/small/dog_"+ (count+2 ) + ".jpg";
        images[0].src = "img/small/dog_"+ (count+1 ) + ".jpg";
        ++count;
       big_picture.innerHTML = '';
    }

}
