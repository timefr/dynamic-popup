(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1167:function(p,l,e){p.exports={}},1220:function(p,l,e){"use strict";var i=e(1167),n=e.n(i)},863:function(p,l,e){"use strict";e.d(l,"a",function(){return n});const i={titleTemplate:"Cybersport.ru",withTitleTemplate:!0};function n(t){const P={...i,...t},{description:M,url:E,title:y,type:m,mainTagTitle:f,publishedAt:v,author:$,materialId:C,image:a}=P;return{meta:[{content:m||"website",property:"og:type"},{content:y,property:"og:title"},{content:y,property:"twitter:title"},{content:E,property:"og:url"},{content:M,property:"og:description"},{content:M,name:"description"},{content:a==null?void 0:a("og-jpg"),property:"og:image"},{content:a==null?void 0:a("og-jpg"),name:"twitter:image"},{content:a==null?void 0:a("vk"),property:"vk:image"},{content:a==null?void 0:a("as-is"),name:"relap-image"},{content:$,name:"mediator_author"},{content:$,property:"article:author"},{content:f,name:"mediator_theme"},{content:f,property:"article:section"},{content:v,name:"mediator_published_time"},{content:v,property:"article:published_time"},{content:C,name:"mediator"}].filter(d=>!!d.content).map(d=>({...d,hid:d.name||d.property})),title:y}}},864:function(p,l,e){"use strict";var i=function(){var r=this,d=r._self._c,o=r._self._setupProxy;return d("rounded-block",{attrs:{"anchor-id":r.anchorId,"no-padding":r.noPadding}},[r.title?d("div",{staticClass:"widget-title"},[r._v(r._s(r.title))]):r._e(),r._t("default")],2)},n=[],t=e(0),P=e(862),M=Object.defineProperty,E=Object.getOwnPropertyDescriptor,y=(a,r,d,o)=>{for(var u=o>1?void 0:o?E(r,d):r,x=a.length-1,D;x>=0;x--)(D=a[x])&&(u=(o?D(r,d,u):D(u))||u);return o&&u&&M(r,d,u),u};let m=class extends t.Vue{};y([Object(t.Prop)({type:String})],m.prototype,"title",2),y([Object(t.Prop)({type:String,default:""})],m.prototype,"anchorId",2),y([Object(t.Prop)({type:Boolean,default:!1})],m.prototype,"noPadding",2),m=y([Object(t.Component)({components:{RoundedBlock:P.a}})],m);var f=m,v=e(3),$=Object(v.a)(f,i,n,!1,null,null,null),C=l.a=$.exports},865:function(p,l,e){p.exports={root:"root_pSduS",icon:"icon_QvODG",count:"count_7Zuhe",hot:"hot_2i9Ux"}},869:function(p,l,e){"use strict";var i=function(m,f){return m("div",{staticClass:"layout-with-aside",class:[f.data.class,f.data.staticClass]},[m("div",{staticClass:"layout-with-aside-main",class:{_wide:!!f.props.asideHidden||f.props.asideHidden===""}},[f._t("default")],2),!f.props.asideHidden&&f.props.asideHidden!==""?m("aside",{staticClass:"layout-with-aside-aside"},[f._t("aside")],2):f._e(),m("div",{staticClass:"layout-with-aside-after",class:{_wide:!!f.props.asideHidden||f.props.asideHidden===""}},[f._t("after-aside")],2)])},n=[],t=e(3),P={},M=Object(t.a)(P,i,n,!0,null,null,null),E=l.a=M.exports},873:function(p,l,e){"use strict";var i=function(){var o=this,u=o._self._c,x=o._self._setupProxy;return o.value?u("div",{class:[o.$style.root,o.value>=o.hotCommentsThreshold&&o.$style.hot]},[u("div",{class:o.$style.icon},[u("svg-icon",{attrs:{name:"comment"}})],1),u("div",{class:o.$style.count},[o._v(o._s(o.value))])]):o._e()},n=[],t=e(0),P=e(15),M=Object.defineProperty,E=Object.getOwnPropertyDescriptor,y=(d,o,u,x)=>{for(var D=x>1?void 0:x?E(o,u):o,L=d.length-1,s;L>=0;L--)(s=d[L])&&(D=(x?s(o,u,D):s(D))||D);return x&&D&&M(o,u,D),D};let m=class extends t.Vue{get hotCommentsThreshold(){var d,o;return Number((o=(d=Object(t.getModule)(P.default,this.$store).settings.find(u=>u&&u.id==="comments.hotThreshold"))==null?void 0:d.attributes)==null?void 0:o.value)||0}};y([Object(t.Prop)({type:[Number,String],required:!0})],m.prototype,"value",2),m=y([t.Component],m);var f=m,v=e(906),$=e(3);function C(d){this.$style=v.default.locals||v.default}var a=Object($.a)(f,i,n,!1,C,null,null),r=l.a=a.exports},874:function(p,l,e){p.exports={root:"root_u1CKc",btnGroup:"btnGroup_E2BBb"}},875:function(p,l,e){p.exports={root:"root_m4VMd"}},876:function(p,l,e){"use strict";var i=function(){var r=this,d=r._self._c,o=r._self._setupProxy;return d("a",{attrs:{href:r.url,target:r.material&&r.material.attributes.externalLink&&"_blank"},on:{click:r.onClick}},[r._t("default")],2)},n=[],t=e(0),P=e(14),M=Object.defineProperty,E=Object.getOwnPropertyDescriptor,y=(a,r,d,o)=>{for(var u=o>1?void 0:o?E(r,d):r,x=a.length-1,D;x>=0;x--)(D=a[x])&&(u=(o?D(r,d,u):D(u))||u);return o&&u&&M(r,d,u),u};let m=class extends t.Vue{get url(){return Object(P.b)(this.material)}onClick(a){var r;((r=this.material)==null?void 0:r.attributes.externalLink)||a.ctrlKey||a.metaKey||(a.preventDefault(),this.$router.push(this.url))}};y([Object(t.Prop)({type:Object,default:null})],m.prototype,"material",2),m=y([t.Component],m);var f=m,v=e(3),$=Object(v.a)(f,i,n,!1,null,null,null),C=l.a=$.exports},877:function(p,l,e){"use strict";e.d(l,"a",function(){return i});function i(n){return n?["day","month","year"].filter(P=>!!n[P]).map(P=>`${n[P]}`.padStart(2,"0")).join("."):""}},878:function(p,l,e){"use strict";e.d(l,"a",function(){return i});function i(n){if(!n)return"0";const t=Number(n);return Number.isNaN(t)?"0":t.toLocaleString("ru").replace(","," ")}},887:function(p,l,e){p.exports={hidden:"hidden_7Wfh1",news:"news_BLdsd",icon:"icon_31eFl",title:"title_eu-Fp",postSpinner:"postSpinner_9oXYE",contentItem:"contentItem_2E4rB",content:"content_9Km1X",date:"date_yQzWv",info:"info_djyzE","empty-message":"empty-message_XPCNy"}},904:function(p,l,e){"use strict";var i=function(){var a=this,r=a._self._c,d=a._self._setupProxy;return r("div",{staticClass:"observer"})},n=[],t=e(0),P=Object.defineProperty,M=Object.getOwnPropertyDescriptor,E=(C,a,r,d)=>{for(var o=d>1?void 0:d?M(a,r):a,u=C.length-1,x;u>=0;u--)(x=C[u])&&(o=(d?x(a,r,o):x(o))||o);return d&&o&&P(a,r,o),o};let y=class extends t.Vue{mounted(){const C=this.options||{};this.observer=new IntersectionObserver(([a])=>{a&&a.isIntersecting&&this.$emit("intersect")},C),this.observer.observe(this.$el)}destroyed(){this.observer.disconnect()}};E([Object(t.Prop)({type:Object})],y.prototype,"options",2),y=E([t.Component],y);var m=y,f=e(3),v=Object(f.a)(m,i,n,!1,null,null,null),$=l.a=v.exports},906:function(p,l,e){"use strict";var i=e(865),n=e.n(i);e.d(l,"default",function(){return n.a})},910:function(p,l,e){"use strict";var i=(n=>(n.Material="1",n.Match="2",n.Organization="3",n.Team="4",n.Player="5",n.TournamentStage="6",n.Bookmaker="7",n.BookmakersRating="8",n))(i||{});l.a=i},920:function(p,l,e){p.exports={}},921:function(p,l,e){"use strict";var i=function(){var _=this,j=_._self._c,g=_._self._setupProxy;return j("div",{class:_.$style.root},[_.initialized?_._e():j("intersection-observer",{on:{intersect:function(c){return _.initialize()}}}),_.title?j("h2",{staticClass:"widget-title"},[_._v(_._s(_.title))]):_._e(),j("div",{ref:"comments",class:[_.$style.comments,_.sortDisabled&&"cs-comments-sort-disabled"]}),_.openedModal?j("teleport",{attrs:{to:"body"}},[_.openedModal==="auth"?j("modal-login-form",{on:{close:function(c){_.openedModal=null}}}):_.openedModal==="confirm"?j("modal-confirm",{on:{close:function(c){_.openedModal=null},answer:function(c){return _.onAnswer(c)}}}):_._e()],1):_._e()],1)},n=[],t=e(0),P=e(1022),M=e(1023),E=e.n(M),y=e(25),m=function(){var _=this,j=_._self._c,g=_._self._setupProxy;return j("base-modal",{class:_.$style.root,attrs:{width:"360"},on:{close:function(c){return _.$emit("close")}},scopedSlots:_._u([{key:"content",fn:function(){return[j("div",{staticClass:"widget-title"},[_._v(_._s(_.text))]),j("div",{class:_.$style.btnGroup},[j("cs-button",{attrs:{"type-style":"orange"},on:{click:function(c){return _.$emit("answer",!0)}}},[_._v("\u0414\u0430")]),_._v(" "),j("cs-button",{attrs:{"type-style":"bordered"},on:{click:function(c){return _.$emit("answer",!1)}}},[_._v("\u041D\u0435\u0442")])],1)]},proxy:!0}])})},f=[],v=e(26),$=e(13),C=Object.defineProperty,a=Object.getOwnPropertyDescriptor,r=(h,_,j,g)=>{for(var c=g>1?void 0:g?a(_,j):_,B=h.length-1,w;B>=0;B--)(w=h[B])&&(c=(g?w(_,j,c):w(c))||c);return g&&c&&C(_,j,c),c};let d=class extends t.Vue{};r([Object(t.Prop)({type:String,default:"\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?"})],d.prototype,"text",2),d=r([Object(t.Component)({components:{BaseModal:v.a,CsButton:$.a}})],d);var o=d,u=e(950),x=e(3);function D(h){this.$style=u.default.locals||u.default}var L=Object(x.a)(o,m,f,!1,D,null,null),s=L.exports,b=e(904),N=e(1024),O=e(10),W=e(5),A=e(930),K=e.n(A),R=e(93),F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,I=(h,_,j,g)=>{for(var c=g>1?void 0:g?H(_,j):_,B=h.length-1,w;B>=0;B--)(w=h[B])&&(c=(g?w(_,j,c):w(c))||c);return g&&c&&F(_,j,c),c};const S="1651835296492858",z="165183166780967575";let T=class extends t.Vue{constructor(){super(...arguments),this.openedModal=null,this.dialogAnswer=null,this.initialized=!1}onParamsChanged(){this.initialized=!1}onAnswer(h){this.dialogAnswer=h,this.openedModal=null}async mounted(){var h;const _=(h=this.$route.hash)==null?void 0:h.replace(/^#/,"");_!=null&&_.startsWith("cs-comment-")&&(await this.initialize()).onReady(()=>{setTimeout(()=>{const g=document.getElementById(_);this.$router.replace({hash:void 0}),g&&E()(g)})})}beforeDestroy(){Object(R.a)(S,!0),Object(R.a)(z,!0)}async initialize(){Object(R.a)(S,!1),Object(R.a)(z,!1);const h=Object(t.getModule)(W.default,this.$store);await h.ensureUserLoaded();const _={apiBaseUrl:"",imageBaseUrl:Object(t.getModule)(O.default,this.$store).imageUrl,oldUserIcon:K.a,onAuthRequired:()=>{this.openedModal="auth"},onTokenExpired:()=>{const g=this.$cookies.get("refresh-token");return g?fetch("/api/identity/token/refresh",{method:"POST",body:JSON.stringify({refresh_token:g}),mode:"same-origin",credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then(c=>[200,201].includes(c.status)?c.json():Promise.reject()).then(({token:c,refresh_token:B})=>!c||!B?Promise.reject():(h.setTokens({token:c,refreshToken:B}),c)):Promise.reject()},onAccessDenied:g=>{typeof g.data=="string"&&this.$toast(g.data)},onConfirmDelete:()=>(this.openedModal="confirm",new Promise(g=>{const c=this.$watch("openedModal",()=>{c(),g(this.dialogAnswer===!0),this.dialogAnswer=null})}))},j=Object(P.a)(this.objectType&&this.objectId?{for:"object",objectType:this.objectType,objectId:this.objectId,..._}:{for:"user",userId:this.userId,..._});return j.mount(this.$refs.comments),this.$watch(()=>h.user,()=>{var g,c,B,w;j.setUser((g=h.user)!=null&&g.id?{id:h.user.id,avatar:((c=h.user.attributes)==null?void 0:c.avatar)||"",role:((B=h.user.attributes)==null?void 0:B.role)||"",banReason:((w=h.user.attributes)==null?void 0:w.banReason)||""}:null)},{immediate:!0}),this.initialized=!0,j}};I([Object(t.Prop)({type:String,default:""})],T.prototype,"objectType",2),I([Object(t.Prop)({type:String,default:""})],T.prototype,"objectId",2),I([Object(t.Prop)({type:String,default:""})],T.prototype,"userId",2),I([Object(t.Prop)({type:String,default:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"})],T.prototype,"title",2),I([Object(t.Prop)({type:Boolean,default:!1})],T.prototype,"sortDisabled",2),I([Object(t.Watch)("objectType"),Object(t.Watch)("objectId")],T.prototype,"onParamsChanged",1),T=I([Object(t.Component)({components:{ModalLoginForm:y.a,ModalConfirm:s,IntersectionObserver:b.a}})],T);var V=T,U=e(951),J=e(952);function X(h){this.$style=U.default.locals||U.default}var G=Object(x.a)(V,i,n,!1,X,null,null),Q=l.a=G.exports},927:function(p,l,e){"use strict";var i=function(){var s=this,b=s._self._c,N=s._self._setupProxy;return b("div",{class:[s.$style.root,{[s.$style.hidden]:!s.materials.length}]},[b("base-widget",{attrs:{title:s.title,"anchor-id":s.anchorId}},[s.loading?s._l(5,function(O){return b("div",{key:`spinner-${O}`,class:s.$style.postSpinner})}):s.materials.length?[b("div",{class:s.$style.container},[s._l(s.materials,function(O){return b("div",{key:`material-${O.id}`,class:s.$style.contentItem},[b("material-link",{class:s.$style.news,attrs:{material:O}},[b("div",{class:s.$style.icon},[O.attributes.type===5?b("svg-icon",{attrs:{name:"blogs"}}):O.included.mainTag&&O.included.mainTag.attributes.icon?b("content-image",{attrs:{src:O.included.mainTag.attributes.icon,alt:O.included.mainTag.attributes.name}}):O.included.mainTag&&O.included.mainTag.included.discipline?b("svg-icon",{attrs:{icon:O.included.mainTag.included.discipline.attributes.iconActive}}):b("svg-icon",{attrs:{name:"news-icon-placeholder"}})],1),b("div",{class:s.$style.content},[b("div",{class:s.$style.date},[s._v(s._s(s.getPublishedAt(O.attributes.publishedAt)))]),b("div",{class:s.$style.info},[b("div",{class:s.$style.title},[s._v(s._s(O.attributes.title))]),s._v(" "),b("comments-count",{attrs:{value:O.attributes.commentsCount}})],1)])])],1)}),s.tag&&s.materials.length>=5?b("cs-button",{attrs:{to:s.allNewsLink,"type-style":"bordered"}},[s._v("\u0412\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438")]):s._e()],2)]:b("div",{staticClass:"empty-message",class:s.$style["empty-message"]},[s._v("\u041D\u0435\u0442 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439")])],2)],1)},n=[],t=e(0),P=e(864),M=e(13),E=e(873),y=e(876),m=e(90),f=e(14),v=Object.defineProperty,$=Object.getOwnPropertyDescriptor,C=(L,s,b,N)=>{for(var O=N>1?void 0:N?$(s,b):s,W=L.length-1,A;W>=0;W--)(A=L[W])&&(O=(N?A(s,b,O):A(O))||O);return N&&O&&v(s,b,O),O};let a=class extends t.Vue{constructor(){super(...arguments),this.materials=[],this.loading=!0}get allNewsLink(){return this.tag?Object(f.d)(this.tag):"#"}async fetch(){var L;this.loading=!0;const{data:s}=await this.$api.materials.getMaterials({"page[limit]":5,"filter[main]":this.main||void 0,"filter[tagIds]":(L=this.tag)==null?void 0:L.id});this.materials=s.data||[],this.loading=!1}getPublishedAt(L){return L&&this.$dayjs.unix(L).tz().format("DD.MM \u0432 HH:mm")||""}};C([Object(t.Prop)({type:String,default:"\u0413\u043B\u0430\u0432\u043D\u044B\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438"})],a.prototype,"title",2),C([Object(t.Prop)({type:Object})],a.prototype,"tag",2),C([Object(t.Prop)({type:Boolean})],a.prototype,"main",2),C([Object(t.Prop)({type:String,default:""})],a.prototype,"anchorId",2),a=C([Object(t.Component)({components:{BaseWidget:P.a,CsButton:M.a,CommentsCount:E.a,MaterialLink:y.a,ContentImage:m.a}})],a);var r=a,d=e(979),o=e(3);function u(L){this.$style=d.default.locals||d.default}var x=Object(o.a)(r,i,n,!1,u,null,null),D=l.a=x.exports},930:function(p,l,e){p.exports=e.p+"img/wizard.d8a9091.png"},937:function(p,l,e){"use strict";var i=function(f,v){return f("div",{staticClass:"text-object"},[v.props.label?f("div",{staticClass:"text-object-label"},[v._v(v._s(v.props.label))]):v._e(),f("div",{staticClass:"text-object-text",attrs:{title:v.props.text}},[v._t("text",function(){return[v._v(v._s(v.props.text))]})],2)])},n=[],t=e(1220),P=e(3),M={},E=Object(P.a)(M,i,n,!0,null,"7fa1e23c",null),y=l.a=E.exports},950:function(p,l,e){"use strict";var i=e(874),n=e.n(i);e.d(l,"default",function(){return n.a})},951:function(p,l,e){"use strict";var i=e(875),n=e.n(i);e.d(l,"default",function(){return n.a})},952:function(p,l,e){"use strict";var i=e(920),n=e.n(i)},979:function(p,l,e){"use strict";var i=e(887),n=e.n(i);e.d(l,"default",function(){return n.a})}}]);