import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token } from "../model/token.model";

@Injectable({
    providedIn: 'root'
})
export class InterceptadorDeRequisicoes implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token: Token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            const modified = req.clone({ setHeaders: { 'token': token.token } });
            return next.handle(modified);
        }
        return next.handle(req);
    }
}