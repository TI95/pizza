"use strict";(self.webpackChunkAngPizza=self.webpackChunkAngPizza||[]).push([[884],{7884:(F,r,n)=>{n.r(r),n.d(r,{HomeModule:()=>h});var l=n(6895),m=n(3060),g=n(7579),c=n(4004),u=n(4650),p=n(9446);const v=["popup"];function b(e,o){if(1&e&&(u.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),u._uU(5,"Modal title"),u.qZA(),u._UZ(6,"button",6),u.qZA(),u.TgZ(7,"div",7)(8,"p"),u._uU(9),u.qZA()(),u.TgZ(10,"div",8)(11,"button",9),u._uU(12,"Close"),u.qZA(),u.TgZ(13,"button",10),u._uU(14,"Save changes"),u.qZA()()()()()),2&e){const t=u.oxw();u.xp6(9),u.Oqu(t.data)}}let s=(()=>{class e{constructor(t){this.modalService=t,this.data=""}open(){this.modalService.open(this.popup)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.FF))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-popup"]],viewQuery:function(t,i){if(1&t&&u.Gf(v,5),2&t){let a;u.iGM(a=u.CRH())&&(i.popup=a.first)}},inputs:{data:"data"},decls:2,vars:0,consts:[["popup",""],["tabindex","-1","id","myModal",1,""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(t,i){1&t&&u.YNc(0,b,15,1,"ng-template",null,0,u.W1O)},encapsulation:2}),e})();var Z=n(2340),C=n(5237);const A=[{path:"",component:(()=>{class e{constructor(t){this.cartService=t,this.subscription=null,this.subject=new g.x;let i=0;setInterval(()=>{this.subject.next(i++)},1e3),setTimeout(()=>{this.subject.complete()},4e3)}ngOnInit(){this.subscription=this.subject.pipe((0,c.U)(t=>10*t)).subscribe({next:t=>{console.log("subscriber 1",t)},error:t=>{console.log("ERROR "+t)}}),console.log(Z.N.production)}ngAfterViewInit(){}ngOnDestroy(){this.subscription?.unsubscribe()}test(){this.subject.pipe((0,c.U)(t=>"\u0427\u0438\u0441\u043b\u043e:"+t)).subscribe(t=>{console.log("subscriber 2",t)})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(C.N))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-main"]],viewQuery:function(t,i){if(1&t&&u.Gf(s,5),2&t){let a;u.iGM(a=u.CRH())&&(i.popupComponent=a.first)}},decls:46,vars:1,consts:[[1,"main"],[1,"container"],[1,"main-info","wow","animate__backInLeft"],[1,"double-title"],[1,"main-advantages"],[1,"advantage"],[1,"advantage-image"],["src","../../../../assets/images/hop.png","alt","hop"],[1,"advantage-text"],[1,"advantage-title"],[1,"advantage-description"],["src","../../../../assets/images/kitchen-pack.png","alt","kitchen pack"],["src","../../../../assets/images/seo-and-web.png","alt","seo and web"],["src","../../../../assets/images/holidays.png","alt","holidays"],[1,"main-action"],[1,"btn","open-popup-link",3,"click"],[1,"main-image","wow","animate__backInRight"],["src","../../../../assets/images/pizza_big.png","alt","Big pizza"],[3,"data"]],template:function(t,i){1&t&&(u.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),u._uU(4," \u0421\u0430\u043c\u0430\u044f \u043b\u0443\u0447\u0448\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043c \u043c\u0438\u0440\u0435 "),u.TgZ(5,"span"),u._uU(6,"\u0442\u043e\u043b\u044c\u043a\u043e \u0432 Pizza Cheff"),u.qZA()(),u.TgZ(7,"div",4)(8,"div",5)(9,"div",6),u._UZ(10,"img",7),u.qZA(),u.TgZ(11,"div",8)(12,"div",9),u._uU(13,"\u041b\u0443\u0447\u0448\u0435\u0435 \u0442\u0435\u0441\u0442\u043e"),u.qZA(),u.TgZ(14,"div",10),u._uU(15,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0435\u0441\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0439 \u043c\u0443\u043a\u0438 \u043d\u0430\u0438\u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 "),u.qZA()()(),u.TgZ(16,"div",5)(17,"div",6),u._UZ(18,"img",11),u.qZA(),u.TgZ(19,"div",8)(20,"div",9),u._uU(21,"\u043b\u0443\u0447\u0448\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430"),u.qZA(),u.TgZ(22,"div",10),u._uU(23,"\u041f\u0438\u0446\u0446\u044b \u0433\u043e\u0442\u043e\u0432\u044f\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430 "),u.qZA()()(),u.TgZ(24,"div",5)(25,"div",6),u._UZ(26,"img",12),u.qZA(),u.TgZ(27,"div",8)(28,"div",9),u._uU(29,"\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430"),u.qZA(),u.TgZ(30,"div",10),u._uU(31,"\u041d\u0430\u0448\u0430 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0433\u0440\u0430\u0434 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u0438\u0439 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443 "),u.qZA()()(),u.TgZ(32,"div",5)(33,"div",6),u._UZ(34,"img",13),u.qZA(),u.TgZ(35,"div",8)(36,"div",9),u._uU(37,"\u043e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b"),u.qZA(),u.TgZ(38,"div",10),u._uU(39,"\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u043e\u0442 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u043b\u0438\u0434\u0435\u0440\u043e\u0432 \u0432 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0438\u0446\u0446\u044b "),u.qZA()()()(),u.TgZ(40,"div",14)(41,"a",15),u.NdJ("click",function(){return i.test()}),u._uU(42,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443"),u.qZA()()(),u.TgZ(43,"div",16),u._UZ(44,"img",17),u.qZA()()(),u._UZ(45,"app-popup",18)),2&t&&(u.xp6(45),u.Q6J("data","main component"))},dependencies:[s]}),e})()},{path:"about",component:(()=>{class e{constructor(t){this.modalService=t}ngOnInit(){}ngAfterViewInit(){this.popupComponent.open()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(p.FF))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-about"]],viewQuery:function(t,i){if(1&t&&u.Gf(s,5),2&t){let a;u.iGM(a=u.CRH())&&(i.popupComponent=a.first)}},decls:14,vars:1,consts:[[1,"order","about"],["orderElement",""],[1,"container"],[1,""],["id","order",1,"order-text-title"],[1,"double-title"],[1,"order-text-message"],[1,"about-image","wow","animate__backInRight"],["src","../../../../assets/images/pizza_big.png","alt","Pizzzza"],[3,"data"]],template:function(t,i){1&t&&(u.TgZ(0,"section",0,1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),u._uU(6,"\u041b\u0443\u0447\u0448\u0430\u044f"),u.qZA(),u._uU(7," \u0418\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0430\u044f \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f! "),u.qZA(),u.TgZ(8,"div",6),u._uU(9," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores commodi deserunt dolore doloremque laborum minus molestias quia repellendus. A, ab commodi corporis delectus est maxime numquam omnis praesentium repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores commodi deserunt dolore doloremque laborum minus molestias quia repellendus. A, ab commodi corporis delectus est maxime numquam omnis praesentium repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores commodi deserunt dolore doloremque laborum minus molestias quia repellendus. A, ab commodi corporis delectus est maxime numquam omnis praesentium repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores commodi deserunt dolore doloremque laborum minus molestias quia repellendus. A, ab commodi corporis delectus est maxime numquam omnis praesentium repudiandae. "),u.qZA()(),u.TgZ(10,"div",7),u._UZ(11,"img",8)(12,"img",8),u.qZA()()(),u._UZ(13,"app-popup",9)),2&t&&(u.xp6(13),u.Q6J("data","about component"))},dependencies:[s],styles:[".about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;align-items:start}.about-image[_ngcontent-%COMP%]{margin-top:50px;padding-bottom:400px}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[m.Bz.forChild(A),m.Bz]}),e})();var f=n(4466);let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[l.ez,f.m,m.Bz,d,p.bz,d]}),e})()}}]);