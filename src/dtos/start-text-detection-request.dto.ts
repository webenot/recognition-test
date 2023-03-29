import { ApiProperty } from '@nestjs/swagger';

export class StartTextDetectionRequestDto {
  @ApiProperty({
    type: 'string',
    default: 'test-bucket',
  })
  bucketName: string;

  @ApiProperty({
    type: 'string',
    default: 'test-video.mp4',
  })
  videoName: string;
}
