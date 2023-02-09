import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuModule } from "primeng/menu";
import { MenubarModule } from "primeng/menubar";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
