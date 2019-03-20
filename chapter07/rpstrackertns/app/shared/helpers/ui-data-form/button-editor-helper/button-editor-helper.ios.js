"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonEditorHelper = /** @class */ (function (_super) {
    __extends(ButtonEditorHelper, _super);
    function ButtonEditorHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonEditorHelper.prototype.updateEditorValue = function (editorView, newValue) {
        this.buttonValue = newValue;
        editorView.setTitleForState(this.buttonValue, 0 /* Normal */);
    };
    ButtonEditorHelper.prototype['handleTap:'] = function (_sender) {
        this.iosTapHandler();
    };
    ButtonEditorHelper.ObjCExposedMethods = {
        'handleTap:': { returns: interop.types.void, params: [UIView.class()] }
    };
    return ButtonEditorHelper;
}(NSObject));
exports.ButtonEditorHelper = ButtonEditorHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWVkaXRvci1oZWxwZXIuaW9zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnV0dG9uLWVkaXRvci1oZWxwZXIuaW9zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBd0Msc0NBQVE7SUFBaEQ7O0lBa0JBLENBQUM7SUFSVSw4Q0FBaUIsR0FBeEIsVUFBeUIsVUFBVSxFQUFFLFFBQVE7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUIsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLGlCQUF3QixDQUFDO0lBQ3pFLENBQUM7SUFFTSwwQ0FBWSxHQUFuQixVQUFvQixPQUFPO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBZmEscUNBQWtCLEdBQUc7UUFDL0IsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBQzFFLENBQUM7SUFjTix5QkFBQztDQUFBLEFBbEJELENBQXdDLFFBQVEsR0FrQi9DO0FBbEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbVByb3BlcnR5RWRpdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkVkaXRvckhlbHBlciBleHRlbmRzIE5TT2JqZWN0IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgT2JqQ0V4cG9zZWRNZXRob2RzID0ge1xuICAgICAgICAnaGFuZGxlVGFwOic6IHsgcmV0dXJuczogaW50ZXJvcC50eXBlcy52b2lkLCBwYXJhbXM6IFtVSVZpZXcuY2xhc3MoKV0gfVxuICAgIH07XG5cbiAgICBwdWJsaWMgYnV0dG9uVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgZWRpdG9yOiBDdXN0b21Qcm9wZXJ0eUVkaXRvcjtcbiAgICBwdWJsaWMgaW9zVGFwSGFuZGxlcjtcblxuICAgIHB1YmxpYyB1cGRhdGVFZGl0b3JWYWx1ZShlZGl0b3JWaWV3LCBuZXdWYWx1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmJ1dHRvblZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIGVkaXRvclZpZXcuc2V0VGl0bGVGb3JTdGF0ZSh0aGlzLmJ1dHRvblZhbHVlLCBVSUNvbnRyb2xTdGF0ZS5Ob3JtYWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyAnaGFuZGxlVGFwOicoX3NlbmRlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmlvc1RhcEhhbmRsZXIoKTtcbiAgICB9XG59XG5cbiJdfQ==