function cscanqueue()
{
    seek_queue=[];
    var head=parseInt(start_track);
    var r=[];
    var l=[];
    l.push(0);
    r.push(parseInt(max_track_size-1));
    for (var i = 0; i < request_queue3.length; i++) {
        if (request_queue3[i] < head)
            l.push(request_queue3[i]);
        if (request_queue3[i] > head)
            r.push(request_queue3[i]);
    }    
    l.sort(function(a, b){return a - b});
    r.sort(function(a, b){return a - b});
    if(direction=="right")
    {
        for (var i = 0; i < r.length; i++) { 
            var temp=r[i];
            seek_queue.push(temp);
        } 
        for (var i = 0; i < l.length; i++) { 
            var temp=l[i];
            seek_queue.push(temp);
        } 
    }
    else
    {
        for (var i = 0; i < l.length; i++) { 
            var temp=l[i];
            seek_queue.push(temp);
        } 
        for (var i = 0; i < r.length; i++) { 
            var temp=r[i];
            seek_queue.push(temp);
        } 
    }
    var z=start_track;
var seek_time=0;
for(var k=0;k<seek_queue.length;k++)
{
    seek_time+=Math.abs(seek_queue[k]-z);
    z=seek_queue[k];
}
return seek_time;
}
