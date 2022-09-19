import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-user-role-permission',
  templateUrl: './create-user-role-permission.component.html',
  styleUrls: ['./create-user-role-permission.component.scss']
})

export class CreateUserRolePermissionComponent implements OnInit {
  url = '../../../../../assets/images/profile.svg';
  onSelectFile(e){
    if (e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}



