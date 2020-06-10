"use strict";var slideShow=function(t,e){var n,o,r=document.querySelector(t),i=r.querySelector(".slider__items"),s=r.querySelectorAll(".slider__item"),a=r.querySelectorAll(".slider__control"),l=0,c=0,d=[],u=0,m=s.length-1,f={isAutoplay:!1,directionAutoplay:"next",delayAutoplay:5e3,isPauseOnHover:!0};for(var v in e)v in f&&(f[v]=e[v]);for(var p=0,g=s.length;p<g;p++)d.push({item:s[p],position:p,transform:0});var h={getItemIndex:function(t){for(var e=0,n=0,i=d.length;n<i;n++)(d[n].position<d[e].position&&"min"===t||d[n].position>d[e].position&&"max"===t)&&(e=n);return e},getItemPosition:function(t){return d[h.getItemIndex(t)].position}},y=function(t){var e,n=u;"next"===t?(++l>h.getItemPosition("max")&&(e=h.getItemIndex("min"),d[e].position=h.getItemPosition("max")+1,d[e].transform+=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),c-=100,m<(u+=1)&&(u=0)):(--l<h.getItemPosition("min")&&(e=h.getItemIndex("max"),d[e].position=h.getItemPosition("min")-1,d[e].transform-=100*d.length,d[e].item.style.transform="translateX("+d[e].transform+"%)"),c+=100,(u-=1)<0&&(u=m)),i.style.transform="translateX("+c+"%)",o[n].classList.remove("active"),o[u].classList.add("active")},_=function(){f.isAutoplay&&(x(),n=setInterval(function(){y(f.directionAutoplay)},f.delayAutoplay))},x=function(){clearInterval(n)};return function(){var t=document.createElement("ol");t.classList.add("slider__indicators");for(var e=0,n=s.length;e<n;e++){var i=document.createElement("li");0===e&&i.classList.add("active"),i.setAttribute("data-slide-to",e),t.appendChild(i)}r.appendChild(t),o=r.querySelectorAll(".slider__indicators > li")}(),function(){var n=0;if("ontouchstart"in window||navigator.maxTouchPoints)r.addEventListener("touchstart",function(t){n=t.changedTouches[0].clientX,_()}),r.addEventListener("touchend",function(t){var e=t.changedTouches[0].clientX-n;50<e?y("prev"):e<-50&&y("next"),_()});else for(var t=0,e=a.length;t<e;t++)a[t].classList.add("slider__control_show");r.addEventListener("click",function(t){t.target.classList.contains("slider__control")?(t.preventDefault(),y(t.target.classList.contains("slider__control_next")?"next":"prev"),_()):t.target.getAttribute("data-slide-to")&&(t.preventDefault(),function(t){for(var e=0,n=u<t?"next":"prev";t!==u&&e<=m;)y(n),e++}(parseInt(t.target.getAttribute("data-slide-to"))),_())}),document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState?x():_()},!1),f.isPauseOnHover&&f.isAutoplay&&(r.addEventListener("mouseenter",function(){x()}),r.addEventListener("mouseleave",function(){_()}))}(),_(),{next:function(){y("next")},left:function(){y("prev")},stop:function(){f.isAutoplay=!1,x()},cycle:function(){f.isAutoplay=!0,_()}}};slideShow(".slider",{isAutoplay:!0});