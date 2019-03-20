var colorReset = '\x1b[0m';
var colorDim = '\x1b[2m';
var colorBlack = '\x1b[30m';
var colorRed = '\x1b[31m';
var colorMagenta = '\x1b[35m';
var colorCyan = '\x1b[36m';
var colorGreen = '\x1b[32m';
var colorBlue = '\x1b[34m';
/*
[
    ['warn', colorMagenta],
    ['error', colorRed],
    ['log', colorCyan]
].forEach(function (pair) {
    const method = pair[0], reset = colorReset, color = colorBlack + pair[1];
    console[method] = console[method].bind(console, color, method.toUpperCase(), reset);
});

interface Console {
    errorColor(message?: any, ...optionalParams: any[]): void;
    logColor(message?: any, ...optionalParams: any[]): void;
    warnColor(message?: any, ...optionalParams: any[]): void;

    logNativeScript(message?: any, ...optionalParams: any[]): void;
    logIos(message?: any, ...optionalParams: any[]): void;
    logAndroid(message?: any, ...optionalParams: any[]): void;
}

console.logNativeScript = (message?: any, ...optionalParams: any[]) => {
    console.log(colorBlue, 'NATIVESCRIPT EVENT: ' + message, colorReset, optionalParams);
};
console.logIos = (message?: any, ...optionalParams: any[]) => {
    console.log(colorDim, 'IOS EVENT:           ' + message, colorReset, optionalParams);
};
console.logAndroid = (message?: any, ...optionalParams: any[]) => {
    console.log(colorGreen, 'ANDROID EVENT:     ' + message, colorReset, optionalParams);
};

console.logColor = (message?: any, ...optionalParams: any[]) => {
    console.log(colorCyan, message, colorReset, optionalParams);
};
console.errorColor = (message?: any, ...optionalParams: any[]) => {
    console.error(colorRed, message, colorReset, optionalParams);
};
console.warnColor = (message?: any, ...optionalParams: any[]) => {
    console.warn(colorMagenta, message, colorReset, optionalParams);
};
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1jb2xvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUtY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQzdCLElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUUzQixJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDOUIsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDO0FBQzVCLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUNoQyxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDN0IsSUFBTSxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzlCLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztBQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUNFIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29sb3JSZXNldCA9ICdcXHgxYlswbSc7XG5jb25zdCBjb2xvckRpbSA9ICdcXHgxYlsybSc7XG5cbmNvbnN0IGNvbG9yQmxhY2sgPSAnXFx4MWJbMzBtJztcbmNvbnN0IGNvbG9yUmVkID0gJ1xceDFiWzMxbSc7XG5jb25zdCBjb2xvck1hZ2VudGEgPSAnXFx4MWJbMzVtJztcbmNvbnN0IGNvbG9yQ3lhbiA9ICdcXHgxYlszNm0nO1xuY29uc3QgY29sb3JHcmVlbiA9ICdcXHgxYlszMm0nO1xuY29uc3QgY29sb3JCbHVlID0gJ1xceDFiWzM0bSc7XG5cbi8qXG5bXG4gICAgWyd3YXJuJywgY29sb3JNYWdlbnRhXSxcbiAgICBbJ2Vycm9yJywgY29sb3JSZWRdLFxuICAgIFsnbG9nJywgY29sb3JDeWFuXVxuXS5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgY29uc3QgbWV0aG9kID0gcGFpclswXSwgcmVzZXQgPSBjb2xvclJlc2V0LCBjb2xvciA9IGNvbG9yQmxhY2sgKyBwYWlyWzFdO1xuICAgIGNvbnNvbGVbbWV0aG9kXSA9IGNvbnNvbGVbbWV0aG9kXS5iaW5kKGNvbnNvbGUsIGNvbG9yLCBtZXRob2QudG9VcHBlckNhc2UoKSwgcmVzZXQpO1xufSk7XG5cbmludGVyZmFjZSBDb25zb2xlIHtcbiAgICBlcnJvckNvbG9yKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQ7XG4gICAgbG9nQ29sb3IobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZDtcbiAgICB3YXJuQ29sb3IobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZDtcblxuICAgIGxvZ05hdGl2ZVNjcmlwdChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xuICAgIGxvZ0lvcyhtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkO1xuICAgIGxvZ0FuZHJvaWQobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZDtcbn1cblxuY29uc29sZS5sb2dOYXRpdmVTY3JpcHQgPSAobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29sb3JCbHVlLCAnTkFUSVZFU0NSSVBUIEVWRU5UOiAnICsgbWVzc2FnZSwgY29sb3JSZXNldCwgb3B0aW9uYWxQYXJhbXMpO1xufTtcbmNvbnNvbGUubG9nSW9zID0gKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbG9yRGltLCAnSU9TIEVWRU5UOiAgICAgICAgICAgJyArIG1lc3NhZ2UsIGNvbG9yUmVzZXQsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG5jb25zb2xlLmxvZ0FuZHJvaWQgPSAobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29sb3JHcmVlbiwgJ0FORFJPSUQgRVZFTlQ6ICAgICAnICsgbWVzc2FnZSwgY29sb3JSZXNldCwgb3B0aW9uYWxQYXJhbXMpO1xufTtcblxuY29uc29sZS5sb2dDb2xvciA9IChtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb2xvckN5YW4sIG1lc3NhZ2UsIGNvbG9yUmVzZXQsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG5jb25zb2xlLmVycm9yQ29sb3IgPSAobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihjb2xvclJlZCwgbWVzc2FnZSwgY29sb3JSZXNldCwgb3B0aW9uYWxQYXJhbXMpO1xufTtcbmNvbnNvbGUud2FybkNvbG9yID0gKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSkgPT4ge1xuICAgIGNvbnNvbGUud2Fybihjb2xvck1hZ2VudGEsIG1lc3NhZ2UsIGNvbG9yUmVzZXQsIG9wdGlvbmFsUGFyYW1zKTtcbn07XG4qL1xuIl19