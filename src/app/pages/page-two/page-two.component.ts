import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { fruitAnimation } from '../../animations/fruit.animation';
import { Fruit } from '../../data/fruit';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  animations: [fruitAnimation()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent {
    public saved = false;
    public constructor(public _global: GlobalService){}

    public storeFruit(fruit: Fruit):void {
        this._global.storedFruit$.set(fruit);
        this.saved = true;
    }
}
