import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-edit-user-role-permission',
  templateUrl: './edit-user-role-permission.component.html',
  styleUrls: ['./edit-user-role-permission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserRolePermissionComponent implements OnInit {
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
