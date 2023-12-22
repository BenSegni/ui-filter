import { Injectable, WritableSignal, signal } from '@angular/core';
import { fruit } from '../data/fruit.data';
import { Fruit } from '../data/fruit';

type color = string;
type fruitValue = string;

export interface Filter {
    name: fruitValue;
    color: color;
}

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public fruit$: WritableSignal<Fruit[]> = signal(fruit);
    public storedFilterValues: WritableSignal<Filter> = signal({ name: 'Apple', color: 'Green'});
    public storedFruit$: WritableSignal<Fruit> = signal({name: 'Apple', color: 'Green'});

    constructor() { }
}
