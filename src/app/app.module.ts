import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerLocaleData } from "@angular/common";

import { AppComponent } from "./app.component";
import { PasswordPipe } from "./pipes/password.pipe";
import { DomSecurePipe } from "./pipes/dom-secure.pipe";
import { CapitalizedPipe } from "./pipes/capitalized.pipe";

import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [AppComponent, PasswordPipe, DomSecurePipe, CapitalizedPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
