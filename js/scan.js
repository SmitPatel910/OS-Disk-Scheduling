function scanqueue(){
	seek_queue=[];
    var head=parseInt(start_track);
    var r=[];
    var l=[];
    if (direction === "left")
		l.push(0);
	else if (direction === "right")
        r.push(parseInt(max_track_size-1));
    for (var i = 0; i < request_queue2.length; i++) {
            if (request_queue2[i] < head)
                l.push(request_queue2[i]);
            if (request_queue2[i] > head)
                r.push(request_queue2[i]);
        }    
        l.sort(function(a, b){return a - b});
        console.log(l);
        r.sort(function(a, b){return a - b});
        console.log(r);
        var run = 2;
	while (run--) {
		if (direction == "left") {
			for (var i = l.length - 1; i >= 0; i--) {
				var cur_track = l[i];

				// appending current track to seek sequence
				seek_queue.push(parseInt(cur_track));
                
			}
			direction = "right";
		}
		else if (direction == "right") {
			for (var i = 0; i < r.length; i++) {
				var cur_track = r[i];
				// appending current track to seek sequence
				seek_queue.push(parseInt(cur_track));
			}
			direction = "left";
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
