import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bank } from './Bank'

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    description: string

  @Column({ type: 'text' })
    post: string

  @Column({ type: 'text' })
    agency: string

  @Column({ type: 'text' })
    account: string

  @ManyToOne(() => Bank, bank => bank.account)
  @JoinColumn({ name: 'bank_id' })
    bank: Bank
}
