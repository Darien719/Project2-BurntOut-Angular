import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  

  constructor(private httpClient: HttpClient) { }

  handleError(e: any) {
    throw new Error('Method not implemented.');
  }

  static getS3Bucket(): any {
    return new S3(
      {
        accessKeyId: 'AKIAZTURDFD45TH2H4MC',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );
  }
  uploadFile(file, firstName, lastName, postingId, username) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: 'AKIAZTURDFD45TH2H4MC',
              secretAccessKey: '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',
              region: 'us-east-1'
          }
      );
      const params = {
          Bucket: 'burntout',
          Key: firstName + lastName + "JobId" + postingId,
          //username + " " + postingId,
          Id1: postingId,
          Id2: username,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              
              return false;
          }
          
          return true;
      });
}
}
