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

@Entity('voucher')
export class Voucher extends BaseEntity {
  @ApiProperty({
    type: String,
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  @Index('pk_voucher_id', ['id'], { unique: true })
  id: string;

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
    type: String,
    required: false,
    description: 'Created By',
    example: '1',
  })
  @ManyToOne(() => User, (user) => user.vouchers)
  @JoinColumn({ name: 'created_by' })
  created_by: User;
}
