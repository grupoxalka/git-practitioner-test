import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,
    imports:[]
})

export class CardComponent {
    @Input() name: string = "";
    @Input() image: string = "";
    @Input() status: string = "";
    @Input() specie: string = "";
    @Input() location: string = "";
}