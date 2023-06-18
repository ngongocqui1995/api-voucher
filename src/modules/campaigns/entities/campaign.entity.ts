import { BaseEntity } from 'src/common/entities/base.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';

@Entity('campaigns')
export class Campaign extends BaseEntity {
  @ApiProperty({
    type: String,
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  @Index('pk_campaign_id', ['id'], { unique: true })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Avatar',
    example: 'avatar',
  })
  @Column({ type: 'varchar', nullable: true })
  avatar: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'admin',
    example: 'admin',
  })
  @Index('pk_campaign_code', ['code'], { unique: true })
  @Column({ type: 'varchar', unique: true, nullable: false, length: 100 })
  code: string;

  @ApiProperty({
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  })
  @Column({ type: 'varchar', nullable: false, length: 100 })
  name: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @Column({ type: 'varchar', nullable: true })
  content: string;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'quantity',
    example: 0,
  })
  @Column({ type: 'float', nullable: false, default: 0 })
  quantity: number;

  @ApiProperty({
    type: Number,
    required: false,
    description: 'discount',
    example: 0,
  })
  @Column({ type: 'float', nullable: false, default: 0 })
  discount: number;

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

  @ApiProperty({
    type: Date,
    description: 'startDate',
  })
  @Column({ type: 'timestamp', nullable: true })
  startDate: Date;

  @ApiProperty({
    type: Date,
    description: 'endDate',
  })
  @Column({ type: 'timestamp', nullable: true })
  endDate: Date;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Created By',
    example: '1',
  })
  @ManyToOne(() => User, (user) => user.campaigns)
  @JoinColumn({ name: 'created_by' })
  created_by: User;
}
