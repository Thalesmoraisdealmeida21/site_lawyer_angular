import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasAtuacaoComponent } from './areas-atuacao/areas-atuacao.component';
import { NavbarHomeComponent } from './navs/navbar-home/navbar-home.component';
import { TemplateContentComponent } from './layout/template-content/template-content.component';
import { PostListComponent } from './blog/post-list/post-list.component';
import { PostViewComponent } from './blog/post-view/post-view.component';
import { FormContatoComponent } from './contato/form-contato/form-contato.component';
import { PageContactComponent } from './contato/page-contact/page-contact.component';
import { AreaAtuacaoViewComponent } from './areas-atuacao/area-atuacao-view/area-atuacao-view.component';


const routes: Routes = [

  {path: "areas-atuacao", component: AreasAtuacaoComponent},
  {path: "contato", component: PageContactComponent},
  {path: "blog", component: PostListComponent},
  {path: "template", component: TemplateContentComponent},
  {path: "blog/page/:page", component: PostListComponent},
  {path: "blog/:idPublicacao", component: PostViewComponent},
  {path: "areas-atuacao/:name", component: AreaAtuacaoViewComponent},
  
  {path: "**", component: NavbarHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
