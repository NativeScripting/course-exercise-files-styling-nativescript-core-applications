"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var backlog_1 = require("~/core/contracts/requests/backlog");
var locator_1 = require("~/globals/dependencies/locator");
var BacklogViewModel = /** @class */ (function (_super) {
    __extends(BacklogViewModel, _super);
    function BacklogViewModel() {
        var _this = _super.call(this) || this;
        _this.items = new observable_array_1.ObservableArray();
        _this.authService = locator_1.getAuthService();
        _this.backlogService = locator_1.getBacklogService();
        return _this;
    }
    BacklogViewModel.prototype.onPresetSelected = function () {
        this.refresh();
    };
    BacklogViewModel.prototype.addNewItemHandler = function (newItem) {
        if (newItem) {
            this.addItem(newItem, this.authService.getCurrentUser());
        }
    };
    BacklogViewModel.prototype.onLogoutTapHandler = function () {
        return this.authService.logout();
    };
    BacklogViewModel.prototype.refresh = function () {
        var _this = this;
        var fetchReq = backlog_1.toFetchItemsRequest(this.backlogService.getCurrentPreset(), this.authService.getCurrentUserId());
        this.backlogService.fetchItems(fetchReq).then(function (r) {
            // empty the array
            _this.items.length = 0;
            // push the result into the array
            _this.items.push(r.items);
        });
    };
    BacklogViewModel.prototype.addItem = function (newItem, assignee) {
        var _this = this;
        var createItemRequest = backlog_1.toCreateItemRequest(newItem, assignee);
        this.backlogService
            .addNewPtItem(createItemRequest)
            .then(function (r) {
            _this.items.unshift(r.createdItem);
        })
            .catch(function () {
            console.log('some error occured');
        });
    };
    return BacklogViewModel;
}(observable_1.Observable));
exports.BacklogViewModel = BacklogViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5wYWdlLnZtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2xvZy5wYWdlLnZtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQThEO0FBQzlELDJFQUF5RTtBQUN6RSw2REFHMkM7QUFPM0MsMERBR3dDO0FBRXhDO0lBQXNDLG9DQUFVO0lBTTlDO1FBQUEsWUFDRSxpQkFBTyxTQUlSO1FBUE0sV0FBSyxHQUE0QixJQUFJLGtDQUFlLEVBQVUsQ0FBQztRQUtwRSxLQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFjLEVBQUUsQ0FBQztRQUNwQyxLQUFJLENBQUMsY0FBYyxHQUFHLDJCQUFpQixFQUFFLENBQUM7O0lBQzVDLENBQUM7SUFFTSwyQ0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDRDQUFpQixHQUF4QixVQUF5QixPQUFlO1FBQ3RDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVNLDZDQUFrQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sa0NBQU8sR0FBZDtRQUFBLGlCQWFDO1FBWkMsSUFBTSxRQUFRLEdBQUcsNkJBQW1CLENBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUNwQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBcUI7WUFDbEUsa0JBQWtCO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUV0QixpQ0FBaUM7WUFDakMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtDQUFPLEdBQWYsVUFBZ0IsT0FBTyxFQUFFLFFBQVE7UUFBakMsaUJBV0M7UUFWQyxJQUFNLGlCQUFpQixHQUFHLDZCQUFtQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsY0FBYzthQUNoQixZQUFZLENBQUMsaUJBQWlCLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUMsQ0FBcUI7WUFDMUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF0REQsQ0FBc0MsdUJBQVUsR0FzRC9DO0FBdERZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQge1xuICB0b0NyZWF0ZUl0ZW1SZXF1ZXN0LFxuICB0b0ZldGNoSXRlbXNSZXF1ZXN0XG59IGZyb20gJ34vY29yZS9jb250cmFjdHMvcmVxdWVzdHMvYmFja2xvZyc7XG5pbXBvcnQge1xuICBDcmVhdGVJdGVtUmVzcG9uc2UsXG4gIEZldGNoSXRlbXNSZXNwb25zZVxufSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3Jlc3BvbnNlcy9iYWNrbG9nJztcbmltcG9ydCB7IFB0QXV0aFNlcnZpY2UsIFB0QmFja2xvZ1NlcnZpY2UgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3NlcnZpY2VzJztcbmltcG9ydCB7IFB0SXRlbSB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluJztcbmltcG9ydCB7XG4gIGdldEF1dGhTZXJ2aWNlLFxuICBnZXRCYWNrbG9nU2VydmljZVxufSBmcm9tICd+L2dsb2JhbHMvZGVwZW5kZW5jaWVzL2xvY2F0b3InO1xuXG5leHBvcnQgY2xhc3MgQmFja2xvZ1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBQdEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIGJhY2tsb2dTZXJ2aWNlOiBQdEJhY2tsb2dTZXJ2aWNlO1xuXG4gIHB1YmxpYyBpdGVtczogT2JzZXJ2YWJsZUFycmF5PFB0SXRlbT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFB0SXRlbT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGdldEF1dGhTZXJ2aWNlKCk7XG4gICAgdGhpcy5iYWNrbG9nU2VydmljZSA9IGdldEJhY2tsb2dTZXJ2aWNlKCk7XG4gIH1cblxuICBwdWJsaWMgb25QcmVzZXRTZWxlY3RlZCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdJdGVtSGFuZGxlcihuZXdJdGVtOiBQdEl0ZW0pIHtcbiAgICBpZiAobmV3SXRlbSkge1xuICAgICAgdGhpcy5hZGRJdGVtKG5ld0l0ZW0sIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTG9nb3V0VGFwSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoKCkge1xuICAgIGNvbnN0IGZldGNoUmVxID0gdG9GZXRjaEl0ZW1zUmVxdWVzdChcbiAgICAgIHRoaXMuYmFja2xvZ1NlcnZpY2UuZ2V0Q3VycmVudFByZXNldCgpLFxuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcklkKClcbiAgICApO1xuXG4gICAgdGhpcy5iYWNrbG9nU2VydmljZS5mZXRjaEl0ZW1zKGZldGNoUmVxKS50aGVuKChyOiBGZXRjaEl0ZW1zUmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGVtcHR5IHRoZSBhcnJheVxuICAgICAgdGhpcy5pdGVtcy5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBwdXNoIHRoZSByZXN1bHQgaW50byB0aGUgYXJyYXlcbiAgICAgIHRoaXMuaXRlbXMucHVzaChyLml0ZW1zKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSXRlbShuZXdJdGVtLCBhc3NpZ25lZSkge1xuICAgIGNvbnN0IGNyZWF0ZUl0ZW1SZXF1ZXN0ID0gdG9DcmVhdGVJdGVtUmVxdWVzdChuZXdJdGVtLCBhc3NpZ25lZSk7XG5cbiAgICB0aGlzLmJhY2tsb2dTZXJ2aWNlXG4gICAgICAuYWRkTmV3UHRJdGVtKGNyZWF0ZUl0ZW1SZXF1ZXN0KVxuICAgICAgLnRoZW4oKHI6IENyZWF0ZUl0ZW1SZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zLnVuc2hpZnQoci5jcmVhdGVkSXRlbSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NvbWUgZXJyb3Igb2NjdXJlZCcpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==