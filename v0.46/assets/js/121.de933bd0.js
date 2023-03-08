(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{644:function(e,t,a){"use strict";a.r(t);var n=a(1),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"invariants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invariants"}},[e._v("#")]),e._v(" Invariants")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("An invariant is a property of the application that should always be true. In the context of the Cosmos SDK, an "),a("code",[e._v("Invariant")]),e._v(" is a function that checks for a particular invariant. These functions are useful to detect bugs early on and act upon them to limit their potential consequences (e.g. by halting the chain). They are also useful in the development process of the application to detect bugs via simulations.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[e._v("Keepers")])],1)]),e._v(" "),a("h2",{attrs:{id:"implementing-invariants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-invariants"}},[e._v("#")]),e._v(" Implementing "),a("code",[e._v("Invariant")]),e._v("s")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("Invariant")]),e._v(" is a function that checks for a particular invariant within a module. Module "),a("code",[e._v("Invariant")]),e._v("s must follow the "),a("code",[e._v("Invariant")]),e._v(" type:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSB0eXBlcwoKaW1wb3J0ICZxdW90O2ZtdCZxdW90OwoKLy8gQW4gSW52YXJpYW50IGlzIGEgZnVuY3Rpb24gd2hpY2ggdGVzdHMgYSBwYXJ0aWN1bGFyIGludmFyaWFudC4KLy8gVGhlIGludmFyaWFudCByZXR1cm5zIGEgZGVzY3JpcHRpdmUgbWVzc2FnZSBhYm91dCB3aGF0IGhhcHBlbmVkCi8vIGFuZCBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBpbnZhcmlhbnQgaGFzIGJlZW4gYnJva2VuLgovLyBUaGUgc2ltdWxhdG9yIHdpbGwgdGhlbiBoYWx0IGFuZCBwcmludCB0aGUgbG9ncy4KdHlwZSBJbnZhcmlhbnQgZnVuYyhjdHggQ29udGV4dCkgKHN0cmluZywgYm9vbCkKCi8vIEludmFyaWFudHMgZGVmaW5lcyBhIGdyb3VwIG9mIGludmFyaWFudHMKdHlwZSBJbnZhcmlhbnRzIFtdSW52YXJpYW50CgovLyBleHBlY3RlZCBpbnRlcmZhY2UgZm9yIHJlZ2lzdGVyaW5nIGludmFyaWFudHMKdHlwZSBJbnZhcmlhbnRSZWdpc3RyeSBpbnRlcmZhY2UgewoJUmVnaXN0ZXJSb3V0ZShtb2R1bGVOYW1lLCByb3V0ZSBzdHJpbmcsIGludmFyIEludmFyaWFudCkKfQoKLy8gRm9ybWF0SW52YXJpYW50IHJldHVybnMgYSBzdGFuZGFyZGl6ZWQgaW52YXJpYW50IG1lc3NhZ2UuCmZ1bmMgRm9ybWF0SW52YXJpYW50KG1vZHVsZSwgbmFtZSwgbXNnIHN0cmluZykgc3RyaW5nIHsKCXJldHVybiBmbXQuU3ByaW50ZigmcXVvdDslczogJXMgaW52YXJpYW50XG4lc1xuJnF1b3Q7LCBtb2R1bGUsIG5hbWUsIG1zZykKfQo="}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("string")]),e._v(" return value is the invariant message, which can be used when printing logs, and the "),a("code",[e._v("bool")]),e._v(" return value is the actual result of the invariant check.")]),e._v(" "),a("p",[e._v("In practice, each module implements "),a("code",[e._v("Invariant")]),e._v("s in a "),a("code",[e._v("./keeper/invariants.go")]),e._v(" file within the module's folder. The standard is to implement one "),a("code",[e._v("Invariant")]),e._v(" function per logical grouping of invariants with the following model:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXhhbXBsZSBmb3IgYW4gSW52YXJpYW50IHRoYXQgY2hlY2tzIGJhbGFuY2UtcmVsYXRlZCBpbnZhcmlhbnRzCgpmdW5jIEJhbGFuY2VJbnZhcmlhbnRzKGsgS2VlcGVyKSBzZGsuSW52YXJpYW50IHsKCXJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCkgKHN0cmluZywgYm9vbCkgewogICAgICAgIC8vIEltcGxlbWVudCBjaGVja3MgZm9yIGJhbGFuY2UtcmVsYXRlZCBpbnZhcmlhbnRzCiAgICB9Cn0K"}}),e._v(" "),a("p",[e._v("Additionally, module developers should generally implement an "),a("code",[e._v("AllInvariants")]),e._v(" function that runs all the "),a("code",[e._v("Invariant")]),e._v("s functions of the module:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQWxsSW52YXJpYW50cyBydW5zIGFsbCBpbnZhcmlhbnRzIG9mIHRoZSBtb2R1bGUuCi8vIEluIHRoaXMgZXhhbXBsZSwgdGhlIG1vZHVsZSBpbXBsZW1lbnRzIHR3byBJbnZhcmlhbnRzOiBCYWxhbmNlSW52YXJpYW50cyBhbmQgRGVwb3NpdHNJbnZhcmlhbnRzCgpmdW5jIEFsbEludmFyaWFudHMoayBLZWVwZXIpIHNkay5JbnZhcmlhbnQgewoKCXJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCkgKHN0cmluZywgYm9vbCkgewoJCXJlcywgc3RvcCA6PSBCYWxhbmNlSW52YXJpYW50cyhrKShjdHgpCgkJaWYgc3RvcCB7CgkJCXJldHVybiByZXMsIHN0b3AKCQl9CgoJCXJldHVybiBEZXBvc2l0c0ludmFyaWFudChrKShjdHgpCgl9Cn0K"}}),e._v(" "),a("p",[e._v("Finally, module developers need to implement the "),a("code",[e._v("RegisterInvariants")]),e._v(" method as part of the "),a("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodule"}},[a("code",[e._v("AppModule")]),e._v(" interface")]),e._v(". Indeed, the "),a("code",[e._v("RegisterInvariants")]),e._v(" method of the module, implemented in the "),a("code",[e._v("module/module.go")]),e._v(" file, typically only defers the call to a "),a("code",[e._v("RegisterInvariants")]),e._v(" method implemented in the "),a("code",[e._v("keeper/invariants.go")]),e._v(" file. The "),a("code",[e._v("RegisterInvariants")]),e._v(" method registers a route for each "),a("code",[e._v("Invariant")]),e._v(" function in the "),a("a",{attrs:{href:"#invariant-registry"}},[a("code",[e._v("InvariantRegistry")])]),e._v(":")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXJJbnZhcmlhbnRzIHJlZ2lzdGVycyBhbGwgc3Rha2luZyBpbnZhcmlhbnRzCmZ1bmMgUmVnaXN0ZXJJbnZhcmlhbnRzKGlyIHNkay5JbnZhcmlhbnRSZWdpc3RyeSwgayBLZWVwZXIpIHsKCWlyLlJlZ2lzdGVyUm91dGUodHlwZXMuTW9kdWxlTmFtZSwgJnF1b3Q7bW9kdWxlLWFjY291bnRzJnF1b3Q7LAoJCUJhbGFuY2VJbnZhcmlhbnRzKGspKQoJaXIuUmVnaXN0ZXJSb3V0ZSh0eXBlcy5Nb2R1bGVOYW1lLCAmcXVvdDtub25uZWdhdGl2ZS1wb3dlciZxdW90OywKCQlEZXBvc2l0c0ludmFyaWFudChrKSkKfQo="}}),e._v(" "),a("p",[e._v("For more, see an example of "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/7d7821b9af132b0f6131640195326aa02b6751db/x/staking/keeper/invariants.go",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Invariant")]),e._v("s implementation from the "),a("code",[e._v("staking")]),e._v(" module"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"invariant-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invariant-registry"}},[e._v("#")]),e._v(" Invariant Registry")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("InvariantRegistry")]),e._v(" is a registry where the "),a("code",[e._v("Invariant")]),e._v("s of all the modules of an application are registered. There is only one "),a("code",[e._v("InvariantRegistry")]),e._v(" per "),a("strong",[e._v("application")]),e._v(", meaning module developers need not implement their own "),a("code",[e._v("InvariantRegistry")]),e._v(" when building a module. "),a("strong",[e._v("All module developers need to do is to register their modules' invariants in the "),a("code",[e._v("InvariantRegistry")]),e._v(", as explained in the section above")]),e._v(". The rest of this section gives more information on the "),a("code",[e._v("InvariantRegistry")]),e._v(" itself, and does not contain anything directly relevant to module developers.")]),e._v(" "),a("p",[e._v("At its core, the "),a("code",[e._v("InvariantRegistry")]),e._v(" is defined in the Cosmos SDK as an interface:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gZXhwZWN0ZWQgaW50ZXJmYWNlIGZvciByZWdpc3RlcmluZyBpbnZhcmlhbnRzCnR5cGUgSW52YXJpYW50UmVnaXN0cnkgaW50ZXJmYWNlIHsKCVJlZ2lzdGVyUm91dGUobW9kdWxlTmFtZSwgcm91dGUgc3RyaW5nLCBpbnZhciBJbnZhcmlhbnQpCn0="}})],1),e._v(" "),a("p",[e._v("Typically, this interface is implemented in the "),a("code",[e._v("keeper")]),e._v(" of a specific module. The most used implementation of an "),a("code",[e._v("InvariantRegistry")]),e._v(" can be found in the "),a("code",[e._v("crisis")]),e._v(" module:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUmVnaXN0ZXJSb3V0ZSByZWdpc3RlciB0aGUgcm91dGVzIGZvciBlYWNoIG9mIHRoZSBpbnZhcmlhbnRzCmZ1bmMgKGsgKktlZXBlcikgUmVnaXN0ZXJSb3V0ZShtb2R1bGVOYW1lLCByb3V0ZSBzdHJpbmcsIGludmFyIHNkay5JbnZhcmlhbnQpIHsKCWludmFyUm91dGUgOj0gdHlwZXMuTmV3SW52YXJSb3V0ZShtb2R1bGVOYW1lLCByb3V0ZSwgaW52YXIpCglrLnJvdXRlcyA9IGFwcGVuZChrLnJvdXRlcywgaW52YXJSb3V0ZSkKfQ=="}})],1),e._v(" "),a("p",[e._v("The "),a("code",[e._v("InvariantRegistry")]),e._v(" is therefore typically instantiated by instantiating the "),a("code",[e._v("keeper")]),e._v(" of the "),a("code",[e._v("crisis")]),e._v(" module in the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("application's constructor function")]),e._v(".")],1),e._v(" "),a("p",[a("code",[e._v("Invariant")]),e._v("s can be checked manually via "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[a("code",[e._v("message")]),e._v("s")]),e._v(", but most often they are checked automatically at the end of each block. Here is an example from the "),a("code",[e._v("crisis")]),e._v(" module:")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gY2hlY2sgYWxsIHJlZ2lzdGVyZWQgaW52YXJpYW50cwpmdW5jIEVuZEJsb2NrZXIoY3R4IHNkay5Db250ZXh0LCBrIEtlZXBlcikgewoJaWYgay5JbnZDaGVja1BlcmlvZCgpID09IDAgfHwgY3R4LkJsb2NrSGVpZ2h0KCklaW50NjQoay5JbnZDaGVja1BlcmlvZCgpKSAhPSAwIHsKCQkvLyBza2lwIHJ1bm5pbmcgdGhlIGludmFyaWFudCBjaGVjawoJCXJldHVybgoJfQoJay5Bc3NlcnRJbnZhcmlhbnRzKGN0eCkKfQ=="}})],1),e._v(" "),a("p",[e._v("In both cases, if one of the "),a("code",[e._v("Invariant")]),e._v("s returns false, the "),a("code",[e._v("InvariantRegistry")]),e._v(" can trigger special logic (e.g. have the application panic and print the "),a("code",[e._v("Invariant")]),e._v("s message in the log).")]),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about "),a("RouterLink",{attrs:{to:"/building-modules/genesis.html"}},[e._v("genesis functionalities")])],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);