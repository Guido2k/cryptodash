(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{20:function(e,n,t){},25:function(e,n,t){e.exports=t(40)},30:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(7),o=t.n(i),c=(t(30),t(8)),l=t(9),u=t(10),s=t(11),m=(t(20),t(1)),f=t(2);function p(){var e=Object(m.a)(["\n    padding: 40px;\n    \n\n"]);return p=function(){return e},e}var d=f.b.div(p()),v=t(15),x=t(18),g=t(5),h=t(3),b=t.n(h),C=t(6),y=t(4),E=t.n(y),O=t(16),j=t.n(O),k=t(38);k.setApiKey("55a4c10cbc1256601b9059360645cca247d91ff528f95152df9507e9bdc62b3b");var w=a.a.createContext(),F=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).componentDidMount=function(){r.fetchCoins(),r.fetchPrices(),r.fetchHistorical()},r.fetchCoins=Object(C.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.coinList();case 2:n=e.sent.Data,r.setState({coinList:n}),console.log(n);case 5:case"end":return e.stop()}}),e)}))),r.fetchPrices=Object(C.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.prices();case 4:n=e.sent,console.log(n),r.setState({prices:n});case 7:case"end":return e.stop()}}),e)}))),r.fetchHistorical=Object(C.a)(b.a.mark((function e(){var n,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.firstVisit){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.historical();case 4:n=e.sent,t=[{name:r.state.currentFavorite,data:n.map((function(e,n){return[j()().subtract(Object(g.a)({},r.state.timeInterval,10-n)).valueOf(),e.USD]}))}],r.setState({historical:t});case 7:case"end":return e.stop()}}),e)}))),r.prices=Object(C.a)(b.a.mark((function e(){var n,t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t=0;case 2:if(!(t<r.state.favorites.length)){e.next=16;break}return e.prev=3,e.next=6,k.priceFull(r.state.favorites[t],"USD");case 6:a=e.sent,n.push(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.warn("Fetch price error: ",e.t0);case 13:t++,e.next=2;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e,null,[[3,10]])}))),r.historical=function(){for(var e=[],n=10;n>0;n--)e.push(k.priceHistorical(r.state.currentFavorite,["USD"],j()().subtract(Object(g.a)({},r.state.timeInterval,n)).toDate()));return Promise.all(e)},r.addCoin=function(e){var n=Object(x.a)(r.state.favorites);n.length<10&&(n.push(e),r.setState({favorites:n}))},r.removeCoin=function(e){var n=Object(x.a)(r.state.favorites);r.setState({favorites:E.a.pull(n,e)})},r.isInFavorites=function(e){return E.a.includes(r.state.favorites,e)},r.confirmFavorites=function(){var e=r.state.favorites[0];r.setState({firstVisit:!1,page:"dashboard",currentFavorite:e,historical:null,prices:null},(function(){r.fetchPrices(),r.fetchHistorical()})),localStorage.setItem("cryptoDash",JSON.stringify({favorites:r.state.favorites,currentFavorite:e}))},r.setCurrentFavorite=function(e){r.setState({currentFavorite:e,historical:null},r.fetchHistorical),localStorage.setItem("cryptoDash",JSON.stringify(Object(v.a)({},JSON.parse(localStorage.getItem("cryptoDash")),{currentFavorite:e})))},r.setPage=function(e){return r.setState({page:e})},r.setFilteredCoins=function(e){return r.setState({filteredCoins:e})},r.changeChartSelect=function(e){r.setState({timeInterval:e,historical:null},r.fetchHistorical)},r.state=Object(v.a)({page:"dashboard",favorites:["BTC","ETH","XRP","ADA","LINK"],timeInterval:"months"},r.savedSettings(),{setPage:r.setPage,addCoin:r.addCoin,removeCoin:r.removeCoin,isInFavorites:r.isInFavorites,confirmFavorites:r.confirmFavorites,setFilteredCoins:r.setFilteredCoins,setCurrentFavorite:r.setCurrentFavorite,changeChartSelect:r.changeChartSelect}),r}return Object(l.a)(t,[{key:"savedSettings",value:function(){var e=JSON.parse(localStorage.getItem("cryptoDash"));return e?{favorites:e.favorites,currentFavorite:e.currentFavorite}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return a.a.createElement(w.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component);function S(){var e=Object(m.a)(["\n        display: none;\n\n     "]);return S=function(){return e},e}function A(){var e=Object(m.a)(["\n        color: #25fe25;\n        text-shadow: 3px 3px 60px white;\n     "]);return A=function(){return e},e}function D(){var e=Object(m.a)(["\n    cursor: pointer;\n    ","\n     ","\n"]);return D=function(){return e},e}function z(){var e=Object(m.a)(["\n    display: grid;\n    margin-bottom: 40px;\n    grid-template-columns: 400px auto 150px 150px;\n    font-size: 0.8;\n    @media (max-width: 790px) {\n         grid-template-columns: 235px 100px 200px 170px;\n         font-size: 0.8em;\n    } \n\n    @media (max-width: 690px) {\n        grid-template-columns: 200px 125px auto 120px;\n        text-align: center;\n        font-size: 0.8em;\n   } \n\n    @media (max-width: 420px) {\n        grid-template-columns: 115px 50px auto 100px;\n        text-align: center;\n        margin-right: 10px;\n        font-size: 0.8em;\n   }      \n    \n    @media (max-width: 400px) {\n        grid-template-columns: 115px 40px auto 100px;\n        text-align: center;\n        margin-right: 5px;\n        font-size: 0.7em;\n   }\n    @media (max-width: 380px) {\n        grid-template-columns: 95px 15px 100px 100px;\n        text-align: center;\n        font-size: 0.7em;\n    }\n"]);return z=function(){return e},e}function B(){var e=Object(m.a)(["\n    font-size: 0.9;\n    \n"]);return B=function(){return e},e}var I=f.b.div(B()),P=f.b.div(z()),H=f.b.div(D(),(function(e){return e.active&&Object(f.a)(A())}),(function(e){return e.hidden&&Object(f.a)(S())}));function L(e){var n=e.name;return a.a.createElement(w.Consumer,null,(function(e){var t,r=e.firstVisit,i=e.page,o=e.setPage;return a.a.createElement(H,{active:i===n,onClick:function(){return o(n)},hidden:r&&"dashboard"===n},(t=n).charAt(0).toUpperCase()+t.substr(1))}))}var V=function(){return a.a.createElement(P,null,a.a.createElement(I,null,"KryptoDash by Sandman Solutions"),a.a.createElement("div",null),a.a.createElement(L,{active:!0,name:"dashboard"}),a.a.createElement(L,{name:"settings"}))},N=function(e){e.firstVisit;return a.a.createElement(w.Consumer,null,(function(e){return e.firstVisit?a.a.createElement("div",null,"Please select favorite coins to begin."," "):null}))};var T="background-color: ".concat("#061a44"),W="background-color: ".concat("#010e2c",";"),U=("background-color: ".concat("#42ff3a",";"),"box-shadow: 0px 0px 5px 1px ".concat("#121d5b")),G="box-shadow: 0px 0px 4px 2px #5fff17";function M(){var e=Object(m.a)(["\n    display: grid;\n    justify-content: center;\n"]);return M=function(){return e},e}function J(){var e=Object(m.a)(["\n    margin-top: 25px;\n    color: ",";\n    ","\n    padding: 5px;\n    width: 300px;\n    text-align: center;\n    margin-left: 10%;\n    cursor: pointer;\n    border: 2px solid rgba(100,100,100, 0.3);\n    &:hover {\n        ","\n    }\n    @media (max-width: 767px) {\n        {\n            margin-top: 37px;\n            font-size: 1.0em;\n            width: 175px;\n            margin-left: 10%;\n            text-align: center;\n        }\n\n"]);return J=function(){return e},e}var K=f.b.div(J(),"#42ff3a","font-size: 1.5em;",G),R=f.b.div(M()),$=function(){return a.a.createElement(w.Consumer,null,(function(e){var n=e.confirmFavorites;return a.a.createElement(R,null,a.a.createElement(K,{onClick:n},"Confirm Favorites"))}))},X=function(e){var n=e.name,t=e.children;return a.a.createElement(w.Consumer,null,(function(e){return e.page!==n?null:a.a.createElement("div",null," ",t," ")}))};function q(){var e=Object(m.a)(["\n    pointer-events: none;\n    opacity: 0.4;\n"]);return q=function(){return e},e}function Q(){var e=Object(m.a)(["\n    &:hover{\n        cursor: pointer;\n        ","\n    }\n\n"]);return Q=function(){return e},e}function Y(){var e=Object(m.a)(["\n    &:hover{\n        cursor: pointer;\n        ","\n    }\n\n"]);return Y=function(){return e},e}function Z(){var e=Object(m.a)(["\n    ",";\n    ",";\n    padding: 10px;\n\n"]);return Z=function(){return e},e}var _=f.b.div(Z(),U,T),ee=Object(f.b)(_)(Y(),G),ne=Object(f.b)(ee)(Q(),"box-shadow: 0px 0px 2px 2px #e41111"),te=Object(f.b)(_)(q());function re(){var e=Object(m.a)(["\n    justify-self: right;\n    display: none;\n    ",":hover & {\n        display: block;\n        color: red;\n    }\n"]);return re=function(){return e},e}function ae(){var e=Object(m.a)(["\n    justify-self: right;\n    font-size: 0.6em;\n\n"]);return ae=function(){return e},e}function ie(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n"]);return ie=function(){return e},e}var oe=f.b.div(ie()),ce=f.b.div(ae()),le=f.b.div(re(),ne),ue=function(e){var n=e.name,t=e.symbol,r=e.topSection;return a.a.createElement(oe,null,a.a.createElement("div",null,n),r?a.a.createElement(le,null," X "):a.a.createElement(ce,null,t))};function se(){var e=Object(m.a)(["\n        height: 200px;\n        margin: auto;\n        margin-top: 33%;\n        display: block;\n        @media (max-width: 768px)  {\n            {\n              display: flex;  \n              height: 65px;\n              float: left;\n              margin-top: -15px;\n              margin-left: 10%;\n              \n            }\n        }   \n    "]);return se=function(){return e},e}function me(){var e=Object(m.a)(["\n    height: 50px;\n    ","\n\n"]);return me=function(){return e},e}var fe=f.b.img(me(),(function(e){return e.spotlight&&Object(f.a)(se())})),pe=function(e){var n=e.coin,t=e.spotlight;return a.a.createElement(fe,{spotlight:t,alt:n.CoinSymbol,src:"http://cryptocompare.com/".concat(n.ImageUrl)})};function de(e,n,t,r){return e?function(){r(n)}:function(){t(n)}}var ve=function(e){var n=e.coinKey,t=e.topSection;return a.a.createElement(w.Consumer,null,(function(e){var r=e.coinList,i=e.addCoin,o=e.removeCoin,c=e.isInFavorites,l=r[n],u=ee;return t?u=ne:c(n)&&(u=te),a.a.createElement(u,{onClick:de(t,n,i,o)},a.a.createElement(ue,{topSection:t,name:l.CoinName,symbol:l.Symbol}),a.a.createElement(pe,{coin:l}))}))};function xe(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n    grid-gap: 15px;\n    margin-top: 40px;\n    font-size: 0.7em; \n    @media (max-width: 768px) \n        {\n        grid-template-columns: repeat(4, minmax(95px, 1fr));\n        grid-gap: 10px;\n        }\n    \n    @media (max-width: 415px)  \n        {\n        grid-template-columns: repeat(3, minmax(95px, 1fr));\n        grid-gap: 10px;\n        }\n      \n\n    @media (max-width: 376px)\n        {\n        grid-template-columns: repeat(2, minmax(50px, 1fr)); \n        grid-gap: 10px;   \n        }\n"]);return xe=function(){return e},e}var ge=f.b.div(xe());function he(e,n,t,r){return n?t:function(e,n){return n&&Object.keys(n)||Object.keys(e).slice(0,100)}(e,r)}var be=function(e){var n=e.topSection;return a.a.createElement(w.Consumer,null,(function(e){var t=e.coinList,r=e.favorites,i=e.filteredCoins;return a.a.createElement(ge,null,he(t,n,r,i).map((function(e){return a.a.createElement(ve,{key:e,topSection:n,coinKey:e})})))}))},Ce=t(23),ye=t.n(Ce);function Ee(){var e=Object(m.a)(["\n    ","\n    padding: 5px;\n    font-size: 1.2rem;\n    height: 25px;\n    color: #1163c9;\n    border: 1px solid;\n    place-self: center left;\n    @media (max-width: 767px) {\n        margin-left: 15px;\n        width: 105px;\n   }\n    "]);return Ee=function(){return e},e}function Oe(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 200px 5fr;\n    width: 50%;\n    margin-left: 33%;\n\n    @media (max-width: 900px) {\n        grid-template-columns: 150px 3.3fr;\n        font-size: 0.8em;\n        width: 60%;\n        margin-left: 25%;\n    }\n\n    @media (max-width: 767px) {\n        grid-template-columns: 125px 2.5fr;\n        font-size: 0.8em;\n        width: 40%;\n        margin-left: 30%;\n    }\n\n    @media (max-width: 450px) {\n        grid-template-columns: 120px 2.3fr;\n        font-size: 0.8em;\n        width: 80%;\n        margin-left: 10%;\n    }\n\n\n    @media (max-width: 380px) {\n        grid-template-columns: 120px 2.2fr;\n        font-size: 0.8em;\n        width: 90%;\n        margin-left: 2%;\n        \n   }\n"]);return Oe=function(){return e},e}var je=f.b.div(Oe()),ke=f.b.input(Ee(),W),we=E.a.debounce((function(e,n,t){var r=Object.keys(n),a=r.map((function(e){return n[e].CoinName})),i=r.concat(a),o=ye.a.filter(e,i,{}).map((function(e){return e.string})),c=E.a.pickBy(n,(function(e,n){var t=e.CoinName;return E.a.includes(o,n)||E.a.includes(o,t)}));console.log(c),t(c)}),500);var Fe=function(){return a.a.createElement(w.Consumer,null,(function(e){var n=e.setFilteredCoins,t=e.coinList;return a.a.createElement(je,null,a.a.createElement("h2",null,"Seach all coins"),a.a.createElement(ke,{onKeyUp:function(e){return function(e,n,t){var r=e.target.value;r?we(r,t,n):n(null)}(e,n,t)}}))}))},Se=function(){return a.a.createElement(X,{name:"settings"},a.a.createElement(N,null),a.a.createElement(be,{topSection:!0}),a.a.createElement($,null),a.a.createElement(Fe,null),a.a.createElement(be,null))};function Ae(){var e=Object(m.a)(["\n        ","\n        pointer-events: none;\n    "]);return Ae=function(){return e},e}function De(){var e=Object(m.a)(["\n        ","\n        display: grid;\n        grid-gap: 6px;\n        grid-template-columns: repeat(3, 1fr);\n        justify-items: right;\n        padding-right: 6px;\n    "]);return De=function(){return e},e}function ze(){var e=Object(m.a)(["\n    ","\n\n    ","\n"]);return ze=function(){return e},e}function Be(){var e=Object(m.a)(["\n        color: red;\n    "]);return Be=function(){return e},e}function Ie(){var e=Object(m.a)(["\n    color: green;\n    font-size: 15px;\n    margin-right: 5px;\n    @media (max-width: 767px) {\n        font-size: 12px;\n        \n   } \n\n    ","\n"]);return Ie=function(){return e},e}function Pe(){var e=Object(m.a)(["\n    ",";\n"]);return Pe=function(){return e},e}function He(){var e=Object(m.a)(["\n    justify-self: left;\n"]);return He=function(){return e},e}function Le(){var e=Object(m.a)(["\n    justify-self: right;\n"]);return Le=function(){return e},e}var Ve=f.b.div(Le()),Ne=f.b.div(He()),Te=f.b.div(Pe(),"font-size: 2em"),We=f.b.div(Ie(),(function(e){return e.red&&Object(f.a)(Be())})),Ue=function(e){return+(e+"").slice(0,6)},Ge=Object(f.b)(ee)(ze(),(function(e){return e.compact&&Object(f.a)(De(),"font-size: .75em")}),(function(e){return e.currentFavorite&&Object(f.a)(Ae(),G)}));function Me(e){var n=e.data;return a.a.createElement(Ve,null,a.a.createElement(We,{red:n.CHANGEPCT24HOUR<0},+(n.CHANGEPCT24HOUR+"").slice(0,4),"%"))}function Je(e){var n=e.sym,t=e.data,r=e.currentFavorite,i=e.setCurrentFavorite;return a.a.createElement(Ge,{onClick:i,currentFavorite:r},a.a.createElement(oe,null,a.a.createElement("div",null," ",n," "),a.a.createElement(Me,{data:t})),a.a.createElement(Te,null,"$",Ue(t.PRICE)))}function Ke(e){var n=e.sym,t=e.data,r=e.currentFavorite,i=e.setCurrentFavorite;return a.a.createElement(Ge,{onClick:i,compact:!0,currentFavorite:r},a.a.createElement(Ne,null," ",n," "),a.a.createElement(Me,{data:t}),a.a.createElement("div",null,"$",Ue(t.PRICE)))}var Re=function(e){var n=e.price,t=e.index,r=Object.keys(n)[0],i=n[r].USD,o=t<10?Je:Ke;return a.a.createElement(w.Consumer,null,(function(e){var n=e.currentFavorite,t=e.setCurrentFavorite;return a.a.createElement(o,{sym:r,data:i,currentFavorite:n===r,setCurrentFavorite:function(){return t(r)}})}))};function $e(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    margin-top: 40px;\n    @media (max-width: 786px)  {\n        {\n          grid-template-columns: repeat(4, 1fr);  \n         \n        }\n    }    \n    @media (max-width: 600px)  {\n        {\n            grid-template-columns: repeat(2, 1fr);\n            margin-left: 0px;\n        }    \n    }    \n    @media (max-width: 376px) {\n        {\n            margin-left: -10px;\n        }\n    }        \n"]);return $e=function(){return e},e}var Xe=f.b.div($e()),qe=function(){return a.a.createElement(w.Consumer,null,(function(e){var n=e.prices;return a.a.createElement(Xe,null,n.map((function(e,n){return a.a.createElement(Re,{key:"priceTile-".concat(n),index:n,price:e})})))}))};function Qe(){var e=Object(m.a)(["\n    text-align: center;\n    margin-bottom: 55px;\n    width: 100%;\n    @media (max-width: 768px)  \n        {\n          margin-bottom: 15px;\n          margin-right: 0%;\n          width: 100%;\n          \n        }\n      \n    @media (max-width: 376px) \n        {\n            margin-left: -10px;\n            \n        }\n          \n"]);return Qe=function(){return e},e}var Ye=f.b.h2(Qe()),Ze=function(){return a.a.createElement(w.Consumer,null,(function(e){var n=e.currentFavorite,t=e.coinList;return a.a.createElement(_,null,a.a.createElement(Ye,null," ",t[n].CoinName,a.a.createElement(pe,{className:"coin",spotlight:!0,coin:t[n]})))}))},_e=function(e){return{chart:{height:"56%",type:"line"},title:{text:"Crypto Price History"},yAxis:{title:{text:"Price (USD)"}},xAxis:{type:"datetime"},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:e,responsive:{rules:[{condition:{maxWidth:1e3},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"middle"}}}]}}},en=t(17),nn=t.n(en),tn={colors:["#5fff17","#55BF3B","#DF5353","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:"#061a44",borderColor:"#000000",borderWidth:0,className:"dark-container",plotBackgroundColor:"#010e2c",plotBorderColor:"#CCCCCC",plotBorderWidth:1},title:{style:{color:"#C0C0C0",font:'bold 16px "Trebuchet MS", Verdana, sans-serif'}},subtitle:{style:{color:"#666666",font:'bold 12px "Trebuchet MS", Verdana, sans-serif'}},xAxis:{gridLineColor:"#333333",gridLineWidth:1,labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",tickColor:"#A0A0A0",title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},yAxis:{gridLineColor:"#333333",labels:{style:{color:"#A0A0A0"}},lineColor:"#A0A0A0",minorTickInterval:null,tickColor:"#A0A0A0",tickWidth:1,title:{style:{color:"#CCC",fontWeight:"bold",fontSize:"12px",fontFamily:"Trebuchet MS, Verdana, sans-serif"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.75)",style:{color:"#F0F0F0"}},toolbar:{itemStyle:{color:"silver"}},plotOptions:{line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{font:"9pt Trebuchet MS, Verdana, sans-serif",color:"#A0A0A0"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#444"},title:{style:{color:"#C0C0C0"}}},credits:{enabled:!1,style:{color:"#666"}},labels:{style:{color:"#CCC"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}};function rn(){var e=Object(m.a)(["\n    ","\n    ","\n    color: #1163c9;\n    border: 1px solid;\n    \n    margin: 4px;\n    height: 24px;\n    float: right;\n    \n"]);return rn=function(){return e},e}var an=f.b.select(rn(),W,"font-size: 1.0em");nn.a.Highcharts.setOptions(tn);var on=function(){return a.a.createElement(w.Consumer,null,(function(e){var n=e.historical,t=e.changeChartSelect;return a.a.createElement(_,null,a.a.createElement(an,{defaultValue:"months",onChange:function(e){return t(e.target.value)}},a.a.createElement("option",{value:"days"},"Daily"),a.a.createElement("option",{value:"weeks"},"Weekly"),a.a.createElement("option",{value:"months"},"Monthly")),n?a.a.createElement(nn.a,{config:_e(n)}):a.a.createElement("div",null," Retrieving Historical Data... "))}))};function cn(){var e=Object(m.a)(["\n    display: grid;\n    margin-top: 20px;\n    grid-gap: 15px;\n    grid-template-columns: 1fr 4fr;\n    @media (max-width: 768px)  {\n        {\n          grid-template-columns: 5fr;\n          height: 100px;  \n          \n        }\n      } \n      @media (max-width: 375px)  {\n        {\n          grid-template-columns: 5fr;\n          height: 100px;  \n          margin-left: -10px;\n          \n        }\n      } \n"]);return cn=function(){return e},e}var ln=f.b.div(cn()),un=function(){return a.a.createElement(X,{name:"dashboard"},a.a.createElement(qe,null),a.a.createElement(ln,null,a.a.createElement(Ze,null),a.a.createElement(on,null)))},sn=function(e){return a.a.createElement(w.Consumer,null,(function(n){var t=n.coinList,r=n.prices,i=n.firstVisit;return t?i||r?a.a.createElement("div",null,e.children):a.a.createElement("div",null,"Loading Prices... "):a.a.createElement("div",null,"Loading Coins")}))},mn=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(d,null,a.a.createElement(F,null,a.a.createElement(V,null),a.a.createElement(sn,null,a.a.createElement(Se,null),a.a.createElement(un,null))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(mn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.50d4e6f8.chunk.js.map