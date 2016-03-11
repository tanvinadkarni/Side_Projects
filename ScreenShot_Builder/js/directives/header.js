/**
 * Created by tanvi on 2/29/2016.
 */
app.directive('header',function(){
    return{
            restrict:'E',
            scope:{
                listing: '='
            },
            templateUrl:'js/directives/header.html'

    }


})