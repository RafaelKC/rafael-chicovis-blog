import {inject, Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PresentationItem} from "../presentation-item";
import {PresentationItemsShowModalComponent} from "./presentation-items-show-modal.component";

@Injectable({
  providedIn: 'root'
})
export class PresentationItemShowServiceService {
  private matDialog = inject(MatDialog);

  public openItemsDialog(items: PresentationItem[]): MatDialogRef<PresentationItemsShowModalComponent, void> {
    return this.matDialog.open(PresentationItemsShowModalComponent, { data: items, backdropClass: "items-presentation-modal" });
  }
}
