import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Affiliated } from './Affiliated'
import { Company } from './Company'
import { OptionalData } from './OptionalData'
import { Provider } from './Provider'

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    zipcode: string

  @Column({ type: 'text' })
    place: string

  @Column({ type: 'text' })
    complement: string

  @Column({ type: 'text' })
    neighborhood: string

  @Column({ type: 'text' })
    city: string

  @OneToOne(() => Affiliated, affiliated => affiliated.address)
  @JoinColumn({ name: 'affiliated_id' })
    affiliated: Affiliated

  @OneToOne(() => Company, company => company.address)
  @JoinColumn({ name: 'company_id' })
    company: Company

  @OneToOne(() => Provider, provider => provider.address)
  @JoinColumn({ name: 'provider_id' })
    provider: Provider
}
