import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  premiumAmountValue!: number

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<PremiumComponent>) {}
  ngOnInit(): void {

    this.premiumAmountValue= this.data.premiumAmount;
   
  }

  closeDialog(): void {
    this.dialogRef.close('clicked');
    // Close the dialog
  }

}
