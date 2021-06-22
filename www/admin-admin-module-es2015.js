(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "+QzA":
/*!************************************************************************!*\
  !*** ./src/app/admin/job-details-admin/job-details-admin.component.ts ***!
  \************************************************************************/
/*! exports provided: JobDetailsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsAdminComponent", function() { return JobDetailsAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_job_details_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./job-details-admin.component.html */ "Rj72");
/* harmony import */ var _job_details_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-details-admin.component.scss */ "woDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let JobDetailsAdminComponent = class JobDetailsAdminComponent {
    constructor() { }
    ngOnInit() { }
};
JobDetailsAdminComponent.ctorParameters = () => [];
JobDetailsAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-job-details-admin',
        template: _raw_loader_job_details_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_details_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JobDetailsAdminComponent);



/***/ }),

/***/ "0/63":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "Bz0P");
/* harmony import */ var _admin_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard.component.scss */ "ZEEn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");






let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(menu, modalService) {
        this.menu = menu;
        this.modalService = modalService;
    }
    ngOnInit() { }
    toggle() {
        this.menu.toggle();
    }
    openModal(template) {
        this.toggle();
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
AdminDashboardComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-dashboard',
        template: _raw_loader_admin_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _encashment_encashment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encashment/encashment.component */ "R/Nw");
/* harmony import */ var _shared_components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/components/view-profile/view-profile.component */ "HY4x");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback/feedback.component */ "YJ9i");
/* harmony import */ var _shared_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/components/applications/applications.component */ "iwS4");
/* harmony import */ var _employer_applicants_applicants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../employer/applicants/applicants.component */ "TZBB");
/* harmony import */ var _job_details_admin_job_details_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-details-admin/job-details-admin.component */ "+QzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "rsbn");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "OFoB");
/* harmony import */ var _job_posts_job_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./job-posts/job-posts.component */ "HVo0");
/* harmony import */ var _employer_page_employer_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employer-page/employer-page.component */ "PNqm");
/* harmony import */ var _adminmenu_adminmenu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminmenu/adminmenu.component */ "Ahkc");















const routes = [
    {
        path: '', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard', component: _adminmenu_adminmenu_component__WEBPACK_IMPORTED_MODULE_14__["AdminmenuComponent"]
            },
            {
                path: 'profile', component: _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_10__["AdminProfileComponent"]
            },
            {
                path: 'organizations', component: _employer_page_employer_page_component__WEBPACK_IMPORTED_MODULE_13__["EmployerPageComponent"]
            },
            {
                path: 'applicants', component: _employer_applicants_applicants_component__WEBPACK_IMPORTED_MODULE_5__["ApplicantsComponent"]
            },
            {
                path: 'applicants/profile/:id', component: _shared_components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_2__["ViewProfileComponent"]
            },
            {
                path: 'applicants/:jobId', component: _shared_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationsComponent"]
            },
            {
                path: 'jobs', component: _job_posts_job_posts_component__WEBPACK_IMPORTED_MODULE_12__["JobPostsComponent"]
            },
            {
                path: 'jobs/detail/:id', component: _job_details_admin_job_details_admin_component__WEBPACK_IMPORTED_MODULE_6__["JobDetailsAdminComponent"]
            },
            {
                path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_3__["FeedbackComponent"]
            },
            {
                path: 'encashment', component: _encashment_encashment_component__WEBPACK_IMPORTED_MODULE_1__["EncashmentComponent"]
            },
            {
                path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]
            },
        ]
    },
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "6Hd4":
/*!**********************************************************************!*\
  !*** ./src/app/admin/add-organization/add-organization.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrganizationComponent", function() { return AddOrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_organization_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-organization.component.html */ "aAzH");
/* harmony import */ var _add_organization_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-organization.component.scss */ "Nnpj");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/models/enums */ "pzb0");
/* harmony import */ var _shared_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/organizations.service */ "G4+4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");











let AddOrganizationComponent = class AddOrganizationComponent {
    constructor(modalRef, menu, organizationService, toastService, modalService, authService) {
        this.modalRef = modalRef;
        this.menu = menu;
        this.organizationService = organizationService;
        this.toastService = toastService;
        this.modalService = modalService;
        this.authService = authService;
        this.organization = {};
        this.currrentDocIndex = undefined;
        this.documentsArray = [];
        this.message = '';
        this.isEditing = false;
        this.documentType = '';
        this.documentFormSubmitted = false;
        this.isServiceRunning = false;
    }
    ngOnInit() {
        this.initializeForm();
        if (this.organizationService.organization !== undefined) {
            this.organization = this.organizationService.organization;
            this.initializeDetail();
        }
    }
    initializeForm() {
        this.detailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)]),
            alternateNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            organizationEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]),
            organizationMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(10)]),
            field: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(6)]),
        });
    }
    initializeDetail() {
        this.detailForm.patchValue({
            name: this.organization.personalDetails.name,
            mobile: this.organization.personalDetails.mobile,
            email: this.organization.personalDetails.email,
            alternateNumber: this.organization.personalDetails.alternateNumber,
            organizationName: this.organization.organizationDetails.organizationName,
            organizationEmail: this.organization.organizationDetails.organizationEmail,
            field: this.organization.organizationDetails.organizationField,
            organizationMobile: this.organization.organizationDetails.organizationMobile,
            addressLineOne: this.organization.organizationDetails.addressLineOne,
            addressLineTwo: this.organization.organizationDetails.addressLineTwo,
            city: this.organization.organizationDetails.city,
            pincode: this.organization.organizationDetails.pincode,
        });
        this.documentsArray = this.organization.organizationDetails.docs;
        this.organizationLogo = this.organization.organizationDetails.logo;
        this.userPhoto = this.organization.personalDetails.photo;
    }
    close() {
        this.modalRef.hide();
    }
    addDocument(template) {
        this.modal2 = this.modalService.show(template, {
            id: 2, class: 'fit-width modal-dialog-centered',
            ignoreBackdropClick: true, animated: true
        });
    }
    save() {
        this.message = '';
        this.detailForm.markAllAsTouched();
        if (this.detailForm.valid) {
            this.isServiceRunning = true;
            const details = {
                email: this.detailForm.get('organizationEmail').value,
                password: this.detailForm.get('organizationMobile').value,
                role: _shared_models_enums__WEBPACK_IMPORTED_MODULE_4__["UserRole"].EMPLOYER,
                verified: true,
                time: new Date(),
                personalDetails: {
                    email: this.detailForm.get('email').value,
                    name: this.detailForm.get('name').value,
                    mobile: this.detailForm.get('mobile').value,
                    alternateNumber: this.detailForm.get('alternateNumber').value,
                    photo: this.userPhoto,
                },
                organizationDetails: {
                    organizationName: this.detailForm.get('organizationName').value,
                    organizationField: this.detailForm.get('field').value,
                    organizationEmail: this.detailForm.get('organizationEmail').value,
                    organizationMobile: this.detailForm.get('organizationMobile').value,
                    addressLineOne: this.detailForm.get('addressLineOne').value,
                    addressLineTwo: this.detailForm.get('addressLineTwo').value,
                    city: this.detailForm.get('city').value,
                    pincode: this.detailForm.get('pincode').value,
                    logo: this.organizationLogo,
                    docs: this.documentsArray
                }
            };
            if (this.organization) {
                details.lastUpdated = new Date();
                const db = {
                    collection: 'users',
                    data: details,
                    query: { _id: this.organization._id }
                };
                this.authService.update(db).then((data) => {
                    if (data.data) {
                        this.toastService.showToast('Organization updated Successfully!');
                        this.modalService.hide();
                        setTimeout(time => {
                            window.location.reload();
                        }, 2000);
                    }
                    else {
                        this.toastService.showToast('Something went wrong!', 'bg-danger');
                    }
                });
            }
            else {
                this.organizationService.addOrganization(details).then((data) => {
                    this.isServiceRunning = false;
                    if (data.data) {
                        this.isEditing = false;
                        this.detailForm.reset();
                        this.userPhoto = undefined;
                        this.organizationLogo = undefined;
                        this.documentsArray = [];
                        this.toastService.showToast('Organization Added Successfully!');
                        setTimeout(time => {
                            window.location.reload();
                        }, 3000);
                    }
                    else if (data.error) {
                        this.message = data.error;
                    }
                    else {
                        this.toastService.showToast('Something went wrong!', 'bg-danger');
                    }
                });
            }
        }
    }
    cancel() {
        this.documentFormSubmitted = false;
        this.frontPhoto = undefined;
        this.backPhoto = undefined;
        this.documentType = '';
        this.currrentDocIndex = undefined;
        this.modalService.hide(2);
    }
    uploadImage(event, id = 0) {
        const reader = new FileReader();
        reader.onload = (file) => {
            if (id === 0) {
                this.organizationLogo = file.target.result;
            }
            else if (id === 1) {
                this.userPhoto = file.target.result;
            }
            else if (id === 2) {
                this.frontPhoto = file.target.result;
            }
            else if (id === 3) {
                this.backPhoto = file.target.result;
            }
        };
        reader.readAsDataURL(event.target.files[0]);
        if (id === 0) {
            this.organizationLogoData = event.target.files[0];
        }
        else if (id === 1) {
            this.userPhotoData = event.target.files[0];
        }
        else if (id === 1) {
            this.frontPhotoData = event.target.files[0];
        }
        else if (id === 1) {
            this.backPhotoData = event.target.files[0];
        }
    }
    addDoc() {
        this.documentFormSubmitted = true;
        if (this.documentType && this.frontPhoto) {
            const doc = {
                type: this.documentType,
                frontPhoto: this.frontPhoto,
                backPhoto: this.backPhoto
            };
            if (this.currrentDocIndex === undefined) {
                this.documentsArray.push(doc);
            }
            else {
                this.documentsArray[this.currrentDocIndex] = doc;
            }
            this.cancel();
        }
    }
    deleteDocument(index) {
        this.documentsArray.splice(index, 1);
    }
    editDocument(doc, index, template) {
        this.currrentDocIndex = index;
        this.documentType = doc.type;
        this.frontPhoto = doc.frontPhoto;
        this.backPhoto = doc.backPhoto;
        this.addDocument(template);
    }
};
AddOrganizationComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] },
    { type: _shared_services_organizations_service__WEBPACK_IMPORTED_MODULE_5__["OrganizationsService"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AddOrganizationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-add-organization',
        template: _raw_loader_add_organization_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_organization_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddOrganizationComponent);



/***/ }),

