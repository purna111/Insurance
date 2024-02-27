import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eligibility-dialog',
  templateUrl: './eligibility-dialog.component.html',
  styleUrls: ['./eligibility-dialog.component.css']
})
export class EligibilityDialogComponent {

  constructor(private dialogRef: MatDialogRef<EligibilityDialogComponent>) {}

  closeDialog(shouldReset: boolean): void {
    this.dialogRef.close(shouldReset);
  }

}
