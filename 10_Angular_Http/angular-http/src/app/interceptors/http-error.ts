import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const HttpError: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      alert('Something went wrong!');
      console.error(error);
      return throwError(() => error);
    }),
  );
};
