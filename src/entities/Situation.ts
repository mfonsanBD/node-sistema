import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('situations')
export class Situation {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    name: string

  @Column({ type: 'text' })
    slug: string
}
