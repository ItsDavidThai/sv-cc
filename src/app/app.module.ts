import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AlbumSelectorComponent } from './main/album-selector/album-selector.component';
import { GalleryDisplayComponent } from './main/gallery-display/gallery-display.component';
import { GalleryDisplayItemComponent } from './main/gallery-display-item/gallery-display-item.component';

// Services
import { PlaceholderApiService } from './main/placeholder-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlbumSelectorComponent,
    GalleryDisplayComponent,
    GalleryDisplayItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlaceholderApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
