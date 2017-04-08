!function () {
    // var myarr = new Array();
    // for (var i = 0; i < 3; i++) {
    //     myarr[i] = new Array();
    //     for (var j = 0; j < 7; j++) {
    //         myarr[i][j] = i * j;
    //     }
    // }

    var infos = [['小A', '女', 21, '大一'], ['小B', '男', 23, '大三'],

    ['小C', '男', 24, '大四'], ['小D', '女', 21, '大一'],

    ['小E', '女', 22, '大四'], ['小F', '男', 21, '大一'],

    ['小G', '女', 22, '大二'], ['小H', '女', 20, '大三'],

    ['小I', '女', 20, '大一'], ['小J', '男', 20, '大三']]

    var arr1 = [], arr2 = [];
    for (var i = 0, len = infos.length; i < len; i++) {
        if (infos[i][3] == "大一") {
            arr1.push(infos[i]);
        }
    }

    for (var j = 0, l = arr1.length; j < l; j++) {
        if (arr1[j][1] == "女") {
            arr2.push(arr1[j][0]);
        }
    }
}()