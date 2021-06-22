(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+WbM":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-job-post/job-details/job-details.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overflow-auto\">\r\n  <div class=\"bg-lightest-blue wh-100 overflow-x-hidden\" style=\"overflow-y: auto; \">\r\n    <div class=\"row justify-content-center px-1\" *ngIf=\"!isServiceRunning\">\r\n      <div class=\"card shadow-lg p-3 border-8 m-3 col-sm-8 \"\r\n        style=\"margin-top: 30px !important; border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\r\n\r\n        <div class=\"row justify-content-between\" style=\"height: fit-content;\">\r\n          <div class=\"d-flex flex-wrap ml-3\">\r\n            <div class=\"mr-3 mb-2\">\r\n              <span>\r\n                <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                  style=\"max-height: 70px; max-width: 160px; min-height: 70px; min-width: 70px;border-color: black;\">\r\n              </span>\r\n            </div>\r\n            <div class=\"text-left\">\r\n              <h4>{{jobPost.jobPost.title}}</h4>\r\n              <div class=\"column\">\r\n                <div class=\"d-flex vertical-center flex-wrap\">\r\n                  <div class=\" vertical-center justify-content-start mr-3\">\r\n                    <span class=\"material-icons-outlined  mr-2 text-navy-blue\">work</span>\r\n                    <span class=\" text-lato text-navy-blue d-inline\">Experience : </span>\r\n                    <span class=\"text-lato text-navy-blue\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                      ''\r\n                      }}\r\n                      years</span>\r\n                  </div>\r\n\r\n                  <div class=\" vertical-center justify-content-start mr-3\">\r\n                    <span class=\"material-icons  mr-2 text-navy-blue\">business</span>\r\n                    <span class=\" text-lato text-navy-blue d-inline\">Company : </span>\r\n                    <span class=\" text-lato text-navy-blue\">&nbsp; {{jobPost.jobPost.companyName}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-flex flex-wrap mt-1\">\r\n                  <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                    class=\" vertical-center justify-content-start mr-2\">\r\n                    <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">location_on</span>\r\n                    <span class=\" text-lato text-smd text-navy-blue\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                  </div>\r\n\r\n                  <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                    class=\" vertical-center justify-content-start mr-2\">\r\n                    <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">home</span>\r\n                    <span class=\" text-lato text-smd text-navy-blue d-inline\">Work from home</span>\r\n                  </div>\r\n                  <div class=\"vertical-center justify-content-start mr-2\">\r\n                    <span class=\"material-icons-outlined text-navy-blue text-md mr-2\">play_arrow</span>\r\n                    <span class=\"text-smd text-lato text-navy-blue d-inline\">Start Date : </span>\r\n                    <span class=\"text-lato text-navy-blue\">&nbsp; {{getStartDate(jobPost.jobPost.startDate) ?\r\n                      (jobPost.jobPost.startDate | date:\r\n                      'dd MMMM yyyy' ) : 'Immediately'}}</span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-flex flex-wrap mt-1\">\r\n                  <div class=\"vertical-center justify-content-start mr-2\">\r\n                    <span class=\"material-icons-outlined text-navy-blue mr-2\">payments</span>\r\n                    <span class=\"text-smd text-lato text-navy-blue d-inline\">{{jobPost.jobPost.jobInternship === 'Job' ?\r\n                      'Salary'\r\n                      :\r\n                      'Stipend'}}\r\n                      :\r\n                    </span>\r\n                    <span class=\"text-lato text-navy-blue\">&nbsp; &#8377; {{jobPost.jobPost.salary}}\r\n                      {{jobPost.jobPost.salaryType}}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mr-2 ml-3 justify-content-right\">\r\n            <div class=\"text-right pt-2\">\r\n              <span class=\"px-2 py-1 text-navy-blue bg-lightest-blue mr-2 border-6 text-lato text-slmd\r\n        badge badge-light\">{{jobPost.jobPost.jobInternship}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex justify-content-end pt-2\">\r\n          <span *ngIf=\"role !== 2\" class=\"d-block text-right material-icons text-primary my-2 text-link\"\r\n            (click)=\"editJobPost()\">edit</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card shadow-lg p-3 border-8 mb-3 ml-3 mr-3 col-sm-8\"\r\n        style=\"border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\r\n        <div>\r\n          <span class=\"text-black semi-bold myfont-size d-block mt-3\">About {{jobPost.jobPost.companyName}}</span>\r\n          <span class=\"text-break text-grey\">{{jobPost.jobPost.aboutUs}}</span>\r\n        </div>\r\n        <div>\r\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Skills Required</span>\r\n          <div class=\"d-inline m-2\" style=\"display: inline-block !important;\" *ngFor=\"let skill of skills\">\r\n            <span *ngIf=\"skill.skillName\"\r\n              class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm\"\r\n              style=\"border-radius: 6px; margin: 8px;\">{{skill.skillName}}</span>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"jobPost.jobPost.details\">\r\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Job Description</span>\r\n          <!--<div *ngIf=\"jobPost.jobPost.details.length > 0\">\r\n          <div *ngFor=\"let detail of jobPost.jobPost.details\">\r\n            <span *ngIf=\"detail.detail\" class=\"vertical-center text-ssmd text-grey px-3 py-2  m-2 bg-light\"> <span\r\n                class=\"material-icons-outlined text-sm text-grey mr-2\">circle</span> &nbsp; {{detail.detail}}</span>\r\n          </div>\r\n        </div>-->\r\n          <div *ngIf=\"jobPost.jobPost.details\">\r\n            <p class=\"text-sm\" style=\"white-space: pre-wrap;\">{{jobPost.jobPost.details}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"pt-2\">\r\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Number of Openings</span>\r\n          <span class=\"text-break text-primary\">{{jobPost.jobPost.vacancy}}</span>\r\n        </div>\r\n        <div class=\"pt-2 row justify-content-between vertical-center my-4 mb-3\">\r\n          <span class=\"text-black semi-bold d-block m-3\">Referral reward:\r\n            <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">\r\n              ₹ {{jobPost.referReward}}</div>\r\n          </span>\r\n          <span class=\"text-right text-grey text-sm text-break col-auto\" *ngIf=\"role !== 2\">\r\n            <button class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm\" disabled>Posted on\r\n              {{jobPost.jobPost.createdAt\r\n              | date: 'dd MMMM yyyy'}}</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom bg-primary \">\r\n      <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\r\n\r\n<ng-template class=\"p-2\" #applyModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px;\">\r\n    <span class=\"d-block material-icons text-grey text-link text-right\" (click)=\"closeModal()\">close</span>\r\n    <span class=\"d-block text-grey bold mb-2\">Read before you apply - </span>\r\n    <span class=\"d-block text-dark\">Make sure that you have entered correct details in your profile.</span>\r\n    <span class=\"d-block text-dark\">Your profile data and resume will be shared with the\r\n      {{jobPost.jobPost.companyName}}</span>\r\n    <div class=\"w-100 d-flex justify-content-center my-4 pt-5\">\r\n      <button class=\"btn btn-primary bg-violet px-4 py-2\" (click)=\"applyJob()\">Apply now</button>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Refer2Carrier\refer2career\src\main.ts */"zUnb");


/***/ }),

/***/ "0dfH":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "uHDt");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "JALx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotFoundComponent = class NotFoundComponent {
    constructor() {
        this.title = 'Sorry!';
        this.message = 'Visit after Sometime';
        this.visibility = true;
        this.isError = false;
    }
    ngOnInit() { }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    visibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "0xYs":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/signin/employer-signin/employer-signin.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12 p-2\" style=\"height: 90vh !important;\">\r\n  <div class=\"w-100 row vertical-center h-100 mx-auto bg-white border-7\">\r\n    <div *ngIf=\"isScreenBig\" class=\"col-sm-5 bg-violet w-100 h-100 border-left-7 vertical-center\">\r\n      <span class=\"text-white text-lg mx-auto w-75\"><span class=\"d-block text-center mb-4\">{{ !isLogin ? \"Don't\r\n          worry!!\": 'Welcome!!'}}</span>\r\n        <span class=\"text-ssmd d-block text-center\">\r\n          {{ !isLogin ? 'We will help you to reset your account password.' : 'To keep connected with us\r\n          please signin with your credentials.'}}\r\n        </span></span>\r\n    </div>\r\n    <div [ngClass]=\"isScreenBig ? 'col-sm-7' : 'col-sm-12'\">\r\n      <div class=\"\">\r\n        <div class=\"d-flex justify-content-center mb-4\">\r\n          <img *ngIf=\"!isVerifyOTP\"\r\n            src=\"{{ isLogin?'../../../assets/login2.jpg' : '../../../assets/forgotpassword.jpg'}}\" class=\"img-fluid\"\r\n            alt=\"\" style=\"height: 110px; width: 140px;\">\r\n        </div>\r\n      </div>\r\n      <div class=\"vertical-center w-100 justify-content-center mb-2\">\r\n        <span class=\"text-primary text-md semi-bold\">{{ isLogin?'Sign in to Refer2Career': isRegistration\r\n          ?'Registration':\r\n          isForgotPassword ?\r\n          'Forgot Password' : isResetPassword ? 'Reset Password' : ''}}</span>\r\n      </div>\r\n      <form [formGroup]=\"loginForm\" class=\"p-3 row justify-content-center\" *ngIf=\"isLogin\">\r\n        <alert type=\"success\" class=\"text-sm m-2\" *ngIf=\"isVerified\">\r\n          Now you can login with your credentials.\r\n        </alert>\r\n        <mat-form-field appearance=\"\" class=\"p-0 mb-2 w-100 col-sm-7 mb-3 mat-form-field\">\r\n          <mat-label class=\"semi-bold text-grey text-smd m-0\">E-mail</mat-label>\r\n          <input matInput class=\"text-sm m-0\" type=\"email\" name=\"email\" placeholder=\"Enter email\"\r\n            formControlName='emailLogin'>\r\n          <mat-error class=\"text-xs\">Enter valid email*</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"\" class=\"p-0 w-100 mb-3 col-sm-7 mat-form-field vertical-center\">\r\n          <mat-label class=\"semi-bold text-grey text-smd m-0\">Password</mat-label>\r\n          <input matInput class=\"m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\" placeholder=\"Enter password\"\r\n            name=\"password\" formControlName='passwordLogin'>\r\n          <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n            class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n          </span>\r\n          <mat-error class=\"text-xs\">Password required*</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"text-right mb-2 col-sm-12\">\r\n          <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\r\n        </div>\r\n        <div class=\"col-sm-12 d-flex justify-content-center\">\r\n          <button *ngIf=\"!isServiceRunning\" class=\"btn bg-violet btn-primary p-1 px-4\" style=\"border-radius: 20px;\"\r\n            (click)=\"login()\">Sign in</button>\r\n        </div>\r\n      </form>\r\n      <div class=\"w-100 text-center\" *ngIf=\"isLogin\">\r\n        <a class=\"text-sm text-link semi-bold text-primary\" (click)=\"forgotPasswordVisible()\">Forgot\r\n          Password</a>\r\n        <span class=\"text-grey text-md mx-2\">|</span>\r\n        <a class=\"text-primary text-link semi-bold\" *ngIf=\"isLogin\" (click)=\"closeModal()\">Sign-in as\r\n          Candidate</a>\r\n      </div>\r\n      <div *ngIf=\"isVerifyOTP\" class=\"w-100 p-3 d-flex justify-content-center\">\r\n        <div class=\"w-100\">\r\n          <alert type=\"success\" class=\"text-sm\">\r\n            We have sent a 6 digit passcode at {{email.value}} kindly enter\r\n            the\r\n            code\r\n            here.\r\n          </alert>\r\n          <div class=\"p-3\">\r\n            <label class=\"semi-bold mt-2\">Enter a 6-digit passcode</label>\r\n            <ng-otp-input name=\"otp\" ngDefaultControl [(ngModel)]='otp' (onInputChange)=\"onOtpChange($event)\"\r\n              [config]=\"{length:6, allowNumbersOnly:true, inputClass:'mb-3'\t}\">\r\n            </ng-otp-input>\r\n            <div class=\"text-right mb-2 d-block\">\r\n              <span class=\"text-sm text-danger\" *ngIf=\"!isOTPCorrect\"><b>Invalid code</b></span>\r\n            </div>\r\n            <button *ngIf=\"!isServiceRunning\" (click)=\"verifyOTP()\" class=\"btn btn-primary d-block p-1 px-4 text-sm\"\r\n              style=\"border-radius: 20px;\">Verify</button>\r\n            <ion-spinner color=\"primary\" mode=\"md\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n            <div class=\"mt-5\">\r\n              <a class=\"text-primary d-block semi-bold text-sm mt-3 pb-2\" *ngIf='timer > 0'><span\r\n                  class=\"text-secondary\">Resend Code </span> 00 :\r\n                {{timer > 9 ? timer : '0'+timer}}</a>\r\n              <a class=\"text-primary semi-bold d-block text-link text-sm mt-3 pb-2\" *ngIf='timer <= 0'\r\n                (click)=\"resendOTP()\">Resend Code</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"w-100 text-center\">\r\n            <a class=\"text-primary text-sm text-link vertical-center\" (click)='back()'><span\r\n                class=\"material-icons mr-2\">keyboard_backspace</span>\r\n              Back</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-3 row justify-content-center\" *ngIf=\"isForgotPassword\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-4\">\r\n          <mat-label>Enter your email</mat-label>\r\n          <input matInput placeholder=\"Enter email\" name=\"email\" [formControl]=\"email\" required>\r\n          <mat-error *ngIf=\"email.invalid\">Enter valid email*</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"d-flex justify-content-center mb-5 col-sm-12\">\r\n          <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\r\n            style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"forgotPassword()\">Send\r\n            Passcode</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-3 row justify-content-center\" *ngIf=\"isResetPassword\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\r\n          <mat-label class=\"semi-bold text-grey text-smd m-0\">New Password</mat-label>\r\n          <input matInput class=\"text-sm m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\r\n            placeholder=\"Enter password\" [formControl]='resetPassword'>\r\n          <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n            class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n          </span>\r\n          <mat-error class=\"text-xs\">Password required*</mat-error>\r\n        </mat-form-field>\r\n        <div class=\"w-100 d-flex justify-content-center mb-5\">\r\n          <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\r\n            style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"restPassword()\">Reset</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-100 text-center\" *ngIf=\"isForgotPassword\">\r\n        <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)='showLogin()'><u>Login\r\n            here.</u></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "109v":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vh-100\" style=\"overflow-y: auto;overflow-x: auto;\">\r\n<div class=\"row shadow justify-content-center p-0 m-0\">\r\n  <div class=\"col-sm-11\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light w-100\">\r\n      <a class=\"nav-link\"><img src=\"../../../../assets/refer2carrierlogo.png\" class=\"logo-header\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"ml-3 collapse navbar-collapse vertical-center justify-content-between\" id=\"navbarNav\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item mr-4\">\r\n            <a class=\"nav-link text-dark myfont-size text-link active-button\" (click)=\"navigate(item.route)\">\r\n              ABOUT US</a>\r\n          </li>\r\n          <li class=\"nav-item mr-4\">\r\n            <a class=\"nav-link text-dark myfont-size text-link active-button\" (click)=\"navigate(item.route)\">\r\n              JOB OPPORTUNITIES</a>\r\n          </li>\r\n          <li class=\"nav-item mr-4\">\r\n            <a class=\"nav-link text-dark myfont-size text-link active-button\" (click)=\"navigate(item.route)\">\r\n              PARTNERS</a>\r\n          </li>\r\n          <li class=\"nav-item mr-4\">\r\n            <a class=\"nav-link text-dark myfont-size text-link active-button\" (click)=\"navigate(item.route)\">\r\n              CONTACT US</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"vertical-center\">\r\n            <a (click)=\"goToSignUp()\" *ngIf=\"isLogin || isForgotPassword || isVerifyOTP\"><button class=\"btn btn-primary mr-2\"><span class=\"vertical-center\">\r\n              <ion-icon name=\"lock-closed\" class=\"mr-1\"></ion-icon>SIGNUP\r\n            </span></button></a>\r\n            <a (click)=\"openModal(logout)\" *ngIf=\"isSignUp\" (click)=\"goToLogin()\"><button class=\"btn btn-primary\"><span\r\n                  class=\"vertical-center\">\r\n                  <ion-icon name=\"person\" class=\"mr-1\"></ion-icon>LOGIN\r\n                </span></button></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n  <div class=\"bg-white vertical-center\" style=\"overflow-y: auto;\">\r\n    <div class=\"container mt-5\">\r\n      <div *ngIf=\"isLogin\" class=\"row mt-8 mb-5\">\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <div class=\"p-a30 border-1\">\r\n            <div class=\"tab-content\">\r\n              <form id=\"login\" [formGroup]=\"loginForm\">\r\n                <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">LOGIN</div>\r\n                <div class=\"p text-secondary\">If you have an account with us, please log in.</div>\r\n                <alert type=\"success\" class=\"text-sm m-2\" *ngIf=\"isVerified\">\r\n                  Now you can login with your credentials.\r\n                </alert>\r\n                <div class=\"form-group\">\r\n                  <div class=\"label\">E-MAIL* </div>\r\n                  <input name=\"email\" required=\"\" class=\"form-control\" placeholder=\"Your Email Id\"\r\n                    formControlName='emailLogin' type=\"email\">\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"label\">PASSWORD* </div>\r\n                  <input name=\"password\" required=\"\" class=\"form-control \" placeholder=\"Type Password\"\r\n                    formControlName='passwordLogin' type=\"password\">\r\n                </div>\r\n                <div class=\"text-left mb-2 col-sm-12\">\r\n                  <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\r\n                </div>\r\n                <div class=\"mt-3 vertical-center\">\r\n                  <button class=\"btn btn-primary text-center site-button mr-5 btn-lg\"\r\n                    (click)=\"login()\">LOGIN</button>\r\n                  <div class=\"vertical-center text-link \" (click)=\"forgotPasswordVisible()\">\r\n                    <ion-icon name=\"lock-open-outline\"></ion-icon>\r\n                    <span class=\"ml-2\">\r\n                      Forgot\r\n                      Password</span>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12 p-2\" *ngIf=\"isLoginCard\">\r\n            <h5 class=\"p w-100 text-grey text-sm text-center\">Or Sign in using</h5>\r\n            <div class=\"w-100 d-flex justify-content-center\">\r\n              <ion-icon class=\"linked-in-color text-lg m-2 text-link\" (click)=\"linkedinLogin()\" name=\"logo-linkedin\">\r\n              </ion-icon>\r\n              <ion-icon class=\"text-danger text-lg m-2 text-link\" (click)=\"googleLogin()\" name=\"logo-google\">\r\n              </ion-icon>\r\n              <ion-icon class=\"facebook-color text-lg m-2 text-link\" (click)=\"facebookLogin()\" name=\"logo-facebook\">\r\n              </ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <img src=\"../../assets/login.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"isForgotPassword || isResetPassword\" class=\"row mt-7 vertical-center\">\r\n        <div class=\"col-md-12 col-lg-6 vertical-center\">\r\n          <div class=\"p-a30 border-1\">\r\n            <form *ngIf=\"isForgotPassword\">\r\n              <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">FORGET PASSWORD ?</div>\r\n              <div class=\"p text-secondary\">We will send you an email to reset your password.</div>\r\n              <div class=\"form-group\">\r\n                <div class=\"label\">E-MAIL *</div>\r\n                <input name=\"email\" class=\"form-control\" [formControl]=\"email\" placeholder=\"Your Email Id\" type=\"email\">\r\n              </div>\r\n              <div class=\"vertical-center justify-content-between\">\r\n                <button class=\"btn btn-outline-primary\" (click)=\"goToLogin()\">Back</button>\r\n                <button class=\"btn btn-primary\" (click)=\"forgotPassword()\">Submit</button>\r\n              </div>\r\n            </form>\r\n            <div class=\"p-3 row justify-content-center\" *ngIf=\"isResetPassword\">\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">New Password</mat-label>\r\n                <input matInput class=\"text-sm m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\r\n                  placeholder=\"Enter password\" [formControl]='resetPassword'>\r\n                <!-- <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n                class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n              </span> -->\r\n                <mat-error class=\"text-xs\">Password required*</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"w-100 d-flex justify-content-center mb-5\">\r\n                <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\r\n                  style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"restPassword()\">Reset</button>\r\n              </div>\r\n              <div class=\"w-100 text-center\" *ngIf=\"isForgotPassword\">\r\n                <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)='showLogin()'><u>Login\r\n                    here.</u></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-6\">\r\n          <img src=\"../../assets/login.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-7 row mt-8 mb-5\">\r\n        <div class=\"row\" *ngIf=\"isSignUp\">\r\n          <div class=\"col-md-12 col-lg-6\">\r\n            <div class=\"p-a30 border-1  max-w500 m-auto\">\r\n              <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">\r\n                PERSONAL INFORMATION</div>\r\n              <div class=\"p text-secondary\">If you don't have an account with us, please\r\n                Sign up.</div>\r\n              <form [formGroup]=\"signupForm\">\r\n                <div class=\"form-group\">\r\n                  <div class=\"label\">Full Name *</div>\r\n                  <input name=\"name\" placeholder=\"Full Name\" formControlName='name' required=\"\" class=\"form-control\"\r\n                    placeholder=\"First Name\" type=\"text\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"label\">E-MAIL *</div>\r\n                  <input name=\"email\" formControlName='email' required=\"\" class=\"form-control\"\r\n                    placeholder=\"Your Email Id\" type=\"email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"label\">PASSWORD *</div>\r\n                  <input name=\"password\" formControlName='password' required=\"\" class=\"form-control \"\r\n                    placeholder=\"Type Password\" type=\"password\">\r\n                </div>\r\n                <div class=\"text-left mb-2 col-sm-12\">\r\n                  <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\r\n                </div>\r\n                <div class=\"text-left mt-3 vertical-center\">\r\n                  <button *ngIf=\"!isServiceRunning\" class=\"btn btn-primary text-center site-button p-3 px-4 btn-lg\"\r\n                    (click)=\"registerCandidate()\">CREATE</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-6\">\r\n            <img src=\"../../assets/register.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"isVerifyOTP\">\r\n          <div class=\"col-md-12 col-lg-6\" *ngIf=\"isVerifyOTP || isSignUp\">\r\n            <div class=\"p-a30 border-1  max-w500 m-auto\">\r\n              <div class=\"w-100 p-3 d-flex justify-content-center\">\r\n                <div class=\"w-100\">\r\n                  <alert type=\"success\" class=\"text-sm\">\r\n                    We have sent a 6 digit passcode at {{ signupForm.get('email').value }} {{email.value}} kindly enter\r\n                    the\r\n                    code\r\n                    here.\r\n                  </alert>\r\n                  <div class=\"p-3\">\r\n                    <label class=\"semi-bold mt-2\">Enter a 6-digit passcode</label>\r\n                    <ng-otp-input name=\"otp\" ngDefaultControl [(ngModel)]='otp' (onInputChange)=\"onOtpChange($event)\"\r\n                      [config]=\"{length:6, allowNumbersOnly:true, inputClass:'mb-3'\t}\">\r\n                    </ng-otp-input>\r\n                    <div class=\"text-right mb-2 d-block\">\r\n                      <span class=\"text-sm text-danger\" *ngIf=\"!isOTPCorrect\"><b>Invalid code</b></span>\r\n                    </div>\r\n                    <button *ngIf=\"!isServiceRunning\" (click)=\"verifyOTP()\"\r\n                      class=\"btn btn-primary d-block p-1 px-4 text-sm\" style=\"border-radius: 20px;\">Verify</button>\r\n                    <ion-spinner color=\"primary\" mode=\"md\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n                    <div class=\"mt-5\">\r\n                      <a class=\"text-primary d-block semi-bold text-sm mt-3 pb-2\" *ngIf='timer > 0'><span\r\n                          class=\"text-secondary\">Resend Code </span> 00 :\r\n                        {{timer > 9 ? timer : '0'+timer}}</a>\r\n                      <a class=\"text-primary semi-bold d-block text-link text-sm mt-3 pb-2\" *ngIf='timer <= 0'\r\n                        (click)=\"resendOTP()\">Resend Code</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"w-100\">\r\n                    <div class=\"a text-sm text-link vertical-center\" (click)='back()'>\r\n                      Back</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-6\">\r\n            <img src=\"../../assets/register.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-bottom bg-primary\">\r\n    <div class=\"text-center text-white py-3\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "3WbM":
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



