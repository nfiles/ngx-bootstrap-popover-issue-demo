import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgGridConfig, NgGridItemConfig } from 'angular2-grid';

function gridItemConfig(
  col: number,
  row: number,
  sizex = 15,
  sizey = 15
): NgGridItemConfig {
  return {
    col, row, sizex, sizey,
    borderSize: 10,
    dragHandle: '.handle',
    minWidth: 100
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('popoverTemplate') popoverTemplate: TemplateRef<any>;

  gridOptions: NgGridConfig = {
    margins: [5],
    col_width: 10,
    row_height: 10,
    min_cols: 1,
    min_rows: 1,
    min_width: 50,
    min_height: 50,
    cascade: 'up',
    auto_style: true,
    prefer_new: false,
    zoom_on_drag: false,
    fix_to_grid: true
  };

  gridItemConfigs: NgGridItemConfig[] = [
    gridItemConfig(0, 0, 15, 9),
    gridItemConfig(0, 16),
    gridItemConfig(16, 0),
  ];
}
