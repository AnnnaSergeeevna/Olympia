import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';

registerLocaleData(localeEs);

@NgModule({
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'es-ES',
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'EUR',
        },
        {
            provide: MAT_DATE_LOCALE,
            useValue: 'es-ES',
        },
    ],
})
export class AppLocaleModule { }