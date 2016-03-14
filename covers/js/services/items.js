

app.factory('category', ['$http',function($http){


    return $http.get('js/catJson.js')

        .success(function(data){

            return data;

        })

        .error(function(err){
            return err

        });


}]);



