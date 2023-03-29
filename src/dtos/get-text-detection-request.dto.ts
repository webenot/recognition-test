import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetTextDetectionRequestDto {
  @ApiProperty({
    type: 'string',
    default: 'JOB_ID',
  })
  joibId: string;

  @ApiPropertyOptional({
    type: 'string',
  })
  @IsOptional()
  nextToken: string;
}
