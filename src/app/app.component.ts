
import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'DMI_app';
  //Diseases: Disease[] | undefined;
  currentUrl!: string;
  /*constructor(private Diseaseservice: DiseaseService){
    
  }
 */
  constructor(public _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.currentUrl = routerEvent.url.substring(
          routerEvent.url.lastIndexOf('/') + 1
        );
      }
      if (routerEvent instanceof NavigationEnd) {
        //empty 
      }
      window.scrollTo(0, 0);
    });
  
   /* ngOnInit() {
      console.log('jdfsjdfks');
      this.Diseaseservice.getAllDiseasess().subscribe((datas: Disease[]) => {
        this.Diseases = datas;
      });
    }*/
    
    }}
    

