"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommentService = /** @class */ (function () {
    function CommentService(loggingService, backlogRepo, authService) {
        this.loggingService = loggingService;
        this.backlogRepo = backlogRepo;
        this.authService = authService;
    }
    CommentService.prototype.addNewPtComment = function (createCommentRequest) {
        var _this = this;
        var comment = {
            id: 0,
            title: createCommentRequest.newComment.title,
            user: this.authService.getCurrentUser(),
            dateCreated: new Date(),
            dateModified: new Date()
        };
        return new Promise(function (resolve, reject) {
            _this.backlogRepo.insertPtComment(comment, createCommentRequest.currentItem.id, function (error) {
                _this.loggingService.error('Adding new comment failed');
                reject(error);
            }, function (nextComment) {
                var response = {
                    createdComment: nextComment
                };
                resolve(response);
            });
        });
    };
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0E7SUFDRSx3QkFDVSxjQUFnQyxFQUNoQyxXQUFnQyxFQUNoQyxXQUEwQjtRQUYxQixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0lBQ2pDLENBQUM7SUFFRyx3Q0FBZSxHQUF0QixVQUNFLG9CQUEwQztRQUQ1QyxpQkEyQkM7UUF4QkMsSUFBTSxPQUFPLEdBQWM7WUFDekIsRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDNUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1lBQ3ZDLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRTtZQUN2QixZQUFZLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDekIsQ0FBQztRQUVGLE9BQU8sSUFBSSxPQUFPLENBQXdCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQzlCLE9BQU8sRUFDUCxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUNuQyxVQUFBLEtBQUs7Z0JBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFDRCxVQUFDLFdBQXNCO2dCQUNyQixJQUFNLFFBQVEsR0FBMEI7b0JBQ3RDLGNBQWMsRUFBRSxXQUFXO2lCQUM1QixDQUFDO2dCQUNGLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGFwcFN0b3JlIH0gZnJvbSAnfi9jb3JlL2FwcC1zdG9yZSc7XG5pbXBvcnQgeyBQdEJhY2tsb2dSZXBvc2l0b3J5IH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgQ3JlYXRlQ29tbWVudFJlcXVlc3QgfSBmcm9tICd+L2NvcmUvY29udHJhY3RzL3JlcXVlc3RzL2JhY2tsb2cnO1xuaW1wb3J0IHsgQ3JlYXRlQ29tbWVudFJlc3BvbnNlIH0gZnJvbSAnfi9jb3JlL2NvbnRyYWN0cy9yZXNwb25zZXMvYmFja2xvZyc7XG5pbXBvcnQge1xuICBQdEF1dGhTZXJ2aWNlLFxuICBQdENvbW1lbnRTZXJ2aWNlLFxuICBQdExvZ2dpbmdTZXJ2aWNlXG59IGZyb20gJ34vY29yZS9jb250cmFjdHMvc2VydmljZXMnO1xuaW1wb3J0IHsgUHRDb21tZW50IH0gZnJvbSAnfi9jb3JlL21vZGVscy9kb21haW4nO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudFNlcnZpY2UgaW1wbGVtZW50cyBQdENvbW1lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnaW5nU2VydmljZTogUHRMb2dnaW5nU2VydmljZSxcbiAgICBwcml2YXRlIGJhY2tsb2dSZXBvOiBQdEJhY2tsb2dSZXBvc2l0b3J5LFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IFB0QXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBhZGROZXdQdENvbW1lbnQoXG4gICAgY3JlYXRlQ29tbWVudFJlcXVlc3Q6IENyZWF0ZUNvbW1lbnRSZXF1ZXN0XG4gICk6IFByb21pc2U8Q3JlYXRlQ29tbWVudFJlc3BvbnNlPiB7XG4gICAgY29uc3QgY29tbWVudDogUHRDb21tZW50ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICB0aXRsZTogY3JlYXRlQ29tbWVudFJlcXVlc3QubmV3Q29tbWVudC50aXRsZSxcbiAgICAgIHVzZXI6IHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKSxcbiAgICAgIGRhdGVDcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSgpXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxDcmVhdGVDb21tZW50UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuYmFja2xvZ1JlcG8uaW5zZXJ0UHRDb21tZW50KFxuICAgICAgICBjb21tZW50LFxuICAgICAgICBjcmVhdGVDb21tZW50UmVxdWVzdC5jdXJyZW50SXRlbS5pZCxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2luZ1NlcnZpY2UuZXJyb3IoJ0FkZGluZyBuZXcgY29tbWVudCBmYWlsZWQnKTtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9LFxuICAgICAgICAobmV4dENvbW1lbnQ6IFB0Q29tbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBDcmVhdGVDb21tZW50UmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBjcmVhdGVkQ29tbWVudDogbmV4dENvbW1lbnRcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=