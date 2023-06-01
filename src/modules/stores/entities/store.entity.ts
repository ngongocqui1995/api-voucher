import { BaseEntity } from '@src/common/entities/base.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('stores')
export class Store extends BaseEntity {
  @ApiProperty({
    type: String,
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  @Index('pk_store_id', ['id'], { unique: true })
  id: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'admin',
    example: 'admin',
  })
  @Index('pk_store_code', ['code'], { unique: true })
  @Column({ type: 'varchar', unique: true, nullable: false, length: 100 })
  code: string;

  @ApiProperty({
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  })
  @Column({ type: 'varchar', nullable: false, length: 100 })
  title: string;

  @ApiProperty({
    type: String,
    minLength: 5,
    maxLength: 500,
    required: true,
  })
  @Column({ type: 'varchar', nullable: false, length: 500 })
  description: string;

  @ApiProperty({
    type: String,
    description: 'Avatar',
    example: 'avatar',
  })
  @Column({ type: 'varchar', nullable: true })
  avatar: string;

  @ApiProperty({
    enum: ['ACTIVE', 'INACTIVE'],
    description: 'ACTIVE',
    example: 'ACTIVE',
  })
  @Column({
    type: 'varchar',
    nullable: false,
    default: 'ACTIVE',
    enum: ['ACTIVE', 'INACTIVE'],
  })
  status: string;
}
