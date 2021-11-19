(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{380:function(t,s,a){t.exports=a.p+"assets/img/performance.af773974.png"},381:function(t,s,a){t.exports=a.p+"assets/img/cache-performance.5d9bd098.png"},389:function(t,s,a){"use strict";a.r(s);var r=a(51),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("instruct request axis 是基于 axios 的指令请求器，用来实现逻辑分离\n"),r("br"),t._v("\n通过注册指令插件，来完成针对功能的分离\n"),r("br"),t._v("\n例如我们常用的 "),r("code",[t._v("token注册")]),t._v(" "),r("code",[t._v("页码参数传递")]),t._v(" "),r("code",[t._v("权限校验")]),t._v(" "),r("code",[t._v("数据模版替换")]),t._v(" "),r("code",[t._v("多模式请求")]),t._v(" "),r("code",[t._v("等等..")]),t._v(" "),r("br"),t._v("\n都可以通过自定义指令来完成逻辑抽离")]),t._v(" "),r("h3",{attrs:{id:"为什么叫指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么叫指令"}},[t._v("#")]),t._v(" 为什么叫指令")]),t._v(" "),r("p",[t._v("主要逻辑参考vue中的指令，通过生命周期和绑定请求对象来进行自定义操作流程，以此来实现公共逻辑的分离，让流程变得简单清晰些，并且根据指令可以快速的分辨出此功能的应用，减少维护的复杂性")]),t._v(" "),r("h3",{attrs:{id:"主要实现了什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主要实现了什么"}},[t._v("#")]),t._v(" 主要实现了什么？")]),t._v(" "),r("p",[t._v("主要实现了一个指令收容分配机制，通过给定的指令配置进行分发")]),t._v(" "),r("h3",{attrs:{id:"性能问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能问题"}},[t._v("#")]),t._v(" 性能问题")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("目前初始版本采用的一些实现方式，性能并不佳，如果对执行性能要求极高的，不建议使用")])]),t._v(" "),r("p",[t._v("性能方面众所周知肯定用到的插件越多，耗时就越多 目前测试性能结果如图\n"),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:a(380),alt:"An image"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v("\n纯净执行的情况下需要7毫秒左右,插件本身目前耗时主要来源于 md5 加密生成sign令牌，这是请求的身份证件，查找指令执行生命周期，发起请求\n"),r("br"),t._v("\n可能你这感觉还没有什么，那么再看部分插件的耗时，你可能会惊讶\n"),r("br"),t._v(" "),r("br"),t._v(" "),r("img",{attrs:{src:a(381),alt:"An image"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v("\n会不会感到惊讶的发现多出了160ms，此因为使用插件cache 缓存，而 cache内部采用的(ASE)加密解密，导致首次执行需要同步一些东西，并且获取数据仍然进行解密，数据量越大解密工作就需要更久，并且加上获取本地缓存的时间，出现这种性能情况，优化方面做的还是不足的，后续的请求虽然会加快，因为会在内存做了一份数据备份，优先走内存查找，但初始的加载耗时也不得不注意，这就是我想告诉大家的，虽然执行请求，会被放置最后执行，且增加的部分性能负担，察觉不出，但为了您的程序，还是建议提高警惕!!!")])])}),[],!1,null,null,null);s.default=v.exports}}]);