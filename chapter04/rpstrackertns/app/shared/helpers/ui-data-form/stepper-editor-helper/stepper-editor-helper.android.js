"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setStepperEditorContentOffset(_editor, _horizontalOffset, _verticalOffset) { }
exports.setStepperEditorContentOffset = setStepperEditorContentOffset;
function setStepperEditorTextPostfix(editor, singularPostfix, pluralPostfix) {
    var numberPicker = editor.getEditorView();
    var labelView = numberPicker.labelView();
    var numVal = parseInt(labelView.getText());
    if (numVal === 1) {
        labelView.setText("1 " + singularPostfix);
    }
    else {
        labelView.setText(numVal + " " + pluralPostfix);
    }
}
exports.setStepperEditorTextPostfix = setStepperEditorTextPostfix;
function setStepperEditorColors(editor, lightColor, darkColor) {
    var numberPicker = editor.getEditorView();
    numberPicker.labelView().setTextColor(darkColor.android);
    numberPicker.decreaseView().setTextColor(darkColor.android);
    numberPicker.increaseView().setTextColor(darkColor.android);
    var background1 = new android.graphics.drawable.GradientDrawable();
    background1.setStroke(2, lightColor.android);
    numberPicker.rootView().setBackground(background1);
    var background2 = new android.graphics.drawable.GradientDrawable();
    background2.setStroke(2, lightColor.android);
    numberPicker.decreaseView().setBackground(background2);
    var background3 = new android.graphics.drawable.GradientDrawable();
    background3.setStroke(2, lightColor.android);
    numberPicker.increaseView().setBackground(background3);
}
exports.setStepperEditorColors = setStepperEditorColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lZGl0b3ItaGVscGVyLmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwcGVyLWVkaXRvci1oZWxwZXIuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLFNBQWdCLDZCQUE2QixDQUMzQyxPQUFPLEVBQ1AsaUJBQXlCLEVBQ3pCLGVBQXVCLElBQ2hCLENBQUM7QUFKVixzRUFJVTtBQUVWLFNBQWdCLDJCQUEyQixDQUN6QyxNQUFNLEVBQ04sZUFBdUIsRUFDdkIsYUFBcUI7SUFFckIsSUFBTSxZQUFZLEdBQStCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV4RSxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNoQixTQUFTLENBQUMsT0FBTyxDQUFDLE9BQUssZUFBaUIsQ0FBQyxDQUFDO0tBQzNDO1NBQU07UUFDTCxTQUFTLENBQUMsT0FBTyxDQUFJLE1BQU0sU0FBSSxhQUFlLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7QUFkRCxrRUFjQztBQUVELFNBQWdCLHNCQUFzQixDQUNwQyxNQUFNLEVBQ04sVUFBaUIsRUFDakIsU0FBZ0I7SUFFaEIsSUFBTSxZQUFZLEdBQStCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUV4RSxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RCxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU1RCxJQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDckUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFbkQsSUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRXZELElBQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBdEJELHdEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9jb2xvcic7XG5pbXBvcnQgeyBjb20gfSBmcm9tICd+L3NoYXJlZC9oZWxwZXJzL3VpLWRhdGEtZm9ybSc7XG5cbnR5cGUgTnVtYmVyUGlja2VyID0gY29tLnRlbGVyaWsud2lkZ2V0Lm51bWJlcnBpY2tlci5SYWROdW1iZXJQaWNrZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGVwcGVyRWRpdG9yQ29udGVudE9mZnNldChcbiAgX2VkaXRvcixcbiAgX2hvcml6b250YWxPZmZzZXQ6IG51bWJlcixcbiAgX3ZlcnRpY2FsT2Zmc2V0OiBudW1iZXJcbik6IHZvaWQge31cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0ZXBwZXJFZGl0b3JUZXh0UG9zdGZpeChcbiAgZWRpdG9yLFxuICBzaW5ndWxhclBvc3RmaXg6IHN0cmluZyxcbiAgcGx1cmFsUG9zdGZpeDogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3QgbnVtYmVyUGlja2VyOiBOdW1iZXJQaWNrZXIgPSA8TnVtYmVyUGlja2VyPmVkaXRvci5nZXRFZGl0b3JWaWV3KCk7XG5cbiAgY29uc3QgbGFiZWxWaWV3ID0gbnVtYmVyUGlja2VyLmxhYmVsVmlldygpO1xuICBjb25zdCBudW1WYWwgPSBwYXJzZUludChsYWJlbFZpZXcuZ2V0VGV4dCgpKTtcbiAgaWYgKG51bVZhbCA9PT0gMSkge1xuICAgIGxhYmVsVmlldy5zZXRUZXh0KGAxICR7c2luZ3VsYXJQb3N0Zml4fWApO1xuICB9IGVsc2Uge1xuICAgIGxhYmVsVmlldy5zZXRUZXh0KGAke251bVZhbH0gJHtwbHVyYWxQb3N0Zml4fWApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGVwcGVyRWRpdG9yQ29sb3JzKFxuICBlZGl0b3IsXG4gIGxpZ2h0Q29sb3I6IENvbG9yLFxuICBkYXJrQ29sb3I6IENvbG9yXG4pOiB2b2lkIHtcbiAgY29uc3QgbnVtYmVyUGlja2VyOiBOdW1iZXJQaWNrZXIgPSA8TnVtYmVyUGlja2VyPmVkaXRvci5nZXRFZGl0b3JWaWV3KCk7XG5cbiAgbnVtYmVyUGlja2VyLmxhYmVsVmlldygpLnNldFRleHRDb2xvcihkYXJrQ29sb3IuYW5kcm9pZCk7XG4gIG51bWJlclBpY2tlci5kZWNyZWFzZVZpZXcoKS5zZXRUZXh0Q29sb3IoZGFya0NvbG9yLmFuZHJvaWQpO1xuICBudW1iZXJQaWNrZXIuaW5jcmVhc2VWaWV3KCkuc2V0VGV4dENvbG9yKGRhcmtDb2xvci5hbmRyb2lkKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kMSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgYmFja2dyb3VuZDEuc2V0U3Ryb2tlKDIsIGxpZ2h0Q29sb3IuYW5kcm9pZCk7XG4gIG51bWJlclBpY2tlci5yb290VmlldygpLnNldEJhY2tncm91bmQoYmFja2dyb3VuZDEpO1xuXG4gIGNvbnN0IGJhY2tncm91bmQyID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICBiYWNrZ3JvdW5kMi5zZXRTdHJva2UoMiwgbGlnaHRDb2xvci5hbmRyb2lkKTtcbiAgbnVtYmVyUGlja2VyLmRlY3JlYXNlVmlldygpLnNldEJhY2tncm91bmQoYmFja2dyb3VuZDIpO1xuXG4gIGNvbnN0IGJhY2tncm91bmQzID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICBiYWNrZ3JvdW5kMy5zZXRTdHJva2UoMiwgbGlnaHRDb2xvci5hbmRyb2lkKTtcbiAgbnVtYmVyUGlja2VyLmluY3JlYXNlVmlldygpLnNldEJhY2tncm91bmQoYmFja2dyb3VuZDMpO1xufVxuIl19