/***/ "Ahkc":
/*!********************************************************!*\
  !*** ./src/app/admin/adminmenu/adminmenu.component.ts ***!
  \********************************************************/
/*! exports provided: AdminmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmenuComponent", function() { return AdminmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adminmenu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adminmenu.component.html */ "ergg");
/* harmony import */ var _adminmenu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminmenu.component.scss */ "m/O/");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let AdminmenuComponent = class AdminmenuComponent {
    constructor(authService) {
        this.authService = authService;
        this.user = {};
    }
    ngOnInit() {
        this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    }
    getName(name) {
        return name.split(' ')[0];
    }
};
AdminmenuComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdminmenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-adminmenu',
        template: _raw_loader_adminmenu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adminmenu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminmenuComponent);



/***/ }),

/***/ "Bz0P":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-menu contentId=\"main-content\" class=\"custom\" type=\"overlay\">\r\n    <ion-content>\r\n      <div class=\"menu-header-bg vertical-center\" style=\"text-align: center;\">\r\n        <img src=\"../../../assets/logdado.png\" class=\"img-fluid mx-auto pt-2 pr-2\" style=\"width: 150px; height: 100px;\"\r\n          alt=\"logo\">\r\n      </div>\r\n      <ion-list class=\"menu-items\" lines=\"none\">\r\n        <ion-item routerLink=\"/admin/dashboard\" routerLinkActive=\"active\" (click)=\"toggle()\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <ion-icon name=\"grid\" routerLinkActive='icon-active'></ion-icon>Dashboard\r\n        </ion-item>\r\n        <ion-item routerLink=\"/admin/profile\" routerLinkActive=\"active\" (click)=\"toggle()\">\r\n          <ion-icon name=\"person\" routerLinkActive='icon-active'></ion-icon>My Profile\r\n        </ion-item>\r\n        <ion-item routerLink=\"/admin/organizations\" routerLinkActive=\"active\" (click)=\"toggle()\">\r\n          <ion-icon name=\"business\" routerLinkActive='icon-active'></ion-icon>Organizations\r\n        </ion-item>\r\n        <ion-item routerLink=\"/admin/applicants\" routerLinkActive='active' (click)=\"toggle()\">\r\n          <ion-icon name=\"people\" routerLinkActive='icon-active'></ion-icon>Manage Applicants\r\n        </ion-item>\r\n        <ion-item routerLink=\"/admin/jobs\" routerLinkActive='active' (click)=\"toggle()\">\r\n          <ion-icon name=\"briefcase\" routerLinkActive='icon-active'></ion-icon>Manage Jobs\r\n        </ion-item>\r\n        <ion-item routerLink=\"/admin/feedback\" routerLinkActive='active' (click)=\"toggle()\" class=\"text-link\">\r\n          <ion-icon name=\"chatbox\"></ion-icon>Feedback\r\n        </ion-item>\r\n        <ion-item (click)=\"openModal(logout)\" class=\"text-link\">\r\n          <ion-icon name=\"log-out\"></ion-icon>Logout\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\">\r\n  </ion-router-outlet>\r\n</ion-app>\r\n\r\n<ng-template #logout>\r\n  <div class=\"bg-white box-shadow p-3 m-3\" style=\"border-radius: 10px;\">\r\n    Are you sure you want to logout?\r\n    <div class=\"d-flex justify-content-end px-2 mt-2\">\r\n      <button class=\"btn btn-primary p-0 text-smd bg-violet px-2 mr-3\" (click)=\"loggedOut()\">Yes</button>\r\n      <button class=\"btn btn-secondary text-smd px-2 p-0\" (click)=\"cancel()\">No</button>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "D9jm":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feedback/feedback.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <ion-header style=\"position: fixed\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Feedback</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"p-3 pt-5 mt-5 row justify-content-center\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"border-10 col-sm-5 m-2 bg-white p-3\" *ngFor=\"let feed of allFeedBacks\">\r\n      <div class=\"mb-2\">\r\n        <span class=\"text-dark text-sm\">Name : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.name}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">Email : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.email}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">Type : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.type}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">Description : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.description}}</span>\r\n      </div>\r\n      <div class=\"d-flex justify-content-end mt-4\">\r\n        <span class=\"text-grey text-xs\">Submitted on {{feed.createdAt | date : 'dd MMMM yyyy'}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "G4+4":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/organizations.service.ts ***!
  \**********************************************************/
