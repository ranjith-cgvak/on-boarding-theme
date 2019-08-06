import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
declare var $: any;

@Component({
  selector: 'app-pre-on-boarding',
  templateUrl: './pre-on-boarding.component.html',
  styleUrls: ['./pre-on-boarding.component.scss'],
  animations: [routerTransition()]
})
export class PreOnBoardingComponent implements OnInit {  
  constructor() { }

 ngOnInit(): void {
  
  }

}
