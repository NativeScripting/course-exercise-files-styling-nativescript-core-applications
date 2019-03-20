"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var constants_1 = require("~/core/constants");
var forms_1 = require("~/core/models/forms");
var observable_property_decorator_1 = require("~/shared/observable-property-decorator");
var NewItemModalViewModel = /** @class */ (function (_super) {
    __extends(NewItemModalViewModel, _super);
    function NewItemModalViewModel(callback) {
        var _this = _super.call(this) || this;
        _this.itemTypesProvider = constants_1.ItemType.List.map(function (t) { return t.PtItemType; });
        _this.btnOkText = 'Save';
        _this.selectedTypeValue = 'Bug';
        _this.closeCallback = callback;
        _this.newItemForm = forms_1.initializeNewItemForm();
        return _this;
    }
    NewItemModalViewModel.prototype.updateSelectedTypeValue = function (selTypeValue) {
        /*
        this.set('selectedTypeValue', selTypeValue);
        this.set(
          'itemTypeImage',
          ItemType.imageResFromType(this.selectedTypeValue)
        );
        */
        this.selectedTypeValue = selTypeValue;
        this.itemTypeImage = constants_1.ItemType.imageResFromType(this.selectedTypeValue);
    };
    NewItemModalViewModel.prototype.onOkButtonTapHandler = function () {
        var newItem = {
            title: this.newItemForm.title,
            description: this.newItemForm.description,
            type: this.newItemForm.typeStr
        };
        this.closeCallback(newItem);
    };
    NewItemModalViewModel.prototype.onCancelButtonTapHandler = function () {
        this.closeCallback(null);
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], NewItemModalViewModel.prototype, "itemTypeImage", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], NewItemModalViewModel.prototype, "selectedTypeValue", void 0);
    return NewItemModalViewModel;
}(observable_1.Observable));
exports.NewItemModalViewModel = NewItemModalViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWl0ZW0ubW9kYWwudm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXctaXRlbS5tb2RhbC52bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUM5RCw4Q0FBNEM7QUFHNUMsNkNBQTJFO0FBQzNFLHdGQUE0RTtBQUU1RTtJQUEyQyx5Q0FBVTtJQVFuRCwrQkFBWSxRQUFrQjtRQUE5QixZQUNFLGlCQUFPLFNBSVI7UUFWTSx1QkFBaUIsR0FBRyxvQkFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3pELGVBQVMsR0FBRyxNQUFNLENBQUM7UUFFSSx1QkFBaUIsR0FBZSxLQUFLLENBQUM7UUFLbEUsS0FBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsS0FBSSxDQUFDLFdBQVcsR0FBRyw2QkFBcUIsRUFBRSxDQUFDOztJQUM3QyxDQUFDO0lBRU0sdURBQXVCLEdBQTlCLFVBQStCLFlBQXdCO1FBQ3JEOzs7Ozs7VUFNRTtRQUVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxvREFBb0IsR0FBM0I7UUFDRSxJQUFNLE9BQU8sR0FBYztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDekMsSUFBSSxFQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztTQUMzQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sd0RBQXdCLEdBQS9CO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBbkNxQjtRQUFyQixrREFBa0IsRUFBRTs7Z0VBQXNCO0lBQ3JCO1FBQXJCLGtEQUFrQixFQUFFOztvRUFBK0M7SUFtQ3RFLDRCQUFDO0NBQUEsQUF6Q0QsQ0FBMkMsdUJBQVUsR0F5Q3BEO0FBekNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJdGVtVHlwZSB9IGZyb20gJ34vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHRJdGVtVHlwZSB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL3R5cGVzJztcbmltcG9ydCB7IFB0TmV3SXRlbSB9IGZyb20gJ34vY29yZS9tb2RlbHMvZHRvL2JhY2tsb2cnO1xuaW1wb3J0IHsgUHROZXdJdGVtRm9ybSwgaW5pdGlhbGl6ZU5ld0l0ZW1Gb3JtIH0gZnJvbSAnfi9jb3JlL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tICd+L3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBOZXdJdGVtTW9kYWxWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJvdGVjdGVkIGNsb3NlQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuICBwdWJsaWMgbmV3SXRlbUZvcm06IFB0TmV3SXRlbUZvcm07XG4gIHB1YmxpYyBpdGVtVHlwZXNQcm92aWRlciA9IEl0ZW1UeXBlLkxpc3QubWFwKHQgPT4gdC5QdEl0ZW1UeXBlKTtcbiAgcHVibGljIGJ0bk9rVGV4dCA9ICdTYXZlJztcbiAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBpdGVtVHlwZUltYWdlO1xuICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHJpdmF0ZSBzZWxlY3RlZFR5cGVWYWx1ZTogUHRJdGVtVHlwZSA9ICdCdWcnO1xuXG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNsb3NlQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLm5ld0l0ZW1Gb3JtID0gaW5pdGlhbGl6ZU5ld0l0ZW1Gb3JtKCk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU2VsZWN0ZWRUeXBlVmFsdWUoc2VsVHlwZVZhbHVlOiBQdEl0ZW1UeXBlKSB7XG4gICAgLypcbiAgICB0aGlzLnNldCgnc2VsZWN0ZWRUeXBlVmFsdWUnLCBzZWxUeXBlVmFsdWUpO1xuICAgIHRoaXMuc2V0KFxuICAgICAgJ2l0ZW1UeXBlSW1hZ2UnLFxuICAgICAgSXRlbVR5cGUuaW1hZ2VSZXNGcm9tVHlwZSh0aGlzLnNlbGVjdGVkVHlwZVZhbHVlKVxuICAgICk7XG4gICAgKi9cblxuICAgIHRoaXMuc2VsZWN0ZWRUeXBlVmFsdWUgPSBzZWxUeXBlVmFsdWU7XG4gICAgdGhpcy5pdGVtVHlwZUltYWdlID0gSXRlbVR5cGUuaW1hZ2VSZXNGcm9tVHlwZSh0aGlzLnNlbGVjdGVkVHlwZVZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9rQnV0dG9uVGFwSGFuZGxlcigpIHtcbiAgICBjb25zdCBuZXdJdGVtOiBQdE5ld0l0ZW0gPSB7XG4gICAgICB0aXRsZTogdGhpcy5uZXdJdGVtRm9ybS50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLm5ld0l0ZW1Gb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgdHlwZTogPFB0SXRlbVR5cGU+dGhpcy5uZXdJdGVtRm9ybS50eXBlU3RyXG4gICAgfTtcblxuICAgIHRoaXMuY2xvc2VDYWxsYmFjayhuZXdJdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbEJ1dHRvblRhcEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUNhbGxiYWNrKG51bGwpO1xuICB9XG59XG4iXX0=