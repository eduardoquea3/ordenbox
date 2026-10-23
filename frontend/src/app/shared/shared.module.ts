import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconComponent } from "./components/icon/icon.component";

@NgModule({
	imports: [CommonModule, IconComponent],
	exports: [IconComponent],
})
export class SharedModule {}
