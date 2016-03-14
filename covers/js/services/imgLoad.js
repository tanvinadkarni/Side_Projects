/**
 * Created by tanvi on 2/17/2016.
 */
app.factory('photoData',['$http',function($http){


    var API = {};
    API.getImages = function(keyword,cb){
        $http.get('https://api.500px.com/v1/photos/search?license_type=6&rpp=100&term='+encodeURIComponent(keyword)+'&consumer_key=KWFCCHfsN2APEd4AOLQOsTzdy9qRQCFhUIeOXzKO')

            .success(function(data){

                return cb(data)
            })

            .error(function(err){

                return err;

            });
    };


    API.getImage= function(id,cb) {

        $http.get('https://api.500px.com/v1/photos/' + id + '?license_type=6&term=romance&consumer_key=KWFCCHfsN2APEd4AOLQOsTzdy9qRQCFhUIeOXzKO')

            .success(function (data) {

                return cb(data)

            })
            .error(function (err) {

                return err;

            });
    };
        return API;


}]);


