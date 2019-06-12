$(function(){

  //顶部标题
  $(window).scroll(function(){
    if($(this).scrollTop()>$('.title').height()){
      $('.nav').addClass('fixed');
      $('.slider').css('marginTop', $('.nav').height());
    }else{
      $('.nav').removeClass('fixed');
      $('.slider').css('marginTop',0);
    }
  })

//导航文字隐藏栏
$('.webjian').mouseenter(function(){
  $('.jianshe').stop().show();
})
$('.webjian').mouseleave(function(){
  $('.jianshe').stop().hide();
})

 //轮播图
  var $lis = $('.slider>ul>li');
  // 设置左右箭头的点击事件
  var index = 0;
  $('.arrow-right').click(function () {
    // 检测，如果index值为5，设置index为0(最终值)
    if (index === $lis.length) {
      index = -1;
    }
    // 设置index自增1
    index++;
    // 根据index，设置对应li渐入显示，其余li渐出
    $lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
  });
  $('.arrow-left').click(function () {
    if (index === 0) {
      index = $lis.length; // 此处设置为length是因为后面还有--，最终取值为length-1
    }
    index--;
    $lis.eq(index).stop().fadeIn().siblings().stop().fadeOut();
  });
  //轮播图动画
  var time=setInterval(function(){
    $('.arrow-right').stop().click();
  },3000);
  $('.slider').mouseenter(function(){
    clearInterval(time);
  })
  $('.slider').mouseleave(function(){
    time=setInterval(function(){
      $('.arrow-right').stop().click();
    },3000);
  })
   
//tab切换栏
var $divs=$('div.main');
$('.tab-item').mouseover(function(){
  $(this).addClass('active').siblings().removeClass('active');
  var index=$(this).index();
  $divs.eq(index).addClass('selected').siblings().removeClass('selected');

})
  
//右边固定栏
$(window).scroll(function(){
  if($(window).scrollTop()>300){
    $('.labright').fadeIn(500)
  }
  else{
    $('.labright').fadeOut(500)
  }
});

//右边返回顶部点击事件
$('#top').click(function(){
  $('body,html').animate({
    scrollTop:0
  },500)
});

//鼠标移入出文字事件
$('#wx').mouseenter(function(){
  $('.wx').stop().show()
});
$('#wx').mouseleave(function(){
  $('.wx').stop().hide()
});
$('#tel').mouseenter(function(){
  $('.tel').stop().show()
});
$('#tel').mouseleave(function(){
  $('.tel').stop().hide()
});

//左边对话框固定栏
var $btn1=$('#btn1');
var $btn2=$('#btn2');

$btn1.click(function(){
  $('.lableft-f').animate({
    height:0,
  },500,function(){
    $btn2.show().stop().siblings('#btn1').hide();
  })
});  

$btn2.click(function(){
  $('.lableft-f').animate({
    height:330,
  },500,function(){
    $btn2.hide().stop().siblings('#btn1').show();
  })
})


});