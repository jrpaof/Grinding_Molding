var $el = $(".table-autoscroll");
function anim() {
  var st = $el.scrollTop();
  var sb = $el.prop("scrollHeight")-$el.innerHeight();
  $el.animate({scrollTop: st<sb/2 ? sb : 0}, 10000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);