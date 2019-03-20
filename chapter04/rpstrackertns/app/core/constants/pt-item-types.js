"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = require("~/core/models/domain/constants/strings");
var PT_ITEM_TYPE_PBI = 'PBI';
var PT_ITEM_TYPE_BUG = 'Bug';
var PT_ITEM_TYPE_CHORE = 'Chore';
var PT_ITEM_TYPE_IMPEDIMENT = 'Impediment';
var ItemType = /** @class */ (function () {
    function ItemType(ptItemType) {
        this.ptItemType = ptItemType;
    }
    Object.defineProperty(ItemType, "Pbi", {
        get: function () {
            return this.itPbi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemType, "Bug", {
        get: function () {
            return this.itBug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemType, "Chore", {
        get: function () {
            return this.itChore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemType, "Impediment", {
        get: function () {
            return this.itImpediment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemType, "List", {
        get: function () {
            return [ItemType.Bug, ItemType.Pbi, ItemType.Chore, ItemType.Impediment];
        },
        enumerable: true,
        configurable: true
    });
    ItemType.indicatorClassFromType = function (ptItemType) {
        switch (ptItemType) {
            case PT_ITEM_TYPE_PBI:
                return 'indicator-pbi';
            case PT_ITEM_TYPE_BUG:
                return 'indicator-bug';
            case PT_ITEM_TYPE_CHORE:
                return 'indicator-chore';
            case PT_ITEM_TYPE_IMPEDIMENT:
                return 'indicator-impediment';
            default:
                return strings_1.EMPTY_STRING;
        }
    };
    ItemType.imageResFromType = function (ptItemType) {
        switch (ptItemType) {
            case PT_ITEM_TYPE_PBI:
                return 'res://ipbi';
            case PT_ITEM_TYPE_BUG:
                return 'res://ibug';
            case PT_ITEM_TYPE_CHORE:
                return 'res://ichore';
            case PT_ITEM_TYPE_IMPEDIMENT:
                return 'res://iimpediment';
            default:
                return strings_1.EMPTY_STRING;
        }
    };
    Object.defineProperty(ItemType.prototype, "PtItemType", {
        get: function () {
            return this.ptItemType;
        },
        enumerable: true,
        configurable: true
    });
    ItemType.fromString = function (typeStr) {
        return ItemType.List.find(function (i) { return i.PtItemType === typeStr; });
    };
    ItemType.prototype.getPtTypeImage = function () {
        return ItemType.imageResFromType(this.PtItemType);
    };
    ItemType.prototype.getIndicatorClass = function () {
        return ItemType.indicatorClassFromType(this.PtItemType);
    };
    ItemType.itPbi = new ItemType(PT_ITEM_TYPE_PBI);
    ItemType.itBug = new ItemType(PT_ITEM_TYPE_BUG);
    ItemType.itChore = new ItemType(PT_ITEM_TYPE_CHORE);
    ItemType.itImpediment = new ItemType(PT_ITEM_TYPE_IMPEDIMENT);
    return ItemType;
}());
exports.ItemType = ItemType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtaXRlbS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInB0LWl0ZW0tdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBc0U7QUFHdEUsSUFBTSxnQkFBZ0IsR0FBZSxLQUFLLENBQUM7QUFDM0MsSUFBTSxnQkFBZ0IsR0FBZSxLQUFLLENBQUM7QUFDM0MsSUFBTSxrQkFBa0IsR0FBZSxPQUFPLENBQUM7QUFDL0MsSUFBTSx1QkFBdUIsR0FBZSxZQUFZLENBQUM7QUFFekQ7SUE0REUsa0JBQTRCLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBdER0RCxzQkFBa0IsZUFBRzthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixlQUFHO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGlCQUFLO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLHNCQUFVO2FBQTVCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGdCQUFJO2FBQXRCO1lBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRSxDQUFDOzs7T0FBQTtJQUVhLCtCQUFzQixHQUFwQyxVQUFxQyxVQUFzQjtRQUN6RCxRQUFRLFVBQVUsRUFBRTtZQUNsQixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxlQUFlLENBQUM7WUFDekIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssdUJBQXVCO2dCQUMxQixPQUFPLHNCQUFzQixDQUFDO1lBQ2hDO2dCQUNFLE9BQU8sc0JBQVksQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFYSx5QkFBZ0IsR0FBOUIsVUFBK0IsVUFBc0I7UUFDbkQsUUFBUSxVQUFVLEVBQUU7WUFDbEIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxjQUFjLENBQUM7WUFDeEIsS0FBSyx1QkFBdUI7Z0JBQzFCLE9BQU8sbUJBQW1CLENBQUM7WUFDN0I7Z0JBQ0UsT0FBTyxzQkFBWSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHNCQUFXLGdDQUFVO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBSWEsbUJBQVUsR0FBeEIsVUFBeUIsT0FBZTtRQUN0QyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0saUNBQWMsR0FBckI7UUFDRSxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLG9DQUFpQixHQUF4QjtRQUNFLE9BQU8sUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBdkVjLGNBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLGNBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZDLGdCQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzQyxxQkFBWSxHQUFHLElBQUksUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFxRXRFLGVBQUM7Q0FBQSxBQXpFRCxJQXlFQztBQXpFWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gJ34vY29yZS9tb2RlbHMvZG9tYWluL2NvbnN0YW50cy9zdHJpbmdzJztcbmltcG9ydCB7IFB0SXRlbVR5cGUgfSBmcm9tICd+L2NvcmUvbW9kZWxzL2RvbWFpbi90eXBlcyc7XG5cbmNvbnN0IFBUX0lURU1fVFlQRV9QQkk6IFB0SXRlbVR5cGUgPSAnUEJJJztcbmNvbnN0IFBUX0lURU1fVFlQRV9CVUc6IFB0SXRlbVR5cGUgPSAnQnVnJztcbmNvbnN0IFBUX0lURU1fVFlQRV9DSE9SRTogUHRJdGVtVHlwZSA9ICdDaG9yZSc7XG5jb25zdCBQVF9JVEVNX1RZUEVfSU1QRURJTUVOVDogUHRJdGVtVHlwZSA9ICdJbXBlZGltZW50JztcblxuZXhwb3J0IGNsYXNzIEl0ZW1UeXBlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaXRQYmkgPSBuZXcgSXRlbVR5cGUoUFRfSVRFTV9UWVBFX1BCSSk7XG4gIHByaXZhdGUgc3RhdGljIGl0QnVnID0gbmV3IEl0ZW1UeXBlKFBUX0lURU1fVFlQRV9CVUcpO1xuICBwcml2YXRlIHN0YXRpYyBpdENob3JlID0gbmV3IEl0ZW1UeXBlKFBUX0lURU1fVFlQRV9DSE9SRSk7XG4gIHByaXZhdGUgc3RhdGljIGl0SW1wZWRpbWVudCA9IG5ldyBJdGVtVHlwZShQVF9JVEVNX1RZUEVfSU1QRURJTUVOVCk7XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgUGJpKCkge1xuICAgIHJldHVybiB0aGlzLml0UGJpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgQnVnKCkge1xuICAgIHJldHVybiB0aGlzLml0QnVnO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgQ2hvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRDaG9yZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IEltcGVkaW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRJbXBlZGltZW50O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgTGlzdCgpIHtcbiAgICByZXR1cm4gW0l0ZW1UeXBlLkJ1ZywgSXRlbVR5cGUuUGJpLCBJdGVtVHlwZS5DaG9yZSwgSXRlbVR5cGUuSW1wZWRpbWVudF07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluZGljYXRvckNsYXNzRnJvbVR5cGUocHRJdGVtVHlwZTogUHRJdGVtVHlwZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChwdEl0ZW1UeXBlKSB7XG4gICAgICBjYXNlIFBUX0lURU1fVFlQRV9QQkk6XG4gICAgICAgIHJldHVybiAnaW5kaWNhdG9yLXBiaSc7XG4gICAgICBjYXNlIFBUX0lURU1fVFlQRV9CVUc6XG4gICAgICAgIHJldHVybiAnaW5kaWNhdG9yLWJ1Zyc7XG4gICAgICBjYXNlIFBUX0lURU1fVFlQRV9DSE9SRTpcbiAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItY2hvcmUnO1xuICAgICAgY2FzZSBQVF9JVEVNX1RZUEVfSU1QRURJTUVOVDpcbiAgICAgICAgcmV0dXJuICdpbmRpY2F0b3ItaW1wZWRpbWVudCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gRU1QVFlfU1RSSU5HO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW1hZ2VSZXNGcm9tVHlwZShwdEl0ZW1UeXBlOiBQdEl0ZW1UeXBlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHB0SXRlbVR5cGUpIHtcbiAgICAgIGNhc2UgUFRfSVRFTV9UWVBFX1BCSTpcbiAgICAgICAgcmV0dXJuICdyZXM6Ly9pcGJpJztcbiAgICAgIGNhc2UgUFRfSVRFTV9UWVBFX0JVRzpcbiAgICAgICAgcmV0dXJuICdyZXM6Ly9pYnVnJztcbiAgICAgIGNhc2UgUFRfSVRFTV9UWVBFX0NIT1JFOlxuICAgICAgICByZXR1cm4gJ3JlczovL2ljaG9yZSc7XG4gICAgICBjYXNlIFBUX0lURU1fVFlQRV9JTVBFRElNRU5UOlxuICAgICAgICByZXR1cm4gJ3JlczovL2lpbXBlZGltZW50JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBFTVBUWV9TVFJJTkc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBQdEl0ZW1UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnB0SXRlbVR5cGU7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgcHRJdGVtVHlwZTogUHRJdGVtVHlwZSkge31cblxuICBwdWJsaWMgc3RhdGljIGZyb21TdHJpbmcodHlwZVN0cjogc3RyaW5nKTogSXRlbVR5cGUge1xuICAgIHJldHVybiBJdGVtVHlwZS5MaXN0LmZpbmQoaSA9PiBpLlB0SXRlbVR5cGUgPT09IHR5cGVTdHIpO1xuICB9XG5cbiAgcHVibGljIGdldFB0VHlwZUltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEl0ZW1UeXBlLmltYWdlUmVzRnJvbVR5cGUodGhpcy5QdEl0ZW1UeXBlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbmRpY2F0b3JDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBJdGVtVHlwZS5pbmRpY2F0b3JDbGFzc0Zyb21UeXBlKHRoaXMuUHRJdGVtVHlwZSk7XG4gIH1cbn1cbiJdfQ==