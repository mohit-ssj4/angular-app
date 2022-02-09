import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsComponent } from './components/rps/rps.component';

const routes: Routes = [
  {
    path: 'play-rps',
    component: RpsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
