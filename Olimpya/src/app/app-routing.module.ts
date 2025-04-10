import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/theme/layout/components/layout/layout.component';
import { MainComponent } from './ui/theme/layout/components/main/main.component';
import { DiversidadComponent } from './pages/diversidad/diversidad.component';
import { CalidadComponent } from './pages/calidad/calidad.component';
import { EspecializacionComponent } from './pages/especializacion/especializacion.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: MainComponent, },
            { path: 'diversidad', component: DiversidadComponent, },
            { path: 'calidad', component: CalidadComponent, },
            { path: 'especializacion', component: EspecializacionComponent, },
            { path: 'tecnologia', component: TecnologiaComponent, },
        ],
    },
    { path: '**', redirectTo: '' },
];


export class AppRoutingModule { }
