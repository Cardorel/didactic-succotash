import {HttpInterceptorFn} from '@angular/common/http';

export const tariffInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
