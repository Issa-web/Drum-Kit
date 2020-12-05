let numberOfDrumButtons = document.querySelectorAll(".drum").length

for( let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        console.log(this )
     this.style.color = " white";
    
            });
}



// alert("Hello")
// let i  =document.querySelectorAll("button").forEach((button) =>{
//     button.addEventListener("click", () =>{
//         // alert("I have been clicked")
//         console.log(this.innerHTML)
//     })
// })

// console.log("i")

// var audio = new Audio('sounds/tom-1.mp3');
//          audio.play();