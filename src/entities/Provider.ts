import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './Address'
import { Contact } from './Contact'

@Entity('providers')
export class Provider {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    cnpj: string

  @Column({ type: 'text' })
    corporate_name: string

  @Column({ type: 'text' })
    fantasy_name: string

  @Column({ type: 'text' })
    observation: string

  @Column({ type: 'text' })
    type: string

  @OneToOne(() => Contact, contact => contact.provider)
    contact: Contact

  @OneToOne(() => Address, address => address.provider)
    address: Address
}