/*! exports provided: OrganizationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationsService", function() { return OrganizationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let OrganizationsService = class OrganizationsService {
    constructor(http) {
        this.http = http;
        this.currentUser = {};
        this.organization = undefined;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json' });
        this.baseUrl = '';
        this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
    }
    addOrganization(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/add/organization`, body, { headers: this.headers }).toPromise();
    }
    updateOrganization(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/update/organization`, body, { headers: this.headers }).toPromise();
    }
    getOrganization(data) {
        const body = JSON.stringify(data);
        return this.http.post(this.baseUrl + `/api/get/orgination`, body, { headers: this.headers });
    }
    getAllOrganizations() {
        return this.http.post(this.baseUrl + `/api/getAll/orginations`, { headers: this.headers });
    }
};
OrganizationsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganizationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrganizationsService);



/***/ }),

/***/ "HVo0":
/*!********************************************************!*\
  !*** ./src/app/admin/job-posts/job-posts.component.ts ***!
  \********************************************************/
/*! exports provided: JobPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostsComponent", function() { return JobPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./job-posts.component.html */ "u3jV");
/* harmony import */ var _job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-posts.component.scss */ "VSnG");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/toast.service */ "3WbM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared/services/job-post-service.service */ "hLKV");
/* harmony import */ var _shared_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/components/add-job-post/add-job-post.component */ "8ymR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");










let JobPostsComponent = class JobPostsComponent {
    constructor(modalRef, modalService, jobPostService, authService, router, toast) {
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.jobPostService = jobPostService;
        this.authService = authService;
        this.router = router;
        this.toast = toast;
        this.allJobPost = [];
        this.isServiceRunning = false;
        this.rejectReason = 'safsaf';
        this.referReward = null;
    }
    ngOnInit() {
        this.jobPostService.getPosts();
        this.getPosts();
    }
    getPosts() {
        this.isServiceRunning = true;
        this.jobPostService.jobPosts.subscribe((data) => {
            this.allJobPost = data;
            this.allJobPost.sort((a, b) => {
                const c = new Date(a.jobPost.createdAt);
                const d = new Date(b.jobPost.createdAt);
                return d - c;
            });
            this.isServiceRunning = false;
        }, err => this.isServiceRunning = false);
    }
    addJobPost() {
        this.jobPostService.post = undefined;
        this.modalRef = this.modalService.show(_shared_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_6__["AddJobPostComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
    seeDetails(id) {
        this.router.navigateByUrl(`/admin/jobs/detail/${id}`);
    }
    openRejectModal(id, template) {
        this.currentPostId = id;
        this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
    }
    rejectPost() {
        if (this.rejectReason) {
            this.isServiceRunning = true;
            const db = {
                collection: 'jobposts',
                query: { _id: this.currentPostId },
                data: { status: 'rejected', rejectReason: this.rejectReason }
            };
            this.authService.update(db).then((data) => {
                if (data.data) {
                    this.modalRef.hide();
                    this.isServiceRunning = false;
                    this.toast.showToast('Rejected Successfully!');
                    this.currentPostId = null;
                    this.jobPostService.getPosts();
                }
            });
        }
    }
    openApproveModal(id, template) {
        this.currentPostId = id;
        this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
    }
    approvePost() {
        if (this.referReward !== null) {
            this.isServiceRunning = true;
            const db = {
                collection: 'jobposts',
                query: { _id: this.currentPostId },
                data: { status: 'approved', referReward: this.referReward, 'jobPost.verified': true }
            };
            this.authService.update(db).then((data) => {
                if (data.data) {
                    this.modalRef.hide();
                    this.isServiceRunning = false;
                    this.toast.showToast('Approved Successfully!');
                    this.jobPostService.getPosts();
                }
            });
        }
    }
    closeModal() {
        this.modalRef.hide();
    }
};
JobPostsComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] },
    { type: _shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__["JobPostServiceService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
JobPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-job-posts',
        template: _raw_loader_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], JobPostsComponent);



/***/ }),

