import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './Address'
import { Affiliated } from './Affiliated'
import { Contact } from './Contact'

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    cnpj: string

  @Column({ type: 'text' })
    cei: string

  @Column({ type: 'timestamptz' })
    opening_date: string

  @Column({ type: 'text' })
    corporate_name: string

  @Column({ type: 'text' })
    fantasy_name: string

  @Column({ type: 'text' })
    bearing: string

  @Column({ type: 'text' })
    cnae: string

  @Column({ type: 'int' })
    number_employees: number

  @Column({ type: 'int' })
    payroll: number

  @Column({ type: 'text' })
    observation: string

  @OneToMany(() => Affiliated, affiliated => affiliated.company)
    affiliated: Affiliated[]

  @OneToOne(() => Contact, contact => contact.company)
    contact: Contact

  @OneToOne(() => Address, address => address.company)
    address: Address
}
