(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{299:function(e,t,o){e.exports=o.p+"img/activepng.a54e04e.png"},301:function(e,t,o){e.exports=o.p+"img/logomgs.4a78561.png"},302:function(e,t,o){var content=o(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(70).default)("6e97e01e",content,!0,{sourceMap:!1})},304:function(e,t,o){e.exports=o.p+"img/instagram.0e058e2.svg"},305:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMTAwLjI4IDQ0OEg3LjRWMTQ4LjloOTIuODh6TTUzLjc5IDEwOC4xQzI0LjA5IDEwOC4xIDAgODMuNSAwIDUzLjhhNTMuNzkgNTMuNzkgMCAwIDEgMTA3LjU4IDBjMCAyOS43LTI0LjEgNTQuMy01My43OSA1NC4zek00NDcuOSA0NDhoLTkyLjY4VjMwMi40YzAtMzQuNy0uNy03OS4yLTQ4LjI5LTc5LjItNDguMjkgMC01NS42OSAzNy43LTU1LjY5IDc2LjdWNDQ4aC05Mi43OFYxNDguOWg4OS4wOHY0MC44aDEuM2MxMi40LTIzLjUgNDIuNjktNDguMyA4Ny44OC00OC4zIDk0IDAgMTExLjI4IDYxLjkgMTExLjI4IDE0Mi4zVjQ0OHoiLz48L3N2Zz4="},306:function(e,t,o){"use strict";o(302)},307:function(e,t,o){var n=o(69)((function(i){return i[1]}));n.push([e.i,".dropdown:hover .dropdown-menu[data-v-7cba44de]{display:block}",""]),n.locals={},e.exports=n},308:function(e,t,o){"use strict";o.r(t);var n=[function(){var e=this._self._c;return e("div",{staticClass:"hidden md:flex px-4 items-center space-x-12"},[e("a",{staticClass:"inline-block",attrs:{href:"https://instagram.com/agencia_mgs?igshid=NTdlMDg3MTY=",target:"_blank"}},[e("img",{staticClass:"w-6 h-6 hover:text-white hover:text-[#E5142E]",attrs:{src:o(304),alt:"Instagram"}})])])},function(){var e=this._self._c;return e("div",{staticClass:"hidden md:flex px-4 items-center space-x-12"},[e("a",{staticClass:"inline-block",attrs:{href:"https://www.linkedin.com/company/mgs-agencia-de-creadores-y-eventos-gaming/",target:"_blank"}},[e("img",{staticClass:"w-6 h-6 hover:text-white hover:text-[#E5142E]",attrs:{src:o(305),alt:"linkedin"}})])])}],r={name:"nav-bar",props:{},components:{},data:function(){return{showMenu:!1,darkMode:!0,activeMenu:"home",view:{atTopOfPage:!0}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{mostrarMenu:function(){this.showMenu=!0},handleScroll:function(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)},goTo:function(e,t){console.log(e),this.$emit("goToIndex",{refName:e,event:t})}},computed:{},created:function(){}},l=(o(306),o(53)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("header",{staticClass:"flex items-center justify-center",attrs:{id:"home"}},[t("nav",{staticClass:"left-0 top-0 z-30 menu flex justify-between bg-[#140C1B] text-white w-full animated p-4",class:{fixed:!e.view.atTopOfPage}},[t("div",{staticClass:"px-4 xl:px-8 py-2 flex w-full items-center"},[t("NuxtLink",{staticClass:"font-bold font-heading",attrs:{to:"/"}},[t("img",{staticClass:"md:w-36 w-28",attrs:{alt:"MGS",src:o(301)}})]),e._v(" "),t("ul",{staticClass:"hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"},[t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#home",duration:450,easing:"ease-out"},expression:"{ el: '#home', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E]",class:"home"===e.activeMenu?" text-[#E5142E] ":"text-white",on:{click:function(t){e.activeMenu="home"}}},[e._v("INICIO ")]),e._v(" "),"home"===e.activeMenu?t("img",{staticClass:"w-60 absolute -left-24 -bottom-12 max-w-none",attrs:{src:o(299),alt:""}}):e._e()]),e._v(" "),t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#quienessomos",duration:450,easing:"ease-out"},expression:"{ el: '#quienessomos', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E] cursor-pointer",class:"quienessomos"===e.activeMenu?"text-[#E5142E] ":"text-white",on:{click:function(t){e.activeMenu="quienessomos"}}},[e._v("QUIÉNES SOMOS")]),e._v(" "),"quienessomos"===e.activeMenu?t("img",{staticClass:"w-60 absolute -left-16 -bottom-12 max-w-none",attrs:{src:o(299),alt:""}}):e._e()]),e._v(" "),t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#quehacemos",duration:450,easing:"ease-out"},expression:"{ el: '#quehacemos', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E] cursor-pointer",class:"quehacemos"===e.activeMenu?"text-[#E5142E] ":"text-white",on:{click:function(t){e.activeMenu="quehacemos"}}},[e._v("QUÉ HACEMOS")]),e._v(" "),"quehacemos"===e.activeMenu?t("img",{staticClass:"w-60 absolute -left-16 -bottom-12 max-w-none",attrs:{src:o(299),alt:""}}):e._e()]),e._v(" "),t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#roster",duration:450,easing:"ease-out"},expression:"{ el: '#roster', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E] cursor-pointer",class:"roster"===e.activeMenu?"text-[#E5142E]":"text-white",on:{click:function(t){e.activeMenu="roster"}}},[e._v("ROSTER\n\n                    ")])]),e._v(" "),t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contenido",duration:450,easing:"ease-out"},expression:"{ el: '#contenido', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E] cursor-pointer",class:"contenido"===e.activeMenu?"text-[#E5142E] ":"text-white",on:{click:function(t){e.activeMenu="contenido"}}},[e._v("CONTENIDO")])]),e._v(" "),t("li",{staticClass:"relative"},[t("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#contactanos",duration:450,easing:"ease-out"},expression:"{ el: '#contactanos', duration: 450, easing: 'ease-out', }"}],staticClass:"font-bold text-sm hover:text-white hover:text-[#E5142E] cursor-pointer",class:"contactanos"===e.activeMenu?"text-[#E5142E] ":"text-white",on:{click:function(t){e.activeMenu="contactanos"}}},[e._v("CONTACTANOS")]),e._v(" "),"contactanos"===e.activeMenu?t("img",{staticClass:"w-60 absolute -left-16 -bottom-12 max-w-none",attrs:{src:o(299),alt:""}}):e._e()])]),e._v(" "),e._m(0),e._v(" "),e._m(1)],1),e._v(" "),t("a",{staticClass:"navbar-burger self-center mr-4 md:hidden",attrs:{href:"#"},on:{click:e.mostrarMenu}},[t("svg",{staticClass:"h-8 w-8 hover:text-gray-200",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"fixed inset-0 w-full h-full bg-black z-40 text-pink-200"},[t("div",{staticClass:"container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6"},[t("button",{staticClass:"absolute top-0 left-0 mt-8 ml-6",on:{click:function(t){e.showMenu=!1}}},[t("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),e._v(" "),t("a",{staticClass:"page-scroll inline-block border-b-4 border-transparent hover:border-pink-200",attrs:{href:"#inicio"},on:{click:function(t){e.showMenu=e.flase}}},[e._v("INICIO")]),e._v(" "),t("a",{staticClass:"page-scroll inline-block border-b-4 border-transparent hover:border-pink-200 hover:text-pink-400",attrs:{href:"#quienessomos"},on:{click:function(t){e.showMenu=e.flase}}},[e._v("QUIÉNES SOMOS")]),e._v(" "),t("a",{staticClass:"page-scroll inline-block border-b-4 border-transparent hover:border-pink-200",attrs:{href:"#roster"},on:{click:function(t){e.showMenu=e.flase}}},[e._v("ROSTER")]),e._v(" "),t("a",{staticClass:"page-scroll inline-block border-b-4 border-transparent hover:border-pink-200",attrs:{href:"#contenido"},on:{click:function(t){e.showMenu=e.flase}}},[e._v("CONTENIDO")]),e._v(" "),t("a",{staticClass:"page-scroll inline-block border-b-4 border-transparent hover:border-pink-200",attrs:{href:"#contactanos"},on:{click:function(t){e.showMenu=e.flase}}},[e._v("CONTACTANOS")])])])])}),n,!1,null,"7cba44de",null);t.default=component.exports}}]);