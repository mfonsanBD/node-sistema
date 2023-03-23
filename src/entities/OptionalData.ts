import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Affiliated } from './Affiliated'
import { Situation } from './Situation'

@Entity('optional_data')
export class OptionalData {
  @PrimaryGeneratedColumn()
    id: number

  @OneToOne(() => Situation, situation => situation.optional_data)
  @JoinColumn({ name: 'situation_id' })
    situation: Situation

  @Column({ type: 'timestamptz' })
    admission_date: string

  @Column({ type: 'timestamptz' })
    card_validity: string

  @Column({ type: 'text'})
    father: string

  @Column({ type: 'text'})
    mother: string

  @Column({ type: 'text'})
    marital_status: string

  @Column({ type: 'text', nullable: true })
    spouse: string

  @Column({ type: 'text'})
    naturality: string

  @Column({ type: 'text'})
    rg: string

  @Column({ type: 'text' })
    ssp: string

  @Column({ type: 'timestamptz' })
    rg_expedition: string

  @Column({ type: 'text' })
    profession: string

  @Column({ type: 'text' })
    community: string

  @Column({ type: 'text' })
    workplace: string

  @Column({ type: 'text' })
    work_card: string

  @Column({ type: 'text' })
    series: string

  @Column({ type: 'timestamptz' })
    work_card_expedition: string

  @Column({ type: 'text' })
    pis: string

  @Column({ type: 'text' })
    nit: string

  @Column({ type: 'text' })
    voter_registration: string

  @Column({ type: 'text' })
    zone: string

  @Column({ type: 'text' })
    section: string

  @OneToOne(() => Affiliated, affiliated => affiliated.optional_data)
  @JoinColumn({ name: 'affiliated_id' })
    affiliated: Affiliated
}
