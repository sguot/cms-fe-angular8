webpackJsonp([7],{"1C0l":function(e,t){e.exports='\n<h4>测试用例</h4>\n<form nz-form [nzType]="\'horizontal\'" style="margin-top: 20px;">\n  <div nz-form-item nz-row >\n    <div nz-col [nzSm]="24" [nzXl]="24">\n      \n      <div nz-form-label nz-col [nzSpan]="4">\n        <label nz-form-item-required>测试状态码</label>\n      </div>\n\n      <div nz-form-control nz-col [nzSpan]="4">\n        <nz-input name="status" required [(ngModel)]="status" [nzSize]="\'large\'" pattern="^[1-5]\\d{2}$"></nz-input>\n      </div>\n\n      <div nz-col [nzSpan]="4" [nzOffset]="2">\n        <button nz-button nzType="primary" [nzSize]="\'large\'" (click)="testStatus()" >发送</button>\n      </div>\n\n    </div>\n  </div>\n  \n  <div nz-form-item nz-row style="border-top: 1px solid red;">\n    <div nz-col [nzSm]="24" [nzXl]="24">\n      <div nz-form-label nz-col [nzSpan]="4">\n        <label nz-form-item-required>文件上传测试</label>\n      </div>\n      <div nz-form-control nz-col [nzSpan]="8">\n        <app-upload-file [(ngModel)]="uploadFile" maxSize="100" name="uploadFile"></app-upload-file>\n      </div>\n\n      \x3c!-- <div nz-col [nzSpan]="4" [nzOffset]="2">\n        <button nz-button nzType="primary" [nzSize]="\'large\'" (click)="testStatus()" >发送</button>\n      </div> --\x3e\n\n    </div>\n  </div>\n\n  <div style="border-top: 1px solid red;">\n    <div nz-form-item nz-row >\n      <div nz-col [nzSm]="24" [nzXl]="24">\n        <div nz-form-label nz-col [nzSpan]="4">\n          <label nz-form-item-required>url</label>\n        </div>\n        <div nz-form-control nz-col [nzSpan]="12">\n          <nz-input name="urlObj" required [(ngModel)]="urlObj.url" [nzSize]="\'large\'" [nzPlaceHolder]="\'url(如：/user/123)\'" pattern="(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]"></nz-input>\n        </div>\n        <div nz-form-control nz-col [nzSpan]="2" [nzOffset]="1">\n          <nz-select name="method" required [(ngModel)]="urlObj.method" [nzSize]="\'large\'">\n            <nz-option nzLabel="GET" [nzValue]="\'GET\'"> </nz-option>\n            <nz-option nzLabel="POST" [nzValue]="\'POST\'"> </nz-option>\n            <nz-option nzLabel="PUT" [nzValue]="\'PUT\'"> </nz-option>\n            <nz-option nzLabel="DELETE" [nzValue]="\'DELETE\'"> </nz-option>\n          </nz-select>\n          <div nz-form-explain *ngIf="false">必须填写!</div>\n        </div>\n        <div nz-col [nzSpan]="4" [nzOffset]="1">\n          <button nz-button nzType="primary" [nzSize]="\'large\'" (click)="testUrl()" >发送</button>\n        </div>\n      </div>\n    </div>\n\n    <div nz-form-item nz-row >\n      <div nz-form-label nz-col [nzSpan]="4">\n          <label nz-form-item-required>参数(json格式)</label>\n        </div>\n      <div nz-form-control nz-col [nzSm]="16" [nzXl]="16">\n        <nz-input name="params" [(ngModel)]="urlObj.params" [nzRows]="4" [nzType]="\'textarea\'" nzPlaceHolder=\'如：{"id":123,"name":"keefe"}\' [nzSize]="\'large\'"></nz-input>\n      </div>\n    </div>\n    <div nz-form-item nz-row >\n      <div nz-col [nzSm]="16" [nzXl]="16" [nzOffset]="4">\n        <nz-input name="jsonData" [(ngModel)]="jsonData" [nzRows]="30" [nzType]="\'textarea\'" [nzPlaceHolder]="\'返回结果\'" [nzSize]="\'large\'"></nz-input>\n      </div>\n    </div>\n  </div>\n\n  <div nz-form-item nz-row>\n    <div nz-form-control nz-col [nzSpan]="20" [nzOffset]="2">\n      <button nz-button nzType="primary" [nzSize]="\'large\'">保存</button>\n    </div>\n  </div>\n\n</form>'},J1eI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.method="GET"}return e}();t.UrlModel=i},NdIj:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var o=n("WT6e"),r=function(){function e(){}return e=i([o.Component({selector:"app-demos-outlet",template:"<router-outlet></router-outlet>"})],e)}();t.OutletComponent=r},TR1v:function(e,t){e.exports='<div class="upload-file-wrap">\n    <div class="upload-file">\n        <label for="_bankLogo" class="bank-logo-label">\n        </label>\n        <input class="upload-file-input" id="_bankLogo" type="file" accpet="image/gif,image/png,image/jpeg,image/jpg,image/bmp"\n        (change)="fileChange($event)"/>\n        <input style="display:none;" type="text" [(ngModel)]="fileUrl">\n        <i *ngIf="uploading" class="file-uploading">正在上传...</i>\n    </div>\n    <div class="file-list">\n        <ng-container *ngIf="show">\n            <img [src]="imgSrc" alt="图片加载失败" title="点击预览" [preViewImg]="imgSrc"/>\n        </ng-container>\n    </div>\n    <div class="size-tips" *ngIf="maxSize">\n        图片大小不超过{{maxSize}}K\n    </div>\n</div>'},VtdR:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var o=n("WT6e"),r=n("bfOx"),l=n("ruzK"),a=n("NdIj"),s=[{path:"",component:a.OutletComponent,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:l.DemosComponent}]}],c=function(){function e(){}return e=i([o.NgModule({imports:[r.RouterModule.forChild(s)],exports:[r.RouterModule]})],e)}();t.DemosRouting=c},"XF6/":function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n("WT6e"),l=function(){function e(e){this.eleRef=e}return e.prototype.onClick=function(){this.preViewImgSrc&&document.body.appendChild(this.createModal())},e.prototype.ngOnInit=function(){},e.prototype.createModal=function(){return this.wrapEle||(this.wrapEle=document.createElement("div"),this.wrapEle.className="pre-view-wrap"),this.divEle?this.divEle.className="pre-view-content":(this.divEle=document.createElement("div"),this.divEle.className="pre-view-content"),this.btnEle||(this.btnEle=document.createElement("button"),this.btnEle.className="pre-close-btn"),this.imgEle||(this.imgEle=document.createElement("img"),this.imgEle.src=this.preViewImgSrc),this.divEle.appendChild(this.btnEle),this.divEle.appendChild(this.imgEle),this.wrapEle.appendChild(this.divEle),this.divEle.addEventListener("click",function(e){e.stopPropagation()}),this.wrapEle.addEventListener("click",this.closeModal.bind(this),!1),this.btnEle.addEventListener("click",this.closeModal.bind(this),!1),this.wrapEle},e.prototype.closeModal=function(e){this.divEle.className="pre-view-content view-fade-out",this.timer=setTimeout(function(){var e=document.getElementsByClassName("pre-view-wrap")[0];e&&document.body.removeChild(e)},300)},e.prototype.ngOnDestroy=function(){clearTimeout(this.timer)},i([r.Input("preViewImg"),o("design:type",String)],e.prototype,"preViewImgSrc",void 0),i([r.HostListener("click"),o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],e.prototype,"onClick",null),e=i([r.Directive({selector:"[preViewImg]"}),o("design:paramtypes",[r.ElementRef])],e)}();t.PreViewDirective=l},keBU:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n("ItHS"),l=n("WT6e"),a=n("7DMc"),s=n("inHK"),c=function(){function e(e,t){this.http=e,this.notification=t,this.baseUrl="/upload-file",this.show=!0,this.uploading=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return t=e,e.prototype.ngOnInit=function(){this.imgSrc||(this.imgSrc="",this.show=!1)},e.prototype.ngOnChanges=function(){this.show=!!this.baseUrl},e.prototype.fileChange=function(e){var t=this;if(e.target&&e.target.files.length>0){var n=new FileReader,i=e.target.files[0],o=new FormData;o.append("file",i),this.maxSize&&i.size>1024*this.maxSize?(e.target.value="",this.notification.warning("警告","图片大小超出"+this.maxSize+"K！")):(this.uploading=!0,this.http.post(this.baseUrl,o).finally(function(){return t.uploading=!1}).subscribe(function(e){n.onload=function(e){t.imgSrc=n.result,t.show=!0},n.readAsDataURL(i),t.onChange(e.data.path)},function(t){e.target.value=""}))}},Object.defineProperty(e.prototype,"fileUrl",{get:function(){return this._value},set:function(e){this._value!==e&&(void 0!==this._value&&null!==this._value||void 0!==e&&null!==e)&&e!==this._value&&(this._value=e,this.onChange(e))},enumerable:!0,configurable:!0}),e.prototype.writeValue=function(e){this.fileUrl=e},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},i([l.Input(),o("design:type",Object)],e.prototype,"imgSrc",void 0),i([l.Input(),o("design:type",Number)],e.prototype,"maxSize",void 0),i([l.ViewChild("preView"),o("design:type",l.ElementRef)],e.prototype,"preViewDiv",void 0),e=t=i([l.Component({selector:"app-upload-file",template:n("TR1v"),styles:["\n      .upload-file-wrap:after{\n        display: block;\n        content: '';\n        clear: both;\n      }\n      .upload-file-input {\n          position: absolute;\n          clip: rect(0 0 0 0);\n      }\n      label.bank-logo-label {\n          margin-right: 10px;\n          float: left;\n          position: relative;\n          border: 4px solid #ccc;\n          width: 80px;\n          height: 80px;\n          cursor: pointer;\n      }\n      label.bank-logo-label::before {\n          position: absolute;\n          content: '';\n          display: block;\n          width: 4px;\n          height: 60px;\n          background-color: #ccc;\n          top: 6px;\n          left: 34px;\n      }\n      label.bank-logo-label::after {\n          position: absolute;\n          content: '';\n          display: block;\n          width: 60px;\n          height: 4px;\n          background-color: #ccc;\n          top: 34px;\n          left: 6px;\n      }\n      .file-uploading{\n        z-index: 2;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 80px;\n        height: 80px;\n        background-color: rgba(255,255,255, 0.8);\n        font-style: normal;\n        text-align: center;\n        padding-top: 20px;\n      }\n\n      .file-list img{\n          cursor: pointer;\n        display: block;\n        float: left;\n        width: 80px;\n        height: 80px;\n        border:1px solid #ccc;\n      }\n    "],providers:[{provide:a.NG_VALUE_ACCESSOR,useExisting:l.forwardRef(function(){return t}),multi:!0}]}),o("design:paramtypes",[r.HttpClient,s.NzNotificationService])],e);var t}();t.UploadFileComponent=c},oaH7:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var o=n("Xjw4"),r=n("WT6e"),l=n("7DMc"),a=n("keBU"),s=n("XF6/"),c=function(){function e(){}return e=i([r.NgModule({imports:[o.CommonModule,l.FormsModule],declarations:[a.UploadFileComponent,s.PreViewDirective],providers:[],exports:[a.UploadFileComponent]})],e)}();t.UploadFileModule=c},ruzK:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n("ItHS"),l=n("WT6e"),a=n("inHK"),s=n("J1eI"),c=n("DqaG"),p=function(){function e(e,t,n){this.http=e,this.params=t,this.notification=n,this.urlObj=new s.UrlModel}return e.prototype.ngOnInit=function(){},e.prototype.testStatus=function(){if(!(this.status>=200&&this.status<600))return void this.notification.warning("警告","请输入正确格式的状态码");this.http.post("/test/status/"+this.status,{}).subscribe(function(e){},function(e){})},e.prototype.testUrl=function(){var e=this;if(!this.urlObj.url||this.urlObj.url&&0!==this.urlObj.url.indexOf("/"))return void this.notification.warning("警告","请输入正确格式的url");var t=null,n=!1;try{if(this.urlObj.params&&"object"!=typeof(t=JSON.parse(this.urlObj.params)))throw new Error("not json")}catch(e){n=!0,this.notification.warning("警告","请输入正确的json格式")}n||this.requestUrl(t).subscribe(function(t){e.jsonData=JSON.stringify(t,null,"    ")},function(e){})},e.prototype.requestUrl=function(e){var t;switch(this.urlObj.method){case"POST":t=this.http.post(this.urlObj.url,e);break;case"PUT":t=this.http.put(this.urlObj.url,e);break;case"DELET":t=this.http.delete(this.urlObj.url);break;default:t=this.http.get(this.urlObj.url+"?"+this.params.fmtpages(e))}return t},e=i([l.Component({selector:"app-demos",template:n("1C0l")}),o("design:paramtypes",[r.HttpClient,c.Params,a.NzNotificationService])],e)}();t.DemosComponent=p},vtGo:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,l=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var o=n("Xjw4"),r=n("WT6e"),l=n("7DMc"),a=n("inHK"),s=n("ruzK"),c=n("VtdR"),p=n("NdIj"),u=n("oaH7"),d=function(){function e(){}return e=i([r.NgModule({imports:[l.FormsModule,l.ReactiveFormsModule,u.UploadFileModule,o.CommonModule,c.DemosRouting,a.NgZorroAntdModule.forRoot()],declarations:[p.OutletComponent,s.DemosComponent],providers:[]})],e)}();t.DemosModule=d}});