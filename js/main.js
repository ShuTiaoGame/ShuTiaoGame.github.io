$("#wrapper").on("touchstart", function(e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }
    (startX = e.originalEvent.changedTouches[0].pageX),
        (startY = e.originalEvent.changedTouches[0].pageY);
});
$("#wrapper").on("touchend", function(e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }
    (moveEndX = e.originalEvent.changedTouches[0].pageX),
        (moveEndY = e.originalEvent.changedTouches[0].pageY),
        (X = moveEndX - startX),
        (Y = moveEndY - startY);
    //左滑
    if (X > 0) {
        // alert('左滑');
        slideLeft();
    }
    //右滑
    else if (X < 0) {
        // alert('右滑');
        slideRight();
    }
});
