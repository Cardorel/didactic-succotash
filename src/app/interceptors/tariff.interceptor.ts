import {HttpInterceptorFn} from '@angular/common/http';

export const tariffInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    headers: req.headers.append('apikey', 'WTqObuahSylAymvvRvEOw71Mmm4r3FOE'),
  });
  return next(newReq);
};
