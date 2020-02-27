import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterInterceptorService implements HttpInterceptor {

  constructor(private registerService: RegisterService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newHeaders = req.headers;
    let browser = navigator.userAgent;
    let os = navigator.userAgent;
    newHeaders = newHeaders.append('x-user-browser', browser);
    newHeaders = newHeaders.append('x-user-os', os);

    const newReq = req.clone({headers: newHeaders});
    return next.handle(newReq);
   }
}