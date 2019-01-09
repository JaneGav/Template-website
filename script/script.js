$(document).ready(function () {

  $(".dots:first-child").addClass("active_dot");

  function slide(target) {
    var activeImg = $('.slider li').eq(target);
    activeImg.addClass('active');

    $(".slider ul").animate({
      'right': +700 * target + 'px'
    }, function () {
      $(this).stop(true, false);
      activeImg.next().removeClass('active');
      $(".dots").removeClass("active_dot").eq(target).addClass("active_dot");
    });
  }

  $(".dots").click(function () {
    var target = $(this).index();
    slide(target)
  });

  $("#rightButton").click(function () {
    var target = $(".dots.active_dot").index();
    if (target === $(".dots").length - 1) {
      target = -1;
    }
    target = target + 1
    slide(target)
  });

  $("#leftButton").click(function () {
    var target = $(".dots.active_dot").index();
    if (target === 0) {
      target = $(".dots").length;
    }
    target = target - 1;
    slide(target);
  });

  $(document).ready(function () {


    $('.menu_item li').hover(
      function () {
        //show its submenu
        $('ul', this).stop().slideDown('slow');

      },
      function () {
        //hide its submenu
        $('ul', this).stop().slideUp('slow');
      }
    );

  })


















  // $(function () {
  //   var elWrap = $('.slider');
  //   var el = elWrap.find('ul li.slider');
  //   var indexLi = 1;
  //   var indexMax = el.length;

  //   function change() {
  //     el.fadeOut(500, function () {
  //       el.filter(':nth-child(' + indexLi + ')').hide().fadeIn(500, function(){});
  //     });
  //     console.log(indexLi);

  //   }

  //   function autoChange() {
  //     indexLi++;
  //     if (indexLi > indexMax) {
  //       indexLi = 1;
  //     }
  //     change();
  //   }

  //   $('#rightButton').click(function () {
  //     indexLi++;
  //     if (indexLi > indexMax) {
  //       indexLi = 1;
  //     }
  //     change();
  //   });

  //   $('#leftButton').click(function () {
  //     indexLi--;
  //     if (indexLi < 1) {
  //       indexLi = indexMax;
  //     }
  //     change();
  //   });

  //   $(".dots").on("click", function () {

  //     var idx = $(this).index()
  //     var imgArray = $("ul li.slider");

  //     $(".dots").removeClass("active_dot");
  //     $(this).addClass("active_dot");

  //     imgArray.fadeOut(500, function () {
  //       var currentImage = imgArray[idx];
  //       $(currentImage).hide().fadeIn(500, function () {
  //         $(this).addClass('active');
  //       })
  //     });
  //   });

  // });

});
