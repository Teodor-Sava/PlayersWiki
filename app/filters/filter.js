angular.module('myApp')
    .filter("filterSearch", function() {
        return function(data, search) {
            if (search === undefined) {
                return data;
            }
            var toReturn = [];
            angular.forEach(data, function(element) {
                if(element._id.toLowerCase().match(search.toLowerCase()))
                    toReturn.push(element);
            }, toReturn);
            return toReturn;
        };
    })
    .filter('startFrom',function(){
    return function(data,start){
        return data.slice(start);
    }
});