/***/ "Ipf2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-profile/admin-profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"bg-primary\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<div class=\"bg-white\" style=\"overflow: auto;\" *ngIf=\"!isServiceRunning\">\r\n  <span class=\"d-block text-right bold material-icons mt-3 mr-3 text-link\"\r\n    [ngClass]=\"isEditing ? 'text-primary' : 'text-grey'\" (click)=\"onEnableEditing()\">edit</span>\r\n  <br>\r\n  <br>\r\n  <div class=\"w-100 d-flex justify-content-center\">\r\n    <div class=\"vertical-center\">\r\n      <div class=\"\">\r\n        <div class=\"w-100 d-flex justify-content-center\">\r\n          <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event,1)'\r\n            class=\"position-absolute w-25 h-25\" style=\"opacity: 0 !important;\" />\r\n          <span class=\"rounded-circle mx-auto text-center material-icons pt-3 text-grey text-md\" *ngIf=\"!userPhoto\"\r\n            style=\"border-style: dashed; height: 70px !important; width: 70px !important; border-color: rgb(129, 129, 129);\">photo</span>\r\n          <img *ngIf=\"userPhoto\" class=\"img-fulid rounded-circle\"\r\n            style=\"height: 70px !important; width: 70px !important;\" src=\"{{userPhoto}}\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <div class=\"w-100 text-grey semi-bold text-smd\">{{user.name}}</div>\r\n        <div class=\"w-100 text-grey semi-bold text-smd\">{{user.email}}</div>\r\n        <span class=\"badge badge-danger\">Admin</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-4 row d-flex justify-content-center\" [formGroup]=\"detailForm\">\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Name</mat-label>\r\n        <input matInput placeholder=\"Enter name\" class=\"p-0\" formControlName='name'>\r\n        <mat-error>Enter valid name</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Phone number</mat-label>\r\n        <span matPrefix>+91 &nbsp;</span>\r\n        <input matInput type=\"tel\" placeholder=\"Enter email\" class=\"p-0\" formControlName='mobile'>\r\n        <mat-error>Enter valid mobile number</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Email</mat-label>\r\n        <input matInput placeholder=\"Enter email\" class=\"p-0\" formControlName='email'>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Alternate contact number</mat-label>\r\n        <input matInput placeholder=\"Enter email\" class=\"p-0\" formControlName='alternateNumber'>\r\n        <mat-error>Enter valid email*</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n    </div>\r\n    <div class=\"col-sm-12 my-3 text-grey\">\r\n      <h5 class=\"text-center\">Organization Details</h5>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Organization name</mat-label>\r\n        <input formControlName='organizationName' matInput placeholder=\"Enter Organization name\" class=\"p-0\">\r\n        <mat-error>Enter valid name</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Organization field</mat-label>\r\n        <input formControlName='field' matInput placeholder=\"Enter Organization field\" class=\"p-0\">\r\n        <mat-error>Enter valid field</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Contact number</mat-label>\r\n        <span matPrefix>+91 &nbsp;</span>\r\n        <input formControlName='organizationMobile' matInput placeholder=\"Enter contact number\" type=\"tel\" class=\"p-0\"\r\n          value='psj'>\r\n        <mat-error>Enter valid contact number*</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">organizationEmail</mat-label>\r\n        <input formControlName='organizationEmail' matInput placeholder=\"Enter email\" class=\"p-0\">\r\n        <mat-error>Enter valid email</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Address line one</mat-label>\r\n        <input formControlName='addressLineOne' matInput placeholder=\"Enter Address line one\" class=\"p-0\" value='psj'>\r\n        <mat-error *ngIf=\"false\">Enter valid details</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Address line two</mat-label>\r\n        <input formControlName='addressLineTwo' matInput placeholder=\"Address line two\" class=\"p-0\">\r\n        <mat-error>Enter valid details</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">City</mat-label>\r\n        <input formControlName='city' matInput placeholder=\"Enter city\" class=\"p-0\">\r\n        <mat-error>Enter valid city</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 mx-3 mb-2\">\r\n      <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n        <mat-label class=\"p-0\">Pincode</mat-label>\r\n        <input formControlName='pincode' matInput type=\"number\" placeholder=\"Enter email\" class=\"p-0\">\r\n        <mat-error>Enter valid pincode</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-sm-4 my-2\">\r\n      <div class=\"w-100 d-flex justify-content-center\">\r\n        <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event)' class=\"position-absolute w-25 h-25\"\r\n          style=\"opacity: 0 !important;\" />\r\n        <span class=\"rounded-circle mx-auto text-center material-icons pt-3 text-grey text-md\" *ngIf=\"!organizationLogo\"\r\n          style=\"border-style: dashed; height: 70px !important; width: 70px !important; border-color: rgb(129, 129, 129);\">photo</span>\r\n        <img *ngIf=\"organizationLogo\" class=\"img-fulid rounded-circle\"\r\n          style=\"height: 70px !important; width: 70px !important;\" src=\"{{organizationLogo}}\" alt=\"\">\r\n      </div>\r\n      <span class=\"d-block text-smd text-bold text-center mt-2\">LOGO</span>\r\n    </div>\r\n    <div class=\"col-sm-11 d-flex justify-content-end mb-4 mt-3\" *ngIf=\"isEditing\">\r\n      <button type=\"submit\" class=\"btn btn-primary p-0 text-smd bg-violet px-4 mr-2\" (click)=\"save()\">Save</button>\r\n      <button class=\"btn btn-secondary text-smd px-4 p-0\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "Nnpj":
/*!************************************************************************!*\
  !*** ./src/app/admin/add-organization/add-organization.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cdk-global-overlay-wrapper, .cdk-overlay-container {\n  z-index: 99999 !important;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  z-index: 99999 !important;\n}\n\n::ng-deep .cdk-global-overlay-wrapper, ::ng-deep .cdk-overlay-container {\n  z-index: 9999 !important;\n}\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtb3JnYW5pemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNELHlCQUF3QjtBQUU5RTs7QUFEQTtFQUNJLHlCQUF5QjtBQUk3Qjs7QUFERTtFQUFrRSx3QkFBdUI7QUFLM0Y7O0FBSEU7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQU12QiIsImZpbGUiOiJhZGQtb3JnYW5pemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHsgei1pbmRleDogOTk5OTkhaW1wb3J0YW50OyB9IFxyXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XHJcbiAgICB6LWluZGV4OiA5OTk5OSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHsgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHsgei1pbmRleDogOTk5OSFpbXBvcnRhbnQ7IH0gfVxyXG5cclxuICAudGV4dC1vdmVyZmxvd3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "OFoB":
/*!******************************************************!*\
  !*** ./src/app/admin/messages/messages.component.ts ***!
  \******************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./messages.component.html */ "og6m");
/* harmony import */ var _messages_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component.scss */ "owiM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MessagesComponent = class MessagesComponent {
    constructor() { }
    ngOnInit() { }
};
MessagesComponent.ctorParameters = () => [];
MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-messages',
        template: _raw_loader_messages_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_messages_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagesComponent);



/***/ }),

/***/ "PNqm":
/*!****************************************************************!*\
  !*** ./src/app/admin/employer-page/employer-page.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerPageComponent", function() { return EmployerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_employer_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./employer-page.component.html */ "ySbg");
/* harmony import */ var _employer_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employer-page.component.scss */ "omG2");
/* harmony import */ var _shared_services_organizations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/organizations.service */ "G4+4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-organization/add-organization.component */ "6Hd4");







let EmployerPageComponent = class EmployerPageComponent {
    constructor(modalRef, modalService, orgService) {
        this.modalRef = modalRef;
        this.modalService = modalService;
        this.orgService = orgService;
        this.allOrganizations = [];
        this.isServiceRunning = false;
    }
    ngOnInit() {
        this.isServiceRunning = true;
        this.orgService.getAllOrganizations().subscribe((data) => {
            this.allOrganizations = data.data;
            this.isServiceRunning = false;
        });
    }
    addOrganization() {
        this.orgService.organization = undefined;
        this.modalRef = this.modalService.show(_add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_6__["AddOrganizationComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
    seeDetails(organization) {
        this.orgService.organization = undefined;
        this.orgService.organization = organization;
        this.modalRef = this.modalService.show(_add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_6__["AddOrganizationComponent"], { class: 'full-modal bg-light-grey', ignoreBackdropClick: true, animated: true });
    }
};
EmployerPageComponent.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
    { type: _shared_services_organizations_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationsService"] }
];
EmployerPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-employer-page',
        template: _raw_loader_employer_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employer_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmployerPageComponent);



/***/ }),

/***/ "QsQW":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/applicants/applicants.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-manage-applicants></app-manage-applicants>");

/***/ }),

/***/ "R/Nw":
/*!**********************************************************!*\
  !*** ./src/app/admin/encashment/encashment.component.ts ***!
  \**********************************************************/
/*! exports provided: EncashmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncashmentComponent", function() { return EncashmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_encashment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./encashment.component.html */ "z5Ne");
/* harmony import */ var _encashment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encashment.component.scss */ "w3Pk");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let EncashmentComponent = class EncashmentComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.allRequests = [];
        this.isServiceRunning = false;
    }
    ngOnInit() {
        this.getRequests();
    }
    getRequests() {
        this.isServiceRunning = true;
        let db = {
            collection: 'encashment',
        };
        this.dbService.find(db).subscribe((data) => {
            if (data.data) {
                if (data.data.length > 0) {
                    this.allRequests = data.data;
                    this.isServiceRunning = false;
                }
            }
        });
    }
    openInGmail(id) {
        window.open(`https://mail.google.com/mail/u/0/#search/Encashment+Request+${id}!`);
    }
};
EncashmentComponent.ctorParameters = () => [
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
EncashmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-encashment',
        template: _raw_loader_encashment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_encashment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EncashmentComponent);



/***/ }),

/***/ "Rj72":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/job-details-admin/job-details-admin.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"overflow: auto;\">\r\n  <app-job-details-shared></app-job-details-shared>\r\n</div>\r\n");

/***/ }),

/***/ "SJNQ":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Uxcc":
/*!********************************************************!*\
  !*** ./src/app/admin/feedback/feedback.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "VSnG":
/*!**********************************************************!*\
  !*** ./src/app/admin/job-posts/job-posts.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItcG9zdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YJ9i":
/*!******************************************************!*\
  !*** ./src/app/admin/feedback/feedback.component.ts ***!
  \******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.component.html */ "D9jm");
