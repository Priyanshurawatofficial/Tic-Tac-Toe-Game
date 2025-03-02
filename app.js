console.log("TicTac Toe Game started");
let music =new Audio("music.mp3");
let audioturn =new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn ="X";
let isgameover=false;
//function to change the turn
const changeturn=()=>{
    if(turn==="X")
     { 
        return "O";}
    else {
    
    return "X";}
}
//function to check the win
const checkwin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");
   let wins=[
     [0,1,2,5,5,0],
     [3,4,5,5,15,0],
     [6,7,8,5,25,0],
     [0,3,6,-5,15,90],
     [1,4,7,5,15,90],
     [2,5,8,15,15,90],
     [0,4,8,5,15,45],
     [2,4,6,5,15,135]];
   for(e of wins){
    
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== "") )
      {  document.querySelector(".info").innerText=boxtext[e[0]].innerText+" Won";
        isgameover=true;
        gameover.play();
    document.querySelector("img").style.width="200px"
    document.querySelector(".line").style.width="20vw"
    document.querySelector("body").classList.add("red");
    setTimeout(()=>{
         document.querySelector("body").classList.remove("red");
    },260)
    document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`; 
  }   
  
}
   
}

//Game logic 

let boxes=document.querySelectorAll(".box");
for(box of boxes)
{
     let boxtext=box.querySelector(".boxtext")
box.addEventListener("click",()=>{
    console.log("button was clicked");
    if(boxtext.innerText==='')
    {   
        boxtext.innerText=turn;
        
        turn=changeturn();
        audioturn.play();
         checkwin();
         if(isgameover==false)
            {
              document.querySelector(".info").innerText="TURN FOR "+turn;
            
          }
         
       
    
}})
}
let reset=document.querySelector("#reset")
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext"); 
    for(box of boxtext)
        {
            box.innerText="";
        }  
        turn="X";
        isgameover=false;
      document.querySelector(".info").innerText="TURN FOR "+turn;
            document.querySelector("img").style.width="0px"
            document.querySelector(".line").style.width="0vw"                  

})
