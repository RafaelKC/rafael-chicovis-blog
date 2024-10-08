import { HttpParams } from '@angular/common/http';

export function toHttpParams(obj: any): HttpParams {
  let params = new HttpParams();

  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        value.forEach((arrayValue) => {
          params = params.append(key, arrayValue);
        });
      } else {
        params = params.append(key, value);
      }
    }
  });

  return params;
}
