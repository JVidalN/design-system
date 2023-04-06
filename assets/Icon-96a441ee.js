var we=Object.defineProperty;var o=(n,e)=>we(n,"name",{value:e,configurable:!0});import{p as f}from"./index-50ee27ec.js";import{a as be,j as Q,r as ye}from"./jsx-runtime-451690fa.js";function Ee(n,e){if(n==null)return{};var s={},r=Object.keys(n),t,a;for(a=0;a<r.length;a++)t=r[a],!(e.indexOf(t)>=0)&&(s[t]=n[t]);return s}o(Ee,"_objectWithoutPropertiesLoose");function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r])}return n},Z.apply(this,arguments)}o(Z,"_extends");function K(n,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():o(function(r,t){return r.__proto__=t,r},"_setPrototypeOf"),K(n,e)}o(K,"_setPrototypeOf");function Se(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,K(n,e)}o(Se,"_inheritsLoose");function F(n,e,s){if(s||arguments.length===2)for(var r=0,t=e.length,a;r<t;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return n.concat(a||Array.prototype.slice.call(e))}o(F,"__spreadArray");/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var te=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,xe=/\\([\u000b\u0020-\u00ff])/g,Ae=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,qe=Re;function Re(n){if(!n)throw new TypeError("argument string is required");var e=typeof n=="object"?je(n):n;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var s=e.indexOf(";"),r=s!==-1?e.slice(0,s).trim():e.trim();if(!Ae.test(r))throw new TypeError("invalid media type");var t=new Ce(r.toLowerCase());if(s!==-1){var a,i,c;for(te.lastIndex=s;i=te.exec(e);){if(i.index!==s)throw new TypeError("invalid parameter format");s+=i[0].length,a=i[1].toLowerCase(),c=i[2],c.charCodeAt(0)===34&&(c=c.slice(1,-1),c.indexOf("\\")!==-1&&(c=c.replace(xe,"$1"))),t.parameters[a]=c}if(s!==e.length)throw new TypeError("invalid parameter format")}return t}o(Re,"parse");function je(n){var e;if(typeof n.getHeader=="function"?e=n.getHeader("content-type"):typeof n.headers=="object"&&(e=n.headers&&n.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}o(je,"getcontenttype");function Ce(n){this.parameters=Object.create(null),this.type=n}o(Ce,"ContentType");var M=new Map,ce=o(function(e){return e.cloneNode(!0)},"cloneSvg"),re=o(function(){return window.location.protocol==="file:"},"isLocal"),le=o(function(e,s,r){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var a=t.getResponseHeader("Content-Type");if(!a)throw new Error("Content type not found");var i=qe(a).type;if(!(i==="image/svg+xml"||i==="text/plain"))throw new Error("Invalid content type: ".concat(i))}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(re()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||re()&&t.status===0)r(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(c){if(t.abort(),c instanceof Error)r(c,t);else throw c}},t.open("GET",e),t.withCredentials=s,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},"makeAjaxRequest"),q={},ne=o(function(e,s){q[e]=q[e]||[],q[e].push(s)},"queueRequest"),Ie=o(function(e){for(var s=o(function(i,c){setTimeout(function(){if(Array.isArray(q[e])){var d=M.get(e),p=q[e][i];d instanceof SVGSVGElement&&p(null,ce(d)),d instanceof Error&&p(d),i===q[e].length-1&&delete q[e]}},0)},"_loop_1"),r=0,t=q[e].length;r<t;r++)s(r)},"processRequestQueue"),_e=o(function(e,s,r){if(M.has(e)){var t=M.get(e);if(t===void 0){ne(e,r);return}if(t instanceof SVGSVGElement){r(null,ce(t));return}}M.set(e,void 0),ne(e,r),le(e,s,function(a,i){var c;a?M.set(e,a):((c=i.responseXML)===null||c===void 0?void 0:c.documentElement)instanceof SVGSVGElement&&M.set(e,i.responseXML.documentElement),Ie(e)})},"loadSvgCached"),Ge=o(function(e,s,r){le(e,s,function(t,a){var i;t?r(t):((i=a.responseXML)===null||i===void 0?void 0:i.documentElement)instanceof SVGSVGElement&&r(null,a.responseXML.documentElement)})},"loadSvgUncached"),Oe=0,ke=o(function(){return++Oe},"uniqueId"),E=[],ae={},Le="http://www.w3.org/2000/svg",$="http://www.w3.org/1999/xlink",se=o(function(e,s,r,t,a,i,c){var d=e.getAttribute("data-src")||e.getAttribute("src");if(!d){c(new Error("Invalid data-src or src attribute"));return}if(E.indexOf(e)!==-1){E.splice(E.indexOf(e),1),e=null;return}E.push(e),e.setAttribute("src","");var p=t?_e:Ge;p(d,a,function(G,l){if(!l){E.splice(E.indexOf(e),1),e=null,c(G);return}var R=e.getAttribute("id");R&&l.setAttribute("id",R);var A=e.getAttribute("title");A&&l.setAttribute("title",A);var j=e.getAttribute("width");j&&l.setAttribute("width",j);var C=e.getAttribute("height");C&&l.setAttribute("height",C);var m=Array.from(new Set(F(F(F([],(l.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();l.setAttribute("class",m);var v=e.getAttribute("style");v&&l.setAttribute("style",v),l.setAttribute("data-src",d);var w=[].filter.call(e.attributes,function(g){return/^data-\w[\w-]*$/.test(g.name)});if(Array.prototype.forEach.call(w,function(g){g.name&&g.value&&l.setAttribute(g.name,g.value)}),r){var b={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},O,h,S,u,x;Object.keys(b).forEach(function(g){O=g,S=b[g],h=l.querySelectorAll(O+"[id]");for(var ve=o(function(U,Nt){u=h[U].id,x=u+"-"+ke();var V;Array.prototype.forEach.call(S,function(z){V=l.querySelectorAll("["+z+'*="'+u+'"]');for(var P=0,me=V.length;P<me;P++){var ee=V[P].getAttribute(z);ee&&!ee.match(new RegExp('url\\("?#'+u+'"?\\)'))||V[P].setAttribute(z,"url(#"+x+")")}});for(var X=l.querySelectorAll("[*|href]"),H=[],W=0,he=X.length;W<he;W++){var J=X[W].getAttributeNS($,"href");J&&J.toString()==="#"+h[U].id&&H.push(X[W])}for(var B=0,ge=H.length;B<ge;B++)H[B].setAttributeNS($,"href","#"+x);h[U].id=x},"_loop_1"),D=0,pe=h.length;D<pe;D++)ve(D)})}l.removeAttribute("xmlns:a");for(var y=l.querySelectorAll("script"),I=[],k,_,L=0,ue=y.length;L<ue;L++)_=y[L].getAttribute("type"),(!_||_==="application/ecmascript"||_==="application/javascript"||_==="text/javascript")&&(k=y[L].innerText||y[L].textContent,k&&I.push(k),l.removeChild(y[L]));if(I.length>0&&(s==="always"||s==="once"&&!ae[d])){for(var N=0,fe=I.length;N<fe;N++)new Function(I[N])(window);ae[d]=!0}var de=l.querySelectorAll("style");if(Array.prototype.forEach.call(de,function(g){g.textContent+=""}),l.setAttribute("xmlns",Le),l.setAttribute("xmlns:xlink",$),i(l),!e.parentNode){E.splice(E.indexOf(e),1),e=null,c(new Error("Parent node is null"));return}e.parentNode.replaceChild(l,e),E.splice(E.indexOf(e),1),e=null,c(null,l)})},"injectElement"),Me=o(function(e,s){var r=s===void 0?{}:s,t=r.afterAll,a=t===void 0?function(){}:t,i=r.afterEach,c=i===void 0?function(){}:i,d=r.beforeEach,p=d===void 0?function(){}:d,G=r.cacheRequests,l=G===void 0?!0:G,R=r.evalScripts,A=R===void 0?"never":R,j=r.httpRequestWithCredentials,C=j===void 0?!1:j,m=r.renumerateIRIElements,v=m===void 0?!0:m;if(e&&"length"in e)for(var w=0,b=0,O=e.length;b<O;b++)se(e[b],A,v,l,C,p,function(h,S){c(h,S),e&&"length"in e&&e.length===++w&&a(w)});else e?se(e,A,v,l,C,p,function(h,S){c(h,S),a(1),e=null}):a(0)},"SVGInjector"),Ve=o(function(e){var s=(e==null?void 0:e.ownerDocument)||document;return s.defaultView||window},"ownerWindow"),We=o(function(e,s){for(var r in e)if(!(r in s))return!0;for(var t in s)if(e[t]!==s[t])return!0;return!1},"shallowDiffers"),Pe=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],T="http://www.w3.org/2000/svg",ie="http://www.w3.org/1999/xlink",Y=function(n){Se(e,n);function e(){for(var r,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return r=n.call.apply(n,[this].concat(a))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(c){r.reactWrapper=c},r}o(e,"ReactSVG");var s=e.prototype;return s.renderSVG=o(function(){var t=this;if(this.reactWrapper instanceof Ve(this.reactWrapper).Node){var a=this.props,i=a.desc,c=a.evalScripts,d=a.httpRequestWithCredentials,p=a.renumerateIRIElements,G=a.src,l=a.title,R=a.useRequestCache,A=this.props.onError,j=this.props.beforeInjection,C=this.props.afterInjection,m=this.props.wrapper,v,w;m==="svg"?(v=document.createElementNS(T,m),v.setAttribute("xmlns",T),v.setAttribute("xmlns:xlink",ie),w=document.createElementNS(T,m)):(v=document.createElement(m),w=document.createElement(m)),v.appendChild(w),w.dataset.src=G,this.nonReactWrapper=this.reactWrapper.appendChild(v);var b=o(function(u){if(t.removeSVG(),!t._isMounted){A(u);return}t.setState(function(){return{hasError:!0,isLoading:!1}},function(){A(u)})},"handleError"),O=o(function(u,x){if(u){b(u);return}t._isMounted&&t.setState(function(){return{isLoading:!1}},function(){try{C(x)}catch(y){b(y)}})},"afterEach"),h=o(function(u){if(u.setAttribute("role","img"),i){var x=u.querySelector(":scope > desc");x&&u.removeChild(x);var y=document.createElement("desc");y.innerHTML=i,u.prepend(y)}if(l){var I=u.querySelector(":scope > title");I&&u.removeChild(I);var k=document.createElement("title");k.innerHTML=l,u.prepend(k)}try{j(u)}catch(_){b(_)}},"beforeEach");Me(w,{afterEach:O,beforeEach:h,cacheRequests:R,evalScripts:c,httpRequestWithCredentials:d,renumerateIRIElements:p})}},"renderSVG"),s.removeSVG=o(function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},"removeSVG"),s.componentDidMount=o(function(){this._isMounted=!0,this.renderSVG()},"componentDidMount"),s.componentDidUpdate=o(function(t){var a=this;We(Z({},t),this.props)&&this.setState(function(){return a.initialState},function(){a.removeSVG(),a.renderSVG()})},"componentDidUpdate"),s.componentWillUnmount=o(function(){this._isMounted=!1,this.removeSVG()},"componentWillUnmount"),s.render=o(function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var a=t.fallback;t.httpRequestWithCredentials;var i=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var c=t.wrapper,d=Ee(t,Pe),p=c;return be(p,{...d,ref:this.refCallback,...c==="svg"?{xmlns:T,xmlnsXlink:ie}:{},children:[this.state.isLoading&&i&&Q(i,{}),this.state.hasError&&a&&Q(a,{})]})},"render"),e}(ye.Component);Y.defaultProps={afterInjection:o(function(){},"afterInjection"),beforeInjection:o(function(){},"beforeInjection"),desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:o(function(){},"onError"),renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};Y.propTypes={afterInjection:f.func,beforeInjection:f.func,desc:f.string,evalScripts:f.oneOf(["always","once","never"]),fallback:f.oneOfType([f.func,f.object,f.string]),httpRequestWithCredentials:f.bool,loading:f.oneOfType([f.func,f.object,f.string]),onError:f.func,renumerateIRIElements:f.bool,src:f.string.isRequired,title:f.string,useRequestCache:f.bool,wrapper:f.oneOf(["div","span","svg"])};const Te="/assets/arrowDown-708d93bc.svg",Ne="/assets/arrowLeft-0d8efae4.svg",De="/assets/arrowLeftWithFletching-707bd9f9.svg",Ue="/assets/arrowRight-03540e65.svg",Xe="/assets/arrowRightRounded-73cd4ba8.svg",He="/assets/arrowRound-0d00c786.svg",Be="/assets/arrowUp-1ae70c54.svg",ze="/assets/bank-b43ccaec.svg",Fe="/assets/calendar-e0b197ad.svg",$e="/assets/cancel-825a8606.svg",Qe="/assets/cancelOutline-93b1bf42.svg",Ze="/assets/chartBar-427377c0.svg",Ke="/assets/chartCard-3e7d043b.svg",Ye="/assets/check-766d9403.svg",Je="/assets/checkElection-7615a6c8.svg",et="/assets/config-10598fbe.svg",tt="/assets/disc-61ccb97e.svg",rt="/assets/email-9045f1b5.svg",nt="/assets/establishment-448d4b9d.svg",at="/assets/export-0c1b137f.svg",st="/assets/file-fe92fec7.svg",it="/assets/fileDownload-bc47f905.svg",ot="/assets/filter-e00435f5.svg",ct="/assets/home-6615339a.svg",lt="/assets/hourGlass-b0bff757.svg",ut="/assets/information-a9de54f8.svg",ft="/assets/list-178b6a7f.svg",dt="/assets/listBar-a848b1f4.svg",vt="/assets/loadingSpin-467650eb.svg",pt="/assets/logout-27b81e5d.svg",ht="/assets/money-e7051ddd.svg",gt="/assets/moneyDocument-85f42859.svg",mt="/assets/notification-c94c5da9.svg",wt="/assets/openEyes-3e7582d7.svg",bt="/assets/pencil-15bfc214.svg",yt="/assets/priceCondition-2c54f47a.svg",Et="/assets/priceModel-d15d4550.svg",St="/assets/report-d14b123a.svg",xt="/assets/search-66e8c299.svg",At="/assets/signalEqual-aab87971.svg",qt="/assets/signalMinus-a53f058b.svg",Rt="/assets/signalPlus-6aea72d8.svg",jt="/assets/social-f86c5a3e.svg",Ct="/assets/sort-1f6e0f04.svg",It="/assets/sun-9136cc63.svg",_t="/assets/tag-642f76ed.svg",Gt="/assets/timer-aff5b7bd.svg",Ot="/assets/trash-78d0b372.svg",kt="/assets/upload-bc7476b3.svg",Lt="/assets/user-a21d20dd.svg",Mt="/assets/userPlus-4456bcfd.svg",Vt="/assets/xls-bf1940a7.svg",Wt="/assets/close-3a79c789.svg",Pt=Object.freeze(Object.defineProperty({__proto__:null,arrowDown:Te,arrowLeft:Ne,arrowLeftWithFletching:De,arrowRight:Ue,arrowRightRounded:Xe,arrowRound:He,arrowUp:Be,bank:ze,calendar:Fe,cancel:$e,cancelOutline:Qe,chartBar:Ze,chartCard:Ke,check:Ye,checkElection:Je,close:Wt,config:et,disc:tt,email:rt,establishment:nt,export:at,file:st,fileDownload:it,filter:ot,home:ct,hourGlass:lt,information:ut,list:ft,listBar:dt,loadingSpin:vt,logout:pt,money:ht,moneyDocument:gt,notification:mt,openEyes:wt,pencil:bt,priceCondition:yt,priceModel:Et,report:St,search:xt,signalEqual:At,signalMinus:qt,signalPlus:Rt,social:jt,sort:Ct,sun:It,tag:_t,timer:Gt,trash:Ot,upload:kt,user:Lt,userPlus:Mt,xls:Vt},Symbol.toStringTag,{value:"Module"}));function oe({id:n,name:e,color:s="black",width:r="24",height:t="24",onClick:a,className:i}){const c=Pt[e];return Q(Y,{id:n,src:c,className:`${s} cursor-pointer ${i&&i}`,wrapper:"svg",width:r,height:t,onClick:a})}o(oe,"Icon");try{oe.displayName="Icon",oe.__docgenInfo={description:"",displayName:"Icon",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"arrowDown"'},{value:'"arrowLeft"'},{value:'"arrowLeftWithFletching"'},{value:'"arrowRight"'},{value:'"arrowRightRounded"'},{value:'"arrowRound"'},{value:'"arrowUp"'},{value:'"bank"'},{value:'"calendar"'},{value:'"cancel"'},{value:'"cancelOutline"'},{value:'"chartBar"'},{value:'"chartCard"'},{value:'"check"'},{value:'"checkElection"'},{value:'"config"'},{value:'"disc"'},{value:'"email"'},{value:'"establishment"'},{value:'"export"'},{value:'"file"'},{value:'"fileDownload"'},{value:'"filter"'},{value:'"home"'},{value:'"hourGlass"'},{value:'"information"'},{value:'"list"'},{value:'"listBar"'},{value:'"loadingSpin"'},{value:'"logout"'},{value:'"money"'},{value:'"moneyDocument"'},{value:'"notification"'},{value:'"openEyes"'},{value:'"pencil"'},{value:'"priceCondition"'},{value:'"priceModel"'},{value:'"report"'},{value:'"search"'},{value:'"signalEqual"'},{value:'"signalMinus"'},{value:'"signalPlus"'},{value:'"social"'},{value:'"sort"'},{value:'"sun"'},{value:'"tag"'},{value:'"timer"'},{value:'"trash"'},{value:'"upload"'},{value:'"user"'},{value:'"userPlus"'},{value:'"xls"'},{value:'"close"'}]}},color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:{value:"24"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"24"},description:"",name:"height",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{oe as I,Pt as i};
//# sourceMappingURL=Icon-96a441ee.js.map
