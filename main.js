
// document.getElementById("text");
// let text=document.getElementById("text");
// text.textContent="halo word"


// nodlist= document.querySelectorAll("p");
// nodlist[1].textContent="ttt"
// nodlist[3].textContent="ttt"



// q1
function myFun() {
    var element = document.body
    element.classList.toggle("mystayle");
};

// q2
function  purp(params) {
    text1=document.getElementById("h11");
    text1.textContent="the color is purple"
    let img=document.getElementById("div1");
    img.style.backgroundColor="purple"
};
function gren(params) {
    text2=document.getElementById("h11");
    text2.textContent="the color is green"
    let img=document.getElementById("div1");
    img.style.backgroundColor="greenyellow"
}

// q3
function pfun(params) {
    text3=document.getElementById("p1");
    text3.textContent="hhhhhhhhhhhhhhh"
} 

// q4
function sizfun() {
    let text4=document.getElementById("p1");
    text4.classList.toggle("p1");
}

// q5
function backfun() {
    var color = document.getElementById("p1");
    color.classList.toggle("textBack");
};
// q6
let bbb=document.getElementById("img1");
let aaaa=document.getElementById("picbut");
     function chanchpic() {
    bbb.style.display="block";

};
let ccc=true;



aaaa.addEventListener("click", function () {  
     if (ccc) 
     {     bbb.src ="./Screenshot 2023-03-02 001329.png";   
    } else {
             bbb.src = "./Screenshot 2022-10-26 100409.png";   }  
             ccc = !ccc; });

        
          
      function alratxx() {
        alert("aaaaa")
      }