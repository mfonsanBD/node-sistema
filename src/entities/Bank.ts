import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Account } from './Account'

@Entity('banks')
export class Bank {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    code: string

  @Column({ type: 'text' })
    name: string

  @Column({ type: 'boolean' })
    is_receita_facil: boolean

  @OneToMany(() => Account, account => account.bank)
    account: Account[]
}
