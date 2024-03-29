import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FilterArrayPipe } from './filter-array.pipe';
import { PipeImpuroPipe } from './pipe-impuro.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
    PipeImpuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocale()
    // }
    // // {
    // //   provide: LOCALE_ID,
    // //   useValue: 'pt-BR',
    // // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
