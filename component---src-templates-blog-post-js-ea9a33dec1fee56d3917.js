(self.webpackChunkmerricx_blog=self.webpackChunkmerricx_blog||[]).push([[989],{7631:function(e,t){t.J={en:"English",id:"Bahasa Indonesia"}},8338:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4578),a=n(7294),l=n.p+"static/profile-5674cb66c213bda81c05eec293977228.png",i=n(9175);let s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{style:{display:"flex"}},a.createElement("img",{src:l,alt:"Merricx",style:{marginRight:(0,i.qZ)(.5),marginBottom:0,width:(0,i.qZ)(2),height:(0,i.qZ)(2),borderRadius:"50%"}}),a.createElement("p",{style:{maxWidth:350}},"Blog that lazily written by ",a.createElement("a",{href:"/about"},"merricx"),"."," "," Discuss about security, privacy, and cryptography."))},t}(a.Component);var o=s},5999:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){let{children:t,style:n={}}=e;return r.createElement("p",{style:{fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all",...n}},t)}},8454:function(e,t,n){"use strict";var r=n(7294),a=n(4593),l=n(4854);function i(e){let{meta:t,image:n,title:i,description:s,slug:o,lang:c="en"}=e;return r.createElement(l.StaticQuery,{query:"336482444",render:e=>{const{siteMetadata:l}=e.site,m=s||l.description,u=n?l.siteUrl+"/"+n:null,p=""+l.siteUrl+o;return r.createElement(a.Z,Object.assign({htmlAttributes:{lang:c}},i?{titleTemplate:"%s — "+l.title,title:i}:{title:l.title+" — Personal blog by Merricx"},{meta:[{name:"description",content:m},{property:"og:url",content:p},{property:"og:title",content:i||l.title},{property:"og:description",content:m},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:i||l.title},{name:"twitter:description",content:m}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))}})}i.defaultProps={meta:[],title:"",slug:""},t.Z=i},4555:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(4578),a=n(7294),l=n(4854),i=n(7361),s=n.n(i),o=n(8338),c=n(5171),m=n(8454),u=n(5999),p=n(5868),d=n(9175),g=n(7631),h={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}};const f=e=>g.J[e].replace(/ /g," ");let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){let{translations:e,lang:t,languageLink:n,editUrl:r}=this.props,i=e.filter((e=>"ru"!==e)),s=-1!==e.indexOf("ru");return a.createElement("div",{className:"translations"},a.createElement(u.Z,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},e.length>0&&a.createElement("span",null,s&&a.createElement("span",null,"Originally written in:"," ","en"===t?a.createElement("b",null,f("en")):a.createElement(l.Link,{to:n("en")},"English")," • ","ru"===t?a.createElement("b",null,"Русский (авторский перевод)"):a.createElement(l.Link,{to:n("ru")},"Русский (авторский перевод)"),a.createElement("br",null),a.createElement("br",null)),a.createElement("span",null,"Available other languages: "),i.map(((e,r)=>a.createElement(a.Fragment,{key:e},e===t?a.createElement("b",null,f(e)):a.createElement(l.Link,{to:n(e)},f(e)),r===i.length-1?"":" • ")))),"en"!==t&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("br",null),"ru"!==t&&a.createElement(a.Fragment,null,a.createElement(l.Link,{to:n("en")},"Read in English")," • "),a.createElement(l.Link,{to:"/"+t},"View all translated posts")," ")))},t}(a.Component),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){const e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title");let{previous:r,next:i,slug:u,translations:y,translatedLinks:E}=this.props.pageContext;const k=e.fields.langKey;let w=e.html;w=((e,t)=>{const n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&g.J[t]?(n.forEach((n=>{h[n]&&h[n][t]&&(e=e.replace(n,h[n][t]))})),e):e})(w,k),E.forEach((e=>{let t="/"+k+e;w=w.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')})),y=y.slice(),y.sort(((e,t)=>f(e)<f(t)?-1:1)),(e=>{switch(e){case"ru":case"bg":Promise.all([n.e(532),n.e(673)]).then(n.bind(n,9673)),Promise.all([n.e(532),n.e(4)]).then(n.bind(n,4));break;case"uk":Promise.all([n.e(532),n.e(673)]).then(n.bind(n,9673)),Promise.all([n.e(532),n.e(4)]).then(n.bind(n,4)),Promise.all([n.e(532),n.e(620)]).then(n.bind(n,7620)),Promise.all([n.e(532),n.e(293)]).then(n.bind(n,8293));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":Promise.all([n.e(532),n.e(620)]).then(n.bind(n,7620)),Promise.all([n.e(532),n.e(293)]).then(n.bind(n,8293));break;case"vi":Promise.all([n.e(532),n.e(878)]).then(n.bind(n,878)),Promise.all([n.e(532),n.e(409)]).then(n.bind(n,2409));break;case"fa":Promise.all([n.e(532),n.e(398)]).then(n.bind(n,398));break;case"ar":Promise.all([n.e(532),n.e(437)]).then(n.bind(n,5437))}})(k);const v=((e,t)=>{const n=e.replace(t+"/","");return e=>"en"===e?n:"/"+e+n})(u,k),x=v("en"),Z="https://github.com/merricx/blog/edit/master/src/pages/"+x.slice(1,x.length-1)+"/index"+("en"===k?"":"."+k)+".md";return a.createElement(c.Z,{location:this.props.location,title:t},a.createElement(m.Z,{lang:k,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),a.createElement("main",null,a.createElement("article",null,a.createElement("header",null,a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),a.createElement("p",{style:{...(0,d.bA)(-.2),display:"block",marginBottom:(0,d.qZ)(1),marginTop:(0,d.qZ)(-.8)}},(0,p.P)(e.frontmatter.date,k)," • "+(0,p.y)(e.timeToRead)),y.length>0&&a.createElement(b,{translations:y,editUrl:Z,languageLink:v,lang:k})),a.createElement("div",{dangerouslySetInnerHTML:{__html:w}}))),a.createElement("aside",null,a.createElement("hr",{style:{color:"rgba(210, 214, 220, 0.5)",backgroundColor:"rgba(210, 214, 220, 0.5)",height:2}}),a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:(0,d.qZ)(.25)}}),a.createElement(o.Z,null),a.createElement("hr",{style:{color:"rgba(210, 214, 220, 0.5)",backgroundColor:"rgba(210, 214, 220, 0.5)",height:2}}),a.createElement("nav",null,a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,r&&a.createElement(l.Link,{to:r.fields.slug,rel:"prev",style:{marginRight:20}},"← ",r.frontmatter.title)),a.createElement("li",null,i&&a.createElement(l.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))))},t}(a.Component);var E=y},5868:function(e,t,n){"use strict";n.d(t,{P:function(){return l},y:function(){return a}});var r=n(5785);function a(e){let t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function l(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);const a=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,(0,r.Z)(a))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ea9a33dec1fee56d3917.js.map