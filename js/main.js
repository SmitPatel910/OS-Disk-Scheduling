function myfunction1(){
//get context of canvas
var c=canvas.getContext("2d");
c.clearRect(0,0,innerWidth,innerHeight);
var temp1=canvas.width-8;
c.fillText("TRACK NUMBER ON DISK",450,50,200);
c.beginPath();
c.moveTo(4,100);
//taking input
//padding is the unit of scale(difference between 2 tracks)
var padding=(temp1/max_track_size);
var prev=4;
//draw horizontal line
for(var i=0;i<max_track_size;i++)
{
    c.lineTo(prev+padding,100);
    prev=prev+padding;
    c.stroke();
}
c.moveTo(4,90);
prev=4;
//draw vertical lines representing tracks
for(var j=1;j<=max_track_size;j++){
c.lineTo(prev,110);
var temp=j-1;
if(seek_queue.includes(temp)||temp==start_track){
    if(temp+1==max_track_size && prev+12>=canvas.width)
    {
        c.fillText(temp,prev-8,85);
    }
        else
    c.fillText(temp,prev-1,85);
}
c.stroke();
c.moveTo(prev+padding,90);
prev=prev+padding;
}
var startpos=(start_track)*padding+4;
var dy=120;
console.log(startpos);
c.beginPath();
c.arc(startpos,dy,5,0,Math.PI*2,false);
c.fillStyle="blue";
c.fill();
c.stroke();
var k=0;
//to calculate total seek time.
var z=start_track;
var seek_time=0;
for(var k=0;k<seek_queue.length;k++)
{
    seek_time+=Math.abs(seek_queue[k]-z);
    z=seek_queue[k];
}
k=0;
//animation function
c.beginPath();
c.moveTo(startpos,dy);
function animate()
{   
    var nextpos=(seek_queue[k])*padding+4;
    dy=dy+20;
    c.lineTo(nextpos,dy);
    c.stroke();
    c.arc(nextpos,dy,5,0,Math.PI*2,false);
    c.fillStyle="blue";
    c.fill();
    c.stroke();
    k++;
    c.moveTo(nextpos,dy);
    if(k==seek_queue.length)
    {
        clearInterval(timec);
        document.getElementById('answer').innerHTML="The total seek time is " + seek_time;
    }    
}
var timec=setInterval(animate, 2000); 
}