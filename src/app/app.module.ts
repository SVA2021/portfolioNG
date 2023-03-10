import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {SharedModule} from "./shared/shared.module";
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {NgOptimizedImage} from "@angular/common";
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HttpClientModule} from "@angular/common/http";
import {CertificatesPageComponent} from './pages/certificates-page/certificates-page.component';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {AdminPageComponent} from './pages/admin-page/admin-page.component';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from "../environments/environment";
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    CertificatesPageComponent,
    ProjectsPageComponent,
    AdminPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    SharedModule,
    NgOptimizedImage,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
