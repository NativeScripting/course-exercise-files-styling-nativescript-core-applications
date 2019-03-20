"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailValidator = require("email-validator");
var observable_1 = require("tns-core-modules/data/observable");
var strings_1 = require("~/core/models/domain/constants/strings");
var locator_1 = require("~/globals/dependencies/locator");
var observable_property_decorator_1 = require("~/shared/observable-property-decorator");
var LoginViewModel = /** @class */ (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel() {
        var _this = _super.call(this) || this;
        _this.email = 'alex@nuvious.com';
        _this.emailValid = true;
        _this.emailEmpty = false;
        _this.password = 'nuvious';
        _this.passwordEmpty = false;
        _this.formValid = true;
        _this.loggingIn = false;
        _this.authService = locator_1.getAuthService();
        _this.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
            _this.validate(propertyChangeData.propertyName);
        });
        return _this;
    }
    LoginViewModel.prototype.onLoginTapHandler = function () {
        var _this = this;
        var loginModel = {
            username: this.email,
            password: this.password
        };
        this.loggingIn = true;
        return new Promise(function (resolve, reject) {
            _this.authService
                .login(loginModel)
                .then(function () {
                _this.loggingIn = false;
                resolve();
            })
                .catch(function (er) {
                _this.loggingIn = false;
                reject(er);
            });
        });
    };
    LoginViewModel.prototype.validate = function (changedPropName) {
        switch (changedPropName) {
            case 'email':
                if (this.email.trim() === strings_1.EMPTY_STRING) {
                    this.set('emailEmpty', true);
                    this.set('emailValid', true);
                }
                else if (emailValidator.validate(this.email)) {
                    this.set('emailValid', true);
                    this.set('emailEmpty', false);
                }
                else {
                    this.set('emailValid', false);
                    this.set('emailEmpty', false);
                }
                break;
            case 'password':
                if (this.password.trim() === strings_1.EMPTY_STRING) {
                    this.set('passwordEmpty', true);
                }
                else {
                    this.set('passwordEmpty', false);
                }
                break;
            default:
                return;
        }
        if (this.emailValid && !this.emailEmpty && !this.passwordEmpty) {
            this.set('formValid', true);
        }
        else {
            this.set('formValid', false);
        }
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], LoginViewModel.prototype, "loggingIn", void 0);
    return LoginViewModel;
}(observable_1.Observable));
exports.LoginViewModel = LoginViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ucGFnZS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBa0Q7QUFDbEQsK0RBRzBDO0FBRzFDLGtFQUFzRTtBQUN0RSwwREFBZ0U7QUFDaEUsd0ZBQTRFO0FBRTVFO0lBQW9DLGtDQUFVO0lBVTVDO1FBQUEsWUFDRSxpQkFBTyxTQVNSO1FBbEJNLFdBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUMzQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDSyxlQUFTLEdBQUcsS0FBSyxDQUFDO1FBSzdDLEtBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQWMsRUFBRSxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxFQUFFLENBQ0wsdUJBQVUsQ0FBQyxtQkFBbUIsRUFDOUIsVUFBQyxrQkFBc0M7WUFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0YsQ0FBQzs7SUFDSixDQUFDO0lBRU0sMENBQWlCLEdBQXhCO1FBQUEsaUJBb0JDO1FBbkJDLElBQU0sVUFBVSxHQUFpQjtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLFdBQVc7aUJBQ2IsS0FBSyxDQUFDLFVBQVUsQ0FBQztpQkFDakIsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO2dCQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlDQUFRLEdBQWhCLFVBQWlCLGVBQXVCO1FBQ3RDLFFBQVEsZUFBZSxFQUFFO1lBQ3ZCLEtBQUssT0FBTztnQkFDVixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssc0JBQVksRUFBRTtvQkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtxQkFBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQy9CO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsTUFBTTtZQUVSLEtBQUssVUFBVTtnQkFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssc0JBQVksRUFBRTtvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2pDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxNQUFNO1lBRVI7Z0JBQ0UsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDOUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQW5FcUI7UUFBckIsa0RBQWtCLEVBQUU7O3FEQUEwQjtJQW9FakQscUJBQUM7Q0FBQSxBQTVFRCxDQUFvQyx1QkFBVSxHQTRFN0M7QUE1RVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBlbWFpbFZhbGlkYXRvciBmcm9tICdlbWFpbC12YWxpZGF0b3InO1xuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbiAgUHJvcGVydHlDaGFuZ2VEYXRhXG59IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFB0QXV0aFNlcnZpY2UgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3NlcnZpY2VzJztcbmltcG9ydCB7IFB0TG9naW5Nb2RlbCB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluJztcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL2NvbnN0YW50cy9zdHJpbmdzJztcbmltcG9ydCB7IGdldEF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9nbG9iYWxzL2RlcGVuZGVuY2llcy9sb2NhdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gJ34vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yJztcblxuZXhwb3J0IGNsYXNzIExvZ2luVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IFB0QXV0aFNlcnZpY2U7XG4gIHB1YmxpYyBlbWFpbCA9ICdhbGV4QG51dmlvdXMuY29tJztcbiAgcHVibGljIGVtYWlsVmFsaWQgPSB0cnVlO1xuICBwdWJsaWMgZW1haWxFbXB0eSA9IGZhbHNlO1xuICBwdWJsaWMgcGFzc3dvcmQgPSAnbnV2aW91cyc7XG4gIHB1YmxpYyBwYXNzd29yZEVtcHR5ID0gZmFsc2U7XG4gIHB1YmxpYyBmb3JtVmFsaWQgPSB0cnVlO1xuICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxvZ2dpbmdJbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gZ2V0QXV0aFNlcnZpY2UoKTtcbiAgICB0aGlzLm9uKFxuICAgICAgT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LFxuICAgICAgKHByb3BlcnR5Q2hhbmdlRGF0YTogUHJvcGVydHlDaGFuZ2VEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMudmFsaWRhdGUocHJvcGVydHlDaGFuZ2VEYXRhLnByb3BlcnR5TmFtZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvZ2luVGFwSGFuZGxlcigpIHtcbiAgICBjb25zdCBsb2dpbk1vZGVsOiBQdExvZ2luTW9kZWwgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXG4gICAgfTtcblxuICAgIHRoaXMubG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgIC5sb2dpbihsb2dpbk1vZGVsKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGUoY2hhbmdlZFByb3BOYW1lOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGNoYW5nZWRQcm9wTmFtZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICBpZiAodGhpcy5lbWFpbC50cmltKCkgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbEVtcHR5JywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXQoJ2VtYWlsVmFsaWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbWFpbFZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLmVtYWlsKSkge1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbFZhbGlkJywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zZXQoJ2VtYWlsRW1wdHknLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXQoJ2VtYWlsVmFsaWQnLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zZXQoJ2VtYWlsRW1wdHknLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQudHJpbSgpID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICB0aGlzLnNldCgncGFzc3dvcmRFbXB0eScsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0KCdwYXNzd29yZEVtcHR5JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmVtYWlsVmFsaWQgJiYgIXRoaXMuZW1haWxFbXB0eSAmJiAhdGhpcy5wYXNzd29yZEVtcHR5KSB7XG4gICAgICB0aGlzLnNldCgnZm9ybVZhbGlkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KCdmb3JtVmFsaWQnLCBmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=