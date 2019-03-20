"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
var strings_1 = require("~/core/models/domain/constants/strings");
var PriorityEnum;
(function (PriorityEnum) {
    PriorityEnum["Low"] = "Low";
    PriorityEnum["Medium"] = "Medium";
    PriorityEnum["High"] = "High";
    PriorityEnum["Critical"] = "Critical";
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
(function (PriorityEnum) {
    function isMax(priority) {
        return priority === PriorityEnum.Critical;
    }
    PriorityEnum.isMax = isMax;
    function isMin(priority) {
        return priority === PriorityEnum.Low;
    }
    PriorityEnum.isMin = isMin;
    function nextPriority(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return undefined;
            case PriorityEnum.High:
                return PriorityEnum.Critical;
            case PriorityEnum.Medium:
                return PriorityEnum.High;
            case PriorityEnum.Low:
                return PriorityEnum.Medium;
        }
    }
    PriorityEnum.nextPriority = nextPriority;
    function previousPriority(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return PriorityEnum.High;
            case PriorityEnum.High:
                return PriorityEnum.Medium;
            case PriorityEnum.Medium:
                return PriorityEnum.Low;
            case PriorityEnum.Low:
                return undefined;
        }
    }
    PriorityEnum.previousPriority = previousPriority;
    function getIndicatorClass(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return 'indicator-priority critical';
            case PriorityEnum.High:
                return 'indicator-priority high';
            case PriorityEnum.Medium:
                return 'indicator-priority medium';
            case PriorityEnum.Low:
                return 'indicator-priority low';
            default:
                return strings_1.EMPTY_STRING;
        }
    }
    PriorityEnum.getIndicatorClass = getIndicatorClass;
    function getColor(priority) {
        switch (priority) {
            case PriorityEnum.Critical:
                return new color_1.Color('#820101');
            case PriorityEnum.High:
                return new color_1.Color('#b27100');
            case PriorityEnum.Medium:
                return new color_1.Color('#0c6d00');
            case PriorityEnum.Low:
                return new color_1.Color('#002b6d');
        }
    }
    PriorityEnum.getColor = getColor;
})(PriorityEnum = exports.PriorityEnum || (exports.PriorityEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1wcmlvcml0eS5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1wcmlvcml0eS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0RBQStDO0FBQy9DLGtFQUFzRTtBQUV0RSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDdEIsMkJBQVcsQ0FBQTtJQUNYLGlDQUFpQixDQUFBO0lBQ2pCLDZCQUFhLENBQUE7SUFDYixxQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFDRCxXQUFpQixZQUFZO0lBQzNCLFNBQWdCLEtBQUssQ0FBQyxRQUFzQjtRQUMxQyxPQUFPLFFBQVEsS0FBSyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzVDLENBQUM7SUFGZSxrQkFBSyxRQUVwQixDQUFBO0lBQ0QsU0FBZ0IsS0FBSyxDQUFDLFFBQXNCO1FBQzFDLE9BQU8sUUFBUSxLQUFLLFlBQVksQ0FBQyxHQUFHLENBQUM7SUFDdkMsQ0FBQztJQUZlLGtCQUFLLFFBRXBCLENBQUE7SUFDRCxTQUFnQixZQUFZLENBQUMsUUFBc0I7UUFDakQsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxZQUFZLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQy9CLEtBQUssWUFBWSxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUMzQixLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNuQixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBWGUseUJBQVksZUFXM0IsQ0FBQTtJQUNELFNBQWdCLGdCQUFnQixDQUFDLFFBQXNCO1FBQ3JELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUMzQixLQUFLLFlBQVksQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDN0IsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDO1lBQzFCLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQVhlLDZCQUFnQixtQkFXL0IsQ0FBQTtJQUNELFNBQWdCLGlCQUFpQixDQUFDLFFBQXNCO1FBQ3RELFFBQVEsUUFBUSxFQUFFO1lBQ2hCLEtBQUssWUFBWSxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sNkJBQTZCLENBQUM7WUFDdkMsS0FBSyxZQUFZLENBQUMsSUFBSTtnQkFDcEIsT0FBTyx5QkFBeUIsQ0FBQztZQUNuQyxLQUFLLFlBQVksQ0FBQyxNQUFNO2dCQUN0QixPQUFPLDJCQUEyQixDQUFDO1lBQ3JDLEtBQUssWUFBWSxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8sd0JBQXdCLENBQUM7WUFDbEM7Z0JBQ0UsT0FBTyxzQkFBWSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQWJlLDhCQUFpQixvQkFhaEMsQ0FBQTtJQUNELFNBQWdCLFFBQVEsQ0FBQyxRQUFzQjtRQUM3QyxRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLFlBQVksQ0FBQyxRQUFRO2dCQUN4QixPQUFPLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLEtBQUssWUFBWSxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUIsS0FBSyxZQUFZLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixLQUFLLFlBQVksQ0FBQyxHQUFHO2dCQUNuQixPQUFPLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQVhlLHFCQUFRLFdBV3ZCLENBQUE7QUFDSCxDQUFDLEVBekRnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQXlENUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3InO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4vY29uc3RhbnRzL3N0cmluZ3MnO1xuXG5leHBvcnQgZW51bSBQcmlvcml0eUVudW0ge1xuICBMb3cgPSAnTG93JyxcbiAgTWVkaXVtID0gJ01lZGl1bScsXG4gIEhpZ2ggPSAnSGlnaCcsXG4gIENyaXRpY2FsID0gJ0NyaXRpY2FsJ1xufVxuZXhwb3J0IG5hbWVzcGFjZSBQcmlvcml0eUVudW0ge1xuICBleHBvcnQgZnVuY3Rpb24gaXNNYXgocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcmlvcml0eSA9PT0gUHJpb3JpdHlFbnVtLkNyaXRpY2FsO1xuICB9XG4gIGV4cG9ydCBmdW5jdGlvbiBpc01pbihwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByaW9yaXR5ID09PSBQcmlvcml0eUVudW0uTG93O1xuICB9XG4gIGV4cG9ydCBmdW5jdGlvbiBuZXh0UHJpb3JpdHkocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IFByaW9yaXR5RW51bSB7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBjYXNlIFByaW9yaXR5RW51bS5IaWdoOlxuICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkNyaXRpY2FsO1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uTWVkaXVtOlxuICAgICAgICByZXR1cm4gUHJpb3JpdHlFbnVtLkhpZ2g7XG4gICAgICBjYXNlIFByaW9yaXR5RW51bS5Mb3c6XG4gICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uTWVkaXVtO1xuICAgIH1cbiAgfVxuICBleHBvcnQgZnVuY3Rpb24gcHJldmlvdXNQcmlvcml0eShwcmlvcml0eTogUHJpb3JpdHlFbnVtKTogUHJpb3JpdHlFbnVtIHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlIFByaW9yaXR5RW51bS5Dcml0aWNhbDpcbiAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5IaWdoO1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uSGlnaDpcbiAgICAgICAgcmV0dXJuIFByaW9yaXR5RW51bS5NZWRpdW07XG4gICAgICBjYXNlIFByaW9yaXR5RW51bS5NZWRpdW06XG4gICAgICAgIHJldHVybiBQcmlvcml0eUVudW0uTG93O1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBleHBvcnQgZnVuY3Rpb24gZ2V0SW5kaWNhdG9yQ2xhc3MocHJpb3JpdHk6IFByaW9yaXR5RW51bSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IGNyaXRpY2FsJztcbiAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkhpZ2g6XG4gICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXByaW9yaXR5IGhpZ2gnO1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uTWVkaXVtOlxuICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBtZWRpdW0nO1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICByZXR1cm4gJ2luZGljYXRvci1wcmlvcml0eSBsb3cnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEVNUFRZX1NUUklORztcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yKHByaW9yaXR5OiBQcmlvcml0eUVudW0pOiBDb2xvciB7XG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uQ3JpdGljYWw6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoJyM4MjAxMDEnKTtcbiAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLkhpZ2g6XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3IoJyNiMjcxMDAnKTtcbiAgICAgIGNhc2UgUHJpb3JpdHlFbnVtLk1lZGl1bTpcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcignIzBjNmQwMCcpO1xuICAgICAgY2FzZSBQcmlvcml0eUVudW0uTG93OlxuICAgICAgICByZXR1cm4gbmV3IENvbG9yKCcjMDAyYjZkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=