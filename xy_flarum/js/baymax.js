$(function() {
  //后退
  $(".win-back").click(function() {
      window.history.back(-1);
  });
  //刷新
  $(".win-refresh").click(function() {
      window.location.reload();
  });
  //返回顶部
  $(window).scroll(function(){
    if ($(window).scrollTop()>100){
      $(".back-top").fadeIn(1000);
    }
    else
    {
      $(".back-top").fadeOut(1000);
    }
  });
  $(".win-backtop").click(function() {
      $('body,html').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });
  //回到底部
  $('.win-backbottom').click(function(){
    $('html,body').animate({
        scrollTop:$('#quick_reply_form').offset().top
    }, 500);
  });
  // 鼠标经过显示帖子列表
  $(".Navigation-back, .DiscussionPage-list").hover(function() {
      $(".App").addClass("paneShowing");
      },function(){
          $(".App").removeClass("paneShowing");
  });
  //静止在顶部或尾部
  $(".affix").each(function() {
      var e = $(this);
      var style = e.attr("data-style");
      var top = e.attr("data-offset-fixed");
      if (top == null) {
          top = e.offset().top;
      } else {
          top = e.offset().top - parseInt(top);
      };
      if (style == null) {
          style = "scrolled";
      };
      $(window).bind("scroll", function() {
          var thistop = top - $(window).scrollTop();
          if (style == "scrolled" && thistop < 0) {
              e.addClass("scrolled");
          } else {
              e.removeClass("scrolled");
          };
          var thisbottom = top - $(window).scrollTop() - $(window).height();
          if (style == "fixed-bottom" && thisbottom > 0) {
              e.addClass("fixed-bottom");
          } else {
              e.removeClass("fixed-bottom");
          };
      });
  });
  //图片自适应
  // var w = $(".thread_post").width();
  // $(".thread_post img").each(function(){
  //     var img_w = $(this).width();
  //     var img_h = $(this).height();
  //     if(img_w>w){
  //         var height = (w*img_h)/img_w;
  //         $(this).css({"width":w,"height":height});
  //     }
  // });
});
//Off Canvas 导航
$(function(){function a(){e.toggleClass(j),d.toggleClass(i),f.toggleClass(k),g.toggleClass(l)}function b(){e.addClass(j),d.animate({left:"0px"},n),f.animate({left:o},n),g.animate({left:o},n)}function c(){e.removeClass(j),d.animate({left:"-"+o},n),f.animate({left:"0px"},n),g.animate({left:"0px"},n)}var d=$(".pushy"),e=$("body"),f=$("#offcanvas"),g=$(".push"),h=$(".site-overlay"),i="pushy-left pushy-open",j="pushy-active",k="offcanvas-push",l="push-push",m=$(".Navigation-drawer, .pushy a"),n=200,o=d.width()+"px";if(cssTransforms3d=function(){var a=document.createElement("p"),b=!1,c={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(a,null);for(var d in c)void 0!==a.style[d]&&(a.style[d]="translate3d(1px,1px,1px)",b=window.getComputedStyle(a).getPropertyValue(c[d]));return document.body.removeChild(a),void 0!==b&&b.length>0&&"none"!==b}())m.click(function(){a()}),h.click(function(){a()});else{d.css({left:"-"+o}),f.css({"overflow-x":"hidden"});var p=!0;m.click(function(){p?(b(),p=!1):(c(),p=!0)}),h.click(function(){p?(b(),p=!1):(c(),p=!0)})}});