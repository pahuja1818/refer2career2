(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0dfH":function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("fXoL"),o=i("ofXK");function s(t,e){if(1&t&&(n.Yb(0,"div",1),n.Yb(1,"div",2),n.Tb(2,"img",3),n.Yb(3,"span",4),n.Pc(4),n.Xb(),n.Yb(5,"small",5),n.Pc(6),n.Xb(),n.Xb(),n.Xb()),2&t){const t=n.nc();n.Fb(4),n.Qc(t.title),n.Fb(2),n.Qc(t.message)}}let r=(()=>{class t{constructor(){this.title="Sorry!",this.message="Visit after Sometime",this.visibility=!0,this.isError=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["app-not-found"]],inputs:{title:"title",message:"message",visibility:"visibility",isError:"isError"},decls:1,vars:1,consts:[["class","w-100 vertical-center",4,"ngIf"],[1,"w-100","vertical-center"],[1,"flex-column","d-flex","align-items-center","vertical-center","w-100"],["src","../../../../assets/not-found-search.png",1,"img-login"],[1,"text-semibold","text-md"],[1,"text-smd","text-semibold","text-center",2,"width","75%"]],template:function(t,e){1&t&&n.Nc(0,s,7,2,"div",0),2&t&&n.tc("ngIf",e.visibility)},directives:[o.m],styles:[""]}),t})()},Fg4b:function(t,e,i){"use strict";i.d(e,"a",function(){return _});var n=i("3Pt+"),o=i("fXoL"),s=i("hLKV"),r=i("tyNb"),c=i("IYfF"),a=i("ofXK"),l=i("5RNC"),b=i("1jcm"),d=i("bSwM"),f=i("0dfH"),p=i("eDag");function m(t,e){1&t&&(o.Yb(0,"span",26),o.Pc(1," arrow_drop_down "),o.Xb())}function h(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",32),o.Yb(1,"div",33),o.Yb(2,"span",34),o.jc("click",function(){return o.Hc(t),o.nc(3).isSortBy=!0}),o.Pc(3,"Relevance"),o.Xb(),o.Xb(),o.Yb(4,"div",33),o.Yb(5,"span",34),o.jc("click",function(){return o.Hc(t),o.nc(3).isSortBy=!1}),o.Pc(6,"Date"),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.nc(3);o.Fb(2),o.tc("ngClass",!0===t.isSortBy?"sort-by-selected":"sort-by-not-selected"),o.Fb(3),o.tc("ngClass",!1===t.isSortBy?"sort-by-selected":"sort-by-not-selected")}}function u(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isSortByExpanded=!e.isSortByExpanded}),o.Yb(2,"span",29),o.Pc(3,"Sort By"),o.Xb(),o.Yb(4,"span",30),o.Pc(5,"expand_more"),o.Xb(),o.Xb(),o.Nc(6,h,7,2,"div",31),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isSortByExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isSortByExpanded)}}function g(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",36),o.Yb(1,"label",37),o.Pc(2,"Minimum Experience req. (in years)"),o.Xb(),o.Yb(3,"mat-slider",38),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.minExp=e}),o.Xb(),o.Xb()}if(2&t){const t=o.nc(3);o.Fb(3),o.tc("ngModel",t.refine.minExp)}}function x(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isExperienceExpanded=!e.isExperienceExpanded}),o.Yb(2,"span",29),o.Pc(3,"Experience"),o.Xb(),o.Yb(4,"span",30),o.Pc(5,"expand_more"),o.Xb(),o.Xb(),o.Nc(6,g,4,1,"div",35),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isExperienceExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isExperienceExpanded)}}function v(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",40),o.Yb(1,"div",41),o.Yb(2,"span",42),o.Pc(3,"Part time"),o.Xb(),o.Yb(4,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.partTime=e}),o.Xb(),o.Xb(),o.Yb(5,"div",44),o.Yb(6,"span",42),o.Pc(7,"Full time"),o.Xb(),o.Yb(8,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.fullTime=e}),o.Xb(),o.Xb(),o.Yb(9,"div",44),o.Yb(10,"span",42),o.Pc(11,"Contractual"),o.Xb(),o.Yb(12,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.contractual=e}),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.nc(3);o.Fb(4),o.tc("ngModel",t.refine.partTime),o.Fb(4),o.tc("ngModel",t.refine.fullTime),o.Fb(4),o.tc("ngModel",t.refine.contractual)}}function y(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isPartTimeExpanded=!e.isPartTimeExpanded}),o.Yb(2,"span",29),o.Pc(3,"Job Type"),o.Xb(),o.Yb(4,"span",30),o.Pc(5," expand_more"),o.Xb(),o.Xb(),o.Nc(6,v,13,3,"div",39),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isPartTimeExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isPartTimeExpanded)}}function P(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",40),o.Yb(1,"div",41),o.Yb(2,"span",42),o.Pc(3,"Jobs"),o.Xb(),o.Yb(4,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.jobs=e}),o.Xb(),o.Xb(),o.Yb(5,"div",44),o.Yb(6,"span",42),o.Pc(7,"Internships"),o.Xb(),o.Yb(8,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.internships=e}),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.nc(3);o.Fb(4),o.tc("ngModel",t.refine.jobs),o.Fb(4),o.tc("ngModel",t.refine.internships)}}function X(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isJobCategoryExpanded=!e.isJobCategoryExpanded}),o.Yb(2,"span",29),o.Pc(3,"Job Category"),o.Xb(),o.Yb(4,"span",30),o.Pc(5," expand_more"),o.Xb(),o.Xb(),o.Nc(6,P,9,2,"div",39),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isJobCategoryExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isJobCategoryExpanded)}}function Y(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",36),o.Yb(1,"mat-slide-toggle",43),o.jc("ngModelChange",function(e){return o.Hc(t),o.nc(3).refine.remote=e}),o.Xb(),o.Xb()}if(2&t){const t=o.nc(3);o.Fb(1),o.tc("ngModel",t.refine.remote)}}function w(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isRemoteExpanded=!e.isRemoteExpanded}),o.Yb(2,"span",29),o.Pc(3,"Remote"),o.Xb(),o.Yb(4,"span",30),o.Pc(5,"expand_more"),o.Xb(),o.Xb(),o.Nc(6,Y,2,1,"div",35),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isRemoteExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isRemoteExpanded)}}function j(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div"),o.Yb(1,"section",48),o.Yb(2,"mat-checkbox",49),o.jc("change",function(i){o.Hc(t);const n=e.$implicit;return o.nc(4).updateLocation(i,n)}),o.Pc(3),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit,i=o.nc(4);o.Fb(2),o.tc("checked",i.checkLocation(t)),o.Fb(1),o.Rc(" ",t," ")}}function I(t,e){if(1&t&&(o.Yb(0,"div",46),o.Nc(1,j,4,2,"div",47),o.Xb()),2&t){const t=o.nc(3);o.Fb(1),o.tc("ngForOf",t.allLocations)}}function J(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",27),o.Yb(1,"div",28),o.jc("click",function(){o.Hc(t);const e=o.nc(2);return e.isLocationExpanded=!e.isLocationExpanded}),o.Yb(2,"span",29),o.Pc(3,"Location"),o.Xb(),o.Yb(4,"span",30),o.Pc(5,"expand_more"),o.Xb(),o.Xb(),o.Nc(6,I,2,1,"div",45),o.Xb()}if(2&t){const t=o.nc(2);o.Fb(4),o.tc("ngClass",!0===t.isLocationExpanded?"rotate-right":"rotate-left"),o.Fb(2),o.tc("ngIf",t.isLocationExpanded)}}function k(t,e){if(1&t){const t=o.Zb();o.Yb(0,"button",50),o.jc("click",function(){return o.Hc(t),o.nc(2).refineJobs()}),o.Pc(1,"Refine Jobs"),o.Xb()}}function F(t,e){if(1&t){const t=o.Zb();o.Yb(0,"button",51),o.jc("click",function(){return o.Hc(t),o.nc(2).clearFilter()}),o.Pc(1,"Clear Filter"),o.Xb()}}function S(t,e){1&t&&o.Tb(0,"app-not-found",52)}function E(t,e){if(1&t&&o.Tb(0,"img",82),2&t){const t=o.nc().$implicit;o.uc("src",t.jobPost.companyLogo,o.Ic)}}function C(t,e){if(1&t&&(o.Yb(0,"div",69),o.Yb(1,"span",83),o.Pc(2,"location_on"),o.Xb(),o.Yb(3,"span",84),o.Pc(4),o.Xb(),o.Xb()),2&t){const t=o.nc().$implicit;o.Fb(4),o.Rc("\xa0",t.jobPost.location,"")}}function N(t,e){1&t&&(o.Yb(0,"div",69),o.Yb(1,"span",83),o.Pc(2,"home"),o.Xb(),o.Yb(3,"span",85),o.Pc(4,"Work from home"),o.Xb(),o.Xb())}function D(t,e){1&t&&(o.Yb(0,"div",86),o.Yb(1,"div",87),o.Pc(2,"Applied"),o.Xb(),o.Xb())}function M(t,e){if(1&t&&(o.Yb(0,"div",89),o.Pc(1),o.Xb()),2&t){const t=o.nc(2).$implicit;o.Fb(1),o.Rc(" ",t.jobPost.skills[1].skillName," ")}}function O(t,e){if(1&t&&(o.Yb(0,"div",88),o.Yb(1,"div",89),o.Pc(2),o.Xb(),o.Nc(3,M,2,1,"div",90),o.Xb()),2&t){const t=o.nc().$implicit;o.Fb(2),o.Rc(" ",t.jobPost.skills[0].skillName," "),o.Fb(1),o.tc("ngIf",t.jobPost.skills.length>1)}}function T(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",53),o.jc("click",function(){o.Hc(t);const i=e.$implicit;return o.nc(2).seeDetails(i)}),o.Yb(1,"div",54),o.Yb(2,"div",55),o.Yb(3,"div",56),o.Yb(4,"div",57),o.Yb(5,"span"),o.Nc(6,E,1,1,"img",58),o.Xb(),o.Xb(),o.Yb(7,"div",59),o.Yb(8,"h4"),o.Pc(9),o.Xb(),o.Yb(10,"div",60),o.Yb(11,"div",61),o.Yb(12,"div",62),o.Yb(13,"span",63),o.Pc(14,"work"),o.Xb(),o.Yb(15,"span",64),o.Pc(16,"Experience : "),o.Xb(),o.Yb(17,"span",65),o.Pc(18),o.Xb(),o.Xb(),o.Yb(19,"div",62),o.Yb(20,"span",66),o.Pc(21,"business"),o.Xb(),o.Yb(22,"span",64),o.Pc(23,"Company : "),o.Xb(),o.Yb(24,"span",65),o.Pc(25),o.Xb(),o.Xb(),o.Xb(),o.Yb(26,"div",67),o.Nc(27,C,5,1,"div",68),o.Nc(28,N,5,0,"div",68),o.Yb(29,"div",69),o.Yb(30,"span",70),o.Pc(31," schedule "),o.Xb(),o.Yb(32,"span",71),o.Pc(33),o.oc(34,"date"),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Nc(35,D,3,0,"div",72),o.Xb(),o.Yb(36,"div",73),o.Nc(37,O,4,2,"div",74),o.Yb(38,"div",75),o.Yb(39,"div",76),o.Yb(40,"div",77),o.Pc(41),o.Xb(),o.Xb(),o.Yb(42,"div",78),o.Yb(43,"span",79),o.Pc(44),o.Xb(),o.Yb(45,"div",80),o.Yb(46,"span",81),o.Pc(47),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=e.$implicit;o.Fb(6),o.tc("ngIf",t.jobPost.companyLogo),o.Fb(3),o.Qc(t.jobPost.title),o.Fb(9),o.Rc("\xa0",t.jobPost?t.jobPost.experience:""," years"),o.Fb(7),o.Rc("\xa0",t.jobPost.companyName,""),o.Fb(2),o.tc("ngIf","In office"===t.jobPost.jobType),o.Fb(1),o.tc("ngIf","In office"!==t.jobPost.jobType),o.Fb(5),o.Rc("Published on\xa0",o.qc(34,12,t.jobPost.createdAt,"dd MMMM yyyy"),""),o.Fb(2),o.tc("ngIf",t.isApplied),o.Fb(2),o.tc("ngIf",t.jobPost.skills.length>0),o.Fb(4),o.Rc("REWARD : \u20b9",t.referReward,""),o.Fb(3),o.Rc("\xa0 \u20b9 ",t.jobPost.salary,""),o.Fb(3),o.Qc(t.jobPost.salaryType)}}function R(t,e){if(1&t){const t=o.Zb();o.Yb(0,"div",2),o.Yb(1,"div",3),o.Yb(2,"div",4),o.Yb(3,"div",5),o.Yb(4,"h5",6),o.Pc(5),o.Xb(),o.Xb(),o.Xb(),o.Yb(6,"div",7),o.Yb(7,"div",8),o.Yb(8,"div",9),o.Yb(9,"input",10),o.jc("input",function(){return o.Hc(t),o.nc().filterJobPosts()}),o.Xb(),o.Xb(),o.Yb(10,"button",11),o.jc("click",function(){return o.Hc(t),o.nc().filterJobPosts()}),o.Pc(11,"Search "),o.Xb(),o.Xb(),o.Xb(),o.Xb(),o.Yb(12,"div",12),o.Yb(13,"div",13),o.Yb(14,"div",14),o.Yb(15,"div",15),o.jc("click",function(){return o.Hc(t),o.nc().openRefineJobs()}),o.Pc(16," Refine Jobs "),o.Nc(17,m,2,0,"span",16),o.Xb(),o.Nc(18,u,7,2,"div",17),o.Nc(19,x,7,2,"div",17),o.Nc(20,y,7,2,"div",17),o.Nc(21,X,7,2,"div",17),o.Nc(22,w,7,2,"div",17),o.Nc(23,J,7,2,"div",17),o.Yb(24,"div",18),o.Nc(25,k,2,0,"button",19),o.Nc(26,F,2,0,"button",20),o.Xb(),o.Xb(),o.Yb(27,"div",21),o.Nc(28,S,1,0,"app-not-found",22),o.Nc(29,T,48,15,"div",23),o.Xb(),o.Xb(),o.Xb(),o.Yb(30,"div",24),o.Yb(31,"div",25),o.Pc(32,"\xa9 2021 Refer 2 Career. All Rights Reserved. "),o.Xb(),o.Xb(),o.Xb()}if(2&t){const t=o.nc();o.Fb(5),o.Rc("Showing ",t.filteredJobPosts.length," Jobs"),o.Fb(4),o.tc("formControl",t.myControl),o.Fb(8),o.tc("ngIf",!t.isScreenBig),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(1),o.tc("ngIf",t.refineJobsDropDown),o.Fb(2),o.tc("ngIf",t.isChanged()),o.Fb(1),o.tc("ngIf",t.isFilterAdded()),o.Fb(2),o.tc("ngIf",0===t.filteredJobPosts.length),o.Fb(1),o.tc("ngForOf",t.filteredJobPosts)}}function L(t,e){1&t&&o.Tb(0,"app-spinner-component")}let _=(()=>{class t{constructor(t,e,i){this.jobPostService=t,this.router=e,this.authService=i,this.role=JSON.parse(window.atob(window.localStorage.getItem("id"))).role,this.allJobPost=[],this.filteredJobPosts=[],this.myControl=new n.d,this.options=["Delivery boy","Software engineer","UI designer"],this.isSortByExpanded=!1,this.isLocationExpanded=!1,this.isPartTimeExpanded=!1,this.isJobCategoryExpanded=!1,this.isRemoteExpanded=!1,this.isExperienceExpanded=!1,this.allLocations=new Set,this.selectedLocations=new Set,this.selectedLocationsArray=[],this.isRelevent=!1,this.isServiceRunning=!1,this.isSortBy=!1,this.isScreenBig=!1,this.refineInitial={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refineDefaultInitial={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refine={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refineJobsDropDown=!1,this.allMyApplications=[],this.user=JSON.parse(window.atob(window.localStorage.getItem("id")))}isChanged(){return!(JSON.stringify(this.refine)===JSON.stringify(this.refineInitial))}isFilterAdded(){return!(JSON.stringify(this.refine)===JSON.stringify(this.refineDefaultInitial))}closeSortBy(t){this.isSortBy=t,this.isSortByExpanded=!1}openRefineJobs(){this.isScreenBig||(this.refineJobsDropDown=!this.refineJobsDropDown)}getMyApplication(){this.authService.find({collection:"applyJob",query:{candidateId:this.user._id},selectedFields:{jobPostId:1,_id:0}}).subscribe(t=>{t.data&&(this.allMyApplications=t.data,this.checkJobPosts())})}checkJobPosts(){this.allJobPost.forEach(t=>{this.allMyApplications.find(e=>e.jobPostId===t._id)&&(t.isApplied=!0)})}clearFilter(){this.refineInitial.partTime=this.refineDefaultInitial.partTime,this.refineInitial.fullTime=this.refineDefaultInitial.fullTime,this.refineInitial.jobs=this.refineDefaultInitial.jobs,this.refineInitial.internships=this.refineDefaultInitial.internships,this.refineInitial.remote=this.refineDefaultInitial.remote,this.refineInitial.minExp=this.refineDefaultInitial.minExp,this.refineInitial.location=this.refineDefaultInitial.location,this.refine.partTime=this.refineDefaultInitial.partTime,this.refine.fullTime=this.refineDefaultInitial.fullTime,this.refine.jobs=this.refineDefaultInitial.jobs,this.refine.internships=this.refineDefaultInitial.internships,this.refine.remote=this.refineDefaultInitial.remote,this.refine.minExp=this.refineDefaultInitial.minExp,this.refine.location=this.refineDefaultInitial.location,this.selectedLocations.clear(),this.refineJobs(),this.isSortByExpanded=!1,this.isLocationExpanded=!1,this.isPartTimeExpanded=!1,this.isJobCategoryExpanded=!1,this.isRemoteExpanded=!1,this.isExperienceExpanded=!1}ngOnInit(){window.screen.width>1150&&(this.isScreenBig=!0,this.refineJobsDropDown=!0),this.isServiceRunning=!0,this.authService.find({collection:"jobposts",query:{"jobPost.verified":!0}}).subscribe(t=>{t.data.length>0&&(this.filteredJobPosts=t.data,this.allJobPost=t.data,this.getMyApplication(),this.sortByDate(),this.isServiceRunning=!1)}),this.authService.find({collection:"jobposts",query:{"jobPost.verified":!0},selectedFields:{"jobPost.location":1,_id:0}}).subscribe(t=>{t.data.length>0&&t.data.forEach(t=>{this.allLocations.add(t.jobPost.location)})})}seeDetails(t){2===this.role?this.router.navigateByUrl("/referer/jobs/job-detail/"+t._id):0===this.role?this.router.navigateByUrl("/admin/jobs/detail/"+t._id):1===this.role&&this.router.navigateByUrl("/recruiter/job-posts/detail/"+t._id)}_filter(t){const e=t.toLowerCase();return this.options.filter(t=>0===t.toLowerCase().indexOf(e))}filterJobPosts(){let t=this.myControl.value;t=t?t.toLowerCase():"",this.filteredJobPosts=[],this.allJobPost.forEach((e,i)=>{if(e.jobPost.title.toLowerCase().includes(t)&&this.filteredJobPosts.push(JSON.stringify(e)),e.jobPost.skills.forEach(i=>{i.skillName.toLowerCase().includes(t)&&this.filteredJobPosts.push(JSON.stringify(e))}),this.allJobPost.length===i+1){const t=[...new Set(this.filteredJobPosts)];this.filteredJobPosts=[],t.forEach(t=>{this.filteredJobPosts.push(JSON.parse(t))})}})}sortByDate(){this.filteredJobPosts.sort((t,e)=>{const i=new Date(t.jobPost.createdAt);return new Date(e.jobPost.createdAt)-i})}getExperience(t){return""+t}getStartDate(t){const e=new Date,i=new Date(t),n=Math.abs(i-e);return Math.ceil(n/864e5)>=7}updateLocation(t,e){!0===t.checked?this.selectedLocations.add(e):this.selectedLocations.delete(e),this.refine.location=[...this.selectedLocations]}checkLocation(t){return this.selectedLocations.has(t)}refineJobs(){this.isServiceRunning=!0;const t={collection:"jobposts",query:{"jobPost.verified":!0}};this.refine.partTime&&this.refine.fullTime||(this.refine.partTime?t.query["jobPost.partTime"]=this.refine.partTime:this.refine.fullTime&&(t.query["jobPost.partTime"]=!1)),this.refine.jobs&&this.refine.internships||(this.refine.jobs?t.query["jobPost.jobInternship"]="Job":this.refine.internships&&(t.query["jobPost.jobInternship"]="Internship")),this.refine.remote&&(t.query["jobPost.jobType"]=this.refine.remote?"Work from home":"In office"),this.selectedLocations.size>0&&(t.query["jobPost.location"]={$in:[...this.selectedLocations]}),this.refine.minExp>0&&(t.query["jobPost.experience"]={$gt:this.refine.minExp?this.refine.minExp-1:0}),this.authService.find(t).subscribe(t=>{t.data&&(this.filteredJobPosts=t.data,this.allJobPost=t.data,this.checkJobPosts(),this.refineInitial.partTime=this.refine.partTime,this.refineInitial.fullTime=this.refine.fullTime,this.refineInitial.jobs=this.refine.jobs,this.refineInitial.internships=this.refine.internships,this.refineInitial.remote=this.refine.remote,this.refineInitial.minExp=this.refine.minExp,this.refineInitial.location=this.refine.location,this.isScreenBig||(this.refineJobsDropDown=!1),this.filterJobPosts(),this.sortByDate(),this.isServiceRunning=!1)})}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.a),o.Sb(r.g),o.Sb(c.a))},t.\u0275cmp=o.Mb({type:t,selectors:[["app-all-job-posts"]],decls:2,vars:2,consts:[["class","w-100 h-100 m-0 p-0","style","overflow: auto; border-radius: 7px; background-color: #f8f8f8",4,"ngIf"],[4,"ngIf"],[1,"w-100","h-100","m-0","p-0",2,"overflow","auto","border-radius","7px","background-color","#f8f8f8"],[1,"row","col-sm-10","justify-content-center","px-0","pt-2","mx-auto"],[1,"col-sm-3","d-flex","justify-content-center"],[1,"m-2","d-flex","justify-content-center","vertical-center"],[1,"text-bold","p-3"],[1,"col-sm-9","justify-content-center"],[1,"row","col-sm-12","justify-content-center","vertical-center","shadow","bg-white","p-2","border-6","mx-auto"],[1,"col-sm-10","vertical-center","justify-content-center"],["type","text","placeholder","Search by skills or job title",1,"no-border","bg-white","text-black",2,"width","95%",3,"formControl","input"],[1,"col-sm-2","btn","btn-primary","px-2","py-1","border-6",3,"click"],[1,"row","col-sm-12","justify-content","center","px-0","bg-lightest-blue","mx-0"],[1,"row","col-sm-10","justify-content-center","px-0","pt-2","mx-auto","mt-4"],[1,"col-sm-3","mt-2"],[1,"border-12","m-2","mr-2","w-100","bg-white","overlay","text-dark","p-3","semi-bold","text-ssmd","vertical-center","justify-content-between",3,"click"],["class","material-icons",4,"ngIf"],["class","border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3",4,"ngIf"],[1,"row","col-sm-12","justify-content-center","mx-auto"],["class","overlay btn btn-primary mx-auto text-smd","style","border-radius: 30px; bottom: 0",3,"click",4,"ngIf"],["class","overlay btn btn-primary text-smd","style","border-radius: 30px; bottom: 0",3,"click",4,"ngIf"],[1,"col-sm-9","mx-0","mt-2","p-0"],["message","We couldn't find any results. Change selected filters or try later.","style","margin-top: 6rem !important;","class","center-parent",4,"ngIf"],["class","m-2 mr-2 mb-3 ",3,"click",4,"ngFor","ngForOf"],[1,"footer-bottom","bg-primary"],[1,"text-center","text-white","py-3","px-2"],[1,"material-icons"],[1,"border-12","text-link","m-2","mr-2","w-100","bg-white","overlay","p-3"],[1,"vertical-center","justify-content-between",3,"click"],[1,"text-ssmd"],[1,"material-icons","text-grey","text-md","bold",3,"ngClass"],["class","my-2 row vertical-center justify-content-center",4,"ngIf"],[1,"my-2","row","vertical-center","justify-content-center"],[1,"m-2"],[1,"px-3","py-1",2,"border-radius","20px",3,"ngClass","click"],["class","my-2",4,"ngIf"],[1,"my-2"],[1,"text-sm","text-grey"],["thumbLabel","","displayWith","","tickInterval","1","min","0","max","10",1,"w-100",3,"ngModel","ngModelChange"],["class","my-2 p-2",4,"ngIf"],[1,"my-2","p-2"],[1,"mb-3","vertical-center"],[1,"text-sm","semi-bold","text-grey","mr-2"],[3,"ngModel","ngModelChange"],[1,"mb-2","vertical-center"],["class","px-3 pt-3 pb-1",4,"ngIf"],[1,"px-3","pt-3","pb-1"],[4,"ngFor","ngForOf"],[1,"example-section"],[1,"example-margin","text-uppercase",3,"checked","change"],[1,"overlay","btn","btn-primary","mx-auto","text-smd",2,"border-radius","30px","bottom","0",3,"click"],[1,"overlay","btn","btn-primary","text-smd",2,"border-radius","30px","bottom","0",3,"click"],["message","We couldn't find any results. Change selected filters or try later.",1,"center-parent",2,"margin-top","6rem !important"],[1,"m-2","mr-2","mb-3",3,"click"],[1,"card","border-4","shadow-lg","p-3","text-link","border-8"],[1,"d-flex","mb-3","justify-content-between"],[1,"d-flex","flex-wrap"],[1,"mr-3","mb-2"],["class","border-6","style","height: 60px; width: 58.2px;",3,"src",4,"ngIf"],[1,"text-left"],[1,"column"],[1,"d-flex","vertical-center","flex-wrap"],[1,"vertical-center","justify-content-start","mr-3"],[1,"material-icons-outlined","mr-2","text-primary"],[1,"text-lato","text-primary","d-inline"],[1,"text-lato","text-primary"],[1,"material-icons","mr-2","text-primary"],[1,"d-flex","flex-wrap","mt-1"],["class"," vertical-center justify-content-start mr-2",4,"ngIf"],[1,"vertical-center","justify-content-start","mr-2"],[1,"material-icons","text-md","mr-2","text-primary"],[1,"text-smd","text-lato","text-primary"],["class"," d-flex align-items-start justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-between","flex-wrap","vertical-center"],["class","my-2 d-flex vertical-center flex-wrap",4,"ngIf"],[1,"d-flex","vertical-center","flex-wrap","justify-content-between"],[1,"justify-content-between","vertical-center","mr-2"],[1,"btn","btn-primary","px-2","py-1","mr-2","border-6","text-white","text-lato","text-sm"],[1,"my-2","vertical-center","justify-content-start"],[1,"text-black","text-slmd"],[1,"d-flex","ml-1","align-self-end"],[1,"text-fluid"],[1,"border-6",2,"height","60px","width","58.2px",3,"src"],[1,"material-icons-outlined","text-md","mr-2","text-primary"],[1,"text-lato","text-smd","text-primary"],[1,"text-lato","text-smd","text-primary","d-inline"],[1,"d-flex","align-items-start","justify-content-center"],[1,"p-2","bg-light","border-12"],[1,"my-2","d-flex","vertical-center","flex-wrap"],[1,"px-2","py-1","text-primary","bg-lightest-blue","mr-2","border-6","text-lato","text-sm"],["class","px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm",4,"ngIf"]],template:function(t,e){1&t&&(o.Nc(0,R,33,13,"div",0),o.Nc(1,L,1,0,"app-spinner-component",1)),2&t&&(o.tc("ngIf",!e.isServiceRunning),o.Fb(1),o.tc("ngIf",e.isServiceRunning))},directives:[a.m,n.c,n.n,n.e,a.l,a.k,l.a,n.q,b.a,d.a,f.a,p.a],pipes:[a.e],styles:[".sort-by-selected[_ngcontent-%COMP%]{border:1px solid #4b4b4b;color:#fff;background-color:#0e2043}.sort-by-not-selected[_ngcontent-%COMP%]{border:1px solid #4b4b4b;color:#0e2043;background-color:#e1e7ff}.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%],   .mat-step-header .mat-step-icon-selected{background-color:red!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,   .mat-form-field-appearance-outline .mat-form-field-outline{color:#fff!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:red!important;opacity:.8!important}  .mat-input-element{caret-color:#fff!important}.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%],   .mat-form-field-invalid .mat-input-element{caret-color:red!important}  .mat-form-field-label{color:hsla(0,0%,100%,.6)!important}  .mat-form-field.mat-focused .mat-form-field-label,   .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#fff!important}[_ngcontent-%COMP%]::-moz-placeholder{color:#a0a0a0;opacity:1}[_ngcontent-%COMP%]::placeholder{color:#a0a0a0;opacity:1}"]}),t})()},Xsf5:function(t,e,i){"use strict";i.d(e,"a",function(){return d});var n=i("fXoL"),o=i("K3ix"),s=i("tyNb"),r=i("+Cnu"),c=i("ofXK"),a=i("TEn/");function l(t,e){if(1&t){const t=n.Zb();n.Yb(0,"li",15),n.Yb(1,"a",16),n.jc("click",function(){n.Hc(t);const i=e.$implicit;return n.nc().navigate(i.route)}),n.Pc(2),n.Xb(),n.Xb()}if(2&t){const t=e.$implicit,i=n.nc();n.Fb(1),n.tc("ngClass",i.url.includes(t.route)?"active-url":""),n.Fb(1),n.Rc(" ",t.name,"")}}function b(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",17),n.Pc(1," Are you sure you want to logout? "),n.Yb(2,"div",18),n.Yb(3,"button",19),n.jc("click",function(){return n.Hc(t),n.nc().loggedOut()}),n.Pc(4,"Yes"),n.Xb(),n.Yb(5,"button",20),n.jc("click",function(){return n.Hc(t),n.nc().cancel()}),n.Pc(6,"No"),n.Xb(),n.Xb(),n.Xb()}}let d=(()=>{class t{constructor(t,e,i){this.modalRef=t,this.modalService=e,this.router=i,this.navItems=[],this.url="",this.isCollapsed=!0}navigate(t){this.isCollapsed=!0,this.router.navigateByUrl(t)}ngOnInit(){this.url=this.router.url}openModal(t){this.modalRef=this.modalService.show(t,{class:"half-modal",ignoreBackdropClick:!0,animated:!0})}cancel(){this.modalRef.hide()}loggedOut(){this.modalRef.hide(),window.localStorage.removeItem("id"),window.location.reload()}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(o.a),n.Sb(o.b),n.Sb(s.g))},t.\u0275cmp=n.Mb({type:t,selectors:[["app-nav-bar-content"]],inputs:{navItems:"navItems"},decls:19,vars:3,consts:[[1,"row","shadow","justify-content-center","p-0","m-0"],[1,"col-sm-12","shadow"],[1,"navbar","navbar-expand-lg","col-sm-11","navbar-light","bg-light","w-100"],[1,"nav-link","mr-1"],["src","../../../../assets/refer2carrierlogo.png","alt","",1,"logo-header"],["type","button","aria-expanded","false",1,"navbar-toggler","collapsed",3,"click"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"ml-3","collapse","navbar-collapse","vertical-center","justify-content-between",3,"collapse","isAnimated"],[1,"navbar-nav"],["class","nav-item mr-4",4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-primary"],[1,"vertical-center"],["name","lock-closed",1,"mr-1"],["logout",""],[1,"nav-item","mr-4"],[1,"nav-link","text-dark","myfont-size","text-link","active-button","pl-3","pr-3",3,"ngClass","click"],[1,"bg-white","box-shadow","text-lato","p-3","m-3",2,"border-radius","10px"],[1,"d-flex","justify-content-end","px-2","mt-2"],[1,"btn","btn-secondary","p-0","text-smd","px-2","mr-3",3,"click"],[1,"btn","btn-primary","text-smd","px-2","p-0",3,"click"]],template:function(t,e){if(1&t){const t=n.Zb();n.Yb(0,"div",0),n.Yb(1,"div",1),n.Yb(2,"nav",2),n.Yb(3,"a",3),n.Tb(4,"img",4),n.Xb(),n.Yb(5,"button",5),n.jc("click",function(){return e.isCollapsed=!e.isCollapsed}),n.Tb(6,"span",6),n.Xb(),n.Yb(7,"div",7),n.Yb(8,"ul",8),n.Nc(9,l,3,2,"li",9),n.Xb(),n.Yb(10,"ul",8),n.Yb(11,"li"),n.Yb(12,"a",10),n.jc("click",function(){n.Hc(t);const i=n.Ec(18);return e.openModal(i)}),n.Yb(13,"button",11),n.Yb(14,"span",12),n.Tb(15,"ion-icon",13),n.Pc(16,"LOGOUT "),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Nc(17,b,7,0,"ng-template",null,14,n.Oc)}2&t&&(n.Fb(7),n.tc("collapse",e.isCollapsed)("isAnimated",!0),n.Fb(2),n.tc("ngForOf",e.navItems))},directives:[r.a,c.l,a.e,c.k],styles:[".logo-header[_ngcontent-%COMP%]{height:auto;width:auto;max-width:180px!important}.active-button[_ngcontent-%COMP%]:hover, .active-url[_ngcontent-%COMP%]{background-color:#0e2043;color:#fff!important;border-radius:6px}.conatiner[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}"]}),t})()},hLKV:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("XNiG"),o=i("tk/3"),s=i("fXoL");let r=(()=>{class t{constructor(t){this.http=t,this.headers=new o.c({"content-type":"application/json"}),this.baseUrl="",this.post=void 0,this.jobPosts=new n.a,this.postDetail={},this.myApplications=new n.a,this.baseUrl=window.location.host.includes("localhost")?"http://localhost:8084":"",this.getPosts()}getMyApplications(){this.appliedJobPost({candidateId:JSON.parse(window.atob(window.localStorage.getItem("id")))._id}).subscribe(t=>{t.data&&this.myApplications.next(t.data)})}getPosts(){window.localStorage.getItem("id")&&(1===JSON.parse(window.atob(window.localStorage.getItem("id"))).role?this.getJobPostsByEmployer({_id:JSON.parse(window.atob(window.localStorage.getItem("id")))._id}).subscribe(t=>{this.jobPosts.next(t.data)}):this.getAllJobPosts().subscribe(t=>{this.jobPosts.next(t.data)}))}addJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/add/jobpost",e,{headers:this.headers})}updateJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/update/jobpost",e,{headers:this.headers})}deleteJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/delete/jobpost",e,{headers:this.headers})}getAllJobPosts(){return this.http.post(this.baseUrl+"/api/getAll/jobposts",{headers:this.headers})}getJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/get/jobpost",e,{headers:this.headers})}applyJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/apply/jobpost",e,{headers:this.headers})}appliedJobPost(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/applied/jobposts",e,{headers:this.headers})}getJobPostsByEmployer(t){const e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/employer/jobposts",e,{headers:this.headers})}}return t.\u0275fac=function(e){return new(e||t)(s.fc(o.a))},t.\u0275prov=s.Ob({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);