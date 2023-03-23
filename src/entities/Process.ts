import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Affiliated } from './Affiliated'

@Entity('process')
export class Process {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    judicial: string

  @Column({ type: 'text' })
    administrative: string
  
  @Column({ type: 'boolean' })
    isActive: boolean

  @ManyToOne(() => Affiliated, affiliated => affiliated.process)
  @JoinColumn({ name: 'affiliated_id' })
    affiliated: Affiliated
}
