import { inject, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ErrorInterceptorService } from './error-interceptor.service';

describe('ErrorInterceptorService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MatSnackBarModule
            ],
            providers: [ErrorInterceptorService]
        });
    });

    it('should be created', inject([ErrorInterceptorService], (service: ErrorInterceptorService) => {
        expect(service).toBeTruthy();
    }));
});
