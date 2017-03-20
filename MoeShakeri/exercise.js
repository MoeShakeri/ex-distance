var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------
    var d2 = (p1.x - p2.x)*(p1.x - p2.x) + 
        (p1.y - p2.y)*(p1.y - p2.y);
    return Math.sqrt(d2);
    return 'Error: 1st function not implemented';
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(elem) {
        var dx = elem.x-newPoint.x;
        var dy = elem.y-newPoint.y;
        elem.distance = Math.sqrt(dx*dx+dy*dy);
    });
    return data;


    
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 2nd function not implemented';
};

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b) {
        return a.distance-b.distance;
    });

    return data.slice(0,k);
    //-------------------
    //---- Your Code ----
    //-------------------
    //return 'Error: 3rd function not implemented';
};

module.exports = exercise;
