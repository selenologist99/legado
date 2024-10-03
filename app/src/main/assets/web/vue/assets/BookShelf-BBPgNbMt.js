import{a0 as Q,m as A,o as l,d as h,g as t,F as V,M as W,t as g,c as $,w as L,f as N,J as _,u as J,a1 as x,a2 as q,e as R,I as G,p as z,v as E,a3 as X,L as j,a4 as ee,Q as te,j as k,y as se,D as oe,a5 as ae}from"./vendor-MihKrDrn.js";import{d as ne,i as re,u as ie}from"./loading-DPd2-h-z.js";import{_ as D,A as p,u as ce}from"./index-B8eMuqu8.js";const le={class:"books-wrapper"},de={class:"wrapper"},ue=["onClick"],he={class:"cover-img"},ge=["src"],pe={class:"info"},me={class:"name"},fe={class:"sub"},ve={class:"author"},we={key:0,class:"tags"},Be={key:1,class:"update-info"},Ce={class:"size"},ke={class:"date"},Ae={key:0,class:"intro"},Ie={key:1,class:"dur-chapter"},ye={class:"last-chapter"},Se={__name:"BookItems",props:["books","isSearch"],emits:["bookClick"],setup(e,{emit:r}){Q(o=>({"6068553a":J(C)}));const i=e,v=r,B=o=>v("bookClick",o),w=o=>re(o)?p.getProxyCoverUrl(o):o,I=o=>{o.target.src=p.getProxyCoverUrl(o.target.src)},C=A(()=>i.isSearch?"space-between":"flex-start");return(o,d)=>{const m=x;return l(),h("div",le,[t("div",de,[(l(!0),h(V,null,W(e.books,n=>{var S;return l(),h("div",{class:"book",key:n.bookUrl,onClick:y=>B(n)},[t("div",he,[(l(),h("img",{class:"cover",src:w(n.coverUrl),key:n.coverUrl,onErrorOnce:I,alt:"",loading:"lazy"},null,40,ge))]),t("div",pe,[t("div",me,g(n.name),1),t("div",fe,[t("div",ve,g(n.author),1),e.isSearch?(l(),h("div",we,[(l(!0),h(V,null,W((S=n.kind)==null?void 0:S.split(",").slice(0,2),y=>(l(),$(m,{key:y},{default:L(()=>[N(g(y),1)]),_:2},1024))),128))])):_("",!0),e.isSearch?_("",!0):(l(),h("div",Be,[d[0]||(d[0]=t("div",{class:"dot"},"•",-1)),t("div",Ce,"共"+g(n.totalChapterNum)+"章",1),d[1]||(d[1]=t("div",{class:"dot"},"•",-1)),t("div",ke,g(J(ne)(n.lastCheckTime)),1)]))]),e.isSearch?(l(),h("div",Ae,g(n.intro),1)):_("",!0),e.isSearch?_("",!0):(l(),h("div",Ie," 已读："+g(n.durChapterTitle),1)),t("div",ye,"最新："+g(n.latestChapterTitle),1)])],8,ue)}),128))])])}}},_e=D(Se,[["__scopeId","data-v-136fc284"]]),Re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg==",Ee=q({beforeRouteEnter:(e,r,i)=>{p.getReadConfig().then(v=>v.data).then(({isSuccess:v,data:B})=>{v&&i(w=>{w.saveReadConfig(B)})}).catch(()=>i())},setup:()=>{const e=ce(),r=A(()=>e.isNight),i=E({name:"尚无阅读记录",author:"",url:"",chapterIndex:0,chapterPos:0}),v=E(null),{showLoading:B,closeLoading:w,loadingWrapper:I,isLoading:C}=ie(v,"正在获取书籍信息"),o=X([]),d=A(()=>e.shelf),m=E(""),n=E(!1);j(()=>{if(!(n.value&&m.value!="")){if(n.value=!1,o.value=[],m.value==""){o.value=d.value;return}o.value=d.value.filter(s=>s.name.includes(m.value)||s.author.includes(m.value))}});const S=()=>{m.value!=""&&(o.value=[],e.clearSearchBooks(),B(),n.value=!0,p.search(m.value,s=>{C&&w();try{e.setSearchBooks(JSON.parse(s)),o.value=e.searchBooks}catch(a){throw k.error("后端数据错误"),a}},()=>{w(),o.value.length==0&&k.info("搜索结果为空")}))},y=A(()=>e.connectStatus),Z=A(()=>e.connectType),H=A(()=>e.newConnect),U=()=>{ae.prompt("请输入 IP 和端口 ( 如：127.0.0.1:9527 或者通过内网穿透的地址)","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?:([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9]|[1-6][0-5][0-5][0-3][0-5])$/,inputErrorMessage:"url 形式不正确",beforeClose:(s,a,f)=>{if(s==="confirm"){e.setNewConnect(!0),a.confirmButtonLoading=!0,a.confirmButtonText="校验中……";const c=a.inputValue;p.testLeagdoHttpUrlConnection("http://"+c).then(function(u){P(u),a.confirmButtonLoading=!1,e.setConnectType("success"),e.setConnectStatus("已连接 "+c),e.clearSearchBooks(),e.setNewConnect(!1),p.setLeagdoHttpUrl("http://"+c),localStorage.setItem("remoteIp",c),M(),f()}).catch(function(u){throw a.confirmButtonLoading=!1,a.confirmButtonText="确定",k.error("访问失败，请检查您输入的 url"),e.setNewConnect(!1),u})}else f()}})},O=ee(),F=async s=>{const{bookUrl:a,name:f,author:c,durChapterIndex:u=0,durChapterPos:T=0}=s,b="respondTime"in s;b&&await p.saveBook(s),K(a,f,c,u,T,b)},K=(s,a,f,c,u,T)=>{a!=="尚无阅读记录"&&(sessionStorage.setItem("bookUrl",s),sessionStorage.setItem("bookName",a),sessionStorage.setItem("bookAuthor",f),sessionStorage.setItem("chapterIndex",c),sessionStorage.setItem("chapterPos",u),sessionStorage.setItem("isSeachBook",T),i.value={name:a,author:f,url:s,chapterIndex:c,chapterPos:u},localStorage.setItem("readingRecent",JSON.stringify(i.value)),O.push({path:"/chapter"}))},Y=()=>{I(e.saveBookProgress().finally(M))},P=s=>{try{e.setConfig(JSON.parse(s))}catch{k.info("阅读界面配置解析错误")}},M=()=>p.getBookShelf().then(s=>{e.setConnectType("success"),s.data.isSuccess?e.addBooks(s.data.data.sort(function(a,f){var c=a.durChapterTime||0,u=f.durChapterTime||0;return u-c})):k.error(s.data.errorMsg??"后端返回格式错误！"),e.setConnectStatus("已连接 "+p.legado_http_origin),e.setNewConnect(!1)});return te(()=>{let s=localStorage.getItem("readingRecent");s!=null&&(i.value=JSON.parse(s),typeof i.value.chapterIndex>"u"&&(i.value.chapterIndex=0)),p.testLeagdoHttpUrlConnection().then(Y).catch(function(a){throw e.setConnectType("danger"),e.setConnectStatus("连接异常"),k.error("后端连接失败异常，请检查阅读WEB服务或者设置其它可用IP"),e.setNewConnect(!1),a})}),{setIP:U,isNight:r,connectStatus:y,connectType:Z,newConnect:H,saveReadConfig:P,readingRecent:i,searchBook:S,books:o,handleBookClick:F,isSearching:n,SearchIcon:se,githubUrl:Re,searchWord:m}}}),Te={class:"navigation-wrapper"},ze={class:"search-wrapper"},Le={class:"bottom-wrapper"},Ne={class:"recent-wrapper"},Pe={class:"reading-recent"},Me={class:"setting-wrapper"},be={class:"setting-item"},Ve={class:"bottom-icons"},We={href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"},Je={class:"bottom-icon"},xe=["src"],De={class:"shelf-wrapper",ref:"shelfWrapper"};function Ze(e,r,i,v,B,w){const I=oe,C=x,o=_e;return l(),h("div",{class:z({"index-wrapper":!0,night:e.isNight,day:!e.isNight})},[t("div",Te,[r[4]||(r[4]=t("div",{class:"navigation-title-wrapper"},[t("div",{class:"navigation-title"},"阅读"),t("div",{class:"navigation-sub-title"},"清风不识字，何故乱翻书")],-1)),t("div",ze,[R(I,{placeholder:"搜索书籍，在线书籍自动加入书架",modelValue:e.searchWord,"onUpdate:modelValue":r[0]||(r[0]=d=>e.searchWord=d),class:"search-input","prefix-icon":e.SearchIcon,onKeyup:G(e.searchBook,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])]),t("div",Le,[t("div",Ne,[r[2]||(r[2]=t("div",{class:"recent-title"},"最近阅读",-1)),t("div",Pe,[R(C,{type:e.readingRecent.name=="尚无阅读记录"?"warning":"primary",class:z(["recent-book",{"no-point":e.readingRecent.url==""}]),size:"large",onClick:r[1]||(r[1]=d=>e.toDetail(e.readingRecent.url,e.readingRecent.name,e.readingRecent.author,e.readingRecent.chapterIndex,e.readingRecent.chapterPos))},{default:L(()=>[N(g(e.readingRecent.name),1)]),_:1},8,["type","class"])])]),t("div",Me,[r[3]||(r[3]=t("div",{class:"setting-title"},"基本设定",-1)),t("div",be,[R(C,{type:e.connectType,size:"large",class:z(["setting-connect",{"no-point":e.newConnect}]),onClick:e.setIP},{default:L(()=>[N(g(e.connectStatus),1)]),_:1},8,["type","class","onClick"])])])]),t("div",Ve,[t("a",We,[t("div",Je,[t("img",{src:e.githubUrl,alt:""},null,8,xe)])])])]),t("div",De,[R(o,{books:e.books,onBookClick:e.handleBookClick,isSearch:e.isSearching},null,8,["books","onBookClick","isSearch"])],512)],2)}const Fe=D(Ee,[["render",Ze],["__scopeId","data-v-2f491dbf"]]);export{Fe as default};