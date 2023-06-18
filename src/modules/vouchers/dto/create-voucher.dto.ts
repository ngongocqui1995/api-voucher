import { IsNotEmpty, IsString, IsOptional, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateVoucherDto {
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
    example: 0,
  })
  discount: number;

  @IsOptional()
  @IsString({ message: 'errors.STATUS_STRING' })
  @IsNotEmpty({ message: 'errors.STATUS_NOT_EMPTY' })
  @IsIn(['ACTIVE', 'INACTIVE'], { message: 'errors.STATUS_NOT_VALID' })
  @ApiProperty({
    type: String,
    description: 'ACTIVE, INACTIVE',
    example: 'ACTIVE',
  })
  status: string;

  @IsOptional()
  @IsString({ message: 'errors.USER_STRING' })
  @IsNotEmpty({ message: 'errors.USER_NOT_EMPTY' })
  @ApiProperty({
    type: String,
    required: false,
    description: 'User Id',
    example: '1',
  })
  created_by: User;
}
