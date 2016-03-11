app.controller('ScreenController', ['$scope', function ($scope) {

    $scope.selOption = "above";
    $scope.scrOption = "nexus6";
    $scope.textOption = "times";
    $scope.fntStyleOpt = "normal";
    $scope.fntWeightOpt = "normal";
    $scope.textModel = "Hello There";
    $scope.fntSizeOpt = "200";
    $scope.myColor = "#ff0000";
    $scope.backColor = "#fff000";
    $scope.myColorStyle = {background:$scope.myColor};
    $scope.backColorStyle = {background:$scope.backColor};

    var basePath = "http://res.cloudinary.com/ddczj8eh5/image/upload/";

    $scope.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/v1456995901/nexus6P_wire_top.png";

    $scope.screenshots =[];
    $scope.addScreenshot = function(){

        $scope.screenshots.push({
            selOption: $scope.selOption,
            scrOption: $scope.scrOption,
            textModel: $scope.textModel,
            textOption: $scope.textOption,
            fntSizeOpt: $scope.fntSizeOpt,
            fntWeightOpt: $scope.fntWeightOpt,
            fntStyleOpt: $scope.fntStyleOpt,
            myColor: $scope.myColor,
            backColor: $scope.backColor,
            myColorStyle :$scope.myColorStyle,
            backColorStyle:$scope.backColorStyle,
            img: "http://res.cloudinary.com/ddczj8eh5/image/upload/v1456995901/nexus6P_wire_top.png"
        })


    };


     $scope.previwExpScreeshot = function(){
         var saveScreeshot =  JSON.stringify($scope.screenshots);
         console.log(saveScreeshot);

     }



    /**To chage color as per value in input box**/
    $scope.changeColorOf = function (k) {
        $scope.screenshots[k].myColorStyle = {'background': $scope.screenshots[k].myColor};
    }
    $scope.changeBackgroundCol = function (k) {
        $scope.screenshots[k].backColorStyle = {'background': $scope.screenshots[k].backColor}
    }
    $scope.upload = function (key) {
        cloudinary.openUploadWidget({cloud_name: 'ddczj8eh5', upload_preset: 'gsqlcwhy'},
            function (error, result) {

                if (error) {
                    alert("Could not upload the image")
                }
                else {
                    console.log(result[0]);
                    //jQuery.cloudinary.config({ cloud_name: 'ddczj8eh5', api_key: '874837483274837'})
                    //console.log(jQuery.cloudinary.url(result[0].public_id, { alt: "Sample Image" }))
                    var publicId = result[0].public_id;
                    $scope.screenshots[key].public_id = publicId;
                }
            });
    }
    $scope.process = function (s) {
        if (s.selOption == "above") {
            if (s.scrOption == "wear") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_481,x_0,y_148/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457468262/anroid_wear_dummy_framed_down_l5qoyg.png"
            }
            if (s.scrOption == "nexus6") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1444,x_10,y_380/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_300,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1456995901/nexus6P_wire_top.png"
            }
            if (s.scrOption == "nexus9") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1580,x_10,y_180/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_300,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457379817/nexus_9_framed_down_v8jjcz.png"
            }
            if (s.scrOption == "nexus5") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1082,x_-1,y_184/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_175,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457458394/5x_framed_down_noqdtq.png"
            }
            if (s.scrOption == "Awatch") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_130,x_-3,y_61/w_800,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_10,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457507760/apple_watch_frame_bottom_beecay.png"
            }
            if (s.scrOption == "iphone6") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1047,x_-1,y_242/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457549204/6S_framed_down_jn7uiw.png"
            }
            if (s.scrOption == "iphone6P") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1058,x_3,y_277/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457563710/6sp_framed_down_latitg.png"
            }
            if (s.scrOption == "ipadAir") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_818,x_1,y_124/w_1114,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_north,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457566588/air_frame_bottom_hcotwz.png"
            }
        }
        if (s.selOption == "below") {
            if (s.scrOption == "nexus6") {
                //http://res.cloudinary.com/ddczj8eh5/image/upload/l_undarbqqby4eaozvmzgs,w_1440,x_-8,y_-427/w_2073/v1457073651/nexus6P_wire_down_dusuxh.png
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1444,x_-8,y_-427/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_300,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457077326/nexus6P_wire_down_laibt7.png"
            }
            if (s.scrOption == "nexus9") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1540,x_10,y_-210/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_300,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457379817/nexus_9_framed_above_son3er.png"
            }
            if (s.scrOption == "nexus5") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1082,x_-1,y_-238/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_175,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457458393/5x_framed_top_tajumy.png"
            }
            if (s.scrOption == "wear") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_481,x_5,y_-128/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457468262/anroid_wear_dummy_framed_top_v81gjv.png"
            }
            if (s.scrOption == "Awatch") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_129,x_-4,y_-59/w_800,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_30,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457507760/apple_watch_frame_top_nn2u0l.png"
            }
            if (s.scrOption == "iphone6") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1045,x_-1,y_-240/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457549203/6S_framed_top_rctjz1.png"
            }
            if (s.scrOption == "iphone6P") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1058,x_1,y_-295/w_2073,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457563709/6sp_framed_top_hudjf0.png"
            }
            if (s.scrOption == "ipadAir") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_818,x_0,y_-123/w_1114,c_fit,l_text:" + s.textOption + "_" + s.fntSizeOpt + "_" + s.fntWeightOpt + "_" + s.fntStyleOpt + ":" + encodeURIComponent(s.textModel) + ",g_south,y_100,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457566588/air_frame_top_exsbmk.png"
            }
        }
        if (s.selOption == "ssnone") {
            if (s.scrOption == "nexus6") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1441,x_-6,y_-80/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457127712/nexus6P_wire_middle_bil7jw.png"
            }
            if (s.scrOption == "nexus9") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1550,x_-2,y_20/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457379817/nexus_9_framed_cag2kc.png"
            }
            if (s.scrOption == "nexus5") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1082,x_-4,y_-10/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457458395/dummy_5x_middle_jve39u.png"
            }
            if (s.scrOption == "wear") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_481,x_10,y_-2/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457468262/anroid_wear_dummy_framed_ss_owgflb.png"
            }
            if (s.scrOption == "Awatch") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_129,x_-4,y_0/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457507760/anroid_wear_dummy_middle_mqpmlp.png"
            }
            if (s.scrOption == "iphone6") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1047,x_-1,y_-23/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457549204/6S_framed_middle_adtvgm.png"
            }
            if (s.scrOption == "iphone6P") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_1058,x_1,y_-15/w_2073/w_2073,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457563709/6sp_framed_middle_ndpjoq.png"
            }
            if (s.scrOption == "ipadAir") {
                s.img = "http://res.cloudinary.com/ddczj8eh5/image/upload/l_" + s.public_id + ",w_818,x_1,y_-1/w_2073/w_1114,c_fit,co_rgb:" + s.myColor.replace("#", "") + "/b_rgb:" + s.backColor.replace("#", "") + "/v1457566588/air_frame_middle_eqihkp.png"
            }
        }

    }
    $scope.screenshot = {};
    /** create a object and on click save it**/
    $scope.createScrObj = function (k) {
        $scope.screenshots[k] = {
            public_id:$scope.screenshots[k].public_id,
            selOption: $scope.screenshots[k].selOption,
            scrOption: $scope.screenshots[k].scrOption,
            textModel: $scope.screenshots[k].textModel,
            textOption: $scope.screenshots[k].textOption,
            fntSizeOpt: $scope.screenshots[k].fntSizeOpt,
            fntWeightOpt: $scope.screenshots[k].fntWeightOpt,
           fntStyleOpt: $scope.screenshots[k].fntStyleOpt,
            myColor: $scope.screenshots[k].myColor,
            backColor: $scope.screenshots[k].backColor,
            myColorStyle:$scope.screenshots[k].myColorStyle,
            backColorStyle:$scope.screenshots[k].backColorStyle,
            img: null

        };

        //console.log($scope.screenshots[k]);
        $scope.process($scope.screenshots[k])

    }

}])
