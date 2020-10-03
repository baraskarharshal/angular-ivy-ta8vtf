import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncPipeComponent } from './features/async-pipe/async-pipe.component';
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
  {
    path: 'async_pipe',
    component: AsyncPipeComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