/* harmony import */ var _feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.component.scss */ "Uxcc");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let FeedbackComponent = class FeedbackComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.allFeedBacks = [];
        this.isServiceRunning = false;
    }
    ngOnInit() {
        this.getFeedBacks();
    }
    getFeedBacks() {
        const db = {
            collection: 'feedback',
        };
        this.isServiceRunning = true;
        this.dbService.find(db).subscribe((data) => {
            if (data.data) {
                if (data.data.length > 0) {
                    this.allFeedBacks = data.data;
                    this.sort();
                }
                this.isServiceRunning = false;
            }
        });
    }
    sort() {
        this.allFeedBacks.sort((a, b) => {
            const c = new Date(a.createdAt);
            const d = new Date(b.createdAt);
            return d - c;
        });
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FeedbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedbackComponent);



/***/ }),

/***/ "ZEEn":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "aAzH":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-organization/add-organization.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light-grey\">\r\n  <div class=\"p-3\">\r\n    <span class=\"material-icons d-block text-right text-lg text-link text-grey semi-bold\" (click)=\"close()\">close</span>\r\n    <div class=\"d-block\">\r\n      <div class=\"ml-4\">\r\n        <img class=\"img-fluid\" src=\"../../../assets/logo.png\" alt=\"\" style=\"width: 180px; height: 120px;\">\r\n      </div>\r\n    </div>\r\n    <span class=\"d-block mb-5 text-grey text-center bold mt-2\">Add Organization</span>\r\n    <div class=\"center-parent\" style=\"height: max-content;\">\r\n      <div class=\"row px-3 justify-content-center\">\r\n        <div class=\"col-sm-9 mx-3\">\r\n          <div class=\"w-100 d-flex justify-content-center\">\r\n            <div class=\"vertical-center\">\r\n              <div class=\"\">\r\n                <div class=\"w-100 d-flex justify-content-center\">\r\n                  <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event,1)'\r\n                    class=\"position-absolute w-25 h-25\" style=\"opacity: 0 !important;\" />\r\n                  <span class=\"rounded-circle mx-auto text-center material-icons pt-3 text-grey text-md\"\r\n                    *ngIf=\"!userPhoto\"\r\n                    style=\"border-style: dashed; height: 70px !important; width: 70px !important; border-color: rgb(129, 129, 129);\">photo</span>\r\n                  <img *ngIf=\"userPhoto\" class=\"img-fulid rounded-circle\"\r\n                    style=\"height: 70px !important; width: 70px !important;\" src=\"{{userPhoto}}\" alt=\"\">\r\n                </div>\r\n                <span class=\"d-block text-smd text-bold text-center my-2 mb-5\">User Photo</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-4 row d-flex justify-content-center\" [formGroup]=\"detailForm\">\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Name</mat-label>\r\n                <input matInput placeholder=\"Enter name\" class=\"p-0\" formControlName='name'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Phone number</mat-label>\r\n                <span matPrefix>+91 &nbsp;</span>\r\n                <input matInput type=\"tel\" placeholder=\"Enter email\" class=\"p-0\" formControlName='mobile'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Email</mat-label>\r\n                <input matInput placeholder=\"Enter email\" class=\"p-0\" formControlName='email'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Alternate contact number</mat-label>\r\n                <input matInput placeholder=\"Enter email\" class=\"p-0\" formControlName='alternateNumber'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n            </div>\r\n            <div class=\"col-sm-12 my-3 text-grey\">\r\n              <h5 class=\"text-center\">Organization Details</h5>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Organization name</mat-label>\r\n                <input formControlName='organizationName' matInput placeholder=\"Enter Organization name\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Organization field</mat-label>\r\n                <input formControlName='field' matInput placeholder=\"Enter Organization field\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Contact number</mat-label>\r\n                <span matPrefix>+91 &nbsp;</span>\r\n                <input formControlName='organizationMobile' matInput placeholder=\"Enter contact number\" type=\"tel\"\r\n                  class=\"p-0\" value='psj'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">organizationEmail</mat-label>\r\n                <input formControlName='organizationEmail' matInput placeholder=\"Enter email\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Address line one</mat-label>\r\n                <input formControlName='addressLineOne' matInput placeholder=\"Enter Address line one\" class=\"p-0\"\r\n                  value='psj'>\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Address line two</mat-label>\r\n                <input formControlName='addressLineTwo' matInput placeholder=\"Address line two\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">City</mat-label>\r\n                <input formControlName='city' matInput placeholder=\"Enter city\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 mx-3 mb-2\">\r\n              <mat-form-field appearance=\"outline\" class=\"p-0 w-100 mat-form-field\">\r\n                <mat-label class=\"p-0\">Pincode</mat-label>\r\n                <input formControlName='pincode' matInput type=\"number\" placeholder=\"Enter email\" class=\"p-0\">\r\n                <mat-error>Required field*</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-sm-4 my-2\">\r\n              <div class=\"w-100 d-flex justify-content-center\">\r\n                <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event)'\r\n                  class=\"position-absolute w-25 h-25\" style=\"opacity: 0 !important;\" />\r\n                <span class=\"rounded-circle mx-auto text-center material-icons pt-3 text-grey text-md\"\r\n                  *ngIf=\"!organizationLogo\"\r\n                  style=\"border-style: dashed; height: 70px !important; width: 70px !important; border-color: rgb(129, 129, 129);\">photo</span>\r\n                <img *ngIf=\"organizationLogo\" class=\"img-fulid rounded-circle\"\r\n                  style=\"height: 70px !important; width: 70px !important;\" src=\"{{organizationLogo}}\" alt=\"\">\r\n              </div>\r\n              <span class=\"d-block text-smd text-bold text-center mt-2\">LOGO</span>\r\n            </div>\r\n            <div class=\"col-sm-12 my-3 text-grey\">\r\n              <h5 class=\"text-center\">Documents</h5>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center vertical-center\">\r\n              <div class=\"px-0 my-2 mx-2\" style=\"width: 90px;\" *ngFor=\"let doc of documentsArray; index as i\">\r\n                <div class=\"d-flex justify-content-end my-1\">\r\n                  <span class=\" material-icons text-smd text-grey text-link mr-2\"\r\n                    (click)='editDocument(doc, i, add)'>edit</span>\r\n                  <span class=\" material-icons text-smd text-grey text-link\" (click)=\"deleteDocument(i)\">delete</span>\r\n                </div>\r\n                <img class=\"img-fulid\" style=\"height: 100px !important; width: 90px !important; border-radius: 7px;\"\r\n                  src=\"{{doc.frontPhoto}}\" alt=\"\">\r\n                <div class=\"text-grey text-sm text-center text-overflow\">{{doc.type}}</div>\r\n              </div>\r\n              <div class=\"text-sm text-primary text-link semi-bold\" (click)=\"addDocument(add)\">\r\n                + Add Document\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-11 d-flex justify-content-end mb-4 mt-3\">\r\n              <span class=\"text-danger text-sm semi-bold\">{{message}}</span>\r\n              <ion-spinner color=\"primary\" *ngIf=\"isServiceRunning\"></ion-spinner>\r\n              <button type=\"submit\" *ngIf=\"!isServiceRunning\"\r\n                class=\" ml-2 btn btn-primary p-0 text-smd bg-violet px-4 mr-2\" (click)=\"save()\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #add>\r\n  <div class=\"bg-white box-shadow p-2\" style=\"border-radius: 10px;\">\r\n    <div class=\"p-4 w-100\">\r\n      <span class=\"text-center d-block mb-3 text-smd w-100 text-grey semi-bold\">Add Document</span>\r\n      <div>\r\n        <mat-form-field appearance=\"fill\">\r\n          <mat-label>Select Document type</mat-label>\r\n          <mat-select [(value)]=\"documentType\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option value=\"Aadhar card\">Aadhar card</mat-option>\r\n            <mat-option value=\"Pan Card\">Pan Card</mat-option>\r\n            <mat-option value=\"Company Registration Certificate\">Registration Certificate</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <span class='d-block text-right text-sm bold text-danger' *ngIf=\"!documentType && documentFormSubmitted\">This\r\n        field is required</span>\r\n      <div class=\"row justify-content-start\">\r\n        <div class=\"px-0 my-2 mx-2\">\r\n          <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event,2)'\r\n            class=\"position-absolute w-25 h-25\" style=\"opacity: 0 !important;\" />\r\n          <span class=\"mx-auto bg-secondary text-center p-4 material-icons text-grey text-md\" *ngIf=\"!frontPhoto\"\r\n            style=\"border-radius: 7px;\">photo</span>\r\n          <img class=\"img-fulid\" *ngIf=\"frontPhoto\"\r\n            style=\"height: 100px !important; width: 90px !important; border-radius: 7px;\" src=\"{{frontPhoto}}\" alt=\"\">\r\n          <div class=\"text-grey text-sm text-center w-100\">Front</div>\r\n        </div>\r\n        <div class=\"px-0 my-2 mx-2\">\r\n          <input type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='uploadImage($event,3)'\r\n            class=\"position-absolute w-25 h-25\" style=\"opacity: 0 !important;\" />\r\n          <span class=\"mx-auto bg-secondary text-center p-4 material-icons text-grey text-md\" *ngIf=\"!backPhoto\"\r\n            style=\"border-radius: 7px;\">photo</span>\r\n          <img class=\"img-fulid\" *ngIf=\"backPhoto\"\r\n            style=\"height: 100px !important; width: 90px !important; border-radius: 7px;\" src=\"{{backPhoto}}\" alt=\"\">\r\n          <div class=\"text-grey text-sm text-center w-100\">Back</div>\r\n        </div>\r\n      </div>\r\n      <span class='d-block text-right text-sm bold text-danger' *ngIf=\"!frontPhoto && documentFormSubmitted\">Front image\r\n        is required</span>\r\n    </div>\r\n    <div class=\"col-sm-12 d-flex justify-content-end mt-3\">\r\n      <button class=\"btn btn-primary p-0 text-smd bg-violet px-4 mr-2\" (click)=\"addDoc()\">Add</button>\r\n      <button class=\"btn btn-secondary bg-grey p-0 text-smd px-3 mr-2\" (click)=\"cancel()\">Cancel</button>\r\n    </div>\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "ergg":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminmenu/adminmenu.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100 w-100\" style=\"overflow-y: auto;\">\r\n  <div class=\"bg-primary w-100 text-white\"\r\n    style=\"min-height: 290px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\r\n    <div class=\"d-flex justify-content-between p-2\">\r\n      <div class=\"d-flex justify-content-end vertical-center\">\r\n        <ion-menu-button class=\"text-white\"></ion-menu-button>\r\n      </div>\r\n      <span class=\"text-white text-md\" style=\"font-family: 'Roboto', sans-serif;\">Refer2Career</span>\r\n    </div>\r\n    <div class=\"row justify-content-between mt-5 pb-2 pt-5\">\r\n      <div class=\"col-sm-4 d-flex justify-content-center mt-3\">\r\n        <span class=\"text-white text-lg mx-auto\">Hi, {{getName(user.name)}}!</span>\r\n      </div>\r\n      <div class=\"col-sm-4 d-flex justify-content-center mt-3\">\r\n        <button class=\"btn btn-info bg-coloured px-4\" style=\"border: 0px; border-radius: 10px;\">\r\n          Admin</button>\r\n      </div>\r\n      <div class=\"col-sm-4 d-flex justify-content-center mt-3\">\r\n        <button class=\"btn btn-outline-light py-1 px-5\" routerLink=\"/admin/profile\" style=\"border-radius: 30px;\">My\r\n          Profile</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-4 pt-4\">\r\n    <div class=\"row p-0 m-0 justify-content-between\">\r\n      <div class=\"row p-2 m-0 col-sm-4\">\r\n        <div class=\"col-sm-9 mx-auto d-flex border border-primary justify-content-center bg-white card\"\r\n          style=\"border-radius: 10px;\">\r\n          <div class=\"rounded-circle bg-violet vertical-center mx-auto\"\r\n            style=\"margin-top: -30px; width: 90px; height: 90px;\">\r\n            <span class=\"material-icons text-xlg text-white mx-auto\">business</span>\r\n          </div>\r\n          <div class=\"w-100 text-center my-3\">\r\n            <span class=\"d-block text-dark semi-bold text-lg\">Manage recruiters</span>\r\n            <span class=\"d-block text-dark\">Add new recruiters and manage existing ones.</span>\r\n          </div>\r\n          <div class=\"w-100 d-flex justify-content-center py-4 pb-5 mb-2\">\r\n            <button routerLink=\"/admin/organizations\" class=\"btn btn-outline-info py-1 px-5\"\r\n              style=\"border-radius: 30px;\">View</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-2 m-0 col-sm-4\">\r\n        <div class=\"col-sm-9 mx-auto d-flex border border-primary justify-content-center bg-white card\"\r\n          style=\"border-radius: 10px;\">\r\n          <div class=\"rounded-circle bg-violet vertical-center mx-auto\"\r\n            style=\"margin-top: -30px; width: 90px; height: 90px;\">\r\n            <span class=\"material-icons text-xxlg text-white mx-auto\">post_add</span>\r\n          </div>\r\n          <div class=\"w-100 text-center my-3\">\r\n            <span class=\"d-block text-dark semi-bold text-lg\">Job posts</span>\r\n            <span class=\"d-block text-dark\">Manage job posts</span>\r\n          </div>\r\n          <div class=\"w-100 d-flex justify-content-center py-4 pb-5 mb-2\">\r\n            <button class=\"btn btn-outline-info py-1 px-5\" routerLink=\"/admin/jobs\"\r\n              style=\"border-radius: 30px;\">View</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-2 m-0 col-sm-4\">\r\n        <div class=\"col-sm-9 mx-auto d-flex border border-primary justify-content-center bg-white card\"\r\n          style=\"border-radius: 10px;\">\r\n          <div class=\"rounded-circle bg-violet vertical-center mx-auto\"\r\n            style=\"margin-top: -30px; width: 90px; height: 90px;\">\r\n            <span class=\"material-icons text-xxlg text-white mx-auto\">monetization_on</span>\r\n          </div>\r\n          <div class=\"w-100 text-center my-3\">\r\n            <span class=\"d-block text-dark semi-bold text-lg\">Encashments</span>\r\n            <span class=\"d-block text-dark\">Manage encashment requests</span>\r\n          </div>\r\n          <div class=\"w-100 d-flex justify-content-center py-4 pb-5 mb-2\">\r\n            <button class=\"btn btn-outline-info py-1 px-5\" routerLink=\"/admin/encashment\"\r\n              style=\"border-radius: 30px;\">View</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _encashment_encashment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encashment/encashment.component */ "R/Nw");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback/feedback.component */ "YJ9i");
/* harmony import */ var _job_details_admin_job_details_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-details-admin/job-details-admin.component */ "+QzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-profile/admin-profile.component */ "rsbn");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adminmenu_adminmenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminmenu/adminmenu.component */ "Ahkc");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages.component */ "OFoB");
/* harmony import */ var _employer_page_employer_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employer-page/employer-page.component */ "PNqm");
/* harmony import */ var _job_posts_job_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./job-posts/job-posts.component */ "HVo0");
/* harmony import */ var _add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-organization/add-organization.component */ "6Hd4");
/* harmony import */ var _applicants_applicants_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./applicants/applicants.component */ "vOJ3");

















