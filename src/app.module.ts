import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsRekognitionModule } from './providers/aws-rekognition/aws-rekognition.module';

@Module({
  imports: [AwsRekognitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
