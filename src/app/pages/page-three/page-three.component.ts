import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-page-three',
    templateUrl: './page-three.component.html',
    styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent {
    constructor(public _global: GlobalService) { }
}
