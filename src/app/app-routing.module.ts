import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvntParentComponent } from './features/event-emitter/evnt-parent/evnt-parent.component';

const routes: Routes = [

  {
    path: '',
    component: EvntParentComponent,
  },
  {
    path: 'output_event_emitter',
    component: EvntParentComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
