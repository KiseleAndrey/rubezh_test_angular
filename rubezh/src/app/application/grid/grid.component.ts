import { MessegeService } from './../services/messege.service';

import { GridOptions } from 'ag-grid';
import { GridService } from './grid.service';
import { Label } from './label.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  providers: [GridService],
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  private gridOptions: GridOptions;
  private differentLabels: Label[];

  constructor(private gridService: GridService, private messege: MessegeService) { }

  ngOnInit() {
    this.differentLabels = this.gridService.getDifferentLabels();
    const innerRenderer = params => {
      if (!params.data) { return ''; }
      const color = this.differentLabels.some(x => x.firstLabel === params.data.label) ? 'red' : 'black';
      return `</i> <span style="color:${color}">${params.value}</span>`;
    };

    this.gridOptions = <GridOptions>{
      rowHeight: 40,
      animateRows: true,
      columnDefs: [
        {
          headerName: 'Название',
          field: 'label',
          cellRenderer: 'group',
          maxWidth: 300,
          cellRendererParams: {
            innerRenderer: innerRenderer,
            suppressCount: true
          }
        },
        {
          headerName: 'Данные',
          field: 'data',
        }
      ],
      getNodeChildDetails: x => {
        if (x.children && x.children.length) {
          return {
            group: x.children.length > 0,
            children: x.children,
            expanded: x.expanded,
          };
        } else {
          return null;
        }
      },
    };
    this.gridOptions.onGridReady = () => this.gridOptions.api.sizeColumnsToFit();
    this.gridService.getTreeStructure().subscribe(treeStructure => {
      this.gridOptions.rowData = treeStructure;
    });
  }

  sentMessege() {
    this.messege.sendLabels(this.differentLabels);
  }
}
