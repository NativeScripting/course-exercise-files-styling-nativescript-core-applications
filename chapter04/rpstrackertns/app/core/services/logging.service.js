"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggingService = /** @class */ (function () {
    function LoggingService(loggingRepo) {
        this.loggingRepo = loggingRepo;
    }
    LoggingService.prototype.log = function (message) {
        this.loggingRepo.log(message);
    };
    LoggingService.prototype.warn = function (message) {
        this.loggingRepo.warn(message);
    };
    LoggingService.prototype.error = function (message) {
        this.loggingRepo.error(message);
    };
    return LoggingService;
}());
exports.LoggingService = LoggingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDRSx3QkFBb0IsV0FBZ0M7UUFBaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQUcsQ0FBQztJQUVqRCw0QkFBRyxHQUFWLFVBQVcsT0FBZTtRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sNkJBQUksR0FBWCxVQUFZLE9BQWU7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLDhCQUFLLEdBQVosVUFBYSxPQUFlO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdExvZ2dpbmdSZXBvc2l0b3J5IH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgUHRMb2dnaW5nU2VydmljZSB9IGZyb20gJ34vY29yZS9jb250cmFjdHMvc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2UgaW1wbGVtZW50cyBQdExvZ2dpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnaW5nUmVwbzogUHRMb2dnaW5nUmVwb3NpdG9yeSkge31cblxuICBwdWJsaWMgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2luZ1JlcG8ubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnaW5nUmVwby53YXJuKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2luZ1JlcG8uZXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==