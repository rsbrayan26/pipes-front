import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PasswordPipe } from "./pipes/password.pipe";
import { DomSecurePipe } from "./pipes/dom-secure.pipe";
import { CapitalizedPipe } from "./pipes/capitalized.pipe";

@NgModule({
  declarations: [AppComponent, PasswordPipe, DomSecurePipe, CapitalizedPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