let ToastService = class ToastService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showToast(message, color = 'bg-violet') {
        this.snackBar.open(message, 'close', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center', panelClass: [color, 'text-white', 'overlay', 'fixed-bottom', 'mx-auto', 'w-100', 'success-dialog'] });
    }
};
ToastService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "3m3E":
/*!***************************************************************************!*\
  !*** ./src/app/login/signin/employer-signin/employer-signin.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmployerSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerSigninComponent", function() { return EmployerSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employer_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employer-signin.component.html */ "0xYs");
/* harmony import */ var _employer_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employer-signin.component.scss */ "MOns");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/enums */ "pzb0");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













let EmployerSigninComponent = class EmployerSigninComponent {
    constructor(modalRef, authService, router, toast, modalService, location) {
        this.modalRef = modalRef;
        this.authService = authService;
        this.router = router;
        this.toast = toast;
        this.modalService = modalService;
        this.location = location;
        this.closeEmployer = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.message = '';
        this.isLogin = true;
        this.isServiceRunning = false;
        this.isPasswordVisible = false;
        this.isScreenBig = false;
        this.otp = '';
        this.isOTPCorrect = true;
        this.isVerified = false;
        this.isForgotPassOTP = false;
        this.isResetPassword = false;
        this.role = src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"];
        this.isVerifyOTP = false;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isConfirmPasswordVisible = false;
        this.password = '';
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.resetPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7)]);
        this.isPasswordReset = false;
    }
    ngOnInit() {
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
        }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            emailLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            passwordLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.isServiceRunning = true;
            this.authService.login({
                email: (this.loginForm.get('emailLogin')
                    .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
            })
                .then((data) => {
                if (data.error) {
                    this.message = 'Invalid email or password!';
                }
                else if (data.email) {
                    if (data.role !== 2) {
                        this.modalRef.hide();
                        window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
                        window.location.reload();
                    }
                    else {
                        this.message = 'User not found!';
                    }
                }
                this.isServiceRunning = false;
            });
        }
    }
    resendOTP() {
        this.isServiceRunning = true;
        this.authService.getOTP({ email: this.signupForm.get('email').value }).subscribe((data) => {
            if (data.data === true) {
                this.toast.showToast('Passcode Sent Successfully!');
                let counter = 30;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                    .subscribe(() => {
                    this.timer = counter;
                });
                this.isServiceRunning = false;
            }
        });
    }
    isValidOTP() {
        return this.otp.length === 6;
    }
    onOtpChange($event) {
        this.otp = $event;
    }
    forgotPasswordVisible() {
        this.hideAll();
        this.isForgotPassword = true;
    }
    loginVisible() {
        setTimeout(() => {
            this.hideAll();
            this.isLogin = true;
        }, 300);
    }
    showLogin() {
        this.hideAll();
        this.isLogin = true;
    }
    closeModal() {
        this.closeEmployer.emit();
    }
    hideAll() {
        this.isResetPassword = false;
        this.isLogin = false;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isVerifyOTP = false;
        this.isPasswordReset = false;
        this.message = '';
    }
    verifyOTP() {
        this.isServiceRunning = true;
        if (this.isForgotPassOTP) {
            const data = {
                email: this.email.value,
                otp: this.otp
            };
            this.authService.verify(data).subscribe((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.isResetPassword = true;
                }
                else {
                    this.isOTPCorrect = false;
                }
                this.isServiceRunning = false;
            });
        }
        else {
            const data = {
                email: this.signupForm.get('email').value,
                otp: this.otp
            };
            this.authService.verifyOTP(data).then((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.isLogin = true;
                }
                else {
                    this.isOTPCorrect = true;
                }
                this.isServiceRunning = false;
            });
        }
    }
    back() {
        this.hideAll();
        this.isLogin = true;
    }
    forgotPassword() {
        if (this.email.valid) {
            this.isServiceRunning = true;
            this.authService.getOTP({ email: this.email.value }).subscribe((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.isVerifyOTP = true;
                    let counter = 30;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                        .subscribe(() => {
                        this.timer = counter;
                    });
                    this.isForgotPassOTP = true;
                }
                this.isServiceRunning = false;
            });
        }
    }
    restPassword() {
        this.resetPassword.markAsTouched();
        if (this.resetPassword.value) {
            const dbopeartion = {
                collection: 'users',
                data: { password: this.resetPassword.value },
                query: { email: this.email.value }
            };
            this.authService.update(dbopeartion).then((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.toast.showToast('Password Reseted!');
                    this.isLogin = true;
                    this.isServiceRunning = false;
                }
            });
        }
    }
};
EmployerSigninComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }
];
EmployerSigninComponent.propDecorators = {
    closeEmployer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
EmployerSigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employer-signin',
        template: _raw_loader_employer_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employer_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployerSigninComponent);



/***/ }),

/***/ "5Dfi":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcmVjZW50LWpvYi1wb3N0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "5sq2":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/applications/applications.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n.active-menu {\n  color: white;\n  border-bottom: 2px solid #0E2043;\n  background-color: #0E2043;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQXlELDZCQUE2QjtBQUN0Rjs7QUFBQTtFQUEwQyxXQUFXO0VBQUUsZUFBZTtBQUt0RTs7QUFIQTtFQUNJLHlDQUF3QztBQU01Qzs7QUFIRTtFQUNFLHdCQUF3QjtBQU01Qjs7QUFIRTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBTTdCIiwiZmlsZSI6ImFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjllbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbn1cclxuXHJcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1tZW51e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwRTIwNDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUyMDQzO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "6Mdj":
/*!****************************************************!*\
  !*** ./src/app/login/signin/signin.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".linked-in-color {\n  color: #0077b7 !important;\n}\n\n.facebook-color {\n  color: #3d548e !important;\n}\n\n.flipCard {\n  -webkit-perspective: 800;\n  -ms-perspective: 800;\n  -moz-perspective: 800;\n  -o-perspective: 800;\n  position: relative;\n}\n\n.flipCard .card.flipped {\n  transform: rotatey(-180deg);\n  -ms-transform: rotatey(-180deg);\n  /* IE 9 */\n  -moz-transform: rotatey(-180deg);\n  /* Firefox */\n  -webkit-transform: rotatey(-180deg);\n  /* Safari and Chrome */\n  -o-transform: rotatey(-180deg);\n  /* Opera */\n}\n\n.flipCard .card {\n  width: 100%;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transition: 1.3s;\n  -moz-transform-style: preserve-3d;\n  -moz-transition: 1.3s;\n  -ms-transform-style: preserve-3d;\n  -ms-transition: 1.3s;\n  -o-transform-style: preserve-3d;\n  -o-transition: 1.3s;\n  transform-style: preserve-3d;\n  transition: 1.3s;\n}\n\n.flipCard .card .side {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  cursor: pointer;\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 2;\n  backface-visibility: hidden;\n  /* W3C */\n  -webkit-backface-visibility: hidden;\n  /* Safari & Chrome */\n  -moz-backface-visibility: hidden;\n  /* Firefox */\n  -ms-backface-visibility: hidden;\n  /* Internet Explorer */\n  -o-backface-visibility: hidden;\n  /* Opera */\n  overflow: auto;\n}\n\n.flipCard .card .back {\n  transform: rotatey(-180deg);\n  -ms-transform: rotatey(-180deg);\n  /* IE 9 */\n  -moz-transform: rotatey(-180deg);\n  /* Firefox */\n  -webkit-transform: rotatey(-180deg);\n  /* Safari and Chrome */\n  -o-transform: rotatey(-180deg);\n  /* Opera */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbEIsa0JBQWtCO0FBQ3JCOztBQUNBO0VBQ0UsMkJBQTBCO0VBQzFCLCtCQUE4QjtFQUFFLFNBQUE7RUFDaEMsZ0NBQStCO0VBQUUsWUFBQTtFQUNqQyxtQ0FBa0M7RUFBRSxzQkFBQTtFQUNwQyw4QkFBNkI7RUFBRSxVQUFBO0FBTWpDOztBQUpBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFPbEI7O0FBTEE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsMkJBQTJCO0VBQUcsUUFBQTtFQUM5QixtQ0FBbUM7RUFBRSxvQkFBQTtFQUNyQyxnQ0FBZ0M7RUFBRSxZQUFBO0VBQ2xDLCtCQUErQjtFQUFFLHNCQUFBO0VBQ2pDLDhCQUE4QjtFQUFFLFVBQUE7RUFDaEMsY0FBYztBQWFoQjs7QUFYQTtFQUNFLDJCQUEwQjtFQUMxQiwrQkFBOEI7RUFBRSxTQUFBO0VBQ2hDLGdDQUErQjtFQUFFLFlBQUE7RUFDakMsbUNBQWtDO0VBQUUsc0JBQUE7RUFDcEMsOEJBQTZCO0VBQUUsVUFBQTtBQWtCakMiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmtlZC1pbi1jb2xvcntcclxuICAgIGNvbG9yOiAjMDA3N2I3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWNlYm9vay1jb2xvcntcclxuICBjb2xvcjogIzNkNTQ4ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxpcENhcmQge1xyXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDgwMDtcclxuICAtbXMtcGVyc3BlY3RpdmU6IDgwMDtcclxuICAtbW96LXBlcnNwZWN0aXZlOiA4MDA7XHJcbiAgLW8tcGVyc3BlY3RpdmU6IDgwMDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59IFxyXG4uZmxpcENhcmQgLmNhcmQuZmxpcHBlZCB7XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZXkoLTE4MGRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTpyb3RhdGV5KC0xODBkZWcpOyAvKiBJRSA5ICovXHJcbiAgLW1vei10cmFuc2Zvcm06cm90YXRleSgtMTgwZGVnKTsgLyogRmlyZWZveCAqL1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZXkoLTE4MGRlZyk7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbiAgLW8tdHJhbnNmb3JtOnJvdGF0ZXkoLTE4MGRlZyk7IC8qIE9wZXJhICovXHJcbn1cclxuLmZsaXBDYXJkIC5jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMS4zcztcclxuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAxLjNzO1xyXG4gIC1tcy10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC1tcy10cmFuc2l0aW9uOiAxLjNzO1xyXG4gIC1vLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgLW8tdHJhbnNpdGlvbjogMS4zcztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zaXRpb246IDEuM3M7XHJcbn1cclxuLmZsaXBDYXJkIC5jYXJkIC5zaWRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47ICAvKiBXM0MgKi9cclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICYgQ2hyb21lICovXHJcbiAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xyXG4gIC1vLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogT3BlcmEgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uZmxpcENhcmQgLmNhcmQgLmJhY2sge1xyXG4gIHRyYW5zZm9ybTpyb3RhdGV5KC0xODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06cm90YXRleSgtMTgwZGVnKTsgLyogSUUgOSAqL1xyXG4gIC1tb3otdHJhbnNmb3JtOnJvdGF0ZXkoLTE4MGRlZyk7IC8qIEZpcmVmb3ggKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGV5KC0xODBkZWcpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG4gIC1vLXRyYW5zZm9ybTpyb3RhdGV5KC0xODBkZWcpOyAvKiBPcGVyYSAqL1xyXG59Il19 */");

/***/ }),

/***/ "8ymR":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/add-job-post/add-job-post.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddJobPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobPostComponent", function() { return AddJobPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_job_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-job-post.component.html */ "BQ1G");
/* harmony import */ var _add_job_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-job-post.component.scss */ "a9Oz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "3WbM");
/* harmony import */ var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/job-post-service.service */ "hLKV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let AddJobPostComponent = class AddJobPostComponent {
    constructor(jobPostService, toastService, modalRef, modalService, router) {
        this.jobPostService = jobPostService;
        this.toastService = toastService;
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.router = router;
        this.jobPost = undefined;
        this.navItems = [
            {
                name: 'DASHBOARD',
                route: "/recruiter/dashboard"
            },
            {
                name: 'MY PROFILE',
                route: "/recruiter/profile"
            },
            {
                name: 'JOB POSTS',
                route: "/recruiter/job-posts"
            },
            {
                name: 'MANAGE APPLICANTS',
                route: "/recruiter/applicants"
            },
            {
                name: 'ADD JOB POST',
                route: "/recruiter/create-job-posts"
            }
        ];
        this.aboutUs = '';
        this.description = '';
        this.companyName = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.organizationName;
        this.companyLogo = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.logo;
        this.isServiceRunning = false;
        this.message = '';
        this.jobDetailsArray = [];
        this.questionsArray = [];
        this.newAttribute = {};
        this.firstField = true;
        this.firstFieldName = 'First Item name';
        this.skillsOptions = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
            'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
        this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
        this.skillsArray = [];
    }
    formatLabel(value) {
        if (value === 10) {
            return '10+';
        }
        return `${value}-${value + 1}`;
    }
    addQuestion() {
        this.questionsArray.push({ question: '' });
    }
    deleteQuestion(index) {
        this.questionsArray.splice(index, 1);
    }
    ngOnInit() {
        this.filteredSkills = this.skillName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._filterSkills(value)));
        this.jobDetailsArray.push({ detail: '' });
        this.jobPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            vacancy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            lastDateToApply: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            jobInternship: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            salaryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            partTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](false),
            experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](6),
        });
        if (this.jobPostService.post) {
            this.jobPost = this.jobPostService.post;
            this.jobPostForm.patchValue({
                title: this.jobPost.jobPost.title,
                vacancy: this.jobPost.jobPost.vacancy,
                salary: this.jobPost.jobPost.salary,
                location: this.jobPost.jobPost.location,
                jobType: this.jobPost.jobPost.jobType,
                jobInternship: this.jobPost.jobPost.jobInternship,
                salaryType: this.jobPost.jobPost.salaryType,
                partTime: this.jobPost.jobPost.partTime,
                lastDateToApply: new Date(this.jobPost.jobPost.lastDateToApply),
                experience: this.jobPost.jobPost.experience,
            });
            this.skillsArray = this.jobPost.jobPost.skills;
            this.description = this.jobPost.jobPost.details,
                this.jobDetailsArray = this.jobPost.jobPost.details;
            this.aboutUs = this.jobPost.jobPost.aboutUs;
            this.questionsArray = this.jobPost.jobPost.question;
        }
        this.jobPostService.post = undefined;
    }
    closeModal() {
        this.isServiceRunning = false;
        this.modalService.hide(2);
    }
    openSkillModal(template) {
        this.skillName.patchValue('');
        this.modalRef = this.modalService.show(template, { id: 2, ignoreBackdropClick: true, animated: true });
        this.isServiceRunning = true;
    }
    _filterSkills(value) {
        if (value !== null) {
            const filterValue = value.toLowerCase();
            return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
        }
    }
    addFieldValueToSkillArray() {
        this.skillName.markAsTouched();
        if (this.skillName.value) {
            if (!this.skillsArray.find(data => data.skillName === this.skillName.value)) {
                this.skillsArray.push({ skillName: this.skillName.value });
            }
            this.closeModal();
            this.skillName.reset();
        }
    }
    deleteFieldValueToSkillArray(index) {
        if (this.skillsArray.length > 1) {
            this.skillsArray.splice(index, 1);
        }
    }
    addFieldValueToJobDetailsArray() {
        this.jobDetailsArray.push({ detail: '' });
    }
    deleteFieldValueJobDetailsArray(index) {
        if (this.jobDetailsArray.length > 1) {
            this.jobDetailsArray.splice(index, 1);
        }
    }
    onEditCloseItems() {
        this.isEditItems = !this.isEditItems;
    }
    save() {
        this.message = '';
        this.jobPostForm.markAllAsTouched();
        if (this.questionsArray.length > 0) {
            this.questionsArray.forEach((question, index) => {
                if (question.question === '') {
                    this.toastService.showToast('Please enter question');
                    return;
                }
                if (index === this.questionsArray.length - 1) {
                    this.addPost();
                }
            });
        }
        else {
            this.addPost();
        }
    }
    addPost() {
        if (this.skillsArray.length > 1) {
            if (this.description) {
                if (this.jobPostForm.valid) {
                    this.isServiceRunning = true;
                    const post = {
                        jobPost: {
                            active: true,
                            companyName: this.companyName,
                            companyLogo: this.companyLogo,
                            createdBy: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
                            createdAt: new Date(),
                            title: this.jobPostForm.get('title').value,
                            vacancy: this.jobPostForm.get('vacancy').value,
                            salary: this.jobPostForm.get('salary').value,
                            location: this.jobPostForm.get('location').value,
                            jobType: this.jobPostForm.get('jobType').value,
                            jobInternship: this.jobPostForm.get('jobInternship').value,
                            salaryType: this.jobPostForm.get('salaryType').value,
                            partTime: this.jobPostForm.get('partTime').value,
                            lastDateToApply: this.jobPostForm.get('lastDateToApply').value,
                            experience: this.jobPostForm.get('experience').value,
                            skills: this.skillsArray,
                            question: this.questionsArray,
                            details: this.description,
                            aboutUs: this.aboutUs,
                            verified: this.jobPost ? this.jobPost.status === 'approved' : false
                        }
                    };
                    if (!this.jobPost) {
                        this.jobPostService.addJobPost(post).subscribe((data) => {
                            if (data.data === true) {
                                this.toastService.showToast('Job Post Added Successfully !');
                            }
                            this.isServiceRunning = false;
                            this.modalRef.hide();
                            this.jobPostService.getPosts();
                        });
                    }
                    else {
                        post._id = this.jobPost._id;
                        this.jobPostService.updateJobPost(post).subscribe((data) => {
                            if (data.data === true) {
                                this.toastService.showToast('Job Post Updated Successfully !');
                            }
                            this.jobPostService.post = undefined;
                            this.isServiceRunning = false;
                            this.modalService.hide();
                            window.history.back();
                            this.jobPostService.getPosts();
                        });
                    }
                }
            }
            else {
                this.toastService.showToast('Enter Job Details', 'bg-danger');
            }
        }
        else {
            this.toastService.showToast('Enter Skills', 'bg-danger');
        }
    }
    deletePost() {
        this.isServiceRunning = true;
        this.jobPostService.deleteJobPost({ _id: this.jobPost._id }).subscribe((data) => {
            if (data.data === true) {
                this.toastService.showToast('Job post deleted successully!');
            }
            this.jobPostService.post = undefined;
            this.isServiceRunning = false;
            this.modalService.hide();
            window.history.back();
        }, err => this.isServiceRunning = false);
    }
    delete(template) {
        this.modalRef = this.modalService.show(template, { id: 2, class: 'delete-modal', ignoreBackdropClick: true, animated: true });
    }
    close(id = 1) {
        if (id === 2) {
            this.modalService.hide(2);
        }
        else {
            this.modalService.hide();
        }
    }
};
AddJobPostComponent.ctorParameters = () => [
    { type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__["JobPostServiceService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddJobPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-add-job-post',
        template: _raw_loader_add_job_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_job_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddJobPostComponent);



/***/ }),

