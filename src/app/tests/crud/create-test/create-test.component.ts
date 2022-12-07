import { Component, OnInit } from '@angular/core';
import {TestService} from "../../service/test.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent implements OnInit {
  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
  }

  testForm: FormGroup = new FormGroup({
    name: new FormControl(),
    level: new FormControl(),
    category: new FormControl(),
    passScore: new FormControl(),
    maxTime: new FormControl(),
  })

  submit(){
    const test= this.testForm.value;
    this.testService.save(test).subscribe(() =>{
      this.testForm.reset();
      alert('Tạo mới thành công');
    }, error => {
      console.log(error)
    });
  }
}
