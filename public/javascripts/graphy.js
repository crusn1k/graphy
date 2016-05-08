function plot(percentCompleted){
    var chart1 = c3.generate({
        bindto: '#chart1',
        data: {
            columns: [                
                ['%left', 100-percentCompleted],
                ['%completed', percentCompleted]
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Progress"
        }
    });
}
$(document).ready(function() {
    var interval = setInterval(function(){                
        $.get("get-percent-completed", function(data){
            plot(data.percentCompleted);
        })
    }, 1000)
    var chart = c3.generate({
        bindto: '#chart2',
        data: {
            x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
            columns: [
                ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 340, 200, 500, 250, 350]
            ],
             type: 'spline'
        },        
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
    });
});