/***/ "9uHk":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/recent-jobs/recent-jobs.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlbnQtam9icy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "A/e3":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/add-job-post/job-details/job-details.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AkDi":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row p-0 m-0 pt-5 overflow-x-hidden\">\r\n  <div class=\"row col-sm-12 justify-content-center p-0 mx-1\">\r\n    <div class=\"row col-sm-12 d-flex justify-content-between mx-1 mb-4\">\r\n      <div class=\"mx-2\">\r\n        <h2>Recent Job Posts</h2>\r\n      </div>\r\n      <div class=\"px-2 d-flex justify-content-center vertical-center text-link \">\r\n        <div class=\"px-2 align-self-end py-1 text-lato btn btn-primary text-xs\" (click)=\"navigateToAllJobs()\">Browse All Jobs</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-9 p-0 mt-2 \">\r\n      <app-not-found *ngIf=\"allJobPost.length === 0\" style=\"margin-top: 200px !important;\" message=\"No Jobs Available\" class=\"center-parent\">\r\n      </app-not-found>\r\n      <div class=\" mb-3\" *ngFor=\"let jobPost of allJobPost; index as i;\" (click)=\"seeDetails(jobPost)\">\r\n        <div *ngIf=\"i<5\" class=\"card shadow-lg p-3 text-link border-8\">\r\n          <div class=\"d-flex mb-3 justify-content-between\">\r\n            <div class=\"d-flex flex-wrap\">\r\n              <div class=\"mr-3 mb-2\">\r\n                <span>\r\n                  <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                    style=\"height: 60px; width: 58.2px;\">\r\n                </span>\r\n              </div>\r\n              <div class=\"text-left\">\r\n                <h4>{{jobPost.jobPost.title}}</h4>\r\n                <div class=\"column\">\r\n                  <div class=\"d-flex vertical-center flex-wrap\">\r\n                    <div class=\" vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Experience : </span>\r\n                      <span class=\"text-lato text-primary\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                        ''\r\n                        }}\r\n                        years</span>\r\n                    </div>\r\n\r\n                    <div class=\" vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\r\n                      <span class=\" text-lato text-primary\">&nbsp; {{jobPost.jobPost.companyName}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex flex-wrap mt-1\">\r\n                    <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\r\n                      <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\r\n                      <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\r\n                    </div>\r\n\r\n                    <div class=\"vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons text-md  mr-2 text-primary\">\r\n                        schedule\r\n                      </span>\r\n                      <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\r\n                        date: 'dd\r\n                        MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\r\n              <div class=\"p-2 bg-light \" style=\"border-radius: 25px !important;\">Applied</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\r\n            <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\r\n\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\r\n                {{jobPost.jobPost.skills[0].skillName }}\r\n              </div>\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\r\n                *ngIf=\"jobPost.jobPost.skills.length > 1\">\r\n                {{jobPost.jobPost.skills[1].skillName }}\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\r\n              <div class=\"my-2 vertical-center justify-content-start\">\r\n                <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\r\n                <div class=\"d-flex ml-1 align-self-end\" >\r\n                <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 mt-2 px-2\">\r\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-5 shadow-lg \">\r\n        <div class=\"m-2 mb-3\">\r\n          <div class=\"avatar-div\">\r\n            <img class=\"avatar-image\" src=\"../../../../assets/Peter Schutz2.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex text-dark\">\r\n          <p>Hire character, Train Skill\r\n          </p>\r\n        </div>\r\n        <div class=\"d-flex flex-column \">\r\n          <span class=\"text-sm text-primary\">Peter Schutz</span>\r\n          <span class=\"text-grey text-sm\">Former CEO, Porsche</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-2 shadow-lg \"\r\n        style=\"background-color: #000930; opacity: 0.8;\">\r\n        <div class=\"d-flex text-dark\">\r\n          <h4 class=\"text-white\">Make a Difference with Your Profile! </h4>\r\n        </div>\r\n        <div class=\"d-flex text-white\">\r\n          <p>Get more Applications on AI based Recruitment System with Your Updated Profile!\r\n          </p>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <div (click)=\"navigateToMyProfile()\"\r\n            class=\"d-flex vertical-center px-2 py-1 border-6 text-link btn btn-primary text-white text-lato text-smd\">\r\n            Update Profile\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyD8oHgN3nK3qcT7kvcMVTs9mkzeqFJ9vSY',
        authDomain: 'refer2career-9342a.firebaseapp.com',
        projectId: 'refer2career-9342a',
        storageBucket: 'refer2career-9342a.appspot.com',
        messagingSenderId: '833213007308',
        appId: '1:833213007308:web:e09ff54d82c39b3c188969',
        measurementId: 'G-LJET8FMWKP'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BQ1G":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-job-post/add-job-post.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar-content [navItems]=\"navItems\" *ngIf=\"!jobPost\"></app-nav-bar-content>\r\n<div class=\"w-100 h-100 m-0 p-0 bg-lightest-blue\" style=\"overflow-y: auto;\">\r\n  <div class=\"w-100 bg-primary no-border-t\" style=\"min-height: 240px !important; border-radius: 30px;\">\r\n  </div>\r\n  <div class=\"row justify-content-center px-0 pt-2 mx-0\" style=\"margin-top: -220px;\">\r\n    <div class=\"col-sm-12\">\r\n      <span class=\"material-icons d-block text-right text-lg text-link text-white semi-bold\"\r\n        (click)=\"close()\" *ngIf=\"jobPost\">close</span>\r\n      <span class=\"material-icons d-block text-right text-lg mt-3 text-link text-white semi-bold\" *ngIf=\"jobPost\"\r\n        (click)=\"delete(deletePopup)\">delete</span>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <span class=\"d-block text-white text-center semi-bold bold text-lg my-3\" *ngIf=\"!jobPost\">Post a job</span>\r\n      <span class=\"d-block text-white text-center semi-bold bold text-lg my-3\" *ngIf=\"jobPost\">Edit job</span>\r\n    </div>\r\n    <div class=\"col-sm-8 mx-2 bg-white\"\r\n      style=\"border-radius: 7px; overflow-y: auto !important; overflow-x: hidden !important;\">\r\n      <div class=\"mt-4 row d-flex vertical-center justify-content-center\" [formGroup]=\"jobPostForm\">\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"title\" class=\"label-form\">Job Title/Designation<span class=\"text-primary\">*</span></label>\r\n          <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\r\n            <input matInput placeholder=\"ex Software Developer\" id=\"title\" formControlName='title'>\r\n            <mat-error>Enter valid title</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"vacancy\" class=\"label-form\">Total Vacancies <span class=\"text-primary\">*</span></label>\r\n           <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\r\n            <input matInput type=\"number\" placeholder=\"ex 10\" class=\"p-0\" id=\"vacancy\" formControlName='vacancy'>\r\n            <mat-error>Enter valid number</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n            <label for=\"type\" class=\"label-form\">Full time Permanent/Part Time/Contractual Job/Internship</label>\r\n           <mat-form-field class=\"p-0 w-100 mat-form-field\" appearance=\"fill\">\r\n            <mat-select id=\"type\" formControlName='jobInternship'>\r\n              <mat-option value=\"Full Time Permanent Job\">Full Time Permanent Job</mat-option>\r\n              <mat-option value=\"Part Time\">Part Time</mat-option>\r\n              <mat-option value=\"Contractual Job\">Contractual Job</mat-option>\r\n              <mat-option value=\"Internship\">Internship</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"jobType\" class=\"label-form\">Job Type <span class=\"text-primary\">*</span></label>\r\n         <mat-form-field appearance=\"fill\"  class=\"p-0 w-100 mat-form-field\">\r\n          <mat-select id=\"jobType\" formControlName='jobType'>\r\n            <mat-option value=\"In office\">In office</mat-option>\r\n            <mat-option value=\"Work from home\">Work from home</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"salary\" class=\"label-form\">{{ jobPostForm.get('jobInternship').value === \"Internship\" ? 'Stipend': 'Salary'}} <span\r\n            class=\"text-primary\">*</span></label>\r\n          <mat-form-field class=\"w-100 mat-form-field\" appearance=\"fill\">\r\n            <input matInput formControlName='salary' id=\"salary\" name=\"salary\" type=\"number\" class=\"p-0\">\r\n            <span matPrefix>&#8377;&nbsp;</span>\r\n            <span matSuffix>.00</span>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"salaryType\" class=\"label-form\">Salary type <span class=\"text-primary\">*</span></label>\r\n         <mat-form-field  class=\"p-0 w-100 mat-form-field\" appearance=\"fill\">\r\n          <mat-select id=\"salaryType\" formControlName='salaryType'>\r\n            <mat-option value=\"per week\">per week</mat-option>\r\n            <mat-option value=\"per month\">per month</mat-option>\r\n            <mat-option value=\"per annum\">per annum</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-\" *ngIf=\"jobPostForm.get('jobType').value === 'In office'\">\r\n          <label for=\"jobLocation\" class=\"label-form\">Job Location <span class=\"text-primary\">*</span></label>\r\n           <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\r\n            <input matInput placeholder=\"ex Bengaluru\"  id=\"jobLocation\"  class=\"p-0\" formControlName='location'>\r\n            <mat-error>Enter valid location</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\">\r\n          <label for=\"workExp\" class=\"label-form\">Work Experience (Minimum) <span class=\"text-primary\">*</span></label>\r\n          <mat-slider class=\"w-100 form-control\" id=\"workExp\" style=\"color: #0e2043;\" formControlName=\"experience\" thumbLabel tickInterval=\"1\" min=\"0\" max=\"10\">\r\n          </mat-slider>\r\n        </div>\r\n        <div class=\"col-sm-5 m-3\"></div>\r\n        <div class=\"p-4 bg-white mb-3 col-sm-11\">\r\n          <div class=\"mt-2 w-100\">\r\n            <div class=\"ml-4 mb-3 d-flex justify-content-between\">\r\n              <span class=\"text-grey semi-bold\">Skills </span>\r\n              <span class=\"text-primary text-link semi-bold d-block\" (click)=\"openSkillModal(skillModal)\">+Add Skill</span>\r\n            </div>\r\n            <div class=\"row col-sm-11 d-flex justify-content-start\">\r\n              <div class=\"col-sm-12 my-4\">\r\n                <div class=\"bg-lightest-blue\" *ngFor=\"let data of skillsArray; index as i\"\r\n                  class=\"p-1 px-2 bg-lightest-blue vertical-center\"\r\n                  style=\"display: inline-block; border-radius: 8px; width: max-content; margin: 7px !important; white-space:nowrap;\">\r\n                  <span class=\"text-primary mr-2\">{{data.skillName}}</span>\r\n                  <span class=\"material-icons text-xs text-link text-primary\" (click)=\"deleteFieldValueToSkillArray(i)\">close</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\r\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\r\n            <label class=\"text-grey semi-bold d-block text-center mb-3\">Job Description</label>\r\n            <textarea class=\"form-control\" placeholder=\"Enter job description\" [(ngModel)]=\"description\"\r\n              [ngModelOptions]=\"{standalone: true}\" rows=\"8\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5 my-3\">\r\n          <label class=\"text-grey semi-bold d-block mb-3\" >Last date to apply</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"material-icons input-group-text text-secondary bg-white\">date_range\r\n              </span>\r\n            </div>\r\n            <input type=\"text\" formControlName=\"lastDateToApply\" autocomplete=\"nope\" placeholder=\"Choose Date\"\r\n              class=\"form-control semi-bold text-grey\" style=\"border-width: 1px;\" bsDatepicker readonly\r\n              [bsConfig]=\"{  isAnimated: true, containerClass:'theme-dark-blue', dateInputFormat: 'DD MMMM YYYY'}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\r\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\r\n            <label class=\"text-grey semi-bold\">About us</label>\r\n            <textarea class=\"form-control\" [(ngModel)]=\"aboutUs\" [ngModelOptions]=\"{standalone: true}\"\r\n              id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\r\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\r\n            <div class=\"d-flex justify-content-between vertical-center my-3\">\r\n              <label class=\"text-grey semi-bold\">Custom Questions</label>\r\n              <span class=\"text-primary text-link semi-bold d-block\" (click)=\"addQuestion()\">+Add Question</span>\r\n            </div>\r\n            <div class=\"mb-4\" *ngFor=\"let question of questionsArray; index as i\">\r\n              <div class=\"d-flex justify-content-between vertical-center my-3\">\r\n                <label class=\"d-block text-grey\">Question {{i + 1}}</label>\r\n                <span class=\"material-icons-outlined text-grey text-link\" (click)=\"deleteQuestion(i)\">delete</span>\r\n              </div>\r\n              <textarea class=\"form-control my-2\" [(ngModel)]=\"question.question\" [ngModelOptions]=\"{standalone: true}\"\r\n                rows=\"3\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"w-100 d-flex justify-content-center mb-4 mt-5 mr-2\">\r\n          <span class=\"text-danger text-sm semi-bold\">{{message}}</span>\r\n          <ion-spinner color=\"primary\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n          <button type=\"submit\" *ngIf=\"!isServiceRunning && !jobPost\"\r\n            class=\"ml-2 btn btn-primary p-0 text-smd px-4 py-1 mr-2\" (click)=\"save()\">Publish</button>\r\n            <button type=\"submit\" *ngIf=\"!isServiceRunning && jobPost\"\r\n            class=\"ml-2 btn btn-primary p-0 text-smd px-4 py-1 mr-2\" (click)=\"save()\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-bottom bg-primary mt-2\">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\r\n\r\n\r\n<ng-template #deletePopup>\r\n  <div class=\"modal-body p-3 box-shadow text-smd text-center\" style=\"border-radius: 8px;\">\r\n    Delete Job Post ?\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div class=\"d-flex justify-content-between mt-3\">\r\n      <button type=\"button\" class=\"btn btn-secondary bg-grey px-3 py-1\" (click)=\"deletePost()\">Yes</button>\r\n      <button type=\"button\" class=\"btn btn-prmary bg-violet px-3 py-1\" (click)=\"close(2)\">No</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #skillModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px;\">\r\n    <div class=\"d-block text-right\">\r\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <span class=\"text-grey semi-bold d-block text-center my-2\">ADD SKILL</span>\r\n    <div class=\"row p-0 px-2 m-3\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label class=\"text-grey\">Skill Name</mat-label>\r\n          <input type=\"text\" placeholder=\"Ex. JAVA\" aria-label=\"Number\" matInput [formControl]=\"skillName\"\r\n            [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\r\n      <button class=\"btn btn-primary py-1 px-2\" (click)=\"addFieldValueToSkillArray()\">ADD SKILL</button>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "D5Ig":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/manage-applicants/manage-applicants.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <div class=\"row justify-content-center px-1\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"m-3 mt-5 p-2 bg-white col-sm-9\"\r\n      style=\"margin-top: 30px !important; border-radius: 7px; overflow-y: auto !important; border: 1px solid #cccccc;\">\r\n      <table class=\"table\" *ngIf=\"allPosts.length > 0\">\r\n        <thead class=\"thead-light\">\r\n          <tr class=\"text-center\">\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col text-center\">PROFILE</th>\r\n            <th scope=\"col text-center\">STATUS</th>\r\n            <th scope=\"col text-center\">ACTION</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"text-center\">\r\n          <tr *ngFor=\"let post of allPosts; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td class=\"\">{{post.jobPost.title}}</td>\r\n            <td class=\"pt-3\"><span class=\"p-2 my-auto px-2 text-success\"\r\n                style=\"background-color: #e2ffd1; border-radius: 10px;\">Active</span></td>\r\n            <td class=\"\"><span (click)=\"navigate(post._id)\" class=\"p-1 px-5 btn btn-primary \"\r\n                style=\"border-radius: 10px;\">View\r\n                Applications</span></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div>\r\n        <h5 class=\"text-grey text-center mb-3\" *ngIf=\"allPosts.length == 0\">Job post not found!</h5>\r\n        <app-not-found *ngIf=\"allPosts.length == 0\" message=\"No Application Available\" ></app-not-found>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"footer-bottom bg-primary mt-2\">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "E61o":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/manage-applicants/manage-applicants.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYXBwbGljYW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "F8kL":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner-component/spinner-component.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-top fixed-bottom wh-100 vh-100 fixed-top vertical-center justify-content-center\"\r\n  *ngIf=\"visibility\" style=\"background-color: rgba(49, 49, 49, 0.5) !important;\">\r\n  <div class=\"border border-light bg-white rounded-circle p-2\">\r\n    <mat-spinner [diameter]=\"35\" [color]=\"color\"></mat-spinner>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "FITq":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/recent-jobs/recent-jobs.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row p-0 m-0 pt-5 overflow-x-hidden\">\r\n  <div class=\"row col-sm-12 justify-content-center p-0 mx-1\">\r\n    <div class=\"row col-sm-12 d-flex justify-content-between mx-1 mb-4\">\r\n      <div class=\"mx-2\">\r\n        <h2>Recent Jobs</h2>\r\n      </div>\r\n      <div class=\"px-2 d-flex justify-content-center vertical-center text-link \">\r\n        <div class=\"px-2 align-self-end py-1 text-lato btn btn-primary text-xs\" (click)=\"navigateToAllJobs()\">Browse All Jobs</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-9 p-0 mt-2 \">\r\n      <app-not-found *ngIf=\"filteredJobPosts.length === 0\" style=\"margin-top: 200px !important;\" class=\"center-parent\">\r\n      </app-not-found>\r\n      <div class=\" mb-3\" *ngFor=\"let jobPost of filteredJobPosts; index as i;\" (click)=\"seeDetails(jobPost)\">\r\n        <div *ngIf=\"i<5\" class=\"card shadow-lg p-3 text-link border-8\">\r\n          <div class=\"d-flex mb-3 justify-content-between\">\r\n            <div class=\"d-flex flex-wrap\">\r\n              <div class=\"mr-3 mb-2\">\r\n                <span>\r\n                  <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                    style=\"height: 60px; width: 58.2px;\">\r\n                </span>\r\n              </div>\r\n              <div class=\"text-left\">\r\n                <h4>{{jobPost.jobPost.title}}</h4>\r\n                <div class=\"column\">\r\n                  <div class=\"d-flex vertical-center flex-wrap\">\r\n                    <div class=\" vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Experience : </span>\r\n                      <span class=\"text-lato text-primary\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                        ''\r\n                        }}\r\n                        years</span>\r\n                    </div>\r\n\r\n                    <div class=\" vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\r\n                      <span class=\" text-lato text-primary\">&nbsp; {{jobPost.jobPost.companyName}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex flex-wrap mt-1\">\r\n                    <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\r\n                      <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\r\n                      <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\r\n                    </div>\r\n\r\n                    <div class=\"vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons text-md  mr-2 text-primary\">\r\n                        schedule\r\n                      </span>\r\n                      <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\r\n                        date: 'dd\r\n                        MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\r\n              <div class=\"p-2 bg-light \" style=\"border-radius: 25px !important;\">Applied</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\r\n            <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\r\n\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\r\n                {{jobPost.jobPost.skills[0].skillName }}\r\n              </div>\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\r\n                *ngIf=\"jobPost.jobPost.skills.length > 1\">\r\n                {{jobPost.jobPost.skills[1].skillName }}\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\r\n              <div class=\"justify-content-between vertical-center mr-2\">\r\n                <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">REWARD :\r\n                  ₹{{jobPost.referReward}}</div>\r\n              </div>\r\n              <div class=\"my-2 vertical-center justify-content-start\">\r\n                <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\r\n                <div class=\"d-flex ml-1 align-self-end\" >\r\n                <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3 mt-2 px-2\">\r\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-5 shadow-lg \">\r\n        <div class=\"m-2 mb-3\">\r\n          <div class=\"avatar-div\">\r\n            <img class=\"avatar-image\" src=\"../../../../assets/Group 2.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex text-dark\">\r\n          <p>I just got a job that I applied for via Refer2Career! I used the site all the time during my job hunt.\r\n          </p>\r\n        </div>\r\n        <div class=\"d-flex flex-column \">\r\n          <span class=\"text-sm text-primary\">Richard Anderson</span>\r\n          <span class=\"text-grey text-sm\">California, USA</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-2 shadow-lg \"\r\n        style=\"background-color: #000930; opacity: 0.8;\">\r\n        <div class=\"d-flex text-dark\">\r\n          <h4 class=\"text-white\">Make a Difference with Your Online Resume! </h4>\r\n        </div>\r\n        <div class=\"d-flex text-white\">\r\n          <p>Your resume in minutes with JobBoard resume assistant is ready!\r\n          </p>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <div (click)=\"navigateToMyProfile()\"\r\n            class=\"d-flex vertical-center px-2 py-1 border-6 text-link btn btn-primary text-white text-lato text-smd\">\r\n            Update Profile\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Fg4b":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/all-job-posts/all-job-posts.component.ts ***!
  \****************************************************************************/
/*! exports provided: AllJobPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJobPostsComponent", function() { return AllJobPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-job-posts.component.html */ "t1wX");
/* harmony import */ var _all_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-job-posts.component.scss */ "eqfQ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/job-post-service.service */ "hLKV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let AllJobPostsComponent = class AllJobPostsComponent {
    constructor(jobPostService, router, authService) {
        this.jobPostService = jobPostService;
        this.router = router;
        this.authService = authService;
        this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
        this.allJobPost = [];
        this.filteredJobPosts = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.options = ['Delivery boy', 'Software engineer', 'UI designer'];
        this.isSortByExpanded = false;
        this.isLocationExpanded = false;
        this.isPartTimeExpanded = false;
        this.isJobCategoryExpanded = false;
        this.isRemoteExpanded = false;
        this.isExperienceExpanded = false;
        this.allLocations = new Set();
        this.selectedLocations = new Set();
        this.selectedLocationsArray = [];
        this.isRelevent = false;
        this.isServiceRunning = false;
        this.isSortBy = false;
        this.isScreenBig = false;
        this.refineInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refineDefaultInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refine = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refineJobsDropDown = false;
        this.allMyApplications = [];
        this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    }
    isChanged() {
        return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
    }
    isFilterAdded() {
        return !(JSON.stringify(this.refine) === JSON.stringify(this.refineDefaultInitial));
    }
    closeSortBy(value) {
        this.isSortBy = value;
        this.isSortByExpanded = false;
    }
    openRefineJobs() {
        if (!this.isScreenBig) {
            this.refineJobsDropDown = !this.refineJobsDropDown;
        }
    }
    getMyApplication() {
        const db = {
            collection: 'applyJob',
            query: { candidateId: this.user._id },
            selectedFields: { jobPostId: 1, _id: 0 },
        };
        this.authService.find(db).subscribe((data) => {
            if (data.data) {
                this.allMyApplications = data.data;
                this.checkJobPosts();
            }
        });
    }
    checkJobPosts() {
        this.allJobPost.forEach((post) => {
            if (this.allMyApplications.find(data => data.jobPostId === post._id)) {
                post.isApplied = true;
            }
        });
    }
    clearFilter() {
        this.refineInitial.partTime = this.refineDefaultInitial.partTime;
        this.refineInitial.fullTime = this.refineDefaultInitial.fullTime;
        this.refineInitial.jobs = this.refineDefaultInitial.jobs;
        this.refineInitial.internships = this.refineDefaultInitial.internships;
        this.refineInitial.remote = this.refineDefaultInitial.remote;
        this.refineInitial.minExp = this.refineDefaultInitial.minExp;
        this.refineInitial.location = this.refineDefaultInitial.location;
        this.refine.partTime = this.refineDefaultInitial.partTime;
        this.refine.fullTime = this.refineDefaultInitial.fullTime;
        this.refine.jobs = this.refineDefaultInitial.jobs;
        this.refine.internships = this.refineDefaultInitial.internships;
        this.refine.remote = this.refineDefaultInitial.remote;
        this.refine.minExp = this.refineDefaultInitial.minExp;
        this.refine.location = this.refineDefaultInitial.location;
        this.selectedLocations.clear();
        this.refineJobs();
        this.isSortByExpanded = false;
        this.isLocationExpanded = false;
        this.isPartTimeExpanded = false;
        this.isJobCategoryExpanded = false;
        this.isRemoteExpanded = false;
        this.isExperienceExpanded = false;
    }
    ngOnInit() {
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
            this.refineJobsDropDown = true;
        }
        this.isServiceRunning = true;
        const db = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
        };
        this.authService.find(db).subscribe((data) => {
            if (data.data.length > 0) {
                this.filteredJobPosts = data.data;
                this.allJobPost = data.data;
                this.getMyApplication();
                this.sortByDate();
                this.isServiceRunning = false;
            }
        });
        const dbOpeartion = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
            selectedFields: { 'jobPost.location': 1, _id: 0 },
        };
        this.authService.find(dbOpeartion).subscribe((data) => {
            if (data.data.length > 0) {
                data.data.forEach((ele) => {
                    this.allLocations.add(ele.jobPost.location);
                });
            }
        });
    }
    seeDetails(data) {
        if (this.role === 2) {
            this.router.navigateByUrl(`/referer/jobs/job-detail/${data._id}`);
        }
        else if (this.role === 0) {
            this.router.navigateByUrl(`/admin/jobs/detail/${data._id}`);
        }
        else if (this.role === 1) {
            this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
        }
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    filterJobPosts() {
        let search = this.myControl.value;
        if (search) {
            search = search.toLowerCase();
        }
        else {
            search = '';
        }
        this.filteredJobPosts = [];
        this.allJobPost.forEach((jobPost, index) => {
            if (jobPost.jobPost.title.toLowerCase().includes(search)) {
                this.filteredJobPosts.push(JSON.stringify(jobPost));
            }
            jobPost.jobPost.skills.forEach((element) => {
                const name = element.skillName;
                if (name.toLowerCase().includes(search)) {
                    this.filteredJobPosts.push(JSON.stringify(jobPost));
                }
            });
            if (this.allJobPost.length === index + 1) {
                const arr = [...new Set(this.filteredJobPosts)];
                this.filteredJobPosts = [];
                arr.forEach(data => {
                    this.filteredJobPosts.push(JSON.parse(data));
                });
            }
        });
    }
    sortByDate() {
        this.filteredJobPosts.sort((a, b) => {
            const dateA = new Date(a.jobPost.createdAt);
            const dateB = new Date(b.jobPost.createdAt);
            return dateB - dateA;
        });
    }
    getExperience(value) {
        return `${value}`;
    }
    getStartDate(date) {
        const date1 = new Date();
        const date2 = new Date(date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 7;
    }
    updateLocation(event, location) {
        if (event.checked === true) {
            this.selectedLocations.add(location);
        }
        else {
            this.selectedLocations.delete(location);
        }
        this.refine.location = [...this.selectedLocations];
    }
    checkLocation(location) {
        return this.selectedLocations.has(location);
    }
    refineJobs() {
        this.isServiceRunning = true;
        const dbOpeartion = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
        };
        if (this.refine.partTime && this.refine.fullTime) {
            //
        }
        else if (this.refine.partTime) {
            dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
        }
        else if (this.refine.fullTime) {
            dbOpeartion.query['jobPost.partTime'] = false;
        }
        if (this.refine.jobs && this.refine.internships) {
            //
        }
        else if (this.refine.jobs) {
            dbOpeartion.query['jobPost.jobInternship'] = 'Job';
        }
        else if (this.refine.internships) {
            dbOpeartion.query['jobPost.jobInternship'] = 'Internship';
        }
        if (this.refine.remote) {
            dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
        }
        if (this.selectedLocations.size > 0) {
            dbOpeartion.query['jobPost.location'] = { $in: [...this.selectedLocations] };
        }
        if (this.refine.minExp > 0) {
            dbOpeartion.query['jobPost.experience'] = { $gt: this.refine.minExp ? this.refine.minExp - 1 : 0 };
        }
        this.authService.find(dbOpeartion).subscribe((data) => {
            if (data.data) {
                this.filteredJobPosts = data.data;
                this.allJobPost = data.data;
                this.checkJobPosts();
                this.refineInitial.partTime = this.refine.partTime,
                    this.refineInitial.fullTime = this.refine.fullTime,
                    this.refineInitial.jobs = this.refine.jobs,
                    this.refineInitial.internships = this.refine.internships,
                    this.refineInitial.remote = this.refine.remote,
                    this.refineInitial.minExp = this.refine.minExp,
                    this.refineInitial.location = this.refine.location;
                if (!this.isScreenBig) {
                    this.refineJobsDropDown = false;
                }
                this.filterJobPosts();
                this.sortByDate();
                this.isServiceRunning = false;
            }
        });
    }
};
AllJobPostsComponent.ctorParameters = () => [
    { type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__["JobPostServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AllJobPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-all-job-posts',
        template: _raw_loader_all_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllJobPostsComponent);



/***/ }),

