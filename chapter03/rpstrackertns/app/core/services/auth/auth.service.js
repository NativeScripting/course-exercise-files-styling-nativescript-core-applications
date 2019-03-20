"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = require("~/core/models/domain/constants/strings");
var services_1 = require("~/core/services");
// const CURRENT_USER_KEY = 'CURRENT_USER_KEY';
var AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(loggingService, authRepo, storageService, appStateService) {
        this.loggingService = loggingService;
        this.authRepo = authRepo;
        this.storageService = storageService;
        this.appStateService = appStateService;
    }
    AuthService.prototype.getToken = function () {
        return this.storageService.getItem(AUTH_TOKEN_KEY);
    };
    AuthService.prototype.setToken = function (authToken) {
        this.storageService.setItem(AUTH_TOKEN_KEY, authToken);
    };
    AuthService.prototype.setCurrentUser = function (ptUser) {
        ptUser.avatar = services_1.getUserAvatarUrl(this.authRepo.apiEndpoint, ptUser.id);
        // this.storageService.setItem<PtUser>(CURRENT_USER_KEY, ptUser);
        this.appStateService.setStateItem('currentUser', ptUser);
        // appStore.set('currentUser', ptUser);
    };
    AuthService.prototype.getCurrentUser = function () {
        // const user = this.storageService.getItem<PtUser>(CURRENT_USER_KEY);
        var user = this.appStateService.getStateItem('currentUser');
        // if (!appStore.value.currentUser && user) {
        //   appStore.set('currentUser', user);
        // }
        return user;
    };
    AuthService.prototype.getCurrentUserId = function () {
        var user = this.getCurrentUser();
        if (user) {
            return user.id;
        }
        else {
            return undefined;
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var hasToken = !!this.getToken();
        var hasCurrentUser = !!this.getCurrentUser();
        return hasToken && hasCurrentUser;
    };
    AuthService.prototype.login = function (loginModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authRepo.login(loginModel, function (error) {
                _this.loggingService.error('Login failed.');
                reject(error);
            }, function (data) {
                _this.setToken(data.authToken);
                _this.setCurrentUser(data.user);
                // Simulate waiting
                setTimeout(function () {
                    resolve(_this.getCurrentUser());
                }, 1000);
            });
        });
    };
    AuthService.prototype.register = function (registerModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authRepo.register(registerModel, function (error) {
                _this.loggingService.error('Registration failed');
                reject(error);
            }, function (data) {
                _this.setToken(data.authToken);
                _this.setCurrentUser(data.user);
                resolve(_this.getCurrentUser());
            });
        });
    };
    AuthService.prototype.logout = function () {
        this.setToken({
            access_token: strings_1.EMPTY_STRING,
            dateExpires: new Date()
        });
        // this.storageService.setItem(CURRENT_USER_KEY, EMPTY_STRING);
        this.appStateService.setStateItem('currentUser', undefined);
        return Promise.resolve();
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBY0Esa0VBQXNFO0FBQ3RFLDRDQUFtRDtBQUVuRCwrQ0FBK0M7QUFDL0MsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFFeEM7SUFDRSxxQkFDVSxjQUFnQyxFQUNoQyxRQUEwQixFQUMxQixjQUFnQyxFQUNoQyxlQUFrQztRQUhsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtJQUN6QyxDQUFDO0lBRUksOEJBQVEsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFjLGNBQWMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyw4QkFBUSxHQUFoQixVQUFpQixTQUFzQjtRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBYyxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVPLG9DQUFjLEdBQXRCLFVBQXVCLE1BQVc7UUFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRywyQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkUsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCx1Q0FBdUM7SUFDekMsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0Usc0VBQXNFO1FBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELDZDQUE2QztRQUM3Qyx1Q0FBdUM7UUFDdkMsSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNFLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUVuQyxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRU0sZ0NBQVUsR0FBakI7UUFDRSxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsT0FBTyxRQUFRLElBQUksY0FBYyxDQUFDO0lBQ3BDLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsVUFBd0I7UUFBckMsaUJBbUJDO1FBbEJDLE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDakIsVUFBVSxFQUNWLFVBQUEsS0FBSztnQkFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFDRCxVQUFDLElBQThDO2dCQUM3QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9CLG1CQUFtQjtnQkFDbkIsVUFBVSxDQUFDO29CQUNULE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBUSxHQUFmLFVBQWdCLGFBQThCO1FBQTlDLGlCQWVDO1FBZEMsT0FBTyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3pDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixhQUFhLEVBQ2IsVUFBQSxLQUFLO2dCQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQ0QsVUFBQyxJQUE4QztnQkFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLFlBQVksRUFBRSxzQkFBWTtZQUMxQixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBL0ZELElBK0ZDO0FBL0ZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICd+L2NvcmUvYXBwLXN0b3JlJztcbmltcG9ydCB7IFB0QXV0aFJlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQge1xuICBQdEFwcFN0YXRlU2VydmljZSxcbiAgUHRBdXRoU2VydmljZSxcbiAgUHRMb2dnaW5nU2VydmljZSxcbiAgUHRTdG9yYWdlU2VydmljZVxufSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3NlcnZpY2VzJztcbmltcG9ydCB7XG4gIFB0QXV0aFRva2VuLFxuICBQdExvZ2luTW9kZWwsXG4gIFB0UmVnaXN0ZXJNb2RlbCxcbiAgUHRVc2VyXG59IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluJztcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL2NvbnN0YW50cy9zdHJpbmdzJztcbmltcG9ydCB7IGdldFVzZXJBdmF0YXJVcmwgfSBmcm9tICd+L2NvcmUvc2VydmljZXMnO1xuXG4vLyBjb25zdCBDVVJSRU5UX1VTRVJfS0VZID0gJ0NVUlJFTlRfVVNFUl9LRVknO1xuY29uc3QgQVVUSF9UT0tFTl9LRVkgPSAnQVVUSF9UT0tFTl9LRVknO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2UgaW1wbGVtZW50cyBQdEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnaW5nU2VydmljZTogUHRMb2dnaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhSZXBvOiBQdEF1dGhSZXBvc2l0b3J5LFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFB0U3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBTdGF0ZVNlcnZpY2U6IFB0QXBwU3RhdGVTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFRva2VuKCk6IFB0QXV0aFRva2VuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtPFB0QXV0aFRva2VuPihBVVRIX1RPS0VOX0tFWSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRva2VuKGF1dGhUb2tlbjogUHRBdXRoVG9rZW4pIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW08UHRBdXRoVG9rZW4+KEFVVEhfVE9LRU5fS0VZLCBhdXRoVG9rZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJyZW50VXNlcihwdFVzZXI6IGFueSkge1xuICAgIHB0VXNlci5hdmF0YXIgPSBnZXRVc2VyQXZhdGFyVXJsKHRoaXMuYXV0aFJlcG8uYXBpRW5kcG9pbnQsIHB0VXNlci5pZCk7XG4gICAgLy8gdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtPFB0VXNlcj4oQ1VSUkVOVF9VU0VSX0tFWSwgcHRVc2VyKTtcbiAgICB0aGlzLmFwcFN0YXRlU2VydmljZS5zZXRTdGF0ZUl0ZW0oJ2N1cnJlbnRVc2VyJywgcHRVc2VyKTtcbiAgICAvLyBhcHBTdG9yZS5zZXQoJ2N1cnJlbnRVc2VyJywgcHRVc2VyKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VXNlcigpOiBQdFVzZXIge1xuICAgIC8vIGNvbnN0IHVzZXIgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW08UHRVc2VyPihDVVJSRU5UX1VTRVJfS0VZKTtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5hcHBTdGF0ZVNlcnZpY2UuZ2V0U3RhdGVJdGVtKCdjdXJyZW50VXNlcicpO1xuICAgIC8vIGlmICghYXBwU3RvcmUudmFsdWUuY3VycmVudFVzZXIgJiYgdXNlcikge1xuICAgIC8vICAgYXBwU3RvcmUuc2V0KCdjdXJyZW50VXNlcicsIHVzZXIpO1xuICAgIC8vIH1cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VXNlcklkKCkge1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG5cbiAgICBpZiAodXNlcikge1xuICAgICAgcmV0dXJuIHVzZXIuaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaGFzVG9rZW4gPSAhIXRoaXMuZ2V0VG9rZW4oKTtcbiAgICBjb25zdCBoYXNDdXJyZW50VXNlciA9ICEhdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIHJldHVybiBoYXNUb2tlbiAmJiBoYXNDdXJyZW50VXNlcjtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbihsb2dpbk1vZGVsOiBQdExvZ2luTW9kZWwpOiBQcm9taXNlPFB0VXNlcj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxQdFVzZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuYXV0aFJlcG8ubG9naW4oXG4gICAgICAgIGxvZ2luTW9kZWwsXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmVycm9yKCdMb2dpbiBmYWlsZWQuJyk7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGRhdGE6IHsgYXV0aFRva2VuOiBQdEF1dGhUb2tlbjsgdXNlcjogUHRVc2VyIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnNldFRva2VuKGRhdGEuYXV0aFRva2VuKTtcbiAgICAgICAgICB0aGlzLnNldEN1cnJlbnRVc2VyKGRhdGEudXNlcik7XG5cbiAgICAgICAgICAvLyBTaW11bGF0ZSB3YWl0aW5nXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VycmVudFVzZXIoKSk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIocmVnaXN0ZXJNb2RlbDogUHRSZWdpc3Rlck1vZGVsKTogUHJvbWlzZTxQdFVzZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UHRVc2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmF1dGhSZXBvLnJlZ2lzdGVyKFxuICAgICAgICByZWdpc3Rlck1vZGVsLFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5sb2dnaW5nU2VydmljZS5lcnJvcignUmVnaXN0cmF0aW9uIGZhaWxlZCcpO1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0sXG4gICAgICAgIChkYXRhOiB7IGF1dGhUb2tlbjogUHRBdXRoVG9rZW47IHVzZXI6IFB0VXNlciB9KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRUb2tlbihkYXRhLmF1dGhUb2tlbik7XG4gICAgICAgICAgdGhpcy5zZXRDdXJyZW50VXNlcihkYXRhLnVzZXIpO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRDdXJyZW50VXNlcigpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5zZXRUb2tlbih7XG4gICAgICBhY2Nlc3NfdG9rZW46IEVNUFRZX1NUUklORyxcbiAgICAgIGRhdGVFeHBpcmVzOiBuZXcgRGF0ZSgpXG4gICAgfSk7XG4gICAgLy8gdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKENVUlJFTlRfVVNFUl9LRVksIEVNUFRZX1NUUklORyk7XG4gICAgdGhpcy5hcHBTdGF0ZVNlcnZpY2Uuc2V0U3RhdGVJdGVtKCdjdXJyZW50VXNlcicsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iXX0=