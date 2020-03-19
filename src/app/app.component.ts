import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description: string = "1 component";
  name: string = "Greg Doud";
  address: string = "4900 Parkway Dr.";
  city: string = "Mason";
  state: string = "OH";
  zip: string = "45040";
  email: string = "greg@maxtrain.com";
  phone: string = "513-322-8888";

  workExperiences: any = [
    {
      company: "MAX",
      job: "Instructor",
      time: "2016-2017",
      values: [
        "Started Angular curriculum",
        "Enhanced the boot camp curriculum"
      ]
    },
    {
      company: "TIY",
      job: "Instructor",
      time: "2016-2017",
      values: [
        "Started Angular curriculum",
        "Enhanced the boot camp curriculum"
      ]
    }
  ];
  schools: any[] = [
    {
      school: "Mt. St Mary Seminary",
      degree: "Master Certificate LPM",
      year: "2016"
    },
    {
      school: "University of Cincinnati",
      degree: "BS IPS",
      year: "1985"
    },
    {
      school: "St. Xavier HS",
      degree: "College Prep",
      year: "1975"
    }
  ]
}
