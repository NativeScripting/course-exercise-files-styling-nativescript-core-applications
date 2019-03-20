"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var backlog_1 = require("~/core/contracts/requests/backlog");
var strings_1 = require("~/core/models/domain/constants/strings");
var locator_1 = require("~/globals/dependencies/locator");
var observable_property_decorator_1 = require("~/shared/observable-property-decorator");
var PtTaskViewModel = /** @class */ (function (_super) {
    __extends(PtTaskViewModel, _super);
    function PtTaskViewModel(origTask, ptItem) {
        var _this = _super.call(this) || this;
        _this.ptItem = ptItem;
        _this.lastUpdatedTitle = strings_1.EMPTY_STRING;
        _this.id = origTask.id;
        _this.title = origTask.title;
        _this.dateCreated = origTask.dateCreated;
        _this.dateModified = origTask.dateModified;
        _this.dateDeleted = origTask.dateDeleted;
        _this.completed = origTask.completed;
        _this.taskService = locator_1.getTaskService();
        return _this;
    }
    PtTaskViewModel.prototype.onTaskToggleRequested = function () {
        var _this = this;
        var taskUpdate = {
            task: this,
            toggle: true,
            newTitle: this.title
        };
        this.updateTask(taskUpdate).then(function (response) {
            var updatedTask = response.updatedTask;
            // this.set('title', updatedTask.title);
            // this.set('dateModified', updatedTask.dateModified);
            // this.set('completed', updatedTask.completed);
            _this.title = updatedTask.title;
            _this.dateModified = updatedTask.dateModified;
            _this.completed = updatedTask.completed;
        });
    };
    PtTaskViewModel.prototype.onTaskFocused = function (text) {
        this.lastUpdatedTitle = text;
    };
    PtTaskViewModel.prototype.onTaskBlurred = function () {
        this.lastUpdatedTitle = strings_1.EMPTY_STRING;
    };
    PtTaskViewModel.prototype.onTextChange = function (text) {
        var changedTitle = text;
        if (this.lastUpdatedTitle !== changedTitle) {
            this.lastUpdatedTitle = changedTitle;
            var taskUpdate = {
                task: this,
                toggle: false,
                newTitle: this.lastUpdatedTitle
            };
            this.updateTask(taskUpdate);
        }
    };
    PtTaskViewModel.prototype.updateTask = function (taskUpdate) {
        var updateTaskRequest = backlog_1.toUpdateTaskRequest(taskUpdate, this.ptItem);
        return this.taskService.updatePtTask(updateTaskRequest);
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], PtTaskViewModel.prototype, "title", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Date)
    ], PtTaskViewModel.prototype, "dateModified", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], PtTaskViewModel.prototype, "completed", void 0);
    return PtTaskViewModel;
}(observable_1.Observable));
exports.PtTaskViewModel = PtTaskViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtdGFzay52bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LXRhc2sudm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFDOUQsNkRBQXdFO0FBR3hFLGtFQUFzRTtBQUV0RSwwREFBZ0U7QUFDaEUsd0ZBQTRFO0FBRTVFO0lBQXFDLG1DQUFVO0lBWTdDLHlCQUFZLFFBQWdCLEVBQVUsTUFBYztRQUFwRCxZQUNFLGlCQUFPLFNBU1I7UUFWcUMsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUY1QyxzQkFBZ0IsR0FBRyxzQkFBWSxDQUFDO1FBSXRDLEtBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN0QixLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRXBDLEtBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQWMsRUFBRSxDQUFDOztJQUN0QyxDQUFDO0lBRU0sK0NBQXFCLEdBQTVCO1FBQUEsaUJBZ0JDO1FBZkMsSUFBTSxVQUFVLEdBQWlCO1lBQy9CLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDckIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUN2QyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQ3pDLHdDQUF3QztZQUN4QyxzREFBc0Q7WUFDdEQsZ0RBQWdEO1lBQ2hELEtBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHVDQUFhLEdBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsc0JBQVksQ0FBQztJQUN2QyxDQUFDO0lBRU0sc0NBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssWUFBWSxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7WUFFckMsSUFBTSxVQUFVLEdBQWlCO2dCQUMvQixJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUUsS0FBSztnQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUNoQyxDQUFDO1lBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFTyxvQ0FBVSxHQUFsQixVQUFtQixVQUF3QjtRQUN6QyxJQUFNLGlCQUFpQixHQUFHLDZCQUFtQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUEvRHFCO1FBQXJCLGtEQUFrQixFQUFFOztrREFBdUI7SUFDdEI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQXNCLElBQUk7eURBQUM7SUFDMUI7UUFBckIsa0RBQWtCLEVBQUU7O3NEQUEyQjtJQThEbEQsc0JBQUM7Q0FBQSxBQXRFRCxDQUFxQyx1QkFBVSxHQXNFOUM7QUF0RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgdG9VcGRhdGVUYXNrUmVxdWVzdCB9IGZyb20gJ34vY29yZS9jb250cmFjdHMvcmVxdWVzdHMvYmFja2xvZyc7XG5pbXBvcnQgeyBQdFRhc2tTZXJ2aWNlIH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBQdEl0ZW0sIFB0VGFzayB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluJztcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL2NvbnN0YW50cy9zdHJpbmdzJztcbmltcG9ydCB7IFB0VGFza1VwZGF0ZSB9IGZyb20gJ34vY29yZS9tb2RlbHMvZHRvL2JhY2tsb2cvdGFza3MvcHQtdGFzay11cGRhdGUubW9kZWwnO1xuaW1wb3J0IHsgZ2V0VGFza1NlcnZpY2UgfSBmcm9tICd+L2dsb2JhbHMvZGVwZW5kZW5jaWVzL2xvY2F0b3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSAnfi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgUHRUYXNrVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSBpbXBsZW1lbnRzIFB0VGFzayB7XG4gIHByaXZhdGUgdGFza1NlcnZpY2U6IFB0VGFza1NlcnZpY2U7XG5cbiAgcHVibGljIGlkOiBudW1iZXI7XG4gIHB1YmxpYyBkYXRlQ3JlYXRlZDogRGF0ZTtcbiAgcHVibGljIGRhdGVEZWxldGVkPzogRGF0ZTtcbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyB0aXRsZT86IHN0cmluZztcbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBkYXRlTW9kaWZpZWQ6IERhdGU7XG4gIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgY29tcGxldGVkOiBib29sZWFuO1xuXG4gIHByaXZhdGUgbGFzdFVwZGF0ZWRUaXRsZSA9IEVNUFRZX1NUUklORztcblxuICBjb25zdHJ1Y3RvcihvcmlnVGFzazogUHRUYXNrLCBwcml2YXRlIHB0SXRlbTogUHRJdGVtKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gb3JpZ1Rhc2suaWQ7XG4gICAgdGhpcy50aXRsZSA9IG9yaWdUYXNrLnRpdGxlO1xuICAgIHRoaXMuZGF0ZUNyZWF0ZWQgPSBvcmlnVGFzay5kYXRlQ3JlYXRlZDtcbiAgICB0aGlzLmRhdGVNb2RpZmllZCA9IG9yaWdUYXNrLmRhdGVNb2RpZmllZDtcbiAgICB0aGlzLmRhdGVEZWxldGVkID0gb3JpZ1Rhc2suZGF0ZURlbGV0ZWQ7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBvcmlnVGFzay5jb21wbGV0ZWQ7XG5cbiAgICB0aGlzLnRhc2tTZXJ2aWNlID0gZ2V0VGFza1NlcnZpY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBvblRhc2tUb2dnbGVSZXF1ZXN0ZWQoKSB7XG4gICAgY29uc3QgdGFza1VwZGF0ZTogUHRUYXNrVXBkYXRlID0ge1xuICAgICAgdGFzazogdGhpcyxcbiAgICAgIHRvZ2dsZTogdHJ1ZSxcbiAgICAgIG5ld1RpdGxlOiB0aGlzLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMudXBkYXRlVGFzayh0YXNrVXBkYXRlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0gcmVzcG9uc2UudXBkYXRlZFRhc2s7XG4gICAgICAvLyB0aGlzLnNldCgndGl0bGUnLCB1cGRhdGVkVGFzay50aXRsZSk7XG4gICAgICAvLyB0aGlzLnNldCgnZGF0ZU1vZGlmaWVkJywgdXBkYXRlZFRhc2suZGF0ZU1vZGlmaWVkKTtcbiAgICAgIC8vIHRoaXMuc2V0KCdjb21wbGV0ZWQnLCB1cGRhdGVkVGFzay5jb21wbGV0ZWQpO1xuICAgICAgdGhpcy50aXRsZSA9IHVwZGF0ZWRUYXNrLnRpdGxlO1xuICAgICAgdGhpcy5kYXRlTW9kaWZpZWQgPSB1cGRhdGVkVGFzay5kYXRlTW9kaWZpZWQ7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHVwZGF0ZWRUYXNrLmNvbXBsZXRlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblRhc2tGb2N1c2VkKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMubGFzdFVwZGF0ZWRUaXRsZSA9IHRleHQ7XG4gIH1cblxuICBwdWJsaWMgb25UYXNrQmx1cnJlZCgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkVGl0bGUgPSBFTVBUWV9TVFJJTkc7XG4gIH1cblxuICBwdWJsaWMgb25UZXh0Q2hhbmdlKHRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNoYW5nZWRUaXRsZSA9IHRleHQ7XG5cbiAgICBpZiAodGhpcy5sYXN0VXBkYXRlZFRpdGxlICE9PSBjaGFuZ2VkVGl0bGUpIHtcbiAgICAgIHRoaXMubGFzdFVwZGF0ZWRUaXRsZSA9IGNoYW5nZWRUaXRsZTtcblxuICAgICAgY29uc3QgdGFza1VwZGF0ZTogUHRUYXNrVXBkYXRlID0ge1xuICAgICAgICB0YXNrOiB0aGlzLFxuICAgICAgICB0b2dnbGU6IGZhbHNlLFxuICAgICAgICBuZXdUaXRsZTogdGhpcy5sYXN0VXBkYXRlZFRpdGxlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVwZGF0ZVRhc2sodGFza1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUYXNrKHRhc2tVcGRhdGU6IFB0VGFza1VwZGF0ZSkge1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tSZXF1ZXN0ID0gdG9VcGRhdGVUYXNrUmVxdWVzdCh0YXNrVXBkYXRlLCB0aGlzLnB0SXRlbSk7XG4gICAgcmV0dXJuIHRoaXMudGFza1NlcnZpY2UudXBkYXRlUHRUYXNrKHVwZGF0ZVRhc2tSZXF1ZXN0KTtcbiAgfVxufVxuIl19