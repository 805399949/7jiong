!function(win, option) {
    var count = 0, 
        designWidth = option.designWidth, 
        designHeight = option.designHeight || 0, 
        designFontSize = option.designFontSize || 20, 
        callback = option.callback || null,
        root = document.documentElement,
        body = document.body,
        rootWidth, newSize, t, self;
        root.style.width = "100%";
    //返回root元素字体计算结果
    if(win.innerWidth < 960 ) {
        designWidth = 480;
    }
    function _getNewFontSize() {
      var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
      return parseInt( scale * 10000 * designFontSize ) / 10000;
    }
    function calc() {
      self = self ? self : calc;
      newSize = _getNewFontSize();
      //如果css已经兼容当前分辨率就不管了
      if( newSize + 'px' !== getComputedStyle(root)['font-size'] ) {
        root.style.fontSize = newSize + "px";
        return callback && callback(newSize);
      };
      
    };
    calc();
    //横竖屏切换的时候改变fontSize，根据需要选择使用
    win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
      clearTimeout(t);
      t = setTimeout(function () {
        self();
      }, 300);
    }, false);
}(window, {
    designWidth: 1920, 
    designFontSize: 15,
});

$(document).ready(function() {
    $('#nav-btn').on('click', function() {
        if($(this).data('toggle')) {
            $('#header-nav').stop().animate({
                left: 0,
                zIndex: 20
            },500)
            $(this).addClass('close');
            $(this).data('toggle', 0);
        }else {
            $('#header-nav').stop().animate({
                left: '100%',
                zIndex: -1
            },0);
            $(this).removeClass('close');
            $(this).data('toggle', 1);
        }
    
    })
})