"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_error_handler_1 = require("~/infrastructure/fetch-error-handler");
var AuthRepository = /** @class */ (function () {
    function AuthRepository(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }
    AuthRepository.prototype.getLoginUrl = function () {
        return this.apiEndpoint + "/auth";
    };
    AuthRepository.prototype.getRegisterUrl = function () {
        return this.apiEndpoint + "/register";
    };
    AuthRepository.prototype.login = function (loginModel, errorHandler, successHandler) {
        fetch(this.getLoginUrl(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loginModel: loginModel,
                grant_type: 'password'
            })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    AuthRepository.prototype.register = function (registerModel, errorHandler, successHandler) {
        fetch(this.getRegisterUrl(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                registerModel: registerModel
            })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    return AuthRepository;
}());
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsNEVBQXlFO0FBRXpFO0lBQ0Usd0JBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUcsQ0FBQztJQUVsQyxvQ0FBVyxHQUFuQjtRQUNFLE9BQVUsSUFBSSxDQUFDLFdBQVcsVUFBTyxDQUFDO0lBQ3BDLENBQUM7SUFDTyx1Q0FBYyxHQUF0QjtRQUNFLE9BQVUsSUFBSSxDQUFDLFdBQVcsY0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFTSw4QkFBSyxHQUFaLFVBQ0UsVUFBd0IsRUFDeEIsWUFBa0MsRUFDbEMsY0FBd0U7UUFFeEUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN4QixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixVQUFVLEVBQUUsVUFBVTthQUN2QixDQUFDO1NBQ0gsQ0FBQzthQUNDLElBQUksQ0FBQyx1Q0FBaUIsQ0FBQzthQUN2QixJQUFJLENBQUMsVUFBQyxJQUE4QztZQUNuRCxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsRUFBRTtZQUNQLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQ0UsYUFBOEIsRUFDOUIsWUFBa0MsRUFDbEMsY0FBd0U7UUFFeEUsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMzQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLGFBQWEsRUFBRSxhQUFhO2FBQzdCLENBQUM7U0FDSCxDQUFDO2FBQ0MsSUFBSSxDQUFDLHVDQUFpQixDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLElBQThDO1lBQ25ELGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO1lBQ1AsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB0QXV0aFJlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQge1xuICBQdEF1dGhUb2tlbixcbiAgUHRMb2dpbk1vZGVsLFxuICBQdFJlZ2lzdGVyTW9kZWwsXG4gIFB0VXNlclxufSBmcm9tICd+L2NvcmUvbW9kZWxzL2RvbWFpbic7XG5pbXBvcnQgeyBoYW5kbGVGZXRjaEVycm9ycyB9IGZyb20gJ34vaW5mcmFzdHJ1Y3R1cmUvZmV0Y2gtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjbGFzcyBBdXRoUmVwb3NpdG9yeSBpbXBsZW1lbnRzIFB0QXV0aFJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpRW5kcG9pbnQ6IHN0cmluZykge31cblxuICBwcml2YXRlIGdldExvZ2luVXJsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS9hdXRoYDtcbiAgfVxuICBwcml2YXRlIGdldFJlZ2lzdGVyVXJsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS9yZWdpc3RlcmA7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oXG4gICAgbG9naW5Nb2RlbDogUHRMb2dpbk1vZGVsLFxuICAgIGVycm9ySGFuZGxlcjogKGVycm9yOiBhbnkpID0+IHZvaWQsXG4gICAgc3VjY2Vzc0hhbmRsZXI6IChkYXRhOiB7IGF1dGhUb2tlbjogUHRBdXRoVG9rZW47IHVzZXI6IFB0VXNlciB9KSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGZldGNoKHRoaXMuZ2V0TG9naW5VcmwoKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxvZ2luTW9kZWw6IGxvZ2luTW9kZWwsXG4gICAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCdcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKGhhbmRsZUZldGNoRXJyb3JzKVxuICAgICAgLnRoZW4oKGRhdGE6IHsgYXV0aFRva2VuOiBQdEF1dGhUb2tlbjsgdXNlcjogUHRVc2VyIH0pID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKFxuICAgIHJlZ2lzdGVyTW9kZWw6IFB0UmVnaXN0ZXJNb2RlbCxcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAoZGF0YTogeyBhdXRoVG9rZW46IFB0QXV0aFRva2VuOyB1c2VyOiBQdFVzZXIgfSkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBmZXRjaCh0aGlzLmdldFJlZ2lzdGVyVXJsKCksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICByZWdpc3Rlck1vZGVsOiByZWdpc3Rlck1vZGVsXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVGZXRjaEVycm9ycylcbiAgICAgIC50aGVuKChkYXRhOiB7IGF1dGhUb2tlbjogUHRBdXRoVG9rZW47IHVzZXI6IFB0VXNlciB9KSA9PiB7XG4gICAgICAgIHN1Y2Nlc3NIYW5kbGVyKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgIGVycm9ySGFuZGxlcihlcik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19