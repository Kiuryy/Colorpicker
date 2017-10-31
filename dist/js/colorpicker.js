/*! (c) Philipp König under Apache 2.0 */
window.Colorpicker=(()=>{"use strict";function e(){this.r=0,this.g=0,this.b=0,this.a=1,this.hue=0,this.saturation=0,this.value=0;let e=e=>"number"==typeof e&&!1===isNaN(e)&&e>=0&&e<=255,t=(t,i,s,l)=>{e(t)&&e(i)&&e(s)&&(this.r=0|t,this.g=0|i,this.b=0|s,!0===e(l)&&(this.a=l))};this.setByName=((t,i)=>{"r"!==t&&"g"!==t&&"b"!==t&&"a"!==t||!e(i)||(this[t]=i,o())}),this.setHSV=((e,t,i)=>{this.hue=e,this.saturation=t,this.value=i,l()}),this.setHue=(e=>{"number"!=typeof e||!0===isNaN(e)||e<0||e>359||(this.hue=e,l())}),this.setFromRaw=(e=>{e=e.trim(),/(^#{0,1}[0-9A-F]{6}$)|(^#{0,1}[0-9A-F]{3}$)/i.test(e)?s(e):/^rgba?\([^)]+\)$/i.test(e)&&i(e)});let i=e=>{let i=e.match(/(\d*\.\d*|\d+)/g);3===i.length&&i.push(1),4===i.length&&(t(...i.map(e=>+e)),o())},s=e=>{/(^#{0,1}[0-9A-F]{6}$)|(^#{0,1}[0-9A-F]{3}$)/i.test(e)&&("#"===e[0]&&(e=e.slice(1,e.length)),3===e.length&&(e=e.replace(/([0-9A-F])([0-9A-F])([0-9A-F])/i,"$1$1$2$2$3$3")),this.r=parseInt(e.substr(0,2),16),this.g=parseInt(e.substr(2,2),16),this.b=parseInt(e.substr(4,2),16),this.a=1,o())},l=()=>{let e=this.saturation/100,i=this.value/100,s=e*i,l=this.hue/60,o=s*(1-Math.abs(l%2-1)),a=i-s;s=255*(s+a)|0,o=255*(o+a)|0,a=255*a|0,l>=0&&l<1?t(s,o,a):l>=1&&l<2?t(o,s,a):l>=2&&l<3?t(a,s,o):l>=3&&l<4?t(a,o,s):l>=4&&l<5?t(o,a,s):l>=5&&l<6&&t(s,a,o)},o=()=>{let e=this.r/255,t=this.g/255,i=this.b/255,s=Math.max(e,t,i),l=s-Math.min(e,t,i),o=0,a=0;l&&(s===e&&(o=(t-i)/l),s===t&&(o=2+(i-e)/l),s===i&&(o=4+(e-t)/l),s&&(a=l/s)),this.hue=60*o|0,this.hue<0&&(this.hue+=360),this.saturation=100*a|0,this.value=100*s|0};this.getHex=(()=>{let e=this.r.toString(16),t=this.g.toString(16),i=this.b.toString(16);return this.r<16&&(e="0"+e),this.g<16&&(t="0"+t),this.b<16&&(i="0"+i),("#"+e+t+i).toLowerCase()}),this.getColor=(()=>{if(!1|this.a)return this.getHex();let e="("+this.r+","+this.g+","+this.b,t="",i="",s=parseFloat(this.a);return 1!==s&&(t="a",i=","+s),"rgb"+t+e+i+")"})}return function(t,i){i=i||{};let s=null,l=null,o=null,a=[],r={};this.color=new e;let h=(e,t)=>{e.addEventListener("mousedown",e=>{t(e),document.addEventListener("mousemove",t)}),document.addEventListener("mouseup",e=>{document.removeEventListener("mousemove",t)})},n=()=>{(s=document.createElement("div")).className="color-picker",document.body.appendChild(s),(l=document.createElement("span")).className="color-preview",t.parentNode.insertBefore(l,t.nextSibling),l.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),[].forEach.call(document.getElementsByClassName("color-picker"),e=>{e.classList.remove("visible")}),s.classList.add("visible"),this.reposition(),A("show"),b()}),document.addEventListener("click",e=>{e.target===s||s.contains(e.target)||this.close()})},c=()=>{let e=document.createElement("div"),t=document.createElement("div");e.className="picking-area",t.className="picker",this.pickingArea=e,this.colorPicker=t,h(e,m),e.appendChild(t),s.appendChild(e)},d=()=>{let e=document.createElement("div"),t=document.createElement("div");e.className="hue",t.className="slider-picker",this.hueArea=e,this.huePicker=t,h(e,g),e.appendChild(t),s.appendChild(e)},p=()=>{let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div");e.className="alpha",t.className="alpha-mask",i.className="slider-picker",o={area:e,mask:t,picker:i},h(e,v),e.appendChild(t),t.appendChild(i),s.appendChild(e)},u=(e,t)=>{let i=document.createElement("div"),l=document.createElement("input"),o=document.createElement("span");i.className="input-"+e,o.textContent=e,l.setAttribute("type","text"),i.appendChild(o),i.appendChild(l),s.appendChild(i),l.addEventListener("change",t),a[e]=(e=>{l.value=e})},m=e=>{let t=this.pickingArea.getBoundingClientRect(),i=this.pickingArea.clientWidth,s=[e.pageX-t.left,e.pageY-t.top];s.forEach((e,t)=>{e>i&&(e=i),e<0&&(e=0),s[t]=e});let l=100*s[0]/i|0,o=100-100*s[1]/i|0;this.color.setHSV(this.color.hue,l,o),this.colorPicker.style.left=s[0]-5+"px",this.colorPicker.style.top=s[1]-5+"px",y(),N(),w()},g=e=>{let t=this.hueArea.getBoundingClientRect(),i=Math.max(0,e.pageX-t.left),s=this.hueArea.clientWidth;i>s&&(i=s),C(this.huePicker,i),this.color.setHue(359*i/s|0),b()},v=e=>{let t=o.area.getBoundingClientRect(),i=e.pageX-t.left,s=o.area.clientWidth;i<0&&(i=0),i>s&&(i=s),this.color.a=(i/s).toFixed(2),C(o.picker,i),N(),w()},b=()=>{w(),f(),x(),k(),E(),y(),N()},k=()=>{let e=this.pickingArea.clientWidth,t=this.color.value,i=this.color.saturation*e/100|0,s=e-t*e/100|0;this.colorPicker.style.left=i-5+"px",this.colorPicker.style.top=s-5+"px"},C=(e,t)=>{e.style.left=Math.max(t-3,-2)+"px"},f=()=>{let e=this.hueArea.clientWidth,t=this.color.hue*e/360|0;this.huePicker.style.left=t-1+"px"},E=()=>{if(o){let e=o.area.clientWidth,t=this.color.a*e|0;o.picker.style.left=t-1+"px"}},x=()=>{let t=new e;t.setHSV(this.color.hue,100,100),this.pickingArea.style.backgroundColor=t.getHex()},y=()=>{o&&(o.mask.style.background="linear-gradient(to right, transparent 0%,"+this.color.getHex()+" 100%)")},N=()=>{t.value=this.color.getColor(),l.style.backgroundColor=this.color.getColor(),A("change")},A=e=>{void 0!==r[e]&&r[e].forEach(e=>{e({color:this.color.getColor(),colorObj:this.color,elm:this.getElements()})})},w=()=>{L("r",this.color.r),L("g",this.color.g),L("b",this.color.b),L("a",this.color.a),L("color",this.color.getColor())},L=(e,t)=>{a[e]&&a[e](t)};this.setColor=(e=>{this.color.setFromRaw(e),b()}),this.getColorObj=(()=>this.color),this.getElements=(()=>({wrapper:s,preview:l,field:t})),this.reposition=(()=>{if(s.classList.contains("visible")){let e=l.getBoundingClientRect();s.style.top=e.top+l.offsetHeight+"px",s.style.left=e.left+"px"}}),this.close=(()=>{s.classList.contains("visible")&&(A("hide"),s.classList.remove("visible"))}),this.on=((e,t)=>{void 0===r[e]&&(r[e]=[]),r[e].push(t)}),(()=>{n(),c(),d();let e=["r","g","b"];i.alpha&&(p(),e.push("a")),e.forEach(e=>{u(e,t=>{let i=t.target.value;i="a"===e?+i.replace(/\,/g,"."):parseInt(i),this.color.setByName(e,i),t.target.value=this.color[e],b()})}),u("color",e=>{let t=e.target.value;this.color.setFromRaw(t),b()}),b()})()}})();