const fourthDiv = document.querySelector("#main__fourth");
const fourthFirstBox = document.querySelector("#fourth__box1");
const fourthConBox = document.querySelector("#fourth__box__con");

function moveElements() {
   fourthFirstBox.style.transform = "translateX(-100px)" 
   fourthFirstBox.style.opacity = "1"
   fourthConBox.style.opacity = "1" 
   fourthConBox.style.transform = "translateX(150px)" 
}

fourthDiv.addEventListener("mouseenter", moveElements);