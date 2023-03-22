import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text', generated: 'uuid' })
    systemId: string

  @Column({ type: 'text' })
    firstName: string

  @Column({ type: 'text' })
    lastName: string

  @Column({ type: 'text', unique: true })
    email: string

  @Column({ type: 'text' })
    password: string

  @Column({ type: 'text' })
    hash: string
}
