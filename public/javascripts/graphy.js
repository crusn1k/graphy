function plot(donut, trackerStatus){
    donut.load({columns: [                
                ['%failure', trackerStatus.failed],
                ['%success', trackerStatus.success],
                ['%in-progress', trackerStatus.inProgress],
            ]});
}
function plotSpline(spline, data){   
    
    spline.load({columns: data.d}); 
}
$(document).ready(function() {
     var dat = {
                d:[['x', '02:00:00', '02:02:00', '02:04:00', '02:06:00', '02:08:00', '02:09:00'],
                  ['% completed', 10, 20, Math.random() * 100 + 1, 40, 50, 60],
                  ['% failed', 0, 12, 33, 33, 34, 35]]
              };
    var spline = c3.generate({
        bindto: '#chart2',
        data: {
            x: 'x',
            xFormat: '%H:%M:%S',
            columns: dat.d,
             type: 'spline'
        },        
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%H:%M:%S'
                }
            }
        }
    });
    var donut = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [                
                ['%failure', 0],
                ['%success', 0],
                ['%in-progress', 0],
            ],
            colors: {
                '%failure': 'rgb(214, 39, 40)',
                '%success': 'rgb(44, 160, 44)',
                '%in-progress': 'rgb(31, 119, 180)'
            },
            type : 'donut',
            onclick: function (d, i) {},
            onmouseover: function (d, i) {},
            onmouseout: function (d, i) {}
        },
        donut: {
            title: "Progress"
        }
    });
    var interval = setInterval(function(){                
        $.get("get-percent-completed", function(data){
            plot(donut, data);
             dat = {
                d:[['x', '02:00:00', '02:02:00', '02:04:00', '02:06:00', '02:08:00', '02:09:00'],
                  ['% completed', 10, 20, Math.random() * 100 + 1, 40, 50, 60],
                  ['% failed', 0, 12, 33, 33, 34, 35]]
              };
            plotSpline(spline, dat);
        })
    }, 100);    
});