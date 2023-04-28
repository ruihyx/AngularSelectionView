import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent {
  @Input() part!: Part;
  @Input() active!: boolean;
  @Input() index!: number;
  @Output() borderColorChange = new EventEmitter<{ color: string; index: number }>();

  borderStyle: string = '';

  onButtonClick(): void {
    if (!this.active) {
      this.borderStyle = `1px solid ${this.part.buttonColor}`;
      this.borderColorChange.emit({ color: this.part.buttonColor, index: this.index });
    } else {
      this.borderStyle = '';
      this.borderColorChange.emit({ color: '', index: this.index });
    }
  }
}