/***/ "HY4x":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/view-profile/view-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view-profile.component.html */ "XQCc");
/* harmony import */ var _view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-profile.component.scss */ "YYSD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "g1va");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");











let ViewProfileComponent = class ViewProfileComponent {
    constructor(storage, menu, route, modalRef, modalService, authService, toastService) {
        this.storage = storage;
        this.menu = menu;
        this.route = route;
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.authService = authService;
        this.toastService = toastService;
        this.navItems = [
            {
                name: 'DASHBOARD',
                route: "/recruiter/dashboard"
            },
            {
                name: 'MY PROFILE',
                route: "/recruiter/profile"
            },
            {
                name: 'JOB POSTS',
                route: "/recruiter/job-posts"
            },
            {
                name: 'MANAGE APPLICANTS',
                route: "/recruiter/applicants"
            },
            {
                name: 'ADD JOB POST',
                route: "/recruiter/create-job-posts"
            }
        ];
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
        this.maxDob = new Date(2006, 11, 31);
        this.userId = '';
    }
    get profileCompleted() {
        let percent = 12;
        if (this.cvHeadLine) {
            percent += 10;
        }
        if (this.workExpArray.length > 0) {
            percent += 15;
        }
        if (this.skillsArray.length > 0) {
            percent += 12;
        }
        if (this.educationArray.length > 0) {
            percent += 11;
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
        return percent;
    }
    openResume() {
        window.open(this.user.resume, '_blank');
    }
    ngOnInit() {
        this.initializeProfileForm();
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.userId = params.id;
                // this.getDetails();
                this.getUser();
            }
        });
    }
    setBasicInfo() {
        if (this.user.basicInfo) {
            this.profileForm.patchValue({
                mobile: this.user.basicInfo.mobile,
                gender: this.user.basicInfo.gender,
                martialStatus: this.user.basicInfo.martialStatus,
                dob: this.user.basicInfo.dob,
                nationality: this.user.basicInfo.nationality,
            });
        }
        else {
            this.profileForm.reset();
        }
    }
    initializeProfileForm() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            martialStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
        });
    }
    calculateExp() {
        let total = 0;
        for (const post of this.workExpArray) {
            const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
            const dateSecond = new Date(post.startDate);
            // time difference
            const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());
            // days difference
            const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));
            total += diffYears;
        }
        return total.toFixed(0);
    }
    getUser() {
        this.isServiceRunning = true;
        this.authService.find({
            collection: 'users',
            query: {
                _id: this.userId,
                role: 2,
            }
        }).subscribe((data) => {
            if (data.data.length > 0) {
                this.user = data.data[0];
                this.setBasicInfo();
                if (this.user.cvHead) {
                    this.cvHeadLine = this.user.cvHead;
                }
                this.educationArray = this.user.education ? this.user.education : [];
                this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
                this.skillsArray = this.user.skills ? this.user.skills : [];
                this.isServiceRunning = false;
            }
            else {
                this.authService.find({
                    collection: 'referedProfiles',
                    query: {
                        _id: this.userId,
                    }
                }).subscribe((pata) => {
                    if (pata.data.length > 0) {
                        this.user = pata.data[0];
                        this.setBasicInfo();
                        if (this.user.cvHead) {
                            this.cvHeadLine = this.user.cvHead;
                        }
                        this.educationArray = this.user.education ? this.user.education : [];
                        this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
                        this.skillsArray = this.user.skills ? this.user.skills : [];
                        this.isServiceRunning = false;
                    }
                });
            }
        });
    }
};
ViewProfileComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] }
];
ViewProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-view-profile',
        template: _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewProfileComponent);



