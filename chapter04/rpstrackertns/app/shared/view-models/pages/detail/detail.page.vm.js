"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var constants_1 = require("~/core/constants");
var pt_item_types_1 = require("~/core/constants/pt-item-types");
var backlog_1 = require("~/core/contracts/requests/backlog");
var strings_1 = require("~/core/models/domain/constants/strings");
var forms_1 = require("~/core/models/forms");
var services_1 = require("~/core/services");
var locator_1 = require("~/globals/dependencies/locator");
var nav_helper_1 = require("~/shared/helpers/navigation/nav.helper");
var observable_property_decorator_1 = require("~/shared/observable-property-decorator");
var pt_comment_vm_1 = require("./pt-comment.vm");
var pt_task_vm_1 = require("./pt-task.vm");
var DetailViewModel = /** @class */ (function (_super) {
    __extends(DetailViewModel, _super);
    function DetailViewModel(ptItem) {
        var _this = _super.call(this) || this;
        _this.ptItem = ptItem;
        _this.selectedScreen = 'details';
        /* details form */
        _this.itemForm = null;
        _this.itemTypesProvider = pt_item_types_1.ItemType.List.map(function (t) { return t.PtItemType; });
        _this.statusesProvider = constants_1.PT_ITEM_STATUSES;
        _this.prioritiesProvider = constants_1.PT_ITEM_PRIORITIES;
        /* details form END */
        /* tasks */
        _this.newTaskTitle = strings_1.EMPTY_STRING;
        _this.newCommentText = strings_1.EMPTY_STRING;
        _this.authService = locator_1.getAuthService();
        _this.backlogService = locator_1.getBacklogService();
        _this.taskService = locator_1.getTaskService();
        _this.commentService = locator_1.getCommentService();
        _this.itemForm = forms_1.ptItemToFormModel(ptItem);
        _this.currentUserAvatar = services_1.getCurrentUserAvatar(locator_1.getApiEndpoint(), _this.authService.getCurrentUserId());
        _this.itemTitle = ptItem.title;
        _this.selectedAssignee = ptItem.assignee;
        _this.tasks = new observable_array_1.ObservableArray(ptItem.tasks.map(function (task) { return new pt_task_vm_1.PtTaskViewModel(task, ptItem); }));
        _this.comments = new observable_array_1.ObservableArray(ptItem.comments.map(function (comment) { return new pt_comment_vm_1.PtCommentViewModel(comment); }));
        return _this;
    }
    Object.defineProperty(DetailViewModel.prototype, "itemTypeEditorDisplayName", {
        /* comments END */
        get: function () {
            return 'Type';
        },
        enumerable: true,
        configurable: true
    });
    DetailViewModel.prototype.getSelectedAssignee = function () {
        return this.selectedAssignee ? this.selectedAssignee : this.ptItem.assignee;
    };
    DetailViewModel.prototype.setSelectedAssignee = function (selectedAssignee) {
        if (selectedAssignee) {
            // this.set('selectedAssignee', selectedAssignee);
            this.selectedAssignee = selectedAssignee;
            this.notifyUpdateItem();
        }
    };
    DetailViewModel.prototype.onNavBackTap = function () {
        nav_helper_1.back();
    };
    DetailViewModel.prototype.onTabDetailsTap = function () {
        // this.set('selectedScreen', 'details');
        this.selectedScreen = 'details';
    };
    DetailViewModel.prototype.onTabTasksTap = function () {
        // this.set('selectedScreen', 'tasks');
        this.selectedScreen = 'tasks';
    };
    DetailViewModel.prototype.onTabChitchatTap = function () {
        // this.set('selectedScreen', 'chitchat');
        this.selectedScreen = 'chitchat';
    };
    /* details START */
    DetailViewModel.prototype.updateSelectedTypeValue = function (selTypeValue) {
        this.set('selectedTypeValue', selTypeValue);
        this.set('itemTypeImage', pt_item_types_1.ItemType.imageResFromType(this.selectedTypeValue));
    };
    DetailViewModel.prototype.updateSelectedPriorityValue = function (editorPriority) {
        var selectedPriorityValue = editorPriority
            ? editorPriority
            : this.itemForm.priorityStr;
        this.set('selectedPriorityValue', selectedPriorityValue);
        return selectedPriorityValue;
    };
    DetailViewModel.prototype.deleteRequested = function () {
        var deleteItemRequest = backlog_1.toDeleteItemRequest(this.ptItem);
        this.backlogService
            .deletePtItem(deleteItemRequest)
            .then(function () { })
            .catch(function () {
            console.log('some error occured');
        });
    };
    /* details END */
    /* tasks START */
    DetailViewModel.prototype.onAddTask = function () {
        var _this = this;
        var newTitle = this.newTaskTitle.trim();
        if (newTitle.length === 0) {
            return;
        }
        var newTask = {
            title: newTitle,
            completed: false
        };
        var createTaskRequest = backlog_1.toCreateTaskRequest(newTask, this.ptItem);
        this.taskService
            .addNewPtTask(createTaskRequest)
            .then(function (response) {
            _this.tasks.unshift(new pt_task_vm_1.PtTaskViewModel(response.createdTask, _this.ptItem));
            _this.set('newTaskTitle', strings_1.EMPTY_STRING);
        })
            .catch(function () {
            console.log('something went wrong when adding task');
        });
    };
    /* tasks END */
    /* comments START */
    DetailViewModel.prototype.onAddComment = function () {
        var _this = this;
        var newCommentTxt = this.newCommentText.trim();
        if (newCommentTxt.length === 0) {
            return;
        }
        var newComment = {
            title: newCommentTxt
        };
        var createCommentRequest = backlog_1.toCreateCommentRequest(newComment, this.ptItem);
        this.commentService
            .addNewPtComment(createCommentRequest)
            .then(function (response) {
            var addedComment = response.createdComment;
            addedComment.user.avatar = _this.currentUserAvatar;
            _this.comments.unshift(new pt_comment_vm_1.PtCommentViewModel(addedComment));
            _this.set('newCommentText', strings_1.EMPTY_STRING);
        })
            .catch(function () {
            console.log('something went wrong when adding comment');
        });
    };
    /* comments END */
    DetailViewModel.prototype.notifyUpdateItem = function () {
        var updatedItem = forms_1.applyFormModelUpdatesToItem(this.ptItem, this.itemForm, this.selectedAssignee);
        var updateItemRequest = backlog_1.toUpdateItemRequest(updatedItem);
        this.backlogService.updatePtItem(updateItemRequest);
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], DetailViewModel.prototype, "selectedScreen", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], DetailViewModel.prototype, "selectedAssignee", void 0);
    return DetailViewModel;
}(observable_1.Observable));
exports.DetailViewModel = DetailViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLnBhZ2Uudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXRhaWwucGFnZS52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUM5RCwyRUFBeUU7QUFDekUsOENBQXdFO0FBQ3hFLGdFQUEwRDtBQUMxRCw2REFLMkM7QUFRM0Msa0VBQXNFO0FBSXRFLDZDQUk2QjtBQUU3Qiw0Q0FBdUQ7QUFDdkQsMERBTXdDO0FBQ3hDLHFFQUE4RDtBQUM5RCx3RkFBNEU7QUFDNUUsaURBQXFEO0FBQ3JELDJDQUErQztBQUUvQztJQUFxQyxtQ0FBVTtJQStDN0MseUJBQW9CLE1BQWM7UUFBbEMsWUFDRSxpQkFBTyxTQXNCUjtRQXZCbUIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQXpDTCxvQkFBYyxHQUFxQixTQUFTLENBQUM7UUFJMUUsa0JBQWtCO1FBQ1gsY0FBUSxHQUErQixJQUFJLENBQUM7UUFDNUMsdUJBQWlCLEdBQUcsd0JBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsRUFBWixDQUFZLENBQUMsQ0FBQztRQUN6RCxzQkFBZ0IsR0FBRyw0QkFBZ0IsQ0FBQztRQUNwQyx3QkFBa0IsR0FBRyw4QkFBa0IsQ0FBQztRQUkvQyxzQkFBc0I7UUFFdEIsV0FBVztRQUNKLGtCQUFZLEdBQUcsc0JBQVksQ0FBQztRQU01QixvQkFBYyxHQUFHLHNCQUFZLENBQUM7UUF1Qm5DLEtBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQWMsRUFBRSxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxjQUFjLEdBQUcsMkJBQWlCLEVBQUUsQ0FBQztRQUMxQyxLQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFjLEVBQUUsQ0FBQztRQUNwQyxLQUFJLENBQUMsY0FBYyxHQUFHLDJCQUFpQixFQUFFLENBQUM7UUFFMUMsS0FBSSxDQUFDLFFBQVEsR0FBRyx5QkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FB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VUFBVSxFQUNWLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNyQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1osSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQ0FBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsc0JBQVksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxrQkFBa0I7SUFFWCwwQ0FBZ0IsR0FBdkI7UUFDRSxJQUFNLFdBQVcsR0FBRyxtQ0FBMkIsQ0FDN0MsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsUUFBUSxFQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FDdEIsQ0FBQztRQUVGLElBQU0saUJBQWlCLEdBQUcsNkJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBdkxxQjtRQUFyQixrREFBa0IsRUFBRTs7MkRBQXFEO0lBQ3BEO1FBQXJCLGtEQUFrQixFQUFFOzs2REFBa0M7SUF1THpELHNCQUFDO0NBQUEsQUE5TEQsQ0FBcUMsdUJBQVUsR0E4TDlDO0FBOUxZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFBUX0lURU1fUFJJT1JJVElFUywgUFRfSVRFTV9TVEFUVVNFUyB9IGZyb20gJ34vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgSXRlbVR5cGUgfSBmcm9tICd+L2NvcmUvY29uc3RhbnRzL3B0LWl0ZW0tdHlwZXMnO1xuaW1wb3J0IHtcbiAgdG9DcmVhdGVDb21tZW50UmVxdWVzdCxcbiAgdG9DcmVhdGVUYXNrUmVxdWVzdCxcbiAgdG9EZWxldGVJdGVtUmVxdWVzdCxcbiAgdG9VcGRhdGVJdGVtUmVxdWVzdFxufSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcXVlc3RzL2JhY2tsb2cnO1xuaW1wb3J0IHtcbiAgUHRBdXRoU2VydmljZSxcbiAgUHRCYWNrbG9nU2VydmljZSxcbiAgUHRDb21tZW50U2VydmljZSxcbiAgUHRUYXNrU2VydmljZVxufSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3NlcnZpY2VzJztcbmltcG9ydCB7IFB0SXRlbSwgUHRVc2VyIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4vY29uc3RhbnRzL3N0cmluZ3MnO1xuaW1wb3J0IHsgUHJpb3JpdHlFbnVtIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4vZW51bXMnO1xuaW1wb3J0IHsgUHRJdGVtVHlwZSB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL3R5cGVzJztcbmltcG9ydCB7IFB0TmV3Q29tbWVudCwgUHROZXdUYXNrIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kdG8vYmFja2xvZyc7XG5pbXBvcnQge1xuICBhcHBseUZvcm1Nb2RlbFVwZGF0ZXNUb0l0ZW0sXG4gIFB0SXRlbURldGFpbHNFZGl0Rm9ybU1vZGVsLFxuICBwdEl0ZW1Ub0Zvcm1Nb2RlbFxufSBmcm9tICd+L2NvcmUvbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IERldGFpbFNjcmVlblR5cGUgfSBmcm9tICd+L2NvcmUvbW9kZWxzL3R5cGVzJztcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyQXZhdGFyIH0gZnJvbSAnfi9jb3JlL3NlcnZpY2VzJztcbmltcG9ydCB7XG4gIGdldEFwaUVuZHBvaW50LFxuICBnZXRBdXRoU2VydmljZSxcbiAgZ2V0QmFja2xvZ1NlcnZpY2UsXG4gIGdldENvbW1lbnRTZXJ2aWNlLFxuICBnZXRUYXNrU2VydmljZVxufSBmcm9tICd+L2dsb2JhbHMvZGVwZW5kZW5jaWVzL2xvY2F0b3InO1xuaW1wb3J0IHsgYmFjayB9IGZyb20gJ34vc2hhcmVkL2hlbHBlcnMvbmF2aWdhdGlvbi9uYXYuaGVscGVyJztcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gJ34vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yJztcbmltcG9ydCB7IFB0Q29tbWVudFZpZXdNb2RlbCB9IGZyb20gJy4vcHQtY29tbWVudC52bSc7XG5pbXBvcnQgeyBQdFRhc2tWaWV3TW9kZWwgfSBmcm9tICcuL3B0LXRhc2sudm0nO1xuXG5leHBvcnQgY2xhc3MgRGV0YWlsVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IFB0QXV0aFNlcnZpY2U7XG4gIHByaXZhdGUgYmFja2xvZ1NlcnZpY2U6IFB0QmFja2xvZ1NlcnZpY2U7XG4gIHByaXZhdGUgdGFza1NlcnZpY2U6IFB0VGFza1NlcnZpY2U7XG4gIHByaXZhdGUgY29tbWVudFNlcnZpY2U6IFB0Q29tbWVudFNlcnZpY2U7XG5cbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBzZWxlY3RlZFNjcmVlbjogRGV0YWlsU2NyZWVuVHlwZSA9ICdkZXRhaWxzJztcbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHByaXZhdGUgc2VsZWN0ZWRBc3NpZ25lZTogUHRVc2VyO1xuICBwdWJsaWMgaXRlbVRpdGxlOiBzdHJpbmc7XG5cbiAgLyogZGV0YWlscyBmb3JtICovXG4gIHB1YmxpYyBpdGVtRm9ybTogUHRJdGVtRGV0YWlsc0VkaXRGb3JtTW9kZWwgPSBudWxsO1xuICBwdWJsaWMgaXRlbVR5cGVzUHJvdmlkZXIgPSBJdGVtVHlwZS5MaXN0Lm1hcCh0ID0+IHQuUHRJdGVtVHlwZSk7XG4gIHB1YmxpYyBzdGF0dXNlc1Byb3ZpZGVyID0gUFRfSVRFTV9TVEFUVVNFUztcbiAgcHVibGljIHByaW9yaXRpZXNQcm92aWRlciA9IFBUX0lURU1fUFJJT1JJVElFUztcbiAgcHVibGljIHNlbGVjdGVkVHlwZVZhbHVlOiBQdEl0ZW1UeXBlO1xuICBwdWJsaWMgc2VsZWN0ZWRQcmlvcml0eVZhbHVlOiBQcmlvcml0eUVudW07XG4gIHB1YmxpYyBpdGVtVHlwZUltYWdlO1xuICAvKiBkZXRhaWxzIGZvcm0gRU5EICovXG5cbiAgLyogdGFza3MgKi9cbiAgcHVibGljIG5ld1Rhc2tUaXRsZSA9IEVNUFRZX1NUUklORztcbiAgcHVibGljIHRhc2tzOiBPYnNlcnZhYmxlQXJyYXk8UHRUYXNrVmlld01vZGVsPjtcbiAgLyogdGFza3MgRU5EICovXG5cbiAgLyogY29tbWVudHMgKi9cbiAgcHVibGljIGN1cnJlbnRVc2VyQXZhdGFyOiBzdHJpbmc7XG4gIHB1YmxpYyBuZXdDb21tZW50VGV4dCA9IEVNUFRZX1NUUklORztcbiAgcHVibGljIGNvbW1lbnRzOiBPYnNlcnZhYmxlQXJyYXk8UHRDb21tZW50Vmlld01vZGVsPjtcbiAgLyogY29tbWVudHMgRU5EICovXG5cbiAgcHVibGljIGdldCBpdGVtVHlwZUVkaXRvckRpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiAnVHlwZSc7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRBc3NpZ25lZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEFzc2lnbmVlID8gdGhpcy5zZWxlY3RlZEFzc2lnbmVlIDogdGhpcy5wdEl0ZW0uYXNzaWduZWU7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRBc3NpZ25lZShzZWxlY3RlZEFzc2lnbmVlOiBQdFVzZXIpIHtcbiAgICBpZiAoc2VsZWN0ZWRBc3NpZ25lZSkge1xuICAgICAgLy8gdGhpcy5zZXQoJ3NlbGVjdGVkQXNzaWduZWUnLCBzZWxlY3RlZEFzc2lnbmVlKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBc3NpZ25lZSA9IHNlbGVjdGVkQXNzaWduZWU7XG4gICAgICB0aGlzLm5vdGlmeVVwZGF0ZUl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHB0SXRlbTogUHRJdGVtKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBnZXRBdXRoU2VydmljZSgpO1xuICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UgPSBnZXRCYWNrbG9nU2VydmljZSgpO1xuICAgIHRoaXMudGFza1NlcnZpY2UgPSBnZXRUYXNrU2VydmljZSgpO1xuICAgIHRoaXMuY29tbWVudFNlcnZpY2UgPSBnZXRDb21tZW50U2VydmljZSgpO1xuXG4gICAgdGhpcy5pdGVtRm9ybSA9IHB0SXRlbVRvRm9ybU1vZGVsKHB0SXRlbSk7XG5cbiAgICB0aGlzLmN1cnJlbnRVc2VyQXZhdGFyID0gZ2V0Q3VycmVudFVzZXJBdmF0YXIoXG4gICAgICBnZXRBcGlFbmRwb2ludCgpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcklkKClcbiAgICApO1xuICAgIHRoaXMuaXRlbVRpdGxlID0gcHRJdGVtLnRpdGxlO1xuICAgIHRoaXMuc2VsZWN0ZWRBc3NpZ25lZSA9IHB0SXRlbS5hc3NpZ25lZTtcblxuICAgIHRoaXMudGFza3MgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFB0VGFza1ZpZXdNb2RlbD4oXG4gICAgICBwdEl0ZW0udGFza3MubWFwKHRhc2sgPT4gbmV3IFB0VGFza1ZpZXdNb2RlbCh0YXNrLCBwdEl0ZW0pKVxuICAgICk7XG4gICAgdGhpcy5jb21tZW50cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8UHRDb21tZW50Vmlld01vZGVsPihcbiAgICAgIHB0SXRlbS5jb21tZW50cy5tYXAoY29tbWVudCA9PiBuZXcgUHRDb21tZW50Vmlld01vZGVsKGNvbW1lbnQpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25OYXZCYWNrVGFwKCkge1xuICAgIGJhY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBvblRhYkRldGFpbHNUYXAoKSB7XG4gICAgLy8gdGhpcy5zZXQoJ3NlbGVjdGVkU2NyZWVuJywgJ2RldGFpbHMnKTtcbiAgICB0aGlzLnNlbGVjdGVkU2NyZWVuID0gJ2RldGFpbHMnO1xuICB9XG5cbiAgcHVibGljIG9uVGFiVGFza3NUYXAoKSB7XG4gICAgLy8gdGhpcy5zZXQoJ3NlbGVjdGVkU2NyZWVuJywgJ3Rhc2tzJyk7XG4gICAgdGhpcy5zZWxlY3RlZFNjcmVlbiA9ICd0YXNrcyc7XG4gIH1cblxuICBwdWJsaWMgb25UYWJDaGl0Y2hhdFRhcCgpIHtcbiAgICAvLyB0aGlzLnNldCgnc2VsZWN0ZWRTY3JlZW4nLCAnY2hpdGNoYXQnKTtcbiAgICB0aGlzLnNlbGVjdGVkU2NyZWVuID0gJ2NoaXRjaGF0JztcbiAgfVxuXG4gIC8qIGRldGFpbHMgU1RBUlQgKi9cbiAgcHVibGljIHVwZGF0ZVNlbGVjdGVkVHlwZVZhbHVlKHNlbFR5cGVWYWx1ZTogUHRJdGVtVHlwZSkge1xuICAgIHRoaXMuc2V0KCdzZWxlY3RlZFR5cGVWYWx1ZScsIHNlbFR5cGVWYWx1ZSk7XG4gICAgdGhpcy5zZXQoXG4gICAgICAnaXRlbVR5cGVJbWFnZScsXG4gICAgICBJdGVtVHlwZS5pbWFnZVJlc0Zyb21UeXBlKHRoaXMuc2VsZWN0ZWRUeXBlVmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVTZWxlY3RlZFByaW9yaXR5VmFsdWUoXG4gICAgZWRpdG9yUHJpb3JpdHk6IFByaW9yaXR5RW51bVxuICApOiBQcmlvcml0eUVudW0ge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHlWYWx1ZSA9IGVkaXRvclByaW9yaXR5XG4gICAgICA/IGVkaXRvclByaW9yaXR5XG4gICAgICA6IDxQcmlvcml0eUVudW0+dGhpcy5pdGVtRm9ybS5wcmlvcml0eVN0cjtcbiAgICB0aGlzLnNldCgnc2VsZWN0ZWRQcmlvcml0eVZhbHVlJywgc2VsZWN0ZWRQcmlvcml0eVZhbHVlKTtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcmlvcml0eVZhbHVlO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVJlcXVlc3RlZCgpIHtcbiAgICBjb25zdCBkZWxldGVJdGVtUmVxdWVzdCA9IHRvRGVsZXRlSXRlbVJlcXVlc3QodGhpcy5wdEl0ZW0pO1xuICAgIHRoaXMuYmFja2xvZ1NlcnZpY2VcbiAgICAgIC5kZWxldGVQdEl0ZW0oZGVsZXRlSXRlbVJlcXVlc3QpXG4gICAgICAudGhlbigoKSA9PiB7fSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzb21lIGVycm9yIG9jY3VyZWQnKTtcbiAgICAgIH0pO1xuICB9XG4gIC8qIGRldGFpbHMgRU5EICovXG5cbiAgLyogdGFza3MgU1RBUlQgKi9cbiAgcHVibGljIG9uQWRkVGFzaygpIHtcbiAgICBjb25zdCBuZXdUaXRsZSA9IHRoaXMubmV3VGFza1RpdGxlLnRyaW0oKTtcbiAgICBpZiAobmV3VGl0bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3VGFzazogUHROZXdUYXNrID0ge1xuICAgICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrUmVxdWVzdCA9IHRvQ3JlYXRlVGFza1JlcXVlc3QobmV3VGFzaywgdGhpcy5wdEl0ZW0pO1xuXG4gICAgdGhpcy50YXNrU2VydmljZVxuICAgICAgLmFkZE5ld1B0VGFzayhjcmVhdGVUYXNrUmVxdWVzdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy50YXNrcy51bnNoaWZ0KFxuICAgICAgICAgIG5ldyBQdFRhc2tWaWV3TW9kZWwocmVzcG9uc2UuY3JlYXRlZFRhc2ssIHRoaXMucHRJdGVtKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldCgnbmV3VGFza1RpdGxlJywgRU1QVFlfU1RSSU5HKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBhZGRpbmcgdGFzaycpO1xuICAgICAgfSk7XG4gIH1cbiAgLyogdGFza3MgRU5EICovXG5cbiAgLyogY29tbWVudHMgU1RBUlQgKi9cbiAgcHVibGljIG9uQWRkQ29tbWVudCgpIHtcbiAgICBjb25zdCBuZXdDb21tZW50VHh0ID0gdGhpcy5uZXdDb21tZW50VGV4dC50cmltKCk7XG4gICAgaWYgKG5ld0NvbW1lbnRUeHQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3Q29tbWVudDogUHROZXdDb21tZW50ID0ge1xuICAgICAgdGl0bGU6IG5ld0NvbW1lbnRUeHRcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQ29tbWVudFJlcXVlc3QgPSB0b0NyZWF0ZUNvbW1lbnRSZXF1ZXN0KFxuICAgICAgbmV3Q29tbWVudCxcbiAgICAgIHRoaXMucHRJdGVtXG4gICAgKTtcblxuICAgIHRoaXMuY29tbWVudFNlcnZpY2VcbiAgICAgIC5hZGROZXdQdENvbW1lbnQoY3JlYXRlQ29tbWVudFJlcXVlc3QpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZGVkQ29tbWVudCA9IHJlc3BvbnNlLmNyZWF0ZWRDb21tZW50O1xuICAgICAgICBhZGRlZENvbW1lbnQudXNlci5hdmF0YXIgPSB0aGlzLmN1cnJlbnRVc2VyQXZhdGFyO1xuICAgICAgICB0aGlzLmNvbW1lbnRzLnVuc2hpZnQobmV3IFB0Q29tbWVudFZpZXdNb2RlbChhZGRlZENvbW1lbnQpKTtcbiAgICAgICAgdGhpcy5zZXQoJ25ld0NvbW1lbnRUZXh0JywgRU1QVFlfU1RSSU5HKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hlbiBhZGRpbmcgY29tbWVudCcpO1xuICAgICAgfSk7XG4gIH1cbiAgLyogY29tbWVudHMgRU5EICovXG5cbiAgcHVibGljIG5vdGlmeVVwZGF0ZUl0ZW0oKSB7XG4gICAgY29uc3QgdXBkYXRlZEl0ZW0gPSBhcHBseUZvcm1Nb2RlbFVwZGF0ZXNUb0l0ZW0oXG4gICAgICB0aGlzLnB0SXRlbSxcbiAgICAgIHRoaXMuaXRlbUZvcm0sXG4gICAgICB0aGlzLnNlbGVjdGVkQXNzaWduZWVcbiAgICApO1xuXG4gICAgY29uc3QgdXBkYXRlSXRlbVJlcXVlc3QgPSB0b1VwZGF0ZUl0ZW1SZXF1ZXN0KHVwZGF0ZWRJdGVtKTtcblxuICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UudXBkYXRlUHRJdGVtKHVwZGF0ZUl0ZW1SZXF1ZXN0KTtcbiAgfVxufVxuIl19