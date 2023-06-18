import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsIn,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateCampaignDto {
  @IsString({ message: 'errors.CODE_STRING' })
  @IsNotEmpty({ message: 'errors.CODE_NOT_EMPTY' })
  @Length(5, 100, { message: 'errors.CODE_LENGTH_5_100' })
  @Transform((params) => String(params.value).trim())
  @ApiProperty({
    type: String,
    required: true,
  })
  code: string;

  @IsOptional()
  @IsString({ message: 'errors.AVATAR_STRING' })
  @IsNotEmpty({ message: 'errors.AVATAR_NOT_EMPTY' })
  @ApiProperty({
    type: String,
    description: 'Avatar',
    example: 'avatar',
    required: false,
  })
  avatar: string;

  @IsString({ message: 'errors.NAME_STRING' })
  @IsNotEmpty({ message: 'errors.NAME_NOT_EMPTY' })
  @Length(3, 50, { message: 'errors.NAME_LENGTH_3_50' })
  @ApiProperty({
    type: String,
    required: true,
    description: 'Admin',
    example: 'Admin',
  })
  name: string;

  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
    example: 0,
  })
  quantity: number;

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
  @ApiProperty({
    type: String,
    required: true,
  })
  content: string;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: true,
  })
  startDate: Date;

  @IsOptional()
  @ApiProperty({
    type: Date,
    required: true,
  })
  endDate: Date;

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
