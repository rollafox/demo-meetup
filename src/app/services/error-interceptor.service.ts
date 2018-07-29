import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

    constructor(private snackBarService: MatSnackBar) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                // On success ->
            },
            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 404) {
                        // resource not found
                        this.snackBarService.open('Resource Not Found', 'Dismiss');
                    } else {
                        this.snackBarService.open('An Error Occurred: ' + error.message, 'Dismiss');
                    }
                }
            })
        );
    }
}
