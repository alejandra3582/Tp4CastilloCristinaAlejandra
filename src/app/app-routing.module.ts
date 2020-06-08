import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasComponent } from './components/noticias/noticias.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';

const routes: Routes = [
  {path:'noticias', component:NoticiasComponent},
  {path:'divisas', component:CotizacionComponent},
  {path:'horoscopo', component:HoroscopoComponent},
  {path:'estadisticas', component:EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
