import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormSubmitDataService } from '../form-submit-data.service';

@Component({
  selector: 'app-premium-check',
  templateUrl: './premium-check.component.html',
  styleUrls: ['./premium-check.component.css']
})
export class PremiumCheckComponent implements OnInit {

  currentMarketValue!: number;
  premiumAmount!: number;
  formData!: FormGroup;

  constructor(
    // private route: ActivatedRoute,
    private formService: FormSubmitDataService
   
  ) {
    // this.route.queryParams.subscribe(params => {
    //   this.currentMarketValue = params['currentMarketValue'];
    // });
  }
  ngOnInit(): void {
     // Retrieve the form data from the service
     this.formData = this.formService.getFormData();

     // Access the currentMarketValue from the form data
    this.currentMarketValue = this.formData.get('currentMarketValue')?.value;
    console.log( this.formData );
  }

  calculatePremium(years: number): void {
    if(years ===1){
      this.premiumAmount= 0.001* this.currentMarketValue;
    }
    else{
      // Adjust the premium calculation based on your requirements
      this.premiumAmount = (0.001 - (years - 1) * 0.0001) * this.currentMarketValue;

    }
    
  }

}
