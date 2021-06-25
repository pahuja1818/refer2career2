(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "+C46":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/refered-profiles/refered-profiles.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C46(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <div class=\"w-100 h-100 m-0 p-0 justify-content-center\" *ngIf=\"!isServiceRunning\" style=\"background-color: #f8f8f8\">\r\n    <div class=\"col-sm-10 row p-0 mx-auto vertical-center justify-content-around\">\r\n        <div class=\"d-flex flex-column semi-bold  m-0 p-0 mr-3\">\r\n          <span class=\"text-black text-lg\">{{allReferedProfiles.length}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Referred Profiles</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column semi-bold  m-0 p-0 mr-3\">\r\n          <span class=\"text-black text-lg\">{{shortlistedJobs}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Shortlisted</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column semi-bold m-0 p-0 \">\r\n          <span class=\"text-black text-lg\">{{hiredJobs}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Hired</h6>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center bg-lightest-blue p-2 mb-2\">\r\n      <div class=\"col-sm-9 mx-0 mt-2 p-0  \">\r\n        <app-not-found *ngIf=\"allReferedProfiles.length === 0\" style=\"margin-top: 200px !important;\"\r\n          class=\"center-parent\">\r\n        </app-not-found>\r\n        <div class=\"col-sm-12 justify-content-center mx-auto\" *ngIf=\"!isServiceRunning\">\r\n          <div class=\"m-2 mr-2 mb-3\" *ngFor=\"let profile of allReferedProfiles; index as index\">\r\n            <div class=\"card  shadow-lg p-3 text-link border-8\">\r\n              <div class=\"col-sm-12 m-auto\">\r\n                <div class=\"row col-sm-12 justify-content-start \" (click)=\"seeDetails(profile.jobId)\">\r\n                  <h4>{{profile.jobTitle}}</h4>\r\n                  <!-- <span class=\"semi-bold d-block w-100 text-left\"\r\n                  style=\"color: rgb(93, 35, 141);\">{{profile.companyName}}</span> -->\r\n                </div>\r\n                <div class=\"d-flex flex-column\">\r\n                  <div class=\"d-flex vertical-center flex-wrap justify-content-start my-1\">\r\n                    <div class=\"d-flex vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined mr-2 text-primary\">account_circle</span>\r\n                      <span class=\"text-lato text-primary d-inline\">Name : {{profile.name}}</span>\r\n                    </div>\r\n                    <div class=\" d-flex vertical-center justify-content-start\">\r\n                      <span class=\"material-icons-outlined mr-2 text-primary\">email</span>\r\n                      <span class=\"text-lato text-primary d-inline\">Email : {{profile.email}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex vertical-center flex-wrap justify-content-start my-2\">\r\n                    <div class=\"d-flex vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined mr-2 text-primary\">today</span>\r\n                      <span class=\"text-lato text-primary d-inline\">Referred on : {{profile.createdAt | date: 'dd MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                    <div class=\"d-flex vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\r\n                      <span class=\" text-lato text-primary\"> &nbsp; {{profile.companyName}}</span>\r\n                    </div>\r\n                    <div class=\"d-flex vertical-center justify-content-start\">\r\n                      <span class=\"material-icons  mr-2 text-primary\">\r\n                        autorenew\r\n                        </span>\r\n                      <span class=\"text-lato text-primary\">Status: <span class=\"text-lato text-primary\">{{profile.status ?\r\n                        profile.status : 'Submitted'}}</span></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-between flex-wrap my-2\">\r\n                  <div class=\"btn btn-primary text-sm text-link py-1 px-2 \" (click)=\" openResume(profile.resume)\"><span\r\n                      class=\"material-icons text-sm vertical-center\"><span class=\"material-icons-outlined\">\r\n                        cloud_download\r\n                      </span><span class=\"text-lato ml-1\">Resume</span></span></div>\r\n                  <div class=\"btn btn-primary text-link py-1 px-2 \"\r\n                    (click)=\"profile.isStatus = !profile.isStatus\"><span\r\n                      class=\"material-icons text-sm  vertical-center\"><span class=\"material-icons-outlined\">\r\n                        expand_more\r\n                      </span><span class=\"text-lato text-sm ml-1\">More Details</span></span></div>\r\n                </div>\r\n                <div class=\"w-100 pt-3\" id=\"collapseBasic\" [collapse]=\"profile.isStatus\" [isAnimated]=\"true\">\r\n                  <hr class=\"w-100\">\r\n                  <div class=\"d-flex justify-content-start mt-3\">\r\n                    <span class=\"material-icons mt-1 text-xs text-primary mr-2\">circle</span>\r\n                    <div>\r\n                      <span class=\"text-dark d-block text-sm semi-bold\">Submitted</span>\r\n                      <span class=\"text-grey d-block text-sm\">{{profile.createdAt | date: 'dd MMMM yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"profile.statusArray\">\r\n                    <div *ngIf=\"profile.statusArray.length > 0\">\r\n                      <div *ngFor=\"let status of profile.statusArray\" class=\"mt-3\">\r\n                        <div class=\"d-flex justify-content-start w-100\">\r\n                          <span class=\"material-icons mt-1 text-xs text-primary mr-2\">circle</span>\r\n                          <div>\r\n                            <span class=\"text-dark d-block text-sm semi-bold\">{{status.name}}</span>\r\n                            <span class=\"text-grey d-block text-sm\">{{status.date | date: 'dd MMMM yyyy'}}</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"d-flex mt-3 justify-content-end\"\r\n                        *ngIf=\"profile.statusArray[profile.statusArray.length - 1].name !== 'Rejected'\">\r\n                        <div class=\"btn btn-primary text-sm text-link py-1 px-2 text-lato\"\r\n                          (click)=\"profile.status === 'Hired' ? openModal(form, index) : openModal(error, index)\">Encashment</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"footer-bottom bg-primary \">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\r\n\r\n\r\n<ng-template #error>\r\n  <div class=\"bg-white box-shadow p-3 m-3 text-center\" style=\"border-radius: 10px;\">\r\n    <span class=\"\">You can only make encashment request after 90 days of Hire. </span>\r\n    <div class=\"d-flex justify-content-center px-2 mt-4\">\r\n      <button class=\"btn btn-outline-primary p-0 text-smd px-2 mr-3\" (click)=\"close()\">OKAY</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #form>\r\n  <div class=\"bg-white box-shadow p-3 m-3\" style=\"border-radius: 10px;\">\r\n    <div class=\"d-flex justify-content-between\">\r\n      <span class=\"\">Enter your bank details</span>\r\n      <span class=\"material-icons text-grey text-link\" (click)=\"close()\">close</span>\r\n    </div>\r\n    <div class=\"p-2\" [formGroup]=\"myForm\">\r\n      <mat-form-field class=\"p-0 w-100 my-3 mat-form-field\">\r\n        <mat-label class=\"p-0 text-grey\">Bank name</mat-label>\r\n        <input matInput placeholder=\"Enter bank name\" name=\"none\" autocomplete=\"nope\" class=\"p-0\"\r\n          formControlName='bankName'>\r\n        <mat-error>Enter valid field</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"p-0 w-100 my-3 mat-form-field\">\r\n        <mat-label class=\"p-0 text-grey\">IFSC Code</mat-label>\r\n        <input matInput placeholder=\"Enter IFSC code\" name=\"none\" autocomplete=\"nope\" class=\"p-0\"\r\n          formControlName='IFSCCode'>\r\n        <mat-error>Enter valid field</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"p-0 w-100 my-3 mat-form-field\">\r\n        <mat-label class=\"p-0 text-grey\">Account Holder Name</mat-label>\r\n        <input matInput placeholder=\"Enter holder name\" name=\"none\" autocomplete=\"nope\" class=\"p-0\"\r\n          formControlName='accountHolderName'>\r\n        <mat-error>Enter valid field</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"p-0 w-100 my-3 mat-form-field\">\r\n        <mat-label class=\"p-0 text-grey\">Account Number</mat-label>\r\n        <input matInput placeholder=\"Enter account number\" name=\"none\" autocomplete=\"nope\" class=\"p-0\"\r\n          formControlName='accountNumber'>\r\n        <mat-error>Enter valid field</mat-error>\r\n      </mat-form-field>\r\n\r\n      <div class=\"my-4 d-flex justify-content-center\">\r\n        <button class=\"btn btn-primary px-4 py-1\" (click)=\"submit()\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "0TkN":
    /*!*******************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function TkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "1wpM":
    /*!***********************************************************************!*\
      !*** ./src/app/user/refered-profiles/refered-profiles.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function wpM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZlcmVkLXByb2ZpbGVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "38PL":
    /*!*****************************************************************!*\
      !*** ./src/app/user/user-messages/user-messages.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "5muk":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-messages/user-messages.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function muk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"bg-primary\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>";
      /***/
    },

    /***/
    "6nqn":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu contentId=\"main-content\" class=\"custom\" type=\"overlay\">\r\n    <ion-content>\r\n      <div class=\"menu-header-bg vertical-center\" style=\"text-align: center;\">\r\n        <img src=\"../../../assets/logdado.png\" class=\"img-fluid mx-auto pt-2 pr-2\" style=\"width: 150px; height: 100px;\"\r\n          alt=\"logo\">\r\n      </div>\r\n      <ion-list class=\"menu-items\" lines=\"none\">\r\n        <ion-item routerLink=\"/referer/dashboard\" routerLinkActive=\"active\" (click)=\"toggle()\">\r\n          <ion-icon name=\"grid\" routerLinkActive='icon-active'></ion-icon>Dashboard\r\n        </ion-item>\r\n        <ion-item routerLink=\"/referer/profile\" routerLinkActive=\"active\" (click)=\"toggle()\">\r\n          <ion-icon name=\"person\" routerLinkActive='icon-active'></ion-icon>My Profile\r\n        </ion-item>\r\n        <ion-item routerLink=\"/referer/jobs\" routerLinkActive='active' (click)=\"toggle()\">\r\n          <ion-icon name=\"briefcase\" routerLinkActive='icon-active'></ion-icon>Job Posts\r\n        </ion-item>\r\n        <ion-item routerLink=\"/referer/my-applications\" routerLinkActive='active' (click)=\"toggle()\">\r\n          <ion-icon name=\"albums\" routerLinkActive='icon-active'></ion-icon>Applied Jobs\r\n        </ion-item>\r\n        <!-- \r\n        <ion-item routerLink=\"/referer/messages\" routerLinkActive='active' (click)=\"toggle()\">\r\n          <ion-icon name=\"chatbubble-ellipses\" routerLinkActive='icon-active'></ion-icon>Messages\r\n        </ion-item> -->\r\n        <ion-item (click)=\"openModal(feedback)\" class=\"text-link\">\r\n          <ion-icon name=\"chatbox\"></ion-icon>Feedback\r\n        </ion-item>\r\n        <ion-item (click)=\"openModal(logout)\" class=\"text-link\">\r\n          <ion-icon name=\"log-out\"></ion-icon>Logout\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\" style=\"overflow: auto;\">\r\n  </ion-router-outlet>\r\n</ion-app>\r\n\r\n<ng-template #logout>\r\n  <div class=\"bg-white box-shadow p-3 m-3\" style=\"border-radius: 10px;\">\r\n    Are you sure you want to logout?\r\n    <div class=\"d-flex justify-content-end px-2 mt-2\">\r\n      <button class=\"btn btn-secondary p-0 text-smd px-2 mr-3\" (click)=\"loggedOut()\">Yes</button>\r\n      <button class=\"btn btn-primary text-smd px-2 p-0\" (click)=\"cancel()\">No</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #feedback>\r\n  <div class=\"bg-white box-shadow p-3 m-3\" style=\"border-radius: 10px;\">\r\n    <h4>Feedback</h4>\r\n    <div>\r\n      <div class=\"my-3\">\r\n        <label class=\"text-grey semi-bold\">Type</label>\r\n        <ng-select [(ngModel)]=\"type\" placeholder=\"Select type\">\r\n          <ng-option value=\"Report a complain\">Complaint</ng-option>\r\n          <ng-option value=\"Review\">Suggestion</ng-option>\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"my-3\">\r\n        <label class=\"text-grey semi-bold\">Description</label>\r\n        <textarea class=\"form-control\" [(ngModel)]=\"description\" placeholder=\"Add minimum 10 words!\"\r\n          rows=\"4\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end px-2 mt-4\">\r\n      <button class=\"btn btn-secondary p-0 text-smd px-2 mr-3\" (click)=\"cancel()\">Cancel</button>\r\n      <button class=\"btn btn-primary text-smd px-2 p-0\" (click)=\"send()\">Send</button>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "7UCR":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserModule */

    /***/
    function UCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-applications/my-applications.component */
      "fFEB");
      /* harmony import */


      var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-detail/job-detail.component */
      "tVCz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "hxRI");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-routing.module */
      "Yu5h");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "xAyl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _usermenu_usermenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./usermenu/usermenu.component */
      "aIz8");
      /* harmony import */


      var _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-messages/user-messages.component */
      "Pqrg");
      /* harmony import */


      var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-page/user-page.component */
      "VnIl");
      /* harmony import */


      var _user_jobs_user_jobs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-jobs/user-jobs.component */
      "Ch/j");
      /* harmony import */


      var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/popover */
      "EDFS");
      /* harmony import */


      var _refered_profiles_refered_profiles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./refered-profiles/refered-profiles.component */
      "Nv7c");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], _usermenu_usermenu_component__WEBPACK_IMPORTED_MODULE_10__["UsermenuComponent"], _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_2__["JobDetailComponent"], _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_11__["UserMessagesComponent"], _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_12__["UserPageComponent"], _user_jobs_user_jobs_component__WEBPACK_IMPORTED_MODULE_13__["UserJobsComponent"], _my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_1__["MyApplicationsComponent"], _refered_profiles_refered_profiles_component__WEBPACK_IMPORTED_MODULE_15__["ReferedProfilesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"].forRoot()],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], UserModule);
      /***/
    },

    /***/
    "Ch/j":
    /*!*******************************************************!*\
      !*** ./src/app/user/user-jobs/user-jobs.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserJobsComponent */

    /***/
    function ChJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserJobsComponent", function () {
        return UserJobsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-jobs.component.html */
      "xuTp");
      /* harmony import */


      var _user_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-jobs.component.scss */
      "Hw9u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserJobsComponent = function UserJobsComponent() {
        _classCallCheck(this, UserJobsComponent);

        this.navItems = [{
          name: 'DASHBOARD',
          route: '/referer/dashboard'
        }, {
          name: 'MY PROFILE',
          route: '/referer/profile'
        }, {
          name: 'JOB POSTS',
          route: '/referer/jobs'
        }, {
          name: 'APPLIED JOB',
          route: '/referer/my-applications'
        }, {
          name: 'REFERRED PROFILE',
          route: '/referer/referred'
        }];
      };

      UserJobsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-jobs',
        template: _raw_loader_user_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserJobsComponent);
      /***/
    },

    /***/
    "CrqN":
    /*!***********************************************************!*\
      !*** ./src/app/user/job-detail/job-detail.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function CrqN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "hr {\n  border: none;\n  height: 0.4px;\n  background: #cccccc;\n}\n\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1 !important;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1 !important;\n  /* Firefox */\n}\n\ninput::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n:root {\n  --progress-bar-width-my-profile: 0px;\n}\n\n.myfont-size {\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxqb2ItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7RUFBeUQsNkJBQTZCO0FBRXRGOztBQURBO0VBQTBDLFdBQVc7RUFBRSxlQUFlO0FBTXRFOztBQUpBO0VBQ0kseUNBQXdDO0FBTzVDOztBQUpBO0VBQWdCLHlDQUFBO0VBRWQscUJBQXFCO0VBQUUsWUFBQTtBQVF6Qjs7QUFWQTtFQUFnQix5Q0FBQTtFQUVkLHFCQUFxQjtFQUFFLFlBQUE7QUFRekI7O0FBTEE7RUFDRSxzQkFBc0I7QUFReEI7O0FBTEE7RUFDRSxzQkFBc0I7QUFReEI7O0FBTEU7RUFDRSx3QkFBd0I7QUFRNUI7O0FBTEU7RUFDRSxvQ0FBZ0M7QUFRcEM7O0FBTEU7RUFDRSxlQUFlO0FBUW5CIiwiZmlsZSI6ImpvYi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJocntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMC40cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG4gfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC45ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjNlbTsgZm9udC1zaXplOiAxNXB4OyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgLy9jb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1wcm9ncmVzcy1iYXItd2lkdGgtbXktcHJvZmlsZTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm15Zm9udC1zaXple1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "EDFS":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js ***!
      \*******************************************************************************************/

    /*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */

    /***/
    function EDFS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverConfig", function () {
        return PopoverConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function () {
        return PopoverContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverDirective", function () {
        return PopoverDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverModule", function () {
        return PopoverModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/component-loader */
      "3XJ7");
      /* harmony import */


      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/utils */
      "lUod");
      /* harmony import */


      var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/positioning */
      "WyaX");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Configuration service for the Popover directive.
       * You can inject this service, typically in your root component, and customize
       * the values of its properties in order to provide default values for all the
       * popovers used in the application.
       */


      function PopoverContainerComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      var _c0 = ["*"];

      var PopoverConfig = function PopoverConfig() {
        _classCallCheck(this, PopoverConfig);

        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */

        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        this.outsideClick = false;
        /**
         * delay before showing the tooltip
         */

        this.delay = 0;
      };

      PopoverConfig.ɵfac = function PopoverConfig_Factory(t) {
        return new (t || PopoverConfig)();
      };
      /** @nocollapse */


      PopoverConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function PopoverConfig_Factory() {
          return new PopoverConfig();
        },
        token: PopoverConfig,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverContainerComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         */
        function PopoverContainerComponent(config) {
          _classCallCheck(this, PopoverContainerComponent);

          Object.assign(this, config);
        }
        /**
         * @return {?}
         */


        _createClass(PopoverContainerComponent, [{
          key: "isBs3",
          get: function get() {
            return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
          }
        }]);

        return PopoverContainerComponent;
      }();

      PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) {
        return new (t || PopoverContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig));
      };

      PopoverContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopoverContainerComponent,
        selectors: [["popover-container"]],
        hostAttrs: ["role", "tooltip", 2, "display", "block"],
        hostVars: 7,
        hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.popoverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", !ctx.isBs3)("bs3", ctx.isBs3);
          }
        },
        inputs: {
          placement: "placement",
          title: "title"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 1,
        consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]],
        template: function PopoverContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"],
        changeDetection: 0
      });
      /** @nocollapse */

      PopoverContainerComponent.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }];
      };

      PopoverContainerComponent.propDecorators = {
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'popover-container',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            // tslint:disable-next-line
            host: {
              '[attr.id]': 'popoverId',
              '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
              '[class.show]': '!isBs3',
              '[class.bs3]': 'isBs3',
              role: 'tooltip',
              style: 'display:block;'
            },
            template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
            styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }];
        }, {
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var id = 0;
      /**
       * A lightweight, extensible directive for fancy popover creation.
       */

      var PopoverDirective = /*#__PURE__*/function () {
        /**
         * @param {?} _config
         * @param {?} _elementRef
         * @param {?} _renderer
         * @param {?} _viewContainerRef
         * @param {?} cis
         * @param {?} _positionService
         */
        function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
          _classCallCheck(this, PopoverDirective);

          this._elementRef = _elementRef;
          this._renderer = _renderer;
          this._positionService = _positionService;
          /**
           * unique id popover - use for aria-describedby
           */

          this.popoverId = id++;
          /**
           * Close popover on outside click
           */

          this.outsideClick = false;
          /**
           * Css class for popover container
           */

          this.containerClass = '';
          this._isInited = false;
          this._popover = cis.createLoader(_elementRef, _viewContainerRef, _renderer).provide({
            provide: PopoverConfig,
            useValue: _config
          });
          Object.assign(this, _config);
          this.onShown = this._popover.onShown;
          this.onHidden = this._popover.onHidden; // fix: no focus on button on Mac OS #1795

          if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click',
            /**
            * @return {?}
            */
            function () {
              try {
                _elementRef.nativeElement.focus();
              } catch (err) {
                return;
              }
            });
          }
        }
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */


        _createClass(PopoverDirective, [{
          key: "setAriaDescribedBy",

          /**
           * Set attribute aria-describedBy for element directive and
           * set id for the popover
           * @return {?}
           */
          value: function setAriaDescribedBy() {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-".concat(this.popoverId) : null;

            if (this._ariaDescribedby) {
              this._popover.instance.popoverId = this._ariaDescribedby;

              this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            } else {
              this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
          }
          /**
           * Opens an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "show",
          value: function show() {
            var _this = this;

            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
              return;
            }

            this._positionService.setOptions({
              modifiers: {
                flip: {
                  enabled: this.adaptivePosition
                },
                preventOverflow: {
                  enabled: this.adaptivePosition
                }
              }
            });
            /** @type {?} */


            var showPopover =
            /**
            * @return {?}
            */
            function showPopover() {
              if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
              }

              _this._popover.attach(PopoverContainerComponent).to(_this.container).position({
                attachment: _this.placement
              }).show({
                content: _this.popover,
                context: _this.popoverContext,
                placement: _this.placement,
                title: _this.popoverTitle,
                containerClass: _this.containerClass
              });

              if (!_this.adaptivePosition) {
                _this._positionService.calcPosition();

                _this._positionService.deletePositionElement(_this._popover._componentRef.location);
              }

              _this.isOpen = true;

              _this.setAriaDescribedBy();
            };
            /** @type {?} */


            var cancelDelayedTooltipShowing =
            /**
            * @return {?}
            */
            function cancelDelayedTooltipShowing() {
              if (_this._popoverCancelShowFn) {
                _this._popoverCancelShowFn();
              }
            };

            if (this.delay) {
              /** @type {?} */
              var _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay).subscribe(
              /**
              * @return {?}
              */
              function () {
                showPopover();
                cancelDelayedTooltipShowing();
              });

              if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["parseTriggers"])(this.triggers).forEach(
                /**
                * @param {?} trigger
                * @return {?}
                */
                function (trigger) {
                  _this._popoverCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close,
                  /**
                  * @return {?}
                  */
                  function () {
                    _timer.unsubscribe();

                    cancelDelayedTooltipShowing();
                  });
                });
              }
            } else {
              showPopover();
            }
          }
          /**
           * Closes an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "hide",
          value: function hide() {
            if (this._delayTimeoutId) {
              clearTimeout(this._delayTimeoutId);
              this._delayTimeoutId = undefined;
            }

            if (this.isOpen) {
              this._popover.hide();

              this.setAriaDescribedBy();
              this.isOpen = false;
            }
          }
          /**
           * Toggles an element’s popover. This is considered a “manual” triggering of
           * the popover.
           * @return {?}
           */

        }, {
          key: "toggle",
          value: function toggle() {
            if (this.isOpen) {
              return this.hide();
            }

            this.show();
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
              return;
            }

            this._isInited = true;

            this._popover.listen({
              triggers: this.triggers,
              outsideClick: this.outsideClick,
              show:
              /**
              * @return {?}
              */
              function show() {
                return _this2.show();
              },
              hide:
              /**
              * @return {?}
              */
              function hide() {
                return _this2.hide();
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._popover.dispose();
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._popover.isShown;
          }
          /**
           * @param {?} value
           * @return {?}
           */
          ,
          set: function set(value) {
            if (value) {
              this.show();
            } else {
              this.hide();
            }
          }
        }]);

        return PopoverDirective;
      }();

      PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
        return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PopoverConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]));
      };

      PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PopoverDirective,
        selectors: [["", "popover", ""]],
        inputs: {
          outsideClick: "outsideClick",
          containerClass: "containerClass",
          isOpen: "isOpen",
          adaptivePosition: "adaptivePosition",
          popover: "popover",
          popoverContext: "popoverContext",
          popoverTitle: "popoverTitle",
          placement: "placement",
          triggers: "triggers",
          container: "container",
          delay: "delay"
        },
        outputs: {
          onShown: "onShown",
          onHidden: "onHidden"
        },
        exportAs: ["bs-popover"]
      });
      /** @nocollapse */

      PopoverDirective.ctorParameters = function () {
        return [{
          type: PopoverConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
        }, {
          type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
        }];
      };

      PopoverDirective.propDecorators = {
        adaptivePosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverContext: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popoverTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        triggers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        containerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onShown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[popover]',
            exportAs: 'bs-popover'
          }]
        }], function () {
          return [{
            type: PopoverConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"]
          }, {
            type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]
          }];
        }, {
          outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          adaptivePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          triggers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var PopoverModule = /*#__PURE__*/function () {
        function PopoverModule() {
          _classCallCheck(this, PopoverModule);
        }

        _createClass(PopoverModule, null, [{
          key: "forRoot",

          /**
           * @return {?}
           */
          value: function forRoot() {
            return {
              ngModule: PopoverModule,
              providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
            };
          }
        }]);

        return PopoverModule;
      }();

      PopoverModule.ɵfac = function PopoverModule_Factory(t) {
        return new (t || PopoverModule)();
      };

      PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PopoverModule
      });
      PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopoverModule, {
          declarations: function declarations() {
            return [PopoverDirective, PopoverContainerComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]];
          },
          exports: function exports() {
            return [PopoverDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            declarations: [PopoverDirective, PopoverContainerComponent],
            exports: [PopoverDirective],
            entryComponents: [PopoverContainerComponent]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=ngx-bootstrap-popover.js.map

      /***/

    },

    /***/
    "EqXQ":
    /*!*********************************************************************!*\
      !*** ./src/app/user/my-applications/my-applications.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function EqXQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "G2Xt":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/refer-job-post.service.ts ***!
      \***********************************************************/

    /*! exports provided: ReferJobPostService */

    /***/
    function G2Xt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferJobPostService", function () {
        return ReferJobPostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ReferJobPostService = /*#__PURE__*/function () {
        function ReferJobPostService(http) {
          _classCallCheck(this, ReferJobPostService);

          this.http = http;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'content-type': 'application/json'
          });
          this.baseUrl = '';
          this.post = undefined;
          this.jobPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.postDetail = {};
          this.myApplications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
        }

        _createClass(ReferJobPostService, [{
          key: "referJobPost",
          value: function referJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/referJobPost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "getReferedJobPosts",
          value: function getReferedJobPosts(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/getReferedJobPosts", body, {
              headers: this.headers
            });
          }
        }, {
          key: "uploadResume",
          value: function uploadResume(data) {
            return this.http.post(this.baseUrl + "/api/upload-resume", data).toPromise();
          }
        }, {
          key: "checkReferedProfile",
          value: function checkReferedProfile(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/check-refered-profile", body, {
              headers: this.headers
            });
          }
        }]);

        return ReferJobPostService;
      }();

      ReferJobPostService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      ReferJobPostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ReferJobPostService);
      /***/
    },

    /***/
    "H/6N":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-applications/my-applications.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H6N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <div class=\"w-100 h-100 m-0 p-0 justify-content-center\" *ngIf=\"!isServiceRunning\" style=\"background-color: #f8f8f8\">\r\n    <div class=\"col-sm-10 row p-0 mx-auto vertical-center justify-content-around\">\r\n        <div class=\"d-flex flex-column semi-bold  m-0 p-0 mr-3\">\r\n          <span class=\"text-black text-lg\">{{allAppliedPosts.length}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Applied Jobs</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column semi-bold  m-0 p-0 mr-3\">\r\n          <span class=\"text-black text-lg\">{{shortlistedJobs}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Shortlisted Jobs</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column semi-bold m-0 p-0 \">\r\n          <span class=\"text-black text-lg\">{{hiredJobs}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Hired</h6>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center p-2 bg-lightest-blue\">\r\n      <div class=\"col-sm-9 mx-0 mt-2 p-0\">\r\n        <app-not-found *ngIf=\"allAppliedPosts.length === 0\" style=\"margin-top: 200px !important;\" class=\"center-parent\">\r\n        </app-not-found>\r\n\r\n        <div *ngIf=\"allAppliedPosts.length > 0\" class=\"p-2\">\r\n\r\n          <div class=\"m-2 mr-2 mb-3\" *ngFor=\"let jobPost of allAppliedPosts\" (click)=\"seeDetails(jobPost.data._id)\">\r\n\r\n            <div class=\"card  shadow-lg p-3 text-link border-8\">\r\n              <div class=\"d-flex mb-3 justify-content-between\">\r\n                <div class=\"d-flex flex-wrap\">\r\n                  <div class=\"mr-3 mb-2\">\r\n                    <span>\r\n                      <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                        style=\"height: 60px; width: 58.2px;\">\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"text-left\">\r\n                    <h4>{{jobPost.jobPost.title}}</h4>\r\n                    <div class=\"column\">\r\n                      <div class=\"d-flex vertical-center flex-wrap\">\r\n                        <div class=\" vertical-center justify-content-start mr-3\">\r\n                          <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\r\n                          <span class=\" text-lato text-primary d-inline\">Experience : </span>\r\n                          <span class=\"text-lato text-primary\">&nbsp;{{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                            ''\r\n                            }}\r\n                            years</span>\r\n                        </div>\r\n    \r\n                        <div class=\"vertical-center justify-content-start mr-3\">\r\n                          <span class=\"material-icons  mr-2 text-primary\">business</span>\r\n                          <span class=\" text-lato text-primary d-inline\">Company : </span>\r\n                          <span class=\" text-lato text-primary\">&nbsp;{{jobPost.jobPost.companyName}}</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"d-flex flex-wrap mt-1\">\r\n                        <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                          class=\" vertical-center justify-content-start mr-2\">\r\n                          <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\r\n                          <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                        </div>\r\n    \r\n                        <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                          class=\" vertical-center justify-content-start mr-2\">\r\n                          <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\r\n                          <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\r\n                        </div>\r\n    \r\n                        <div class=\"vertical-center justify-content-start mr-2\">\r\n                          <span class=\"material-icons text-md  mr-2 text-primary\">\r\n                            schedule\r\n                          </span>\r\n                            <span class=\"text-smd text-lato text-primary\">Submitted on {{jobPost.appliedDate | date: 'dd\r\n                              MMMM\r\n                              yyyy'}}</span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-flex align-items-start justify-content-center\">\r\n                  <span class=\"text-smd py-2\"\r\n                    [ngClass]=\"jobPost.status === 'Shortlisted' ? 'text-primary' : jobPost.status === 'Hired' ? 'text-success' : jobPost.status === 'Rejected' ? 'text-danger' : ''\">{{jobPost.status\r\n                    === 'Rejected' ? 'Closed' : jobPost.status}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\r\n                <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\r\n    \r\n                  <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\r\n                    {{jobPost.jobPost.skills[0].skillName }}\r\n                  </div>\r\n                  <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\r\n                    *ngIf=\"jobPost.jobPost.skills.length > 1\">\r\n                    {{jobPost.jobPost.skills[1].skillName }}\r\n                  </div>\r\n                </div>\r\n    \r\n                <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\r\n                  <div class=\"justify-content-between vertical-center mr-2\">\r\n                    <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">REWARD :\r\n                      ₹{{jobPost.referReward}}</div>\r\n                  </div>\r\n                  <div class=\"my-2 vertical-center justify-content-start\">\r\n                    <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\r\n                    <div class=\"d-flex ml-1 align-self-end\" >\r\n                      <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- <div class=\"m-2 mr-2 mb-3\" *ngFor=\"let jobPost of allAppliedPosts\" (click)=\"seeDetails(jobPost.data._id)\">\r\n            <div class=\"card border-12 box-shadow btn btn-light p-3\">\r\n              <div class=\"d-flex justify-content-between vertical-center mb-3\">\r\n                <div class=\"text-left\">\r\n                  <span class=\"text-dark text-ssmd semi-bold d-block\">{{jobPost.jobPost.title}}</span>\r\n                  <span class=\"semi-bold d-block w-100 text-left\"\r\n                    style=\"color: rgb(93, 35, 141);\">{{jobPost.jobPost.companyName}}</span>\r\n                </div>\r\n                <img class=\"\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                  style=\"max-height: 70px; max-width: 160px; min-height: 70px; min-width: 70px;\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                  class=\"col-sm-6 my-2 vertical-center justify-content-start\">\r\n                  <span class=\"material-icons-outlined text-md text-grey mr-2 text-violet\">location_on</span>\r\n                  <span class=\"text-grey semi-bold text-smd  d-inline\">Location : </span>\r\n                  <span class=\"text-grey text-smd\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                </div>\r\n                <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                  class=\"col-sm-6 my-2 vertical-center justify-content-start\">\r\n                  <span class=\"material-icons-outlined text-md text-grey mr-2 text-violet\">home</span>\r\n                  <span class=\"text-grey semi-bold text-smd  d-inline\">Work from home</span>\r\n                </div>\r\n                <div class=\"col-sm-6 my-2 vertical-center\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\r\n                  <span class=\"material-icons-outlined text-grey mr-2 text-md text-violet\">psychology</span>\r\n                  <span class=\"text-grey semi-bold text-smd  d-inline\">Skills : &nbsp;</span>\r\n                  <span class=\"text-grey text-smd text-wrap\">{{jobPost.jobPost.skills[0].skillName }}\r\n                    {{ jobPost.jobPost.skills.length > 1 ? ' , ' +\r\n                    jobPost.jobPost.skills[1].skillName : ''}}</span>\r\n                </div>\r\n                <div class=\"my-2 col-sm-12 vertical-center justify-content-start\">\r\n                  <span class=\"material-icons-outlined text-grey mr-2 text-violet\">payments</span>\r\n                  <span class=\"text-grey semi-bold d-inline\">{{jobPost.jobPost.jobInternship === 'Job' ? 'Salary'\r\n                    :\r\n                    'Stipend'}}\r\n                    :\r\n                  </span>\r\n                  <span class=\"text-grey\">&nbsp; &#8377; {{jobPost.jobPost.salary}}\r\n                    {{jobPost.jobPost.salaryType}}</span>\r\n                </div>\r\n                <div class=\"my-2 col-sm-12 vertical-center justify-content-start\">\r\n                  <span class=\"material-icons-outlined text-grey mr-2 text-violet\">work</span>\r\n                  <span class=\"text-grey semi-bold  d-inline\">Experience : </span>\r\n                  <span class=\"text-grey\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience : ''\r\n                    }}\r\n                    years</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"row justify-content-between vertical-center mt-3\">\r\n                <span class=\"text-sm text-grey semi-bold col-auto\">Refer reward: <span\r\n                    class=\"badge badge-primary text-sm bg-violet\">₹{{jobPost.referReward}}</span></span>\r\n              </div>\r\n              <div class=\"vertical-center justify-content-between mt-1\">\r\n                <span class=\"text-smd py-2\"\r\n                  [ngClass]=\"jobPost.status === 'Shortlisted' ? 'text-primary' : jobPost.status === 'Hired' ? 'text-success' : jobPost.status === 'Rejected' ? 'text-danger' : ''\">{{jobPost.status\r\n                  === 'Rejected' ? 'Closed' : jobPost.status}}</span>\r\n                <span class=\"text-grey text-sm text-break\">Submitted on &nbsp; {{jobPost.appliedDate | date: 'dd\r\n                  MMMM\r\n                  yyyy'}}</span>\r\n              </div>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom bg-primary \">\r\n      <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "Hw9u":
    /*!*********************************************************!*\
      !*** ./src/app/user/user-jobs/user-jobs.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Hw9u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWpvYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBeUQsNkJBQTZCO0FBRXRGOztBQURBO0VBQTBDLFdBQVc7RUFBRSxlQUFlO0FBTXRFOztBQUpBO0VBQ0kseUNBQXdDO0FBTzVDIiwiZmlsZSI6InVzZXItam9icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuOWVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS4zZW07IGZvbnQtc2l6ZTogMTVweDsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "IbmB":
    /*!*********************************************************!*\
      !*** ./src/app/user/user-page/user-page.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function IbmB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "JbCj":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/usermenu/usermenu.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function JbCj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"h-100 w-100 overflow-x-hidden\" style=\"overflow-y: auto;\" *ngIf=\"!isServiceRunning\">\r\n  <div class=\"bg-light text-white row p-0 m-0 vertical-center justify-content-center py-5\">\r\n    <div class=\"col-sm-10 row p-0 m-0 vertical-center justify-content-between\">\r\n      <div class=\"col-sm-3 my-3\">\r\n        <h2 class=\"text-black\">Hi, {{getName(user.name)}}!</h2>\r\n      </div>\r\n      <div class=\"col-sm-4 vertical-center justify-content-end my-3\">\r\n        <div class=\"d-flex flex-column semi-bold  m-0 p-0 mr-3\">\r\n          <span class=\"text-black text-lg\">0</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Total Earnings</h6>\r\n        </div>\r\n        <div class=\"d-flex flex-column semi-bold m-0 p-0 \">\r\n          <span class=\"text-black text-lg\">{{user.profileViews ? user.profileViews : 0}}</span>\r\n          <h6 class=\"text-dark thin-font text-ssmd\">Profile Views</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center p-0 m-0 py-3 pb-5\">\r\n    <div class=\"col-sm-11 p-0 m-0 row justify-content-between\">\r\n      <div class=\"col-12 col-md-6 col-lg-3 p-2 d-flex justify-content-center\"  >\r\n        <div class=\"special-card transition mx-auto\" (click)=\"scrollToJobs()\">\r\n          <a>\r\n             <span class=\"material-icons icon-trans display-icon transition\">search</span>\r\n          </a>\r\n          <a> \r\n            <span class=\"text-trans transition\"><i class=\"ti ti-search\"></i>Find Jobs</span>\r\n            <div class=\"card_circle transition\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 col-lg-3 p-2 d-flex justify-content-center\">\r\n        <div class=\"special-card transition\" routerLink=\"/referer/referred\">\r\n          <a>\r\n            <span class=\"material-icons icon-trans display-icon transition\">\r\n              autorenew\r\n              </span>\r\n         </a>\r\n          <a>\r\n            <span class=\"text-trans transition\">Referred Profiles</span>\r\n            <div class=\"card_circle transition\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 col-lg-3 p-2 d-flex justify-content-center\">\r\n        <div class=\"special-card transition\"  routerLink=\"/referer/my-applications\">\r\n          <a>\r\n            <span class=\"material-icons icon-trans display-icon transition\">\r\n              task_alt\r\n              </span>\r\n         </a>\r\n          <a>\r\n            <span class=\"text-trans transition\">Applied Job</span>\r\n            <div class=\"card_circle transition\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-md-6 col-lg-3 p-2 d-flex justify-content-center\" >\r\n        <div class=\"special-card transition\" (click)=\"openModal(feedback)\">\r\n          <a>\r\n            <span class=\"material-icons icon-trans display-icon transition \">\r\n              chat\r\n              </span>\r\n         </a>\r\n          <a>\r\n            <span class=\"text-trans transition\">Feedback</span>\r\n            <div class=\"card_circle transition\"></div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center bg-lightest-blue p-0 m-0 mt-5\">\r\n    <div class=\"col-sm-10 p-0 m-0\">\r\n      <app-recent-jobs id=\"jobs\"></app-recent-jobs>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-bottom bg-primary \">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #feedback>\r\n  <div class=\"bg-white box-shadow p-3 m-3\" style=\"border-radius: 10px;\">\r\n    <h4>Feedback</h4>\r\n    <div>\r\n      <div class=\"my-3\">\r\n        <label class=\"text-grey semi-bold\">Type</label>\r\n        <ng-select [(ngModel)]=\"type\" placeholder=\"Select type\">\r\n          <ng-option value=\"Report a complain\">Complaint</ng-option>\r\n          <ng-option value=\"Review\">Suggestion</ng-option>\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"my-3\">\r\n        <label class=\"text-grey semi-bold\">Description</label>\r\n        <textarea class=\"form-control\" [(ngModel)]=\"description\" placeholder=\"Add minimum 10 words!\"\r\n          rows=\"4\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-end px-2 mt-4\">\r\n      <button class=\"btn btn-secondary p-0 text-smd px-2 mr-3\" (click)=\"cancel()\">Cancel</button>\r\n      <button class=\"btn btn-primary text-smd px-2 p-0\" (click)=\"send()\">Send</button>\r\n    </div>\r\n  </div>\r\n</ng-template>";
      /***/
    },

    /***/
    "Nv7c":
    /*!*********************************************************************!*\
      !*** ./src/app/user/refered-profiles/refered-profiles.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ReferedProfilesComponent */

    /***/
    function Nv7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferedProfilesComponent", function () {
        return ReferedProfilesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_refered_profiles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./refered-profiles.component.html */
      "+C46");
      /* harmony import */


      var _refered_profiles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./refered-profiles.component.scss */
      "1wpM");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_refer_job_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../shared/services/refer-job-post.service */
      "G2Xt");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReferedProfilesComponent = /*#__PURE__*/function () {
        function ReferedProfilesComponent(referService, router, modalRef, modalService, dbService, toast) {
          _classCallCheck(this, ReferedProfilesComponent);

          this.referService = referService;
          this.router = router;
          this.modalRef = modalRef;
          this.modalService = modalService;
          this.dbService = dbService;
          this.toast = toast;
          this.allReferedProfiles = [];
          this.isServiceRunning = false;
          this.hiredJobs = 0;
          this.shortlistedJobs = 0;
          this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/referer/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/referer/profile'
          }, {
            name: 'JOB POSTS',
            route: '/referer/jobs'
          }, {
            name: 'APPLIED JOB',
            route: '/referer/my-applications'
          }, {
            name: 'REFERRED PROFILE',
            route: '/referer/referred'
          }];
        }

        _createClass(ReferedProfilesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              IFSCCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              accountHolderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              accountNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            this.isServiceRunning = true;
            this.referService.getReferedJobPosts({
              email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email
            }).subscribe(function (data) {
              if (data.data) {
                if (data.data.length > 0) {
                  _this3.allReferedProfiles = data.data;
                  data.data.forEach(function (element) {
                    if (element.status === 'Shortlisted') {
                      _this3.shortlistedJobs++;
                    }

                    if (element.status === 'Hired') {
                      _this3.hiredJobs++;
                    }
                  });

                  _this3.allReferedProfiles.map(function (pr) {
                    pr.isStatus = true;
                  });
                }
              }

              _this3.isServiceRunning = false;
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(id) {
            this.router.navigateByUrl("/referer/jobs/job-detail/".concat(id));
          }
        }, {
          key: "openResume",
          value: function openResume(resume) {
            window.open(resume);
          }
        }, {
          key: "openModal",
          value: function openModal(template, index) {
            this.currProfile = index, this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.modalRef.hide();
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this4 = this;

            this.myForm.markAllAsTouched();

            if (this.myForm.valid) {
              this.isServiceRunning = true;
              var time = new Date().getTime();
              var email = {
                email: 'refer2career@gmail.com',
                subject: "Encashment Request ".concat(time, "!"),
                content: "<p>Hello </p><p>Enacashment request from  ".concat(this.user.name, ".</p><h3>Bank details</h3>\n        <ul>\n          <li>Bank Name: ").concat(this.myForm.get('bankName').value, "</li>\n          <li>IFSC Code: ").concat(this.myForm.get('IFSCCode').value, "</li></li>\n          <li>Account Holder Name: ").concat(this.myForm.get('accountHolderName').value, "</li></li>\n          <li>Account Number: ").concat(this.myForm.get('accountNumber').value, "</li></li>\n        </ul>\n        <p></p><br>Thanks and Regards!<br><a style=\"color: blue;\" href=\"https://refer2career.com\">Refer2Career.com</a>")
              };
              this.dbService.sendMail(email).subscribe(function (jata) {
                if (jata.data) {
                  var db = {
                    collection: 'encashment',
                    data: {
                      referenceNumber: time,
                      name: _this4.user.name,
                      email: _this4.user.email,
                      referedName: _this4.allReferedProfiles[_this4.currProfile].name,
                      referedEmail: _this4.allReferedProfiles[_this4.currProfile].email,
                      jobTitle: _this4.allReferedProfiles[_this4.currProfile].jobTitle,
                      jobId: _this4.allReferedProfiles[_this4.currProfile].jobId,
                      refredProfileId: _this4.allReferedProfiles[_this4.currProfile]._id,
                      companyName: _this4.allReferedProfiles[_this4.currProfile].companyName,
                      referedOn: _this4.allReferedProfiles[_this4.currProfile].createdAt,
                      createdAt: new Date()
                    }
                  };

                  _this4.dbService.create(db).then(function (data) {
                    if (data.data) {
                      _this4.toast.showToast('Request Submitted Successfully!');
                    } else {
                      _this4.toast.showToast('Something went worng', 'bg-red');
                    }

                    _this4.close();

                    _this4.isServiceRunning = false;
                  });
                } else {
                  _this4.close();

                  _this4.isServiceRunning = false;

                  _this4.toast.showToast('Something went worng', 'bg-red');
                }
              });
            }
          }
        }]);

        return ReferedProfilesComponent;
      }();

      ReferedProfilesComponent.ctorParameters = function () {
        return [{
          type: _shared_services_refer_job_post_service__WEBPACK_IMPORTED_MODULE_8__["ReferJobPostService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
        }];
      };

      ReferedProfilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-refered-profiles',
        template: _raw_loader_refered_profiles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_refered_profiles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReferedProfilesComponent);
      /***/
    },

    /***/
    "PckL":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-profile/user-profile.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PckL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"h-100 w-100 bg-lightest-blue overflow-x-hidden\" style=\"overflow-y: auto;\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"bg-primary w-100 text-white\"\r\n      style=\"min-height: 220px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\r\n    </div>\r\n    <div class=\"row p-0 m-0 justify-content-center\" style=\"margin-top: -160px !important;\">\r\n      <div class=\"col-sm-10 p-2 mt-5\" style=\"overflow-y: auto !important; overflow-x: hidden;\">\r\n        <div class=\"bg-white border-8\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 align-self-center\">\r\n              <div class=\"p-3 m-2 row vertical-center justify-content-start\">\r\n                <div class=\"col-12 col-md-3 col-lg-2 d-flex justify-content-start mb-2\">\r\n                  <div>\r\n                    <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event,1)'\r\n                      class=\"position-absolute\"\r\n                      style=\"opacity: 0 !important; height: 110px !important; width: 105px !important;\" />\r\n                    <div *ngIf=\"!user.photo\"\r\n                      class=\"bg-opacity vertical-center border-6 bg-primary mx-auto text-center text-white text-xxlg\"\r\n                      style=\"border-width: 2px; height: 130px !important; width: 125px !important; border: 2px solid rgb(255, 255, 255);\">\r\n                      <span class=\"w-100 text-center material-icons text-xxlg\">{{user\r\n                        ? user.name[0] : ''}}</span>\r\n                    </div>\r\n                    <img *ngIf=\"user.photo\" class=\"img-fulid border-6\"\r\n                      style=\"height: 130px !important; width: 125px !important; border: 2px solid white;\"\r\n                      src=\"{{user.photo}}\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-dark col-12 col-md-9 col-sm-10\">\r\n                  <div class=\"text-black semi-bold\" style=\"font-size: 30px;\">{{user.name}}</div>\r\n                  <div class=\"row vertical-center\">\r\n                    <div class=\"col-12 col-lg-5 my-2\">\r\n                      <span class=\"material-icons-outlined vertical-center text-smd mr-5\">mail\r\n                        <span class=\"ml-2\">{{user.email}}</span></span>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-7 my-2\">\r\n                      <span *ngIf=\"user.basicInfo\" class=\"material-icons-outlined vertical-center text-smd mr-4\">call\r\n                        <span class=\"ml-2\">{{user.basicInfo.mobile}}</span></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 row mt-4 p-0 m-0 justify-content-end\">\r\n          <div class=\"col-sm-4 p-2 m-0 mb-3\">\r\n            <div class=\"bg-white p-3 border-8\">\r\n              <span class=\"text-lg mb-4\">{{profileCompleted}}<span class=\"text-smd\">% Profile Completed</span></span>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" id=\"progress-bar\">\r\n                </div>\r\n              </div>\r\n              <div class=\"my-3\" *ngIf=\"profileCompleted < 100\">\r\n                <label class=\"text-dark semi-bold\">Complete your profile</label>\r\n                <div *ngIf=\"!cvHeadLine\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">CV Headline</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 10%</span>\r\n                </div>\r\n                <div *ngIf=\"!user.basicInfo\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Personal Details</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 15%</span>\r\n                </div>\r\n                <div *ngIf=\"!user.photo\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Profile photo</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 10%</span>\r\n                </div>\r\n                <div *ngIf=\"!user.resume\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Resume</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 15%</span>\r\n                </div>\r\n                <div *ngIf=\"skillsArray.length === 0\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Skills</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 12%</span>\r\n                </div>\r\n                <div *ngIf=\"educationArray.length === 0\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Education</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 11%</span>\r\n                </div>\r\n                <div *ngIf=\"workExpArray.length === 0\" class=\"my-2\">\r\n                  <span class=\"text-grey text-sm semi-bold mr-2\">Experience</span>\r\n                  <span class=\"badge bg-light-blue py-1\">Adds 15%</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"my-3\" *ngIf=\"profileCompleted === 100\">\r\n                <label class=\"text-dark semi-bold d-block\">You have done a great job!</label>\r\n                <span class=\"text-sm text-grey\">Employers always prefer profiles with complete information, Make user to\r\n                  keep this information updated.</span>\r\n                <div class=\"mt-4\">\r\n                  <span class=\"text-grey semi-bold pt-2 text-sm\">\r\n                    Here are some tips for you:\r\n                  </span>\r\n                  <span class=\"my-2 vertical-center\"><span class=\"mr-2 material-icons text-success\">check_circle\r\n                    </span>Stay active on Refer2Career & apply to jobs.</span>\r\n                  <span class=\"my-2 vertical-center\"><span class=\"mr-2 material-icons text-success\">\r\n                      check_circle\r\n                    </span>Refer your friends, colleagues and get reward.</span>\r\n                  <span class=\"my-2 vertical-center\"><span class=\"mr-2 material-icons text-success\">\r\n                      check_circle\r\n                    </span>Ensure you keep your CV & Profile updated.</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-8 m-0 p-2\">\r\n            <div class=\"p-3 mx-0 mb-3 bg-white border-8\">\r\n              <div class=\"vertical-center justify-content-between\">\r\n                <span class=\"text-black semi-bold myfont-size\">CV Headline</span>\r\n                <span class=\"text-primary text-link\" *ngIf=\"!isCVHeadEditing\" (click)=\"editCVHead()\"> {{!cvHeadLine ?\r\n                  'Add' : 'Edit'}}</span>\r\n              </div>\r\n              <span class=\"text-smd my-4\" *ngIf=\"!isCVHeadEditing\">{{cvHeadLine ? cvHeadLine : 'Give an introductory\r\n                title to your profile to be viewed by Employers'}}</span>\r\n              <input class=\"form-control my-3\" *ngIf=\"isCVHeadEditing\" type=\"text\" placeholder=\"\"\r\n                [(ngModel)]=\"cvHeadLine\">\r\n              <div class=\"d-flex justify-content-start vertical-center\" *ngIf=\"isCVHeadEditing\">\r\n                <button class=\"btn btn-primary px-3 py-1 rounded-button mr-2\" (click)='saveCVHeadLine()'>Save</button>\r\n                <button class=\"btn btn-secondary px-3 py-1 rounded-button\" (click)='editCVHead()'>Cancel</button>\r\n              </div>\r\n              <hr>\r\n              <small class=\"text-grey text-xs\">Keep it updated for better job opportunities.</small>\r\n            </div>\r\n            <div class=\"p-3 mx-0 mb-3 bg-white w-100 border-8\" [formGroup]=\"profileForm\">\r\n              <div class=\"w-100\">\r\n                <div class=\"mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Personal Details </span>\r\n                  <span class=\"material-icons-outlined vertical-center text-violet text-md text-link\"\r\n                    (click)=\"basicInfoEdit()\">{{isBasiDetailEditing ? '' : 'edit'}} <span\r\n                      class=\"text-sm text-primary\">{{isBasiDetailEditing ? 'Cancel' : 'Edit'}}</span></span>\r\n                </div>\r\n                <div class=\"p-3\" [ngClass]=\"isBasiDetailEditing ? 'border-violet box-shadow' : ''\"\r\n                  style=\"border-radius: 6px;\">\r\n                  <div class=\"row col-sm-12 pt-3 mx-auto d-flex justify-content-between\"\r\n                    [ngClass]=\"isBasiDetailEditing ? '' : 'not-clickable'\">\r\n                    <div class=\" col-sm-6 mb-2\">\r\n                      <div class=\"label-form\">Phone number</div>\r\n                      <input class=\"form-control\" type=\"number\" placeholder=\"Enter phone number\"\r\n                      formControlName='mobile' name=\"mobile\">\r\n                      <div class=\"invalid-feedback\">\r\n                        Enter correct number\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mb-2\">\r\n                        <div class=\"label-form\">Gender</div>\r\n                        <select formControlName='gender' class=\"form-control\">\r\n                          <option value=\"\" selected>Select</option>\r\n                          <option value=\"Female\">Female</option>\r\n                          <option value=\"Male\">Male</option>\r\n                          <option value=\"Others\">Others</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mb-2\">\r\n                      <div class=\"label-form\">Martial Status</div>\r\n                        <select formControlName='martialStatus' class=\"form-control\" placeholder=\"Select\">\r\n                          <option value=\"Single\">Single</option>\r\n                          <option value=\"Married\">Married</option>\r\n                          <option value=\"Divorced\">Divorced</option>\r\n                          <option value=\"Widowed\">Widowed</option>\r\n                          <option value=\"Prefer not to say!\">Prefer not to say!</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mb-2\">\r\n                      <div class=\"label-form\">Nationality</div>\r\n                      <input class=\"form-control\" placeholder=\"Enter nationality\" formControlName='nationality'>\r\n                    </div>\r\n                    <div class=\"col-sm-6 mb-2\">\r\n                      <label for=\"dob\" class=\"label-form\">Date of Birth</label>\r\n                      <mat-form-field class=\"form-control pl-3 w-100\">\r\n                        <input  id=\"dob\" matInput readonly [matDatepicker]=\"picker1\" formControlName='dob' [max]=\"maxDob\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker1></mat-datepicker>\r\n                        <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint>\r\n                        <mat-error>Enter valid DOB</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-end\" *ngIf=\"isBasiDetailEditing\">\r\n                    <button class=\"btn btn-primary px-3 py-1\" (click)='saveBasicInfo()'>Save</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-4 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Skills </span>\r\n                  <span class=\"text-primary text-link\" (click)=\"openSkillModal(skillModal)\">Add Skill +</span>\r\n                </div>\r\n                <div class=\"row col-sm-11 d-flex justify-content-start\">\r\n                  <div class=\"col-sm-12 my-4\">\r\n                    <div *ngFor=\"let data of skillsArray; index as i\"\r\n                      class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm vertical-center\"\r\n                      style=\"display: inline-block; border-radius: 15px; width: max-content; margin: 3px !important; white-space:nowrap;\">\r\n                      <span class=\"text-grey mr-3 text-violet\">{{data}}</span>\r\n                      <span class=\"material-icons text-xs text-link\" (click)=\"removeTag(i)\">close</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <span class=\"text-sm text-fluid text-light-grey w-100 mx-3 mt-4\">Skills plays a major role to match a Job\r\n                  profile.</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-3 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Work Experience </span>\r\n                  <span class=\"text-primary text-link\" (click)=\"openWorkExpModal(workExp)\">Add Experience +</span>\r\n                </div>\r\n                <div class=\"w-100\">\r\n                  <div class=\"bg-grey mx-auto w-100\">\r\n                    <div *ngFor=\"let data of workExpArray; index as i\" class=\"w-100 text-break p-4 bg-white box-shadow\"\r\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\r\n                      <div class=\"d-flex justify-content-end\">\r\n                        <span class=\"material-icons-outlined text-primary text-smd mr-2 text-link\"\r\n                          (click)=\"editWorkExp(data, workExp, i)\">edit</span>\r\n                        <span class=\"material-icons-outlined text-primary text-smd text-link\"\r\n                          (click)=\"deleteWorkExp(i)\">delete</span>\r\n                      </div>\r\n                      <span class=\"text-smd d-block py-0 my-0 text-dark mr-3\"><b>{{data.title}}</b></span>\r\n                      <div class=\"d-flex justify-content-start vertical-center\">\r\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">{{data.companyName}}\r\n                        </span>\r\n                        <span class=\"material-icons text-dark bold text-xxs mr-1\">stop_circle</span>\r\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">\r\n                          {{data.type}}</span>\r\n                      </div>\r\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.startDate | date : 'MMMM\r\n                        yyyy'}} - {{data.isWorking === true ? 'Present' : data.endDate | date : 'MMMM\r\n                        yyyy'}}</span>\r\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.location}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-3 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Education </span>\r\n                  <span class=\"text-primary text-link\" (click)=\"openEducationModal(education)\">Add Education +</span>\r\n                </div>\r\n                <div class=\"w-100\">\r\n                  <div class=\"bg-grey my-4 w-100\">\r\n                    <div *ngFor=\"let data of educationArray; index as i\"\r\n                      class=\"w-100 text-break p-4 bg-white box-shadow\"\r\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\r\n                      <div class=\"d-flex justify-content-end\">\r\n                        <span class=\"material-icons-outlined text-primary text-smd mr-2 text-link\"\r\n                          (click)=\"editEducation(data, education, i)\">edit</span>\r\n                        <span class=\"material-icons-outlined text-primary text-smd text-link\"\r\n                          (click)=\"deleteEducation(i)\">delete</span>\r\n                      </div>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Degree/Standard : </b>{{data.degree}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>School : </b>{{data.school}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Field: </b>{{data.field}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Completion date : </b>{{data.completionDate\r\n                        |\r\n                        date\r\n                        :\r\n                        'dd\r\n                        MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>  \r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"vertical-center justify-content-between\">\r\n                <span class=\"text-black semi-bold myfont-size vertical-center ml-3\">Attach CV <span\r\n                    class=\"material-icons-outlined bold text-dark text-ssmd ml-2\">attachment</span></span>\r\n                <span class=\"text-primary text-link text-sm\" *ngIf=\"user.resume\" (click)=\"openResume()\"><u>Open\r\n                    Resume</u></span>\r\n              </div>\r\n              <div class=\"mt-2 row d-flex justify-content-center\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 d-flex justify-content-center\">\r\n                    <div class=\"my-4\">\r\n                      <label for=\"upload\">\r\n                        <span class=\"btn btn-primary vertical-center glyphicon glyphicon-folder-open\"\r\n                          aria-hidden=\"true\"><span class=\"material-icons text-primarymx-auto\">backup</span>&nbsp;\r\n                          &nbsp;{{user.resume\r\n                          ? \"Update Resume\" : \"Upload Resume\"}}</span>\r\n                        <input type=\"file\" id=\"upload\" style=\"display:none\" accept=\".pdf,.docx\"\r\n                          class=\"form-control-file\" (change)=\"fileChange($event)\">\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row justify-content-center my-2\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer-bottom bg-primary \">\r\n        <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #workExp>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px; max-height: 550px !important; overflow-y: auto;\">\r\n    <div class=\"d-block text-right\">\r\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <span class=\"text-grey semi-bold d-block text-center mb-2\">{{workExpToUpdate !== undefined ? 'UPDATE' : 'ADD'}}\r\n      EXPERIENCE DETAILS</span>\r\n    <div class=\"row p-0 px-2 m-3\" [formGroup]=\"workExpForm\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Title</mat-label>\r\n          <input matInput placeholder=\"Enter field\" class=\"p-0\" formControlName='title'>\r\n          <mat-error>Enter valid title</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - Software Developer</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Job Type</mat-label>\r\n          <mat-select formControlName='type'>\r\n            <mat-option value=\"Full Time\">\r\n              Full Time\r\n            </mat-option>\r\n            <mat-option value=\"Part Time\">\r\n              Part Time\r\n            </mat-option>\r\n            <mat-option value=\"Freelance\">\r\n              Freelance\r\n            </mat-option>\r\n            <mat-option value=\"Trainee\">\r\n              Trainee\r\n            </mat-option>\r\n            <mat-option value=\"Internship\">\r\n              Internship\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Company Name</mat-label>\r\n          <input matInput placeholder=\"Enter Company Name\" class=\"p-0\" formControlName='companyName'>\r\n          <mat-error>Enter valid company name</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - Microsoft</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Location</mat-label>\r\n          <input matInput placeholder=\"Enter Location\" class=\"p-0\" formControlName='location'>\r\n          <mat-error>Enter valid location</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - United States</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-checkbox class=\"example-margin\" formControlName='isWorking'>Present Working</mat-checkbox>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3 row mt-3 d-flex justify-content-between\">\r\n        <mat-form-field appearance=\"outline\" class=\"p-0 col-sm-5 mat-form-field \">\r\n          <mat-label class=\"text-grey\">Start Date</mat-label>\r\n          <input matInput readonly [matDatepicker]=\"picker1\" formControlName='startDate'>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n          <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint>\r\n          <mat-error>Enter valid date</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" class=\"p-0 col-sm-5 mat-form-field\"\r\n          *ngIf=\"workExpForm.get('isWorking').value !== true\">\r\n          <mat-label  class=\"text-grey\">End Date</mat-label>\r\n          <input matInput readonly [matDatepicker]=\"picker2\" formControlName='endDate'>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker2></mat-datepicker>\r\n          <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint>\r\n          <mat-error>Enter valid date</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Description</mat-label>\r\n          <input matInput placeholder=\"Enter field\" class=\"p-0\" formControlName='description'>\r\n          <mat-error>Enter Description</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\r\n      <button class=\"btn btn-primary py-1 px-2\" (click)=\"addWorkExp()\">Save</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #education>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px; max-height: 550px !important; overflow-y: auto;\">\r\n    <div class=\"d-block text-right\">\r\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <span class=\"text-grey semi-bold d-block text-center my-2\">{{educationToUpdate !== undefined ? 'UPDATE' : 'ADD'}}\r\n      EDUCATION DETAILS</span>\r\n    <div class=\"row p-0 px-2 m-3\" [formGroup]=\"educationDetailsForm\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Qualification</mat-label>\r\n          <input type=\"text\" placeholder=\"Ex. B.Tech\" aria-label=\"Number\" matInput formControlName='degree'\r\n            [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredQualifications | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Course Type</mat-label>\r\n          <mat-select formControlName='type'>\r\n            <mat-option value=\"Full Time\">\r\n              Full Time\r\n            </mat-option>\r\n            <mat-option value=\"Part Time\">\r\n              Part Time\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Field/Stream</mat-label>\r\n          <input matInput placeholder=\"Enter field\" class=\"p-0\" formControlName='field'>\r\n          <mat-error>Enter valid field</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - Computer Science</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Institute</mat-label>\r\n          <input matInput placeholder=\"Enter name\" class=\"p-0\" formControlName='school'>\r\n          <mat-error>Enter valid name</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - Oxford university</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Institute Location</mat-label>\r\n          <input matInput placeholder=\"Enter name\" class=\"p-0\" formControlName='location'>\r\n          <mat-error>Enter valid location</mat-error>\r\n          <mat-hint class=\"text-light-grey text-xs\">Ex - England</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field appearance=\"outline\" class=\"p-0 w-75 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Completion date</mat-label>\r\n          <input matInput readonly [matDatepicker]=\"picker1\" formControlName='completionDate'>\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n          <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint>\r\n          <mat-error>Enter valid date</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\r\n      <button class=\"btn btn-primary py-1 px-2\" (click)=\"addEducation()\">Save</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #skillModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px;\">\r\n    <div class=\"d-block text-right\">\r\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <span class=\"text-lato semi-bold d-block text-center my-2\">ADD SKILL</span>\r\n    <div class=\"row p-0 px-2 m-3\" [formGroup]=\"educationDetailsForm\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Skill Name</mat-label>\r\n          <input type=\"text\" placeholder=\"Ex. JAVA\" aria-label=\"Number\" matInput [formControl]=\"skillName\"\r\n            [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\r\n      <button class=\"btn btn-primary py-1 px-2\" (click)=\"addSkill()\">ADD SKILL</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "Pqrg":
    /*!***************************************************************!*\
      !*** ./src/app/user/user-messages/user-messages.component.ts ***!
      \***************************************************************/

    /*! exports provided: UserMessagesComponent */

    /***/
    function Pqrg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMessagesComponent", function () {
        return UserMessagesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-messages.component.html */
      "5muk");
      /* harmony import */


      var _user_messages_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-messages.component.scss */
      "38PL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserMessagesComponent = /*#__PURE__*/function () {
        function UserMessagesComponent() {
          _classCallCheck(this, UserMessagesComponent);
        }

        _createClass(UserMessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserMessagesComponent;
      }();

      UserMessagesComponent.ctorParameters = function () {
        return [];
      };

      UserMessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-messages',
        template: _raw_loader_user_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_messages_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserMessagesComponent);
      /***/
    },

    /***/
    "R9iS":
    /*!***************************************************************!*\
      !*** ./src/app/user/user-profile/user-profile.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function R9iS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n:root {\n  --progress-bar-width-my-profile: 0px;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\ninput::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n.myfont-size {\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBeUQsNkJBQTZCO0FBQ3RGOztBQUFBO0VBQTBDLFdBQVc7RUFBRSxlQUFlO0FBS3RFOztBQUhBO0VBQ0kseUNBQXdDO0FBTTVDOztBQUhFO0VBQ0Usd0JBQXdCO0FBTTVCOztBQUhFO0VBQ0Usb0NBQWdDO0FBTXBDOztBQUpFO0VBQWdCLHlDQUFBO0VBRWQsVUFBVTtFQUFFLFlBQUE7QUFRaEI7O0FBVkU7RUFBZ0IseUNBQUE7RUFFZCxVQUFVO0VBQUUsWUFBQTtBQVFoQjs7QUFMRTtFQUNFLHNCQUFzQjtBQVExQjs7QUFMRTtFQUNFLHNCQUFzQjtBQVExQjs7QUFMRTtFQUNFLGVBQWU7QUFRbkIiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuOWVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS4zZW07IGZvbnQtc2l6ZTogMTVweDsgfVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjFlbSkgc2NhbGUoLjc1KTtcclxufVxyXG5cclxuICA6Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxMjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6cm9vdCB7XHJcbiAgICAtLXByb2dyZXNzLWJhci13aWR0aC1teS1wcm9maWxlOiAwcHg7XHJcbiAgfVxyXG4gIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIC8vY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcblxyXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubXlmb250LXNpemV7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "VnIl":
    /*!*******************************************************!*\
      !*** ./src/app/user/user-page/user-page.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserPageComponent */

    /***/
    function VnIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
        return UserPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-page.component.html */
      "uXZ/");
      /* harmony import */


      var _user_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-page.component.scss */
      "IbmB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserPageComponent = /*#__PURE__*/function () {
        function UserPageComponent() {
          _classCallCheck(this, UserPageComponent);
        }

        _createClass(UserPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserPageComponent;
      }();

      UserPageComponent.ctorParameters = function () {
        return [];
      };

      UserPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-page',
        template: _raw_loader_user_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserPageComponent);
      /***/
    },

    /***/
    "Yu5h":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: UserRoutingModule */

    /***/
    function Yu5h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
        return UserRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-applications/my-applications.component */
      "fFEB");
      /* harmony import */


      var _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-detail/job-detail.component */
      "tVCz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-dashboard/user-dashboard.component */
      "hxRI");
      /* harmony import */


      var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-profile/user-profile.component */
      "xAyl");
      /* harmony import */


      var _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-messages/user-messages.component */
      "Pqrg");
      /* harmony import */


      var _user_jobs_user_jobs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./user-jobs/user-jobs.component */
      "Ch/j");
      /* harmony import */


      var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-page/user-page.component */
      "VnIl");
      /* harmony import */


      var _usermenu_usermenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./usermenu/usermenu.component */
      "aIz8");
      /* harmony import */


      var _refered_profiles_refered_profiles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./refered-profiles/refered-profiles.component */
      "Nv7c");

      var routes = [{
        path: '',
        component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"],
        children: [{
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        }, {
          path: 'dashboard',
          component: _usermenu_usermenu_component__WEBPACK_IMPORTED_MODULE_11__["UsermenuComponent"]
        }, {
          path: 'profile',
          component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"]
        }, {
          path: 'organizations',
          component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__["UserPageComponent"]
        }, {
          path: 'jobs',
          component: _user_jobs_user_jobs_component__WEBPACK_IMPORTED_MODULE_9__["UserJobsComponent"]
        }, {
          path: 'jobs/job-detail/:id',
          component: _job_detail_job_detail_component__WEBPACK_IMPORTED_MODULE_2__["JobDetailComponent"]
        }, {
          path: 'my-applications',
          component: _my_applications_my_applications_component__WEBPACK_IMPORTED_MODULE_1__["MyApplicationsComponent"]
        }, {
          path: 'referred',
          component: _refered_profiles_refered_profiles_component__WEBPACK_IMPORTED_MODULE_12__["ReferedProfilesComponent"]
        }, {
          path: 'messages',
          component: _user_messages_user_messages_component__WEBPACK_IMPORTED_MODULE_8__["UserMessagesComponent"]
        }]
      }];

      var UserRoutingModule = function UserRoutingModule() {
        _classCallCheck(this, UserRoutingModule);
      };

      UserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      })], UserRoutingModule);
      /***/
    },

    /***/
    "aIz8":
    /*!*****************************************************!*\
      !*** ./src/app/user/usermenu/usermenu.component.ts ***!
      \*****************************************************/

    /*! exports provided: UsermenuComponent */

    /***/
    function aIz8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsermenuComponent", function () {
        return UsermenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_usermenu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./usermenu.component.html */
      "JbCj");
      /* harmony import */


      var _usermenu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usermenu.component.scss */
      "l71B");
      /* harmony import */


      var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/enums */
      "pzb0");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var UsermenuComponent = /*#__PURE__*/function () {
        function UsermenuComponent(menu, modalService, toast, dbService) {
          _classCallCheck(this, UsermenuComponent);

          this.menu = menu;
          this.modalService = modalService;
          this.toast = toast;
          this.dbService = dbService;
          this.isServiceRunning = false;
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/referer/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/referer/profile'
          }, {
            name: 'JOB POSTS',
            route: '/referer/jobs'
          }, {
            name: 'APPLIED JOB',
            route: '/referer/my-applications'
          }, {
            name: 'REFERRED PROFILE',
            route: '/referer/referred'
          }]; // feedback------------------

          this.type = null;
          this.description = '';
        }

        _createClass(UsermenuComponent, [{
          key: "scrollToJobs",
          value: function scrollToJobs() {
            document.getElementById('jobs').scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, {
          key: "getName",
          value: function getName(name) {
            return name.split(' ')[0];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = JSON.parse(window.atob(window.localStorage.getItem('id'))); // this.user = this.authService.user;

            this.getUser();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (window.screen.width < 990) {
              this.menu.toggle();
            }
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this5 = this;

            // this.isServiceRunning = true;
            this.dbService.find({
              collection: 'users',
              query: {
                _id: this.user._id
              }
            }).subscribe(function (data) {
              if (data.data.length > 0) {
                _this5.user = data.data[0]; // this.setBasicInfo();
                // this.isServiceRunning = false;

                window.localStorage.setItem('id', window.btoa(JSON.stringify(_this5.user)));
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              "class": 'half-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modalRef.hide();
          }
        }, {
          key: "loggedOut",
          value: function loggedOut() {
            this.modalRef.hide();
            window.localStorage.removeItem('id');
            window.location.reload();
          }
        }, {
          key: "send",
          value: function send() {
            var _this6 = this;

            if (this.type) {
              var arr = this.description.split(' ');

              if (arr.length > 9) {
                var db = {
                  collection: 'feedback',
                  data: {
                    email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email,
                    name: JSON.parse(window.atob(window.localStorage.getItem('id'))).name,
                    type: this.type,
                    description: this.description,
                    createdAt: new Date(),
                    from: src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].CANDIDATE
                  }
                };
                this.dbService.create(db).then(function (data) {
                  if (data.data) {
                    _this6.toast.showToast('Sent Successfully!');

                    _this6.cancel();
                  } else {
                    _this6.toast.showToast('Something went wrong!', 'bg-danger');
                  }
                });
              } else {
                this.toast.showToast('Please enter description of minimum 10 words!', 'bg-danger');
              }
            } else {
              this.toast.showToast('Please Select Type!', 'bg-danger');
            }
          }
        }]);

        return UsermenuComponent;
      }();

      UsermenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      UsermenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-usermenu',
        template: _raw_loader_usermenu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usermenu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UsermenuComponent);
      /***/
    },

    /***/
    "fFEB":
    /*!*******************************************************************!*\
      !*** ./src/app/user/my-applications/my-applications.component.ts ***!
      \*******************************************************************/

    /*! exports provided: MyApplicationsComponent */

    /***/
    function fFEB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyApplicationsComponent", function () {
        return MyApplicationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_my_applications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./my-applications.component.html */
      "H/6N");
      /* harmony import */


      var _my_applications_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./my-applications.component.scss */
      "EqXQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/job-post-service.service */
      "hLKV");

      var MyApplicationsComponent = /*#__PURE__*/function () {
        function MyApplicationsComponent(jobService, router) {
          _classCallCheck(this, MyApplicationsComponent);

          this.jobService = jobService;
          this.router = router;
          this.isServiceRunning = false;
          this.hiredJobs = 0;
          this.shortlistedJobs = 0;
          this.allAppliedPosts = [];
          this.allJobPosts = [];
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/referer/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/referer/profile'
          }, {
            name: 'JOB POSTS',
            route: '/referer/jobs'
          }, {
            name: 'APPLIED JOB',
            route: '/referer/my-applications'
          }, {
            name: 'REFERRED PROFILE',
            route: '/referer/referred'
          }];
        }

        _createClass(MyApplicationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.isServiceRunning = true;
            this.jobService.getMyApplications();
            this.jobService.myApplications.subscribe(function (data) {
              if (data.length > 0) {
                _this7.isServiceRunning = false;
                _this7.allAppliedPosts = [];

                _this7.getAllAppliedPosts(data);
              }
            });
          }
        }, {
          key: "getAllAppliedPosts",
          value: function getAllAppliedPosts(data) {
            var _this8 = this;

            this.isServiceRunning = true;
            this.allAppliedPosts.length = 0;
            data.forEach(function (post, index) {
              _this8.jobService.getJobPost({
                id: post.jobPostId
              }).subscribe(function (jobPost) {
                if (jobPost.data !== null && jobPost.data !== undefined) {
                  jobPost.appliedDate = post.date;
                  jobPost.status = post.status;

                  if (jobPost.status === 'Hired') {
                    _this8.hiredJobs++;
                  }

                  if (jobPost.status === 'Shortlisted') {
                    _this8.shortlistedJobs++;
                  }

                  jobPost.jobPost = jobPost.data.jobPost;
                  jobPost.referReward = jobPost.data.referReward;

                  _this8.allAppliedPosts.push(jobPost);
                }

                if (index === data.length - 1) {
                  _this8.isServiceRunning = false;

                  _this8.allAppliedPosts.sort(function (a, b) {
                    var dateA = new Date(a.appliedDate).getTime();
                    var dateB = new Date(b.appliedDate).getTime();
                    return dateB - dateA;
                  });
                }
              });
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(id) {
            this.router.navigateByUrl("/referer/jobs/job-detail/".concat(id));
          }
        }, {
          key: "getExperience",
          value: function getExperience(value) {
            return "".concat(value, " - ").concat(value + 1);
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(date) {
            var date1 = new Date();
            var date2 = new Date(date);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 7;
          }
        }]);

        return MyApplicationsComponent;
      }();

      MyApplicationsComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__["JobPostServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      MyApplicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-my-applications',
        template: _raw_loader_my_applications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_applications_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyApplicationsComponent);
      /***/
    },

    /***/
    "hxRI":
    /*!*****************************************************************!*\
      !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserDashboardComponent */

    /***/
    function hxRI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
        return UserDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-dashboard.component.html */
      "6nqn");
      /* harmony import */


      var _user_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-dashboard.component.scss */
      "0TkN");
      /* harmony import */


      var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/enums */
      "pzb0");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var UserDashboardComponent = /*#__PURE__*/function () {
        function UserDashboardComponent(menu, modalService, toast, dbService) {
          _classCallCheck(this, UserDashboardComponent);

          this.menu = menu;
          this.modalService = modalService;
          this.toast = toast;
          this.dbService = dbService;
          this.type = null;
          this.description = '';
        }

        _createClass(UserDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggle",
          value: function toggle() {
            this.menu.toggle();
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.toggle();
            this.modalRef = this.modalService.show(template, {
              "class": 'half-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modalRef.hide();
          }
        }, {
          key: "loggedOut",
          value: function loggedOut() {
            this.modalRef.hide();
            window.localStorage.removeItem('id');
            window.location.reload();
          }
        }, {
          key: "send",
          value: function send() {
            var _this9 = this;

            if (this.type) {
              var arr = this.description.split(' ');

              if (arr.length > 9) {
                var db = {
                  collection: 'feedback',
                  data: {
                    email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email,
                    name: JSON.parse(window.atob(window.localStorage.getItem('id'))).name,
                    type: this.type,
                    description: this.description,
                    createdAt: new Date(),
                    from: src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].CANDIDATE
                  }
                };
                this.dbService.create(db).then(function (data) {
                  if (data.data) {
                    _this9.toast.showToast('Sent Successfully!');

                    _this9.cancel();
                  } else {
                    _this9.toast.showToast('Something went wrong!', 'bg-danger');
                  }
                });
              } else {
                this.toast.showToast('Please enter description of minimum 10 words!', 'bg-danger');
              }
            } else {
              this.toast.showToast('Please Select Type!', 'bg-danger');
            }
          }
        }]);

        return UserDashboardComponent;
      }();

      UserDashboardComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      UserDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-user-dashboard',
        template: _raw_loader_user_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserDashboardComponent);
      /***/
    },

    /***/
    "l71B":
    /*!*******************************************************!*\
      !*** ./src/app/user/usermenu/usermenu.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function l71B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n.card-style {\n  border-style: none;\n  width: 100px;\n  margin: 30px 30px;\n  border-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VybWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUF5RCw2QkFBNkI7QUFFdEY7O0FBREE7RUFBMEMsV0FBVztFQUFFLGVBQWU7QUFNdEU7O0FBSkE7RUFDSSx5Q0FBd0M7QUFPNUM7O0FBSkE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFPdEIiLCJmaWxlIjoidXNlcm1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjllbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbn1cclxuXHJcbi5jYXJkLXN0eWxle1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDMwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "nxrv":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/job-detail/job-detail.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nxrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"overflow-auto\">\r\n\r\n<div class=\"bg-lightest-blue wh-100 overflow-x-hidden\" style=\"overflow-y: auto; \">\r\n  <div class=\"row justify-content-center px-1\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"card shadow-lg p-3 border-8 m-3 col-sm-8 \"\r\n      style=\"margin-top: 30px !important; border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\r\n\r\n      <div class=\"row justify-content-between\" style=\"height: fit-content;\">\r\n        <div class=\"d-flex flex-wrap ml-3\">\r\n          <div class=\"mr-3 mb-2\">\r\n            <span>\r\n              <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                style=\"max-height: 70px; max-width: 160px; min-height: 70px; min-width: 70px;border-color: black;\">\r\n            </span>\r\n          </div>\r\n          <div class=\"text-left\">\r\n            <h4>{{jobPost.jobPost.title}}</h4>\r\n            <div class=\"column\">\r\n              <div class=\"d-flex vertical-center flex-wrap\">\r\n                <div class=\" vertical-center justify-content-start mr-3\">\r\n                  <span class=\"material-icons-outlined  mr-2 text-navy-blue\">work</span>\r\n                  <span class=\" text-lato text-navy-blue d-inline\">Experience : </span>\r\n                  <span class=\"text-lato text-navy-blue\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                    ''\r\n                    }}\r\n                    years</span>\r\n                </div>\r\n\r\n                <div class=\" vertical-center justify-content-start mr-3\">\r\n                  <span class=\"material-icons  mr-2 text-navy-blue\">business</span>\r\n                  <span class=\" text-lato text-navy-blue d-inline\">Company : </span>\r\n                  <span class=\" text-lato text-navy-blue\">&nbsp; {{jobPost.jobPost.companyName}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex flex-wrap mt-1\">\r\n                <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                  class=\" vertical-center justify-content-start mr-2\">\r\n                  <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">location_on</span>\r\n                  <span class=\" text-lato text-smd text-navy-blue\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                </div>\r\n\r\n                <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                  class=\" vertical-center justify-content-start mr-2\">\r\n                  <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">home</span>\r\n                  <span class=\" text-lato text-smd text-navy-blue d-inline\">Work from home</span>\r\n                </div>\r\n                <div class=\"vertical-center justify-content-start mr-2\">\r\n                  <span class=\"material-icons-outlined text-navy-blue text-md mr-2\">play_arrow</span>\r\n                  <span class=\"text-smd text-lato text-navy-blue d-inline\">Start Date : </span>\r\n                  <span class=\"text-lato text-navy-blue\">&nbsp; {{getStartDate(jobPost.jobPost.startDate) ?\r\n                    (jobPost.jobPost.startDate | date:\r\n                    'dd MMMM yyyy' ) : 'Immediately'}}</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex flex-wrap mt-1\">\r\n                <div class=\"vertical-center justify-content-start mr-2\">\r\n                  <span class=\"material-icons-outlined text-navy-blue mr-2\">payments</span>\r\n                  <span class=\"text-smd text-lato text-navy-blue d-inline\">{{jobPost.jobPost.jobInternship === 'Job' ?\r\n                    'Salary'\r\n                    :\r\n                    'Stipend'}}\r\n                    :\r\n                  </span>\r\n                  <span class=\"text-lato text-navy-blue\">&nbsp; &#8377; {{jobPost.jobPost.salary}}\r\n                    {{jobPost.jobPost.salaryType}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mr-2 ml-3 justify-content-right\">\r\n          <div class=\"text-right pt-2\">\r\n            <span class=\"px-2 py-1 text-navy-blue bg-lightest-blue mr-2 border-6 text-lato text-slmd\r\n        badge badge-light\">{{jobPost.jobPost.jobInternship}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row justify-content-center mt-4 mb-2\">\r\n        <div class=\"col-sm-5 mb-2 ml-4 justify-content-center\">\r\n          <button class=\"btn btn-primary px-3 py-2 w-80 text-wrap\"\r\n            [ngClass]=\"appliedDate !== undefined ? 'bg-light text-dark' : 'bg-primary'\"\r\n            [disabled]=\"appliedDate !== undefined\" (click)=\"applyJobModal(applyModal)\">{{appliedDate !== undefined ?\r\n            'Applied on ' : 'Apply now'}} {{appliedDate\r\n            | date: 'dd MMMM yyyy'}}</button>\r\n        </div>\r\n        <div class=\"col-sm-5 mb-2 ml-4 justify-content-center\">\r\n          <button class=\"btn btn-primary px-3 py-2 w-80 h-100\" (click)=\"referJobModal(referModal)\">\r\n            Refer\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card shadow-lg p-3 border-8 mb-3 ml-3 mr-3 col-sm-8\"\r\n      style=\"border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\r\n      <div>\r\n        <span class=\"text-black semi-bold myfont-size d-block mt-3\">About {{jobPost.jobPost.companyName}}</span>\r\n        <span class=\"text-break text-grey\">{{jobPost.jobPost.aboutUs}}</span>\r\n      </div>\r\n      <div>\r\n        <span class=\"text-black semi-bold myfont-size d-block my-3\">Skills Required</span>\r\n        <div class=\"d-inline m-2\" style=\"display: inline-block !important;\" *ngFor=\"let skill of skills\">\r\n          <span *ngIf=\"skill.skillName\" class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm\"\r\n            style=\"border-radius: 6px; margin: 8px;\">{{skill.skillName}}</span>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"jobPost.jobPost.details\">\r\n        <span class=\"text-black semi-bold myfont-size d-block my-3\">Job Description</span>\r\n        <!--<div *ngIf=\"jobPost.jobPost.details.length > 0\">\r\n          <div *ngFor=\"let detail of jobPost.jobPost.details\">\r\n            <span *ngIf=\"detail.detail\" class=\"vertical-center text-ssmd text-grey px-3 py-2  m-2 bg-light\"> <span\r\n                class=\"material-icons-outlined text-sm text-grey mr-2\">circle</span> &nbsp; {{detail.detail}}</span>\r\n          </div>\r\n        </div>-->\r\n        <div *ngIf=\"jobPost.jobPost.details\">\r\n          <p class=\"text-sm\" style=\"white-space: pre-wrap;\">{{jobPost.jobPost.details}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"pt-2\">\r\n        <span class=\"text-black semi-bold myfont-size d-block my-3\">Number of Openings</span>\r\n        <span class=\"text-break text-grey\">{{jobPost.jobPost.vacancy}}</span>\r\n      </div>\r\n      <div class=\"pt-2 row justify-content-between vertical-center my-4 mb-3\">\r\n        <span class=\"text-black semi-bold d-block m-3\">Referral reward:\r\n          <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">\r\n            ₹ {{jobPost.referReward}}</div>\r\n        </span>\r\n        <span class=\"text-right text-grey text-sm text-break col-auto\">Posted on&nbsp;{{jobPost.jobPost.createdAt |\r\n          date: 'dd\r\n          MMMM\r\n          yyyy'}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-bottom bg-primary \">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<ng-template class=\"p-2\" #applyModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px;\">\r\n    <span class=\"d-block material-icons text-grey text-link text-right\" (click)=\"closeModal()\">close</span>\r\n    <span class=\"d-block text-lato bold mb-2\">Read before you apply - </span>\r\n    <span class=\"d-block text-lato text-secondary\">Make sure that you have entered correct details in your profile.</span>\r\n    <span class=\"d-block text-lato text-secondary\">Your profile data and resume will be shared with the\r\n      {{jobPost.jobPost.companyName}}</span>\r\n    <div class=\"w-100 d-flex justify-content-center mb-3 pt-5\">\r\n      <button class=\"btn btn-primary px-4 py-2\"\r\n        (click)=\"checkProfileDetails(errorModal, questionModal)\">Proceed</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template class=\"p-2\" #errorModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px;\">\r\n    <span class=\"d-block material-icons text-grey text-link text-right\" (click)=\"closeModal()\">close</span>\r\n    <span class=\"d-block text-secondary\">Your profile does not have enough details to apply.</span>\r\n    <span class=\"d-block text-secondary\">Complete your profile in my profile section.\r\n    </span>\r\n    <div class=\"w-100 d-flex justify-content-center my-4 pt-5\">\r\n      <button class=\"btn btn-primary px-4 py-2\" (click)=\"navigate()\">Add Details</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template class=\"p-2\" #questionModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px;\">\r\n    <div class=\"d-block mb-0 text-right\">\r\n      <span class=\"material-icons text-grey text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <div class=\"mb-4\" *ngFor=\"let data of questionsAnswers; index as i\">\r\n      <span class=\"text-dark text-sm d-block mb-3\">Question {{ i + 1}}. &nbsp;{{data.question}}</span>\r\n      <textarea class=\"form-control my-2\" placeholder=\"Type your answer\" [(ngModel)]=\"data.answer\"\r\n        [ngModelOptions]=\"{standalone: true}\" rows=\"3\"></textarea>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-center mb-3 pt-5\">\r\n      <button class=\"btn btn-primary px-4 py-2\" (click)=\"submit()\">Submit</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template class=\"p-2\" #referModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px; max-height: 600px; overflow-y: scroll;\"\r\n    [formGroup]=\"referJobPostForm\">\r\n    <div class=\"d-block mb-0 text-right\">\r\n      <span class=\"material-icons text-grey text-link\" (click)=\"closeModal(0)\">close</span>\r\n    </div>\r\n    <span class=\"ml-4 d-block text-lato\">Enter the details of the person whom you are referring </span>\r\n    <div class=\"row p-0 m-3\">\r\n      <div class=\"col-sm-12 mb-2\">\r\n        <mat-form-field class=\"p-0 w-100\">\r\n          <mat-label class=\"p-0 text-grey\">Name</mat-label>\r\n          <input matInput placeholder=\"Enter name\" autocomplete=\"none\" class=\"p-0\" formControlName='name'>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mb-2\">\r\n        <mat-form-field class=\"p-0 w-100\">\r\n          <mat-label class=\"p-0 text-grey\">Father's Name</mat-label>\r\n          <input matInput placeholder=\"Enter father name\" autocomplete=\"none\" class=\"p-0\" formControlName='fatherName'>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mb-2\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"p-0 text-grey\">Email</mat-label>\r\n          <input matInput placeholder=\"Enter email\" autocomplete=\"none\" class=\"p-0\" formControlName='email'>\r\n          <mat-error>Enter valid email</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-12 mb-2\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Date of Birth</mat-label>\r\n          <input matInput readonly [matDatepicker]=\"picker1\" formControlName='dob' [max]=\"maxDob\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n          <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint>\r\n          <mat-error>Enter valid DOB</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row p-0 m-3\">\r\n      <span class=\"text-grey w-100 col-sm-12 mb-2\">Upload resume : </span>\r\n      <div class=\"col-sm-12\">\r\n        <span class=\"material-icons mx-auto text-lg text-primary\">backup</span>\r\n        <span class=\"form-group\">\r\n          <input type=\"file\" accept=\".pdf,.docx\" formControlName='resume' (change)=\"uploadResume($event)\"\r\n            class=\"form-control-file\" id=\"exampleFormControlFile1\">\r\n        </span>\r\n        <mat-error *ngIf=\"!referJobPostForm.get('resume').valid && referJobPostForm.get('resume').touched\">Select\r\n          resume of candidate</mat-error>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-center mt-3\">\r\n      <button class=\"btn btn-primary px-5 py-2\" (click)=\"referJobPost()\">Refer</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "tVCz":
    /*!*********************************************************!*\
      !*** ./src/app/user/job-detail/job-detail.component.ts ***!
      \*********************************************************/

    /*! exports provided: JobDetailComponent */

    /***/
    function tVCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobDetailComponent", function () {
        return JobDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_job_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./job-detail.component.html */
      "nxrv");
      /* harmony import */


      var _job_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-detail.component.scss */
      "CrqN");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _shared_services_refer_job_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../shared/services/refer-job-post.service */
      "G2Xt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../shared/services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/models/enums */
      "pzb0");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_12__);

      var JobDetailComponent = /*#__PURE__*/function () {
        function JobDetailComponent(jobPostService, route, modalService, toastService, referService, dbService, router) {
          _classCallCheck(this, JobDetailComponent);

          this.jobPostService = jobPostService;
          this.route = route;
          this.modalService = modalService;
          this.toastService = toastService;
          this.referService = referService;
          this.dbService = dbService;
          this.router = router;
          this.isServiceRunning = false;
          this.maxDob = new Date(2006, 11, 31);
          this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
          this.jobPost = {};
          this.post = {};
          this.skills = [];
          this.fileData = undefined;
          this.filename = undefined;
          this.appliedDate = undefined;
          this.status = src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_11__["Status"];
          this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : 'https://instajobapp.herokuapp.com';
          this.basePath = '/refered-resumes';
          this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });
          this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          this.questionsAnswers = [];
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/referer/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/referer/profile'
          }, {
            name: 'JOB POSTS',
            route: '/referer/jobs'
          }, {
            name: 'APPLIED JOB',
            route: '/referer/my-applications'
          }, {
            name: 'REFERRED PROFILE',
            route: '/referer/referred'
          }];
        }

        _createClass(JobDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.referJobPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
              resume: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
            });
            this.isServiceRunning = true;
            this.jobPostService.getMyApplications();
            this.jobPost.jobPost = {};
            this.jobPost.jobPost.details = [];
            this.route.params.subscribe(function (params) {
              if (params.id) {
                _this10.jobId = params.id;

                _this10.jobPostService.myApplications.subscribe(function (data) {
                  data.forEach(function (post) {
                    if (post.jobPostId === params.id) {
                      _this10.appliedDate = post.date;
                    }
                  });
                });

                _this10.jobPostService.getJobPost({
                  id: params.id
                }).subscribe(function (data) {
                  _this10.jobPost = data.data;
                  _this10.isServiceRunning = false;
                  _this10.skills = _this10.jobPost.jobPost.skills;
                }, function (err) {
                  return console.log(err);
                });
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "applyJobModal",
          value: function applyJobModal(template) {
            this.modalRef = this.modalService.show(template, {
              "class": 'half-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "checkProfileDetails",
          value: function checkProfileDetails(template, template1) {
            this.modalRef.hide();

            if (this.user) {
              if (this.user.skills) {
                if (this.user.skills.length > 0) {
                  if (this.user.resume) {
                    this.checkQuestion(template1);
                  } else {
                    this.openProfileError(template);
                  }
                } else {
                  this.openProfileError(template);
                }
              } else {
                this.openProfileError(template);
              }
            } else {
              this.openProfileError(template);
            }
          }
        }, {
          key: "openProfileError",
          value: function openProfileError(template) {
            this.modalRef = this.modalService.show(template, {
              id: 0,
              "class": 'min-overlay',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "checkQuestion",
          value: function checkQuestion(template) {
            var _this11 = this;

            if (this.jobPost.jobPost.question) {
              if (this.jobPost.jobPost.question.length > 0) {
                this.jobPost.jobPost.question.map(function (data) {
                  _this11.questionsAnswers.push({
                    question: data.question,
                    answer: ''
                  });
                });
                this.modalRef = this.modalService.show(template, {
                  id: 0,
                  "class": 'min-overlay',
                  ignoreBackdropClick: true,
                  animated: true
                });
              } else {
                this.applyJob();
              }
            } else {
              this.applyJob();
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this12 = this;

            var flag = true;
            this.questionsAnswers.map(function (data, index) {
              if (!data.answer) {
                flag = false;
              }

              if (_this12.questionsAnswers.length === index + 1) {
                if (flag) {
                  _this12.applyJob();
                } else {
                  _this12.toastService.showToast('Enter Answers', 'bg-danger');
                }
              }
            });
          }
        }, {
          key: "navigate",
          value: function navigate() {
            this.modalRef.hide();
            this.modalService.hide();
            this.router.navigateByUrl('/referer/profile');
          }
        }, {
          key: "referJobModal",
          value: function referJobModal(template) {
            this.referTemplate = template;
            this.modalService.show(template, {
              id: 0,
              "class": 'min-overlay',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "applyJob",
          value: function applyJob() {
            var _this13 = this;

            var obj = {
              candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
              jobPostId: this.jobPost._id,
              date: new Date()
            };
            this.jobPostService.applyJobPost(obj).subscribe(function (data) {
              if (data.data) {
                var mail = {
                  email: _this13.user.email,
                  subject: 'Applied Successfully!',
                  content: "<p>Hello ".concat(_this13.user.name, " </p><p>You have successfully applied for the role of ").concat(_this13.jobPost.jobPost.title, " at ").concat(_this13.jobPost.jobPost.companyName, ".</p><br><br><br>Thanks and Regards!<br><a style=\"color: blue;\" href=\"https://refer2career.com\">Refer2Career.com</a>")
                };

                _this13.dbService.sendMail(mail).subscribe(function (pata) {
                  if (pata.data) {
                    _this13.toastService.showToast('Applied successfully!');

                    _this13.jobPostService.getMyApplications();

                    _this13.modalRef.hide();
                  }
                });
              }
            });
          }
        }, {
          key: "referJobPost",
          value: function referJobPost() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this14 = this;

              var resume, db;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // const file: any;
                      this.referJobPostForm.markAllAsTouched();

                      if (this.referJobPostForm.valid) {
                        db = {
                          collection: 'referedProfiles',
                          query: {
                            email: this.referJobPostForm.get('email').value,
                            jobId: this.jobPost.jobPostId
                          }
                        };
                        this.dbService.find(db).subscribe(function (data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this15 = this;

                            var storageRef, time;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!(data.data.length === 0)) {
                                      _context2.next = 8;
                                      break;
                                    }

                                    storageRef = firebase__WEBPACK_IMPORTED_MODULE_12__["storage"]().ref();
                                    time = new Date().getTime();
                                    _context2.next = 5;
                                    return storageRef.child("".concat(this.basePath, "/").concat(this.referJobPostForm.get('name').value).concat(time).concat(this.filename)).put(this.fileData);

                                  case 5:
                                    storageRef.child("".concat(this.basePath, "/").concat(this.referJobPostForm.get('name').value).concat(time).concat(this.filename)).getDownloadURL().then(function (url) {
                                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                        var _this16 = this;

                                        var refer;
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                          while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                resume = url;
                                                this.fileData = undefined;

                                                if (resume && this.fileData === undefined) {
                                                  refer = {
                                                    resume: resume,
                                                    jobTitle: this.jobPost.jobPost.title,
                                                    companyName: this.jobPost.jobPost.companyName,
                                                    name: this.referJobPostForm.get('name').value,
                                                    email: this.referJobPostForm.get('email').value,
                                                    fatherName: this.referJobPostForm.get('fatherName').value,
                                                    dob: this.referJobPostForm.get('dob').value,
                                                    jobId: this.jobId,
                                                    referedBy: JSON.parse(window.atob(window.localStorage.getItem('id'))).email,
                                                    createdAt: new Date(),
                                                    status: 0,
                                                    statusUpdatedAt: new Date()
                                                  };
                                                  this.referService.referJobPost(refer).subscribe(function (ele) {
                                                    _this16.toastService.showToast('Refered successfully');

                                                    var mail = {
                                                      email: _this16.user.email,
                                                      subject: 'Refered Successfully!',
                                                      content: "<p>Hello ".concat(_this16.user.name, " </p><p>You have successfully refered ").concat(refer.name, " for the role of ").concat(_this16.jobPost.jobPost.title, " at ").concat(_this16.jobPost.jobPost.companyName, ".</p><br><br><br>Thanks and Regards!<br><a style=\"color: blue;\" href=\"https://refer2career.com\">Refer2Career.com</a>")
                                                    };

                                                    _this16.dbService.sendMail(mail).subscribe(function (pata) {
                                                      if (pata.data) {
                                                        var email = {
                                                          email: refer.email,
                                                          subject: "You have been refered by ".concat(_this16.user.name, "!"),
                                                          content: "<p>Hello ".concat(refer.name, " </p><p>You have been refered by ").concat(_this16.user.name, " for the role of ").concat(_this16.jobPost.jobPost.title, " at ").concat(_this16.jobPost.jobPost.companyName, ".</p><br><p><a style=\"color: blue;\" href=\"https://refer2career.com\">Login to Refer2Career</a> and increase chance to get hired by completing your profile.</p><br><br><br>Thanks and Regards!<br><a style=\"color: blue;\" href=\"https://refer2career.com\">Refer2Career.com</a>")
                                                        };

                                                        _this16.dbService.sendMail(email).subscribe(function (jata) {
                                                          if (jata.data) {}
                                                        });
                                                      }
                                                    });

                                                    _this16.modalService.hide();
                                                  });
                                                }

                                              case 3:
                                              case "end":
                                                return _context.stop();
                                            }
                                          }
                                        }, _callee, this);
                                      }));
                                    });
                                    _context2.next = 9;
                                    break;

                                  case 8:
                                    this.toastService.showToast('This profile is already refered for this job post!', 'bg-danger');

                                  case 9:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        });
                      }

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "uploadResume",
          value: function uploadResume(event) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            this.fileData = event.target.files[0];
            this.filename = event.target.files[0].name;
          }
        }, {
          key: "getExperience",
          value: function getExperience(value) {
            return "".concat(value, " - ").concat(value + 1);
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(date) {
            var date1 = new Date();
            var date2 = new Date(date);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 7;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (id === 0) {
              this.modalService.hide();
            } else {
              this.modalService.hide(id);
              this.referJobModal(this.referTemplate);
            }
          }
        }]);

        return JobDetailComponent;
      }();

      JobDetailComponent.ctorParameters = function () {
        return [{
          type: _shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_8__["JobPostServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
        }, {
          type: _shared_services_refer_job_post_service__WEBPACK_IMPORTED_MODULE_4__["ReferJobPostService"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }];
      };

      JobDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'app-job-detail',
        template: _raw_loader_job_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], JobDetailComponent);
      /***/
    },

    /***/
    "uXZ/":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-page/user-page.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function uXZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" class=\"bg-primary\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Organizations</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>";
      /***/
    },

    /***/
    "xAyl":
    /*!*************************************************************!*\
      !*** ./src/app/user/user-profile/user-profile.component.ts ***!
      \*************************************************************/

    /*! exports provided: UserProfileComponent */

    /***/
    function xAyl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return UserProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "PckL");
      /* harmony import */


      var _user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-profile.component.scss */
      "R9iS");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "g1va");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_11__);

      var UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent(storage, menu, modalRef, modalService, authService, toastService) {
          _classCallCheck(this, UserProfileComponent);

          this.storage = storage;
          this.menu = menu;
          this.modalRef = modalRef;
          this.modalService = modalService;
          this.authService = authService;
          this.toastService = toastService;
          this.basePath = '/profile-resumes';
          this.user = {};
          this.isEditing = false;
          this.isBasiDetailEditing = false;
          this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.skillsArray = [];
          this.isServiceRunning = false;
          this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
          });
          this.workExpToUpdate = undefined;
          this.workExpArray = [];
          this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.educationToUpdate = undefined;
          this.educationArray = [];
          this.cvHeadLine = '';
          this.isCVHeadEditing = false;
          this.maxDob = new Date(2006, 11, 31); // for education

          this.qualificationOptions = ['Diploma In Mechanical Engineering', 'Diploma In Civil Engineering', 'Diploma In Electrical Engineering', 'Diploma In Electronics And Communication Engineering', 'Diploma In Electrical & Electronics Engineering', 'Diploma In Computer Engineering', 'Diploma In Computer Science And Engineering', 'Diploma In Automobile Engineering', 'Diploma In Information Technology', 'Diploma In Electronics Engineering', 'Diploma In Chemical Engineering', 'Diploma In Electrical & Communication Engineering', 'Diploma In Production Engineering', 'Diploma In Mining Engineering', 'Diploma In Architecture Engineering', 'Diploma In Mechatronics', 'Diploma In Electronics', 'Diploma In Printing Technology', 'Diploma In Fire And Safety Management', 'Diploma In Biomedical Engineering', 'Diploma In Sound Engineering', 'Diploma In Marine Engineering', 'Bachelor Of Technology(Mechanical Engineering)', 'Bachelor Of Technology(Computer Science And Engineering)', 'Bachelor Of Technology(Civil Engineering)', 'Bachelor Of Technology (Electronics & Communication Engineering)', 'Bachelor Of Business Administration [BBA]', 'Bachelor Of Business Management [BBM]', 'Bachelor Of Business Administration [BBA] (Marketing)', 'Bachelor Of Business Administration [BBA] (Human Resource Management)', 'Bachelor Of Management Studies [BMS]', 'Bachelor Of Business Administration [BBA] (Finance)', 'Bachelor Of Business Administration [BBA] {Hons.}', 'Bachelor Of Business Administration [BBA] (International Business)', 'Bachelor Of Tourism And Travel Management [BTTM]', 'Bachelor Of Science [B.Sc] (Physics)', 'Bachelor Of Science h [B.Sc] (Chemistry)', 'Bachelor Of Science [B.Sc] (Computer Science)', 'Bachelor Of Science [B.Sc] (Mathematics)', 'Bachelor Of Science [B.Sc] (Zoology)', 'Bachelor Of Science [B.Sc] (Botany)', 'Bachelor Of Science [B.Sc] (Biotechnology)', 'Bachelor Of Science [B.Sc] (Microbiology)', 'Bachelor Of Science [B.Sc] (Information Technology)', 'Bachelor Of Science [B.Sc]'];
          this.skillsOptions = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS', 'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/referer/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/referer/profile'
          }, {
            name: 'JOB POSTS',
            route: '/referer/jobs'
          }, {
            name: 'APPLIED JOB',
            route: '/referer/my-applications'
          }, {
            name: 'REFERRED PROFILE',
            route: '/referer/referred'
          }];
          this.percent = 12;
        }

        _createClass(UserProfileComponent, [{
          key: "openResume",
          value: function openResume() {
            window.open(this.user.resume, '_blank');
          }
        }, {
          key: "uploadResume",
          value: function uploadResume() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this17 = this;

              var storageRef, time;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.isServiceRunning = true;
                      storageRef = firebase__WEBPACK_IMPORTED_MODULE_11__["storage"]().ref();
                      time = new Date().getTime();
                      _context5.next = 5;
                      return storageRef.child("".concat(this.basePath, "/").concat(this.user.name).concat(time).concat(this.filename)).put(this.blob);

                    case 5:
                      storageRef.child("".concat(this.basePath, "/").concat(this.user.name).concat(time).concat(this.filename)).getDownloadURL().then(function (url) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var _this18 = this;

                          var dbOpeartion;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  dbOpeartion = {
                                    collection: 'users',
                                    query: {
                                      _id: this.user._id
                                    },
                                    data: {
                                      resume: url
                                    }
                                  };
                                  this.authService.update(dbOpeartion).then(function (data) {
                                    if (data.data === true) {
                                      _this18.isServiceRunning = false;

                                      _this18.getUser();
                                    }
                                  });

                                case 2:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "fileChange",
          value: function fileChange(event) {
            this.blob = event.target.files[0];
            this.filename = event.target.files[0].name;
            this.uploadResume();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
            this.getUser();
            this.initializeProfileForm();
            this.initializeWorkExpForm();
            this.initializeEducationForm();

            if (this.user.cvHead) {
              this.cvHeadLine = this.user.cvHead;
            }

            this.educationArray = this.user.education ? this.user.education : [];
            this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
            this.skillsArray = this.user.skills ? this.user.skills : [];
            this.setBasicInfo();
            this.filteredQualifications = this.educationDetailsForm.get('degree').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return _this19._filterQualifications(value);
            }));
            this.filteredSkills = this.skillName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) {
              return _this19._filterSkills(value);
            }));
            this.workExpForm.get('isWorking').valueChanges.subscribe(function (val) {
              if (_this19.workExpForm.get('isWorking').value !== true) {
                _this19.workExpForm.controls.endDate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]);

                _this19.workExpForm.controls.endDate.updateValueAndValidity();
              } else {
                _this19.workExpForm.controls.endDate.clearValidators();

                _this19.workExpForm.controls.endDate.updateValueAndValidity();
              }
            });
            this.isServiceRunning = false;
          }
        }, {
          key: "setBasicInfo",
          value: function setBasicInfo() {
            if (this.user.basicInfo) {
              this.profileForm.patchValue({
                mobile: this.user.basicInfo.mobile,
                gender: this.user.basicInfo.gender,
                martialStatus: this.user.basicInfo.martialStatus,
                dob: this.user.basicInfo.dob,
                nationality: this.user.basicInfo.nationality
              });
            } else {
              this.profileForm.reset();
            }
          }
        }, {
          key: "basicInfoEdit",
          value: function basicInfoEdit() {
            this.isBasiDetailEditing = !this.isBasiDetailEditing;

            if (!this.isBasiDetailEditing) {
              this.setBasicInfo();
            }
          }
        }, {
          key: "_filterQualifications",
          value: function _filterQualifications(value) {
            var filterValue = value.toLowerCase();
            return this.qualificationOptions.filter(function (option) {
              return option.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "_filterSkills",
          value: function _filterSkills(value) {
            var filterValue = value.toLowerCase();
            return this.skillsOptions.filter(function (option) {
              return option.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "initializeProfileForm",
          value: function initializeProfileForm() {
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              martialStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
            });
          }
        }, {
          key: "initializeEducationForm",
          value: function initializeEducationForm() {
            this.educationDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              completionDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              school: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              field: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
            });
          }
        }, {
          key: "initializeWorkExpForm",
          value: function initializeWorkExpForm() {
            this.workExpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              isWorking: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
            });
          }
        }, {
          key: "saveBasicInfo",
          value: function saveBasicInfo() {
            var _this20 = this;

            this.profileForm.markAllAsTouched();

            if (this.profileForm.valid) {
              this.isServiceRunning = true;
              var basicInfo = {
                mobile: this.profileForm.get('mobile').value,
                gender: this.profileForm.get('gender').value,
                martialStatus: this.profileForm.get('martialStatus').value,
                dob: this.profileForm.get('dob').value,
                nationality: this.profileForm.get('nationality').value
              };
              var dbOpeartion = {
                collection: 'users',
                data: {
                  basicInfo: basicInfo,
                  profileCompleted: this.profileCompleted
                },
                query: {
                  _id: this.user._id
                }
              };
              this.authService.update(dbOpeartion).then(function (data) {
                if (data.data === true) {
                  _this20.getUser();

                  _this20.isBasiDetailEditing = false;

                  _this20.setBasicInfo();

                  _this20.isServiceRunning = false;
                }
              });
            }
          }
        }, {
          key: "addSkill",
          value: function addSkill() {
            var _this21 = this;

            this.skillName.markAsTouched();

            if (this.skillName.value) {
              this.isServiceRunning = true;

              if (!this.skillsArray.includes(this.skillName.value)) {
                this.skillsArray.push(this.skillName.value);
              }

              this.skillName.reset();
              var dbOpeartion = {
                collection: 'users',
                data: {
                  skills: this.skillsArray,
                  profileCompleted: this.profileCompleted
                },
                query: {
                  _id: this.user._id
                }
              };
              this.authService.update(dbOpeartion).then(function (data) {
                if (data.data === true) {
                  _this21.getUser();

                  _this21.modalRef.hide();

                  _this21.isServiceRunning = false;
                }
              });
            }
          }
        }, {
          key: "removeTag",
          value: function removeTag(index) {
            var _this22 = this;

            this.isServiceRunning = true;
            this.skillsArray.splice(index, 1);
            var dbOpeartion = {
              collection: 'users',
              data: {
                skills: this.skillsArray,
                profileCompleted: this.profileCompleted
              },
              query: {
                _id: this.user._id
              }
            };
            this.authService.update(dbOpeartion).then(function (data) {
              if (data.data === true) {
                _this22.getUser();

                _this22.modalRef.hide();

                _this22.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "openWorkExpModal",
          value: function openWorkExpModal(template) {
            this.workExpToUpdate = undefined;
            this.range.reset();
            this.title.reset();
            this.companyName.reset();
            this.workExpToUpdate = undefined;
            this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalRef.hide();
          }
        }, {
          key: "addWorkExp",
          value: function addWorkExp() {
            var _this23 = this;

            this.workExpForm.markAllAsTouched();

            if (this.workExpForm.valid) {
              var workExp = {
                title: this.workExpForm.get('title').value,
                type: this.workExpForm.get('type').value,
                companyName: this.workExpForm.get('companyName').value,
                location: this.workExpForm.get('location').value,
                isWorking: this.workExpForm.get('isWorking').value,
                startDate: this.workExpForm.get('startDate').value,
                endDate: this.workExpForm.get('endDate').value,
                description: this.workExpForm.get('description').value
              };

              if (this.workExpToUpdate === undefined) {
                this.workExpArray.push(workExp);
              } else {
                this.workExpArray[this.workExpToUpdate] = workExp;
              }

              this.workExpToUpdate = undefined;
              var totalWorkExp = this.calculateExp();
              var dbOpeartion = {
                collection: 'users',
                data: {
                  workExperience: this.workExpArray,
                  totalWorkExp: +totalWorkExp
                },
                query: {
                  _id: this.user._id
                }
              };
              this.authService.update(dbOpeartion).then(function (data) {
                if (data.data === true) {
                  _this23.getUser();

                  _this23.isServiceRunning = false;
                }
              });
              this.modalRef.hide();
            }
          }
        }, {
          key: "calculateExp",
          value: function calculateExp() {
            var total = 0;

            var _iterator = _createForOfIteratorHelper(this.workExpArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var post = _step.value;
                var dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
                var dateSecond = new Date(post.startDate); // time difference

                var timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime()); // days difference

                var diffYears = timeDiff / (1000 * 3600 * 24 * 365);
                total += diffYears;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return total.toFixed(0);
          }
        }, {
          key: "editWorkExp",
          value: function editWorkExp(workExp, template, i) {
            this.workExpToUpdate = i;
            this.workExpForm.patchValue({
              title: workExp.title,
              type: workExp.type,
              companyName: workExp.companyName,
              location: workExp.location,
              isWorking: workExp.isWorking,
              startDate: workExp.startDate,
              endDate: workExp.endDate,
              description: workExp.description
            });
            this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "deleteWorkExp",
          value: function deleteWorkExp(index) {
            var _this24 = this;

            this.isServiceRunning = false;
            this.workExpArray.splice(index, 1);
            var totalWorkExp = this.calculateExp();
            var dbOpeartion = {
              collection: 'users',
              data: {
                workExperience: this.workExpArray,
                totalWorkExp: totalWorkExp
              },
              query: {
                _id: this.user._id
              }
            };
            this.authService.update(dbOpeartion).then(function (data) {
              if (data.data === true) {
                _this24.getUser();

                _this24.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "openEducationModal",
          value: function openEducationModal(template) {
            this.educationDetailsForm.reset();
            this.educationToUpdate = undefined;
            this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "addEducation",
          value: function addEducation() {
            var _this25 = this;

            this.educationDetailsForm.markAllAsTouched();

            if (this.educationDetailsForm.valid) {
              this.isServiceRunning = true;
              var education = {
                completionDate: this.educationDetailsForm.get('completionDate').value,
                degree: this.educationDetailsForm.get('degree').value,
                school: this.educationDetailsForm.get('school').value,
                type: this.educationDetailsForm.get('type').value,
                location: this.educationDetailsForm.get('location').value,
                field: this.educationDetailsForm.get('field').value
              };

              if (this.educationToUpdate === undefined) {
                this.educationArray.push(education);
              } else {
                this.educationArray[this.educationToUpdate] = education;
              }

              this.educationToUpdate = undefined;
              var dbOpeartion = {
                collection: 'users',
                data: {
                  education: this.educationArray
                },
                query: {
                  _id: this.user._id
                }
              };
              this.authService.update(dbOpeartion).then(function (data) {
                if (data.data === true) {
                  _this25.getUser();

                  _this25.isServiceRunning = false;
                }
              });
              this.modalRef.hide();
            }
          }
        }, {
          key: "deleteEducation",
          value: function deleteEducation(index) {
            var _this26 = this;

            this.isServiceRunning = true;
            this.educationArray.splice(index, 1);
            var dbOpeartion = {
              collection: 'users',
              data: {
                education: this.educationArray
              },
              query: {
                _id: this.user._id
              }
            };
            this.authService.update(dbOpeartion).then(function (data) {
              if (data.data === true) {
                _this26.getUser();

                _this26.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "editEducation",
          value: function editEducation(education, template, i) {
            this.educationToUpdate = i;
            this.educationDetailsForm.patchValue({
              completionDate: education.completionDate,
              degree: education.degree,
              school: education.school,
              location: education.location,
              type: education.type,
              field: education.field
            });
            this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "openSkillModal",
          value: function openSkillModal(template) {
            this.skillName.patchValue('');
            this.modalRef = this.modalService.show(template, {
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(event) {
            var _this27 = this;

            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            this.isServiceRunning = true;
            var reader = new FileReader();

            reader.onload = function (file) {
              _this27.user.photo = file.target.result;
              var dbOpeartion = {
                collection: 'users',
                data: {
                  photo: _this27.user.photo,
                  profileCompleted: _this27.profileCompleted
                },
                query: {
                  _id: _this27.user._id
                }
              };

              _this27.authService.update(dbOpeartion).then(function (data) {
                if (data.data === true) {
                  _this27.getUser();

                  _this27.isServiceRunning = false;
                }
              });
            };

            reader.readAsDataURL(event.target.files[0]);
          }
        }, {
          key: "editCVHead",
          value: function editCVHead() {
            if (this.isCVHeadEditing) {
              this.cvHeadLine = this.user.cvHead ? this.user.cvHead : '';
            }

            this.isCVHeadEditing = !this.isCVHeadEditing;
          }
        }, {
          key: "saveCVHeadLine",
          value: function saveCVHeadLine() {
            var _this28 = this;

            if (this.isCVHeadEditing) {
              this.isServiceRunning = true;
              this.authService.update({
                collection: 'users',
                data: {
                  cvHead: this.cvHeadLine,
                  profileCompleted: this.profileCompleted
                },
                query: {
                  _id: this.user._id
                }
              }).then(function (data) {
                if (data.data === true) {
                  _this28.getUser();

                  _this28.isCVHeadEditing = false;
                  _this28.isServiceRunning = false;
                } else {
                  _this28.isServiceRunning = false;
                }
              }, function (err) {
                return console.log(err);
              });
            }
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this29 = this;

            this.isServiceRunning = true;
            this.authService.find({
              collection: 'users',
              query: {
                _id: this.user._id
              }
            }).subscribe(function (data) {
              if (data.data.length > 0) {
                _this29.user = data.data[0];

                _this29.setBasicInfo();

                _this29.isServiceRunning = false;
                _this29.profileCompleted;

                _this29.updateProfileCompletion();

                window.localStorage.setItem('id', window.btoa(JSON.stringify(_this29.user)));
              }
            });
          }
        }, {
          key: "otpRequest",
          value: function otpRequest() {}
        }, {
          key: "updateProfileCompletion",
          value: function updateProfileCompletion() {
            var _this30 = this;

            this.isServiceRunning = true;
            var dbOpeartion = {
              collection: 'users',
              data: {
                profileCompleted: this.percent
              },
              query: {
                _id: this.user._id
              }
            };
            this.authService.update(dbOpeartion).then(function (data) {
              if (data.data === true) {
                _this30.modalRef.hide();

                _this30.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "profileCompleted",
          get: function get() {
            var percent = 12;

            if (this.cvHeadLine) {
              percent += 10;
            }

            if (this.workExpArray) {
              if (this.workExpArray.length > 0) {
                percent += 15;
              }
            }

            if (this.skillsArray) {
              if (this.skillsArray.length > 0) {
                percent += 12;
              }
            }

            if (this.educationArray) {
              if (this.educationArray.length > 0) {
                percent += 11;
              }
            }

            if (this.user.resume) {
              percent += 15;
            }

            if (this.user.basicInfo) {
              percent += 15;
            }

            if (this.user.photo) {
              percent += 10;
            }

            document.getElementById('progress-bar').style.width = percent + '%';
            this.percent = percent;
            return percent;
          }
        }]);

        return UserProfileComponent;
      }();

      UserProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorageModule"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
        }];
      };

      UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserProfileComponent);
      /***/
    },

    /***/
    "xuTp":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-jobs/user-jobs.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function xuTp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <app-all-job-posts class=\"w-100\"></app-all-job-posts>\r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map