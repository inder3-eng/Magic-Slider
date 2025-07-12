const images=document.getElementById("slides");
let currentindex=0;
const totalslides=images.children.length;
const body=document.body;



function updateslide(){
    images.style.transform=`translateX(-${currentindex*100}%)`;
}

function moveslide(direction){
   for (let slide of images.children){
    slide.querySelector("img").style.border="none";
   }
    currentindex=(currentindex+direction+totalslides)%totalslides;
    updateslide();
    const currentslide= images.children[currentindex];
    const img=currentslide.querySelector("img");

    if(img){
        body.style.backgroundImage=`url(${img.src})`;
        body.style.backgroundRepeat="no-repeat";
        body.style.backgroundSize="1600px 1000px";
        img.style.border="5px solid brown";
    }
}
