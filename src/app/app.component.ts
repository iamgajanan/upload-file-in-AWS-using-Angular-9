import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // selectedFiles: FileList;
    toFile;
    constructor(private uploadService: UploadService) { }
    
    ngOnInit() {
    }
    
    submit() {
    const file = this.toFile.item(0);
    this.uploadService.fileUpload(file);
    }
    
    onChange(event) {
    this.toFile = event.target.files;
    // console.warn(event)
    }
      
}
