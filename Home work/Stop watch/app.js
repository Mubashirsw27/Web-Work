var min = 0
var sec = 0
var msec = 00
var minHead=document.getElementById("min")
var secHead=document.getElementById("sec")
var msecHead=document.getElementById("msec")
var interval;
function timer()
{
    msec++
    msecHead.innerHTML=msec;
    if(msec>=100)
    {
        sec++;
        secHead.innerHTML=sec
        msec=00
    }
    else if(sec>=10)
    {
        min++;
        minHead.innerHTML=min
        sec=00
    }
}
function start()
{
    interval=setInterval(timer,10);
    document.getElementById("start").disabled=true;
    
}
function stop()
{
    clearInterval(interval)
    var resumeBtn=document.getElementById("resume").disabled=false;
    
}
function resume()
{
    interval=setInterval(timer,10)
    document.getElementById("resume").disabled=true;
}
function reset()
{
    min=0
    sec=0
    msec=0
    minHead.innerHTML=min
    secHead.innerHTML=sec
    msecHead.innerHTML=msec;
    stop()
    disablebutton(false)
    document.getElementById("resume").disabled=true;
}
function disablebutton(value=true)
{
   var btn= document.getElementById("start");
   btn.disabled=value
}
