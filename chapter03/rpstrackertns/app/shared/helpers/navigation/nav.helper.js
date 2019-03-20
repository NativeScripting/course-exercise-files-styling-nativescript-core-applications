"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var label_1 = require("tns-core-modules/ui/label");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var page_1 = require("tns-core-modules/ui/page");
var routes_1 = require("./routes");
function getCurrentPage() {
    var currentPage = frame_1.topmost().currentPage;
    return currentPage;
}
exports.getCurrentPage = getCurrentPage;
function navigate(pageModuleNameOrNavEntry, otherFrame) {
    var navFrame = otherFrame ? otherFrame : frame_1.topmost();
    if (typeof pageModuleNameOrNavEntry === 'object') {
        navFrame.navigate(pageModuleNameOrNavEntry);
    }
    else if (typeof pageModuleNameOrNavEntry === 'string') {
        navFrame.navigate(pageModuleNameOrNavEntry);
    }
}
exports.navigate = navigate;
function back() {
    frame_1.topmost().goBack();
}
exports.back = back;
function goToLoginPage(animated) {
    var navEntry = {
        moduleName: routes_1.ROUTES.loginPage,
        clearHistory: true,
        animated: animated
    };
    navigate(navEntry);
}
exports.goToLoginPage = goToLoginPage;
function goToRegisterPage(clearHistory) {
    var navEntry = {
        moduleName: routes_1.ROUTES.registerPage,
        clearHistory: clearHistory,
        animated: false
    };
    navigate(navEntry);
}
exports.goToRegisterPage = goToRegisterPage;
function goToBacklogPage(clearHistory) {
    var navEntry = {
        moduleName: routes_1.ROUTES.backlogPage,
        clearHistory: clearHistory
    };
    navigate(navEntry);
}
exports.goToBacklogPage = goToBacklogPage;
function goToDetailPage(context, clearHistory) {
    var navEntry = {
        moduleName: routes_1.ROUTES.detailPage,
        clearHistory: clearHistory,
        context: context
    };
    navigate(navEntry);
}
exports.goToDetailPage = goToDetailPage;
function goToSettingsPage2() {
    var navEntry = {
        moduleName: routes_1.ROUTES.settingsPage
    };
    navigate(navEntry);
}
exports.goToSettingsPage2 = goToSettingsPage2;
function goToSettingsPage() {
    navigate({
        create: function () {
            var stack = new stack_layout_1.StackLayout();
            var label = new label_1.Label();
            label.text = 'Hello, world!';
            stack.addChild(label);
            var page = new page_1.Page();
            page.content = stack;
            return page;
        }
    });
}
exports.goToSettingsPage = goToSettingsPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNEU7QUFDNUUsbURBQWtEO0FBQ2xELHlFQUF1RTtBQUN2RSxpREFBZ0Q7QUFDaEQsbUNBQWtDO0FBRWxDLFNBQWdCLGNBQWM7SUFDNUIsSUFBTSxXQUFXLEdBQUcsZUFBTyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQzFDLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFIRCx3Q0FHQztBQUVELFNBQWdCLFFBQVEsQ0FDdEIsd0JBQWtELEVBQ2xELFVBQWtCO0lBRWxCLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFPLEVBQUUsQ0FBQztJQUNyRCxJQUFJLE9BQU8sd0JBQXdCLEtBQUssUUFBUSxFQUFFO1FBQ2hELFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQztLQUM3QztTQUFNLElBQUksT0FBTyx3QkFBd0IsS0FBSyxRQUFRLEVBQUU7UUFDdkQsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQzdDO0FBQ0gsQ0FBQztBQVZELDRCQVVDO0FBRUQsU0FBZ0IsSUFBSTtJQUNsQixlQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRkQsb0JBRUM7QUFFRCxTQUFnQixhQUFhLENBQUMsUUFBa0I7SUFDOUMsSUFBTSxRQUFRLEdBQW9CO1FBQ2hDLFVBQVUsRUFBRSxlQUFNLENBQUMsU0FBUztRQUM1QixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDO0lBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFQRCxzQ0FPQztBQUVELFNBQWdCLGdCQUFnQixDQUFDLFlBQXNCO0lBQ3JELElBQU0sUUFBUSxHQUFvQjtRQUNoQyxVQUFVLEVBQUUsZUFBTSxDQUFDLFlBQVk7UUFDL0IsWUFBWSxFQUFFLFlBQVk7UUFDMUIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztJQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBUEQsNENBT0M7QUFFRCxTQUFnQixlQUFlLENBQUMsWUFBc0I7SUFDcEQsSUFBTSxRQUFRLEdBQW9CO1FBQ2hDLFVBQVUsRUFBRSxlQUFNLENBQUMsV0FBVztRQUM5QixZQUFZLEVBQUUsWUFBWTtLQUMzQixDQUFDO0lBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFORCwwQ0FNQztBQUVELFNBQWdCLGNBQWMsQ0FBSSxPQUFVLEVBQUUsWUFBc0I7SUFDbEUsSUFBTSxRQUFRLEdBQW9CO1FBQ2hDLFVBQVUsRUFBRSxlQUFNLENBQUMsVUFBVTtRQUM3QixZQUFZLEVBQUUsWUFBWTtRQUMxQixPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDO0lBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3JCLENBQUM7QUFQRCx3Q0FPQztBQUVELFNBQWdCLGlCQUFpQjtJQUMvQixJQUFNLFFBQVEsR0FBb0I7UUFDaEMsVUFBVSxFQUFFLGVBQU0sQ0FBQyxZQUFZO0tBQ2hDLENBQUM7SUFDRixRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUxELDhDQUtDO0FBRUQsU0FBZ0IsZ0JBQWdCO0lBQzlCLFFBQVEsQ0FBQztRQUNQLE1BQU0sRUFBRTtZQUNOLElBQU0sS0FBSyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7WUFDN0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0QixJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFiRCw0Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lLCBOYXZpZ2F0aW9uRW50cnksIHRvcG1vc3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGFnZSgpIHtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSB0b3Btb3N0KCkuY3VycmVudFBhZ2U7XG4gIHJldHVybiBjdXJyZW50UGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlKFxuICBwYWdlTW9kdWxlTmFtZU9yTmF2RW50cnk6IHN0cmluZyB8IE5hdmlnYXRpb25FbnRyeSxcbiAgb3RoZXJGcmFtZT86IEZyYW1lXG4pIHtcbiAgY29uc3QgbmF2RnJhbWUgPSBvdGhlckZyYW1lID8gb3RoZXJGcmFtZSA6IHRvcG1vc3QoKTtcbiAgaWYgKHR5cGVvZiBwYWdlTW9kdWxlTmFtZU9yTmF2RW50cnkgPT09ICdvYmplY3QnKSB7XG4gICAgbmF2RnJhbWUubmF2aWdhdGUocGFnZU1vZHVsZU5hbWVPck5hdkVudHJ5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGFnZU1vZHVsZU5hbWVPck5hdkVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgIG5hdkZyYW1lLm5hdmlnYXRlKHBhZ2VNb2R1bGVOYW1lT3JOYXZFbnRyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2soKSB7XG4gIHRvcG1vc3QoKS5nb0JhY2soKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9Mb2dpblBhZ2UoYW5pbWF0ZWQ/OiBib29sZWFuKSB7XG4gIGNvbnN0IG5hdkVudHJ5OiBOYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgbW9kdWxlTmFtZTogUk9VVEVTLmxvZ2luUGFnZSxcbiAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgYW5pbWF0ZWQ6IGFuaW1hdGVkXG4gIH07XG4gIG5hdmlnYXRlKG5hdkVudHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9SZWdpc3RlclBhZ2UoY2xlYXJIaXN0b3J5PzogYm9vbGVhbikge1xuICBjb25zdCBuYXZFbnRyeTogTmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgIG1vZHVsZU5hbWU6IFJPVVRFUy5yZWdpc3RlclBhZ2UsXG4gICAgY2xlYXJIaXN0b3J5OiBjbGVhckhpc3RvcnksXG4gICAgYW5pbWF0ZWQ6IGZhbHNlXG4gIH07XG4gIG5hdmlnYXRlKG5hdkVudHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9CYWNrbG9nUGFnZShjbGVhckhpc3Rvcnk/OiBib29sZWFuKSB7XG4gIGNvbnN0IG5hdkVudHJ5OiBOYXZpZ2F0aW9uRW50cnkgPSB7XG4gICAgbW9kdWxlTmFtZTogUk9VVEVTLmJhY2tsb2dQYWdlLFxuICAgIGNsZWFySGlzdG9yeTogY2xlYXJIaXN0b3J5XG4gIH07XG4gIG5hdmlnYXRlKG5hdkVudHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9EZXRhaWxQYWdlPFQ+KGNvbnRleHQ6IFQsIGNsZWFySGlzdG9yeT86IGJvb2xlYW4pIHtcbiAgY29uc3QgbmF2RW50cnk6IE5hdmlnYXRpb25FbnRyeSA9IHtcbiAgICBtb2R1bGVOYW1lOiBST1VURVMuZGV0YWlsUGFnZSxcbiAgICBjbGVhckhpc3Rvcnk6IGNsZWFySGlzdG9yeSxcbiAgICBjb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIG5hdmlnYXRlKG5hdkVudHJ5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9TZXR0aW5nc1BhZ2UyKCkge1xuICBjb25zdCBuYXZFbnRyeTogTmF2aWdhdGlvbkVudHJ5ID0ge1xuICAgIG1vZHVsZU5hbWU6IFJPVVRFUy5zZXR0aW5nc1BhZ2VcbiAgfTtcbiAgbmF2aWdhdGUobmF2RW50cnkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29Ub1NldHRpbmdzUGFnZSgpIHtcbiAgbmF2aWdhdGUoe1xuICAgIGNyZWF0ZTogKCkgPT4ge1xuICAgICAgY29uc3Qgc3RhY2sgPSBuZXcgU3RhY2tMYXlvdXQoKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKCk7XG4gICAgICBsYWJlbC50ZXh0ID0gJ0hlbGxvLCB3b3JsZCEnO1xuICAgICAgc3RhY2suYWRkQ2hpbGQobGFiZWwpO1xuXG4gICAgICBjb25zdCBwYWdlID0gbmV3IFBhZ2UoKTtcbiAgICAgIHBhZ2UuY29udGVudCA9IHN0YWNrO1xuICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==