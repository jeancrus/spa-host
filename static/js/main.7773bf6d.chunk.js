(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.6777486e.png"},37:function(e,t,a){e.exports=a(75)},43:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(27),c=a.n(r),o=(a(43),a(44),a(45),a(46),a(7)),s=(a(51),a(30)),i=a.n(s),m=function(e){return l.a.createElement("aside",{className:"logo"},l.a.createElement(o.b,{to:"/",className:"logo"},l.a.createElement("img",{src:i.a,alt:"logo"})))},u=(a(52),function(e){return l.a.createElement("aside",{className:"menu-area"},l.a.createElement("nav",{className:"menu"},l.a.createElement(o.b,{to:"/"},l.a.createElement("i",{className:"fa fa-home"}),"\u2002In\xedcio"),l.a.createElement(o.b,{to:"/users"},l.a.createElement("i",{className:"fa fa-users"}),"\u2002Usu\xe1rios")))}),d=a(10),E=(a(53),a(54),function(e){return l.a.createElement("header",{className:"header d-none d-sm-flex flex-column"},l.a.createElement("h1",{className:"mt-3"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)}),e.title),l.a.createElement("p",{className:"lead text-muted"},e.subtitle))}),f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,e),l.a.createElement("main",{className:"content container-fluid"},l.a.createElement("div",{className:"p-3 mt-3"},e.children)))},h=function(e){return l.a.createElement(f,{icon:"home",title:"In\xedcio",subtitle:"Projeto SPA"},l.a.createElement("div",{className:"display-4"},"Bem vindo!"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Sistema de uma SPA(Single Page Application) desenvolvido para portf\xf3lio com ajuda do curso Cod3r! ",l.a.createElement("br",null),l.a.createElement("strong",null,"Tecnologias utilizadas: ",l.a.createElement("br",null),"Boostrap 4 ",l.a.createElement("br",null),"React.js ",l.a.createElement("br",null),"Gh pages ",l.a.createElement("br",null),"Axios ",l.a.createElement("br",null),"React router ",l.a.createElement("br",null))))},p=a(19),v=a(32),b=a(33),N=a(35),g=a(34),y=a(36),k=a(15),w=a.n(k),x={icon:"users",title:"Usu\xe1rios",subtitle:"Cadastro de usu\xe1rios: Incluir, Listar, Alterar e Excluir"},j="http://localhost:3001/users",S={user:{name:"",email:""},list:[]},C=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(N.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state=Object(p.a)({},S),a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){var e=this;w()(j).then(function(t){e.setState({list:t.data})})}},{key:"clear",value:function(){this.setState({user:S.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat(j,"/").concat(t.id):j;w.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:S.user,list:a})})}},{key:"getUpdatedList",value:function(e){var t=this.state.list.filter(function(t){return t.id!==e.id});return e&&t.unshift(e),t}},{key:"updateField",value:function(e){var t=Object(p.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nome"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.user.name,onChange:function(t){return e.updateField(t)},placeholder:"Digite o nome..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail"),l.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.user.email,onChange:function(t){return e.updateField(t)},placeholder:"Digite o e-mail..."})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.save(t)}},"Salvar"),l.a.createElement("button",{className:"btn btn-secory ml-2",onClick:function(t){return e.clear(t)}},"Cancelar"))))}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;w.a.delete("".concat(j,"/").concat(e.id)).then(function(e){var a=t.getUpdatedList(null);t.setState({list:a})})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"render",value:function(){return l.a.createElement(f,x,this.renderForm())}}]),t}(n.Component),A=function(e){return l.a.createElement(d.c,null,l.a.createElement(d.b,{exact:!0,path:"/",component:h}),l.a.createElement(d.b,{path:"/users",component:C}),l.a.createElement(d.a,{from:"*",to:"/"}))},O=(a(74),function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Desenvolvido com ",l.a.createElement("i",{className:"fa fa-heart text-danger"}),"\u2002 por",l.a.createElement("strong",null,"\u2002Cod",l.a.createElement("span",{className:"text-danger"},"3"),"r"),"e",l.a.createElement("strong",null,"\u2002Jean",l.a.createElement("span",{className:"text-danger"},"Crus"),"r")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(function(e){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(m,null),l.a.createElement(u,null),l.a.createElement(A,null),l.a.createElement(O,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.7773bf6d.chunk.js.map