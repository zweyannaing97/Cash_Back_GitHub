import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-already-exist',
  templateUrl: './file-already-exist.component.html',
  styleUrls: ['./file-already-exist.component.scss']
})
export class FileAlreadyExistComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FileAlreadyExistComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close(false);
  }
}
