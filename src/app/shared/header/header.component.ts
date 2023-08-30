import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  exist:boolean = false;
  item :any;
  constructor(private dialog:MatDialog) { }
  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      disableClose: false 
    })
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit(){
    if(this.item = JSON.parse(localStorage.getItem("user") || '{}')){
      this.exist == true;
      localStorage.setItem("exist",JSON.stringify(this.exist))
    }
    else{
      this.exist == false
      localStorage.setItem("exist",JSON.stringify(this.exist))
    }
  }
}
