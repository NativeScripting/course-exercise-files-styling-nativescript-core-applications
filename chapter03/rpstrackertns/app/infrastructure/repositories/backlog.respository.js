"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_error_handler_1 = require("~/infrastructure/fetch-error-handler");
/*
(<any>fetch) = (url: string): Promise<Response> => {
  console.log('calling overridden fetch' + url);
  return Promise.resolve(null);
};
*/
// global['bob'] = function() {
////  console.log('hi bob');
// };
var alex = 1;
var BacklogRepository = /** @class */ (function () {
    function BacklogRepository(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
    }
    BacklogRepository.prototype.getFilteredBacklogUrl = function (currentPreset, currentUserId) {
        switch (currentPreset) {
            case 'my':
                if (currentUserId) {
                    return this.apiEndpoint + "/myItems?userId=" + currentUserId;
                }
                else {
                    return this.apiEndpoint + "/backlog?i=" + alex;
                }
            case 'open':
                return this.apiEndpoint + "/openItems";
            case 'closed':
                return this.apiEndpoint + "/closedItems";
            default:
                return this.apiEndpoint + "/backlog";
        }
    };
    BacklogRepository.prototype.getPtItemUrl = function (itemId) {
        return this.apiEndpoint + "/item/" + itemId;
    };
    BacklogRepository.prototype.postPtItemUrl = function () {
        return this.apiEndpoint + "/item";
    };
    BacklogRepository.prototype.putPtItemUrl = function (itemId) {
        return this.apiEndpoint + "/item/" + itemId;
    };
    BacklogRepository.prototype.deletePtItemUrl = function (itemId) {
        return this.apiEndpoint + "/item/" + itemId;
    };
    BacklogRepository.prototype.postPtTaskUrl = function () {
        return this.apiEndpoint + "/task";
    };
    BacklogRepository.prototype.putPtTaskUrl = function (taskId) {
        return this.apiEndpoint + "/task/" + taskId;
    };
    BacklogRepository.prototype.postPtCommentUrl = function () {
        return this.apiEndpoint + "/comment";
    };
    BacklogRepository.prototype.deletePtCommentUrl = function (commentId) {
        return this.apiEndpoint + "/comment/" + commentId;
    };
    BacklogRepository.prototype.fetchPtItems = function (currentPreset, currentUserId, errorHandler, successHandler) {
        fetch(this.getFilteredBacklogUrl(currentPreset, currentUserId), {
            method: 'GET'
        })
            .then(function (response) {
            console.log('RESPONSE RECEIVED');
            return response.json();
        })
            .then(function (data) {
            console.log(data.length);
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.insertPtItem = function (item, errorHandler, successHandler) {
        fetch(this.postPtItemUrl(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: item })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.getPtItem = function (ptItemId, errorHandler, successHandler) {
        fetch(this.getPtItemUrl(ptItemId), {
            method: 'GET'
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.updatePtItem = function (item, errorHandler, successHandler) {
        fetch(this.putPtItemUrl(item.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: item })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.deletePtItem = function (itemId, errorHandler, successHandler) {
        fetch(this.deletePtItemUrl(itemId), {
            method: 'DELETE'
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function () {
            successHandler();
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.insertPtTask = function (task, ptItemId, errorHandler, successHandler) {
        fetch(this.postPtTaskUrl(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task, itemId: ptItemId })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.updatePtTask = function (task, ptItemId, errorHandler, successHandler) {
        fetch(this.putPtTaskUrl(task.id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task, itemId: ptItemId })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.insertPtComment = function (comment, ptItemId, errorHandler, successHandler) {
        fetch(this.postPtCommentUrl(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment,
                itemId: ptItemId
            })
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function (data) {
            successHandler(data);
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    BacklogRepository.prototype.deletePtComment = function (ptCommentId, errorHandler, successHandler) {
        fetch(this.deletePtCommentUrl(ptCommentId), {
            method: 'DELETE'
        })
            .then(fetch_error_handler_1.handleFetchErrors)
            .then(function () {
            successHandler();
        })
            .catch(function (er) {
            errorHandler(er);
        });
    };
    return BacklogRepository;
}());
exports.BacklogRepository = BacklogRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2xvZy5yZXNwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2tsb2cucmVzcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSw0RUFBeUU7QUFFekU7Ozs7O0VBS0U7QUFFRiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUM7QUFFZjtJQUNFLDJCQUFtQixXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUFHLENBQUM7SUFFbEMsaURBQXFCLEdBQTdCLFVBQ0UsYUFBeUIsRUFDekIsYUFBc0I7UUFFdEIsUUFBUSxhQUFhLEVBQUU7WUFDckIsS0FBSyxJQUFJO2dCQUNQLElBQUksYUFBYSxFQUFFO29CQUNqQixPQUFVLElBQUksQ0FBQyxXQUFXLHdCQUFtQixhQUFlLENBQUM7aUJBQzlEO3FCQUFNO29CQUNMLE9BQVUsSUFBSSxDQUFDLFdBQVcsbUJBQWMsSUFBTSxDQUFDO2lCQUNoRDtZQUNILEtBQUssTUFBTTtnQkFDVCxPQUFVLElBQUksQ0FBQyxXQUFXLGVBQVksQ0FBQztZQUN6QyxLQUFLLFFBQVE7Z0JBQ1gsT0FBVSxJQUFJLENBQUMsV0FBVyxpQkFBYyxDQUFDO1lBQzNDO2dCQUNFLE9BQVUsSUFBSSxDQUFDLFdBQVcsYUFBVSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVPLHdDQUFZLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsT0FBVSxJQUFJLENBQUMsV0FBVyxjQUFTLE1BQVEsQ0FBQztJQUM5QyxDQUFDO0lBRU8seUNBQWEsR0FBckI7UUFDRSxPQUFVLElBQUksQ0FBQyxXQUFXLFVBQU8sQ0FBQztJQUNwQyxDQUFDO0lBRU8sd0NBQVksR0FBcEIsVUFBcUIsTUFBYztRQUNqQyxPQUFVLElBQUksQ0FBQyxXQUFXLGNBQVMsTUFBUSxDQUFDO0lBQzlDLENBQUM7SUFFTywyQ0FBZSxHQUF2QixVQUF3QixNQUFjO1FBQ3BD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VUFBQSxFQUFFO1lBQ1AsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJDQUFlLEdBQXRCLFVBQ0UsV0FBbUIsRUFDbkIsWUFBa0MsRUFDbEMsY0FBMEI7UUFFMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMxQyxNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO2FBQ0MsSUFBSSxDQUFDLHVDQUFpQixDQUFDO2FBQ3ZCLElBQUksQ0FBQztZQUNKLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEVBQUU7WUFDUCxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBOU9ELElBOE9DO0FBOU9ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB0QmFja2xvZ1JlcG9zaXRvcnkgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcG9zaXRvcmllcyc7XG5pbXBvcnQgeyBQdENvbW1lbnQsIFB0SXRlbSwgUHRUYXNrIH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuaW1wb3J0IHsgUHJlc2V0VHlwZSB9IGZyb20gJ34vY29yZS9tb2RlbHMvdHlwZXMnO1xuaW1wb3J0IHsgaGFuZGxlRmV0Y2hFcnJvcnMgfSBmcm9tICd+L2luZnJhc3RydWN0dXJlL2ZldGNoLWVycm9yLWhhbmRsZXInO1xuXG4vKlxuKDxhbnk+ZmV0Y2gpID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICBjb25zb2xlLmxvZygnY2FsbGluZyBvdmVycmlkZGVuIGZldGNoJyArIHVybCk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59O1xuKi9cblxuLy8gZ2xvYmFsWydib2InXSA9IGZ1bmN0aW9uKCkge1xuLy8vLyAgY29uc29sZS5sb2coJ2hpIGJvYicpO1xuLy8gfTtcblxuY29uc3QgYWxleCA9IDE7XG5cbmV4cG9ydCBjbGFzcyBCYWNrbG9nUmVwb3NpdG9yeSBpbXBsZW1lbnRzIFB0QmFja2xvZ1JlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBpRW5kcG9pbnQ6IHN0cmluZykge31cblxuICBwcml2YXRlIGdldEZpbHRlcmVkQmFja2xvZ1VybChcbiAgICBjdXJyZW50UHJlc2V0OiBQcmVzZXRUeXBlLFxuICAgIGN1cnJlbnRVc2VySWQ/OiBudW1iZXJcbiAgKSB7XG4gICAgc3dpdGNoIChjdXJyZW50UHJlc2V0KSB7XG4gICAgICBjYXNlICdteSc6XG4gICAgICAgIGlmIChjdXJyZW50VXNlcklkKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3RoaXMuYXBpRW5kcG9pbnR9L215SXRlbXM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS9iYWNrbG9nP2k9JHthbGV4fWA7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vb3Blbkl0ZW1zYDtcbiAgICAgIGNhc2UgJ2Nsb3NlZCc6XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS9jbG9zZWRJdGVtc2A7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vYmFja2xvZ2A7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQdEl0ZW1VcmwoaXRlbUlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vaXRlbS8ke2l0ZW1JZH1gO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3N0UHRJdGVtVXJsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS9pdGVtYDtcbiAgfVxuXG4gIHByaXZhdGUgcHV0UHRJdGVtVXJsKGl0ZW1JZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpRW5kcG9pbnR9L2l0ZW0vJHtpdGVtSWR9YDtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlUHRJdGVtVXJsKGl0ZW1JZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpRW5kcG9pbnR9L2l0ZW0vJHtpdGVtSWR9YDtcbiAgfVxuXG4gIHByaXZhdGUgcG9zdFB0VGFza1VybCgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vdGFza2A7XG4gIH1cblxuICBwcml2YXRlIHB1dFB0VGFza1VybCh0YXNrSWQ6IG51bWJlcikge1xuICAgIHJldHVybiBgJHt0aGlzLmFwaUVuZHBvaW50fS90YXNrLyR7dGFza0lkfWA7XG4gIH1cblxuICBwcml2YXRlIHBvc3RQdENvbW1lbnRVcmwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuYXBpRW5kcG9pbnR9L2NvbW1lbnRgO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVQdENvbW1lbnRVcmwoY29tbWVudElkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5hcGlFbmRwb2ludH0vY29tbWVudC8ke2NvbW1lbnRJZH1gO1xuICB9XG5cbiAgcHVibGljIGZldGNoUHRJdGVtcyhcbiAgICBjdXJyZW50UHJlc2V0OiBQcmVzZXRUeXBlLFxuICAgIGN1cnJlbnRVc2VySWQ6IG51bWJlcixcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAoZGF0YTogUHRJdGVtW10pID0+IHZvaWRcbiAgKSB7XG4gICAgZmV0Y2godGhpcy5nZXRGaWx0ZXJlZEJhY2tsb2dVcmwoY3VycmVudFByZXNldCwgY3VycmVudFVzZXJJZCksIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnUkVTUE9OU0UgUkVDRUlWRUQnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YTogUHRJdGVtW10pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5sZW5ndGgpO1xuICAgICAgICBzdWNjZXNzSGFuZGxlcihkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXIgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXIoZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5zZXJ0UHRJdGVtKFxuICAgIGl0ZW06IFB0SXRlbSxcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAobmV4dEl0ZW06IFB0SXRlbSkgPT4gdm9pZFxuICApIHtcbiAgICBmZXRjaCh0aGlzLnBvc3RQdEl0ZW1VcmwoKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW06IGl0ZW0gfSlcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldFB0SXRlbShcbiAgICBwdEl0ZW1JZDogbnVtYmVyLFxuICAgIGVycm9ySGFuZGxlcjogKGVycm9yOiBhbnkpID0+IHZvaWQsXG4gICAgc3VjY2Vzc0hhbmRsZXI6IChwdEl0ZW06IFB0SXRlbSkgPT4gdm9pZFxuICApIHtcbiAgICBmZXRjaCh0aGlzLmdldFB0SXRlbVVybChwdEl0ZW1JZCksIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVB0SXRlbShcbiAgICBpdGVtOiBQdEl0ZW0sXG4gICAgZXJyb3JIYW5kbGVyOiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcbiAgICBzdWNjZXNzSGFuZGxlcjogKHVwZGF0ZWRJdGVtOiBQdEl0ZW0pID0+IHZvaWRcbiAgKSB7XG4gICAgZmV0Y2godGhpcy5wdXRQdEl0ZW1VcmwoaXRlbS5pZCksIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW06IGl0ZW0gfSlcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVB0SXRlbShcbiAgICBpdGVtSWQ6IG51bWJlcixcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAoKSA9PiB2b2lkXG4gICkge1xuICAgIGZldGNoKHRoaXMuZGVsZXRlUHRJdGVtVXJsKGl0ZW1JZCksIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHN1Y2Nlc3NIYW5kbGVyKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluc2VydFB0VGFzayhcbiAgICB0YXNrOiBQdFRhc2ssXG4gICAgcHRJdGVtSWQ6IG51bWJlcixcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAobmV4dFRhc2s6IFB0VGFzaykgPT4gdm9pZFxuICApIHtcbiAgICBmZXRjaCh0aGlzLnBvc3RQdFRhc2tVcmwoKSwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhc2s6IHRhc2ssIGl0ZW1JZDogcHRJdGVtSWQgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVB0VGFzayhcbiAgICB0YXNrOiBQdFRhc2ssXG4gICAgcHRJdGVtSWQ6IG51bWJlcixcbiAgICBlcnJvckhhbmRsZXI6IChlcnJvcjogYW55KSA9PiB2b2lkLFxuICAgIHN1Y2Nlc3NIYW5kbGVyOiAodXBkYXRlZFRhc2s6IFB0VGFzaykgPT4gdm9pZFxuICApIHtcbiAgICBmZXRjaCh0aGlzLnB1dFB0VGFza1VybCh0YXNrLmlkKSwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGFzazogdGFzaywgaXRlbUlkOiBwdEl0ZW1JZCB9KVxuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVGZXRjaEVycm9ycylcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzdWNjZXNzSGFuZGxlcihkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXIgPT4ge1xuICAgICAgICBlcnJvckhhbmRsZXIoZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5zZXJ0UHRDb21tZW50KFxuICAgIGNvbW1lbnQ6IFB0Q29tbWVudCxcbiAgICBwdEl0ZW1JZDogbnVtYmVyLFxuICAgIGVycm9ySGFuZGxlcjogKGVycm9yOiBhbnkpID0+IHZvaWQsXG4gICAgc3VjY2Vzc0hhbmRsZXI6IChuZXh0Q29tbWVudDogUHRDb21tZW50KSA9PiB2b2lkXG4gICkge1xuICAgIGZldGNoKHRoaXMucG9zdFB0Q29tbWVudFVybCgpLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgaXRlbUlkOiBwdEl0ZW1JZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oaGFuZGxlRmV0Y2hFcnJvcnMpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc3VjY2Vzc0hhbmRsZXIoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlbGV0ZVB0Q29tbWVudChcbiAgICBwdENvbW1lbnRJZDogbnVtYmVyLFxuICAgIGVycm9ySGFuZGxlcjogKGVycm9yOiBhbnkpID0+IHZvaWQsXG4gICAgc3VjY2Vzc0hhbmRsZXI6ICgpID0+IHZvaWRcbiAgKSB7XG4gICAgZmV0Y2godGhpcy5kZWxldGVQdENvbW1lbnRVcmwocHRDb21tZW50SWQpLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSlcbiAgICAgIC50aGVuKGhhbmRsZUZldGNoRXJyb3JzKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzdWNjZXNzSGFuZGxlcigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgIGVycm9ySGFuZGxlcihlcik7XG4gICAgICB9KTtcbiAgfVxufVxuIl19