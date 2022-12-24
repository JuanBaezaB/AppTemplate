import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer! : Renderer2;

  constructor(private rendereFactory:RendererFactory2, @Inject(DOCUMENT) private document:Document) {
    this.renderer = this.rendereFactory.createRenderer(null, null)
  }

  public getTheme(){
    return localStorage.getItem('color-theme');
  }

  private setTheme(theme: string){
    localStorage.setItem('color-theme', theme)
  }

  public enableDark(){
    // this.renderer.addClass(this.document.body, 'dark');
    this.renderer.setAttribute(this.document.body, 'color-theme', 'dark');
    this.setTheme('dark');
  }

  public enableLight(){
    // this.renderer.removeClass(this.document.body, 'dark');
    this.renderer.setAttribute(this.document.body, 'color-theme', 'light');
    this.setTheme('light')
  }
}
