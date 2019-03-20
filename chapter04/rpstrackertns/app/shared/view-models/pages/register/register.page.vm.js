"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emailValidator = require("email-validator");
var observable_1 = require("tns-core-modules/data/observable");
var strings_1 = require("~/core/models/domain/constants/strings");
var locator_1 = require("~/globals/dependencies/locator");
var observable_property_decorator_1 = require("~/shared/observable-property-decorator");
var RegisterViewModel = /** @class */ (function (_super) {
    __extends(RegisterViewModel, _super);
    function RegisterViewModel() {
        var _this = _super.call(this) || this;
        _this.fullName = strings_1.EMPTY_STRING;
        _this.nameEmpty = false;
        _this.email = strings_1.EMPTY_STRING;
        _this.emailValid = true;
        _this.emailEmpty = false;
        _this.password = strings_1.EMPTY_STRING;
        _this.passwordEmpty = false;
        _this.formValid = false;
        _this.loggingIn = false;
        _this.authService = locator_1.getAuthService();
        _this.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
            _this.validate(propertyChangeData.propertyName);
        });
        return _this;
    }
    RegisterViewModel.prototype.onRegisterTapHandler = function () {
        var _this = this;
        var registerModel = {
            username: this.email,
            password: this.password,
            fullName: this.fullName
        };
        return new Promise(function (resolve, reject) {
            _this.authService
                .register(registerModel)
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
    RegisterViewModel.prototype.validate = function (changedPropName) {
        switch (changedPropName) {
            case 'fullName':
                if (this.fullName.trim() === strings_1.EMPTY_STRING) {
                    this.set('nameEmpty', true);
                }
                else {
                    this.set('nameEmpty', false);
                }
                break;
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
                if (this.password.trim().length === 0) {
                    this.set('passwordEmpty', true);
                }
                else {
                    this.set('passwordEmpty', false);
                }
                break;
            default:
                return;
        }
        if (!this.nameEmpty &&
            this.emailValid &&
            !this.emailEmpty &&
            !this.passwordEmpty) {
            this.set('formValid', true);
        }
        else {
            this.set('formValid', false);
        }
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], RegisterViewModel.prototype, "loggingIn", void 0);
    return RegisterViewModel;
}(observable_1.Observable));
exports.RegisterViewModel = RegisterViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIucGFnZS52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBa0Q7QUFDbEQsK0RBRzBDO0FBRzFDLGtFQUFzRTtBQUN0RSwwREFBZ0U7QUFDaEUsd0ZBQTRFO0FBRTVFO0lBQXVDLHFDQUFVO0lBWS9DO1FBQUEsWUFDRSxpQkFBTyxTQVVSO1FBckJNLGNBQVEsR0FBRyxzQkFBWSxDQUFDO1FBQ3hCLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBSyxHQUFHLHNCQUFZLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUSxHQUFHLHNCQUFZLENBQUM7UUFDeEIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNJLGVBQVMsR0FBRyxLQUFLLENBQUM7UUFLN0MsS0FBSSxDQUFDLFdBQVcsR0FBRyx3QkFBYyxFQUFFLENBQUM7UUFFcEMsS0FBSSxDQUFDLEVBQUUsQ0FDTCx1QkFBVSxDQUFDLG1CQUFtQixFQUM5QixVQUFDLGtCQUFzQztZQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDRixDQUFDOztJQUNKLENBQUM7SUFFTSxnREFBb0IsR0FBM0I7UUFBQSxpQkFtQkM7UUFsQkMsSUFBTSxhQUFhLEdBQW9CO1lBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7UUFFRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLFdBQVc7aUJBQ2IsUUFBUSxDQUFDLGFBQWEsQ0FBQztpQkFDdkIsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO2dCQUNQLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG9DQUFRLEdBQWhCLFVBQWlCLGVBQXVCO1FBQ3RDLFFBQVEsZUFBZSxFQUFFO1lBQ3ZCLEtBQUssVUFBVTtnQkFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssc0JBQVksRUFBRTtvQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzdCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxNQUFNO1lBRVIsS0FBSyxPQUFPO2dCQUNWLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxzQkFBWSxFQUFFO29CQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzlCO3FCQUFNLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjtnQkFDRCxNQUFNO1lBRVIsS0FBSyxVQUFVO2dCQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDakM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELE1BQU07WUFFUjtnQkFDRSxPQUFPO1NBQ1Y7UUFDRCxJQUNFLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDZixJQUFJLENBQUMsVUFBVTtZQUNmLENBQUMsSUFBSSxDQUFDLFVBQVU7WUFDaEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUNuQjtZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFoRnFCO1FBQXJCLGtEQUFrQixFQUFFOzt3REFBMEI7SUFpRmpELHdCQUFDO0NBQUEsQUEzRkQsQ0FBdUMsdUJBQVUsR0EyRmhEO0FBM0ZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGVtYWlsVmFsaWRhdG9yIGZyb20gJ2VtYWlsLXZhbGlkYXRvcic7XG5pbXBvcnQge1xuICBPYnNlcnZhYmxlLFxuICBQcm9wZXJ0eUNoYW5nZURhdGFcbn0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUHRBdXRoU2VydmljZSB9IGZyb20gJ34vY29yZS9jb250cmFjdHMvc2VydmljZXMnO1xuaW1wb3J0IHsgUHRSZWdpc3Rlck1vZGVsIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4vY29uc3RhbnRzL3N0cmluZ3MnO1xuaW1wb3J0IHsgZ2V0QXV0aFNlcnZpY2UgfSBmcm9tICd+L2dsb2JhbHMvZGVwZW5kZW5jaWVzL2xvY2F0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSAnfi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZTogUHRBdXRoU2VydmljZTtcbiAgcHVibGljIGZ1bGxOYW1lID0gRU1QVFlfU1RSSU5HO1xuICBwdWJsaWMgbmFtZUVtcHR5ID0gZmFsc2U7XG4gIHB1YmxpYyBlbWFpbCA9IEVNUFRZX1NUUklORztcbiAgcHVibGljIGVtYWlsVmFsaWQgPSB0cnVlO1xuICBwdWJsaWMgZW1haWxFbXB0eSA9IGZhbHNlO1xuICBwdWJsaWMgcGFzc3dvcmQgPSBFTVBUWV9TVFJJTkc7XG4gIHB1YmxpYyBwYXNzd29yZEVtcHR5ID0gZmFsc2U7XG4gIHB1YmxpYyBmb3JtVmFsaWQgPSBmYWxzZTtcbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBsb2dnaW5nSW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGdldEF1dGhTZXJ2aWNlKCk7XG5cbiAgICB0aGlzLm9uKFxuICAgICAgT2JzZXJ2YWJsZS5wcm9wZXJ0eUNoYW5nZUV2ZW50LFxuICAgICAgKHByb3BlcnR5Q2hhbmdlRGF0YTogUHJvcGVydHlDaGFuZ2VEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMudmFsaWRhdGUocHJvcGVydHlDaGFuZ2VEYXRhLnByb3BlcnR5TmFtZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvblJlZ2lzdGVyVGFwSGFuZGxlcigpIHtcbiAgICBjb25zdCByZWdpc3Rlck1vZGVsOiBQdFJlZ2lzdGVyTW9kZWwgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgLnJlZ2lzdGVyKHJlZ2lzdGVyTW9kZWwpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZShjaGFuZ2VkUHJvcE5hbWU6IHN0cmluZykge1xuICAgIHN3aXRjaCAoY2hhbmdlZFByb3BOYW1lKSB7XG4gICAgICBjYXNlICdmdWxsTmFtZSc6XG4gICAgICAgIGlmICh0aGlzLmZ1bGxOYW1lLnRyaW0oKSA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgdGhpcy5zZXQoJ25hbWVFbXB0eScsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0KCduYW1lRW1wdHknLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgaWYgKHRoaXMuZW1haWwudHJpbSgpID09PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICAgICB0aGlzLnNldCgnZW1haWxFbXB0eScsIHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbFZhbGlkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZW1haWxWYWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCkpIHtcbiAgICAgICAgICB0aGlzLnNldCgnZW1haWxWYWxpZCcsIHRydWUpO1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbEVtcHR5JywgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbFZhbGlkJywgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2V0KCdlbWFpbEVtcHR5JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnNldCgncGFzc3dvcmRFbXB0eScsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0KCdwYXNzd29yZEVtcHR5JywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgICF0aGlzLm5hbWVFbXB0eSAmJlxuICAgICAgdGhpcy5lbWFpbFZhbGlkICYmXG4gICAgICAhdGhpcy5lbWFpbEVtcHR5ICYmXG4gICAgICAhdGhpcy5wYXNzd29yZEVtcHR5XG4gICAgKSB7XG4gICAgICB0aGlzLnNldCgnZm9ybVZhbGlkJywgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0KCdmb3JtVmFsaWQnLCBmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=