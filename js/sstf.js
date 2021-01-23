function sstfqueue()
{
    seek_queue=[];
    var head=parseInt(start_track);
    while(request_queue1.length!=0)
    {
        var difference_array=[];
        var difference_index = new Map();
        for(var i=0;i<request_queue1.length;i++)
        {
            var temp=Math.abs(head-request_queue1[i]);
            difference_array.push([temp,parseInt(request_queue1[i])]);

        }
        difference_array.sort(function(a,b){
            return a[0]-b[0];
        })
        var ans;
        if(difference_array.length!=1 && difference_array[0][0]==difference_array[1][0])
        {
            if(direction=="left")
            {
                if(difference_array[0][1]<head)
                ans=difference_array[0][1];
                else
                ans=difference_array[1][1];
            }
            else{
                if(difference_array[0][1]>head)
                ans=difference_array[0][1];
                else
                ans=difference_array[1][1];
            }
        }
        else{
            ans=difference_array[0][1];
            if(ans>head)
            direction="right";
            else
            direction="left";
        }
        var j=parseInt(request_queue1.indexOf(ans));
        request_queue1.splice(j,1);
        head=ans;
        seek_queue.push(ans);
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
