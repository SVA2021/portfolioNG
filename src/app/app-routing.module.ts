import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {CertificatesPageComponent} from "./pages/certificates-page/certificates-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contacts', component: ContactPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'certificates', component: CertificatesPageComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
