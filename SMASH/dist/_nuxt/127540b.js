(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{343:function(t,e,n){"use strict";var r={name:"PageTitle",props:{title:{type:String,required:!0},subtitle:{type:String,required:!1}}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container w-full mx-auto mt-16 space-y-12 overflow-hidden max-w-7xl"},[n("div",{staticClass:"w-full py-2 space-y-2 text-center"},[n("h2",{staticClass:"text-6xl font-bold tracking-wide md:text-7xl"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t.subtitle?n("p",{staticClass:"text-2xl font-medium"},[t._v(t._s(t.subtitle))]):t._e()]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},389:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(28),{name:"PageTitle",components:{pageTitle:n(343).a},layout:"header-footer",data:function(){return{content:""}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("resources/software").fetch();case 2:content=e.sent,t.content=content;case 4:case"end":return e.stop()}}),e)})))()}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pageTitle",{attrs:{title:t.content.title||"Software"}},[t.content.body?n("div",{staticClass:"max-w-6xl px-4 mx-auto mt-4 text-2xl prose text-justify  md:prose-2xl md:px-0",domProps:{innerHTML:t._s(t.$md.render(t.content.body||""))}}):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports}}]);