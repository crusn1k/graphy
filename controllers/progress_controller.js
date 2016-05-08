var success = 0;
var failed = 0;
var totalEntries = 100000;

function getCompletedPercent(req, res, next) {    
    res.setHeader('Content-Type', 'application/json');        
    if(failed + success < totalEntries){
        failed += Math.random() * 10;
        success += 100;
    }
    res.send(JSON.stringify({ 
        success: success > totalEntries ? totalEntries : success, 
        failed: success + failed > totalEntries ? totalEntries - success : failed,
        inProgress: totalEntries - success - failed
    }));
}
module.exports = getCompletedPercent;