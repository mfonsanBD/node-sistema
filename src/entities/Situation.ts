import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { OptionalData } from './OptionalData'

@Entity('situations')
export class Situation {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    name: string

  @Column({ type: 'text' })
    slug: string

  @OneToOne(() => OptionalData, optionalData => optionalData.situation)
    optional_data: OptionalData
}
