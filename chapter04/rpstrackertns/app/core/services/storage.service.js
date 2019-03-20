"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageService = /** @class */ (function () {
    function StorageService(storageRepo) {
        this.storageRepo = storageRepo;
    }
    StorageService.prototype.setItem = function (key, value) {
        this.storageRepo.setItem(key, value);
    };
    StorageService.prototype.getItem = function (key) {
        return this.storageRepo.getItem(key);
    };
    StorageService.prototype.removeItem = function (key) {
        this.storageRepo.removeItem(key);
    };
    StorageService.prototype.clearAll = function () {
        this.storageRepo.clearAll();
    };
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFDRSx3QkFBb0IsV0FBZ0M7UUFBaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO0lBQUcsQ0FBQztJQUVqRCxnQ0FBTyxHQUFkLFVBQWtCLEdBQVcsRUFBRSxLQUFRO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sZ0NBQU8sR0FBZCxVQUFrQixHQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLG1DQUFVLEdBQWpCLFVBQWtCLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNNLGlDQUFRLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdFN0b3JhZ2VSZXBvc2l0b3J5IH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgUHRTdG9yYWdlU2VydmljZSB9IGZyb20gJ34vY29yZS9jb250cmFjdHMvc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2UgaW1wbGVtZW50cyBQdFN0b3JhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlUmVwbzogUHRTdG9yYWdlUmVwb3NpdG9yeSkge31cblxuICBwdWJsaWMgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2VSZXBvLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlUmVwby5nZXRJdGVtKGtleSk7XG4gIH1cbiAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2VSZXBvLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxuICBwdWJsaWMgY2xlYXJBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yYWdlUmVwby5jbGVhckFsbCgpO1xuICB9XG59XG4iXX0=