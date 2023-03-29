import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetTextDetectionCommandOutput, StartTextDetectionCommandOutput } from '@aws-sdk/client-rekognition';
import { AwsRekognitionService } from './providers/aws-rekognition/aws-rekognition.service';
import { StartTextDetectionRequestDto } from './dtos/start-text-detection-request.dto';
import { GetTextDetectionRequestDto } from './dtos/get-text-detection-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly awsRecognitionService: AwsRekognitionService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('start-text-detection')
  async startTextDetection(@Query() input: StartTextDetectionRequestDto): Promise<StartTextDetectionCommandOutput> {
    return this.awsRecognitionService.startTextDetection(input.bucketName, input.name, input.type);
  }

  @Get('get-text-detection')
  async getTextDetection(@Query() input: GetTextDetectionRequestDto): Promise<GetTextDetectionCommandOutput> {
    const result = await this.awsRecognitionService.getTextDetection(input.joibId, input.nextToken);
    console.log(result.NextToken);
    console.log(result.TextDetections[0]);
    return result;
  }
}
