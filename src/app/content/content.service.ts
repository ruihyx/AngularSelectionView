import { Injectable } from '@angular/core';
import { Part } from '../models/part.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private parts: Part[] = [
    // 在此处添加部分数据，例如：
    {
      title: 'Title 1',
      content: 'content 1',
      buttonText: 'button 1',
      buttonColor: this.randomColor(),
      active: false
    },
    {
      title: 'Title 2',
      content: 'content 2',
      buttonText: 'button 2',
      buttonColor: this.randomColor(),
      active: false
    },
    {
      title: 'Title 3',
      content: 'content 3',
      buttonText: 'button 3',
      buttonColor: this.randomColor(),
      active: false
    },
    {
      title: 'Title 4',
      content: 'content 4',
      buttonText: 'button 4',
      buttonColor: this.randomColor(),
      active: false
    },
    // ...
  ];

  getParts(): Part[] {
    return this.parts;
  }

  randomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}