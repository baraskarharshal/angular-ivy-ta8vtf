import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AsyncPipeComponent } from "./features/async-pipe/async-pipe.component";
import { EvntParentComponent } from "./features/event-emitter/evnt-parent/evnt-parent.component";
import { ObsMergemapComponent } from "./features/obs-mergemap/obs-mergemap.component";
import { ObsTypeheadComponent } from "./features/obs-typehead/obs-typehead.component";
import { ObsTypehead2Component } from "./features/obs-typehead2/obs-typehead2.component";
import { ObsParentComponent } from "./features/observable-input/obs-parent/obs-parent.component";
import { SubVsBehsubjComponent } from "./features/sub-vs-behsubj/sub-vs-behsubj.component";

const routes: Routes = [
  {
    path: "",
    component: EvntParentComponent
  },
  {
    path: "output_event_emitter",
    component: EvntParentComponent
  },
  {
    path: "async_pipe",
    component: AsyncPipeComponent
  },
  {
    path: "obs-as-input",
    component: ObsParentComponent
  },
  {
    path: "type-ahead",
    component: ObsTypeheadComponent
  },
  {
    path: "type-ahead2",
    component: ObsTypehead2Component
  },
  {
    path: "merge-map",
    component: ObsMergemapComponent
  },
  {
    path: "subject-vs-behsubject",
    component: SubVsBehsubjComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
