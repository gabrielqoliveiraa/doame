import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('requests')
export class Requests {
  @PrimaryColumn()
  id: string

  @Column()
  description: string

  @Column()
  bloodType: string

  @Column()
  bagQuantity: number

  @Column()
  contact: string

  @Column()
  userId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
