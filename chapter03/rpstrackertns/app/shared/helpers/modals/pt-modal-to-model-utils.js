"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ptUserToModalListDisplayItem(u) {
    if (!u) {
        return undefined;
    }
    else {
        var di = {
            key: u.id.toString(),
            value: u.fullName,
            img: u.avatar,
            payload: u
        };
        return di;
    }
}
exports.ptUserToModalListDisplayItem = ptUserToModalListDisplayItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtbW9kYWwtdG8tbW9kZWwtdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdC1tb2RhbC10by1tb2RlbC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLFNBQWdCLDRCQUE0QixDQUMxQyxDQUFTO0lBRVQsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO1NBQU07UUFDTCxJQUFNLEVBQUUsR0FBbUM7WUFDekMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNqQixHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQztBQWRELG9FQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHRVc2VyIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuaW1wb3J0IHsgUHRNb2RhbExpc3REaXNwbGF5SXRlbSB9IGZyb20gJ34vc2hhcmVkL2hlbHBlcnMvbW9kYWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHB0VXNlclRvTW9kYWxMaXN0RGlzcGxheUl0ZW0oXG4gIHU6IFB0VXNlclxuKTogUHRNb2RhbExpc3REaXNwbGF5SXRlbTxQdFVzZXI+IHtcbiAgaWYgKCF1KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkaTogUHRNb2RhbExpc3REaXNwbGF5SXRlbTxQdFVzZXI+ID0ge1xuICAgICAga2V5OiB1LmlkLnRvU3RyaW5nKCksXG4gICAgICB2YWx1ZTogdS5mdWxsTmFtZSxcbiAgICAgIGltZzogdS5hdmF0YXIsXG4gICAgICBwYXlsb2FkOiB1XG4gICAgfTtcbiAgICByZXR1cm4gZGk7XG4gIH1cbn1cbiJdfQ==