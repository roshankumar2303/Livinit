import { Component, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';

@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
    allMobiles:any;
    constructor(private ms: MobilesService) { }

    ngOnInit(): void {
        this.ms.getAllMobiles().subscribe(
            res => {
                if(res["message"] == undefined)
                    alert("Error: Angular cannot obtain info of mobiles");
                else {
                    this.allMobiles = res["message"];
                }
            },
            err => {
                alert(`Something went wrong`);
                console.log(err);
            }
        )
    }
}
