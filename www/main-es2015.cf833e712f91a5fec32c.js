(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(t,e,i){t.exports=i("zUnb")},"3WbM":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("fXoL"),o=i("dNgK");let r=(()=>{class t{constructor(t){this.snackBar=t}showToast(t,e="bg-violet"){this.snackBar.open(t,"close",{duration:2500,verticalPosition:"bottom",horizontalPosition:"center",panelClass:[e,"text-white","overlay","fixed-bottom","mx-auto","w-100","success-dialog"]})}}return t.\u0275fac=function(e){return new(e||t)(n.fc(o.a))},t.\u0275prov=n.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},AytR:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o});const n={production:!0},o={apiKey:"AIzaSyD8oHgN3nK3qcT7kvcMVTs9mkzeqFJ9vSY",authDomain:"refer2career-9342a.firebaseapp.com",projectId:"refer2career-9342a",storageBucket:"refer2career-9342a.appspot.com",messagingSenderId:"833213007308",appId:"1:833213007308:web:e09ff54d82c39b3c188969",measurementId:"G-LJET8FMWKP"}},IYfF:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("tk/3"),o=i("XNiG"),r=i("fXoL");let s=(()=>{class t{constructor(t){if(this.http=t,this.user={},this.isScreenBig=!1,this.currentUser=new o.a,this.headers=new n.c({"content-type":"application/json"}),this.baseUrl="",this.baseUrl=window.location.host.includes("localhost")?"http://localhost:8084":"",this.getCurrentUser(),window.screen.width>1150&&(this.isScreenBig=!0),window.localStorage.getItem("id")){const t={collection:"users",query:{_id:JSON.parse(window.atob(window.localStorage.getItem("id")))._id}};this.find(t).subscribe(t=>{t.data&&(this.user=t.data[0])})}}linkedInLogin(){return this.http.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8084%2Fcallback%2F&scope=r_emailaddress%20r_liteprofile&client_id=78pijkn0197pgp",{headers:new n.c({"Content-Type":"application/x-www-form-urlencoded"})})}getCurrentUser(){window.localStorage.getItem("id")&&this.getDetails({email:JSON.parse(window.atob(window.localStorage.getItem("id"))).email}).subscribe(t=>{this.currentUser.next(t.data)})}registerCandidate(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/register/candidate",e,{headers:this.headers})}verifyOTP(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/verify/candidate",e,{headers:this.headers}).toPromise()}login(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/login",e,{headers:this.headers}).toPromise()}updateAdminDetails(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/updateAdminDetails",e,{headers:this.headers}).toPromise()}create(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/create",e,{headers:this.headers}).toPromise()}update(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/update",e,{headers:this.headers}).toPromise()}find(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/find",e,{headers:this.headers})}updateUserDetails(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/updateUserDetails",e,{headers:this.headers}).toPromise()}getDetails(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/getDetails",e,{headers:this.headers})}getOTP(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/otpRequest",e,{headers:this.headers})}sendMail(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/send-mail",e,{headers:this.headers})}verify(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/verifyOTP",e,{headers:this.headers})}}return t.\u0275fac=function(e){return new(e||t)(r.fc(n.a))},t.\u0275prov=r.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},PCNd:function(t,e,i){"use strict";i.d(e,"a",function(){return lt});var n=i("ofXK"),o=i("tk/3"),r=i("K3ix"),s=i("3Pt+"),a=i("kmnG"),c=i("UXJo"),l=i("5+WD"),b=i("+rOU"),d=i("vxfF"),u=i("B/XX"),g=i("f6nW"),h=i("FvrZ"),p=i("/1cH"),f=i("TU8p"),m=i("2ChS"),v=i("bTqV"),w=i("jaxi"),y=i("Wp6s"),P=i("bSwM"),x=i("A5z7"),X=i("xHqg"),Y=i("iadO"),k=i("0IaG"),O=i("f0Cb"),S=i("7EHt"),I=i("zkoq"),T=i("NFeN"),j=i("qFsG"),F=i("MutI"),C=i("STbY"),N=i("FKr1"),R=i("M9IT"),M=i("bv9b"),L=i("Xa2L"),_=i("QibW"),A=i("d3UM"),U=i("XhcP"),E=i("5RNC"),D=i("1jcm"),z=i("dNgK"),J=i("Dh3D"),q=i("+0xr"),V=i("wZkO"),B=i("/t3+"),H=i("Qu3c"),G=i("8yBR"),W=i("rDax"),Z=i("TEn/"),Q=i("54vc"),K=i("VYYF"),$=i("9OaD"),tt=i("psEu"),et=i("hzby"),it=i("ZOsW"),nt=i("+Cnu"),ot=i("Czum"),rt=i("RZlo"),st=i("AytR"),at=i("fJ1W"),ct=i("fXoL");let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=ct.Qb({type:t}),t.\u0275inj=ct.Pb({providers:[K.a,Q.a,r.a,at.a],imports:[[ot.a.initializeApp(st.b),rt.a,it.b,n.c,tt.b.forRoot(),et.c.forRoot(),$.a,s.u,L.a,s.i,a.e,c.a,u.e,g.r,h.d,l.a,p.b,f.a,m.a,v.b,w.a,y.a,P.b,x.a,X.a,Y.c,k.b,O.a,S.a,I.a,T.b,j.c,F.a,C.a,N.m,R.a,M.a,L.a,_.a,N.t,A.b,U.a,E.b,D.b,z.b,J.a,q.a,V.a,B.a,H.b,G.a,W.f,b.g,d.d,o.b,Z.n.forRoot(),r.c.forRoot(),nt.b.forRoot()],L.a,tt.b,$.a,et.c,s.u,s.i,a.e,c.a,u.e,g.r,h.d,l.a,p.b,f.a,m.a,v.b,w.a,y.a,P.b,x.a,X.a,Y.c,k.b,O.a,S.a,I.a,T.b,j.c,F.a,C.a,N.m,R.a,M.a,L.a,_.a,N.t,A.b,U.a,E.b,D.b,z.b,J.a,q.a,V.a,B.a,H.b,G.a,W.f,b.g,d.d,Z.n,r.c,o.b,it.b,nt.b]}),t})()},eDag:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("fXoL"),o=i("ofXK"),r=i("Xa2L");function s(t,e){if(1&t&&(n.Yb(0,"div",1),n.Yb(1,"div",2),n.Tb(2,"mat-spinner",3),n.Xb(),n.Xb()),2&t){const t=n.nc();n.Fb(2),n.tc("diameter",35)("color",t.color)}}let a=(()=>{class t{constructor(){this.visibility=!0,this.color="accent"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["app-spinner-component"]],inputs:{visibility:"visibility"},decls:1,vars:1,consts:[["class","fixed-top fixed-bottom wh-100 vh-100 fixed-top vertical-center justify-content-center","style","background-color: rgba(49, 49, 49, 0.5) !important;",4,"ngIf"],[1,"fixed-top","fixed-bottom","wh-100","vh-100","fixed-top","vertical-center","justify-content-center",2,"background-color","rgba(49, 49, 49, 0.5) !important"],[1,"border","border-light","bg-white","rounded-circle","p-2"],[3,"diameter","color"]],template:function(t,e){1&t&&n.Nc(0,s,3,2,"div",0),2&t&&n.tc("ngIf",e.visibility)},directives:[o.m,r.b],styles:[""]}),t})()},fJ1W:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("fXoL"),o=i("tyNb");let r=(()=>{class t{constructor(t){this.router=t}canActivate(t,e){{const t=window.localStorage.getItem("id");let e;return t&&(e=JSON.parse(window.atob(t))),null!=e?0===e.role||1===e.role||2===e.role||(0===e.role?this.router.navigateByUrl("/admin"):1===e.role?this.router.navigateByUrl("/recruiter"):2===e.role&&this.router.navigateByUrl("/referer"),!1):(this.router.navigateByUrl("/login"),!1)}}}return t.\u0275fac=function(e){return new(e||t)(n.fc(o.g))},t.\u0275prov=n.Ob({token:t,factory:t.\u0275fac}),t})()},kLfG:function(t,e,i){var n={"./ion-action-sheet.entry.js":["dUtr",0,18],"./ion-alert.entry.js":["Q8AI",0,19],"./ion-app_8.entry.js":["hgI1",0,20],"./ion-avatar_3.entry.js":["CfoV",0,21],"./ion-back-button.entry.js":["Nt02",0,22],"./ion-backdrop.entry.js":["Q2Bp",23],"./ion-button_2.entry.js":["0Pbj",0,24],"./ion-card_5.entry.js":["ydQj",0,25],"./ion-checkbox.entry.js":["4fMi",0,26],"./ion-chip.entry.js":["czK9",0,27],"./ion-col_3.entry.js":["/CAe",28],"./ion-datetime_3.entry.js":["WgF3",0,29],"./ion-fab_3.entry.js":["uQcF",0,30],"./ion-img.entry.js":["wHD8",31],"./ion-infinite-scroll_2.entry.js":["2lz6",32],"./ion-input.entry.js":["ercB",0,33],"./ion-item-option_3.entry.js":["MGMP",0,34],"./ion-item_8.entry.js":["9bur",0,35],"./ion-loading.entry.js":["cABk",0,36],"./ion-menu_3.entry.js":["kyFE",0,37],"./ion-modal.entry.js":["TvZU",0,38],"./ion-nav_2.entry.js":["vnES",0,39],"./ion-popover.entry.js":["qCuA",0,40],"./ion-progress-bar.entry.js":["0tOe",0,41],"./ion-radio_2.entry.js":["h11V",0,42],"./ion-range.entry.js":["XGij",0,43],"./ion-refresher_2.entry.js":["nYbb",0,44],"./ion-reorder_2.entry.js":["smMY",0,45],"./ion-ripple-effect.entry.js":["STjf",46],"./ion-route_4.entry.js":["k5eQ",0,47],"./ion-searchbar.entry.js":["OR5t",0,48],"./ion-segment_2.entry.js":["fSgp",0,49],"./ion-select_3.entry.js":["lfGF",0,50],"./ion-slide_2.entry.js":["5xYT",51],"./ion-spinner.entry.js":["nI0H",0,52],"./ion-split-pane.entry.js":["NAQR",53],"./ion-tab-bar_2.entry.js":["knkW",0,54],"./ion-tab_2.entry.js":["TpdJ",0,55],"./ion-text.entry.js":["ISmu",0,56],"./ion-textarea.entry.js":["U7LX",0,57],"./ion-toast.entry.js":["L3sA",0,58],"./ion-toggle.entry.js":["IUOf",0,59],"./ion-virtual-scroll.entry.js":["8Mb5",60]};function o(t){if(!i.o(n,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=n[t],o=e[0];return Promise.all(e.slice(1).map(i.e)).then(function(){return i(o)})}o.keys=function(){return Object.keys(n)},o.id="kLfG",t.exports=o},pzb0:function(t,e,i){"use strict";i.d(e,"b",function(){return n}),i.d(e,"a",function(){return o});var n=function(t){return t[t.ADMIN=0]="ADMIN",t[t.EMPLOYER=1]="EMPLOYER",t[t.CANDIDATE=2]="CANDIDATE",t}({}),o=function(t){return t[t.Submitted=0]="Submitted",t[t.Shortlisted=1]="Shortlisted",t[t.Selected=2]="Selected",t[t.Hired=3]="Hired",t[t.Rejected=4]="Rejected",t[t.Terminated=5]="Terminated",t}({})},zUnb:function(t,e,i){"use strict";i.r(e);var n=i("fXoL"),o=i("AytR"),r=i("jhN1"),s=i("pzb0"),a=i("ofXK"),c=i("TEn/"),l=i("54vc"),b=i("VYYF"),d=i("tyNb"),u=i("IYfF");let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"footer-bottom","bg-primary",2,"min-height","5vh"],[1,"text-center","text-white","py-3","px-2"]],template:function(t,e){1&t&&(n.Yb(0,"div",0),n.Yb(1,"div",1),n.Pc(2,"\xa9 2021 Refer 2 Career. All Rights Reserved. "),n.Xb(),n.Xb())},styles:[".footer-demo[_ngcontent-%COMP%]{height:100%}.demo-section[_ngcontent-%COMP%]{border:1px solid #bbb}footer[_ngcontent-%COMP%]{background-color:#ddd;border-top:1px solid #bbb;text-align:center}#clickFooter[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]:hover{background-color:#ccc;cursor:pointer}#btmFooter[_ngcontent-%COMP%]{align-self:flex-end}#clickFooter[_ngcontent-%COMP%]{position:relative}"]}),t})(),h=(()=>{class t{constructor(t,e,i,n,o,r){this.location=t,this.platform=e,this.splashScreen=i,this.statusBar=n,this.router=o,this.authService=r,this.role=s.b,this.initializeApp(),window.localStorage.getItem("id")?JSON.parse(window.atob(window.localStorage.getItem("id"))).role===s.b.CANDIDATE?this.location.path().includes("referer")||this.router.navigateByUrl("/referer"):JSON.parse(window.atob(window.localStorage.getItem("id"))).role===s.b.ADMIN?this.location.path().includes("admin")||this.router.navigateByUrl("/admin"):JSON.parse(window.atob(window.localStorage.getItem("id"))).role===s.b.EMPLOYER&&(this.location.path().includes("recruiter")||this.router.navigateByUrl("/recruiter")):this.location.path().includes("login")||this.router.navigateByUrl("/login")}prepareRoute(t){return t&&t.activatedRouteData&&t.activatedRouteData.animation}initializeApp(){this.platform.ready().then(()=>{})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(a.i),n.Sb(c.r),n.Sb(l.a),n.Sb(b.a),n.Sb(d.g),n.Sb(u.a))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-root"]],decls:6,vars:0,consts:[[2,"position","relative","overflow","auto","z-index","999 !important","background-color","#f7f7f7"],[2,"min-height","93vh !important"],[2,"bottom","0","min-height","5vh"],[1,"mt-auto"]],template:function(t,e){1&t&&(n.Yb(0,"ion-app"),n.Yb(1,"div",0),n.Yb(2,"div",1),n.Tb(3,"router-outlet"),n.Xb(),n.Yb(4,"div",2),n.Tb(5,"app-footer",3),n.Xb(),n.Xb(),n.Xb())},directives:[c.a,d.l,g],styles:[""]}),t})();var p=i("3Pt+"),f=i("PqYM"),m=i("GJmQ"),v=i("vkgz"),w=i("K3ix"),y=i("3WbM"),P=i("1kSV"),x=i("psEu"),X=i("kmnG"),Y=i("qFsG"),k=i("9OaD"),O=i("eDag");function S(t,e){if(1&t){const t=n.Zb();n.Yb(0,"a",22),n.jc("click",function(){return n.Hc(t),n.nc().goToSignUp()}),n.Yb(1,"button",23),n.Yb(2,"span",13),n.Tb(3,"ion-icon",24),n.Pc(4,"SIGNUP "),n.Xb(),n.Xb(),n.Xb()}}function I(t,e){if(1&t){const t=n.Zb();n.Yb(0,"a",22),n.jc("click",function(){return n.Hc(t),n.nc().goToLogin()}),n.Yb(1,"button",25),n.Yb(2,"span",13),n.Tb(3,"ion-icon",26),n.Pc(4,"LOGIN "),n.Xb(),n.Xb(),n.Xb()}}function T(t,e){1&t&&(n.Yb(0,"alert",48),n.Pc(1," Now you can login with your credentials. "),n.Xb())}function j(t,e){if(1&t&&(n.Yb(0,"span",49),n.Yb(1,"b"),n.Pc(2),n.Xb(),n.Xb()),2&t){const t=n.nc(2);n.Fb(2),n.Qc(t.message)}}function F(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",50),n.Yb(1,"h5",51),n.Pc(2,"Or Sign in using"),n.Xb(),n.Yb(3,"div",52),n.Yb(4,"ion-icon",53),n.jc("click",function(){return n.Hc(t),n.nc(2).linkedinLogin()}),n.Xb(),n.Yb(5,"ion-icon",54),n.jc("click",function(){return n.Hc(t),n.nc(2).googleLogin()}),n.Xb(),n.Yb(6,"ion-icon",55),n.jc("click",function(){return n.Hc(t),n.nc(2).facebookLogin()}),n.Xb(),n.Xb(),n.Xb()}}function C(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",27),n.Yb(1,"div",28),n.Yb(2,"div",29),n.Yb(3,"div",30),n.Yb(4,"form",31),n.Yb(5,"div",32),n.Pc(6,"LOGIN"),n.Xb(),n.Yb(7,"div",33),n.Pc(8,"If you have an account with us, please log in."),n.Xb(),n.Nc(9,T,2,0,"alert",34),n.Yb(10,"div",35),n.Yb(11,"div",36),n.Pc(12,"E-MAIL* "),n.Xb(),n.Tb(13,"input",37),n.Xb(),n.Yb(14,"div",35),n.Yb(15,"div",36),n.Pc(16,"PASSWORD* "),n.Xb(),n.Tb(17,"input",38),n.Xb(),n.Yb(18,"div",39),n.Nc(19,j,3,1,"span",40),n.Xb(),n.Yb(20,"div",41),n.Yb(21,"button",42),n.jc("click",function(){return n.Hc(t),n.nc().login()}),n.Pc(22,"LOGIN"),n.Xb(),n.Yb(23,"div",43),n.jc("click",function(){return n.Hc(t),n.nc().forgotPasswordVisible()}),n.Tb(24,"ion-icon",44),n.Yb(25,"span",45),n.Pc(26," Forgot Password"),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Nc(27,F,7,0,"div",46),n.Xb(),n.Yb(28,"div",28),n.Tb(29,"img",47),n.Xb(),n.Xb()}if(2&t){const t=n.nc();n.Fb(4),n.tc("formGroup",t.loginForm),n.Fb(5),n.tc("ngIf",t.isVerified),n.Fb(10),n.tc("ngIf",t.message),n.Fb(8),n.tc("ngIf",t.isLoginCard)}}function N(t,e){if(1&t){const t=n.Zb();n.Yb(0,"form"),n.Yb(1,"div",32),n.Pc(2,"FORGET PASSWORD ?"),n.Xb(),n.Yb(3,"div",33),n.Pc(4,"We will send you an email to reset your password."),n.Xb(),n.Yb(5,"div",35),n.Yb(6,"div",36),n.Pc(7,"E-MAIL *"),n.Xb(),n.Tb(8,"input",59),n.Xb(),n.Yb(9,"div",60),n.Yb(10,"button",61),n.jc("click",function(){return n.Hc(t),n.nc(2).goToLogin()}),n.Pc(11,"Back"),n.Xb(),n.Yb(12,"button",62),n.jc("click",function(){return n.Hc(t),n.nc(2).forgotPassword()}),n.Pc(13,"Submit"),n.Xb(),n.Xb(),n.Xb()}if(2&t){const t=n.nc(2);n.Fb(8),n.tc("formControl",t.email)}}function R(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",71),n.Yb(1,"a",72),n.jc("click",function(){return n.Hc(t),n.nc(3).showLogin()}),n.Yb(2,"u"),n.Pc(3,"Login here."),n.Xb(),n.Xb(),n.Xb()}}function M(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",63),n.Yb(1,"mat-form-field",64),n.Yb(2,"mat-label",65),n.Pc(3,"New Password"),n.Xb(),n.Tb(4,"input",66),n.Yb(5,"mat-error",67),n.Pc(6,"Password required*"),n.Xb(),n.Xb(),n.Yb(7,"div",68),n.Yb(8,"button",69),n.jc("click",function(){return n.Hc(t),n.nc(2).restPassword()}),n.Pc(9,"Reset"),n.Xb(),n.Xb(),n.Nc(10,R,4,0,"div",70),n.Xb()}if(2&t){const t=n.nc(2);n.Fb(4),n.tc("type",t.isPasswordVisible?"text":"password")("formControl",t.resetPassword),n.Fb(6),n.tc("ngIf",t.isForgotPassword)}}function L(t,e){if(1&t&&(n.Yb(0,"div",56),n.Yb(1,"div",57),n.Yb(2,"div",29),n.Nc(3,N,14,1,"form",21),n.Nc(4,M,11,3,"div",58),n.Xb(),n.Xb(),n.Yb(5,"div",28),n.Tb(6,"img",47),n.Xb(),n.Xb()),2&t){const t=n.nc();n.Fb(3),n.tc("ngIf",t.isForgotPassword),n.Fb(1),n.tc("ngIf",t.isResetPassword)}}function _(t,e){if(1&t&&(n.Yb(0,"span",49),n.Yb(1,"b"),n.Pc(2),n.Xb(),n.Xb()),2&t){const t=n.nc(2);n.Fb(2),n.Qc(t.message)}}function A(t,e){if(1&t){const t=n.Zb();n.Yb(0,"button",82),n.jc("click",function(){return n.Hc(t),n.nc(2).registerCandidate()}),n.Pc(1,"CREATE"),n.Xb()}}function U(t,e){if(1&t&&(n.Yb(0,"div",73),n.Yb(1,"div",28),n.Yb(2,"div",74),n.Yb(3,"div",32),n.Pc(4," PERSONAL INFORMATION"),n.Xb(),n.Yb(5,"div",33),n.Pc(6,"If you don't have an account with us, please Sign up."),n.Xb(),n.Yb(7,"form",75),n.Yb(8,"div",35),n.Yb(9,"div",36),n.Pc(10,"Full Name *"),n.Xb(),n.Tb(11,"input",76),n.Xb(),n.Yb(12,"div",35),n.Yb(13,"div",36),n.Pc(14,"E-MAIL *"),n.Xb(),n.Tb(15,"input",77),n.Xb(),n.Yb(16,"div",35),n.Yb(17,"div",36),n.Pc(18,"PASSWORD *"),n.Xb(),n.Tb(19,"input",78),n.Xb(),n.Yb(20,"div",39),n.Nc(21,_,3,1,"span",40),n.Xb(),n.Yb(22,"div",79),n.Nc(23,A,2,0,"button",80),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Yb(24,"div",28),n.Tb(25,"img",81),n.Xb(),n.Xb()),2&t){const t=n.nc();n.Fb(7),n.tc("formGroup",t.signupForm),n.Fb(14),n.tc("ngIf",t.message),n.Fb(2),n.tc("ngIf",!t.isServiceRunning)}}function E(t,e){1&t&&(n.Yb(0,"span",49),n.Yb(1,"b"),n.Pc(2,"Invalid code"),n.Xb(),n.Xb())}function D(t,e){if(1&t){const t=n.Zb();n.Yb(0,"button",97),n.jc("click",function(){return n.Hc(t),n.nc(3).verifyOTP()}),n.Pc(1,"Verify"),n.Xb()}}function z(t,e){1&t&&n.Tb(0,"ion-spinner",98)}function J(t,e){if(1&t&&(n.Yb(0,"a",99),n.Yb(1,"span",100),n.Pc(2,"Resend Code "),n.Xb(),n.Pc(3),n.Xb()),2&t){const t=n.nc(3);n.Fb(3),n.Rc(" 00 : ",t.timer>9?t.timer:"0"+t.timer,"")}}function q(t,e){if(1&t){const t=n.Zb();n.Yb(0,"a",101),n.jc("click",function(){return n.Hc(t),n.nc(3).resendOTP()}),n.Pc(1,"Resend Code"),n.Xb()}}const V=function(){return{length:6,allowNumbersOnly:!0,inputClass:"mb-3"}};function B(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",28),n.Yb(1,"div",74),n.Yb(2,"div",84),n.Yb(3,"div",85),n.Yb(4,"alert",86),n.Pc(5),n.Xb(),n.Yb(6,"div",87),n.Yb(7,"label",88),n.Pc(8,"Enter a 6-digit passcode"),n.Xb(),n.Yb(9,"ng-otp-input",89),n.jc("ngModelChange",function(e){return n.Hc(t),n.nc(2).otp=e})("onInputChange",function(e){return n.Hc(t),n.nc(2).onOtpChange(e)}),n.Xb(),n.Yb(10,"div",90),n.Nc(11,E,3,0,"span",40),n.Xb(),n.Nc(12,D,2,0,"button",91),n.Nc(13,z,1,0,"ion-spinner",92),n.Yb(14,"div",93),n.Nc(15,J,4,1,"a",94),n.Nc(16,q,2,0,"a",95),n.Xb(),n.Xb(),n.Yb(17,"div",85),n.Yb(18,"div",96),n.jc("click",function(){return n.Hc(t),n.nc(2).back()}),n.Pc(19," Back"),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb()}if(2&t){const t=n.nc(2);n.Fb(5),n.Sc(" We have sent a 6 digit passcode at ",t.signupForm.get("email").value," ",t.email.value," kindly enter the code here. "),n.Fb(4),n.tc("ngModel",t.otp)("config",n.xc(9,V)),n.Fb(2),n.tc("ngIf",!t.isOTPCorrect),n.Fb(1),n.tc("ngIf",!t.isServiceRunning),n.Fb(1),n.tc("ngIf",t.isServiceRunning),n.Fb(2),n.tc("ngIf",t.timer>0),n.Fb(1),n.tc("ngIf",t.timer<=0)}}function H(t,e){if(1&t&&(n.Yb(0,"div",73),n.Nc(1,B,20,10,"div",83),n.Yb(2,"div",28),n.Tb(3,"img",81),n.Xb(),n.Xb()),2&t){const t=n.nc();n.Fb(1),n.tc("ngIf",t.isVerifyOTP||t.isSignUp)}}function G(t,e){1&t&&n.Tb(0,"app-spinner-component")}let W=(()=>{class t{constructor(t,e,i,n,o,r,a){this.modalRef=t,this.authService=e,this.router=i,this.routing=n,this.toast=o,this.modalService=r,this.location=a,this.isEmployer=!1,this.isSignUp=!1,this.isLoginCard=!0,this.otp="",this.isOTPCorrect=!0,this.isVerified=!1,this.isForgotPassOTP=!1,this.isResetPassword=!1,this.isServiceRunning=!1,this.role=s.b,this.isVerifyOTP=!1,this.isLogin=!0,this.isRegistration=!1,this.isForgotPassword=!1,this.isPasswordVisible=!1,this.isConfirmPasswordVisible=!1,this.password="",this.email=new p.d("",[p.x.required,p.x.email]),this.resetPassword=new p.d("",[p.x.required,p.x.minLength(7)]),this.message="",this.isPasswordReset=!1,this.isScreenBig=!1,this.socialUser={}}ngOnInit(){this.routing.params.subscribe(t=>{t.user&&(this.isServiceRunning=!0,this.socialUser=t.user,this.authService.find({collection:"users",query:{providerId:this.socialUser}}).subscribe(t=>{t.data?t.data.length>0&&(window.localStorage.setItem("id",window.btoa(JSON.stringify(t.data[0]))),window.location.reload(),this.isServiceRunning=!1):(this.toast.showToast("Something Went Wrong!","bg-danger"),setTimeout(()=>{window.open("https://refer2career.com/","_self")},3e3))}))}),this.isScreenBig=window.screen.width>1150,this.initializeSignupForm(),this.loginForm=new p.g({emailLogin:new p.d(null,[p.x.required,p.x.email]),passwordLogin:new p.d(null,[p.x.required])})}hideEmployerpahe(){this.loginVisible(),setTimeout(()=>{this.isEmployer=!1},500)}resendOTP(){this.isServiceRunning=!0,this.authService.getOTP({email:this.signupForm.get("email").value?this.signupForm.get("email").value:this.email.value}).subscribe(t=>{if(!0===t.data){this.toast.showToast("Passcode Sent Successfully!");let t=30;Object(f.a)(1e3,1e3).pipe(Object(m.a)(()=>t>0),Object(v.a)(()=>t--)).subscribe(()=>{this.timer=t}),this.isServiceRunning=!1}})}isValidOTP(){return 6===this.otp.length}onOtpChange(t){this.otp=t}forgotPasswordVisible(){this.hideAll(),this.isForgotPassword=!0}goToLogin(){this.hideAll(),this.isLogin=!0}goToSignUp(){this.hideAll(),this.isSignUp=!0}registrationVisible(){setTimeout(()=>{this.hideAll(),this.initializeSignupForm(),this.isRegistration=!0},300)}loginVisible(){setTimeout(()=>{this.hideAll(),this.isLogin=!0,this.isLoginCard=!0},300)}showLogin(){this.hideAll(),this.isForgotPassword=!1,this.isLogin=!0,this.isLoginCard=!1}hideAll(){this.isResetPassword=!1,this.isLogin=!1,this.isRegistration=!1,this.isForgotPassword=!1,this.isVerifyOTP=!1,this.isPasswordReset=!1,this.message="",this.isSignUp=!1,this.signupForm.reset(),this.loginForm.reset()}initializeSignupForm(){this.signupForm=new p.g({name:new p.d(null,p.x.required),email:new p.d(null,[p.x.required,p.x.email]),password:new p.d(null,[p.x.required,p.x.minLength(6)])})}registerCandidate(){if(this.signupForm.markAllAsTouched(),this.signupForm.valid){this.isServiceRunning=!0;const t={user:{cId:(new Date).getTime(),name:this.signupForm.get("name").value,email:this.signupForm.get("email").value.toLowerCase(),password:this.signupForm.get("password").value,role:s.b.CANDIDATE,verified:!1,time:new Date}};this.authService.registerCandidate(t).subscribe(t=>{if(t.error)this.message=t.error;else{this.hideAll(),this.isVerifyOTP=!0;let t=30;Object(f.a)(1e3,1e3).pipe(Object(m.a)(()=>t>0),Object(v.a)(()=>t--)).subscribe(()=>{this.timer=t})}this.isServiceRunning=!1})}else this.signupForm.get("email").valid?this.signupForm.get("name").valid?this.signupForm.get("password").valid||this.toast.showToast("Password atleast contain 6 characters!","bg-danger"):this.toast.showToast("Enter name!","bg-danger"):this.toast.showToast("Enter valid email!","bg-danger")}verifyOTP(){if(this.isServiceRunning=!0,this.isForgotPassOTP)this.authService.verify({email:this.email.value,otp:this.otp}).subscribe(t=>{!0===t.data?(this.isVerified=!0,this.hideAll(),this.isResetPassword=!0):this.isOTPCorrect=!1,this.isServiceRunning=!1});else{const t={email:this.signupForm.get("email").value,otp:this.otp};this.authService.verifyOTP(t).then(t=>{!0===t.data?(this.isVerified=!0,this.hideAll(),this.isLogin=!0):this.isOTPCorrect=!1,this.isServiceRunning=!1})}}back(){this.hideAll(),this.isLogin=!0}login(){this.loginForm.valid&&(this.isServiceRunning=!0,this.authService.login({email:this.loginForm.get("emailLogin").value.toLowerCase(),password:this.loginForm.get("passwordLogin").value}).then(t=>{t.error?this.message="Invalid email or password!":t.email?(this.modalRef.hide(),window.location.reload(),window.localStorage.setItem("id",window.btoa(JSON.stringify(t)))):this.message="User not found!",this.isServiceRunning=!1}))}linkedinLogin(){window.open("https://refer2career.com/linkedin","_self")}googleLogin(){window.open("https://refer2career.com/google","_self")}facebookLogin(){window.open("https://instajobapp.herokuapp.com/facebook","_self")}forgotPassword(){this.email.valid?(this.isServiceRunning=!0,this.authService.getOTP({email:this.email.value}).subscribe(t=>{if(!0===t.data){this.hideAll(),this.isVerifyOTP=!0;let t=30;Object(f.a)(1e3,1e3).pipe(Object(m.a)(()=>t>0),Object(v.a)(()=>t--)).subscribe(()=>{this.timer=t}),this.isForgotPassOTP=!0}this.isServiceRunning=!1})):this.toast.showToast("Enter valid email","bg-danger")}restPassword(){this.resetPassword.markAsTouched(),this.resetPassword.value&&this.authService.update({collection:"users",data:{password:this.resetPassword.value},query:{email:this.email.value}}).then(t=>{!0===t.data&&(this.hideAll(),this.toast.showToast("Password Reseted!"),this.isLogin=!0,this.isServiceRunning=!1)})}navigate(){}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(w.a),n.Sb(u.a),n.Sb(d.g),n.Sb(d.a),n.Sb(y.a),n.Sb(w.b),n.Sb(a.i))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-log-in"]],decls:34,vars:7,consts:[[1,"vh-100",2,"overflow-y","auto","overflow-x","auto"],[1,"row","shadow","justify-content-center","p-0","m-0"],[1,"col-sm-11"],[1,"navbar","navbar-expand-lg","navbar-light","bg-light","w-100"],[1,"nav-link"],["src","../../../../assets/refer2carrierlogo.png","alt","",1,"logo-header"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"ml-3","collapse","navbar-collapse","vertical-center","justify-content-between"],[1,"navbar-nav"],[1,"nav-item","mr-4"],["routerLink","/home",1,"nav-link","text-dark","myfont-size","text-link","active-button"],[1,"nav-link","text-dark","myfont-size","text-link","active-button"],[1,"vertical-center"],[3,"click",4,"ngIf"],[1,"bg-white","vertical-center",2,"overflow-y","auto"],[1,"container","mt-5"],["class","row mt-8 mb-5",4,"ngIf"],["class","row mt-7 vertical-center",4,"ngIf"],[1,"mt-7","row","mt-8","mb-5"],["class","row",4,"ngIf"],[4,"ngIf"],[3,"click"],[1,"btn","btn-primary","mr-2"],["name","lock-closed",1,"mr-1"],[1,"btn","btn-primary"],["name","person",1,"mr-1"],[1,"row","mt-8","mb-5"],[1,"col-md-12","col-lg-6"],[1,"p-a30","border-1"],[1,"tab-content"],["id","login",3,"formGroup"],[1,"h4",2,"font-family","'Lato', sans-serif","font-weight","700"],[1,"p","text-secondary"],["type","success","class","text-sm m-2",4,"ngIf"],[1,"form-group"],[1,"label"],["name","email","required","","placeholder","Your Email Id","formControlName","emailLogin","type","email",1,"form-control"],["name","password","required","","placeholder","Type Password","formControlName","passwordLogin","type","password",1,"form-control"],[1,"text-left","mb-2","col-sm-12"],["class","text-sm text-danger",4,"ngIf"],[1,"mt-3","vertical-center"],[1,"btn","btn-primary","text-center","site-button","mr-5","btn-lg",3,"click"],[1,"vertical-center","text-link",3,"click"],["name","lock-open-outline"],[1,"ml-2"],["class","col-sm-12 p-2",4,"ngIf"],["src","../../assets/login.png","alt",""],["type","success",1,"text-sm","m-2"],[1,"text-sm","text-danger"],[1,"col-sm-12","p-2"],[1,"p","w-100","text-grey","text-sm","text-center"],[1,"w-100","d-flex","justify-content-center"],["name","logo-linkedin",1,"linked-in-color","text-lg","m-2","text-link",3,"click"],["name","logo-google",1,"text-danger","text-lg","m-2","text-link",3,"click"],["name","logo-facebook",1,"facebook-color","text-lg","m-2","text-link",3,"click"],[1,"row","mt-7","vertical-center"],[1,"col-md-12","col-lg-6","vertical-center"],["class","p-3 row justify-content-center",4,"ngIf"],["name","email","placeholder","Your Email Id","type","email",1,"form-control",3,"formControl"],[1,"vertical-center","justify-content-between"],[1,"btn","btn-outline-primary",3,"click"],[1,"btn","btn-primary",3,"click"],[1,"p-3","row","justify-content-center"],[1,"p-0","w-100","mat-form-field","col-sm-7","mb-3"],[1,"semi-bold","text-grey","text-smd","m-0"],["matInput","","placeholder","Enter password",1,"text-sm","m-0",3,"type","formControl"],[1,"text-xs"],[1,"w-100","d-flex","justify-content-center","mb-5"],[1,"btn","btn-primary","p-1","px-4","text-smd","bold",2,"border-radius","20px","border-color","0px !important",3,"click"],["class","w-100 text-center",4,"ngIf"],[1,"w-100","text-center"],[1,"text-sm","text-link","semi-bold","text-primary","mr-2",3,"click"],[1,"row"],[1,"p-a30","border-1","max-w500","m-auto"],[3,"formGroup"],["name","name","placeholder","Full Name","formControlName","name","required","","placeholder","First Name","type","text",1,"form-control"],["name","email","formControlName","email","required","","placeholder","Your Email Id","type","email",1,"form-control"],["name","password","formControlName","password","required","","placeholder","Type Password","type","password",1,"form-control"],[1,"text-left","mt-3","vertical-center"],["class","btn btn-primary text-center site-button p-3 px-4 btn-lg",3,"click",4,"ngIf"],["src","../../assets/register.png","alt",""],[1,"btn","btn-primary","text-center","site-button","p-3","px-4","btn-lg",3,"click"],["class","col-md-12 col-lg-6",4,"ngIf"],[1,"w-100","p-3","d-flex","justify-content-center"],[1,"w-100"],["type","success",1,"text-sm"],[1,"p-3"],[1,"semi-bold","mt-2"],["name","otp","ngDefaultControl","",3,"ngModel","config","ngModelChange","onInputChange"],[1,"text-right","mb-2","d-block"],["class","btn btn-primary d-block p-1 px-4 text-sm","style","border-radius: 20px;",3,"click",4,"ngIf"],["color","primary","mode","md",4,"ngIf"],[1,"mt-5"],["class","text-primary d-block semi-bold text-sm mt-3 pb-2",4,"ngIf"],["class","text-primary semi-bold d-block text-link text-sm mt-3 pb-2",3,"click",4,"ngIf"],[1,"a","text-sm","text-link","vertical-center",3,"click"],[1,"btn","btn-primary","d-block","p-1","px-4","text-sm",2,"border-radius","20px",3,"click"],["color","primary","mode","md"],[1,"text-primary","d-block","semi-bold","text-sm","mt-3","pb-2"],[1,"text-secondary"],[1,"text-primary","semi-bold","d-block","text-link","text-sm","mt-3","pb-2",3,"click"]],template:function(t,e){1&t&&(n.Yb(0,"div",0),n.Yb(1,"div",1),n.Yb(2,"div",2),n.Yb(3,"nav",3),n.Yb(4,"a",4),n.Tb(5,"img",5),n.Xb(),n.Yb(6,"button",6),n.Tb(7,"span",7),n.Xb(),n.Yb(8,"div",8),n.Yb(9,"ul",9),n.Yb(10,"li",10),n.Yb(11,"a",11),n.Pc(12," ABOUT US"),n.Xb(),n.Xb(),n.Yb(13,"li",10),n.Yb(14,"a",12),n.Pc(15," JOB OPPORTUNITIES"),n.Xb(),n.Xb(),n.Yb(16,"li",10),n.Yb(17,"a",12),n.Pc(18," PARTNERS"),n.Xb(),n.Xb(),n.Yb(19,"li",10),n.Yb(20,"a",12),n.Pc(21," CONTACT US"),n.Xb(),n.Xb(),n.Xb(),n.Yb(22,"ul",9),n.Yb(23,"li",13),n.Nc(24,S,5,0,"a",14),n.Nc(25,I,5,0,"a",14),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Yb(26,"div",15),n.Yb(27,"div",16),n.Nc(28,C,30,4,"div",17),n.Nc(29,L,7,2,"div",18),n.Yb(30,"div",19),n.Nc(31,U,26,3,"div",20),n.Nc(32,H,4,1,"div",20),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Nc(33,G,1,0,"app-spinner-component",21)),2&t&&(n.Fb(24),n.tc("ngIf",e.isLogin||e.isForgotPassword||e.isVerifyOTP),n.Fb(1),n.tc("ngIf",e.isSignUp),n.Fb(3),n.tc("ngIf",e.isLogin),n.Fb(1),n.tc("ngIf",e.isForgotPassword||e.isResetPassword),n.Fb(2),n.tc("ngIf",e.isSignUp),n.Fb(1),n.tc("ngIf",e.isVerifyOTP),n.Fb(1),n.tc("ngIf",e.isServiceRunning))},directives:[P.b,d.j,c.s,a.m,c.e,p.y,p.o,p.h,p.c,p.v,p.n,p.f,x.a,p.p,p.e,X.c,X.g,Y.b,X.b,k.b,p.q,c.k,O.a],styles:["*[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.active-button[_ngcontent-%COMP%]:hover{background-color:#0e2043;color:#fff!important;border-radius:6px}.logo-header[_ngcontent-%COMP%]{height:auto;width:auto;max-width:170px!important}.linked-in-color[_ngcontent-%COMP%]{color:#0077b7!important}.facebook-color[_ngcontent-%COMP%]{color:#3d548e!important}.site-button.button-lg[_ngcontent-%COMP%]{font-size:14px;font-weight:700;padding:14px 30px;text-transform:uppercase}.p-a30[_ngcontent-%COMP%]{padding:30px}.border-1[_ngcontent-%COMP%]{border:1px solid #dfdfdf}.h4[_ngcontent-%COMP%]{font-size:24px;line-height:28px;margin-bottom:15px}.h3[_ngcontent-%COMP%]{font-size:28px;line-height:35px;margin-bottom:20px;font-weight:500}.p[_ngcontent-%COMP%]{line-height:24px;margin-bottom:24px}.list-inline[_ngcontent-%COMP%]{padding-left:0;list-style:none}.label[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:16px;font-weight:400;color:#6f6f6f;font-weight:600;margin-bottom:10px}.site-button[_ngcontent-%COMP%]{position:relative;z-index:1;overflow:hidden;vertical-align:middle}.site-button.circle[_ngcontent-%COMP%]{width:40px;height:40px;padding:0;border-radius:40px;line-height:39px;background:#fff}.site-button.outline-2[_ngcontent-%COMP%]{border-width:2px}.site-button.outline[_ngcontent-%COMP%]{background:none;border-style:solid;border-color:inherit}.form-control[_ngcontent-%COMP%]{background:#f9faff none repeat scroll 0 0;border:0;font-size:16px;height:50px;padding:0 20px}.tab-content[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%]{display:block}.a[_ngcontent-%COMP%]{transition:all .2s linear;outline:0 none;text-decoration:none}.container[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.myfont-size[_ngcontent-%COMP%]{font-size:15px;font-weight:600;font-family:Lato,sans-serif;color:#000}"]}),t})();var Z=i("fJ1W");const Q=[{path:"login",component:W},{path:"",redirectTo:"login",pathMatch:"full"},{path:"login/:code/:user",component:W},{path:"referer",loadChildren:()=>Promise.all([i.e(2),i.e(15)]).then(i.bind(null,"7UCR")).then(t=>t.UserModule),canActivate:[Z.a]},{path:"admin",loadChildren:()=>Promise.all([i.e(2),i.e(3),i.e(13)]).then(i.bind(null,"jkDv")).then(t=>t.AdminModule),canActivate:[Z.a]},{path:"recruiter",loadChildren:()=>Promise.all([i.e(2),i.e(3),i.e(14)]).then(i.bind(null,"mXZA")).then(t=>t.EmployerModule),canActivate:[Z.a]},{path:"**",redirectTo:"login"}];let K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Qb({type:t}),t.\u0275inj=n.Pb({imports:[[d.k.forRoot(Q,{preloadingStrategy:d.e,relativeLinkResolution:"legacy"})],d.k]}),t})();var $=i("PCNd"),tt=i("R1ws");i("iqUP").initializeApp(o.b);let et=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Qb({type:t,bootstrap:[h]}),t.\u0275inj=n.Pb({providers:[{provide:d.f,useClass:c.o}],imports:[[tt.b,r.a,K,a.c,K,$.a,P.a]]}),t})();o.a.production&&Object(n.X)(),r.c().bootstrapModule(et).catch(t=>console.log(t))},zn8P:function(t,e){function i(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id="zn8P"}},[[0,1,12]]]);