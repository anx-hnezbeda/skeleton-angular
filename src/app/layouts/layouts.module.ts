import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UIRouterModule } from '@uirouter/angular';
import { TranslateModule } from '@ngx-translate/core';

import { WidgetsModule } from '../widgets/widgets.module';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BackendLayoutComponent } from './backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './frontend-layout/frontend-layout.component';
import { MainComponent } from './main/main.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        WidgetsModule,
        UIRouterModule,
    ],
    exports: [
        AuthLayoutComponent,
        FrontendLayoutComponent,
        BackendLayoutComponent,
        MainComponent,
    ],
    declarations: [
        AuthLayoutComponent,
        FrontendLayoutComponent,
        MainComponent,
        BackendLayoutComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class LayoutsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutsModule,
            providers: []
        };
    }

}