import { Component, OnInit, Inject } from '@angular/core';
import { EntityService } from '../entity.service';
import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  editingUser = { };
  constructor(private entityService: EntityService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.entityService.getEntities('users')
      .subscribe(
        data => this.users = data,
        err => console.error(err)
      );
  };

  addUser() {
    this.entityService.addEntity('users', this.editingUser)
      .subscribe(
        data => {
          this.users = data;
          return true;
        },
        err => {
          console.error(err);
          return Observable.throw(err);
        }
      );
  };

  updateUser() {
    this.entityService.updateEntity('users', this.editingUser)
      .subscribe(
        data => {
          this.users = data;
          return true;
        },
        err => {
          console.error(err);
          return Observable.throw(err);
        }
      );
  };

  openDialog(isEditing) {
    const dialogOpts = {
      data: {
        user: this.editingUser,
        title: isEditing ? 'Edit User' : 'Add User'
      }
    }

    const dialogRef = this.dialog.open(UsersComponentDialog, dialogOpts);

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          if (isEditing) {
            this.updateUser();
          } else {
            this.addUser();
          }
        }
      });
  };

}

@Component({
  selector: 'user-modal',
  templateUrl: './users.component.dialog.html'
})

export class UsersComponentDialog {
  constructor(private dialogRef: MatDialogRef<UsersComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    
  }
}
