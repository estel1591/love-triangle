/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangle = 0;
    for (var i=0; i<preferences.length; i++ ){
        var a = i+1;
        var b = preferences[i];
        var c = preferences[b-1];
        var d = preferences[c-1];
        if (d == a && c != d) {
            delete preferences[i]; 
            delete preferences[b-1];
            delete  preferences[c-1];
            triangle++;
        }
    }

    return triangle;
};