/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.user = {};
        this.isScreenBig = false;
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' });
        this.baseUrl = '';
        this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
        this.getCurrentUser();
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
        }
        if (window.localStorage.getItem('id')) {
            const dbOperation = {
                collection: 'users',
                query: { _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }
            };
            this.find(dbOperation).subscribe((data) => {
                if (data.data) {
                    this.user = data.data[0];
                }
            });
        }
    }
    linkedInLogin() {
        return this.http.get(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8084%2Fcallback%2F&scope=r_emailaddress%20r_liteprofile&client_id=78pijkn0197pgp`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
    }
    getCurrentUser() {
        if (window.localStorage.getItem('id')) {
            this.getDetails({ email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email })
                .subscribe((data) => {
                this.currentUser.next(data.data);
            });
        }
    }
    registerCandidate(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/register/candidate`, body, { headers: this.headers });
    }
    verifyOTP(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/verify/candidate`, body, { headers: this.headers }).toPromise();
    }
    login(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/login`, body, { headers: this.headers }).toPromise();
    }
    updateAdminDetails(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/updateAdminDetails`, body, { headers: this.headers }).toPromise();
    }
    create(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/create`, body, { headers: this.headers }).toPromise();
    }
    update(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/update`, body, { headers: this.headers }).toPromise();
    }
    find(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/find`, body, { headers: this.headers });
    }
    updateUserDetails(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/updateUserDetails`, body, { headers: this.headers }).toPromise();
    }
    getDetails(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/getDetails`, body, { headers: this.headers });
    }
    getOTP(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/otpRequest`, body, { headers: this.headers });
    }
    sendMail(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/send-mail`, body, { headers: this.headers });
    }
    verify(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/verifyOTP`, body, { headers: this.headers });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "Ia/W":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav-bar-content/nav-bar-content.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row shadow justify-content-center p-0 m-0\">\r\n  <div class=\"col-sm-12 shadow\">\r\n    <nav class=\"navbar navbar-expand-lg col-sm-11 navbar-light bg-light w-100 \">\r\n      <a class=\"nav-link mr-1\"><img src=\"../../../../assets/refer2carrierlogo.png\" class=\"logo-header\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler collapsed\" (click)=\"isCollapsed = !isCollapsed\" type=\"button\" aria-expanded=\"false\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"ml-3 collapse navbar-collapse vertical-center justify-content-between\" id=\"navbarNav\"\r\n        [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item mr-4\" *ngFor=\"let item of navItems\">\r\n            <a class=\"nav-link text-dark myfont-size text-link active-button pl-3 pr-3\"\r\n              [ngClass]=\"url.includes(item.route) ? 'active-url' : ''\" (click)=\"navigate(item.route)\"> {{item.name}}</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav\">\r\n          <li>\r\n            <a (click)=\"openModal(logout)\"><button class=\"btn btn-primary\"><span class=\"vertical-center\">\r\n                  <ion-icon name=\"lock-closed\" class=\"mr-1\"></ion-icon>LOGOUT\r\n                </span></button></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #logout>\r\n  <div class=\"bg-white box-shadow text-lato p-3 m-3\" style=\"border-radius: 10px;\">\r\n    Are you sure you want to logout?\r\n    <div class=\"d-flex justify-content-end px-2 mt-2\">\r\n      <button class=\"btn btn-secondary p-0 text-smd px-2 mr-3\" (click)=\"loggedOut()\">Yes</button>\r\n      <button class=\"btn btn-primary text-smd px-2 p-0\" (click)=\"cancel()\">No</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n");

/***/ }),

/***/ "JALx":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "K5Im":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/manage-applicants/manage-applicants.component.ts ***!
  \************************************************************************************/
/*! exports provided: ManageApplicantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageApplicantsComponent", function() { return ManageApplicantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-applicants.component.html */ "D5Ig");
/* harmony import */ var _manage_applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-applicants.component.scss */ "E61o");
/* harmony import */ var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/enums */ "pzb0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let ManageApplicantsComponent = class ManageApplicantsComponent {
    constructor(dbService, router) {
        this.dbService = dbService;
        this.router = router;
        this.allPosts = [];
        this.isServiceRunning = false;
    }
    ngOnInit() {
        this.getAllJobs();
    }
    getAllJobs() {
        this.isServiceRunning = true;
        const dbOperation = {
            collection: 'jobposts',
            query: { 'jobPost.createdBy': JSON.parse(window.atob(window.localStorage.getItem('id')))._id }
        };
        this.dbService.find(dbOperation).subscribe((data) => {
            if (data.data.length > 0) {
                this.allPosts = data.data;
                this.allPosts.sort((a, b) => {
                    const c = new Date(a.jobPost.createdAt);
                    const d = new Date(b.jobPost.createdAt);
                    return d - c;
                });
            }
            this.isServiceRunning = false;
        });
    }
    navigate(id) {
        if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].ADMIN) {
            this.router.navigateByUrl(`/admin/applicants/${id}`);
        }
        else {
            this.router.navigateByUrl(`/recruiter/applicants/${id}`);
        }
    }
};
ManageApplicantsComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ManageApplicantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-manage-applicants',
        template: _raw_loader_manage_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManageApplicantsComponent);



/***/ }),

/***/ "MOns":
/*!*****************************************************************************!*\
  !*** ./src/app/login/signin/employer-signin/employer-signin.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llci1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/view-profile/view-profile.component */ "HY4x");
/* harmony import */ var _login_signin_employer_signin_employer_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../login/signin/employer-signin/employer-signin.component */ "3m3E");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "0dfH");
/* harmony import */ var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/applications/applications.component */ "iwS4");
/* harmony import */ var _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/manage-applicants/manage-applicants.component */ "K5Im");
/* harmony import */ var _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-job-post/add-job-post.component */ "8ymR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/add-job-post/job-details/job-details.component */ "shd7");
/* harmony import */ var _components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/spinner-component/spinner-component.component */ "eDag");
/* harmony import */ var _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/all-job-posts/all-job-posts.component */ "Fg4b");
/* harmony import */ var _login_signin_signin_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../login/signin/signin.component */ "WTty");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/nav-bar-content/nav-bar-content.component */ "Xsf5");
/* harmony import */ var _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/recent-jobs/recent-jobs.component */ "Vxhh");
/* harmony import */ var _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/emp-recent-job-posts/emp-recent-job-posts.component */ "z7Ah");






































































let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_62__["SpinnerComponentComponent"],
            _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_6__["AddJobPostComponent"],
            _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_61__["JobDetailsComponent"],
            _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_63__["AllJobPostsComponent"],
            _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_5__["ManageApplicantsComponent"],
            _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsComponent"],
            _login_signin_signin_component__WEBPACK_IMPORTED_MODULE_64__["SigninComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            _login_signin_employer_signin_employer_signin_component__WEBPACK_IMPORTED_MODULE_2__["EmployerSigninComponent"],
            _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__["ViewProfileComponent"],
            _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_67__["NavBarContentComponent"],
            _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_68__["RecentJobsComponent"],
            _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_69__["EmpRecentJobPostsComponent"],
        ],
        entryComponents: [
            _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_6__["AddJobPostComponent"],
            _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_5__["ManageApplicantsComponent"]
        ],
        imports: [
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_65__["NgSelectModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_59__["AlertModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_60__["BsDatepickerModule"].forRoot(),
            ng_otp_input__WEBPACK_IMPORTED_MODULE_58__["NgOtpInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_36__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_40__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_42__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_47__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_48__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_49__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_51__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_53__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_54__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_55__["IonicModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_66__["CollapseModule"].forRoot(),
        ],
        exports: [
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            _components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_62__["SpinnerComponentComponent"],
            _login_signin_employer_signin_employer_signin_component__WEBPACK_IMPORTED_MODULE_2__["EmployerSigninComponent"],
            _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__["ViewProfileComponent"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_59__["AlertModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_58__["NgOtpInputModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_60__["BsDatepickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_17__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_19__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_22__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_35__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_36__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_40__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_41__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_42__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_44__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_45__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_46__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_47__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_48__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_49__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_50__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_51__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_52__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_53__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_54__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_55__["IonicModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_61__["JobDetailsComponent"],
            _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_63__["AllJobPostsComponent"],
            _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_5__["ManageApplicantsComponent"],
            _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsComponent"],
            _login_signin_signin_component__WEBPACK_IMPORTED_MODULE_64__["SigninComponent"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_65__["NgSelectModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_66__["CollapseModule"],
            _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_67__["NavBarContentComponent"],
            _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_68__["RecentJobsComponent"],
            _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_69__["EmpRecentJobPostsComponent"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_57__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_56__["SplashScreen"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalRef"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SharedModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/models/enums */ "pzb0");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











let AppComponent = class AppComponent {
    constructor(location, platform, splashScreen, statusBar, router, authService) {
        this.location = location;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.authService = authService;
        this.role = _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"];
        this.initializeApp();
        if (window.localStorage.getItem('id')) {
            if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].CANDIDATE) {
                if (!(this.location.path()).includes('referer')) {
                    this.router.navigateByUrl('/referer');
                }
            }
            else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].ADMIN) {
                if (!(this.location.path()).includes('admin')) {
                    this.router.navigateByUrl('/admin');
                }
            }
            else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].EMPLOYER) {
                if (!(this.location.path()).includes('recruiter')) {
                    this.router.navigateByUrl('/recruiter');
                }
            }
        }
        else {
            if (!(this.location.path().includes('login'))) {
                this.router.navigateByUrl('/login');
            }
        }
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UV+q":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/applications/applications.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <div class=\"h-100 w-100 bg-lightest-blue\" style=\"overflow-y: auto;\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"bg-primary w-100 text-white\"\r\n      style=\"min-height: 240px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\r\n    </div>\r\n    <h3 class=\"text-md text-center text-white\" style=\"margin-top: -160px !important;\">{{post.jobPost ?\r\n      post.jobPost.title : ''}}</h3>\r\n    <div class=\"row p-0 m-0 justify-content-center\">\r\n      <div class=\"col-sm-10 p-2\" style=\"overflow-y: auto !important; overflow-x: hidden;\">\r\n        <div class=\"w-100 vh-100\" *ngIf=\"!isServiceRunning\">\r\n          <div class=\"p-2 bg-white border-10 w-100 vh-100\"\r\n            style=\"margin-top: 20px !important; overflow-y: auto !important;\">\r\n            <div class=\"row justify-content-center vertical-center mt-5\">\r\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" [ngClass]=\"isApplicationRecieved ? 'active-menu' : ''\"\r\n                (click)=\"changeTopMenu(0)\">\r\n                <span class=\"mr-2\">Applications</span>\r\n                <span class=\"badge badge-light\">{{applicationRecieved}}</span>\r\n              </div>\r\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(1)\"\r\n                [ngClass]=\"isShortlisted ? 'active-menu' : ''\">\r\n                <span class=\"mr-2\">Shortlisted</span>\r\n                <span class=\"badge badge-light\">{{totalShortlisted}}</span>\r\n              </div>\r\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(2)\"\r\n                [ngClass]=\"isHired ? 'active-menu' : ''\">\r\n                <span class=\"mr-2\">Hired</span>\r\n                <span class=\"badge badge-light\">{{totalHired}}</span>\r\n              </div>\r\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(3)\"\r\n                [ngClass]=\"isRejected ? 'active-menu' : ''\">\r\n                <span class=\"mr-2\">Rejected</span>\r\n                <span class=\"badge badge-light\">{{totalRejected}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"vertical-center justify-content-end\" *ngIf=\"false\">\r\n              <button class=\"btn btn-outline-primary text-sm mr-2\" (click)=\"openFilter(filter)\">Add Filter</button>\r\n            </div>\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"col-sm-8 my-2\">\r\n                <div *ngFor=\"let data of skillsArray; index as i\" class=\"p-1 px-2 bg-violet vertical-center\"\r\n                  style=\"display: inline-block; border-radius: 5px; width: max-content; margin: 3px !important; white-space:nowrap;\">\r\n                  <span class=\"text-white mr-3\">{{data}}</span>\r\n                  <span class=\"material-icons text-xs text-white text-link pt-1\"\r\n                    (click)=\"removeFromFilter(i)\">close</span>\r\n                </div>\r\n                <div class=\"p-1 px-2 bg-violet vertical-center\" *ngIf=\"minExp\"\r\n                  style=\"display: inline-block; border-radius: 5px; width: max-content; margin: 3px !important; white-space:nowrap;\">\r\n                  <span class=\"text-white mr-3\">Minimum Experience: {{minExp}} Years</span>\r\n                  <span class=\"material-icons text-xs text-white text-link pt-1\" (click)=\"removeExp()\">close</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"mt-4 row p-3 justify-content-center\">\r\n              <div class=\"col-sm-8 d-flex justify-content-center p-3\" *ngIf=\"isApplicationRecieved\">\r\n                <button class=\"btn btn-primary fall-animation\" *ngIf=\"totalChecked\"\r\n                  (click)=\"openConfirmModal(confirmModal, 'Shortlist')\">Shortlist</button>\r\n              </div>\r\n              <div class=\"col-sm-8 d-flex justify-content-center p-3\" *ngIf=\"isShortlisted\">\r\n                <button class=\"btn btn-primary fall-animation mr-2\" *ngIf=\"totalChecked\"\r\n                  (click)=\"openConfirmModal(confirmModal, 'Hire')\">Hire</button>\r\n                <button class=\"btn btn-primary fall-animation\" *ngIf=\"totalChecked\"\r\n                  (click)=\"openConfirmModal(confirmModal, 'Reject')\">Reject</button>\r\n              </div>\r\n              <table class=\"table col-sm-11 mt-3\" *ngIf=\"filteredCandidates.length > 0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th scope=\"col\">\r\n                      <mat-checkbox *ngIf=\"!isRejected && !isHired\" class=\"example-margin text-uppercase\"\r\n                        [checked]=\"totalChecked == filteredCandidates.length\" (change)=\"checkAll()\">\r\n                      </mat-checkbox>\r\n                    </th>\r\n                    <th scope=\"col\">SN</th>\r\n                    <th scope=\"col\">Name</th>\r\n                    <th scope=\"col\">Email</th>\r\n                    <th scope=\"col\">Resume</th>\r\n                    <th scope=\"col\">Profile Status</th>\r\n                    <th scope=\"col\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let user of filteredCandidates; index as i\">\r\n                    <td>\r\n                      <mat-checkbox *ngIf=\"!isRejected && !isHired\" (change)=\"checkedUser(i)\"\r\n                        class=\"example-margin text-uppercase \" [checked]=\"user.isChecked\">\r\n                      </mat-checkbox>\r\n                    </td>\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td><span (click)=\"openResume(user.resume)\" class=\"material-icons text-primary text-lg text-link\">\r\n                        cloud_download\r\n                      </span></td>\r\n                    <td>{{user.profileCompleted}}% Completed</td>\r\n                    <td >\r\n                      <div class=\"col-sm-10 d-flex bg-primary text-link border-8 p-2 d-flex vertical-center\">\r\n                        <span class=\"text-white justify-content-center text-sm\" (click)=\"viewProfile(user._id)\">View Profile</span>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <app-not-found *ngIf=\"filteredCandidates.length === 0\" message=\"No Application Available\" ></app-not-found>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom bg-primary mt-2\">\r\n      <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n      </div>\r\n    </div>\r\n  </div>\r\n   \r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\r\n\r\n<ng-template #filter>\r\n  <div class=\"row p-0 pl-0 ml-0 vh-100 justify-content-end\">\r\n    <div class=\"col-sm-3 p-0 pl-0 ml-0 h-100 bg-white\">\r\n      <div class=\"p-3 pt-5 h-100\">\r\n        <div class=\"vertical-center justify-content-between mb-5\">\r\n          <span class=\"semi-bold text-md\">Filter</span>\r\n          <span class=\"material-icons text-link text-md bold mr-3\" (click)=\"closeModal()\">close</span>\r\n        </div>\r\n\r\n        <div class=\"mr-3 mb-3\">\r\n          <label class=\"text-grey\">Skills</label>\r\n          <ng-select placeholder=\"Select skills\" [multiple]=\"true\" [(ngModel)]=\"skillsArray\">\r\n            <ng-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\r\n              {{option}}</ng-option>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"mr-3\">\r\n          <label class=\"text-grey\">Minimum Experience (in years)</label>\r\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"minExp\" placeholder=\"Enter Experience\">\r\n        </div>\r\n      </div>\r\n      <div class=\"my-3 position-absolute w-100\" style=\"bottom: 0px !important; padding: 0px;\">\r\n        <hr class=\"w-100\">\r\n        <div class=\"vertical-center justify-content-center py-3 mb-5\">\r\n          <span class=\"text-primary text-smd mr-3 text-violet text-link\" (click)=\"clearFilter()\">Clear all</span>\r\n          <button class=\"btn btn-primary bg-violet text-sm\" (click)=\"seeResults()\">See Results</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #skillModal>\r\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px;\">\r\n    <div class=\"d-block text-right\">\r\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <span class=\"text-grey semi-bold d-block text-center my-2\">ADD SKILL</span>\r\n    <div class=\"row p-0 px-2 m-3\">\r\n      <div class=\"col-sm-12 mt-3\">\r\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n          <mat-label>Skill Name</mat-label>\r\n          <input type=\"text\" placeholder=\"Ex. JAVA\" aria-label=\"Number\" matInput [formControl]=\"skillName\"\r\n            [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\r\n            <mat-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n          <mat-error>Enter valid detail</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\r\n      <button class=\"btn btn-primary bg-violet py-1 px-2\" (click)=\"addSkill()\">ADD SKILL</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #confirmModal>\r\n  <div class=\"p-3 bg-white\" style=\"border-radius: 10px;\">\r\n    <div class=\"w-100 text-right\">\r\n      <span class=\"material-icons text-link text-smd text-grey bold\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <div class=\"w-100 text-center\">\r\n      <span class=\"text-grey text-slmd\">Are you sure, you want to {{confirmModalStatus}} the selected applicants\r\n      </span>\r\n    </div>\r\n    <div class=\"mt-4 vertical-center justify-content-center\">\r\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Shortlist'\"\r\n        (click)=\"updateStatus('Shortlisted')\">Shortlist</button>\r\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Hire'\"\r\n        (click)=\"updateStatus('Hired')\">Hire</button>\r\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Reject'\"\r\n        (click)=\"updateStatus('Rejected')\">Reject</button>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "Vxhh":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/recent-jobs/recent-jobs.component.ts ***!
  \************************************************************************/
/*! exports provided: RecentJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentJobsComponent", function() { return RecentJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recent_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recent-jobs.component.html */ "FITq");
/* harmony import */ var _recent_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recent-jobs.component.scss */ "9uHk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/job-post-service.service */ "hLKV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let RecentJobsComponent = class RecentJobsComponent {
    constructor(jobPostService, router, authService) {
        this.jobPostService = jobPostService;
        this.router = router;
        this.authService = authService;
        this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
        this.isUser = true;
        this.allJobPost = [];
        this.filteredJobPosts = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.options = ['Delivery boy', 'Software engineer', 'UI designer'];
        this.isSortByExpanded = false;
        this.isLocationExpanded = false;
        this.isPartTimeExpanded = false;
        this.isJobCategoryExpanded = false;
        this.isRemoteExpanded = false;
        this.isExperienceExpanded = false;
        this.allLocations = new Set();
        this.selectedLocations = new Set();
        this.selectedLocationsArray = [];
        this.isRelevent = false;
        this.isServiceRunning = false;
        this.isSortBy = false;
        this.isScreenBig = false;
        this.refineInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refineDefaultInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refine = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
        };
        this.refineJobsDropDown = false;
        this.allMyApplications = [];
        this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    }
    isChanged() {
        return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
    }
    isFilterAdded() {
        return !(JSON.stringify(this.refine) === JSON.stringify(this.refineDefaultInitial));
    }
    closeSortBy(value) {
        this.isSortBy = value;
        this.isSortByExpanded = false;
    }
    openRefineJobs() {
        if (!this.isScreenBig) {
            this.refineJobsDropDown = !this.refineJobsDropDown;
        }
    }
    getMyApplication() {
        const db = {
            collection: 'applyJob',
            query: { candidateId: this.user._id },
            selectedFields: { jobPostId: 1, _id: 0 },
        };
        this.authService.find(db).subscribe((data) => {
            if (data.data) {
                this.allMyApplications = data.data;
                this.checkJobPosts();
            }
        });
    }
    checkJobPosts() {
        this.allJobPost.forEach((post) => {
            if (this.allMyApplications.find(data => data.jobPostId === post._id)) {
                post.isApplied = true;
            }
        });
    }
    clearFilter() {
        this.refineInitial.partTime = this.refineDefaultInitial.partTime;
        this.refineInitial.fullTime = this.refineDefaultInitial.fullTime;
        this.refineInitial.jobs = this.refineDefaultInitial.jobs;
        this.refineInitial.internships = this.refineDefaultInitial.internships;
        this.refineInitial.remote = this.refineDefaultInitial.remote;
        this.refineInitial.minExp = this.refineDefaultInitial.minExp;
        this.refineInitial.location = this.refineDefaultInitial.location;
        this.refine.partTime = this.refineDefaultInitial.partTime;
        this.refine.fullTime = this.refineDefaultInitial.fullTime;
        this.refine.jobs = this.refineDefaultInitial.jobs;
        this.refine.internships = this.refineDefaultInitial.internships;
        this.refine.remote = this.refineDefaultInitial.remote;
        this.refine.minExp = this.refineDefaultInitial.minExp;
        this.refine.location = this.refineDefaultInitial.location;
        this.selectedLocations.clear();
        this.refineJobs();
        this.isSortByExpanded = false;
        this.isLocationExpanded = false;
        this.isPartTimeExpanded = false;
        this.isJobCategoryExpanded = false;
        this.isRemoteExpanded = false;
        this.isExperienceExpanded = false;
    }
    ngOnInit() {
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
            this.refineJobsDropDown = true;
        }
        this.isServiceRunning = true;
        const db = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
        };
        this.authService.find(db).subscribe((data) => {
            if (data.data.length > 0) {
                this.filteredJobPosts = data.data;
                this.allJobPost = data.data;
                this.getMyApplication();
                this.sortByDate();
                this.isServiceRunning = false;
            }
        });
        const dbOpeartion = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
            selectedFields: { 'jobPost.location': 1, _id: 0 },
        };
        this.authService.find(dbOpeartion).subscribe((data) => {
            if (data.data.length > 0) {
                data.data.forEach((ele) => {
                    this.allLocations.add(ele.jobPost.location);
                });
            }
        });
    }
    seeDetails(data) {
        if (this.role === 2) {
            this.router.navigateByUrl(`/referer/jobs/job-detail/${data._id}`);
        }
        else if (this.role === 0) {
            this.router.navigateByUrl(`/admin/jobs/detail/${data._id}`);
        }
        else if (this.role === 1) {
            this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
        }
    }
    _filter(name) {
        const filterValue = name.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    filterJobPosts() {
        let search = this.myControl.value;
        if (search) {
            search = search.toLowerCase();
        }
        else {
            search = '';
        }
        this.filteredJobPosts = [];
        this.allJobPost.forEach((jobPost, index) => {
            if (jobPost.jobPost.title.toLowerCase().includes(search)) {
                this.filteredJobPosts.push(JSON.stringify(jobPost));
            }
            jobPost.jobPost.skills.forEach((element) => {
                const name = element.skillName;
                if (name.toLowerCase().includes(search)) {
                    this.filteredJobPosts.push(JSON.stringify(jobPost));
                }
            });
            if (this.allJobPost.length === index + 1) {
                const arr = [...new Set(this.filteredJobPosts)];
                this.filteredJobPosts = [];
                arr.forEach(data => {
                    this.filteredJobPosts.push(JSON.parse(data));
                });
            }
        });
    }
    sortByDate() {
        this.filteredJobPosts.sort((a, b) => {
            const dateA = new Date(a.jobPost.createdAt);
            const dateB = new Date(b.jobPost.createdAt);
            return dateB - dateA;
        });
    }
    getExperience(value) {
        return `${value}`;
    }
    getStartDate(date) {
        const date1 = new Date();
        const date2 = new Date(date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 7;
    }
    updateLocation(event, location) {
        if (event.checked === true) {
            this.selectedLocations.add(location);
        }
        else {
            this.selectedLocations.delete(location);
        }
        this.refine.location = [...this.selectedLocations];
    }
    checkLocation(location) {
        return this.selectedLocations.has(location);
    }
    refineJobs() {
        this.isServiceRunning = true;
        const dbOpeartion = {
            collection: 'jobposts',
            query: { 'jobPost.verified': true },
        };
        if (this.refine.partTime && this.refine.fullTime) {
            //
        }
        else if (this.refine.partTime) {
            dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
        }
        else if (this.refine.fullTime) {
            dbOpeartion.query['jobPost.partTime'] = false;
        }
        if (this.refine.jobs && this.refine.internships) {
            //
        }
        else if (this.refine.jobs) {
            dbOpeartion.query['jobPost.jobInternship'] = 'Job';
        }
        else if (this.refine.internships) {
            dbOpeartion.query['jobPost.jobInternship'] = 'Internship';
        }
        if (this.refine.remote) {
            dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
        }
        if (this.selectedLocations.size > 0) {
            dbOpeartion.query['jobPost.location'] = { $in: [...this.selectedLocations] };
        }
        if (this.refine.minExp > 0) {
            dbOpeartion.query['jobPost.experience'] = { $gt: this.refine.minExp ? this.refine.minExp - 1 : 0 };
        }
        this.authService.find(dbOpeartion).subscribe((data) => {
            if (data.data) {
                this.filteredJobPosts = data.data;
                this.allJobPost = data.data;
                this.checkJobPosts();
                this.refineInitial.partTime = this.refine.partTime,
                    this.refineInitial.fullTime = this.refine.fullTime,
                    this.refineInitial.jobs = this.refine.jobs,
                    this.refineInitial.internships = this.refine.internships,
                    this.refineInitial.remote = this.refine.remote,
                    this.refineInitial.minExp = this.refine.minExp,
                    this.refineInitial.location = this.refine.location;
                if (!this.isScreenBig) {
                    this.refineJobsDropDown = false;
                }
                this.filterJobPosts();
                this.sortByDate();
                this.isServiceRunning = false;
            }
        });
    }
    navigateToAllJobs() {
        this.router.navigateByUrl(`/referer/jobs`);
    }
    navigateToMyProfile() {
        this.router.navigateByUrl(`/referer/profile`);
    }
};
RecentJobsComponent.ctorParameters = () => [
    { type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__["JobPostServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RecentJobsComponent.propDecorators = {
    isUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
RecentJobsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recent-jobs',
        template: _raw_loader_recent_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recent_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecentJobsComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app style=\"overflow: auto; z-index: 999 !important; background-color: #f7f7f7;\" class=\"w-100 h-100\">\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n\r\n\r\n");

/***/ }),

/***/ "WTty":
/*!**************************************************!*\
  !*** ./src/app/login/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.component.html */ "uh5L");
/* harmony import */ var _signin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component.scss */ "6Mdj");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/enums */ "pzb0");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













let SigninComponent = class SigninComponent {
    constructor(modalRef, authService, router, routing, toast, modalService, location) {
        this.modalRef = modalRef;
        this.authService = authService;
        this.router = router;
        this.routing = routing;
        this.toast = toast;
        this.modalService = modalService;
        this.location = location;
        this.isEmployer = false;
        this.otp = '';
        this.isOTPCorrect = true;
        this.isVerified = false;
        this.isForgotPassOTP = false;
        this.isResetPassword = false;
        this.isServiceRunning = false;
        this.role = src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"];
        this.isVerifyOTP = false;
        this.isLogin = true;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isPasswordVisible = false;
        this.isConfirmPasswordVisible = false;
        this.password = '';
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.resetPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7)]);
        this.message = '';
        this.isPasswordReset = false;
        this.isScreenBig = false;
        this.socialUser = {};
    }
    ngOnInit() {
        this.routing.params.subscribe((params) => {
            if (params.user) {
                this.isServiceRunning = true;
                this.socialUser = params.user;
                const db = {
                    collection: 'users',
                    query: { providerId: this.socialUser }
                };
                this.authService.find(db).subscribe((data) => {
                    if (data.data) {
                        if (data.data.length > 0) {
                            window.localStorage.setItem('id', window.btoa(JSON.stringify(data.data[0])));
                            window.location.reload();
                            this.isServiceRunning = false;
                        }
                    }
                    else {
                        this.toast.showToast('Something Went Wrong!', 'bg-danger');
                        setTimeout(() => {
                            window.open('https://refer2career.com/', '_self');
                        }, 3000);
                    }
                });
            }
        });
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
        }
        else {
            this.isScreenBig = false;
        }
        this.initializeSignupForm();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            emailLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            passwordLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
    }
    hideEmployerpahe() {
        this.loginVisible();
        setTimeout(() => { this.isEmployer = false; }, 500);
    }
    resendOTP() {
        this.isServiceRunning = true;
        this.authService.getOTP({ email: this.signupForm.get('email').value }).subscribe((data) => {
            if (data.data === true) {
                this.toast.showToast('Passcode Sent Successfully!');
                let counter = 30;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                    .subscribe(() => {
                    this.timer = counter;
                });
                this.isServiceRunning = false;
            }
        });
    }
    isValidOTP() {
        return this.otp.length === 6;
    }
    onOtpChange($event) {
        this.otp = $event;
    }
    forgotPasswordVisible() {
        this.hideAll();
        this.isForgotPassword = true;
    }
    registrationVisible() {
        this.flip();
        setTimeout(() => {
            this.hideAll();
            this.initializeSignupForm();
            this.isRegistration = true;
        }, 300);
    }
    loginVisible() {
        this.flip();
        setTimeout(() => {
            this.hideAll();
            this.isLogin = true;
        }, 300);
    }
    showLogin() {
        this.hideAll();
        this.isLogin = true;
    }
    hideAll() {
        this.isResetPassword = false;
        this.isLogin = false;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isVerifyOTP = false;
        this.isPasswordReset = false;
        this.message = '';
    }
    initializeSignupForm() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7)]),
        });
    }
    registerCandidate() {
        this.signupForm.markAllAsTouched();
        if (this.signupForm.valid) {
            this.isServiceRunning = true;
            const candidate = {
                user: {
                    cId: new Date().getTime(),
                    name: this.signupForm.get('name').value,
                    email: (this.signupForm.get('email').value).toLowerCase(),
                    password: this.signupForm.get('password').value,
                    role: src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CANDIDATE,
                    verified: false,
                    time: new Date(),
                },
            };
            this.authService.registerCandidate(candidate).subscribe((data) => {
                if (data.error) {
                    this.message = data.error;
                }
                else {
                    this.hideAll();
                    this.isVerifyOTP = true;
                    let counter = 30;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                        .subscribe(() => {
                        this.timer = counter;
                    });
                }
                this.isServiceRunning = false;
            });
        }
    }
    verifyOTP() {
        this.isServiceRunning = true;
        if (this.isForgotPassOTP) {
            const data = {
                email: this.email.value,
                otp: this.otp
            };
            this.authService.verify(data).subscribe((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.isResetPassword = true;
                }
                else {
                    this.isOTPCorrect = false;
                }
                this.isServiceRunning = false;
            });
        }
        else {
            const data = {
                email: this.signupForm.get('email').value,
                otp: this.otp
            };
            this.authService.verifyOTP(data).then((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.loginVisible();
                }
                else {
                    this.isOTPCorrect = true;
                }
                this.isServiceRunning = false;
            });
        }
    }
    back() {
        this.hideAll();
        this.isLogin = true;
    }
    login() {
        if (this.loginForm.valid) {
            this.isServiceRunning = true;
            this.authService.login({
                email: (this.loginForm.get('emailLogin')
                    .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
            })
                .then((data) => {
                if (data.error) {
                    this.message = 'Invalid email or password!';
                }
                else if (data.email) {
                    if (data.role === 2) {
                        this.modalRef.hide();
                        window.location.reload();
                        window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
                    }
                    else {
                        this.message = 'User not found!';
                    }
                }
                this.isServiceRunning = false;
            });
        }
    }
    linkedinLogin() {
        window.open('https://instajobapp.herokuapp.com/linkedin', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    googleLogin() {
        window.open('https://instajobapp.herokuapp.com/google', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    facebookLogin() {
        window.open('https://instajobapp.herokuapp.com/facebook', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    forgotPassword() {
        if (this.email.valid) {
            this.isServiceRunning = true;
            this.authService.getOTP({ email: this.email.value }).subscribe((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.isVerifyOTP = true;
                    let counter = 30;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                        .subscribe(() => {
                        this.timer = counter;
                    });
                    this.isForgotPassOTP = true;
                }
                this.isServiceRunning = false;
            });
        }
    }
    restPassword() {
        this.resetPassword.markAsTouched();
        if (this.resetPassword.value) {
            const dbopeartion = {
                collection: 'users',
                data: { password: this.resetPassword.value },
                query: { email: this.email.value }
            };
            this.authService.update(dbopeartion).then((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.toast.showToast('Password Reseted!');
                    this.isLogin = true;
                    this.isServiceRunning = false;
                }
            });
        }
    }
    openEmployerModal() {
        this.isEmployer = true;
        setTimeout(() => { this.registrationVisible(); }, 100);
        // this.modalRef.hide();
        // this.modalRef = this.modalService.show(EmployerSigninComponent, { class: 'full-modal', ignoreBackdropClick: true, animated: true });
    }
    flip() {
        const element = document.getElementById('cardToFlip');
        element.classList.toggle('flipped');
    }
};
SigninComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }
];
SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SigninComponent);



/***/ }),

/***/ "WhTW":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/spinner-component/spinner-component.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "XQCc":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/view-profile/view-profile.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\r\n<!-- <div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\"> -->\r\n  <div class=\"h-100 w-100 bg-lightest-blue\" style=\"overflow-y: auto; overflow-x: hidden;\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"bg-primary w-100 text-white\"\r\n      style=\"min-height: 220px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\r\n    </div>\r\n    <h3 class=\"text-white text-center\" style=\"margin-top: -180px !important;\">Applicant Profile</h3>\r\n    <div class=\"row p-0 m-0 justify-content-center\">\r\n      <div class=\"col-sm-10 p-2 mt-5\" style=\"overflow-y: auto !important; overflow-x: hidden;\">\r\n        <div class=\"bg-white border-8\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10 align-self-center\">\r\n              <div class=\"p-3 m-2 row vertical-center justify-content-start\">\r\n                <div class=\"col-sm-2 d-flex justify-content-start mb-2\">\r\n                  <div>\r\n                    <div *ngIf=\"!user.photo\"\r\n                      class=\"bg-opacity vertical-center border-6 bg-primary mx-auto text-center text-white text-xxlg\"\r\n                      style=\"border-width: 2px; height: 130px !important; width: 125px !important; border: 2px solid rgb(255, 255, 255);\">\r\n                      <span class=\"w-100 text-center material-icons text-xxlg\">{{user\r\n                        ? user.name[0] : ''}}</span>\r\n                    </div>\r\n                    <img *ngIf=\"user.photo\" class=\"img-fulid border-6\"\r\n                      style=\"height: 130px !important; width: 125px !important; border: 2px solid white;\"\r\n                      src=\"{{user.photo}}\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-dark col-12 col-md-9 col-sm-10\">\r\n                  <div class=\"text-black semi-bold\" style=\"font-size: 30px;\">{{user.name}}</div>\r\n                  <div class=\"row vertical-center\">\r\n                    <div class=\"col-12 col-lg-5 my-2\">\r\n                      <span class=\"material-icons-outlined vertical-center text-smd mr-5\">mail\r\n                        <span class=\"ml-2\">{{user.email}}</span></span>\r\n                    </div>\r\n                    <div class=\"col-12 col-lg-7 my-2\">\r\n                      <span *ngIf=\"user.basicInfo\" class=\"material-icons-outlined vertical-center text-smd mr-4\">call\r\n                        <span class=\"ml-2\">{{user.basicInfo.mobile}}</span></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 row mt-4 p-0 m-0 justify-content-end\">\r\n          <div class=\"col-sm-4 p-2 m-0 mb-3\">\r\n            <div class=\"bg-white p-3 border-8\">\r\n              <span class=\"text-lg mb-4\">{{profileCompleted}}<span class=\"text-smd\">% Profile Completed</span></span>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" id=\"progress-bar\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-8 m-0 p-2\">\r\n            <div class=\"p-3 mx-0 mb-3 bg-white border-8\">\r\n              <div class=\"vertical-center justify-content-between\">\r\n                <span class=\"text-black semi-bold myfont-size\">CV Headline</span>\r\n              </div>\r\n              <span class=\"text-smd my-4\" *ngIf=\"!isCVHeadEditing\">{{cvHeadLine ? cvHeadLine : ''}}</span>\r\n              <input class=\"form-control my-3\" *ngIf=\"isCVHeadEditing\" type=\"text\" placeholder=\"\"\r\n                [(ngModel)]=\"cvHeadLine\">\r\n              <div class=\"d-flex justify-content-start vertical-center\" *ngIf=\"isCVHeadEditing\">\r\n                <button class=\"btn btn-primary px-3 py-1 rounded-button mr-2\">Save</button>\r\n                <button class=\"btn btn-secondary px-3 py-1 rounded-button\">Cancel</button>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"p-3 mx-0 mb-3 bg-white w-100 border-8\" [formGroup]=\"profileForm\">\r\n              <div class=\"w-100\">\r\n                <div class=\"mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Personal Details </span>\r\n                </div>\r\n                <div class=\"p-3\" [ngClass]=\"isBasiDetailEditing ? 'border-violet box-shadow' : ''\"\r\n                  style=\"border-radius: 6px;\">\r\n                  <div class=\"row col-sm-12 pt-3 mx-auto d-flex justify-content-between\"\r\n                    [ngClass]=\"isBasiDetailEditing ? '' : 'not-clickable'\">\r\n                    <div class=\" col-sm-5 mb-2\">\r\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n                        <mat-label class=\"p-0  text-grey\">Phone number</mat-label>\r\n                        <input matInput type=\"number\" placeholder=\"Enter phone number\" class=\"p-0\"\r\n                          formControlName='mobile' name=\"mobile\">\r\n                        <mat-error>Enter valid phone number</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5 mb-2\">\r\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n                        <mat-label class=\"p-0  text-grey\">Gender</mat-label>\r\n                        <mat-select formControlName='gender'>\r\n                          <mat-option value=\"Female\">\r\n                            Female\r\n                          </mat-option>\r\n                          <mat-option value=\"Male\">\r\n                            Male\r\n                          </mat-option>\r\n                          <mat-option value=\"Others\">\r\n                            Others\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error>Enter valid detail</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5 mb-2\">\r\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n                        <mat-label class=\"p-0  text-grey\">Martial Status</mat-label>\r\n                        <mat-select formControlName='martialStatus'>\r\n                          <mat-option value=\"Single\">\r\n                            Single\r\n                          </mat-option>\r\n                          <mat-option value=\"Married\">\r\n                            Married\r\n                          </mat-option>\r\n                          <mat-option value=\"Divorced\">\r\n                            Divorced\r\n                          </mat-option>\r\n                          <mat-option value=\"Widowed\">\r\n                            Widowed\r\n                          </mat-option>\r\n                          <mat-option value=\"Prefer not to say!\">\r\n                            Prefer not to say!\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <mat-error>Enter valid detail</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5 mb-2\">\r\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n                        <mat-label class=\"p-0  text-grey\">Nationality</mat-label>\r\n                        <input matInput placeholder=\"Enter nationality\" class=\"p-0\" formControlName='nationality'>\r\n                        <mat-error>Enter valid detail</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-5 mb-2\">\r\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\r\n                        <mat-label class=\"p-0  text-grey\">Date of Birth</mat-label>\r\n                        <input matInput readonly [matDatepicker]=\"picker1\" formControlName='dob' [max]=\"maxDob\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker1></mat-datepicker>\r\n                        <!-- <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint> -->\r\n                        <mat-error>Enter valid DOB</mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex justify-content-end\" *ngIf=\"isBasiDetailEditing\">\r\n                    <button class=\"btn btn-primary bg-violet px-3 py-1\">Save</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-4 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Skills </span>\r\n                </div>\r\n                <div class=\"row col-sm-11 d-flex justify-content-start\">\r\n                  <div class=\"col-sm-12 my-4\">\r\n                    <div *ngFor=\"let data of skillsArray; index as i\"\r\n                      class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm vertical-center\"\r\n                      style=\"display: inline-block; border-radius: 15px; width: max-content; margin: 3px !important; white-space:nowrap;\">\r\n                      <span class=\"text-grey mr-3 text-violet\">{{data}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-4 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Work Experience </span>\r\n                </div>\r\n                <div class=\"w-100\">\r\n                  <div class=\"bg-grey mx-auto w-100\">\r\n                    <div *ngFor=\"let data of workExpArray; index as i\" class=\"w-100 text-break p-4 bg-white box-shadow\"\r\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\r\n                      <span class=\"text-smd d-block py-0 my-0 text-dark mr-3\"><b>{{data.title}}</b></span>\r\n                      <div class=\"d-flex justify-content-start vertical-center\">\r\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">{{data.companyName}}\r\n                        </span>\r\n                        <span class=\"material-icons text-dark bold text-xxs mr-1\">stop_circle</span>\r\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">\r\n                          {{data.type}}</span>\r\n                      </div>\r\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.startDate | date : 'MMMM\r\n                        yyyy'}} - {{data.isWorking === true ? 'Present' : data.endDate | date : 'MMMM\r\n                        yyyy'}}</span>\r\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.location}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"mt-2 w-100\">\r\n                <div class=\"ml-3 mb-3 d-flex justify-content-between\">\r\n                  <span class=\"text-black semi-bold myfont-size\">Education </span>\r\n                </div>\r\n                <div class=\"w-100\">\r\n                  <div class=\"bg-grey my-4 w-100\">\r\n                    <div *ngFor=\"let data of educationArray; index as i\"\r\n                      class=\"w-100 text-break p-4 bg-white box-shadow\"\r\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Degree/Standard : </b>{{data.degree}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>School : </b>{{data.school}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Field: </b>{{data.field}}</span>\r\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Completion date : </b>{{data.completionDate\r\n                        |\r\n                        date\r\n                        :\r\n                        'dd\r\n                        MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\r\n              <div class=\"vertical-center justify-content-between\">\r\n                <span class=\"text-black semi-bold myfont-size vertical-center ml-3\">Resume <span\r\n                    class=\"material-icons-outlined bold text-dark text-ssmd ml-2\">attachment</span></span>\r\n                <span class=\"text-violet text-link text-sm\" *ngIf=\"user.resume\" (click)=\"openResume()\"><u>Open\r\n                    Resume</u></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- </div> -->\r\n\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "Xsf5":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/nav-bar-content/nav-bar-content.component.ts ***!
  \********************************************************************************/
/*! exports provided: NavBarContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarContentComponent", function() { return NavBarContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar-content.component.html */ "Ia/W");
/* harmony import */ var _nav_bar_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar-content.component.scss */ "caud");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let NavBarContentComponent = class NavBarContentComponent {
    constructor(modalRef, modalService, router) {
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.router = router;
        this.navItems = [];
        this.url = '';
        this.isCollapsed = true;
    }
    navigate(url) {
        this.isCollapsed = true;
        this.router.navigateByUrl(url);
    }
    ngOnInit() {
        this.url = this.router.url;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
    }
    cancel() {
        this.modalRef.hide();
    }
    loggedOut() {
        this.modalRef.hide();
        window.localStorage.removeItem('id');
        window.location.reload();
    }
};
NavBarContentComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavBarContentComponent.propDecorators = {
    navItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
NavBarContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nav-bar-content',
        template: _raw_loader_nav_bar_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavBarContentComponent);



/***/ }),

/***/ "YYSD":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/view-profile/view-profile.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n:root {\n  --progress-bar-width-my-profile: 0px;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\ninput::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n.myfont-size {\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlldy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQXlELDZCQUE2QjtBQUN0Rjs7QUFBQTtFQUEwQyxXQUFXO0VBQUUsZUFBZTtBQUt0RTs7QUFIQTtFQUNJLHlDQUF3QztBQU01Qzs7QUFIRTtFQUNFLHdCQUF3QjtBQU01Qjs7QUFIRTtFQUNFLG9DQUFnQztBQU1wQzs7QUFKRTtFQUFnQix5Q0FBQTtFQUVkLFVBQVU7RUFBRSxZQUFBO0FBUWhCOztBQVZFO0VBQWdCLHlDQUFBO0VBRWQsVUFBVTtFQUFFLFlBQUE7QUFRaEI7O0FBTEU7RUFDRSxzQkFBc0I7QUFRMUI7O0FBTEU7RUFDRSxzQkFBc0I7QUFRMUI7O0FBTEU7RUFDRSxlQUFlO0FBUW5CIiwiZmlsZSI6InZpZXctcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjllbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XHJcbn1cclxuXHJcbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1wcm9ncmVzcy1iYXItd2lkdGgtbXktcHJvZmlsZTogMHB4O1xyXG4gIH1cclxuICA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICAvL2NvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbiAgfVxyXG5cclxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzg4OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm15Zm9udC1zaXple1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "g1va");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log-in/log-in.component */ "br8r");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);















firebase__WEBPACK_IMPORTED_MODULE_14__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig);
let AppModule = class AppModule {
    constructor() {
    }
};
AppModule.ctorParameters = () => [];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"] }
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a9Oz":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/add-job-post/add-job-post.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cdk-global-overlay-wrapper, .cdk-overlay-container {\n  z-index: 99999 !important;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  z-index: 99999 !important;\n}\n\n::ng-deep .cdk-global-overlay-wrapper, ::ng-deep .cdk-overlay-container {\n  z-index: 9999 !important;\n}\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n::ng-deep .mat-select-content {\n  width: 100%;\n}\n\nmat-slider {\n  width: 300px;\n}\n\nmat-slider ::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\nmat-slider ::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\nmat-slider ::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\nmat-slider ::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\nmat-slider :root {\n  --progress-bar-width-my-profile: 0px;\n}\n\nmat-slider ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\nmat-slider ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\nmat-slider input::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\nmat-slider input:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWpvYi1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNELHlCQUF3QjtBQUU5RTs7QUFEQTtFQUNJLHlCQUF5QjtBQUk3Qjs7QUFERTtFQUFrRSx3QkFBdUI7QUFLM0Y7O0FBSEU7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQU12Qjs7QUFIRTtFQUNFLFdBQVc7QUFNZjs7QUFIRTtFQUNFLFlBQVk7QUFNaEI7O0FBUEU7RUFJdUQsNkJBQTZCO0FBT3RGOztBQVhFO0VBS3dDLFdBQVc7RUFBRSxlQUFlO0FBV3RFOztBQWhCRTtFQVFFLHlDQUF3QztBQVk1Qzs7QUFwQkU7RUFZRSx3QkFBd0I7QUFZNUI7O0FBeEJFO0VBZ0JFLG9DQUFnQztBQVlwQzs7QUE1QkU7RUFrQmdCLHlDQUFBO0VBRWQsVUFBVTtFQUFFLFlBQUE7QUFjaEI7O0FBbENFO0VBa0JnQix5Q0FBQTtFQUVkLFVBQVU7RUFBRSxZQUFBO0FBY2hCOztBQWxDRTtFQXdCRSxzQkFBc0I7QUFjMUI7O0FBdENFO0VBNEJFLHNCQUFzQjtBQWMxQiIsImZpbGUiOiJhZGQtam9iLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsIC5jZGstb3ZlcmxheS1jb250YWluZXIgeyB6LWluZGV4OiA5OTk5OSFpbXBvcnRhbnQ7IH0gXHJcbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcclxuICAgIHotaW5kZXg6IDk5OTk5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgeyAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsIC5jZGstb3ZlcmxheS1jb250YWluZXIgeyB6LWluZGV4OiA5OTk5IWltcG9ydGFudDsgfSB9XHJcblxyXG4gIC50ZXh0LW92ZXJmbG93e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1jb250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBtYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuXHJcbiAgICBcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC45ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgeyB0b3A6IC0xLjNlbTsgZm9udC1zaXplOiAxNXB4OyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG59XHJcblxyXG4gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDpyb290IHtcclxuICAgIC0tcHJvZ3Jlc3MtYmFyLXdpZHRoLW15LXByb2ZpbGU6IDBweDtcclxuICB9XHJcbiAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgLy9jb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xyXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcclxuICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "br8r":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_log_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./log-in.component.html */ "109v");
/* harmony import */ var _log_in_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-in.component.scss */ "qWO0");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/enums */ "pzb0");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");













let LogInComponent = class LogInComponent {
    constructor(modalRef, authService, router, routing, toast, modalService, location) {
        this.modalRef = modalRef;
        this.authService = authService;
        this.router = router;
        this.routing = routing;
        this.toast = toast;
        this.modalService = modalService;
        this.location = location;
        this.isEmployer = false;
        this.isSignUp = false;
        this.isLoginCard = true;
        this.otp = '';
        this.isOTPCorrect = true;
        this.isVerified = false;
        this.isForgotPassOTP = false;
        this.isResetPassword = false;
        this.isServiceRunning = false;
        this.role = src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"];
        this.isVerifyOTP = false;
        this.isLogin = true;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isPasswordVisible = false;
        this.isConfirmPasswordVisible = false;
        this.password = '';
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
        this.resetPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7)]);
        this.message = '';
        this.isPasswordReset = false;
        this.isScreenBig = false;
        this.socialUser = {};
    }
    ngOnInit() {
        this.routing.params.subscribe((params) => {
            if (params.user) {
                this.isServiceRunning = true;
                this.socialUser = params.user;
                const db = {
                    collection: 'users',
                    query: { providerId: this.socialUser }
                };
                this.authService.find(db).subscribe((data) => {
                    if (data.data) {
                        if (data.data.length > 0) {
                            window.localStorage.setItem('id', window.btoa(JSON.stringify(data.data[0])));
                            window.location.reload();
                            this.isServiceRunning = false;
                        }
                    }
                    else {
                        this.toast.showToast('Something Went Wrong!', 'bg-danger');
                        setTimeout(() => {
                            window.open('https://refer2career.com/', '_self');
                        }, 3000);
                    }
                });
            }
        });
        if (window.screen.width > 1150) {
            this.isScreenBig = true;
        }
        else {
            this.isScreenBig = false;
        }
        this.initializeSignupForm();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            emailLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            passwordLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
    }
    hideEmployerpahe() {
        this.loginVisible();
        setTimeout(() => { this.isEmployer = false; }, 500);
    }
    resendOTP() {
        this.isServiceRunning = true;
        this.authService.getOTP({ email: this.signupForm.get('email').value ? this.signupForm.get('email').value : this.email.value }).subscribe((data) => {
            if (data.data === true) {
                this.toast.showToast('Passcode Sent Successfully!');
                let counter = 30;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                    .subscribe(() => {
                    this.timer = counter;
                });
                this.isServiceRunning = false;
            }
        });
    }
    isValidOTP() {
        return this.otp.length === 6;
    }
    onOtpChange($event) {
        this.otp = $event;
    }
    forgotPasswordVisible() {
        this.hideAll();
        this.isForgotPassword = true;
    }
    goToLogin() {
        this.hideAll();
        this.isLogin = true;
    }
    goToSignUp() {
        this.hideAll();
        this.isSignUp = true;
    }
    registrationVisible() {
        setTimeout(() => {
            this.hideAll();
            this.initializeSignupForm();
            this.isRegistration = true;
        }, 300);
    }
    loginVisible() {
        setTimeout(() => {
            this.hideAll();
            this.isLogin = true;
            this.isLoginCard = true;
        }, 300);
    }
    showLogin() {
        this.hideAll();
        this.isForgotPassword = false;
        this.isLogin = true;
        this.isLoginCard = false;
    }
    hideAll() {
        this.isResetPassword = false;
        this.isLogin = false;
        this.isRegistration = false;
        this.isForgotPassword = false;
        this.isVerifyOTP = false;
        this.isPasswordReset = false;
        this.message = '';
        this.isSignUp = false;
        this.signupForm.reset;
        this.loginForm.reset;
    }
    initializeSignupForm() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]),
        });
    }
    registerCandidate() {
        this.signupForm.markAllAsTouched();
        if (this.signupForm.valid) {
            this.isServiceRunning = true;
            const candidate = {
                user: {
                    cId: new Date().getTime(),
                    name: this.signupForm.get('name').value,
                    email: (this.signupForm.get('email').value).toLowerCase(),
                    password: this.signupForm.get('password').value,
                    role: src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CANDIDATE,
                    verified: false,
                    time: new Date(),
                },
            };
            this.authService.registerCandidate(candidate).subscribe((data) => {
                if (data.error) {
                    this.message = data.error;
                }
                else {
                    this.hideAll();
                    this.isVerifyOTP = true;
                    let counter = 30;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                        .subscribe(() => {
                        this.timer = counter;
                    });
                }
                this.isServiceRunning = false;
            });
        }
        else {
            if (!this.signupForm.get('email').valid) {
                this.toast.showToast("Enter valid email!", "bg-danger");
            }
            else if (!this.signupForm.get('name').valid) {
                this.toast.showToast("Enter name!", "bg-danger");
            }
            else if (!this.signupForm.get('password').valid) {
                this.toast.showToast("Password atleast contain 6 characters!", "bg-danger");
            }
        }
    }
    verifyOTP() {
        this.isServiceRunning = true;
        if (this.isForgotPassOTP) {
            const data = {
                email: this.email.value,
                otp: this.otp
            };
            this.authService.verify(data).subscribe((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.isResetPassword = true;
                }
                else {
                    this.isOTPCorrect = false;
                }
                this.isServiceRunning = false;
            });
        }
        else {
            const data = {
                email: this.signupForm.get('email').value,
                otp: this.otp
            };
            this.authService.verifyOTP(data).then((res) => {
                if (res.data === true) {
                    this.isVerified = true;
                    this.hideAll();
                    this.isLogin = true;
                }
                else {
                    this.isOTPCorrect = false;
                }
                this.isServiceRunning = false;
            });
        }
    }
    back() {
        this.hideAll();
        this.isLogin = true;
    }
    login() {
        if (this.loginForm.valid) {
            this.isServiceRunning = true;
            this.authService.login({
                email: (this.loginForm.get('emailLogin')
                    .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
            })
                .then((data) => {
                if (data.error) {
                    this.message = 'Invalid email or password!';
                }
                else if (data.email) {
                    this.modalRef.hide();
                    window.location.reload();
                    window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
                }
                else {
                    this.message = 'User not found!';
                }
                this.isServiceRunning = false;
            });
        }
    }
    linkedinLogin() {
        window.open('https://instajobapp.herokuapp.com/linkedin', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    googleLogin() {
        window.open('https://instajobapp.herokuapp.com/google', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    facebookLogin() {
        window.open('https://instajobapp.herokuapp.com/facebook', '_self');
        // this.authService.linkedInLogin().subscribe(data => {
        // });
    }
    forgotPassword() {
        if (this.email.valid) {
            this.isServiceRunning = true;
            this.authService.getOTP({ email: this.email.value }).subscribe((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.isVerifyOTP = true;
                    let counter = 30;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(() => counter > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(() => counter--))
                        .subscribe(() => {
                        this.timer = counter;
                    });
                    this.isForgotPassOTP = true;
                }
                this.isServiceRunning = false;
            });
        }
        else
            this.toast.showToast("Enter valid email", "bg-danger");
    }
    restPassword() {
        this.resetPassword.markAsTouched();
        if (this.resetPassword.value) {
            const dbopeartion = {
                collection: 'users',
                data: { password: this.resetPassword.value },
                query: { email: this.email.value }
            };
            this.authService.update(dbopeartion).then((data) => {
                if (data.data === true) {
                    this.hideAll();
                    this.toast.showToast('Password Reseted!');
                    this.isLogin = true;
                    this.isServiceRunning = false;
                }
            });
        }
    }
};
LogInComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }
];
LogInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-log-in',
        template: _raw_loader_log_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_in_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogInComponent);



/***/ }),

/***/ "caud":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/nav-bar-content/nav-bar-content.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-header {\n  height: auto;\n  width: auto;\n  max-width: 180px !important;\n}\n\n.active-button:hover {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.active-url {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.conatiner {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2LWJhci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDSSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJuYXYtYmFyLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUyMDQzOyBcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYWN0aXZlLXVybHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTIwNDM7IFxyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7IFxyXG59XHJcblxyXG4uY29uYXRpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "eDag":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/spinner-component/spinner-component.component.ts ***!
  \************************************************************************************/
/*! exports provided: SpinnerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponentComponent", function() { return SpinnerComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner-component.component.html */ "F8kL");
/* harmony import */ var _spinner_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner-component.component.scss */ "WhTW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SpinnerComponentComponent = class SpinnerComponentComponent {
    constructor() {
        this.visibility = true;
        this.color = 'accent';
    }
    ngOnInit() {
    }
};
SpinnerComponentComponent.ctorParameters = () => [];
SpinnerComponentComponent.propDecorators = {
    visibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SpinnerComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spinner-component',
        template: _raw_loader_spinner_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SpinnerComponentComponent);



/***/ }),

/***/ "eqfQ":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/all-job-posts/all-job-posts.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-by-selected {\n  border: 1px solid #4b4b4b;\n  color: white;\n  background-color: #0E2043;\n}\n\n.sort-by-not-selected {\n  border: 1px solid #4b4b4b;\n  color: #0E2043;\n  background-color: #E1E7FF;\n}\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done, .mat-step-header .mat-step-icon-state-edit {\n  background-color: red !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n::ng-deep .mat-input-element {\n  caret-color: white !important;\n}\n\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\n  caret-color: red !important;\n}\n\n::ng-deep .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: white !important;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxsLWpvYi1wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxnQ0FBK0I7QUFDbkM7O0FBR0E7RUFDSSx1QkFBbUM7QUFBdkM7O0FBS0E7RUFDSSx1QkFBbUM7QUFGdkM7O0FBTUE7RUFDSSxxQkFBb0I7RUFDcEIsdUJBQXNCO0FBSDFCOztBQU9BO0VBQ0ksNkJBQXlDO0FBSjdDOztBQVFBO0VBQ0ksMkJBQTBCO0FBTDlCOztBQVNBO0VBQ0ksMENBQXlDO0FBTjdDOztBQVdBO0VBQ0ksdUJBQW1DO0FBUnZDOztBQVlBO0VBQ0ksdUJBQW1DO0FBVHZDOztBQVlBO0VBQWdCLHlDQUFBO0VBQ1osY0FBeUI7RUFDekIsVUFBVTtFQUFFLFlBQUE7QUFQaEI7O0FBS0E7RUFBZ0IseUNBQUE7RUFDWixjQUF5QjtFQUN6QixVQUFVO0VBQUUsWUFBQTtBQVBoQiIsImZpbGUiOiJhbGwtam9iLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvcnQtYnktc2VsZWN0ZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMjA0MztcclxufVxyXG5cclxuLnNvcnQtYnktbm90LXNlbGVjdGVke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YjtcclxuICAgIGNvbG9yOiAjMEUyMDQzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTdGRjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vaW5wdXQgb3V0bGluZSBjb2xvclxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcclxuICAgIC8vIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL21hdC1pbnB1dCBmb2N1c2VkIGNvbG9yXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtaW5wdXQgZXJyb3Igb3V0bGluZSBjb2xvclxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuOCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1pbnB1dCBjYXJlbnQgY29sb3JcclxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgICBjYXJldC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvclxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50LCAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGNhcmV0LWNvbG9yOiByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtbGFiZWwgbm9ybWFsIHN0YXRlIHN0eWxlXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBjb2xvcjogJG1haW5Db2xvciFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIG1hdC1sYWJlbCBmb2N1c2VkIHN0eWxlXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBtYXQtbGFiZWwgZXJyb3Igc3R5bGVcclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcblxyXG4vLyAgIC5qb2ItY2FyZCAge1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMGUyMDQzO1xyXG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4vLyAgIH0iXX0= */");

/***/ }),

/***/ "hLKV":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/job-post-service.service.ts ***!
  \*************************************************************/
/*! exports provided: JobPostServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostServiceService", function() { return JobPostServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let JobPostServiceService = class JobPostServiceService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'content-type': 'application/json' });
        this.baseUrl = '';
        this.post = undefined;
        this.jobPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.postDetail = {};
        this.myApplications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
        this.getPosts();
    }
    getMyApplications() {
        this.appliedJobPost({ candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }).subscribe((data) => {
            if (data.data) {
                this.myApplications.next(data.data);
            }
        });
    }
    getPosts() {
        if (window.localStorage.getItem('id')) {
            if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === 1) {
                this.getJobPostsByEmployer({ _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id }).subscribe((data) => {
                    this.jobPosts.next(data.data);
                });
            }
            else {
                this.getAllJobPosts().subscribe((data) => {
                    this.jobPosts.next(data.data);
                });
            }
        }
    }
    addJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/add/jobpost`, body, { headers: this.headers });
    }
    updateJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/update/jobpost`, body, { headers: this.headers });
    }
    deleteJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/delete/jobpost`, body, { headers: this.headers });
    }
    getAllJobPosts() {
        return this.http.post(this.baseUrl + `/api/getAll/jobposts`, { headers: this.headers });
    }
    getJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/get/jobpost`, body, { headers: this.headers });
    }
    applyJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/apply/jobpost`, body, { headers: this.headers });
    }
    appliedJobPost(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/applied/jobposts`, body, { headers: this.headers });
    }
    getJobPostsByEmployer(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/employer/jobposts`, body, { headers: this.headers });
    }
};
JobPostServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
JobPostServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], JobPostServiceService);



