let userscore=0;
let compscore=0;


let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
  
 const drawchoice=()=>{
    console.log("match is draw");
    msg.innerText="match is draw";
    msg.style.backgroundColor="black"
 }

 const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you winner");
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }else{
         compscore++;
         compscorepara.innerText=compscore;
        console.log("you loose");
        msg.innerText=` You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
       
    }
 }


const playgame=(userchoice)=>{
  console.log("userchoice is =",userchoice)
  const compchoice=gencompchoice();
  console.log("compchoice is =",compchoice)
  
  if(userchoice===compchoice){
    drawchoice();
  }else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
      showwinner(userwin,userchoice,compchoice);

  }
}

 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
      playgame(userchoice);
    });
});
