import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrandComponent } from './brand/brand.component';
import { FeaturevComponent } from './featurev/featurev.component';
import { ComparevComponent } from './comparev/comparev.component';
import { TopvehicleComponent } from './topvehicle/topvehicle.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HsliderComponent } from './hslider/hslider.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    FeaturevComponent,
    ComparevComponent,
    TopvehicleComponent,
    TestmonialsComponent,
    BlogsComponent,
    FooterComponent,
    HeaderComponent,
    HsliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
