import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout',
    templateUrl: './layout.component.html',
})
export class Layout implements OnInit {

    public caption: string;

    constructor() {
        this.caption = "Layout. Ola, bro!!!";
    }

    ngOnInit() {
    }
}