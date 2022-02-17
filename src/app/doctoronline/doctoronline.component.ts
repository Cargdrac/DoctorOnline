import { Component, OnInit } from '@angular/core';
import { Doctor } from '../interface/doctor.interface';

@Component({
  selector: 'app-doctoronline',
  templateUrl: './doctoronline.component.html',
  styleUrls: ['./doctoronline.component.scss']
})
export class DoctoronlineComponent{

  isDoctorOnline(doctor: Doctor)
  {
    if(doctor.status == 'active')
    {
      return true;
    }else
    {
      return false;
    }
  }
}

