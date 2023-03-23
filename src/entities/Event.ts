import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text' })
    title: string

  @Column({ type: 'text' })
    responsible: string

  @Column({ type: 'text', nullable: true })
    phone: string

  @Column({ type: 'timestamptz', nullable: true })
    dateAndTime: string

  @Column({ type: 'date', nullable: true })
    start: string

  @Column({ type: 'date', nullable: true })
    end: string

  @Column({ type: 'text' })
    location: string

  @Column({ type: 'text' })
    address: string

  @Column({ type: 'text' })
    city: string

  @Column({ type: 'text', nullable: true })
    privacyPolicy: string

  @Column({ type: 'text', nullable: true })
    useTerms: string

  @Column({ type: 'text', nullable: true })
    ticketPrice: string

  @Column({ type: 'text', nullable: true })
    description: string

  @Column({ type: 'text', nullable: true })
    schedule: string
}