let AdminModule = class AdminModule {
};
AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["AdminDashboardComponent"],
            _admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_9__["AdminProfileComponent"],
            _adminmenu_adminmenu_component__WEBPACK_IMPORTED_MODULE_11__["AdminmenuComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
            _employer_page_employer_page_component__WEBPACK_IMPORTED_MODULE_13__["EmployerPageComponent"],
            _job_posts_job_posts_component__WEBPACK_IMPORTED_MODULE_14__["JobPostsComponent"],
            _add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_15__["AddOrganizationComponent"],
            _job_details_admin_job_details_admin_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsAdminComponent"],
            _applicants_applicants_component__WEBPACK_IMPORTED_MODULE_16__["ApplicantsComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"],
            _encashment_encashment_component__WEBPACK_IMPORTED_MODULE_1__["EncashmentComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"]
        ],
        entryComponents: [
            _add_organization_add_organization_component__WEBPACK_IMPORTED_MODULE_15__["AddOrganizationComponent"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AdminModule);



/***/ }),

/***/ "m/O/":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminmenu/adminmenu.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbm1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "oYA+":
/*!************************************************************!*\
  !*** ./src/app/admin/applicants/applicants.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "og6m":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/messages/messages.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"bg-primary\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Messages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>");

/***/ }),

