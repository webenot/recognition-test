import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetTextDetectionRequestDto {
  @ApiProperty({
    type: 'string',
    default: 'b29925986dcacc97535a5e990a75647bfe4ed52ea45f9d94ee9a7464e3067d35',
  })
  joibId: string;

  @ApiPropertyOptional({
    type: 'string',
  })
  @IsOptional()
  nextToken: string;
}
