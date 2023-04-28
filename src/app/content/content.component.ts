import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content/content.service';
import { Part } from '../models/part.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  headerFontColor: string = '';
  parts: Part[] = [];
  activeIndex: number | null = null; // 添加 activeIndex 属性

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.parts = this.contentService.getParts();
  }

  onBorderColorChange(color: string, index: number): void {
    this.headerFontColor = color;
    if (this.activeIndex !== null && this.activeIndex !== index) {
      this.parts[this.activeIndex].active = false;
    }
    this.parts[index].active = !this.parts[index].active;
    this.activeIndex = this.parts[index].active ? index : null;
  }
}