/***/ "omG2":
/*!******************************************************************!*\
  !*** ./src/app/admin/employer-page/employer-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "owiM":
/*!********************************************************!*\
  !*** ./src/app/admin/messages/messages.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "rsbn":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-profile/admin-profile.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function() { return AdminProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-profile.component.html */ "Ipf2");
/* harmony import */ var _admin_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-profile.component.scss */ "SJNQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "IYfF");
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/toast.service */ "3WbM");








let AdminProfileComponent = class AdminProfileComponent {
    constructor(menu, authService, toastService) {
        this.menu = menu;
        this.authService = authService;
        this.toastService = toastService;
        this.user = {};
        this.isServiceRunning = false;
        this.isEditing = false;
    }
    ngOnInit() {
        this.initializeForm();
        this.user.personalDetails = {};
        this.authService.getDetails({ email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email }).subscribe((data) => {
            this.user = data.data;
            this.initializeDetails();
        }, err => console.log(err.message));
    }
    initializeDetails() {
        this.detailForm.patchValue({
            name: this.user.name,
            email: this.user.email,
            mobile: this.user.mobile,
            alternateNumber: this.user.alternateNumber,
            organizationName: this.user.organizationDetails.organizationName,
            organizationEmail: this.user.organizationDetails.organizationEmail,
            organizationMobile: this.user.organizationDetails.organizationMobile,
            field: this.user.organizationDetails.organizationField,
            addressLineOne: this.user.organizationDetails.addressLineOne,
            addressLineTwo: this.user.organizationDetails.addressLineTwo,
            pincode: this.user.organizationDetails.pincode,
            city: this.user.organizationDetails.city,
        });
        this.userPhoto = this.user.photo;
        this.organizationLogo = this.user.organizationDetails.logo;
    }
    initializeForm() {
        if (!this.user.organizationDetails) {
            this.user.organizationDetails = {};
        }
        this.detailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.user.name, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.user.email, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.user.mobile, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]),
            alternateNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.user.alternateNumber, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.organizationName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            organizationEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.organizationEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            organizationMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.organizationMobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)]),
            field: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.organizationField, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            addressLineOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.addressLineOne, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            addressLineTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.addressLineTwo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.user.organizationDetails.pincode, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)]),
        });
        this.detailForm.disable();
    }
    onEnableEditing() {
        this.isEditing = true;
        this.detailForm.enable();
        this.detailForm.controls.name.disable();
        this.detailForm.controls.email.disable();
    }
    uploadImage(event, id = 0) {
        const reader = new FileReader();
        reader.onload = (file) => {
            if (id === 0) {
                this.organizationLogo = file.target.result;
            }
            else {
                this.userPhoto = file.target.result;
            }
        };
        reader.readAsDataURL(event.target.files[0]);
        if (id === 0) {
            this.organizationLogoData = event.target.files[0];
        }
        else {
            this.userPhotoData = event.target.files[0];
        }
    }
    save() {
        this.detailForm.markAllAsTouched();
        if (this.detailForm.valid) {
            const details = {
                email: this.user.email,
                mobile: this.detailForm.get('mobile').value,
                alternateNumber: this.detailForm.get('alternateNumber').value,
                photo: this.userPhoto,
                organizationDetails: {
                    organizationName: this.detailForm.get('organizationName').value,
                    organizationField: this.detailForm.get('field').value,
                    organizationEmail: this.detailForm.get('organizationEmail').value,
                    organizationMobile: this.detailForm.get('organizationMobile').value,
                    addressLineOne: this.detailForm.get('addressLineOne').value,
                    addressLineTwo: this.detailForm.get('addressLineTwo').value,
                    city: this.detailForm.get('city').value,
                    pincode: this.detailForm.get('pincode').value,
                    logo: this.organizationLogo
                }
            };
            this.authService.updateAdminDetails(details).then(data => {
                if (data) {
                    this.isEditing = false;
                    this.detailForm.disable();
                    this.toastService.showToast('Details Updated Successfully!');
                }
                else {
                    this.toastService.showToast('Something went wrong!', 'bg-danger');
                }
            });
        }
    }
    cancel() {
        this.detailForm.patchValue({
            mobile: this.user.mobile,
            alternateNumber: this.user.alternateNumber,
            organizationName: this.user.organizationDetails.organizationName,
            organizationEmail: this.user.organizationDetails.organizationEmail,
            field: this.user.organizationDetails.organizationField,
            organizationMobile: this.user.organizationDetails.organizationMobile,
            addressLineOne: this.user.organizationDetails.addressLineOne,
            addressLineTwo: this.user.organizationDetails.addressLineTwo,
            city: this.user.organizationDetails.city,
            pincode: this.user.organizationDetails.pincode,
        });
        this.isEditing = false;
        this.detailForm.disable();
    }
};
AdminProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] }
];
AdminProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-profile',
        template: _raw_loader_admin_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminProfileComponent);



/***/ }),

