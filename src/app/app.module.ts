import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';





import { StorageServiceModule} from 'angular-webstorage-service';
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SeoLocationLpComponent } from './seo-location-lp/seo-location-lp.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

import { KeysPipe } from './utility/keys.pipe';
import { SeoAdwordsLpComponent } from './seo-adwords-lp/seo-adwords-lp.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FooterGalleryComponent } from './footer-gallery/footer-gallery.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { LandingSecurityComponent } from './landing-security/landing-security.component';
import { LandingChimneyComponent } from './landing-chimney/landing-chimney.component';
import { LandingScreensComponent } from './landing-screens/landing-screens.component';
import { ChimneyGlossaryComponent } from './chimney-glossary/chimney-glossary.component';
import { ChimneyFaqComponent } from './chimney-faq/chimney-faq.component';
import { FlipcardListComponent } from './flipcard-list/flipcard-list.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PrivacyComponent } from './privacy/privacy.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { FireplaceManualsComponent } from './fireplace-manuals/fireplace-manuals.component';






@NgModule({
  declarations: [
    AppComponent,
    // myPipes
    KeysPipe,
    // myComponents
    AboutComponent,
    ActionButtonsComponent,
    ContactComponent,
    FooterComponent,
    GridComponent,
    HomeComponent,
    LandingPageComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    PostListComponent,
    ProductDetailComponent,
    SeoLocationLpComponent,
    SearchComponent,
    SearchDetailComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    SeoAdwordsLpComponent,
    ColorSwatchComponent,
    QuoteFormComponent,
    FaqListComponent,
    ThankYouComponent,
    FooterGalleryComponent,
    MainGalleryComponent,
    LandingSecurityComponent,
    LandingChimneyComponent,
    LandingScreensComponent,
    ChimneyGlossaryComponent,
    ChimneyFaqComponent,
    FlipcardListComponent,
    PrivacyComponent,
    TabNavComponent,
    FireplaceManualsComponent,
    
 
  ],
  imports: [
    MDBBootstrapModules.forRoot(),
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2PageScrollModule,
    NgxGalleryModule,
    StorageServiceModule,
    LazyLoadImageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1X0GOfR-xzaHaH6vdPUE7s-I4bLBalFU'
    }),
  ],
  providers: [
      MDBSpinningPreloader,
      Title,
      
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
