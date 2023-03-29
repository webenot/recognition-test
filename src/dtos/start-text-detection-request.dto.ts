import { ApiProperty } from '@nestjs/swagger';

export class StartTextDetectionRequestDto {
  @ApiProperty({
    type: 'string',
    default: 'golfstream-test-poc',
  })
  bucketName: string;

  @ApiProperty({
    type: 'string',
    default: 'Full CS_GO game no commentary.mp4',
  })
  videoName: string;
}