/***/ "u3jV":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/job-posts/job-posts.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <ion-header style=\"position: fixed\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Job Posts</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"row justify-content-center\" style=\"overflow: auto;\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"col-sm-12 m-2 d-flex justify-content-end\">\r\n      <button class=\"btn btn-primary m-2 position-fixed bg-violet text-sm px-3 py-1\" style=\"z-index: 99;\"\r\n        (click)=\"addJobPost()\">Add Job Post</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center px-1\">\r\n    <div class=\"m-3 mt-5 p-2 bg-white col-sm-11\"\r\n      style=\"margin-top: 70px !important; border-radius: 7px; overflow-y: auto !important; border: 1px solid #cccccc;\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-light\">\r\n          <tr class=\"text-center\">\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col text-center\">Title</th>\r\n            <th scope=\"col text-center\">Posted By</th>\r\n            <th scope=\"col text-center\">Posted On</th>\r\n            <th scope=\"col text-center\">STATUS</th>\r\n            <th scope=\"col text-center\">ACTION</th>\r\n            <th scope=\"col text-center\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody class=\"text-center\">\r\n          <tr *ngFor=\"let post of allJobPost; index as i\">\r\n            <td>{{i+1}}</td>\r\n            <td class=\"\">{{post.jobPost.title}}</td>\r\n            <td class=\"\">{{post.jobPost.companyName}}</td>\r\n            <td class=\"\">{{post.jobPost.createdAt | date: 'dd MMMM yyyy'}}</td>\r\n            <td class=\"pt-3\"><span class=\"semi-bold w-100 text-center p-2 my-auto px-5 text-warning\"\r\n                *ngIf=\"!post.status\" style=\"background-color: #feffc4; border-radius: 10px;\">Pending</span>\r\n              <span class=\"semi-bold w-100 text-center p-2 my-auto px-5\" style=\"border-radius: 10px;\"\r\n                [ngClass]=\"post.status === 'rejected' ? 'text-danger' : 'text-success'\" *ngIf=\"post.status\"\r\n                [ngStyle]=\"post.status === 'rejected' ? {'background-color': '#ffc2c2'} :  {'background-color': '#e2ffd1'}\">{{post.status\r\n                === 'rejected' ?\r\n                'Rejected' : 'Approved'}}</span>\r\n            </td>\r\n            <td class=\"vertical-center justify-content-center\">\r\n              <span (click)=\"seeDetails(post._id)\" class=\"p-1 px-3 btn btn-primary bg-violet\"\r\n                style=\"border-radius: 10px;\">View Job Post</span>\r\n              <span *ngIf=\"!post.status\" (click)=\"openApproveModal(post._id, approve)\"\r\n                class=\"p-1 mr-2 ml-3 px-3 btn btn-success\" style=\"border-radius: 10px;\">Approve</span>\r\n              <span (click)=\"openRejectModal(post._id, reject)\" *ngIf=\"!post.status\"\r\n                class=\"p-1 px-3 mr-2 btn btn-danger\" style=\"border-radius: 10px;\">Reject</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #reject>\r\n  <div class=\"bg-white p-3 border-12\">\r\n    <div class=\"d-flex justify-content-end\">\r\n      <span class=\"material-icons text-grey semi-bold text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <h5 class=\"text-center text-grey semi-bold mb-4\">Reason for reject</h5>\r\n    <textarea class=\"form-control mb-5\" [(ngModel)]=\"rejectReason\" placeholder=\"Enter reason for reject\"\r\n      rows=\"3\"></textarea>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-danger px-3 py-1\" (click)=\"rejectPost()\">Reject</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #approve>\r\n  <div class=\"bg-white p-3 border-12\">\r\n    <div class=\"d-flex justify-content-end\">\r\n      <span class=\"material-icons text-grey semi-bold text-link\" (click)=\"closeModal()\">close</span>\r\n    </div>\r\n    <h5 class=\"text-center text-grey semi-bold mb-4\">Approve Job Post</h5>\r\n    <label class=\"text-grey text-smd\">Enter refer reward</label>\r\n    <div class=\"input-group mb-5\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">₹</div>\r\n      </div>\r\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"referReward\" placeholder=\"Enter amount\">\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-success px-3 py-1\" (click)=\"approvePost()\">Approve</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "vOJ3":
/*!**********************************************************!*\
  !*** ./src/app/admin/applicants/applicants.component.ts ***!
  \**********************************************************/
/*! exports provided: ApplicantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantsComponent", function() { return ApplicantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./applicants.component.html */ "QsQW");
/* harmony import */ var _applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applicants.component.scss */ "oYA+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ApplicantsComponent = class ApplicantsComponent {
    constructor() { }
    ngOnInit() { }
};
ApplicantsComponent.ctorParameters = () => [];
ApplicantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-applicants',
        template: _raw_loader_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ApplicantsComponent);



/***/ }),

/***/ "w3Pk":
/*!************************************************************!*\
  !*** ./src/app/admin/encashment/encashment.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmNhc2htZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "woDT":
/*!**************************************************************************!*\
  !*** ./src/app/admin/job-details-admin/job-details-admin.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZGV0YWlscy1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ySbg":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/employer-page/employer-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <ion-header style=\"position: fixed\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Organizations</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"row justify-content-center\" style=\"overflow: auto;\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"col-sm-12 m-2 d-flex justify-content-end\">\r\n      <button class=\"btn btn-primary m-2 position-fixed bg-violet text-sm px-3 py-1\" (click)=\"addOrganization()\"\r\n        style=\"z-index: 99;\">Add Organizations</button>\r\n    </div>\r\n    <div class=\"row justify-content-center\" style=\"overflow: auto; margin-top: 70px !important;\">\r\n      <div class=\"col-sm-4 m-3 pt-4\" *ngFor=\"let org of allOrganizations\">\r\n        <div class=\"card box-shadow w-100 p-3 btn btn-light\">\r\n          <img class=\"card-img-top center-parent mx-auto rounded-circle\" src=\"{{org.personalDetails.photo}}\"\r\n            style=\"height: 120px; width: 120px;\">\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{org.organizationDetails.organizationName}}</h5>\r\n            <p class=\"text-grey w-100\">Total job posts : <span class=\"text-grey\">10</span></p>\r\n            <div class=\"btn btn-primary bg-violet\" (click)=\"seeDetails(org)\">See details</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ }),

/***/ "z5Ne":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/encashment/encashment.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\r\n  <ion-header style=\"position: fixed\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Encashment</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"p-3 pt-5 mt-5 row justify-content-center\" *ngIf=\"!isServiceRunning\">\r\n    <div class=\"border-10 col-sm-5 m-2 bg-white p-3\" *ngFor=\"let feed of allRequests\">\r\n      <div class=\"mb-2\">\r\n        <span class=\"text-dark text-sm\">Name : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.name}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">Email : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.email}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">Job Title : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.jobTitle}}</span>\r\n      </div>\r\n      <div class=\"my-2\">\r\n        <span class=\"text-dark text-sm\">company Name : </span>\r\n        <span class=\"text-grey text-sm\">{{feed.companyName}}</span>\r\n      </div>\r\n      <div class=\"d-flex justify-content-between mt-4\">\r\n        <button class=\"btn btn-primary border-8 px-4 py-1\" (click)=\"openInGmail(feed.referenceNumber)\">View</button>\r\n        <span class=\"text-grey text-xs\">Submitted on {{feed.createdAt | date : 'dd MMMM yyyy'}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>");

/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map