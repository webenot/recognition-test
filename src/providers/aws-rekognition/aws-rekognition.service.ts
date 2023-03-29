import { Injectable } from '@nestjs/common';
import {
  GetTextDetectionCommandOutput,
  Rekognition,
  StartTextDetectionCommandOutput,
} from '@aws-sdk/client-rekognition';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

@Injectable()
export class AwsRekognitionService {
  private readonly recognition: Rekognition;

  constructor() {
    this.recognition = new Rekognition({
      region: process.env.REGION,
      apiVersion: '2016-06-27',
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region: process.env.REGION, apiVersion: '2016-04-18' }),
        identityPoolId: process.env.IDENTITY_POOL_ID,
        userIdentifier: process.env.USER_ID,
      }),
    });
  }

  public async startTextDetection(bucketName: string, videoName: string): Promise<StartTextDetectionCommandOutput> {
    return new Promise((resolve, reject) => {
      this.recognition.startTextDetection(
        {
          Video: {
            S3Object: {
              Bucket: bucketName,
              Name: videoName,
            },
          },
        },
        (error, data) => {
          if (error) reject(error);
          else resolve(data);
        }
      );
    });
  }

  public async getTextDetection(jobId: string, nextToken?: string): Promise<GetTextDetectionCommandOutput> {
    return new Promise((resolve, reject) => {
      this.recognition.getTextDetection({ JobId: jobId, NextToken: nextToken, MaxResults: 200 }, (error, data) => {
        if (error) reject(error);
        else resolve(data);
      });
    });
  }
}
