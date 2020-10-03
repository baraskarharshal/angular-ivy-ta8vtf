import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { EvntParentComponent } from './features/event-emitter/evnt-parent/evnt-parent.component';
import { EvntChildComponent } from './features/event-emitter/evnt-child/evnt-child.component';
import { EvntEmitterService } from './features/event-emitter/evnt-emitter.service';
import { AsyncPipeComponent } from './features/async-pipe/async-pipe.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    SidebarComponent, 
    EvntParentComponent, 
    EvntChildComponent, 
    AsyncPipeComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [EvntEmitterService]
})
export class AppModule { }
