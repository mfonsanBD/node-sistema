import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Affiliated } from './Affiliated'
import { Company } from './Company'
import { Provider } from './Provider'

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    email: string

  @Column({ type: 'text', nullable: true })
    phone: string

  @Column({ type: 'text' })
    mobile: string

  @Column({ type: 'text', nullable: true })
    website: string

  @OneToOne(() => Affiliated, affiliated => affiliated.contact)
  @JoinColumn({ name: 'affiliated_id' })
    affiliated: Affiliated

  @OneToOne(() => Company, company => company.contact)
  @JoinColumn({ name: 'company_id' })
    company: Company

  @OneToOne(() => Provider, provider => provider.contact)
  @JoinColumn({ name: 'provider_id' })
    provider: Provider
}
