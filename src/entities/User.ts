import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Permission } from './Permission'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text', generated: 'uuid' })
    systemId: string

  @ManyToOne(() => Permission, permission => permission.users)
	@JoinColumn({ name: 'permission_id' })
	  permission_id: Permission

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
