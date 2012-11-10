(function(e){var a=/android|iphone|ipad/i.test(navigator.userAgent.toLowerCase()),c=a?"touchend":"click";e.fn.doubletap=function(b,d){d=null==d?300:d;this.bind("touchstart",function(){e(this).data("touchStarted",(new Date).getTime())});this.bind(c,function(c){var g=(new Date).getTime(),n=a&&e(this).data("touchStarted");if(!a||n&&g-n<d)e(this).data("touchStarted",null),n=e(this).data("lastTouch")||g+1,n=g-n,n<d&&0<n?(e(this).data("lastTouch",null),null!==b&&"function"===typeof b&&b(c)):e(this).data("lastTouch",
g)})}})(jQuery);jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==
(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?
b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});
(function(e,a,c,b){function d(a,b,c){b="translate3d("+b+","+c+", 0px)";a.css({"-moz-transform":b,"-webkit-transform":b,transform:b})}function f(a){this.options=e.extend({},a);this.easing="easeOutQuad";this.reset()}function g(){return(new Date).getTime()}jQuery.widget("mobile.scrollview",jQuery.mobile.widget,{options:{fps:60,direction:null,scrollDuration:2E3,overshootDuration:250,snapbackDuration:500,moveThreshold:10,moveIntervalThreshold:150,scrollMethod:"translate",startEventName:"scrollstart",updateEventName:"scrollupdate",
stopEventName:"scrollstop",eventType:e.support.touch?"touch":"mouse",showScrollBars:!0,pagingEnabled:!1,delayedClickSelector:"a,input,textarea,select,button,.ui-btn",delayedClickEnabled:!1,rotate:0},_makePositioned:function(a){"static"==a.css("position")&&a.css("position","relative")},_create:function(){this._$clip=e(this.element).addClass("ui-scrollview-clip");var a=this._$clip.children();1<a.length&&(a=this._$clip.wrapInner("<div></div>").children());this._$view=a.addClass("ui-scrollview-view");
this._$clip.css("overflow","scroll"===this.options.scrollMethod?"scroll":"hidden");this._makePositioned(this._$clip);this._$view.css("overflow","hidden");this.options.showScrollBars="scroll"===this.options.scrollMethod?!1:this.options.showScrollBars;this._makePositioned(this._$view);this._$view.css({left:0,top:0});this._sy=this._sx=0;a=this.options.direction;this._hTracker="y"!==a?new f(this.options):null;this._vTracker="x"!==a?new f(this.options):null;this._timerInterval=1E3/this.options.fps;this._timerID=
0;var b=this;this._timerCB=function(){b._handleMomentumScroll()};this._addBehaviors()},_startMScroll:function(a,b){this._stopMScroll();this._showScrollBars();var c=!1,d=this.options.scrollDuration;this._$clip.trigger(this.options.startEventName);var e=this._hTracker;if(e){var f=this._$clip.width(),h=this._$view.width();e.start(this._sx,a,d,h>f?-(h-f):0,0);c=!e.done()}if(e=this._vTracker)f=this._$clip.height(),h=this._$view.height(),e.start(this._sy,b,d,h>f?-(h-f):0,0),c=c||!e.done();c?this._timerID=
setTimeout(this._timerCB,this._timerInterval):this._stopMScroll()},_stopMScroll:function(){this._timerID&&(this._$clip.trigger(this.options.stopEventName),clearTimeout(this._timerID));this._timerID=0;this._vTracker&&this._vTracker.reset();this._hTracker&&this._hTracker.reset();this._hideScrollBars()},_handleMomentumScroll:function(){var a=!1,b=0,c=0,d=this._vTracker;d&&(d.update(),c=d.getPosition(),a=!d.done());if(d=this._hTracker)d.update(),b=d.getPosition(),a=a||!d.done();this._setScrollPosition(b,
c);this._$clip.trigger(this.options.updateEventName,[{x:b,y:c}]);a?this._timerID=setTimeout(this._timerCB,this._timerInterval):this._stopMScroll()},_setScrollPosition:function(a,b){this._sx=a;this._sy=b;var c=this._$view,e=this.options.scrollMethod;switch(e){case "translate":d(c,a+"px",b+"px");break;case "position":c.css({left:a+"px",top:b+"px"});break;case "scroll":var f=this._$clip[0];f.scrollLeft=-a;f.scrollTop=-b}var g=this._$vScrollBar,f=this._$hScrollBar;g&&(g=g.find(".ui-scrollbar-thumb"),
"translate"===e?d(g,"0px",-b/c.height()*g.parent().height()+"px"):g.css("top",100*(-b/c.height())+"%"));f&&(g=f.find(".ui-scrollbar-thumb"),"translate"===e?d(g,-a/c.width()*g.parent().width()+"px","0px"):g.css("left",100*(-a/c.width())+"%"))},scrollTo:function(a,b,c){this._stopMScroll();if(!c)return this._setScrollPosition(a,b);var a=-a,b=-b,d=this,f=g(),l=e.easing.easeOutQuad,h=this._sx,i=this._sy,k=a-h,m=b-i,j=function(){var e=g()-f;e>=c?(d._timerID=0,d._setScrollPosition(a,b)):(e=l(e/c,e,0,1,c),
d._setScrollPosition(h+k*e,i+m*e),d._timerID=setTimeout(j,d._timerInterval))};this._timerID=setTimeout(j,this._timerInterval)},getScrollPosition:function(){return{x:-this._sx,y:-this._sy}},_getScrollHierarchy:function(){var a=[];this._$clip.parents(".ui-scrollview-clip").each(function(){var b=e(this).jqmData("scrollview");b&&a.unshift(b)});return a},_getAncestorByDirection:function(a){for(var b=this._getScrollHierarchy(),c=b.length;0<c--;){var d=b[c],e=d.options.direction;if(!e||e==a)return d}return null},
_handleDragStart:function(a,b,c){e.each(this._getScrollHierarchy(),function(a,b){b._stopMScroll()});this._stopMScroll();var d=this._$clip,f=this._$view;this.options.delayedClickEnabled&&(this._$clickEle=e(a.target).closest(this.options.delayedClickSelector));this._lastX=b;this._lastY=c;this._doSnapBackY=this._doSnapBackX=!1;this._speedY=this._speedX=0;this._directionLock="";this._didDrag=!1;if(this._hTracker){var g=parseInt(d.css("width"),10),b=parseInt(f.css("width"),10);this._maxX=g-b;0<this._maxX&&
(this._maxX=0);this._$hScrollBar&&this._$hScrollBar.find(".ui-scrollbar-thumb").css("width",g>=b?"100%":Math.floor(100*(g/b))+"%")}if(this._vTracker){var h=parseInt(d.css("height"),10),d=parseInt(f.css("height"),10);this._maxY=h-d;0<this._maxY&&(this._maxY=0);this._$vScrollBar&&this._$vScrollBar.find(".ui-scrollbar-thumb").css("height",h>=d?"100%":Math.floor(100*(h/d))+"%")}d=this.options.direction;this._pagePos=this._pageSize=this._pageDelta=0;if(this.options.pagingEnabled&&("x"===d||"y"===d))this._pageSize=
"x"===d?g:h,this._pagePos="x"===d?this._sx:this._sy,this._pagePos-=this._pagePos%this._pageSize;this._lastMove=0;this._enableTracking();("mouse"==this.options.eventType||this.options.delayedClickEnabled)&&a.preventDefault();a.stopPropagation()},_propagateDragMove:function(a,b,c,d,e){this._hideScrollBars();this._disableTracking();a._handleDragStart(b,c,d);a._directionLock=e;a._didDrag=this._didDrag},_handleDragMove:function(a,b,c){this._lastMove=g();var d=b-this._lastX,e=c-this._lastY,f=this.options.direction,
h=this.options.rotate/90;switch(h){case 1:case -1:var i=e,e=-1*d*h,d=i*h;break;case 2:e*=-1}if(!this._directionLock){var k=Math.abs(d),m=Math.abs(e),h=this.options.moveThreshold;if(k<h&&m<h)return!1;var j=null;k<m&&0.5>k/m?j="y":k>m&&0.5>m/k&&(j="x");if(f&&j&&f!=j){var o=this._getAncestorByDirection(j);if(o)return this._propagateDragMove(o,a,b,c,j),!1}this._directionLock=f?f:j?j:"none"}h=this._sx;i=this._sy;if("y"!==this._directionLock&&this._hTracker&&(k=this._sx,this._speedX=d,h=k+d,this._doSnapBackX=
!1,0<h||h<this._maxX)){if("x"===this._directionLock&&(o=this._getAncestorByDirection("x")))return this._setScrollPosition(0<h?0:this._maxX,i),this._propagateDragMove(o,a,b,c,j),!1;h=k+d/2;this._doSnapBackX=!0}if("x"!==this._directionLock&&this._vTracker&&(m=this._sy,this._speedY=e,i=m+e,this._doSnapBackY=!1,0<i||i<this._maxY)){if("y"===this._directionLock&&(o=this._getAncestorByDirection("y")))return this._setScrollPosition(h,0<i?0:this._maxY),this._propagateDragMove(o,a,b,c,j),!1;i=m+e/2;this._doSnapBackY=
!0}if(this.options.pagingEnabled&&("x"===f||"y"===f))this._doSnapBackX||this._doSnapBackY?this._pageDelta=0:(a=this._pagePos,j="x"===f?h:i,d="x"===f?d:e,this._pageDelta=a>j&&0>d?this._pageSize:a<j&&0<d?-this._pageSize:0);this._didDrag=!0;this._lastX=b;this._lastY=c;this._setScrollPosition(h,i);this._showScrollBars();return!1},_handleDragStop:function(){var a=this._lastMove,c=g(),a=a&&c-a<=this.options.moveIntervalThreshold,c=this._hTracker&&this._speedX&&a?this._speedX:this._doSnapBackX?1:0,d=this._vTracker&&
this._speedY&&a?this._speedY:this._doSnapBackY?1:0,a=this.options.direction;this.options.pagingEnabled&&("x"===a||"y"===a)&&!this._doSnapBackX&&!this._doSnapBackY?(c=this._sx,d=this._sy,"x"===a?c=-this._pagePos+this._pageDelta:d=-this._pagePos+this._pageDelta,this.scrollTo(c,d,this.options.snapbackDuration)):c||d?this._startMScroll(c,d):this._hideScrollBars();this._disableTracking();!this._didDrag&&this.options.delayedClickEnabled&&this._$clickEle.length&&this._$clickEle.trigger("mousedown").trigger("mouseup").trigger("click");
return this._didDrag?!1:b},_enableTracking:function(){e(c).bind(this._dragMoveEvt,this._dragMoveCB);e(c).bind(this._dragStopEvt,this._dragStopCB)},_disableTracking:function(){e(c).unbind(this._dragMoveEvt,this._dragMoveCB);e(c).unbind(this._dragStopEvt,this._dragStopCB)},_showScrollBars:function(){this._$vScrollBar&&this._$vScrollBar.addClass("ui-scrollbar-visible");this._$hScrollBar&&this._$hScrollBar.addClass("ui-scrollbar-visible")},_hideScrollBars:function(){this._$vScrollBar&&this._$vScrollBar.removeClass("ui-scrollbar-visible");
this._$hScrollBar&&this._$hScrollBar.removeClass("ui-scrollbar-visible")},_addBehaviors:function(){var a=this;"mouse"===this.options.eventType?(this._dragStartEvt="mousedown",this._dragStartCB=function(b){return a._handleDragStart(b,b.clientX,b.clientY)},this._dragMoveEvt="mousemove",this._dragMoveCB=function(b){return a._handleDragMove(b,b.clientX,b.clientY)},this._dragStopEvt="mouseup",this._dragStopCB=function(b){return a._handleDragStop(b)}):(this._dragStartEvt="touchstart",this._dragStartCB=
function(b){var c=b.originalEvent.targetTouches[0];return a._handleDragStart(b,c.pageX,c.pageY)},this._dragMoveEvt="touchmove",this._dragMoveCB=function(b){var c=b.originalEvent.targetTouches[0];return a._handleDragMove(b,c.pageX,c.pageY)},this._dragStopEvt="touchend",this._dragStopCB=function(b){return a._handleDragStop(b)});this._$view.bind(this._dragStartEvt,this._dragStartCB);if(this.options.showScrollBars){var b=this._$clip;this._vTracker&&(b.append('<div class="ui-scrollbar ui-scrollbar-y"><div class="ui-scrollbar-track"><div class="ui-scrollbar-thumb"></div></div></div>'),
this._$vScrollBar=b.children(".ui-scrollbar-y"));this._hTracker&&(b.append('<div class="ui-scrollbar ui-scrollbar-x"><div class="ui-scrollbar-track"><div class="ui-scrollbar-thumb"></div></div></div>'),this._$hScrollBar=b.children(".ui-scrollbar-x"))}}});e.extend(f.prototype,{start:function(a,b,c,d,e){this.state=0!=b?a<d||a>e?2:0:3;this.pos=a;this.speed=b;this.duration=2==this.state?this.options.snapbackDuration:c;this.minPos=d;this.maxPos=e;this.fromPos=2==this.state?this.pos:0;this.toPos=2==this.state?
this.pos<this.minPos?this.minPos:this.maxPos:0;this.startTime=g()},reset:function(){this.state=3;this.duration=this.maxPos=this.minPos=this.speed=this.pos=0},update:function(){var a=this.state;if(3==a)return this.pos;var b=this.duration,c=g()-this.startTime,c=c>b?b:c;if(0==a||1==a){var d=this.speed*(1-e.easing[this.easing](c/b,c,0,1,b)),f=this.pos+d,l=0==a&&(f<this.minPos||f>this.maxPos);l&&(f=f<this.minPos?this.minPos:this.maxPos);this.pos=f;1==a?c>=b&&(this.state=2,this.fromPos=this.pos,this.toPos=
f<this.minPos?this.minPos:this.maxPos,this.duration=this.options.snapbackDuration,this.startTime=g()):0==a&&(l?(this.state=1,this.speed=d/2,this.duration=this.options.overshootDuration,this.startTime=g()):c>=b&&(this.state=3))}else 2==a&&(c>=b?(this.pos=this.toPos,this.state=3):this.pos=this.fromPos+(this.toPos-this.fromPos)*e.easing[this.easing](c/b,c,0,1,b));return this.pos},done:function(){return 3==this.state},getPosition:function(){return this.pos}});jQuery.widget("mobile.scrolllistview",jQuery.mobile.scrollview,
{options:{direction:"y"},_create:function(){e.mobile.scrollview.prototype._create.call(this);this._$dividers=this._$view.find(":jqmData(role='list-divider')");this._lastDivider=null},_setScrollPosition:function(a,b){e.mobile.scrollview.prototype._setScrollPosition.call(this,a,b);for(var b=-b,c=this._$dividers,f=c.length,g=null,l=0,h=null,i=0;i<f;i++){var h=c.get(i),k=h.offsetTop;if(b>=k)g=h,l=k;else if(g)break}g&&(c=g.offsetHeight,h=g!=h?h.offsetTop:this._$view.get(0).offsetHeight,b=b+c>=h?h-c-l:
b-l,(l=this._lastDivider)&&g!=l&&d(e(l),0,0),d(e(g),0,b+"px"),this._lastDivider=g)}})})(jQuery,window,document);
var scrollview={isScrolling:!1,isSwiping:!1,isDoubleTapping:!1,isTapHolding:!1,setup:function(e){$.mobile.scrollview.prototype._handleDragStart=function(){var a=$.mobile.scrollview.prototype._handleDragStart;return function(c){var b=$.inArray($(c.target).closest(".pageWidget").attr("id"),e.linkOrigin);-1==b&&(b=$.inArray($(c.target).closest(".pageWidget").data("lockto"),e.linkOrigin));if((b=-1<b&&e.triggerType[b])&&("taphold"==b||"doubletap"==b||"swipe"==b.substr(0,5)))return!0;a.apply(this,arguments)}}();
$.mobile.scrollview.prototype._handleDragMove=function(){var a=$.mobile.scrollview.prototype._handleDragMove;return function(c){scrollview.isScrolling=!0;a.apply(this,arguments)}}();$.mobile.scrollview.prototype._handleDragStop=function(){var a=$.mobile.scrollview.prototype._handleDragStop;return function(c){setTimeout(function(){scrollview.isScrolling=!1},10);a.apply(this,arguments)}}()},showPage:function(){var e=$(this);e.find(".ui-content").attr("data-"+$.mobile.ns+"scroll","y");var a=storage.get(g_preview).pageWH,
c,b=$(e).attr("id");if("home"!=b&&(c=[storage.get(b).width,storage.get(b).height],!(a[0]>=c[0]&&a[1]>=c[1]))){var d=storage.get(g_preview).orientation,b=storage.get(b).orientation,d=d==b,f="xy";d||(c=[c[1],c[0]]);c[0]==a[0]&&(f=d?"y":"x");c[1]==a[1]&&(f=d?"x":"y");e.find(":jqmData(scroll):not(.ui-scrollview-clip)").each(function(){var a=$(this);a.attr("id");if(a.hasClass("ui-scrolllistview"))return a.scrolllistview(),!0;var b=a.jqmData("scroll")+"",b=(b=a.jqmData("scroll")+"")&&-1!=b.search(/^[xy]p$/),
b={direction:f||void 0,paging:b||void 0,scrollMethod:a.jqmData("scroll-method")||void 0};a.scrollview(b)});d||(a=[a[1],a[0]]);e.css({"min-height":preview.getTrueHeight()+"px"}).children(".ui-content").css({width:a[0]+"px",height:a[1]+"px"})}}};
