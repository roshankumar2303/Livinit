import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Training-Project';

    hamToggle: boolean = false;
    changeHamStatus() {
        // The collapsed navbar is open if hamToggle is true
        this.hamToggle = !this.hamToggle;
    }
}
