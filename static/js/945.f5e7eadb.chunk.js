"use strict";(self.webpackChunkoubita=self.webpackChunkoubita||[]).push([[945],{4806:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var a=t(4165),i=t(5861),r=t(885),s=t.p+"static/media/nfta-banner.1faa10b56a6ad2123c74.png",o=t.p+"static/media/Fuego-en-movimiento-small-compri.94f66d03bd395d6240e0.gif",c=t.p+"static/media/capa1.d664453dafcc90a972bc.png",l=t(5251),u=(t(3825),t(8479)),m=t(9434),d=t(1102),p=t(1625),h=t(2791),f=t(6871),b=t(4499),v=(t(90),t(1110)),x=t(184),_={name:"ETH"},j={value:"ETH"},N=function(e){var n=e.datos,t=e.stylesCss,a=e.caso,i=e.popup,s=e.closepopup,o=e.functions,c=e.buttonPrice,l=e.popUpUniversal,u=(0,h.useState)(!1),d=(0,r.Z)(u,2),p=d[0],f=d[1],N=(0,h.useState)(_),w=(0,r.Z)(N,2),T=w[0],g=w[1],C=(0,h.useState)(j),E=(0,r.Z)(C,2),y=E[0],M=E[1],k=(0,m.v9)((function(e){return e.blockchain})),F=[c.priceETH,c.priceMatic],I=function(e){f(e),p===e&&f(!1)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"botones_mint",children:[(0,x.jsx)(v.E.button,{className:"boton --boton__mint --botonNFT",whileHover:{scale:[null,1.08,1,1.03],transition:{duration:.6}},whileTap:{scale:.95},onClick:function(){k.account&&"MATIC"==y.value?(o.minter(1,k.account),i({bool:!0,mensaje:"LOADING..."})):k.account&&"ETH"==y.value?(o.allowance(k.account),i({bool:!0,mensaje:"LOADING..."})):(i({bool:!0,mensaje:"Connect your Metamask",mensaje2:"Maybe you are on the wrong network"}),s())},children:"MINT NFT"}),a?n.map((function(e,n){return(0,x.jsxs)("div",{className:t,children:[(0,x.jsxs)(v.E.div,{whileHover:p!==n&&{scale:[null,1.08,1,1.03],transition:{type:"spring",stiffness:100}},className:p!==n?"menuComponet__header --borderRadio":"menuComponet__header ",onClick:function(){I(n)},children:[(0,x.jsxs)("div",{className:"menuComponet__title",children:[" ",T.price,T.name]}),0==l.bool?(0,x.jsx)("div",{className:p!==n?" menuComponet__arrow --arrow-down":"menuComponet__arrow",children:(0,x.jsx)(b.r,{})}):""]}),(0,x.jsx)("div",{className:p===n?"menuComponet__body --active ":"menuComponet__body --disable",children:e.content.map((function(e,n){return(0,x.jsxs)("button",{value:e,className:"button_mint",onClick:function(e){"ETH"==e.target.value?(g({name:" ETH ",price:c.priceETH}),M({value:"ETH"}),f(!1)):(g({name:" MATIC ",price:c.priceMatic}),M({value:"MATIC"}),f(!1))},children:[" ",F[n]," ",e]},n)}))})]},n)})):n.map((function(e,n){return(0,x.jsxs)("div",{className:t,children:[(0,x.jsxs)("div",{className:"menuComponet__header",onClick:function(){I(n)},children:[(0,x.jsx)("div",{className:"menuComponet__title",children:e.name}),(0,x.jsx)("div",{className:p!==n?" menuComponet__arrow --arrow-down":"menuComponet__arrow",children:(0,x.jsx)(b.r,{})})]}),(0,x.jsx)("div",{className:p===n?"menuComponet__body --active ":"menuComponet__body --disable",children:(0,x.jsx)("p",{className:"menuComponet__body__text",children:e.content})})]},n)}))]})})},w=t(141),T=t(4569),g=t.n(T),C=t(4234),E=t.n(C);var y=function(e){return e.trigger?(0,x.jsx)("div",{className:"mint_popup",children:(0,x.jsx)("div",{className:"mint_popup_innner",children:e.children})}):""},M=[{name:"ETH",content:["ETH","MATIC"]}],k={priceETH:"",priceMatic:""},F=function(e){var n=e.id,t=(0,f.s0)(),b=(0,h.useState)({bool:!1,mensaje:"",mensaje2:""}),_=(0,r.Z)(b,2),j=_[0],T=_[1],C=(0,h.useState)(k),F=(0,r.Z)(C,2),I=F[0],S=F[1],Z=(0,h.useState)({NFT:null,oracle:null}),H=(0,r.Z)(Z,2),A=H[0],R=H[1],L=(0,h.useState)({priceMatic:null,numberMinted:null,whitelist:null}),O=(0,r.Z)(L,2),D=O[0],P=O[1],U=(0,h.useState)({precio:null}),G=(0,r.Z)(U,2),B=G[0],V=G[1],X=(0,m.v9)((function(e){return e.blockchain})),W=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,i,r,s,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="0x7fD7827f598c1Fe2181bDd1E2491A0bD6f8a06C7",e.next=3,new p.Q(window.ethereum);case 3:return i=e.sent,e.next=6,i.getSigner();case 6:return r=e.sent,e.next=9,new d.CH(t,w,r);case 9:return s=e.sent,e.next=12,g().get("https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=eth");case 12:o=e.sent,null,null,null,s.counter().then((function(e){var n=parseInt(e);s.onlyWhitelisted().then((function(e){P({priceMatic:o.data["matic-network"].eth,numberMinted:n,whitelist:e})}))})),R({NFT:s});case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){setTimeout((function(){T({bool:!1,mensaje:""})}),5e3)},q=function(){setTimeout((function(){t("/profile")}),5e3)},K="0x7fD7827f598c1Fe2181bDd1E2491A0bD6f8a06C7",Q=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.contratoTok.allowance(n,K).then((function(e){if(Number(e._hex).toLocaleString("fullwide",{useGrouping:!1})<3e19){z(2,n,{from:n,gasLimit:157845})}else J(2,n)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X.contratoTok.approve(K,"1000000000000000000000000");case 3:return i=e.sent,e.next=6,i.wait().then((function(e){i&&(T({bool:!1,mensaje:""}),J(2,t),T({bool:!0,mensaje:"LOADING..."}))}));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),T({bool:!0,mensaje:"The transaction has been cancel"}),Y();case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n,t){var i,r,s,o,c,l,u,m,d,p,h,f,b,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.contracNFT.onlyWhitelisted();case 2:return i=e.sent,e.next=5,X.contracNFT.counter();case 5:if(r=e.sent,s=parseInt(r,18),c={value:0},e.prev=8,!(1==i&&1==n&&s<100)){e.next=19;break}return l={from:t,value:"1512500000000000000",gasLimit:157845},o=51354472e7,e.next=14,X.contracNFT.Mint(n,1,"1512500000000000000",l);case 14:return u=e.sent,e.next=17,u.wait().then((function(e){u&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 17:e.next=61;break;case 19:if(!(1==i&&2==n&&s<100)){e.next=28;break}return o=51178295e7,e.next=23,X.contracNFT.Mint(n,1,o.toString(),c);case 23:return m=e.sent,e.next=26,m.wait().then((function(e){m&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 26:e.next=61;break;case 28:if(!(0==i&&1==n&&s<20)){e.next=37;break}return d={from:t,value:B.precio.toString(),gasLimit:157845},e.next=32,X.contracNFT.Mint(n,1,B.precio,d);case 32:return p=e.sent,e.next=35,p.wait().then((function(e){p&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 35:e.next=61;break;case 37:if(!(0==i&&2==n&&s<20)){e.next=46;break}return o=15e16,e.next=41,X.contracNFT.Mint(n,1,o.toString(),c);case 41:return h=e.sent,e.next=44,h.wait().then((function(e){h&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 44:e.next=61;break;case 46:if(!(s>=20&&1==n)){e.next=55;break}return f={from:t,value:B.precio.toString(),gasLimit:157845},e.next=50,X.contracNFT.Mint(n,1,B.precio.toString(),f);case 50:return b=e.sent,e.next=53,b.wait().then((function(e){b&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 53:e.next=61;break;case 55:return o=2e17,e.next=58,X.contracNFT.Mint(n,1,o.toString(),c);case 58:return v=e.sent,e.next=61,v.wait().then((function(e){v&&(T({bool:!0,mensaje:"Minted!",mensaje2:"your NFT has been minted"}),Y(),q())}));case 61:e.next=66;break;case 63:e.prev=63,e.t0=e.catch(8),4001==e.t0.code?(T({bool:!0,mensaje:"The transaction has been cancel"}),Y()):"INSUFFICIENT_FUNDS"==e.t0.code?(T({bool:!0,mensaje:"Insufficient Funds"}),Y()):(T({bool:!0,mensaje:"Connect your Metamask"}),Y(),console.log(e.t0));case 66:case"end":return e.stop()}}),e,null,[[8,63]])})));return function(n,t){return e.apply(this,arguments)}}(),$={minter:function(e,n){return J(e,n)},allowance:function(e){return Q(e)}};(0,h.useEffect)((function(){!function(){var e,n,t,a,i=D.numberMinted,r=D.priceMatic,s=D.whitelist,o=Number(r);1==s?0==o||(e=new(E())(.02),n=new(E())(o),t=e.dividedBy(n).toString(),a=Number(t).toFixed(2),S({priceETH:"0,02",priceMatic:"1,52"}),V({precio:a*Math.pow(10,18)})):0==s&&i<25?0==o||(e=new(E())(.15),n=new(E())(o),t=e.dividedBy(n).toString(),a=Number(t).toFixed(2),S({priceETH:"0,15",priceMatic:a}),V({precio:a*Math.pow(10,18)})):0==s&&i>=25&&(0==o||(e=new(E())(.2),n=new(E())(o),t=e.dividedBy(n).toString(),a=Number(t).toFixed(2),S({priceETH:"0,2",priceMatic:a}),V({precio:a*Math.pow(10,18)})))}()}),[D.numberMinted]);var ee=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"net_version"});case 2:4!=e.sent?console.log("Red INCORRECTA"):(console.log("Red CORRECTA"),W(A));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((function(){ee();var e=setInterval((function(){ee()}),5e3);return function(){return clearInterval(e)}}),[]);var ne=(0,h.useRef)(null);return(0,x.jsxs)("div",{className:"mint",id:n,children:[(0,x.jsx)(y,{trigger:j.bool,settrigger:T,children:(0,x.jsxs)("div",{className:"mint_div",children:[(0,x.jsx)("div",{className:"mint_div_img",children:(0,x.jsx)("img",{className:"mint_img",src:u})}),(0,x.jsx)("div",{className:"mint_div_subtitle1",children:(0,x.jsx)("h2",{className:"The transaction has been cancel"==j.mensaje?"mint__titulo2":"Insufficient Funds"==j.mensaje?"mint__titulo3":"Connect your Metamask"==j.mensaje?"mint__titulo4":"mint__titulo1_1",children:j.mensaje})}),(0,x.jsx)("div",{className:"mint_div_subtitle2",children:(0,x.jsx)("h4",{className:"mint__titulo2_1",children:j.mensaje2})})]})}),(0,x.jsxs)(v.E.div,{className:"mint",id:n,ref:ne,layout:!0,children:[(0,x.jsx)("img",{src:c,className:"mancha1",alt:""}),(0,x.jsx)("img",{src:l,className:"mancha2",alt:""}),(0,x.jsxs)("div",{className:"mint__container",children:[(0,x.jsxs)(v.E.div,{className:"mint__content",variants:{hidden:{translateX:"-100%",opacity:0},visible:{translateX:"0%",opacity:1,transition:{duration:2}}},initial:"hidden",whileInView:"visible",viewport:{root:ne,once:!0},children:[(0,x.jsx)("h1",{className:"titulo__mint",children:" PRESALE MINT PRICE 0.15 ETH "}),(0,x.jsx)("h2",{className:"sub__titulo1",children:"MINT PRICE 0.2 ETH"}),(0,x.jsx)("h3",{className:"sub__titulo",children:"(10,000 AVAILABLE)"}),(0,x.jsx)("p",{className:"parrafo__mint",children:"10,000 Out of the Flame Club was created to bring financial freedom. Thanks to the rarity of each NFTs you will be able to get rewards in the Oubita Exchange and his metaverse space."}),(0,x.jsx)("p",{className:"parrafo__mint",children:"Developed thought Polygon network blockchain and create to have governance at Oubita Exchange, Its personal an referable. Meet Oubita Exchange and Register to take advantage of your rewards"}),(0,x.jsx)(N,{className:"botton",datos:M,stylesCss:"menuComponetContenedorMint",caso:!0,popup:T,closepopup:Y,functions:$,buttonPrice:I,popUpUniversal:j}),(0,x.jsx)("div",{className:"botones_mint"})]}),(0,x.jsx)(v.E.div,{className:"mint__img",variants:{hidden:{translateX:"100%",opacity:0},visible:{opacity:1,translateX:"0%",transition:{duration:2}}},initial:"hidden",whileInView:"visible",viewport:{root:ne,once:!0},children:(0,x.jsx)("img",{className:"img",src:s,alt:"banner"})})]}),(0,x.jsxs)(v.E.div,{className:"mint__footer",variants:{hidden:{translateY:"100%",opacity:0},visible:{translateY:0,opacity:1,transition:{duration:1}}},initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"100px"},children:[(0,x.jsxs)("div",{className:"footer__content",children:[(0,x.jsx)("div",{className:"footer__title",children:(0,x.jsx)("h1",{children:"LAUNCH OF 10,000 NFTS"})}),(0,x.jsx)("div",{className:"--medio-border"}),(0,x.jsxs)("div",{className:"footer__copy",children:[(0,x.jsx)("h4",{children:"PRESALE AT 0,15 ETH "}),(0,x.jsx)("h4",{children:"SET PRICE 0,2 ETH"}),(0,x.jsx)("h4",{children:"NETWORK: POLYGON"})]})]}),(0,x.jsx)("div",{className:"footer__logo ",children:(0,x.jsx)("img",{className:"image",src:o,alt:""})})]})]})]})}},5251:function(e,n,t){e.exports=t.p+"static/media/capa2.6198f87c33b6d218645d.png"}}]);
//# sourceMappingURL=945.f5e7eadb.chunk.js.map