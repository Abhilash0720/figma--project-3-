

let images = ["dice img 1.png",
"dice img 2.png",
"dice img 3.png",
"dice img 4.png",
"dice img 5.png",
"dice img 6.png",];
const valueimg1=document.getElementById("value1")
const valueimg2=document.getElementById("value2")
const btnRoll=document.querySelector("#firstbtn")
const diceimg=document.querySelector(".dice")

function rollthedice1(){
   const random= Math.floor(Math.random()*images.length)
   const dice= images[random]
   document.getElementById("img1").src = `./image/${dice}`
   
}
rollthedice1();
function rollthedice2(){
    const random= Math.floor(Math.random()*images.length)
    const dice= images[random]
    document.getElementById("img1").src = `./image/${dice}`
    
   
 }
 rollthedice2();

