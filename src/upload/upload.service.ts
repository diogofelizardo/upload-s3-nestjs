import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Multer } from 'multer';

@Injectable()
export class UploadService {
  private s3: AWS.S3;
  private bucketName: string;

  constructor(private configService: ConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_S3_REGION'),
    });
    this.bucketName = this.configService.get<string>('AWS_S3_BUCKET_NAME');
  }

  async uploadFile(file: Multer.File): Promise<AWS.S3.ManagedUpload.SendData> {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Key: `${Date.now().toString()}-${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    return this.s3.upload(params).promise();
  }
}