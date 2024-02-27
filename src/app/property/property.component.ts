import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PremiumComponent } from '../premium/premium.component';
import { Router } from '@angular/router';
import { EligibilityDialogComponent } from '../eligibility-dialog/eligibility-dialog.component';
import { FormSubmitDataService } from '../form-submit-data.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit{

   extForm !: FormGroup;
   amount!: number;

  constructor(private fb: FormBuilder,private dialog: MatDialog,private router: Router,private formService:FormSubmitDataService){}
  
 

  ngOnInit(): void {
    this.extForm = this.fb.group({
      currentMarketValue :['',[Validators.required,Validators.pattern(/^[0-9]+$/),Validators.min(100000)]],
      carpetArea: ['',[Validators.pattern(/^[0-9]+$/),Validators.required]],
      pincode :['',[Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^[0-9]+$/)]],
      ageOfBuilding :['',[Validators.required]],
      flood:[false],
      earthQuake :[false],
      security:[false],
      salaried:[false, [Validators.requiredTrue]],


    })

     // Subscribe to value changes of currentMarketValue
     this.extForm.get('currentMarketValue')?.valueChanges.subscribe(value => {
      // Check if the value is a valid number
      if (!isNaN(value)) {
        // Calculate amount based on currentMarketValue
        this.amount = parseFloat(value) * 0.001;
      } 
    });

    // Subscribe to value changes for immediate eligibility check
    this.extForm.valueChanges.subscribe((formValues) => {
      this.checkEligibility(formValues);
      });
    

   
  }

  checkEligibility(formValues: any): void {
    const isFlood = formValues.flood;
    const isEarthquake = formValues.earthQuake;
    

    if (isFlood || isEarthquake) {
      // Open the eligibility dialog
      const dialogRef = this.dialog.open(EligibilityDialogComponent, {
        width: '300px',
      });

      dialogRef.afterClosed().subscribe((shouldReset) => {
        if (shouldReset) {
          // Reset only "flood" and "earthQuake" fields when dialog is closed
            // Reset slide toggles when dialog is closed
            this.extForm.patchValue({
              flood: false,
              earthQuake: false,
           });

        }
      });
       
    }
  }
  
   


  onSubmit(){
    if (this.extForm.valid) {
      
    console.log( this.extForm.value );
    console.log( this.amount ); 
    // Open the dialog with the premium amount
    // const dialogRef = this.dialog.open(PremiumComponent, { 
    //   width:'60%',
    //   enterAnimationDuration:'1000ms',
    //   exitAnimationDuration:'1000ms',
    //   data: { premiumAmount: this.amount as number}
    // });

    // // You can handle dialog closing events if needed
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed:', result);
    // });
    const formValues = this.extForm.value;

     // Set the form data in the service
    this.formService.setFormData(this.extForm);

    this.router.navigate(['/premium-check']
    //  {
    //   queryParams: {
    //     currentMarketValue: formValues.currentMarketValue,
    //     otherValue: formValues.someOtherValue, // Replace with your form control name
    //     // Add more key-value pairs as needed
    //   }
    // }
    );


    } else {
    
      console.error('Form is invalid');
    }

  }



}