/***/ }),

/***/ "iwS4":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/applications/applications.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./applications.component.html */ "UV+q");
/* harmony import */ var _applications_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applications.component.scss */ "5sq2");
/* harmony import */ var _models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/enums */ "pzb0");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../all-job-posts/all-job-posts.component */ "Fg4b");













let ApplicationsComponent = class ApplicationsComponent {
    constructor(route, router, dbService, modalController, modalService, toast) {
        this.route = route;
        this.router = router;
        this.dbService = dbService;
        this.modalController = modalController;
        this.modalService = modalService;
        this.toast = toast;
        this.allCandidates = [];
        this.filteredCandidates = [];
        this.isAllChecked = false;
        this.totalChecked = 0;
        this.navItems = [
            {
                name: 'DASHBOARD',
                route: "/recruiter/dashboard"
            },
            {
                name: 'MY PROFILE',
                route: "/recruiter/profile"
            },
            {
                name: 'JOB POSTS',
                route: "/recruiter/job-posts"
            },
            {
                name: 'MANAGE APPLICANTS',
                route: "/recruiter/applicants"
            },
            {
                name: 'ADD JOB POST',
                route: "/recruiter/create-job-posts"
            }
        ];
        this.isServiceRunning = false;
        this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.postId = '';
        this.post = {};
        this.candidatesArray = [];
        this.allAplications = [];
        this.aplications = [];
        this.filterTemplate = {};
        this.skillsOptions = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
            'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
        this.skillsArray = [];
        // logic for top nav bar
        this.isApplicationRecieved = true;
        this.isShortlisted = false;
        this.isHired = false;
        this.isRejected = false;
        this.totalHired = 0;
        this.totalShortlisted = 0;
        this.totalRejected = 0;
        this.applicationRecieved = 0;
        this.confirmModalStatus = 'Shortlisted';
        this.allReferedProfiles = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.jobId) {
                this.postId = params.jobId;
                this.getDetails();
                this.allCandidates = [];
                this.getApplicants();
                this.getReferedProfiles();
            }
        });
        this.filteredSkills = this.skillName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => this._filterSkills(value)));
    }
    _filterSkills(value) {
        const filterValue = value.toLowerCase();
        return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    closeModal() {
        this.modalRef.hide();
    }
    getApplicants() {
        this.allCandidates = [];
        this.filteredCandidates = [];
        this.isServiceRunning = true;
        const db = {
            collection: 'applyJob',
            query: { jobPostId: this.postId }
        };
        this.dbService.find(db).subscribe((candidates) => {
            this.isServiceRunning = false;
            if (candidates.data.length > 0) {
                candidates.data.forEach((cand, index) => {
                    this.isServiceRunning = true;
                    const dbOperation = {
                        collection: 'users',
                        query: { _id: cand.candidateId },
                        selectedFields: { name: 1, resume: 1, _id: 1, profileCompleted: 1, email: 1 },
                    };
                    this.dbService.find(dbOperation).subscribe((a) => {
                        if (a.data.length > 0) {
                            a = a.data[0];
                            const user = {
                                applyId: cand._id,
                                _id: a._id,
                                name: a.name,
                                resume: a.resume,
                                email: a.email,
                                status: cand.status ? cand.status : null,
                                statusArray: cand.statusArray ? cand.statusArray : [],
                                isChecked: false,
                                profileCompleted: a.profileCompleted ? a.profileCompleted : 20
                            };
                            if (!this.allCandidates.find(data => data._id === user._id)) {
                                this.allCandidates.push(user);
                            }
                            this.changeTopMenu(0);
                            this.calculateApplocants();
                            this.isServiceRunning = false;
                        }
                    });
                });
            }
        });
    }
    getDetails() {
        this.isServiceRunning = true;
        const operation = {
            collection: 'jobposts',
            query: { _id: this.postId }
        };
        this.dbService.find(operation).subscribe((data) => {
            this.isServiceRunning = false;
            if (data.data.length > 0) {
                this.isServiceRunning = true;
                this.post = data.data[0];
            }
        });
    }
    getReferedProfiles() {
        this.isServiceRunning = true;
        const operation = {
            collection: 'referedProfiles',
            query: { jobId: this.postId }
        };
        this.dbService.find(operation).subscribe((candidates) => {
            this.isServiceRunning = false;
            if (candidates.data.length > 0) {
                candidates.data.forEach((cand, index) => {
                    this.isServiceRunning = true;
                    const dbOperation = {
                        collection: 'users',
                        query: { email: cand.email, role: 2 },
                        selectedFields: { name: 1, resume: 1, _id: 1, profileCompleted: 1, email: 1 },
                    };
                    this.dbService.find(dbOperation).subscribe((a) => {
                        if (a.data.length > 0) {
                            a = a.data[0];
                            const user = {
                                applyId: cand._id,
                                refered: true,
                                _id: a._id,
                                name: cand.name,
                                resume: cand.resume,
                                email: a.email,
                                status: cand.status ? cand.status : null,
                                statusArray: cand.statusArray ? cand.statusArray : [],
                                isChecked: false,
                                profileCompleted: a.profileCompleted ? a.profileCompleted : 20
                            };
                            if (!this.allCandidates.find(data => data.applyId === user.applyId)) {
                                this.allCandidates.push(user);
                            }
                            this.changeTopMenu(0);
                            this.calculateApplocants();
                        }
                        else {
                            const user = {
                                applyId: cand._id,
                                _id: cand._id,
                                name: cand.name,
                                refered: true,
                                resume: cand.resume,
                                email: cand.email,
                                status: cand.status ? cand.status : null,
                                statusArray: cand.statusArray ? cand.statusArray : [],
                                isChecked: false,
                                profileCompleted: cand.profileCompleted ? a.profileCompleted : 20
                            };
                            if (!this.allCandidates.find(data => data.applyId === user.applyId)) {
                                this.allCandidates.push(user);
                            }
                            this.changeTopMenu(0);
                            this.calculateApplocants();
                        }
                        this.isServiceRunning = false;
                    });
                });
            }
        });
    }
    openResume(resume) {
        window.open(resume);
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_12__["AllJobPostsComponent"],
            });
            return yield modal.present();
        });
    }
    calculateTotalExp(post) {
        const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
        const dateSecond = new Date(post.startDate);
        // time difference
        const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());
        // days difference
        const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));
        return diffYears.toFixed(0) + ' Years';
    }
    seeResume(resume, id, profileViews) {
        const db = {
            collection: 'users',
            data: { profileViews: profileViews ? profileViews + 1 : 1 },
            query: { _id: id }
        };
        this.dbService.update(db).then((data) => {
            if (data.data) {
                window.open(resume);
            }
        });
    }
    openFilter(template) {
        this.filterTemplate = template;
        this.modalRef = this.modalService.show(template, { class: 'filter-modal', ignoreBackdropClick: true, animated: true });
    }
    seeResults() {
        this.isServiceRunning = true;
        this.candidatesArray.forEach((cand, index) => {
            const dbOperation = {
                collection: 'users',
                query: { _id: cand.candidateId, totalWorkExp: { $gt: this.minExp ? this.minExp - 1 : 0 } }
            };
            this.allAplications = [];
            this.aplications = [];
            this.dbService.find(dbOperation).subscribe((user) => {
                this.isServiceRunning = false;
                if (user.data.length > 0) {
                    const candidate = user.data[0];
                    if (this.skillsArray.length > 0) {
                        this.skillsArray.forEach(skill => {
                            if (candidate.skills.find((data) => data.includes(skill))) {
                                const localCandidate = user.data[0];
                                localCandidate.appliedOn = cand.date;
                                localCandidate.appliedId = cand._id;
                                localCandidate.status = cand.status ? cand.status : null;
                                this.aplications.push(localCandidate);
                                this.allAplications.push(localCandidate);
                            }
                        });
                    }
                    else {
                        candidate.appliedOn = candidate.date;
                        this.allAplications.push(candidate);
                        this.aplications.push(candidate);
                    }
                }
            });
            if (index + 1 === this.candidatesArray.length) {
                this.closeModal();
            }
        });
    }
    openSkillModal(template) {
        this.modalRef.hide();
        this.skillName.reset();
        this.modalRef = this.modalService.show(template, { id: 1, ignoreBackdropClick: true, animated: true });
    }
    addSkill() {
        this.skillName.markAsTouched();
        if (this.skillName.value) {
            this.skillsArray.push(this.skillName.value);
            this.modalRef.hide();
            this.openFilter(this.filterTemplate);
        }
    }
    removeTag(index) {
        this.skillsArray.splice(index, 1);
    }
    removeFromFilter(index) {
        this.skillsArray.splice(index, 1);
        this.seeResults();
    }
    removeExp() {
        this.minExp = null;
        this.seeResults();
    }
    clearFilter() {
        this.skillsArray = [];
        this.minExp = null;
        this.getDetails();
    }
    removeChecked() {
        this.allCandidates.map((data) => {
            data.isChecked = false;
        });
    }
    changeTopMenu(id) {
        this.isApplicationRecieved = false;
        this.isShortlisted = false;
        this.isHired = false;
        this.isRejected = false;
        switch (id) {
            case 0: {
                this.isApplicationRecieved = true;
                this.filterApplicants(null);
                this.totalChecked = 0;
                this.removeChecked();
                break;
            }
            case 1: {
                this.isShortlisted = true;
                this.filterApplicants('Shortlisted');
                this.totalChecked = 0;
                this.removeChecked();
                break;
            }
            case 2: {
                this.isHired = true;
                this.filterApplicants('Hired');
                this.totalChecked = 0;
                this.removeChecked();
                break;
            }
            case 3: {
                this.isRejected = true;
                this.filterApplicants('Rejected');
                this.totalChecked = 0;
                this.removeChecked();
                break;
            }
        }
    }
    updateStatus(status) {
        this.isServiceRunning = true;
        this.modalRef.hide();
        this.filteredCandidates.forEach((user, index) => {
            if (user.isChecked === true) {
                user.statusArray.push({ 'name': status, date: new Date() });
                const db = {
                    collection: user.refered === true ? 'referedProfiles' : 'applyJob',
                    data: { status, statusArray: user.statusArray },
                    query: { _id: user.applyId },
                };
                this.dbService.update(db).then((data) => {
                    if (data.data === true) {
                        user.isChecked = false;
                        this.isServiceRunning = false;
                    }
                    else {
                        this.toast.showToast('Something went wrong!', 'bg-danger');
                    }
                });
            }
            if (index === this.filteredCandidates.length - 1) {
                this.isServiceRunning = false;
                this.toast.showToast(`${status} Successfully!`);
                this.getApplicants();
                this.getReferedProfiles();
            }
        });
    }
    openConfirmModal(template, status) {
        this.confirmModalStatus = status;
        this.modalRef = this.modalService.show(template, { animated: true });
    }
    checkAll() {
        this.isAllChecked = !this.isAllChecked;
        if (this.isAllChecked) {
            this.totalChecked = this.filteredCandidates.length;
        }
        else {
            this.totalChecked = 0;
        }
        this.filteredCandidates.map((cand) => {
            cand.isChecked = this.isAllChecked;
        });
    }
    checkedUser(index) {
        this.filteredCandidates[index].isChecked = !this.filteredCandidates[index].isChecked;
        if (this.filteredCandidates[index].isChecked) {
            this.totalChecked++;
            if (this.totalChecked === this.filteredCandidates.length) {
                this.isAllChecked = true;
            }
        }
        else {
            this.totalChecked--;
            this.isAllChecked = false;
        }
    }
    filterApplicants(status) {
        this.filteredCandidates = [];
        this.filteredCandidates = this.allCandidates.filter(data => data.status === status);
        this.filteredCandidates.sort((a, b) => b.profileCompleted - a.profileCompleted);
    }
    viewProfile(id) {
        if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].ADMIN) {
            this.router.navigateByUrl(`/admin/applicants/profile/${id}`);
        }
        else {
            this.router.navigateByUrl(`/recruiter/applicants/profile/${id}`);
        }
    }
    calculateApplocants() {
        this.applicationRecieved = this.allCandidates.filter((data) => data.status === null).length;
        this.totalShortlisted = this.allCandidates.filter((data) => data.status === 'Shortlisted').length;
        this.totalHired = this.allCandidates.filter((data) => data.status === 'Hired').length;
        this.totalRejected = this.allCandidates.filter((data) => data.status === 'Rejected').length;
    }
};
ApplicationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
ApplicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'app-applications',
        template: _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applications_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApplicationsComponent);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "pzb0":
