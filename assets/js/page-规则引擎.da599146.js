(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{527:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h1",{attrs:{id:"一、创建通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、创建通道"}},[t._v("#")]),t._v(" 一、创建通道")]),t._v(" "),a("h4",{attrs:{id:"_1、顶部导航栏选择通道-点击创建通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择通道-点击创建通道"}},[t._v("#")]),t._v(" 1、顶部导航栏选择通道，点击创建通道")]),t._v(" "),a("p",[t._v("(1)依次选择通道类型，所属应用，填写通道名称等"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/deploy/channel_1.png",alt:"image"}})]),t._v(" "),a("h1",{attrs:{id:"一、添加规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、添加规则"}},[t._v("#")]),t._v(" 一、添加规则")]),t._v(" "),a("h4",{attrs:{id:"_1、顶部导航栏选择规则-点击添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择规则-点击添加"}},[t._v("#")]),t._v(" 1、顶部导航栏选择规则，点击添加")]),t._v(" "),a("ul",[a("li",[t._v("选择客户端连接事件，筛选 Username 为 'ammeter' 的设备并获取连接信息：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT clientid, connected_at FROM \"$events/client_connected\" WHERE username = 'ammeter'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("选择客户端断开事件，筛选 Username 为 'ammeter' 的设备并获取断开信息：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT clientid, disconnected_at FROM \"$events/client_disconnected\" WHERE username = 'ammeter'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v('选择发布到 thing/9cc13a64f7/ammeter_001/post 主题的消息，并从消息内容中筛选出 "clientid","payload","topic" 字段：')])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/01/28/gemxZlFEnkMJLGz.png",alt:"image.png"}}),t._v("\n下拉添加响应动作，选择相应的通道添加，然后新建"),a("br"),t._v("\n注：每次添加通道后，需重启对应的通道，即禁用通道后再启用"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/deploy/product_5.png",alt:"image"}})])])}),[],!1,null,null,null);e.default=r.exports},532:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h1",{attrs:{id:"一、创建通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、创建通道"}},[t._v("#")]),t._v(" 一、创建通道")]),t._v(" "),a("h4",{attrs:{id:"_1、顶部导航栏选择通道-点击创建通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择通道-点击创建通道"}},[t._v("#")]),t._v(" 1、顶部导航栏选择通道，点击创建通道")]),t._v(" "),a("p",[t._v("(1)依次选择通道类型，所属应用，填写通道名称等"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/deploy/channel_1.png",alt:"image"}})]),t._v(" "),a("h1",{attrs:{id:"一、添加规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、添加规则"}},[t._v("#")]),t._v(" 一、添加规则")]),t._v(" "),a("h4",{attrs:{id:"_1、顶部导航栏选择规则-点击添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、顶部导航栏选择规则-点击添加"}},[t._v("#")]),t._v(" 1、顶部导航栏选择规则，点击添加")]),t._v(" "),a("ul",[a("li",[t._v("选择客户端连接事件，筛选 Username 为 'ammeter' 的设备并获取连接信息：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT clientid, connected_at FROM \"$events/client_connected\" WHERE username = 'ammeter'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("选择客户端断开事件，筛选 Username 为 'ammeter' 的设备并获取断开信息：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SELECT clientid, disconnected_at FROM \"$events/client_disconnected\" WHERE username = 'ammeter'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v('选择发布到 thing/9cc13a64f7/ammeter_001/post 主题的消息，并从消息内容中筛选出 "clientid","payload","topic" 字段：')])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('SELECT clientid, payload, topic FROM "thing/9cc13a64f7/ammeter_001/post"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/01/28/gemxZlFEnkMJLGz.png",alt:"image.png"}}),t._v("\n下拉添加响应动作，选择相应的通道添加，然后新建"),a("br"),t._v("\n注：每次添加通道后，需重启对应的通道，即禁用通道后再启用"),a("br"),t._v(" "),a("img",{attrs:{src:"/assets/deploy/product_5.png",alt:"image"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);