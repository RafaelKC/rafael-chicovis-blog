import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {DialogRef} from "@angular/cdk/dialog";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {MatTooltipModule} from "@angular/material/tooltip";
import {PresentationItem} from "../presentation-item";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-itens-show-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    FontAwesomeModule,
    MatTooltipModule, MatDialogModule, NgClass
  ],
  templateUrl: './presentation-items-show-modal.component.html',
  styleUrl: './presentation-items-show-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PresentationItemsShowModalComponent {

  public faTimes = faTimes;

  public items: PresentationItem[] = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(DialogRef<PresentationItemsShowModalComponent, void>);

  public close(): void {
    this.dialogRef.close();
  }

  protected readonly Boolean = Boolean;

  public goTo(itemUrl: string | undefined): void {
    if (!Boolean(itemUrl)) {
      return;
    }
    window.open(itemUrl, '_blank');
  }
}
