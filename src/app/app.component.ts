import { Component, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements  OnInit {
  theme: any;

  constructor(
    private themeService: ThemeService
  ) {}

  async ngOnInit(){
    this.theme= this.themeService.getTheme();
    console.log(this.theme);
    if(this.theme == "light" || this.theme==""){
      this.themeService.enableLight();
    }else{
      this.themeService.enableDark();
    }
  }
}
