app.controller('MyController', ['$scope', 'photoData', function ($scope, API) {


    $scope.title = 'Cover Desktop App';
    $scope.promo = 'Popular Images';
    $scope.thumbSize = 'small';
    $scope.category = [{
        "id": "5",
        "title": "Fantasy"
    }, {
        "id": "1",
        "title": "Romance"
    }, {
        "id": "2",
        "title": "Horror"
    }, {
        "id": "3",

        "title": "Fantasy"
    }, {
        "id": "4",
        "title": "Travel"
    }]


    $scope.startSearch = function (keyword) {
        API.getImages(keyword, function (data) {

            $scope.photoData = data;

        })
    }
    $scope.searchStarter;
    $scope.search = function () {

        if (!$scope.searchStarter) {
            clearInterval($scope.searchStarter);
        }

        $scope.searchStarter = setTimeout(function(){
            $scope.startSearch($scope.searchString)
        },1000);


    }

    $scope.startUpload = function(){
        cloudinary.openUploadWidget({ cloud_name: 'dmvq6g4dc', upload_preset: 'jgpjitgj'},
            function(error, result) { console.log(error, result)
                window.open("./aviary.html?url=" + result[0]['url']);
            });
    };

    $scope.openImg = function (id) {

        API.getImage(id, function (data) {
            $scope.selectedimg = encodeURIComponent(data.photo.image_url);
            window.open("./aviary.html?url=" + $scope.selectedimg);

        })


    }


}]);

