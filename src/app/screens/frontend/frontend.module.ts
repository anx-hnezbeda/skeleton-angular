import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {HomeComponent} from ".";
import {UIRouterModule} from '@uirouter/angular';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UIRouterModule,
        TranslateModule,
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [ /* declare in `forRoot()` */ ],
})
export class FrontendScreensModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FrontendScreensModule,
            providers: []
        };
    }

}