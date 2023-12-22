import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { fruit } from '../../data/fruit.data';
import { Fruit } from '../../data/fruit';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
    public showColors = false;
    public showFruit = false;
    public fruitOptions: string[] = [
        'Apple', 'Banana', 'Cherry', 'Lemon', 'Pear', 'Strawberry', 'Watermelon'
    ]
    public colors: string[] = [
        'Green', 'Red', 'Yellow'
    ]
    public filteredFruit: Fruit[] = [];
    public constructor(public _global: GlobalService) { }

    public ngOnInit(): void {
        this.filteredFruit = this.getFilteredFruitList();
    }

    public filterUI(value: string): void {

        this._global.storedFilterValues.update(
            (filter) =>
                this.colors.includes(value)
                    ?
                    { name: filter.name, color: value }
                    :
                    { name: value, color: filter.color }
        );



        this.filteredFruit = this.getFilteredFruitList();

        this.showFruit = false;
        this.showColors = false;
    }

    public resetFilter(): void {
        this._global.fruit$.set(fruit)
    }

    public showFruitFilters(): void {
        this.showFruit = !this.showFruit;
    }

    public showColorFilters(): void {
        this.showColors = !this.showColors;
    }

    private getFilteredFruitList(): Fruit[] {
        return this._global.fruit$().filter((fruit) =>
            this._global.storedFilterValues
                ?
                fruit.name === this._global.storedFilterValues().name
                && fruit.color === this._global.storedFilterValues().color :
                fruit
        );
    }
}
