"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_error_handler_1 = require("~/infrastructure/fetch-error-handler");
var UserRepository = /** @class */ (function () {
    function UserRepository(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }
    UserRepository.prototype.getUsersUrl = function () {
        return this.apiEndpoint + "/users";
    };
    UserRepository.prototype.fetchUsers = function (errorHandler, successHandler) {
        fetch(this.getUsersUrl(), {
            method: 'GET'
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNEVBQXlFO0FBRXpFO0lBQ0Usd0JBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUcsQ0FBQztJQUVsQyxvQ0FBVyxHQUFuQjtRQUNFLE9BQVUsSUFBSSxDQUFDLFdBQVcsV0FBUSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxtQ0FBVSxHQUFqQixVQUNFLFlBQWtDLEVBQ2xDLGNBQXdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDeEIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDO2FBQ0MsSUFBSSxDQUFDLHVDQUFpQixDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsRUFBRTtZQUNQLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdFVzZXJSZXBvc2l0b3J5IH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgUHRVc2VyIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuaW1wb3J0IHsgaGFuZGxlRmV0Y2hFcnJvcnMgfSBmcm9tICd+L2luZnJhc3RydWN0dXJlL2ZldGNoLWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgaW1wbGVtZW50cyBQdFVzZXJSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IocHVibGljIGFwaUVuZHBvaW50OiBzdHJpbmcpIHt9XG5cbiAgcHJpdmF0ZSBnZXRVc2Vyc1VybCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vdXNlcnNgO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlcnMoXG4gICAgZXJyb3JIYW5kbGVyOiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcbiAgICBzdWNjZXNzSGFuZGxlcjogKGRhdGE6IFB0VXNlcltdKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGZldGNoKHRoaXMuZ2V0VXNlcnNVcmwoKSwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVGZXRjaEVycm9ycylcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzdWNjZXNzSGFuZGxlcihkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXIgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXIoZXIpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==