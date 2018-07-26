import { ListModule } from './../list/list.module';
import { ContainerRoutingModule } from './container-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoMaterialModule } from './../demo-material-module';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ContainerComponent } from './container.component';

@NgModule({
    imports: [
      CommonModule,
      DemoMaterialModule,
      FlexLayoutModule,
      FormsModule,
      RouterModule,
      ContainerRoutingModule,
      ListModule
    ],
    declarations: [
        ContainerComponent,
    ],
    exports: [
        ContainerComponent,
    ]
})
export class ContainerModule {

}
