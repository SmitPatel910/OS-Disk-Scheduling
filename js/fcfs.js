function fcfsqueue(){
var z=start_track;
var seek_time=0;
for(var k=0;k<request_queue.length;k++)
{
    seek_time+=Math.abs(request_queue[k]-z);
    z=request_queue[k];
}
return seek_time;
}