"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const LOCAL_USERS = 'LOCAL_USERS';
var UserService = /** @class */ (function () {
    function UserService(loggingService, userRepo, appStateService) {
        this.loggingService = loggingService;
        this.userRepo = userRepo;
        this.appStateService = appStateService;
    }
    UserService.prototype.getLocalUsers = function () {
        // return this.storageService.getItem<PtUser[]>(LOCAL_USERS);
        return this.appStateService.getStateItem('users');
    };
    UserService.prototype.fetchUsers = function (refresh) {
        var _this = this;
        var localUsers = this.getLocalUsers();
        if (localUsers.length === 0 || refresh) {
            return new Promise(function (resolve, reject) {
                _this.userRepo.fetchUsers(function (error) {
                    _this.loggingService.error('Fetching users failed');
                    reject(error);
                }, function (users) {
                    users.forEach(function (u) {
                        u.avatar = _this.userRepo.apiEndpoint + "/photo/" + u.id;
                    });
                    // this.storageService.setItem(LOCAL_USERS, users);
                    _this.appStateService.setStateItem('users', users);
                    resolve(users);
                });
            });
        }
        else {
            return Promise.resolve(localUsers);
        }
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EscUNBQXFDO0FBRXJDO0lBQ0UscUJBQ1UsY0FBZ0MsRUFDaEMsUUFBMEIsRUFDMUIsZUFBa0M7UUFGbEMsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtJQUN6QyxDQUFDO0lBRUcsbUNBQWEsR0FBcEI7UUFDRSw2REFBNkQ7UUFDN0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsT0FBaUI7UUFBbkMsaUJBdUJDO1FBdEJDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV4QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUN0QyxPQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzNDLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUN0QixVQUFBLEtBQUs7b0JBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLEVBQ0QsVUFBQyxLQUFlO29CQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3dCQUNiLENBQUMsQ0FBQyxNQUFNLEdBQU0sS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLGVBQVUsQ0FBQyxDQUFDLEVBQUksQ0FBQztvQkFDMUQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsbURBQW1EO29CQUNuRCxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUNGLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgYXBwU3RvcmUgfSBmcm9tICd+L2NvcmUvYXBwLXN0b3JlJztcbmltcG9ydCB7IFB0VXNlclJlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQge1xuICBQdEFwcFN0YXRlU2VydmljZSxcbiAgUHRMb2dnaW5nU2VydmljZSxcbiAgUHRVc2VyU2VydmljZVxufSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3NlcnZpY2VzJztcbmltcG9ydCB7IFB0VXNlciB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluJztcblxuLy8gY29uc3QgTE9DQUxfVVNFUlMgPSAnTE9DQUxfVVNFUlMnO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgaW1wbGVtZW50cyBQdFVzZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnaW5nU2VydmljZTogUHRMb2dnaW5nU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJSZXBvOiBQdFVzZXJSZXBvc2l0b3J5LFxuICAgIHByaXZhdGUgYXBwU3RhdGVTZXJ2aWNlOiBQdEFwcFN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGdldExvY2FsVXNlcnMoKSB7XG4gICAgLy8gcmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbTxQdFVzZXJbXT4oTE9DQUxfVVNFUlMpO1xuICAgIHJldHVybiB0aGlzLmFwcFN0YXRlU2VydmljZS5nZXRTdGF0ZUl0ZW0oJ3VzZXJzJyk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VycyhyZWZyZXNoPzogYm9vbGVhbik6IFByb21pc2U8UHRVc2VyW10+IHtcbiAgICBjb25zdCBsb2NhbFVzZXJzID0gdGhpcy5nZXRMb2NhbFVzZXJzKCk7XG5cbiAgICBpZiAobG9jYWxVc2Vycy5sZW5ndGggPT09IDAgfHwgcmVmcmVzaCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFB0VXNlcltdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMudXNlclJlcG8uZmV0Y2hVc2VycyhcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlLmVycm9yKCdGZXRjaGluZyB1c2VycyBmYWlsZWQnKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAodXNlcnM6IFB0VXNlcltdKSA9PiB7XG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKHUgPT4ge1xuICAgICAgICAgICAgICB1LmF2YXRhciA9IGAke3RoaXMudXNlclJlcG8uYXBpRW5kcG9pbnR9L3Bob3RvLyR7dS5pZH1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oTE9DQUxfVVNFUlMsIHVzZXJzKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTZXJ2aWNlLnNldFN0YXRlSXRlbSgndXNlcnMnLCB1c2Vycyk7XG4gICAgICAgICAgICByZXNvbHZlKHVzZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2NhbFVzZXJzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==