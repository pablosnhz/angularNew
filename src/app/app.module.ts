import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import { DetachComponent, dataListProvider } from './components/detach/detach.component';
import { PrecioBitcoinProvider, ReattachComponent } from './components/reattach/reattach.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { FormsModule } from '@angular/forms';
import { EjemploAttrComponent } from './directivas/ejemplo-attr/ejemplo-attr.component';
import { EjemploStructComponent } from './directivas/ejemplo-struct/ejemplo-struct.component';
import { EjemploLifeCycleComponent } from './directivas/ejemplo-life-cycle/ejemplo-life-cycle.component';
import { AttrDirective } from './directives/attr.directive';
import { StructDirective } from './directives/struct.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DetachComponent,
    ReattachComponent,
    NgZoneComponent,
    AsyncPipeComponent,

    EjemploAttrComponent,
    EjemploStructComponent,
    EjemploLifeCycleComponent,

    AttrDirective,
    StructDirective,
    LifeCycleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    dataListProvider,
    PrecioBitcoinProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
