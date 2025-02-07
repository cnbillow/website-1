import { NgModule } 				from '@angular/core';
import { RouterModule, Routes }		from '@angular/router';
import { AboutComponent } 			from './about/about.component';
import { ContactComponent } 		from './contact/contact.component';
import { GridComponent } 			from './grid/grid.component';
import { HomeComponent } 			from './home/home.component';
import { LandingPageComponent } 	from './landing-page/landing-page.component';
import { PageNotFoundComponent } 	from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProductDetailComponent } 	from './product-detail/product-detail.component';
import { ServiceDetailComponent } 	from './service-detail/service-detail.component';
import { ServiceListComponent } 	from './service-list/service-list.component';
import { SearchDetailComponent } 	from './search-detail/search-detail.component';
import { SeoAdwordsLpComponent } from './seo-adwords-lp/seo-adwords-lp.component';
import { SeoLocationLpComponent } 	from './seo-location-lp/seo-location-lp.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LandingChimneyComponent } from './landing-chimney/landing-chimney.component';
import { LandingScreensComponent } from './landing-screens/landing-screens.component';
import { LandingSecurityComponent } from './landing-security/landing-security.component';
import { ChimneyGlossaryComponent } from './chimney-glossary/chimney-glossary.component';
import { ChimneyFaqComponent } from './chimney-faq/chimney-faq.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { FireplaceManualsComponent } from './fireplace-manuals/fireplace-manuals.component';


const appRoutes: Routes = [
  { path: 'fireplace-manuals',    component:FireplaceManualsComponent,          data: { title: "Mike's Mobile Screen and Chimney Service"}},  
  { path: 'privacy',              component:PrivacyComponent,                   data: { title: "Mike's Mobile Screen and Chimney Service"}},  
  { path: 'about', 				        component: AboutComponent, 						        data: { title: "About Mike's Mobile" }},
  { path: 'thank-you',            component: ThankYouComponent,                 data: { title: "Thank you!"}},
  { path: 'faq',                  component: FaqListComponent,                  data: { title:"Mike's Mobile FAQ"}},
  { path: 'about/:slug', 		      component: LandingPageComponent, 	  			    data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'blog', 				        component: PostListComponent, 						    data: { title: "Mike's Mobile Blog" }},
  { path: 'chimney-faq',          component: ChimneyFaqComponent,               data: { title: "Chimney Frequently Asked Questions"}},
  { path: 'chimney-glossary',     component: ChimneyGlossaryComponent,          data: {title:"Mike's Mobile Chimney Glossary"}},
  { path: 'blog/:slug',           component: PostDetailComponent,               data: { title: "Mike's Mobile Blog Post"}},
  { path: 'contact', 			        component: ContactComponent,					        data: { title: "Contact Mike's Mobile" }},
  { path: 'grid/:slug', 		      component: GridComponent, 					  	      data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'products/:slug', 	    component: ProductDetailComponent, 		  		  data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'services/:slug', 	    component: ServiceDetailComponent, 			    	data: { title: "Mike's Mobile Services" }},
  { path: 'landingpages/:slug',   component: SeoAdwordsLpComponent,             data: { title: "Mike's Mobile Adwords Landing Pages"}},
  { path: 'sem/:slug', 			      component: SeoLocationLpComponent, 				    data: { title: "Mike's Mobile Screen and Chimney Service" }},
  { path: 'search', 			        component: SearchDetailComponent, 				    data: { title: "Search Mike's Mobile" }},
  { path: '', 					          component: HomeComponent, pathMatch: 'full', 	data: { title: "Mike's Mobile Screen and Chimney Service" }},

  { path:'chimneys/:slug',        component: LandingChimneyComponent,           data: {title:" Mikes Mobile Screen and Chimney Service"}                  },
  { path:'screens/:slug',         component: LandingScreensComponent,           data: {title:" Mikes Mobile Screen and Chimney Service"}                  },
  { path:'security/:slug',        component: LandingSecurityComponent,          data: {title:" Mikes Mobile Screen and Chimney Service"}                  },
  { path: 'thank-you',            component: ThankYouComponent,                 data: { title: "Thank you!"}},
  {path:'about/chimney-services/chimney-service-in-sacramento', redirectTo:"/chimneys/sacramento"},
  {path:'about/chimney-services/chimney-services-in-antioch', redirectTo:"/chimneys/antioch-east-bay-region"},
  {path:'about/awnings/awnings-in-antioch', redirectTo:"/screens/antioch-east-bay-region"},
  {path:'about/awnings/awnings-in-danville', redirectTo:"/screens/danville-and-walnut-creek-south-bay"},
  {path:'about/awnings/awnings-in-hayward', redirectTo:"/screens/oakland-north-bay"},
  {path:'about/awnings/awnings-in-napa', redirectTo:"/screens/napa-vallejo"},
  {path:'about/awnings/awnings-in-sacramento', redirectTo:"/screens/sacramento"},
  {path:'about/awnings/awnings-in-stockton', redirectTo:"/screens/stockton"},
  {path:'about/chimney-services/chimney-services-in-auburn', redirectTo:"/chimneys/auburn"},
  {path:'about/chimney-services/chimney-services-in-hayward-and-oakland', redirectTo:"/chimneys/oakland-north-bay"},
  {path:'about/chimney-services/chimney-services-in-pleasanton', redirectTo:"/chimneys/antioch-east-bay-region"},
  {path:'about/chimney-services/chimney-services-in-san-ramon', redirectTo:"/chimneys/antioch-east-bay-region"},
  {path:'about/chimney-services/chimney-services-in-stockton', redirectTo:"/chimneys/stockton"},
  {path:'about/chimney-services/chimney-services-in-vacaville-vallejo-and-napa', redirectTo:"/chimneys/napa-vallejo"},
  {path:'about/chimney-services/chimney-services-in-walnut-creek', redirectTo:"/chimneys/danville-and-walnut-creek-south-bay"},
  {path:'about/window-and-door-coverings/window-and-door-screens-danville-walnut-creek', redirectTo:"/screens/danville-and-walnut-creek-south-bay"},
  {path:'about/window-and-door-coverings/window-and-door-screens-in-auburn', redirectTo:"/screens/auburn"},
  {path:'about/window-and-door-coverings/window-and-door-screens-in-hayward-and-oakland', redirectTo:"/screens/oakland-north-bay"},
  {path:'about/window-and-door-coverings/window-and-door-screens-in-sacramento', redirectTo:"/screens/sacramento"},
  {path:'about/window-and-door-coverings/window-and-door-screens-in-stockton', redirectTo:"/screens/stockton"},
  {path:'about/window-and-door-coverings/window-and-door-screens-in-vacaville-vallejo-and-napa', redirectTo:"/screens/fairfield-vacaville"},
  {path:'window-door-screens-modesto', redirectTo:"/screens/modesto"},
  {path:'sitemap',redirectTo:"/sitemap.xml"},
  






  { path: '**', 				          component: HomeComponent, 	data: { title: "Mike's Mobile Screen and Chimney Service"}
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
