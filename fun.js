let con=document.querySelector("#container")
con.style.backgroundColor="pink"
let h=document.querySelector("#hh")
let m=document.querySelector("#mm")
let s=document.querySelector("#ss")
let ms=document.querySelector("#ms")
con.addEventListener("click",(e)=>{
    let t=e.target.getAttribute("class").split(" ")
    if(t[0]=="start")
    {
        Start();
       console.log(t[0]);
    }
    else if(t[0]=="pause")
    {
        Pause();
        console.log(t[0]);
    }
    else if(t[0]=="stop")
    {
        Stop();
        console.log(t[0]);
    }
    
})
let mmss=0;
let sec=1;
let min=1;
let hour=1;
let time=0;
function Start()
{
     time=setInterval(() => {
        ms.innerHTML=zero(mmss++);
        if(mmss==100)
        {
            mmss=0;
            
          s.innerHTML=zero(sec++);
        }
          if(sec==61)
          {
            m.innerHTML=zero(min++);
            sec=0;
          }
            if(min==60)
            {
              min=0;  
              h.innerHTML=zero(hour++);
            }
          
     
    }, 10);
}
function Pause()
{
    clearInterval(time);
}
function zero(t)
{
    if(t<10)
    return "0"+t;
    else 
    return t;
}
function Stop()
{
    h.innerHTML="00";
    m.innerHTML="00";
    s.innerHTML="00";
    ms.innerHTML="00";
}