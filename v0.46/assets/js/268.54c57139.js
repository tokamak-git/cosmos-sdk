(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{792:function(d,c,s){"use strict";s.r(c);var a=s(1),C=Object(a.a)({},(function(){var d=this,c=d.$createElement,s=d._self._c||c;return s("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[s("h1",{attrs:{id:"client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[d._v("#")]),d._v(" Client")]),d._v(" "),s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[d._v("#")]),d._v(" CLI")]),d._v(" "),s("p",[d._v("A user can query and interact with the "),s("code",[d._v("upgrade")]),d._v(" module using the CLI.")]),d._v(" "),s("h3",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[d._v("#")]),d._v(" Query")]),d._v(" "),s("p",[d._v("The "),s("code",[d._v("query")]),d._v(" commands allow users to query "),s("code",[d._v("upgrade")]),d._v(" state.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIC0taGVscAo="}}),d._v(" "),s("h4",{attrs:{id:"applied"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applied"}},[d._v("#")]),d._v(" applied")]),d._v(" "),s("p",[d._v("The "),s("code",[d._v("applied")]),d._v(" command allows users to query the block header for height at which a completed upgrade was applied.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIGFwcGxpZWQgW3VwZ3JhZGUtbmFtZV0gW2ZsYWdzXQo="}}),d._v(" "),s("p",[d._v("If upgrade-name was previously executed on the chain, this returns the header for the block at which it was applied.\nThis helps a client determine which binary was valid over a given range of blocks, as well as more context to understand past migrations.")]),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIGFwcGxpZWQgJnF1b3Q7dGVzdC11cGdyYWRlJnF1b3Q7Cg=="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JnF1b3Q7YmxvY2tfaWQmcXVvdDs6IHsKICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90O0E3NjkxMzYzNTE3ODZCOTAzNEE1RjE5NkRDNTNGN0U1MEZDRUI1M0I0OEZBMDc4NkUxQkZDNDVBMEJCNjQ2QjUmcXVvdDssCiAgICAmcXVvdDtwYXJ0cyZxdW90OzogewogICAgICAmcXVvdDt0b3RhbCZxdW90OzogMSwKICAgICAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7QjEzQ0JEMjMwMTFDNzQ4MEU2RjExQkU0NTk0RUUzMTY1NDg2NDhFNkE2NjZCMzU3NTQwOUY4RjE2RUM2OTM5RSZxdW90OwogICAgfQogIH0sCiAgJnF1b3Q7YmxvY2tfc2l6ZSZxdW90OzogJnF1b3Q7NzIxMyZxdW90OywKICAmcXVvdDtoZWFkZXImcXVvdDs6IHsKICAgICZxdW90O3ZlcnNpb24mcXVvdDs6IHsKICAgICAgJnF1b3Q7YmxvY2smcXVvdDs6ICZxdW90OzExJnF1b3Q7CiAgICB9LAogICAgJnF1b3Q7Y2hhaW5faWQmcXVvdDs6ICZxdW90O3Rlc3RuZXQtMiZxdW90OywKICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7NDU1MjAwJnF1b3Q7LAogICAgJnF1b3Q7dGltZSZxdW90OzogJnF1b3Q7MjAyMS0wNC0xMFQwNDozNzo1Ny4wODU0OTM4MzhaJnF1b3Q7LAogICAgJnF1b3Q7bGFzdF9ibG9ja19pZCZxdW90OzogewogICAgICAmcXVvdDtoYXNoJnF1b3Q7OiAmcXVvdDswRThBRDkzMDlDMkRDNDExREY5ODIxN0FGNTlFMDQ0QTBFMUNDRUFFN0MwMzM4NDE3QTcwMzM4REY1MEY0NzgzJnF1b3Q7LAogICAgICAmcXVvdDtwYXJ0cyZxdW90OzogewogICAgICAgICZxdW90O3RvdGFsJnF1b3Q7OiAxLAogICAgICAgICZxdW90O2hhc2gmcXVvdDs6ICZxdW90OzhGRTU3MkE0OENEMTBCQzJDQkIwMjY1M0NBMDRDQTI0N0EwRjY4MzBGRjE5REM5NzJGNjREMzM5QTM1NUU3N0QmcXVvdDsKICAgICAgfQogICAgfSwKICAgICZxdW90O2xhc3RfY29tbWl0X2hhc2gmcXVvdDs6ICZxdW90O0RFODkwMjM5NDE2QTE5RTYxNjRDMjA3NkI4MzdDQzFEN0Y3ODIyRkMyMTRGMzA1NjE2NzI1RjExRDI1MzMxNDAmcXVvdDssCiAgICAmcXVvdDtkYXRhX2hhc2gmcXVvdDs6ICZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssCiAgICAmcXVvdDt2YWxpZGF0b3JzX2hhc2gmcXVvdDs6ICZxdW90O0EzMTA0N0FERTU0QUU5MDcyRUUyQTEyRkYyNjBBODk5MEJBNEMzOUY5MDNFQUY1NjM2QjUwRDU4REJBNzI1ODImcXVvdDssCiAgICAmcXVvdDtuZXh0X3ZhbGlkYXRvcnNfaGFzaCZxdW90OzogJnF1b3Q7QTMxMDQ3QURFNTRBRTkwNzJFRTJBMTJGRjI2MEE4OTkwQkE0QzM5RjkwM0VBRjU2MzZCNTBENThEQkE3MjU4MiZxdW90OywKICAgICZxdW90O2NvbnNlbnN1c19oYXNoJnF1b3Q7OiAmcXVvdDswNDgwOTFCQzdEREMyODNGNzdCRkJGOTFENzNDNDREQTU4QzNERjhBOUNCQzg2NzQwNUQ4QjdGM0RBQURBMjJGJnF1b3Q7LAogICAgJnF1b3Q7YXBwX2hhc2gmcXVvdDs6ICZxdW90OzI4RUNDNDg2QUZDMzMyQkE2Q0M5NzY3MDZEQkRFODdFN0QzMjQ0MTM3NUUzRjEwRkQwODRDRDRCQUYwREEwMjEmcXVvdDssCiAgICAmcXVvdDtsYXN0X3Jlc3VsdHNfaGFzaCZxdW90OzogJnF1b3Q7RTNCMEM0NDI5OEZDMUMxNDlBRkJGNEM4OTk2RkI5MjQyN0FFNDFFNDY0OUI5MzRDQTQ5NTk5MUI3ODUyQjg1NSZxdW90OywKICAgICZxdW90O2V2aWRlbmNlX2hhc2gmcXVvdDs6ICZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssCiAgICAmcXVvdDtwcm9wb3Nlcl9hZGRyZXNzJnF1b3Q7OiAmcXVvdDsyQUJDNDg1NEIxQTFDNUFBODQwM0M0RUE4NTNBODFBQ0E5MDFDQzc2JnF1b3Q7CiAgfSwKICAmcXVvdDtudW1fdHhzJnF1b3Q7OiAmcXVvdDswJnF1b3Q7Cn0K"}}),d._v(" "),s("h4",{attrs:{id:"module-versions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-versions"}},[d._v("#")]),d._v(" module versions")]),d._v(" "),s("p",[d._v("The "),s("code",[d._v("module_versions")]),d._v(" command gets a list of module names and their respective consensus versions.")]),d._v(" "),s("p",[d._v("Following the command with a specific module name will return only\nthat module's information.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIG1vZHVsZV92ZXJzaW9ucyBbb3B0aW9uYWwgbW9kdWxlX25hbWVdIFtmbGFnc10K"}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIG1vZHVsZV92ZXJzaW9ucwo="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bW9kdWxlX3ZlcnNpb25zOgotIG5hbWU6IGF1dGgKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogYXV0aHoKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogYmFuawogIHZlcnNpb246ICZxdW90OzImcXVvdDsKLSBuYW1lOiBjYXBhYmlsaXR5CiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90OwotIG5hbWU6IGNyaXNpcwogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiBkaXN0cmlidXRpb24KICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogZXZpZGVuY2UKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogZmVlZ3JhbnQKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogZ2VudXRpbAogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiBnb3YKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogaWJjCiAgdmVyc2lvbjogJnF1b3Q7MiZxdW90OwotIG5hbWU6IG1pbnQKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogcGFyYW1zCiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90OwotIG5hbWU6IHNsYXNoaW5nCiAgdmVyc2lvbjogJnF1b3Q7MiZxdW90OwotIG5hbWU6IHN0YWtpbmcKICB2ZXJzaW9uOiAmcXVvdDsyJnF1b3Q7Ci0gbmFtZTogdHJhbnNmZXIKICB2ZXJzaW9uOiAmcXVvdDsxJnF1b3Q7Ci0gbmFtZTogdXBncmFkZQogIHZlcnNpb246ICZxdW90OzEmcXVvdDsKLSBuYW1lOiB2ZXN0aW5nCiAgdmVyc2lvbjogJnF1b3Q7MSZxdW90Owo="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cmVnZW4gcXVlcnkgdXBncmFkZSBtb2R1bGVfdmVyc2lvbnMgaWJjCg=="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bW9kdWxlX3ZlcnNpb25zOgotIG5hbWU6IGliYwogIHZlcnNpb246ICZxdW90OzImcXVvdDsK"}}),d._v(" "),s("h4",{attrs:{id:"plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plan"}},[d._v("#")]),d._v(" plan")]),d._v(" "),s("p",[d._v("The "),s("code",[d._v("plan")]),d._v(" command gets the currently scheduled upgrade plan, if one exists.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cmVnZW4gcXVlcnkgdXBncmFkZSBwbGFuIFtmbGFnc10K"}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCBxdWVyeSB1cGdyYWRlIHBsYW4K"}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGVpZ2h0OiAmcXVvdDsxMzAmcXVvdDsKaW5mbzogJnF1b3Q7JnF1b3Q7Cm5hbWU6IHRlc3QtdXBncmFkZQp0aW1lOiAmcXVvdDswMDAxLTAxLTAxVDAwOjAwOjAwWiZxdW90Owp1cGdyYWRlZF9jbGllbnRfc3RhdGU6IG51bGwK"}}),d._v(" "),s("h2",{attrs:{id:"rest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[d._v("#")]),d._v(" REST")]),d._v(" "),s("p",[d._v("A user can query the "),s("code",[d._v("upgrade")]),d._v(" module using REST endpoints.")]),d._v(" "),s("h3",{attrs:{id:"applied-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applied-plan"}},[d._v("#")]),d._v(" Applied Plan")]),d._v(" "),s("p",[s("code",[d._v("AppliedPlan")]),d._v(" queries a previously applied upgrade plan by its name.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvYXBwbGllZF9wbGFuL3tuYW1lfQo="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvYXBwbGllZF9wbGFuL3YyLjAtdXBncmFkZSZxdW90OyAtSCAmcXVvdDthY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24mcXVvdDsK"}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MzAmcXVvdDsKfQo="}}),d._v(" "),s("h3",{attrs:{id:"current-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-plan"}},[d._v("#")]),d._v(" Current Plan")]),d._v(" "),s("p",[s("code",[d._v("CurrentPlan")]),d._v(" queries the current upgrade plan.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvY3VycmVudF9wbGFuCg=="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvY3VycmVudF9wbGFuJnF1b3Q7IC1IICZxdW90O2FjY2VwdDogYXBwbGljYXRpb24vanNvbiZxdW90Owo="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O3BsYW4mcXVvdDs6ICZxdW90O3YyLjEtdXBncmFkZSZxdW90Owp9Cg=="}}),d._v(" "),s("h3",{attrs:{id:"module-versions-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-versions-2"}},[d._v("#")]),d._v(" Module versions")]),d._v(" "),s("p",[s("code",[d._v("ModuleVersions")]),d._v(" queries the list of module versions from state.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvbW9kdWxlX3ZlcnNpb25zCg=="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBHRVQgJnF1b3Q7aHR0cDovL2xvY2FsaG9zdDoxMzE3L2Nvc21vcy91cGdyYWRlL3YxYmV0YTEvbW9kdWxlX3ZlcnNpb25zJnF1b3Q7IC1IICZxdW90O2FjY2VwdDogYXBwbGljYXRpb24vanNvbiZxdW90Owo="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O21vZHVsZV92ZXJzaW9ucyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoeiZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7YmFuayZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MiZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y2FwYWJpbGl0eSZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y3Jpc2lzJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtkaXN0cmlidXRpb24mcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O2V2aWRlbmNlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtmZWVncmFudCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z2VudXRpbCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z292JnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtpYmMmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O21pbnQmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3BhcmFtcyZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7c2xhc2hpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3N0YWtpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt1cGdyYWRlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt2ZXN0aW5nJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9CiAgXQp9Cg=="}}),d._v(" "),s("h2",{attrs:{id:"grpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[d._v("#")]),d._v(" gRPC")]),d._v(" "),s("p",[d._v("A user can query the "),s("code",[d._v("upgrade")]),d._v(" module using gRPC endpoints.")]),d._v(" "),s("h3",{attrs:{id:"applied-plan-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#applied-plan-2"}},[d._v("#")]),d._v(" Applied Plan")]),d._v(" "),s("p",[s("code",[d._v("AppliedPlan")]),d._v(" queries a previously applied upgrade plan by its name.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9BcHBsaWVkUGxhbgo="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IFwKICAgIC1kICd7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDt2Mi4wLXVwZ3JhZGUmcXVvdDt9JyBcCiAgICBsb2NhbGhvc3Q6OTA5MCBcCiAgICBjb3Ntb3MudXBncmFkZS52MWJldGExLlF1ZXJ5L0FwcGxpZWRQbGFuCg=="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MzAmcXVvdDsKfQo="}}),d._v(" "),s("h3",{attrs:{id:"current-plan-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current-plan-2"}},[d._v("#")]),d._v(" Current Plan")]),d._v(" "),s("p",[s("code",[d._v("CurrentPlan")]),d._v(" queries the current upgrade plan.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9DdXJyZW50UGxhbgo="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGNvc21vcy5zbGFzaGluZy52MWJldGExLlF1ZXJ5L0N1cnJlbnRQbGFuCg=="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O3BsYW4mcXVvdDs6ICZxdW90O3YyLjEtdXBncmFkZSZxdW90Owp9Cg=="}}),d._v(" "),s("h3",{attrs:{id:"module-versions-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-versions-3"}},[d._v("#")]),d._v(" Module versions")]),d._v(" "),s("p",[s("code",[d._v("ModuleVersions")]),d._v(" queries the list of module versions from state.")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW9zLnVwZ3JhZGUudjFiZXRhMS5RdWVyeS9Nb2R1bGVWZXJzaW9ucwo="}}),d._v(" "),s("p",[d._v("Example:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z3JwY3VybCAtcGxhaW50ZXh0IGxvY2FsaG9zdDo5MDkwIGNvc21vcy5zbGFzaGluZy52MWJldGExLlF1ZXJ5L01vZHVsZVZlcnNpb25zCg=="}}),d._v(" "),s("p",[d._v("Example Output:")]),d._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ewogICZxdW90O21vZHVsZV92ZXJzaW9ucyZxdW90OzogWwogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDthdXRoeiZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7YmFuayZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MiZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y2FwYWJpbGl0eSZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Y3Jpc2lzJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtkaXN0cmlidXRpb24mcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O2V2aWRlbmNlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtmZWVncmFudCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z2VudXRpbCZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7Z292JnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsyJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDtpYmMmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O21pbnQmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3BhcmFtcyZxdW90OywKICAgICAgJnF1b3Q7dmVyc2lvbiZxdW90OzogJnF1b3Q7MSZxdW90OwogICAgfSwKICAgIHsKICAgICAgJnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7c2xhc2hpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3N0YWtpbmcmcXVvdDssCiAgICAgICZxdW90O3ZlcnNpb24mcXVvdDs6ICZxdW90OzImcXVvdDsKICAgIH0sCiAgICB7CiAgICAgICZxdW90O25hbWUmcXVvdDs6ICZxdW90O3RyYW5zZmVyJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt1cGdyYWRlJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9LAogICAgewogICAgICAmcXVvdDtuYW1lJnF1b3Q7OiAmcXVvdDt2ZXN0aW5nJnF1b3Q7LAogICAgICAmcXVvdDt2ZXJzaW9uJnF1b3Q7OiAmcXVvdDsxJnF1b3Q7CiAgICB9CiAgXQp9Cg=="}})],1)}),[],!1,null,null,null);c.default=C.exports}}]);