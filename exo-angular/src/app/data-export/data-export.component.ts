import { Component, OnInit } from '@angular/core';
import { DataExportService } from '../data-export.service';

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrl: './data-export.component.css'
})
export class DataExportComponent {

  
  constructor(private dataService: DataExportService) { }
  
  data = {}

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    this.data = this.dataService.getData()

  }

  downloadJson() {
    const fileName = "data.json";
    const json = JSON.stringify(this.data);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  }
}