/*!****************************************!*\
  !*** ./src/app/shared/models/enums.ts ***!
  \****************************************/
/*! exports provided: UserRole, JobType, salaryType, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobType", function() { return JobType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salaryType", function() { return salaryType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["EMPLOYER"] = 1] = "EMPLOYER";
    UserRole[UserRole["CANDIDATE"] = 2] = "CANDIDATE";
})(UserRole || (UserRole = {}));
var JobType;
(function (JobType) {
    JobType[JobType["Job"] = 0] = "Job";
    JobType[JobType["Internship"] = 1] = "Internship";
})(JobType || (JobType = {}));
var salaryType;
(function (salaryType) {
    salaryType[salaryType["Weekly"] = 0] = "Weekly";
    salaryType[salaryType["Monthly"] = 1] = "Monthly";
    salaryType[salaryType["Yearly"] = 2] = "Yearly";
})(salaryType || (salaryType = {}));
var Status;
(function (Status) {
    Status[Status["Submitted"] = 0] = "Submitted";
    Status[Status["Shortlisted"] = 1] = "Shortlisted";
    Status[Status["Selected"] = 2] = "Selected";
    Status[Status["Hired"] = 3] = "Hired";
    Status[Status["Rejected"] = 4] = "Rejected";
    Status[Status["Terminated"] = 5] = "Terminated";
})(Status || (Status = {}));


/***/ }),

/***/ "qWO0":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: 'Lato', sans-serif;\n}\n\n.active-button:hover {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.logo-header {\n  height: auto;\n  width: auto;\n  max-width: 170px !important;\n}\n\n.linked-in-color {\n  color: #0077b7 !important;\n}\n\n.facebook-color {\n  color: #3d548e !important;\n}\n\n.site-button.button-lg {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 14px 30px;\n  text-transform: uppercase;\n}\n\n.p-a30 {\n  padding: 30px;\n}\n\n.border-1 {\n  border-color: #dfdfdf;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.h4 {\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 15px;\n}\n\n.h3 {\n  font-size: 28px;\n  line-height: 35px;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n\n.p {\n  line-height: 24px;\n  margin-bottom: 24px;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.label {\n  font-family: 'Lato', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6f6f6f;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.site-button {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n.site-button.circle {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border-radius: 40px;\n  line-height: 39px;\n  background: #fff;\n}\n\n.site-button.outline-2 {\n  border-width: 2px;\n}\n\n.site-button.outline {\n  background: none;\n  border-style: solid;\n  border-color: inherit;\n}\n\n.form-control {\n  background: #f9faff none repeat scroll 0 0;\n  border: 0 none;\n  font-size: 16px;\n  height: 50px;\n  padding: 0 20px;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.a {\n  transition: all 0.2s linear;\n  outline: 0 none;\n  text-decoration: none;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.myfont-size {\n  font-size: 15px;\n  font-weight: 600;\n  font-family: 'Lato', sans-serif;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZy1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ1EsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDdkI7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsV0FBVztBQUNmIiwiZmlsZSI6ImxvZy1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmFjdGl2ZS1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEUyMDQzOyBcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ubG9nby1oZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTcwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmtlZC1pbi1jb2xvcntcclxuICAgIGNvbG9yOiAjMDA3N2I3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYWNlYm9vay1jb2xvcntcclxuICBjb2xvcjogIzNkNTQ4ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l0ZS1idXR0b24uYnV0dG9uLWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucC1hMzAge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmJvcmRlci0xe1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGZkZmRmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uaDR7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5we1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ubGlzdC1pbmxpbmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNpdGUtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uc2l0ZS1idXR0b24uY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzlweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lLTIge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5zaXRlLWJ1dHRvbi5vdXRsaW5lIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmYWZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi50YWItY29udGVudD4uYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm15Zm9udC1zaXple1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDs7XHJcbn0iXX0= */");

/***/ }),

/***/ "shd7":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/add-job-post/job-details/job-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_job_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./job-details.component.html */ "+WbM");
/* harmony import */ var _job_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details.component.scss */ "A/e3");
/* harmony import */ var _add_job_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../add-job-post.component */ "8ymR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/job-post-service.service */ "hLKV");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");









