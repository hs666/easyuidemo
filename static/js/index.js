$(function () {
   var center = $("body").layout("panel", "center");


    // 绑定菜单事件
    $(".wu-side-tree").on('click', 'li', function () {
        if (!$(this).hasClass('selected')) {
            // 获取center对应的panel对象
            // 刷新center区域
            var a =  $(this).find("a")[0];
            var url = a.getAttribute("data-link") ;
            center.panel("refresh", url);
            // 选中状态
            $(this).siblings('.selected').toggleClass().end().addClass('selected');
        }
    });



});