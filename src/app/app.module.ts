import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './navs/navbar-home/navbar-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './layout/footer/footer.component';
import { DefaultComponent } from './layout/default/default.component';
import { NavPrincipalComponent } from './layout/nav-principal/nav-principal.component';
import { AreasAtuacaoComponent } from './areas-atuacao/areas-atuacao.component';
import { TemplateContentComponent } from './layout/template-content/template-content.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostViewComponent } from './blog/post-view/post-view.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    FooterComponent,
    DefaultComponent,
    NavPrincipalComponent,
    AreasAtuacaoComponent,
    TemplateContentComponent,
    PostListComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
