!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-slider-component",[],e):"object"==typeof exports?exports["vue-slider-component"]=e():t["vue-slider-component"]=e()}(this,function(){return function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),o=s(r);e["default"]=o["default"]},function(t,e,i){var s,r,o={};i(2),s=i(6),r=i(7),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var n="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(o).forEach(function(t){var e=o[t];n.computed[t]=function(){return e}})},function(t,e,i){var s=i(3);"string"==typeof s&&(s=[[t.id,s,""]]);i(5)(s,{});s.locals&&(t.exports=s.locals)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".vue-slider-wrap[_v-29912c8e]{position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vue-slider-wrap.vue-slider-disabled[_v-29912c8e]{opacity:.5;cursor:not-allowed}.vue-slider-wrap.vue-slider-disabled .vue-slider-dot[_v-29912c8e]{cursor:not-allowed}.vue-slider-wrap .vue-slider[_v-29912c8e]{position:relative;display:block;border-radius:15px;background-color:#ccc}.vue-slider-wrap .vue-slider[_v-29912c8e]:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slider-process[_v-29912c8e]{position:absolute;border-radius:15px;background-color:#3498db;-webkit-transition:all 0s;transition:all 0s;z-index:1}.vue-slider-horizontal .vue-slider-process[_v-29912c8e]{width:0;height:100%;top:0;left:0}.vue-slider-vertical .vue-slider-process[_v-29912c8e]{width:100%;height:0;bottom:0;left:0}.vue-slider-horizontal-reverse .vue-slider-process[_v-29912c8e]{width:0;height:100%;top:0;right:0}.vue-slider-vertical-reverse .vue-slider-process[_v-29912c8e]{width:100%;height:0;top:0;left:0}.vue-slider-dot[_v-29912c8e]{position:absolute;border-radius:50%;background-color:#fff;box-shadow:.5px .5px 2px 1px rgba(0,0,0,.32);-webkit-transition:all 0s;transition:all 0s;cursor:pointer;z-index:3}.vue-slider-horizontal .vue-slider-dot[_v-29912c8e]{left:0}.vue-slider-vertical .vue-slider-dot[_v-29912c8e]{bottom:0}.vue-slider-horizontal-reverse .vue-slider-dot[_v-29912c8e]{right:0}.vue-slider-vertical-reverse .vue-slider-dot[_v-29912c8e]{top:0}.vue-slider-dot[_v-29912c8e]:after{content:attr(data-slierValue);display:none;font-size:14px;white-space:nowrap;position:absolute;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;background-color:#3498db;z-index:9}.vue-slider-dot.vue-slider-tooltip-top[_v-29912c8e]:after{top:-9px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot.vue-slider-tooltip-bottom[_v-29912c8e]:after{bottom:-9px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot.vue-slider-tooltip-left[_v-29912c8e]:after{top:50%;left:-9px;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot.vue-slider-tooltip-right[_v-29912c8e]:after{top:50%;right:-9px;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.vue-slider-dot.vue-slider-tooltip-top[_v-29912c8e]:before{top:-10px;border:6px solid transparent;border-top-color:#3498db}.vue-slider-dot.vue-slider-tooltip-bottom[_v-29912c8e]:before,.vue-slider-dot.vue-slider-tooltip-top[_v-29912c8e]:before{content:'';display:none;position:absolute;left:50%;width:0;height:0;-webkit-transform:translate(-50%);transform:translate(-50%)}.vue-slider-dot.vue-slider-tooltip-bottom[_v-29912c8e]:before{bottom:-10px;border:6px solid transparent;border-bottom-color:#3498db}.vue-slider-dot.vue-slider-tooltip-left[_v-29912c8e]:before{left:-10px;border:6px solid transparent;border-left-color:#3498db}.vue-slider-dot.vue-slider-tooltip-left[_v-29912c8e]:before,.vue-slider-dot.vue-slider-tooltip-right[_v-29912c8e]:before{content:'';display:none;position:absolute;top:50%;width:0;height:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-dot.vue-slider-tooltip-right[_v-29912c8e]:before{right:-10px;border:6px solid transparent;border-right-color:#3498db}.vue-slider-dot.vue-slider-hover[_v-29912c8e]:hover:after,.vue-slider-dot.vue-slider-hover[_v-29912c8e]:hover:before{display:block}.vue-slider-dot.vue-slider-always[_v-29912c8e]:after,.vue-slider-dot.vue-slider-always[_v-29912c8e]:before{display:block!important}.vue-slider-piecewise[_v-29912c8e]{position:absolute;width:100%;padding:0;margin:0;left:0;top:0;height:100%;list-style:none}.vue-slider-piecewise li[_v-29912c8e]{position:absolute;background-color:rgba(0,0,0,.16);border-radius:50%;z-index:2}.vue-slider-horizontal .vue-slider-piecewise li[_v-29912c8e]{top:0}.vue-slider-vertical .vue-slider-piecewise li[_v-29912c8e]{left:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(s[o]=!0)}for(r=0;r<e.length;r++){var n=e[r];"number"==typeof n[0]&&s[n[0]]||(i&&!n[2]?n[2]=i:i&&(n[2]="("+n[2]+") and ("+i+")"),t.push(n))}},t}},function(t,e,i){function s(t,e){for(var i=0;i<t.length;i++){var s=t[i],r=h[s.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](s.parts[o]);for(;o<s.parts.length;o++)r.parts.push(a(s.parts[o],e))}else{for(var n=[],o=0;o<s.parts.length;o++)n.push(a(s.parts[o],e));h[s.id]={id:s.id,refs:1,parts:n}}}}function r(t){for(var e=[],i={},s=0;s<t.length;s++){var r=t[s],o=r[0],n=r[1],l=r[2],a=r[3],u={css:n,media:l,sourceMap:a};i[o]?i[o].parts.push(u):e.push(i[o]={id:o,parts:[u]})}return e}function o(t,e){var i=v(),s=g[g.length-1];if("top"===t.insertAt)s?s.nextSibling?i.insertBefore(e,s.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function n(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function l(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function a(t,e){var i,s,r;if(e.singleton){var o=m++;i=f||(f=l(e)),s=u.bind(null,i,o,!1),r=u.bind(null,i,o,!0)}else i=l(e),s=d.bind(null,i),r=function(){n(i)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else r()}}function u(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var o=document.createTextNode(r),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function d(t,e){var i=e.css,s=e.media,r=e.sourceMap;if(s&&t.setAttribute("media",s),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h={},c=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},p=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=c(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,m=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=p()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=r(t);return s(i,e),function(t){for(var o=[],n=0;n<i.length;n++){var l=i[n],a=h[l.id];a.refs--,o.push(a)}if(t){var u=r(t);s(u,e)}for(var n=0;n<o.length;n++){var a=o[n];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete h[a.id]}}}};var b=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0}},props:{width:{type:[Number,String],"default":"auto"},height:{type:[Number,String],"default":4},data:{type:Array,"default":null},dotSize:{type:Number,"default":16},min:{type:Number,"default":0},max:{type:Number,"default":100},interval:{type:Number,"default":1},show:{type:Boolean,"default":!0},disabled:{type:Boolean,"default":!1},piecewise:{type:Boolean,"default":!1},tooltip:{type:[String,Boolean],"default":"always"},eventType:{type:String,"default":"auto"},direction:{type:String,"default":"horizontal"},tooltipDir:{type:String},reverse:{type:Boolean,"default":!1},lazy:{type:Boolean,"default":!1},speed:{type:Number,"default":.5},value:{type:[String,Number,Array],"default":0}},computed:{flowDirection:function(){return"vue-slider-"+(this.direction+(this.reverse?"-reverse":""))},tooltipDirection:function(){return this.tooltipDir||("vertical"===this.direction?"left":"top")},tooltipStatus:function(){return"hover"===this.tooltip&&this.flag?"vue-slider-always":this.tooltip?"vue-slider-"+this.tooltip:""},isMoblie:function(){return"touch"===this.eventType||"mouse"!==this.eventType&&/(iPhone|iPad|iPod|iOS|Android|SymbianOS|Windows Phone|Mobile)/i.test(navigator.userAgent)},isDisabled:function(){return"none"===this.eventType||this.disabled},disabledClass:function(){return this.disabled?"vue-slider-disabled":""},isRange:function(){return Array.isArray(this.value)},slider:function(){return this.isRange?[this.$refs.dot0,this.$refs.dot1]:this.$refs.dot},minimum:function(){return this.data?0:this.min},val:{get:function(){return this.data?this.isRange?[this.data[this.currentValue[0]],this.data[this.currentValue[1]]]:this.data[this.currentValue]:this.currentValue},set:function(t){if(this.data)if(this.isRange){var e=this.data.indexOf(t[0]),i=this.data.indexOf(t[1]);e>-1&&i>-1&&(this.currentValue=[e,i])}else{var s=this.data.indexOf(t);s>-1&&(this.currentValue=s)}else this.currentValue=t}},maximum:function(){return this.data?this.data.length-1:this.max},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:((this.maximum-this.minimum)%this.interval!==0&&console.error("[Vue warn]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},offset:function(){return"vertical"===this.direction?this.$refs.elem.getBoundingClientRect().top+window.pageYOffset||document.documentElement.scrollTop:this.$refs.elem.getBoundingClientRect().left},position:function(){return this.isRange?[(this.currentValue[0]-this.minimum)/this.spacing*this.gap,(this.currentValue[1]-this.minimum)/this.spacing*this.gap]:(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return this.isRange?[[0,this.position[1]],[this.position[0],this.size]]:[0,this.size]},valueLimit:function(){return this.isRange?[[this.minimum,this.currentValue[1]],[this.currentValue[0],this.maximum]]:[this.minimum,this.maximum]},wrapStyles:function(){return"vertical"===this.direction?{height:"number"==typeof this.height?this.height+"px":this.height,padding:this.dotSize/2+"px"}:{width:"number"==typeof this.width?this.width+"px":this.width,padding:this.dotSize/2+"px"}},elemStyles:function(){return"vertical"===this.direction?{width:this.width+"px",height:"100%"}:{height:this.height+"px"}},dotStyles:function(){return"vertical"===this.direction?{width:this.dotSize+"px",height:this.dotSize+"px",left:-(this.dotSize-this.width)/2+"px"}:{width:this.dotSize+"px",height:this.dotSize+"px",top:-(this.dotSize-this.height)/2+"px"}},piecewiseStyle:function(){return"vertical"===this.direction?{width:this.width+"px",height:this.width+"px"}:{width:this.height+"px",height:this.height+"px"}}},watch:{value:function(t){this.flag||this.setValue(t)}},methods:{bindEvents:function(){this.isMoblie?(document.addEventListener("touchmove",this.moving),document.addEventListener("touchend",this.moveEnd)):(document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd))},unbindEvents:function(){this.isMoblie?(document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd)):(document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd))},getPos:function(t){var e=void 0;return e="vertical"===this.direction?this.reverse?t.pageY-this.offset:this.size-(t.pageY-this.offset):this.reverse?this.size-(t.clientX-this.offset):t.clientX-this.offset},wrapClick:function(t){if(this.isDisabled)return!1;var e=this.getPos(t);this.isRange&&(this.currentSlider=e>(this.position[1]-this.position[0])/2+this.position[0]?1:0),this.setValueOnPos(e)},moveStart:function(t){return!this.isDisabled&&(this.isRange&&(this.currentSlider=t),this.flag=!0,void this.$emit("drag-start",this))},moving:function(t){return!!this.flag&&(t.preventDefault(),this.isMoblie&&(t=t.targetTouches[0]),void this.setValueOnPos(this.getPos(t),!0))},moveEnd:function(t){return!!this.flag&&(this.$emit("drag-end",this),this.lazy&&this.isDiff(this.val,this.value)&&(this.$emit("callback",this.val),this.$emit("input",this.val)),this.flag=!1,void this.setPosition(this.speed))},setValueOnPos:function(t,e){var i=this.isRange?this.limit[this.currentSlider]:this.limit,s=this.isRange?this.valueLimit[this.currentSlider]:this.valueLimit;if(t>=i[0]&&t<=i[1]){this.setTransform(t);var r=Math.round(t/this.gap)*this.spacing+this.minimum;this.setCurrentValue(r,e)}else t<i[0]?(this.setTransform(i[0]),this.setCurrentValue(s[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(s[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)},setCurrentValue:function(t,e){return!(t<this.minimum||t>this.maximum)&&(this.isRange?this.isDiff(this.currentValue[this.currentSlider],t)&&(this.currentValue.splice(this.currentSlider,1,t),this.lazy&&this.flag||(this.$emit("callback",this.val),this.$emit("input",this.val))):this.isDiff(this.currentValue,t)&&(this.currentValue=t,this.lazy&&this.flag||(this.$emit("callback",this.val),this.$emit("input",this.val))),void(e||this.setPosition()))},setIndex:function(t){if(Array.isArray(t)&&this.isRange){var e=void 0;e=this.data?[this.data[t[0]],this.data[t[1]]]:[this.spacing*t[0]+this.minimum,this.spacing*t[1]+this.minimum],this.setValue(e)}else t=this.spacing*t+this.minimum,this.isRange&&(this.currentSlider=t>(this.currentValue[1]-this.currentValue[0])/2+this.currentValue[0]?1:0),this.setCurrentValue(t)},setValue:function(t){this.isDiff(this.val,t)&&(this.val=t,this.$emit("callback",this.val),this.$emit("input",this.val)),this.setPosition()},setPosition:function(){this.flag||this.setTransitionTime(this.speed),this.isRange?(this.currentSlider=0,this.setTransform(this.position[this.currentSlider]),this.currentSlider=1,this.setTransform(this.position[this.currentSlider])):this.setTransform(this.position),this.flag||this.setTransitionTime(0)},setTransform:function(t){var e=("vertical"===this.direction?this.dotSize/2-t:t-this.dotSize/2)*(this.reverse?-1:1),i="vertical"===this.direction?"translateY( "+e+"px )":"translateX( "+e+"px )",s=(0===this.currentSlider?this.position[1]-t:t-this.position[0])+"px",r=(0===this.currentSlider?t:this.position[0])+"px";this.isRange?(this.slider[this.currentSlider].style.transform=i,this.slider[this.currentSlider].style.WebkitTransform=i,this.slider[this.currentSlider].style.msTransform=i,"vertical"===this.direction?(this.$refs.process.style.height=s,this.$refs.process.style[this.reverse?"top":"bottom"]=r):(this.$refs.process.style.width=s,this.$refs.process.style[this.reverse?"right":"left"]=r)):(this.slider.style.transform=i,this.slider.style.WebkitTransform=i,this.slider.style.msTransform=i,"vertical"===this.direction?this.$refs.process.style.height=t+"px":this.$refs.process.style.width=t+"px")},setTransitionTime:function(t){if(t||this.$refs.process.offsetWidth,this.isRange){for(var e=0;e<this.slider.length;e++)this.slider[e].style.transitionDuration=t+"s",this.slider[e].style.WebkitTransitionDuration=t+"s";this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"}else this.slider.style.transitionDuration=t+"s",this.slider.style.WebkitTransitionDuration=t+"s",this.$refs.process.style.transitionDuration=t+"s",this.$refs.process.style.WebkitTransitionDuration=t+"s"},getValue:function(){return this.val},getIndex:function(){return Array.isArray(this.currentValue)?this.data?this.currentValue:[(this.currentValue[0]-this.minimum)/this.spacing,(this.currentValue[1]-this.minimum)/this.spacing]:(this.currentValue-this.minimum)/this.spacing},refresh:function(){this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.setPosition(0)}},created:function(){window.addEventListener("resize",this.refresh)},mounted:function(){this.$nextTick(function(){this.size="vertical"===this.direction?this.$refs.elem.offsetHeight:this.$refs.elem.offsetWidth,this.setValue(this.value),this.bindEvents()})},destroyed:function(){this.unbindEvents()}}},function(t,e){t.exports=' <div ref=wrap :class="[\'vue-slider-wrap\', flowDirection, disabledClass]" v-show=show :style=wrapStyles @click=wrapClick _v-29912c8e=""> <div ref=elem class=vue-slider :style=elemStyles _v-29912c8e=""> <template v-if=isMoblie> <template v-if=isRange> <div ref=dot0 :data-sliervalue=val[0] :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @touchstart=moveStart(0) _v-29912c8e=""></div> <div ref=dot1 :data-sliervalue=val[1] :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @touchstart=moveStart(1) _v-29912c8e=""></div> </template> <template v-else=""> <div ref=dot :data-sliervalue=val :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @touchstart=moveStart _v-29912c8e=""></div> </template> </template> <template v-else=""> <template v-if=isRange> <div ref=dot0 :data-sliervalue=val[0] :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @mousedown=moveStart(0) _v-29912c8e=""></div> <div ref=dot1 :data-sliervalue=val[1] :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @mousedown=moveStart(1) _v-29912c8e=""></div> </template> <template v-else=""> <div ref=dot :data-sliervalue=val :class="[ tooltipStatus, \'vue-slider-tooltip-\' + tooltipDirection, \'vue-slider-dot\']" :style=dotStyles @mousedown=moveStart _v-29912c8e=""></div> </template> </template> <template v-if=piecewise> <ul v-if="direction === \'vertical\'" class=vue-slider-piecewise _v-29912c8e=""> <li v-for="i in (total - 1)" :style="[ piecewiseStyle, { bottom: gap * i - width / 2 + \'px\', left: \'0px\' }]" _v-29912c8e=""></li> </ul> <ul v-else="" class=vue-slider-piecewise _v-29912c8e=""> <li v-for="i in (total - 1)" :style="[ piecewiseStyle, { left: gap * i - height / 2 + \'px\', top: \'0px\' }]" _v-29912c8e=""></li> </ul> </template> <div ref=process class=vue-slider-process _v-29912c8e=""></div> </div> </div> '}])});