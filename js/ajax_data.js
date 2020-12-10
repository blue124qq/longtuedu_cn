function GetJson(op) {

    var jsonobj = JSON.parse("[" + $.ajax({ url: "/ajax/GetJson.ashx", data: op, async: false }).responseText + "]");
    return jsonobj;
};
function Toshoollist(json) {
    var li = "";
    $.each(json, function (i, J) {
        if (J.Count > 0) {

            li += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">'
            + '<div class="zlbj-listbox">'
             + '<a href="/contents/' + J.NodeID + '/' + J.ID + '.html"><div class="img" style="background-image: url(' + J.ImageUrl + ');"></div></a>'
             + '<div class="number">'
             + '<span class="left">' + J.SubTitle + '</span>'
             + '</div>'
             + '<div class="text">'
              + '<h4>' + J.Title + '</h4>'
               + '<p>' + J.Summary + '</p>'
              + ' <a href="/contents/' + J.NodeID + '/' + J.ID + '.html">查看详情&gt;&gt;</a>'
             + '</div>'
            + '</div>'
            + '</div>';
            paging_list(J.Count, "Toshoollist_go_page", 9, J.Page);
        }
        else {
            paging_list(0, "Toshoollist_go_page", 9, 0);
        }
    });
    $("#school_list").html(li);
}
function paging_list(count, op, ShowCount, page) {
    page = page;
    var li = "";
    var num = 4;
    if (Math.floor(count / ShowCount) <= 4) {
        num = Math.floor(count / ShowCount);
    }
    //    if (Math.floor(count / ShowCount)-page <= 4) {
    //        num = Math.floor(count / ShowCount) - page;
    //    }
    if (page > 1) {
        li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page - 1) + ")'>上一页</a></li> ";
    }
    if (page > 1) {
        li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page - 1) + ")'>" + (page - 1) + "</a></li> ";
    }
    //    if ((Math.floor(count / ShowCount) - 4) > 0 & Math.floor(count / ShowCount)-page < 2) {
    //        li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page - 4) + ")'>" + (page - 4) + "</a></li> ";
    //        li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page - 3) + ")'>" + (page - 3) + "</a></li> ";
    //    }
    for (var i = 0; i < num; i++) {
        if (i == 0) {
            li += "<li class=\"active\"><a href='javascript:void(0)' onclick='" + op + "(" + (page + i) + ")'>" + (page + i) + "</a></li> ";
        }
        else {
            if (Math.floor(count / ShowCount) > (page + i - 1)) {
                li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page + i) + ")'>" + (page + i) + "</a></li> ";
            }
        }
    }
    if (Math.floor(count / ShowCount) - page > 0) {
        li += "<li><a href='javascript:void(0)' onclick='" + op + "(" + (page + 1) + ")'>下一页</a></li> ";
    }

    $(".paging-list").html(li);
}
function Toshoollist_go_page(page) {
    NodeName = "cn-ck-4";
    var str1 = ' id>0 ';
    var str2 = '';
    var str3 = '';
    var str4 = '';
    if ($("#school_type").val() != '') {
        var str2 = " and SubTitle like N'%" + $("#school_type").val() + "%' ";
    }
    if ($("#s_province").val() != '' & $("#s_province").val() != '省份') {
        if ($("#s_city").val() != '' & $("#s_city").val() != '地级市') {
            var str3 = "' and Author like N'%" + $("#s_city").val() + "%'";
        }
        else {
            var str3 = " and Author like N'%" + $("#s_province").val() + "%'";
        }
    }

    if ($("#kw").val() != '') {
        var str4 = " and Title like N'%" + $("#kw").val() + "%'";
    }
    Toshoollist(GetJson({ "command": "ContentList", "siteID": 1, "NodeName": "" + NodeName + "", "Page": page, "ShowCount": "9", "where": "" + str1 + str2 + str3 + str4 + "" }));
}
function Tostudentlist_go_page(page) {
    NodeName = "cn-bysfc";
    var str1 = ' id>0 ';
    var str2 = '';
    var str3 = '';
    var str4 = '';
    if ($("#s_year").val() != '') {
        var str2 = " and SubTitle like N'%" + $("#s_year").val() + "%' ";
    }
    if ($("#s_type").val() != '') {
        var str3 = " and Author like N'%" + $("#s_type").val() + "%' ";
    }

    if ($("#kw").val() != '') {
        var str4 = " and Title like N'%" + $("#kw").val() + "%'";
    }

    Tostudentlist(GetJson({ "command": "ContentList_bysfc", "siteID": 1, "NodeName": "" + NodeName + "", "Page": page, "ShowCount": "12", "where": "" + str1 + str2 + str3 + str4 + "" }));
}
function IR_FAQ(json) {
    var li = "";
    $.each(json, function (i, J) {
        li += '<div class="press_releases-content-listbox"><h3>' + J.Title + '</h3><p>' + J.Content + '</p></div>';
    });
    li += '<div style="margin-top: 15px;display: block;"><a href="/channels/' + $pageInfo.channelID + '.html" style="float: right;color:#a22631">&lt;&lt;Back</a></div>';
    $("#faq_list").html(li);
}
function Tostudentlist(json) {
    var li = "";

    $.each(json, function (i, J) {
        if (J.Count > 0) {

            li += '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">'
            + '<a href="/contents/' + J.NodeID + '/' + J.ID + '.html">'
            + '<div class="bys-box">'
            + '<div class="img" style="background-image: url(' + J.ImageUrl + ');">'
            + '<span class="logo-icon" style="background-image: url(' + J.FileUrl + ')">'
            + '</span>'
            + '</div>'
            + '<div class="wz">'
            + '<h4>' + J.Title + '</h4>'
            + '<p>' + J.Summary + '</p>'
            + '</div>'
            + '</div>'
            + '</a>'
            + '</div>';
            paging_list(J.Count, "Tostudentlist_go_page", 12, J.Page);
        }
        else {
            paging_list(0, "Tostudentlist_go_page", 9, 0);
            
        }
    });


    $("#student_list").html(li);
}
function Tozplist(json) {
    var li = "";
    var wap_li = "";
    $(".paging-list").html("");
    $.each(json, function (i, J) {
        if (J.Count > 0) {

            li += '<div class="col-lg-12 pc-bsl-zp-listbox"><div class="row"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">'
            + '<p>' + J.Title + '</p>'
            + '</div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">'
            + '<p>' + J.SchoolName + '</p>'
            + '</div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">'
            + '<p>' + J.Author + '</p>'
            + '</div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">'
            + '<p>' + J.Source + '</p>'
            + '</div><div class="col-lg-2 col-md-2 col-sm-2 col-xs-12"><p><a href="/contents/' + J.NodeID + '/' + J.ID + '.html" class="btn">立刻申请</a></p>'
            + '</div></div></div>';

            wap_li += '<a href="/contents/' + J.NodeID + '/' + J.ID + '.html">'
            + '<div class="col-lg-12 wap-bsl-zp-listbox">'
            + ' <div class="row">'
            + '<div class="hidden-lg hidden-md hidden-sm col-xs-12">'
            + '<p><span>职位：</span>' + J.Title + '</p></div>'
            + '<div class="hidden-lg hidden-md hidden-sm col-xs-12">'
            + '<p><span>学校：</span>' + J.SchoolName + '</p>'
            + '</div></div></div></a>';
            paging_list(J.Count, "zplist_go_page", 8, J.Page);
        }
        else {
            paging_list(0, "zplist_go_page", 8, 0);
        }
    });
    $("#zp_list").html(li);
    $("#wap-bsl-zp").html(wap_li);
}
function zplist_go_page(page) {
    NodeName = "cn-joinour-1";
    var str1 = ' id>0 ';
    var str2 = '';
    var str3 = '';
    var str4 = '';
    if ($("#school_type").val() != '') {
        var str2 = " and SubTitle like N'%" + $("#school_type").val() + "%' ";
    }
    if ($("#s_province").val() != '' & $("#s_province").val() != '省份') {
        if ($("#s_city").val() != '' & $("#s_city").val() != '城市') {
            var str3 = " and Source like N'%" + $("#s_city").val() + "%'";
        }
        else {
            var str3 = " and Source like N'%" + $("#s_province").val() + "%'";
        }
    }

    if ($("#kw").val() != '') {
        var str4 = " and Title like N'%" + $("#kw").val() + "%'";
    }

    Tozplist(GetJson({ "command": "ContentList", "siteID": 1, "NodeName": NodeName, "Page": page, "ShowCount": "8", "where": "" + str1 + str2 + str3 + str4 + "" }));
}
function Tonewslist(json) {
    var li = "";
    $.each(json, function (i, J) {
        if (J.Count > 0) {
            li += '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"><div class="news-listbox">'
                  + '<a href="/contents/' + J.NodeID + '/' + J.ID + '.html">'
                  + '<div class="img" style="background-image: url(' + J.ImageUrl + ');"></div>'
                  + '</a>'
                  + '<div class="number">'
                  + '<span class="left">On ' + J.AddDate + '</span>'
                  + '<span class="right"><i class="fa fa-eye" aria-hidden="true"></i>' + J.Hits + '</span>'
                  + '</div><div class="text">'
                  + '<h4> ' + J.Title + '</h4>'
                  + '<p> ' + J.Summary + '</p>'
                  + '<a href="/contents/' + J.NodeID + '/' + J.ID + '.html">'
                  + '查看详情&gt;&gt;'
                   + '</a>'
                  + '</div></div></div>';
            paging_list(J.Count, "search_action", 8, J.Page);
        }
        else {
            paging_list(0, "search_action", 8, 0);
        }
       
    });
    $("#news_list").html(li);
}