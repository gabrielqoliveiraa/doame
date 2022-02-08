import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from './User'

@Entity('pedidos')
export class Pedido {
  @PrimaryColumn()
  id: string

  @Column()
  descricao: string

  @Column()
  tipo_sangue: string

  @Column()
  quantidade_bolsas: number

  @Column()
  contato: string

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user: User

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
