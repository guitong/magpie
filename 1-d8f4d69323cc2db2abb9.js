(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{148:function(t,e,M){"use strict";M.r(e),M.d(e,"graphql",function(){return g}),M.d(e,"StaticQueryContext",function(){return c}),M.d(e,"StaticQuery",function(){return j});var i=M(0),a=M.n(i),r=M(4),u=M.n(r),n=M(147),A=M.n(n);M.d(e,"Link",function(){return A.a}),M.d(e,"withPrefix",function(){return n.withPrefix}),M.d(e,"navigate",function(){return n.navigate}),M.d(e,"push",function(){return n.push}),M.d(e,"replace",function(){return n.replace}),M.d(e,"navigateTo",function(){return n.navigateTo});var N=M(150),s=M.n(N);M.d(e,"PageRenderer",function(){return s.a});var o=M(33);M.d(e,"parsePath",function(){return o.a});var c=a.a.createContext({}),j=function(t){return a.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}j.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},149:function(t,e,M){"use strict";M.d(e,"a",function(){return A}),M.d(e,"b",function(){return N});var i=M(159),a=M.n(i),r=M(160),u=M.n(r);u.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete u.a.googleFonts;var n=new a.a(u.a);var A=n.rhythm,N=n.scale},150:function(t,e,M){var i;t.exports=(i=M(153))&&i.default||i},151:function(t,e,M){"use strict";M(32);var i=M(7),a=M.n(i),r=M(0),u=M.n(r),n=M(148),A=M(149),N=M(154),s=M.n(N),o=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e=this.props,M=e.location,i=e.title,a=e.children;return t="/magpie/"===M.pathname?u.a.createElement("h1",{style:Object.assign({},Object(A.b)(1.5),{marginBottom:Object(A.a)(1.5),marginTop:0})},u.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i),u.a.createElement("img",{src:s.a,alt:"magpie picture",style:{width:50}})):u.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},u.a.createElement(n.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i),u.a.createElement("img",{src:s.a,alt:"magpie picture",style:{width:20,marginBottom:10,marginLeft:4}})),u.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(A.a)(24),padding:Object(A.a)(1.5)+" "+Object(A.a)(.75)}},t,a,u.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",u.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(u.a.Component);e.a=o},152:function(t,e,M){"use strict";var i=M(155),a=M(0),r=M.n(a),u=M(4),n=M.n(u),A=M(161),N=M.n(A),s=M(148);function o(t){var e=t.description,M=t.lang,a=t.meta,u=t.keywords,n=t.title;return r.a.createElement(s.StaticQuery,{query:c,render:function(t){var i=e||t.site.siteMetadata.description;return r.a.createElement(N.a,{htmlAttributes:{lang:M},title:n,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:n},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:i}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(a)})},data:i})}o.defaultProps={lang:"en",meta:[],keywords:[]},o.propTypes={description:n.a.string,lang:n.a.string,meta:n.a.array,keywords:n.a.arrayOf(n.a.string),title:n.a.string.isRequired},e.a=o;var c="1025518380"},153:function(t,e,M){"use strict";M.r(e);M(32);var i=M(0),a=M.n(i),r=M(4),u=M.n(r),n=M(54),A=M(2),N=function(t){var e=t.location,M=A.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(n.a,Object.assign({location:e,pageResources:M},M.json))};N.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=N},154:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjQyLjk0ODYxIDE0NS45ODAxOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjUzMjkgLTQ3LjU1MSkiPgogIDxwYXRoIGQ9Im0zNy4wMzEgNDcuNTYyYy01Ljc1MDggMC4yNTQzOC0xMC45MDIgMy44NjQzLTE0LjI4MSA4LjM0MzgtNC4xNDQ2IDIuNTgxMS05LjE2OSAzLjMyMy0xMy41OTQgNS4yODEyLTEuNTE0NyAwLjA0NDQ0LTMuOTYwNCAzLjc1NTEtMS43MTg4IDMuNjU2MiA1LjI3NiAxLjYyNSAxMC45MDUgMS4zNTA1IDE2LjMxMiAyLjMxMjUgNy42MDExIDMuOTIwOCA4Ljk0MTYgMTQuMTE2IDcuMTU2MiAyMS43MTktMy4yNjU4IDE4LjQzMSAxLjYyODYgMzkuMjM0IDE2LjEyNSA1MS44MTIgNy43MjU0IDYuMTA1MyAxNi4wMzEgMTEuNTMyIDI1LjA2MiAxNS4zNDQgMS41ODggMS41MTc3IDEuNzgxMiA0LjI2NzEgMi4xMjUgNi40MDYyLTAuODcwNTEgNS41MDc2LTQuMDczNSAxMC4zMi02LjA5MzggMTUuNDY5LTIuMDY0NyAyLjU1MDctMi4yMjA1IDYuNzY4My01LjA5MzggOC40Njg4LTEuOTU4OC0wLjk1NTE3LTQuOTAxMi00LjIzNDMtNy4xMjczLTIuMTUyNiAwLjA0MTA4IDAuOTUwNjIgMi42MTc5IDAuNzkyMjMgMC45NzE0MyAyLjI3NjktMy4zMDYyLTEuMTQ0OC03LjQ5NzgtMy43MTE4LTEwLjg0NC0xLjM0MzEtMC43MTgyNSA0LjEwMzggMS4zMTIyLTAuMTU3NjUgMi45Njg4IDEuMTU2MiAwLjg0NTQ2IDEuMzM0MSAzLjk3OTMgMS4yMjM4IDUuNjI5MSAyLjAxNzUgMC4zNzU4OSAwLjE4MDgzLTEuMzg1IDAuOTU5NTItMi40MTA0IDEuNDE0LTEuMjczOCAwLjU2NDU3LTIuMDM0My0wLjIzMzkyLTMuMTI0OSAxLjkwMTMtMS4yNTU2IDIuNDU4MSAzLjUxNDYtMC43ODA3NiA1LjY4NDcgMC4xNzE1NSAyLjEwNCAwLjQ1MTY3IDQuNjE0Mi0wLjg2MSA2LjYyNzctMS40NDE4IDIuNDQ2LTEuMzgzNiA1LjM0OS0xLjM1NzggNy43ODEyIDAuMzc1IDIuMjUzIDAuOTY5OTkgNC43NTk2IDAuNTc0MzYgNy4wMzEyIDEuNzE4OCAyLjM4MTIgMS4wMzI4IDMuNDAyNi0wLjkyOTQxIDQuNjU2Mi0yLjI1IDIuMDc0MSAwLjEzMTU5IDMuMjI0NCAyLjE3MzggNC4yODEyIDMuMzEyNSAxLjE4MS0yLjI0OTItMi41NzA0LTQuMzk5OC00LjQ2ODgtNC45MDYyLTMuMjUxOCAwLjc0MzYxLTYuNjg4MyAxLjQ1NzktOS45Mzc1LTAuMDYyNS0zLjY0MDgtMS42ODU3LTAuNjYyNDMtNi4yNjI3IDAuNTMxMjUtOC43NSAzLjA5NDUtNS44MjYgNC45NjQ1LTEyLjY4OCA5LjkzNzUtMTcuMTg4IDEuODM3OS0yLjI5NDctMy43MTM3LTYuMzA4NiAwLjMxMjUtNy4xODc1IDMuODA5MiA4ZS0zIDEwLjE2OC0xLjkxNjkgMTEuNDA2IDMuMjE4OCAxLjU0NzEgNS42NTQ0LTAuNDgzNjIgMTEuNjE5LTEuNSAxNy4yMTktMC43OTc2IDEuNzIyNy0wLjUxMDk5IDUuNzQ0OS0zLjM3NSAzLjQzNzUtMC44MzkyNi0yLjI0NzUtNS4wNTAyIDAuNzE2MjMtMi4zMTI1IDAuNzUgMC4wMTkzIDIuNTMwMi0zLjkzLTAuMDQtNC44MTI1LTEuNDY4OC0xLjg5OTQtMi4xMzE0LTUuNDY3Ni0xLjQ3MTQtNi45Njg4IDAuNTYyNSA0LjU1NzMtMC4zMDE5OSA4LjA2NTYgMi40MTMyIDcuMTg4NyAyLjM2MzEtNC4yNjA1LTAuMjQzMjYtNi41MDc1LTAuNzI0NzktNy43NTEyLTAuMTc1NjMtMC4yNDcwNSAwLjIxMDEzLTEuMTMyNCAxLjAzNDQtMS4xNzkgMS4yNjggMi4yMzgtMC40MDkyMiAzLjM4MDggMC40NzA4MiAzLjg2NjUgMC42MzgzIDEuNzcyOCAwLjE1MDQgNC42NTExLTAuNjY0NCA2LjA2MjUgMS4wMzEyIDIuODM5NCAxLjkzODggNi40Nzc4IDAuODk2NTUgOS41MzEyIDIuMTI1IDIuNDY3OSAwLjEwMDY0IDQuNDkxMSAxLjc3ODcgNi44NDM4IDIuMzQzOCAyLjU4MjcgMi4xNDIyIDUuNTk5OS0yLjM3MjggNy42NTYyIDAuNTMxMjUgMy4zMDM5IDMuMTg4NyAwLjY2NDM1LTMuMjI3MS0xLjYyNS0yLjkzNzUtMy4zNTY3LTAuODM0MjgtOC40MjA4IDEuNTk5Mi0xMC43ODEtMS43ODEyIDAuNzEyODctMTAuMDgxIDQuOTkyOC0xOS43MDYgNS4wNjI1LTI5LjkwNiAyLjA5NzQtMS43ODUzIDUuOTY3Mi0wLjg3NDg1IDguNzUtMS40Njg4IDYuNzkwOC0wLjc4OTA0IDEzLjc5Ny0yLjcxNTkgMjAuNDM4IDAgOS44Mjk5IDEuOTcxNCAxOS41MzggNC42MDg3IDI4Ljc1IDguNjI1IDE3Ljg2NiA2LjE5ODkgMzQuMjcgMTYuMjY2IDUyLjgxMiAyMC41IDUuMzIzNiAyLjMxOTIgMTEuMjc3IDEuMzQ2NSAxNi43MTkgMy4yNSA2LjM4NTkgMS4wMjk5IDEyLjU0NCAzLjEyODYgMTkuMDYyIDMuMzc1IDEuNzU2NCAxLjIyNDkgNi4wNTM1LTEuMjMzNyAzLjA5MzgtMi43MTg4LTEwLjM4NS00LjUzNTItMjEuMjYxLTguMTA0My0zMS43ODEtMTIuNDA2LTYuNTY5OC0yLjkzMjYtMTMuNDAzLTUuMDM0NC0yMC4zNzUtNi43MTg4LTMuMjE5Ny0wLjQ2MTM4LTYuMDEzMi0xLjg1MzItOC41LTMuNzUtMTEuNzIyLTQuNjA0Ny0yMy4zODktOS4zOTI1LTM0LjkzOC0xNC40MDYtNS42NDc0LTIuNTM0LTEwLjYyMS02LjI1MjItMTQuMjUtMTEuMjgxLTkuMzc5LTkuNDYwMi0xOS42OTktMTkuMDg0LTI4Ljk2OS0yNy45NjktMC4zODIyMiAwLjA5MzUtMy4zODY0LTMuMjMxNC00Ljc1LTQuMzEyNS0xMC4yMDEtMTAuMDQ2LTIyLjMyOC0xNy42OTktMzMuODc1LTI2LjAzMS00LjY5MzQtNC4wNzg4LTUuNTU5Mi0xMC43NjItOS42NTYyLTE1LjM3NS00LjU1MTctNi43NzMxLTEwLjM2MS0xMy43NjUtMTguNTYyLTE1LjgxMmwtNC42MjUtMC41OTM3NWMtMC4zODgzNi0wLjAxMzQ0LTAuNzcyODctMC4wMTY5Ni0xLjE1NjIgMHptLTEuNTYyNSA5LjAzMTJjMC4zNzY5MS0wLjAyMzQ1IDAuNzk2NzUtMC4wMDI3IDEuMTU2MiAwLjAzMTI1IDAuNTE4NTggMC4wNDg5OSAwLjQ2Nzg2IDAuMzgwMTMgMC42MjUgMC44NzUtMC4yOTAzMS0wLjYxMDMyLTEuMDE1OS0wLjk0OTU4LTEuNzgxMi0wLjg0Mzc1LTAuMTE5NTcgMC4wMTY1My0wLjI1NDgxIDAuMDU1MTktMC4zNzUgMC4wOTM3NS0wLjk2MTU0IDAuMzA4NDktMS41Mzk2IDEuMjA5Mi0xLjI4MTIgMi4wMzEyczEuMjU3MiAxLjI0NiAyLjIxODggMC45Mzc1YzAuODE3NTUtMC4yNjIyOSAxLjM1OS0wLjk1MDA3IDEuMzQzOC0xLjY1NjIgMC4xMTA2MSAwLjc3OTU1LTAuMTczMjEgMS4zNTU1LTEuMjE4OCAxLjY4NzUtMS4yODc2IDAuNDA4ODctMi4xNTkxIDAuMTk0MTctMi40Njg4LTAuOTA2MjUtMC4yNTU5Mi0wLjkwOTQ1LTAuNDIwMTQtMS43NzM3IDAuODc1LTIuMTI1IDAuMjAzMDgtMC4wNTUwOSAwLjUyOTM0LTAuMTAxNTUgMC45MDYyNS0wLjEyNXptMC40MDYyNSAwLjQzNzVjMC4zNTA5NiAwLjAwNzIgMC42NTIyOCAwLjEwNzEgMC43NSAwLjI4MTI1IDAuMTMwMjkgMC4yMzIyLTAuMTQwMDcgMC40NzUzNi0wLjYyNSAwLjU2MjVzLTAuOTk0NzEtMC4wMTc4LTEuMTI1LTAuMjUgMC4xNzEzMi0wLjQ3NTM2IDAuNjU2MjUtMC41NjI1YzAuMTIxMjMtMC4wMjE3OCAwLjIyNjc2LTAuMDMzNjUgMC4zNDM3NS0wLjAzMTI1em0tMjAuMzc1IDIuNTMxMmMyLjY4OTEgMC4zOTYzOC0xLjc3OSAzLjg2NDMtMS43ODEyIDEuMjE4OCAwLjI4MjAxLTAuNzAyOTEgMS4wNDk5LTEuMTUxNCAxLjc4MTItMS4yMTg4em0zOC4wNjIgMzMuNTk0YzMuMjcxIDAuMjM5NDMgMi41MTggNC45MTIxIDMuNjg3NSA3LjEyNSAwLjg4ODY2IDUuNjMyNyA0LjAzMjYgMTAuMzM3IDYuOTM3NSAxNS4wNjIgMS41NTE2IDQuMjY0NSAzLjU4NzIgOC4yNDcgNi41OTM4IDExLjY1NiAyLjM4ODIgNS4yMjMgOC43NTc0IDYuODMyOSAxMy40MDYgOS41IDMuMDM1NyAwLjQzODEzIDQuMzM1NiAzLjEwMjIgNC4xMjUgNiAwLjU2NDc5IDMuOTM2Ny0yLjI3MDggNy4zOTU5LTYuMDMxMiA4LjE1NjItNC45NDYxIDIuMDA3LTEwLjU0MyAyLjYxNTItMTUuODEyIDEuNzgxMi05LjI2NzUtNi4xNjA1LTE4LjgwOS0xMi41My0yNC43NS0yMi4yMTktNC41NjY0LTUuNDAyNi02Ljg2MzYtMTMuMjQ2LTMuMDkzOC0xOS43MTkgMy4wNjUzLTUuNTExNyA1LjcxODMtMTEuNzkgMTAuNzUtMTUuNzgxIDEuMjgyLTAuNzQ5NDYgMi42ODQ3LTEuNDU3IDQuMTg3NS0xLjU2MjV6bTUuOTM3NSAwLjAzMTI1YzYuNDkwMS0wLjI3ODMxIDExLjk4NSAzLjYyNjUgMTcuOTM4IDUuNTMxMiA0LjU4NjcgMi4yMTAzIDkuNzEyNCAzLjE5MiAxMy43MTkgNi41NjI1IDQuNTc2NyAyLjg0NDEgOS42NDUxIDQuNzE1MiAxNC4zNDQgNy4zNDM4IDMuMDI1NCAxLjM2ODEgNy4xMTEzIDAuNTczNjkgOC44NzUgNC4wOTM4IDMuNDg3NSAxLjk0OTQgMS4yMjQ2IDQuNTA3Mi0yIDMuMjUtOC4yMDY4LTAuOTc0MjEtMTYuNTUyLTIuMTY3Ni0yMy44MTItNi40Mzc1LTMuODcxLTIuNDkzLTcuOTIyMy00LjU3ODMtMTIuMjUtNi4xMjUtNi41MzAyLTMuNjU2Ni0xMi4wOTUtOC43ODUzLTE4LjEyNS0xMy4xNTYtMC45MjE0NC0wLjk4NDg5IDAuNzEzMDUtMS4wNjQyIDEuMzEyNS0xLjA2MjV6bTE1MS4xOSA4MS4zNDRjMS43MzQ4IDAuMzY5NjYgNC40OTMyIDAuOTczMDggNS4xNTYyIDIuNTkzOC0xLjczNiAwLjQ1NTM1LTUuMi0wLjgxNzEyLTUuNDY4OC0yLjUzMTJsMC4zMTI1LTAuMDYyNXptMi42ODc1IDYuMTg3NWM1LjQyNzggMS42ODc0IDEwLjUwOSAyLjMxMSAxNS40MzggMi41IDQuNTUwOCAyLjM2ODQgNi4yMjY0IDIuMjIxOSA2Ljc4MTIgMS4wOTM4IDMuNjAzOSAwLjE5NyAxLjMwODYtMS40NDI2LTEuNS0zLjIxODhsMTEuMjgxIDQuNTMxMmMzLjQ5MTMgNC4yMTIxLTQuOTcyNSAyLjA3MTktNy41IDEuODQzOC0zLjcyNTgtMC4zOTU2LTcuMzQzLTEuMTczOC0xMC43NS0yLjc4MTJsLTcuMzQzOC0xLjEyNWMtNi4zODE5LTAuNTg2NzQtNS43NDc4LTEuNzgwMS02LjQwNjItMi44NDM4eiIvPgogPC9nPgo8L3N2Zz4K"},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Magpie",description:"A starter blog demonstrating what Gatsby can do.",author:"Dan Geng"}}}}},158:function(t,e,M){"use strict";M(163);var i=M(165),a=M(0),r=M.n(a),u=M(148),n=M(166),A=M.n(n),N=M(149);var s="4007731267";e.a=function(){return r.a.createElement(u.StaticQuery,{query:s,render:function(t){var e=t.site.siteMetadata,M=e.author;return e.social,r.a.createElement("div",{style:{display:"flex",marginBottom:Object(N.a)(2.5)}},r.a.createElement(A.a,{fixed:t.avatar.childImageSharp.fixed,alt:M,style:{marginRight:Object(N.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),r.a.createElement("p",{style:{maxWidth:310}},"Personal blog by ",r.a.createElement("a",{href:"javascript:void(0)"},M),".",r.a.createElement("br",null),"Love you, love me."))},data:i})}},163:function(t,e,M){"use strict";M(164)("fixed",function(t){return function(){return t(this,"tt","","")}})},164:function(t,e,M){var i=M(11),a=M(24),r=M(16),u=/"/g,n=function(t,e,M,i){var a=String(r(t)),n="<"+e;return""!==M&&(n+=" "+M+'="'+String(i).replace(u,"&quot;")+'"'),n+">"+a+"</"+e+">"};t.exports=function(t,e){var M={};M[t]=e(n),i(i.P+i.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",M)}},165:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAH/2gAMAwEAAhADEAAAAdivX5C+ugUbETckK//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAEERMQEiH/2gAIAQEAAQUCLI9UN8DImriB262YQMKocf/EABgRAAIDAAAAAAAAAAAAAAAAAAECABAR/9oACAEDAQE/AQi5Df8A/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBEBH/2gAIAQIBAT8BZm0i/wD/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIRITEgMkH/2gAIAQEABj8ClT0VN69MZLjF5OjFw//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFBMRBx/9oACAEBAAE/IXoBLsQ1dSi2dGQGgS5pLQ2HpRE1LeLw2D9Pn//aAAwDAQACAAMAAAAQBMc8/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQAQITH/2gAIAQMBAT8QZt7AChf/xAAXEQEBAQEAAAAAAAAAAAAAAAABIQAQ/9oACAECAQE/EASQyUF7/8QAHhABAQACAQUBAAAAAAAAAAAAAREAIUEQUWFxoYH/2gAIAQEAAT8QjewrETUnvNPjsUg7+cMVkipL2w4Fhao/jxhSlu6Bfm8ZyjUUqvI89EQ8F96f/9k=",width:50,height:50,src:"/magpie/static/fb1d4e0860add8f2a8bb75c5767edf81/d2d31/profile-pic.jpg",srcSet:"/magpie/static/fb1d4e0860add8f2a8bb75c5767edf81/d2d31/profile-pic.jpg 1x,\n/magpie/static/fb1d4e0860add8f2a8bb75c5767edf81/0b804/profile-pic.jpg 1.5x,\n/magpie/static/fb1d4e0860add8f2a8bb75c5767edf81/753c3/profile-pic.jpg 2x,\n/magpie/static/fb1d4e0860add8f2a8bb75c5767edf81/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Dan Geng",social:{twitter:"gt_geng"}}}}}},166:function(t,e,M){"use strict";var i=M(8);e.__esModule=!0,e.default=void 0;var a,r=i(M(7)),u=i(M(51)),n=i(M(156)),A=i(M(157)),N=i(M(0)),s=i(M(4)),o=function(t){var e=(0,A.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},c={},j=function(t){var e=o(t),M=e.fluid?e.fluid.src:e.fixed.src;return c[M]||!1},g=[];var d=function(t,e){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(t){t.forEach(function(t){g.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),a).observe(t),g.push([t,e])},T=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',M=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+M+"/>":"",a=t.srcSet?'<source srcSet="'+t.srcSet+'" '+M+"/>":"",r=t.title?'title="'+t.title+'" ':"",u=t.alt?'alt="'+t.alt+'" ':'alt="" ',n=t.width?'width="'+t.width+'" ':"",A=t.height?'height="'+t.height+'" ':"",N=t.opacity?t.opacity:"1";return"<picture>"+i+a+"<img "+n+A+e+u+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+N+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},l=N.default.forwardRef(function(t,e){var M=t.style,i=t.onLoad,a=t.onError,r=(0,n.default)(t,["style","onLoad","onError"]);return N.default.createElement("img",(0,A.default)({},r,{onLoad:i,onError:a,ref:e,style:(0,A.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},M)}))});l.propTypes={style:s.default.object,onError:s.default.func,onLoad:s.default.func};var L=function(t){function e(e){var M;M=t.call(this,e)||this;var i=!0,a=!1,r=e.fadeIn,n=j(e);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,a=!0),"undefined"==typeof window&&(i=!1),e.critical&&(i=!0,a=!1);var A=!(M.props.critical&&!M.props.fadeIn);return M.state={isVisible:i,imgLoaded:!1,IOSupported:a,fadeIn:r,hasNoScript:A,seenBefore:n},M.imageRef=N.default.createRef(),M.handleImageLoaded=M.handleImageLoaded.bind((0,u.default)((0,u.default)(M))),M.handleRef=M.handleRef.bind((0,u.default)((0,u.default)(M))),M}(0,r.default)(e,t);var M=e.prototype;return M.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:j(this.props)}),this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},M.handleRef=function(t){var e=this;this.state.IOSupported&&t&&d(t,function(){e.state.isVisible||"function"!=typeof e.props.onStartLoad||e.props.onStartLoad({wasCached:j(e.props)}),e.setState({isVisible:!0,imgLoaded:!1})})},M.handleImageLoaded=function(){var t,e,M;t=this.props,e=o(t),M=e.fluid?e.fluid.src:e.fixed.src,c[M]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},M.render=function(){var t=o(this.props),e=t.title,M=t.alt,i=t.className,a=t.style,r=void 0===a?{}:a,u=t.imgStyle,n=void 0===u?{}:u,s=t.placeholderStyle,c=void 0===s?{}:s,j=t.placeholderClassName,g=t.fluid,d=t.fixed,L=t.backgroundColor,y=t.Tag,D="boolean"==typeof L?"lightgray":L,I=(0,A.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,c),z=(0,A.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),E={title:e,alt:this.state.isVisible?"":M,style:I,className:j};if(g){var f=g;return N.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,A.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(f.srcSet)},N.default.createElement(y,{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&N.default.createElement(l,(0,A.default)({src:f.base64},E)),f.tracedSVG&&N.default.createElement(l,(0,A.default)({src:f.tracedSVG},E)),D&&N.default.createElement(y,{title:e,style:{backgroundColor:D,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&N.default.createElement("picture",null,f.srcSetWebp&&N.default.createElement("source",{type:"image/webp",srcSet:f.srcSetWebp,sizes:f.sizes}),N.default.createElement("source",{srcSet:f.srcSet,sizes:f.sizes}),N.default.createElement(l,{alt:M,title:e,src:f.src,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&N.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,A.default)({alt:M,title:e},f))}}))}if(d){var p=d,S=(0,A.default)({position:"relative",overflow:"hidden",display:"inline-block",width:p.width,height:p.height},r);return"inherit"===r.display&&delete S.display,N.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:S,ref:this.handleRef,key:"fixed-"+JSON.stringify(p.srcSet)},p.base64&&N.default.createElement(l,(0,A.default)({src:p.base64},E)),p.tracedSVG&&N.default.createElement(l,(0,A.default)({src:p.tracedSVG},E)),D&&N.default.createElement(y,{title:e,style:{backgroundColor:D,width:p.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:p.height}}),this.state.isVisible&&N.default.createElement("picture",null,p.srcSetWebp&&N.default.createElement("source",{type:"image/webp",srcSet:p.srcSetWebp,sizes:p.sizes}),N.default.createElement("source",{srcSet:p.srcSet,sizes:p.sizes}),N.default.createElement(l,{alt:M,title:e,width:p.width,height:p.height,src:p.src,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&N.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,A.default)({alt:M,title:e,width:p.width,height:p.height},p))}}))}return null},e}(N.default.Component);L.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=s.default.shape({width:s.default.number.isRequired,height:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string}),D=s.default.shape({aspectRatio:s.default.number.isRequired,src:s.default.string.isRequired,srcSet:s.default.string.isRequired,sizes:s.default.string.isRequired,base64:s.default.string,tracedSVG:s.default.string,srcWebp:s.default.string,srcSetWebp:s.default.string});L.propTypes={resolutions:y,sizes:D,fixed:y,fluid:D,fadeIn:s.default.bool,title:s.default.string,alt:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),critical:s.default.bool,style:s.default.object,imgStyle:s.default.object,placeholderStyle:s.default.object,placeholderClassName:s.default.string,backgroundColor:s.default.oneOfType([s.default.string,s.default.bool]),onLoad:s.default.func,onError:s.default.func,onStartLoad:s.default.func,Tag:s.default.string};var I=L;e.default=I}}]);
//# sourceMappingURL=1-d8f4d69323cc2db2abb9.js.map