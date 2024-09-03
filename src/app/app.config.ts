import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {tariffInterceptor} from "./interceptors/tariff.interceptor";
import {provideState, provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {TarifEffect} from "./store/effects/tarif.effect";
import {tarifStore} from "./store/reducers/tarif.store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tariffInterceptor])),
    provideStore(),
    provideState(tarifStore),
    provideEffects(TarifEffect)
]
};
