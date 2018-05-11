import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Layout } from './Components/Layout/layout.component';

const routes: Routes = [];

@NgModule({
    declarations: [
        AppComponent,
        Layout
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppModuleShared {
}
