"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appSettings = require("tns-core-modules/application-settings");
var StorageRepository = /** @class */ (function () {
    function StorageRepository() {
    }
    StorageRepository.prototype.setItem = function (key, value) {
        var valueStr = JSON.stringify(value);
        appSettings.setString(key, valueStr);
    };
    StorageRepository.prototype.getItem = function (key) {
        var valueStr = appSettings.getString(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        }
        else {
            return undefined;
        }
    };
    StorageRepository.prototype.removeItem = function (key) {
        appSettings.remove(key);
    };
    StorageRepository.prototype.clearAll = function () {
        appSettings.clear();
    };
    return StorageRepository;
}());
exports.StorageRepository = StorageRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQXFFO0FBR3JFO0lBQUE7SUFzQkEsQ0FBQztJQXJCUSxtQ0FBTyxHQUFkLFVBQWtCLEdBQVcsRUFBRSxLQUFRO1FBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBa0IsR0FBVztRQUMzQixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFTSxzQ0FBVSxHQUFqQixVQUFrQixHQUFXO1FBQzNCLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLG9DQUFRLEdBQWY7UUFDRSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQztBQXRCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCB7IFB0U3RvcmFnZVJlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlUmVwb3NpdG9yeSBpbXBsZW1lbnRzIFB0U3RvcmFnZVJlcG9zaXRvcnkge1xuICBwdWJsaWMgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZVN0ciA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoa2V5LCB2YWx1ZVN0cik7XG4gIH1cblxuICBwdWJsaWMgZ2V0SXRlbTxUPihrZXk6IHN0cmluZyk6IFQge1xuICAgIGNvbnN0IHZhbHVlU3RyID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKGtleSk7XG4gICAgaWYgKHZhbHVlU3RyKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZVN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBhcHBTZXR0aW5ncy5yZW1vdmUoa2V5KTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICBhcHBTZXR0aW5ncy5jbGVhcigpO1xuICB9XG59XG4iXX0=