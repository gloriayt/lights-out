(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(15),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),p=n(9),d=n(6),f=(n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),b=(n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasWon:!1,board:n.createBoard()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"createBoard",value:function(){for(var e=[],t=this.props,n=t.ncols,a=t.nrows,r=0;r<a;r++){for(var o=[],c=0;c<n;c++)o.push(Math.random()<this.props.chanceLightStartsOn);e.push(o)}return e}},{key:"flipCellsAround",value:function(e){var t=this.props,n=t.ncols,a=t.nrows,r=this.state.board,o=e.split(",").map(Number),c=Object(p.a)(o,2),l=c[0],s=c[1];function i(e,t){t>=0&&t<n&&e>=0&&e<a&&(r[e][t]=!r[e][t])}i(l,s),i(l,s-1),i(l,s+1),i(l-1,s),i(l+1,s),this.setState({board:r});var u=this.state.board.every(function(e){return e.every(function(e){return!e})});this.setState({is_winner:u})}},{key:"table",value:function(){for(var e=this,t=[],n=0,a=0,o=this.props,c=o.ncols,l=o.nrows;n<l;){var s=[];a=0;for(var i=function(){var t="".concat(n,",").concat(a);s.push(r.a.createElement(f,{key:t,isLit:e.state.board[n][a],flipCellsAroundMe:function(){return e.flipCellsAround(t)}})),a++};a<c;)i();t.push(r.a.createElement("tr",{key:n},s)),n++}return r.a.createElement("tbody",null,t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"logo"},r.a.createElement("b",null,"Lig",r.a.createElement("span",null,"h"),"ts ",r.a.createElement("span",null,"O"),"ut")),!1===this.state.hasWon?r.a.createElement("table",{className:"Board"},this.table()):r.a.createElement("p",null,r.a.createElement("div",{class:"logo"},r.a.createElement("b",null,"Yo",r.a.createElement("span",null,"u "),"W",r.a.createElement("span",null,"i"),"n!"))))}}]),t}(a.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.25};var m=b,v=(n(22),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{nrows:4,ncols:5,chanceLightStartsOn:.2}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.09c04b62.chunk.js.map