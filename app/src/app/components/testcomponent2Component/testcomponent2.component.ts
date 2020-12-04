/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-testcomponent2',
    templateUrl: './testcomponent2.template.html'
})

export class testcomponent2Component extends NBaseComponent implements OnInit {

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    data;
    data1 = [{"name":"Lisa","email":"lisa@gmail.com","age":"27"},
    {"name":"Lipsa","email":"lipsa.champ@gmail.com","age":"31"},
    {"name":"Aaveen","email":"aaveen.aa@gmail.com","age":"1"},
    {"name":"dev","email":"dev.tri@gmail.com","age":"31"},
    {"name":"Cathy","email":"cathy.p@gmail.com","age":"24"},
    {"name":"Sina","email":"sina@gmail.com","age":"23"},
    {"name":"John","email":"john@gmail.com","age":"16"},
    {"name":"Richie","email":"richie@gmail.com","age":"6"}
    ]

    constructor() {
        super();
    }

    clickRow(){
        console.log("clicked")
    }

    ngOnInit() {
        this.data = new MatTableDataSource(this.data1);
        this.data.paginator= this.paginator;
    }
}
