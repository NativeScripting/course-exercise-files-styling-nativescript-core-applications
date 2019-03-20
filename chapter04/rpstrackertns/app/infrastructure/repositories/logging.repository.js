"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("~/core/models/enums");
// At this time all logging is to the console.
// Other third party or custom logging methods can be plugged in here.
var LoggingRepository = /** @class */ (function () {
    function LoggingRepository(loggingEnabled, loggingLevel) {
        this.loggingEnabled = loggingEnabled;
        this.loggingLevel = loggingLevel;
        this.logs = [];
    }
    LoggingRepository.prototype.log = function (message) {
        if (this.loggingEnabled && this.loggingLevel === enums_1.LoggingLevelEnum.Debug) {
            this.logs.push({ message: message, level: enums_1.LoggingLevelEnum.Log });
            console.log(message);
        }
    };
    LoggingRepository.prototype.warn = function (message) {
        if (this.loggingEnabled && this.loggingLevel === enums_1.LoggingLevelEnum.Debug) {
            this.logs.push({ message: message, level: enums_1.LoggingLevelEnum.Warning });
            console.warn(message);
        }
    };
    LoggingRepository.prototype.error = function (message) {
        if (this.loggingEnabled) {
            this.logs.push({ message: message, level: enums_1.LoggingLevelEnum.Error });
            console.error(message);
        }
    };
    return LoggingRepository;
}());
exports.LoggingRepository = LoggingRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2luZy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2luZy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkNBQXVEO0FBT3ZELDhDQUE4QztBQUM5QyxzRUFBc0U7QUFDdEU7SUFHRSwyQkFDVSxjQUF1QixFQUN2QixZQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFKaEMsU0FBSSxHQUFlLEVBQUUsQ0FBQztJQUsxQixDQUFDO0lBRUUsK0JBQUcsR0FBVixVQUFXLE9BQWU7UUFDeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssd0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsd0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVNLGdDQUFJLEdBQVgsVUFBWSxPQUFlO1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLHdCQUFnQixDQUFDLEtBQUssRUFBRTtZQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLHdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdEUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFTSxpQ0FBSyxHQUFaLFVBQWEsT0FBZTtRQUMxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSx3QkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB0TG9nZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBMb2dnaW5nTGV2ZWxFbnVtIH0gZnJvbSAnfi9jb3JlL21vZGVscy9lbnVtcyc7XG5cbmludGVyZmFjZSBMb2dFbnRyeSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgbGV2ZWw6IExvZ2dpbmdMZXZlbEVudW07XG59XG5cbi8vIEF0IHRoaXMgdGltZSBhbGwgbG9nZ2luZyBpcyB0byB0aGUgY29uc29sZS5cbi8vIE90aGVyIHRoaXJkIHBhcnR5IG9yIGN1c3RvbSBsb2dnaW5nIG1ldGhvZHMgY2FuIGJlIHBsdWdnZWQgaW4gaGVyZS5cbmV4cG9ydCBjbGFzcyBMb2dnaW5nUmVwb3NpdG9yeSBpbXBsZW1lbnRzIFB0TG9nZ2luZ1JlcG9zaXRvcnkge1xuICBwcml2YXRlIGxvZ3M6IExvZ0VudHJ5W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2dpbmdFbmFibGVkOiBib29sZWFuLFxuICAgIHByaXZhdGUgbG9nZ2luZ0xldmVsOiBMb2dnaW5nTGV2ZWxFbnVtXG4gICkgeyB9XG5cbiAgcHVibGljIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCAmJiB0aGlzLmxvZ2dpbmdMZXZlbCA9PT0gTG9nZ2luZ0xldmVsRW51bS5EZWJ1Zykge1xuICAgICAgdGhpcy5sb2dzLnB1c2goeyBtZXNzYWdlOiBtZXNzYWdlLCBsZXZlbDogTG9nZ2luZ0xldmVsRW51bS5Mb2cgfSk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCAmJiB0aGlzLmxvZ2dpbmdMZXZlbCA9PT0gTG9nZ2luZ0xldmVsRW51bS5EZWJ1Zykge1xuICAgICAgdGhpcy5sb2dzLnB1c2goeyBtZXNzYWdlOiBtZXNzYWdlLCBsZXZlbDogTG9nZ2luZ0xldmVsRW51bS5XYXJuaW5nIH0pO1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRW5hYmxlZCkge1xuICAgICAgdGhpcy5sb2dzLnB1c2goeyBtZXNzYWdlOiBtZXNzYWdlLCBsZXZlbDogTG9nZ2luZ0xldmVsRW51bS5FcnJvciB9KTtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=