/*
   import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { State, INITIAL_STATE } from './app-state';

class Store {

    private subj = new BehaviorSubject<State>(INITIAL_STATE);

    public select<K extends keyof State>(name: K): Observable<State[K]> {
        return this.subj.pluck<State, State[K]>(name).distinctUntilChanged<State[K]>();
    }

    get value() {
        return this.subj.value;
    }

    public set<K extends keyof State>(name: K, state: State[K]) {
        this.subj.next({
            ...this.value, [name]: state
        });
    }
}


export const appStore = new Store();
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XG5cbmltcG9ydCB7IFN0YXRlLCBJTklUSUFMX1NUQVRFIH0gZnJvbSAnLi9hcHAtc3RhdGUnO1xuXG5jbGFzcyBTdG9yZSB7XG5cbiAgICBwcml2YXRlIHN1YmogPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0YXRlPihJTklUSUFMX1NUQVRFKTtcblxuICAgIHB1YmxpYyBzZWxlY3Q8SyBleHRlbmRzIGtleW9mIFN0YXRlPihuYW1lOiBLKTogT2JzZXJ2YWJsZTxTdGF0ZVtLXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqLnBsdWNrPFN0YXRlLCBTdGF0ZVtLXT4obmFtZSkuZGlzdGluY3RVbnRpbENoYW5nZWQ8U3RhdGVbS10+KCk7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqLnZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQ8SyBleHRlbmRzIGtleW9mIFN0YXRlPihuYW1lOiBLLCBzdGF0ZTogU3RhdGVbS10pIHtcbiAgICAgICAgdGhpcy5zdWJqLm5leHQoe1xuICAgICAgICAgICAgLi4udGhpcy52YWx1ZSwgW25hbWVdOiBzdGF0ZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGFwcFN0b3JlID0gbmV3IFN0b3JlKCk7XG4qL1xuIl19