import { Observable } from 'rxjs/Observable';
import { Grid } from './grid.model';
import { Injectable } from '@angular/core';
import { Label } from './label.model';

@Injectable()
export class GridService {
  treeGridFirst: Grid[];
  treeGridSecond: Grid[];
  constructor() {
    this.treeGridFirst = <Grid[]>[{
      label: 'System',
      expandedIcon: 'fa-folder-open',
      collapsedIcon: 'fa-folder',
      expanded: true,
      children: [{
        label: 'Core',
        data: 'Documents Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',
        expanded: true,
        children: [{
          label: 'Камеры',
          data: 'Work Folder',
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          expanded: true,
          children: [{
            label: 'Офис 1',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            expanded: true,
            children: [
              {
                label: 'Общий вид'
              },
              {
                label: 'Оборудование',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                  {
                    label: 'Cam 1 (Сервер)'
                  },
                  {
                    label: 'Cam 2'
                  }
                ]
              }
            ]
          }, {
            label: 'Этаж',
          }, {
            label: 'Лестница',
          }, {
            label: 'Офис 2',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            children: [
              {
                label: 'Общий вид'
              }
            ]
          }]
        }]
      },
      {
        label: 'Core 2',
        data: 'Documents Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',
        children: [{
          label: 'Датчики',
          data: 'Work Folder',
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          expanded: true,
          children: [{
            label: 'Офис 1',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            expanded: true,
            children: [
              {
                label: 'Датчик дыма 1'
              },
              {
                label: 'Датчик дыма 2'
              }
            ]
          },
          {
            label: 'Офис 2',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            children: [
              {
                label: 'Датчик дыма 1'
              }
            ]
          }]
        }]
      }
      ]
    }];

    this.treeGridSecond = <Grid[]>[{
      label: 'System',
      expandedIcon: 'fa-folder-open',
      collapsedIcon: 'fa-folder',
      expanded: true,
      children: [{
        label: 'Core',
        data: 'Documents Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',
        expanded: true,
        children: [{
          label: 'Камеры',
          data: 'Work Folder',
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          expanded: true,
          children: [{
            label: 'Офис 1',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            expanded: true,
            children: [
              {
                label: 'Общий вид'
              },
              {
                label: 'Оборудование',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                  {
                    label: 'Cam 1 (Сервер)'
                  },
                  {
                    label: 'DATA_CHANGED'
                  }
                ]
              }
            ]
          }, {
            label: 'DATA_CHANGED',
          }, {
            label: 'Лестница',
          }, {
            label: 'Офис 2',
            'expandedIcon': 'fa-folder-open',
            'collapsedIcon': 'fa-folder',
            'children': [
              {
                label: 'Общий вид'
              }
            ]
          }]
        }]
      },
      {
        label: 'Core 2',
        data: 'Documents Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder',
        children: [{
          label: 'Датчики',
          data: 'Work Folder',
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder',
          expanded: true,
          children: [{
            label: 'Офис 1',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            expanded: true,
            children: [
              {
                label: 'Датчик дыма 1'
              },
              {
                label: 'Датчик дыма DATA_CHANGED'
              }
            ]
          },
          {
            label: 'Офис 2',
            expandedIcon: 'fa-folder-open',
            collapsedIcon: 'fa-folder',
            children: [
              {
                label: 'Датчик дыма 1'
              }
            ]
          }]
        }]
      }
      ]
    }];
  }

  getTreeStructure(): Observable<Grid[]> {
    return Observable.of(this.treeGridFirst);
  }

  getDifferentLabels() {
    const labels: Label[] = [];
    this.createDifferentLeabels(labels, this.treeGridFirst, this.treeGridSecond);
    return labels;
  }
  private createDifferentLeabels(labels: Label[], firstGrid: Grid[], secondGrid: Grid[]) {
    for (let index = 0; index < firstGrid.length; index++) {
      if (firstGrid[index].label !== secondGrid[index].label) {
        const label = new Label();
        label.firstLabel = firstGrid[index].label;
        label.secondLabel = secondGrid[index].label;
        labels.push(label);
      }
      if (firstGrid[index].children && firstGrid[index].children.length) {
        this.createDifferentLeabels(labels, firstGrid[index].children, secondGrid[index].children);
      }
    }
  }
}
