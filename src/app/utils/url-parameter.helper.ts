import { HttpParams } from '@angular/common/http';
export namespace Utils {
    /**
     * returns HttpParams containing reduced array of property name 'id'(by default)
     */
    export function buildParamsFromArray<T>(
        paramName: string,
        fromArray: Array<T>,
        reduceFn: (a: string, v: any) => string = (accumulator, currentValue) => {
            return (accumulator.length) ? `${accumulator},${currentValue.id}` : `${currentValue.id}`;
        }
    ): HttpParams {
        const reducedString = fromArray.reduce(reduceFn, ''),
            params = new HttpParams({
                fromObject: {
                    [paramName]: reducedString
                }
            });
        return params;
    }
}
