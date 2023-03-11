import { Component } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private theme: ThemeService) {

  }



  enableDark(){
    this.theme.enableDark();
  }
  enableLight(){
    this.theme.enableLight();
  }

  onToggleColorTheme(event: any){
    console.log(event.detail.checked);
  }
}