let JobDetailsComponent = class JobDetailsComponent {
    constructor(jobPostService, route, modalService, toastService) {
        this.jobPostService = jobPostService;
        this.route = route;
        this.modalService = modalService;
        this.toastService = toastService;
        this.isServiceRunning = false;
        this.jobPost = {};
        this.post = {};
        this.skills = [];
        this.role = undefined;
        this.appliedDate = undefined;
    }
    ngOnInit() {
        this.isServiceRunning = true;
        this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
        this.jobPostService.getMyApplications();
        this.jobPost.jobPost = {};
        this.jobPost.jobPost.details = [];
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.jobPostService.myApplications.subscribe((data) => {
                    data.forEach(post => {
                        if (post.jobPostId === params.id) {
                            this.appliedDate = post.date;
                        }
                    });
                });
                this.jobPostService.getJobPost({ id: params.id }).subscribe((data) => {
                    this.jobPost = data.data;
                    this.isServiceRunning = false;
                    this.skills = this.jobPost.jobPost.skills;
                });
            }
        });
    }
    applyJobModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'half-modal', ignoreBackdropClick: true, animated: true });
    }
    applyJob() {
        const obj = {
            candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
            jobPostId: this.jobPost._id,
            date: new Date()
        };
        this.jobPostService.applyJobPost(obj).subscribe((data) => {
            if (data.data) {
                this.toastService.showToast('Applied successfully!');
                this.jobPostService.getMyApplications();
                this.modalRef.hide();
            }
        });
    }
    closeModal() {
        this.modalRef.hide();
        this.jobPostService.post = undefined;
    }
    editJobPost() {
        this.jobPostService.post = undefined;
        this.jobPostService.post = this.jobPost;
        this.modalRef = this.modalService.show(_add_job_post_component__WEBPACK_IMPORTED_MODULE_3__["AddJobPostComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
    getExperience(value) {
        return `${value} - ${value + 1}`;
    }
    getStartDate(date) {
        const date1 = new Date();
        const date2 = new Date(date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 7;
    }
};
JobDetailsComponent.ctorParameters = () => [
    { type: src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_7__["JobPostServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }
];
JobDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-job-details-shared',
        template: _raw_loader_job_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JobDetailsComponent);



/***/ }),

/***/ "t1wX":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/all-job-posts/all-job-posts.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 h-100 m-0 p-0\" style=\"overflow: auto; border-radius: 7px; background-color: #f8f8f8\" *ngIf=\"!isServiceRunning\">\r\n  <div class=\"row col-sm-10 justify-content-center px-0 pt-2 mx-auto\">\r\n    <div class=\"col-sm-3 d-flex justify-content-center\">\r\n    <div class=\"m-2 d-flex justify-content-center vertical-center\" >\r\n      <h5 class=\"text-bold p-3\" >Showing\r\n        {{filteredJobPosts.length}} Jobs</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-9 justify-content-center\">\r\n      <div class=\"row col-sm-12 justify-content-center vertical-center shadow bg-white p-2 border-6 mx-auto \" >\r\n        <div class=\"col-sm-10 vertical-center justify-content-center\">\r\n          <input type=\"text\" (input)=\"filterJobPosts()\" placeholder=\"Search by skills or job title\"\r\n            class=\"no-border bg-white text-black\" style=\"width: 95%;\" [formControl]=\"myControl\">\r\n        </div>\r\n        <button class=\"col-sm-2 btn btn-primary px-2 py-1 border-6 \" \r\n          (click)=\"filterJobPosts()\">Search </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"row col-sm-12 justify-content center px-0 bg-lightest-blue mx-0\" >\r\n  <div class=\"row col-sm-10 justify-content-center px-0 pt-2 mx-auto mt-4\" >\r\n    <div class=\"col-sm-3 mt-2\">\r\n      <div (click)=\"openRefineJobs()\"\r\n        class=\"border-12 m-2 mr-2 w-100 bg-white overlay text-dark p-3 semi-bold text-ssmd vertical-center justify-content-between\">\r\n        Refine\r\n        Jobs <span class=\"material-icons\" *ngIf=\"!isScreenBig\">\r\n          arrow_drop_down\r\n        </span></div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isSortByExpanded = !isSortByExpanded\">\r\n          <span class=\"text-ssmd\">Sort By</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isSortByExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isSortByExpanded\" class=\"my-2 row vertical-center justify-content-center\">\r\n          <div class=\"m-2\">\r\n            <span style=\"border-radius: 20px;\"\r\n              [ngClass]=\"isSortBy === true ? 'sort-by-selected' : 'sort-by-not-selected'\" class=\" px-3 py-1\"\r\n              (click)=\"isSortBy = true\">Relevance</span>\r\n          </div>\r\n          <div class=\"m-2\">\r\n            <span  style=\"border-radius: 20px;\" (click)=\"isSortBy = false\"\r\n              [ngClass]=\"isSortBy === false ? 'sort-by-selected' : 'sort-by-not-selected'\" class=\"px-3 py-1\">Date</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isExperienceExpanded = !isExperienceExpanded\">\r\n          <span class=\"text-ssmd\">Experience</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isExperienceExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isExperienceExpanded\" class=\"my-2\">\r\n          <label class=\"text-sm text-grey\">Minimum Experience req. (in years)</label>\r\n          <mat-slider class=\"w-100\" [(ngModel)]=\"refine.minExp\" thumbLabel displayWith=\"\" tickInterval=\"1\" min=\"0\"\r\n            max=\"10\">\r\n          </mat-slider>\r\n        </div>\r\n      </div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isPartTimeExpanded = !isPartTimeExpanded\">\r\n          <span class=\"text-ssmd\">Job Type</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isPartTimeExpanded === true? 'rotate-right': 'rotate-left'\"> expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isPartTimeExpanded\" class=\"my-2 p-2\">\r\n          <div class=\"mb-3 vertical-center\">\r\n            <span class=\"text-sm semi-bold text-grey mr-2\">Part\r\n              time</span>\r\n            <mat-slide-toggle [(ngModel)]=\"refine.partTime\"></mat-slide-toggle>\r\n          </div>\r\n          <div class=\"mb-2 vertical-center\">\r\n            <span class=\"text-sm semi-bold text-grey mr-2\">Full\r\n              time</span>\r\n            <mat-slide-toggle [(ngModel)]=\"refine.fullTime\"></mat-slide-toggle>\r\n          </div>\r\n          <div class=\"mb-2 vertical-center\">\r\n            <span class=\"text-sm semi-bold text-grey mr-2\">Contractual</span>\r\n            <mat-slide-toggle [(ngModel)]=\"refine.contractual\"></mat-slide-toggle>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isJobCategoryExpanded = !isJobCategoryExpanded\">\r\n          <span class=\"text-ssmd\">Job Category</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isJobCategoryExpanded === true? 'rotate-right': 'rotate-left'\"> expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isJobCategoryExpanded\" class=\"my-2 p-2\">\r\n          <div class=\"mb-3 vertical-center\">\r\n            <span class=\"text-sm semi-bold text-grey mr-2\">Jobs</span>\r\n            <mat-slide-toggle [(ngModel)]=\"refine.jobs\"></mat-slide-toggle>\r\n          </div>\r\n          <div class=\"mb-2 vertical-center\">\r\n            <span class=\"text-sm semi-bold text-grey mr-2\">Internships</span>\r\n            <mat-slide-toggle [(ngModel)]=\"refine.internships\"></mat-slide-toggle>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isRemoteExpanded = !isRemoteExpanded\">\r\n          <span class=\"text-ssmd\">Remote</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isRemoteExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isRemoteExpanded\" class=\"my-2\">\r\n          <mat-slide-toggle [(ngModel)]=\"refine.remote\"></mat-slide-toggle>\r\n        </div>\r\n      </div>\r\n      <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\r\n        <div class=\"vertical-center justify-content-between\" (click)=\"isLocationExpanded = !isLocationExpanded\">\r\n          <span class=\"text-ssmd\">Location</span>\r\n          <span class=\"material-icons text-grey text-md bold\"\r\n            [ngClass]=\"isLocationExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\r\n        </div>\r\n        <div *ngIf=\"isLocationExpanded\" class=\"px-3 pt-3 pb-1\">\r\n          <div *ngFor=\"let location of allLocations\">\r\n            <section class=\"example-section\">\r\n              <mat-checkbox class=\"example-margin text-uppercase\" [checked]=\"checkLocation(location)\"\r\n                (change)=\"updateLocation($event, location)\">\r\n                {{location}}\r\n              </mat-checkbox>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row col-sm-12 justify-content-center mx-auto\">\r\n        <button *ngIf=\"isChanged()\"\r\n          class=\"overlay btn btn-primary mx-auto text-smd\"\r\n          style=\"border-radius: 30px; bottom: 0\" (click)=\"refineJobs()\">Refine\r\n          Jobs</button>\r\n          <button *ngIf=\"isFilterAdded()\" class=\"overlay btn btn-primary text-smd\"\r\n        (click)=\"clearFilter()\" style=\"border-radius: 30px; bottom: 0\" >Clear Filter</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-9 mx-0 mt-2 p-0\">\r\n      <app-not-found *ngIf=\"filteredJobPosts.length === 0\" message=\"We couldn't find any results. Change selected filters or try later.\" style=\"margin-top: 6rem !important;\" class=\"center-parent\">\r\n      </app-not-found>\r\n\r\n      <div class=\"m-2 mr-2 mb-3 \" *ngFor=\"let jobPost of filteredJobPosts\" (click)=\"seeDetails(jobPost)\">\r\n        <div class=\"card border-4 shadow-lg p-3 text-link border-8\">\r\n          <div class=\"d-flex mb-3 justify-content-between\">\r\n            <div class=\"d-flex flex-wrap\">\r\n              <div class=\"mr-3 mb-2\">\r\n                <span>\r\n                  <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\r\n                    style=\"height: 60px; width: 58.2px;\">\r\n                </span>\r\n              </div>\r\n              <div class=\"text-left\">\r\n                <h4>{{jobPost.jobPost.title}}</h4>\r\n                <div class=\"column\">\r\n                  <div class=\"d-flex vertical-center flex-wrap\">\r\n                    <div class=\" vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Experience : </span>\r\n                      <span class=\"text-lato text-primary\">&nbsp;{{ jobPost.jobPost ? jobPost.jobPost.experience :\r\n                        ''\r\n                        }}\r\n                        years</span>\r\n                    </div>\r\n\r\n                    <div class=\"vertical-center justify-content-start mr-3\">\r\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\r\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\r\n                      <span class=\"text-lato text-primary\">&nbsp;{{jobPost.jobPost.companyName}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"d-flex flex-wrap mt-1\">\r\n                    <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\r\n                      <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\r\n                      class=\" vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\r\n                      <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\r\n                    </div>\r\n\r\n                    <div class=\"vertical-center justify-content-start mr-2\">\r\n                      <span class=\"material-icons text-md  mr-2 text-primary\">\r\n                        schedule\r\n                      </span>\r\n                      <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\r\n                        date: 'dd\r\n                        MMMM\r\n                        yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\r\n              <div class=\"p-2 bg-light border-12\" >Applied</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\r\n            <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\r\n\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\r\n                {{jobPost.jobPost.skills[0].skillName }}\r\n              </div>\r\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\r\n                *ngIf=\"jobPost.jobPost.skills.length > 1\">\r\n                {{jobPost.jobPost.skills[1].skillName }}\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\r\n              <div class=\"justify-content-between vertical-center mr-2\">\r\n                <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">REWARD :\r\n                  ₹{{jobPost.referReward}}</div>\r\n              </div>\r\n              <div class=\"my-2 vertical-center justify-content-start\">\r\n                <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\r\n                <div class=\"d-flex ml-1 align-self-end\" >\r\n                  <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div class=\"footer-bottom bg-primary \">\r\n    <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "uHDt":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-100 vertical-center\" *ngIf=\"visibility\">\r\n  <div class=\"flex-column d-flex align-items-center vertical-center w-100\">\r\n    <img class=\"img-login\" src=\"../../../../assets/not-found-search.png\">\r\n    <span class=\"text-semibold text-md\">{{title}}</span>\r\n    <small class=\"text-smd text-semibold text-center\" style=\"width: 75%;\">{{message}}</small>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "uh5L":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/signin/signin.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vw-100 vh-100 login-bg position-absolute\">\r\n  <div class=\"layer\"></div>\r\n  ...\r\n</div>\r\n<div class=\"flipCard w-100\">\r\n  <div class=\"card vh-100 w-100 vertical-center bg-transparent\" id=\"cardToFlip\">\r\n    <div class=\"side front w-100 row p-0 m-0 vertical-center justify-content-center\">\r\n      <div class=\"col-sm-9 p-2\" style=\"min-height: 90vh !important; max-height: 92vh !important;\">\r\n        <div class=\"w-100 row vertical-center h-100 mx-auto bg-violet border-7\">\r\n          <div *ngIf=\"isScreenBig\" style=\"height: 100% !important;\"\r\n            class=\"col-sm-5 bg-violet w-100 border-left-7 vertical-center\">\r\n            <span class=\"text-white text-lg mx-auto w-75\"><span class=\"d-block text-center mb-4\">{{ !isLogin ? \"Don't\r\n                worry!!\": 'Welcome!!'}}</span>\r\n              <span class=\"text-ssmd d-block text-center\">\r\n                {{ !isLogin ? 'We will help you to reset your account password.' : 'To keep connected with us\r\n                please signin with your credentials.'}}\r\n              </span></span>\r\n          </div>\r\n          <div [ngClass]=\"isScreenBig ? 'col-sm-7' : 'col-sm-12'\" class=\" p-3 bg-white border-7\">\r\n            <div class=\"\">\r\n              <div class=\"d-flex justify-content-center mb-4\">\r\n                <img *ngIf=\"!isVerifyOTP\"\r\n                  src=\"{{ isLogin?'../../../assets/login2.jpg': isRegistration ?'../../../assets/register.jpg': '../../../assets/forgotpassword.jpg'}}\"\r\n                  class=\"img-fluid\" alt=\"\" style=\"height: 110px; width: 140px;\">\r\n              </div>\r\n            </div>\r\n            <div class=\"vertical-center w-100 justify-content-center mb-2\">\r\n              <span class=\"text-primary text-md semi-bold\">{{ isLogin?'Sign in to Refer2Career': isRegistration\r\n                ?'Registration':\r\n                isForgotPassword ?\r\n                'Forgot Password' : isResetPassword ? 'Reset Password' : ''}}</span>\r\n            </div>\r\n            <form [formGroup]=\"loginForm\" class=\"p-3 row justify-content-center\" *ngIf=\"isLogin\">\r\n              <alert type=\"success\" class=\"text-sm m-2\" *ngIf=\"isVerified\">\r\n                Now you can login with your credentials.\r\n              </alert>\r\n              <mat-form-field appearance=\"\" class=\"p-0 mb-2 w-100 col-sm-7 mb-3 mat-form-field\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">E-mail</mat-label>\r\n                <input matInput class=\"text-sm m-0\" type=\"email\" name=\"email\" placeholder=\"Enter email\"\r\n                  formControlName='emailLogin'>\r\n                <mat-error class=\"text-xs\">Enter valid email*</mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field appearance=\"\" class=\"p-0 w-100 mb-3 col-sm-7 mat-form-field vertical-center\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">Password</mat-label>\r\n                <input matInput class=\"m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\r\n                  placeholder=\"Enter password\" name=\"password\" formControlName='passwordLogin'>\r\n                <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n                  class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n                </span>\r\n                <mat-error class=\"text-xs\">Password required*</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"text-right mb-2 col-sm-12\">\r\n                <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\r\n              </div>\r\n              <div class=\"col-sm-12 d-flex justify-content-center\">\r\n                <button *ngIf=\"!isServiceRunning\" class=\"btn bg-violet btn-primary p-1 px-4\"\r\n                  style=\"border-radius: 20px;\" (click)=\"login()\">Sign in</button>\r\n              </div>\r\n              <div class=\"w-100 d-flex mt-3\">\r\n                <hr class=\"text-grey\">\r\n                <span class=\"text-grey\"> or </span>\r\n                <hr class=\"text-grey\">\r\n              </div>\r\n              <div class=\"col-sm-12 p-2\">\r\n                <h5 class=\"w-100 text-grey text-sm text-center\">Sign in using</h5>\r\n                <div class=\"w-100 d-flex justify-content-center\">\r\n                  <ion-icon class=\"linked-in-color text-lg m-2 text-link\" (click)=\"linkedinLogin()\"\r\n                    name=\"logo-linkedin\">\r\n                  </ion-icon>\r\n                  <ion-icon class=\"text-danger text-lg m-2 text-link\" (click)=\"googleLogin()\" name=\"logo-google\">\r\n                  </ion-icon>\r\n                  <ion-icon class=\"facebook-color text-lg m-2 text-link\" (click)=\"facebookLogin()\" name=\"logo-facebook\">\r\n                  </ion-icon>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <div class=\"w-100 text-center\" *ngIf=\"isLogin\">\r\n              <a class=\"text-sm text-link semi-bold text-primary\" (click)=\"forgotPasswordVisible()\">Forgot\r\n                Password</a>\r\n              <span class=\"text-grey text-md mx-2\">|</span>\r\n              <span class=\"text-grey text-sm mr-1\">Not registered yet?</span>\r\n              <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)=\"registrationVisible()\">Create\r\n                an\r\n                Account</a>\r\n            </div>\r\n            <div class=\"w-100 text-center pt-1 mb-2\">\r\n              <a class=\"text-primary text-link semi-bold\" *ngIf=\"isLogin\" (click)=\"openEmployerModal()\">Sign in as\r\n                Employer</a>\r\n            </div>\r\n            <div *ngIf=\"isVerifyOTP\" class=\"w-100 p-3 d-flex justify-content-center\">\r\n              <div class=\"w-100\">\r\n                <alert type=\"success\" class=\"text-sm\">\r\n                  We have sent a 6 digit passcode at {{ signupForm.get('email').value }} {{email.value}} kindly enter\r\n                  the\r\n                  code\r\n                  here.\r\n                </alert>\r\n                <div class=\"p-3\">\r\n                  <label class=\"semi-bold mt-2\">Enter a 6-digit passcode</label>\r\n                  <ng-otp-input name=\"otp\" ngDefaultControl [(ngModel)]='otp' (onInputChange)=\"onOtpChange($event)\"\r\n                    [config]=\"{length:6, allowNumbersOnly:true, inputClass:'mb-3'\t}\">\r\n                  </ng-otp-input>\r\n                  <div class=\"text-right mb-2 d-block\">\r\n                    <span class=\"text-sm text-danger\" *ngIf=\"!isOTPCorrect\"><b>Invalid code</b></span>\r\n                  </div>\r\n                  <button *ngIf=\"!isServiceRunning\" (click)=\"verifyOTP()\"\r\n                    class=\"btn btn-primary d-block p-1 px-4 text-sm\" style=\"border-radius: 20px;\">Verify</button>\r\n                  <ion-spinner color=\"primary\" mode=\"md\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n                  <div class=\"mt-5\">\r\n                    <a class=\"text-primary d-block semi-bold text-sm mt-3 pb-2\" *ngIf='timer > 0'><span\r\n                        class=\"text-secondary\">Resend Code </span> 00 :\r\n                      {{timer > 9 ? timer : '0'+timer}}</a>\r\n                    <a class=\"text-primary semi-bold d-block text-link text-sm mt-3 pb-2\" *ngIf='timer <= 0'\r\n                      (click)=\"resendOTP()\">Resend Code</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"w-100 text-center\">\r\n                  <a class=\"text-primary text-sm text-link vertical-center\" (click)='back()'><span\r\n                      class=\"material-icons mr-2\">keyboard_backspace</span>\r\n                    Back</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-3 row justify-content-center\" *ngIf=\"isForgotPassword\">\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-4\">\r\n                <mat-label>Enter your email</mat-label>\r\n                <input matInput placeholder=\"Enter email\" name=\"email\" [formControl]=\"email\" required>\r\n                <mat-error *ngIf=\"email.invalid\">Enter valid email*</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"d-flex justify-content-center mb-5 col-sm-12\">\r\n                <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\r\n                  style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"forgotPassword()\">Send\r\n                  Passcode</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-3 row justify-content-center\" *ngIf=\"isResetPassword\">\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">New Password</mat-label>\r\n                <input matInput class=\"text-sm m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\r\n                  placeholder=\"Enter password\" [formControl]='resetPassword'>\r\n                <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n                  class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n                </span>\r\n                <mat-error class=\"text-xs\">Password required*</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"w-100 d-flex justify-content-center mb-5\">\r\n                <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\r\n                  style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"restPassword()\">Reset</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"w-100 text-center\" *ngIf=\"isForgotPassword\">\r\n              <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)='showLogin()'><u>Login\r\n                  here.</u></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"side back w-100 row p-0 m-0 vertical-center justify-content-center\">\r\n      <div class=\"col-sm-9\" *ngIf=\"isEmployer\" style=\"min-height: 90vh !important;max-height: 92vh !important;\">\r\n        <app-employer-signin (closeEmployer)=\"hideEmployerpahe()\"></app-employer-signin>\r\n      </div>\r\n      <div class=\"col-sm-9 p-2\" *ngIf=\"!isEmployer\" style=\"min-height: 90vh !important; max-height: 96vh !important;\">\r\n        <div class=\"w-100 row vertical-center mx-auto bg-violet border-7\"\r\n          style=\"min-height: 90vh !important; max-height: 96vh !important;\">\r\n          <div [ngClass]=\"isScreenBig ? 'col-sm-7' : 'col-sm-12'\" class=\"p-3 bg-white border-7\"\r\n            style=\"min-height: 90vh !important; max-height: 96vh !important;\">\r\n            <div class=\"\">\r\n              <div class=\"d-flex justify-content-center mb-4\">\r\n                <img *ngIf=\"!isVerifyOTP\"\r\n                  src=\"{{ isLogin?'../../../assets/login2.jpg': isRegistration ?'../../../assets/register.jpg': '../../../assets/forgotpassword.jpg'}}\"\r\n                  class=\"img-fluid\" alt=\"\" style=\"height: 110px; width: 140px;\">\r\n              </div>\r\n            </div>\r\n            <div class=\"vertical-center w-100 justify-content-center mb-2\">\r\n              <span class=\"text-violet text-md semi-bold\">{{ isLogin ? 'Signin to Refer2Career': isRegistration\r\n                ?'Create Account':\r\n                isForgotPassword ?\r\n                'Forgot Password' : isResetPassword ? 'Reset Password' : ''}}</span>\r\n            </div>\r\n            <form class=\"p-3 row justify-content-center\" [formGroup]=\"signupForm\" *ngIf=\"isRegistration\">\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">Full name</mat-label>\r\n                <input matInput class=\"text-sm m-0\" name=\"name\" placeholder=\"Enter name\" formControlName='name'>\r\n                <mat-error class=\"text-xs\">Enter valid name*</mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">E-mail</mat-label>\r\n                <input matInput class=\"text-sm m-0\" name=\"email\" type=\"email\" placeholder=\"Enter email\"\r\n                  formControlName='email'>\r\n                <mat-error class=\"text-xs\">Enter valid email*</mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-4\">\r\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">Password</mat-label>\r\n                <input matInput class=\"text-sm m-0\" name=\"password\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\r\n                  placeholder=\"Enter password\" formControlName='password'>\r\n                <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\r\n                  class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\r\n                </span>\r\n                <mat-error class=\"text-xs\">Password must be greater than 6 digits*</mat-error>\r\n              </mat-form-field>\r\n              <div class=\"text-right mb-2 col-sm-12\">\r\n                <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\r\n              </div>\r\n              <div class=\"col-sm-12 d-flex justify-content-center mb-3\">\r\n                <button *ngIf=\"!isServiceRunning\" class=\"btn btn-primary p-1 px-4\" style=\"border-radius: 20px;\"\r\n                  (click)=\"registerCandidate()\">Create Account</button>\r\n              </div>\r\n            </form>\r\n            <div class=\"w-100 text-center\" *ngIf=\"isRegistration\">\r\n              <span class=\"text-grey text-sm mr-1\">Already a member? </span>\r\n              <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)='loginVisible()'><u>Login here</u></a>\r\n            </div>\r\n            <div *ngIf=\"isVerifyOTP\" class=\"w-100 p-3 d-flex justify-content-center\">\r\n              <div class=\"w-100\">\r\n                <alert type=\"success\" class=\"text-sm\">\r\n                  We have sent a 6 digit passcode at {{ signupForm.get('email').value }} {{email.value}} kindly enter\r\n                  the\r\n                  code\r\n                  here.\r\n                </alert>\r\n                <div class=\"p-3\">\r\n                  <label class=\"semi-bold mt-2\">Enter a 6-digit passcode</label>\r\n                  <ng-otp-input name=\"otp\" ngDefaultControl [(ngModel)]='otp' (onInputChange)=\"onOtpChange($event)\"\r\n                    [config]=\"{length:6, allowNumbersOnly:true, inputClass:'mb-3'\t}\">\r\n                  </ng-otp-input>\r\n                  <div class=\"text-right mb-2 d-block\">\r\n                    <span class=\"text-sm text-danger\" *ngIf=\"!isOTPCorrect\"><b>Invalid code</b></span>\r\n                  </div>\r\n                  <button *ngIf=\"!isServiceRunning\" (click)=\"verifyOTP()\"\r\n                    class=\"btn btn-primary d-block p-1 px-4 text-sm\" style=\"border-radius: 20px;\">Verify</button>\r\n                  <ion-spinner color=\"primary\" mode=\"md\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n                  <div class=\"mt-5\">\r\n                    <a class=\"text-primary d-block semi-bold text-sm mt-3 pb-2\" *ngIf='timer > 0'><span\r\n                        class=\"text-secondary\">Resend Code </span> 00 :\r\n                      {{timer > 9 ? timer : '0'+timer}}</a>\r\n                    <a class=\"text-primary semi-bold d-block text-link text-sm mt-3 pb-2\" *ngIf='timer <= 0'\r\n                      (click)=\"resendOTP()\">Resend Code</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"w-100 text-center\">\r\n                  <a class=\"text-primary text-sm text-link vertical-center\" (click)='back()'><span\r\n                      class=\"material-icons mr-2\">keyboard_backspace</span>\r\n                    Back</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"isScreenBig\" style=\"height: 100% !important;\"\r\n            class=\"col-sm-5 bg-violet w-100 h-100 border-right-7 vertical-center\">\r\n            <span class=\"text-white text-lg mx-auto w-75\"><span class=\"d-block text-center mb-4\">Hello friend!!</span>\r\n              <span class=\"text-ssmd d-block text-center\">\r\n                Enter your details and start applying for job.\r\n              </span></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"vh-100 w-100 vertical-center bg-transparent\">\r\n  <div class=\"w-100 row p-0 m-0 vertical-center justify-content-center\">\r\n\r\n  </div>\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _login_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/signin/signin.component */ "WTty");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-in/log-in.component */ "br8r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: 'login',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login/:code/:user',
        component: _login_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"]
    },
    {
        path: 'referer',
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule)
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() | admin-admin-module */[__webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then(m => m.AdminModule)
    },
    {
        path: 'recruiter',
        loadChildren: () => Promise.all(/*! import() | employer-employer-module */[__webpack_require__.e("common"), __webpack_require__.e("employer-employer-module")]).then(__webpack_require__.bind(null, /*! ./employer/employer.module */ "mXZA")).then(m => m.EmployerModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z7Ah":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EmpRecentJobPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpRecentJobPostsComponent", function() { return EmpRecentJobPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_emp_recent_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./emp-recent-job-posts.component.html */ "AkDi");
/* harmony import */ var _emp_recent_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emp-recent-job-posts.component.scss */ "5Dfi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/job-post-service.service */ "hLKV");
/* harmony import */ var _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/add-job-post/add-job-post.component */ "8ymR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");








let EmpRecentJobPostsComponent = class EmpRecentJobPostsComponent {
    constructor(router, modalRef, modalService, jobPostService) {
        this.router = router;
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.jobPostService = jobPostService;
        this.allJobPost = [];
        this.isServiceRunning = false;
    }
    ngOnInit() {
        if (this.router.url.includes('create')) {
            this.addJobPost();
        }
        this.jobPostService.getPosts();
        this.jobPostService.jobPosts.subscribe((data) => {
            this.allJobPost = data;
        });
    }
    addJobPost() {
        this.jobPostService.post = undefined;
        this.modalRef = this.modalService.show(_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
    editJobPost(post) {
        this.jobPostService.post = undefined;
        this.jobPostService.post = post;
        this.modalRef = this.modalService.show(_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
    seeDetails(data) {
        this.jobPostService.postDetail = data;
        this.router.navigateByUrl(`/recruiter/job-posts/detail/${data._id}`);
    }
    navigateToAllJobs() {
        this.router.navigateByUrl(`/recruiter/job-posts`);
    }
    navigateToMyProfile() {
        this.router.navigateByUrl(`/recruiter/profile`);
    }
};
EmpRecentJobPostsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_4__["JobPostServiceService"] }
];
EmpRecentJobPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-emp-recent-job-posts',
        template: _raw_loader_emp_recent_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emp_recent_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmpRecentJobPostsComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map