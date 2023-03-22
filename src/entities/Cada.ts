import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cadas')
export class Cada {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    servers: string

  @Column({ type: 'text' })
    demand: string

  @Column({ type: 'text' })
    resolition: string

  @Column({ type: 'int' })
    status: number
}
