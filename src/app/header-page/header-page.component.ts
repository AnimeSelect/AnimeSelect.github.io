import { Component } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent {
  isShowMenu:boolean = false;

  showHideMenu(show=false){
    if(show != null){
      this.isShowMenu = show;

    }
    
  }
}
