import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { IconComponent } from "./shared/components/icon/icon.component";

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserModule, IconComponent],
})
export class AppModule {}
