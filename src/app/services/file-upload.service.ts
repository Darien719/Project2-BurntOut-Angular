import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/* import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3'; */

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

/*   fileUpload(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAZTURDFD45TH2H4MC',
              secretAccessKey: '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',
              region: 'ap-south-1',
            
          }
      );
      const params = {
          Bucket: 'burntout',
          Key:  file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('EROOR: ',JSON.stringify( err));
              return false;
          }
          console.log('File Uploaded.', data);
          return true;
      });
    } */

  

  /* postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'http://localhost:9025/application';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
} */
  handleError(e: any) {
    throw new Error('Method not implemented.');
  }
}
