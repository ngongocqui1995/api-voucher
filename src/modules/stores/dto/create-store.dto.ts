import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsIn,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateStoreDto {
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
  title: string;

  @IsString({ message: 'errors.DESCRIPTION_STRING' })
  @IsNotEmpty({ message: 'errors.DESCRIPTION_NOT_EMPTY' })
  @Length(5, 500, { message: 'errors.DESCRIPTION_LENGTH_5_100' })
  @ApiProperty({
    type: String,
    required: true,
    description: 'Admin',
    example: 'Admin',
  })
  description: string;

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
}
