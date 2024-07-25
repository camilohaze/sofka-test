import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const request = req.clone({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  });

  const router = inject(Router);

  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 404) {
          const { error: { message } } = err;

          alert(message);

          router.navigate(['products'])
        }
      }

      return throwError(() => err);
    })
  );
};
