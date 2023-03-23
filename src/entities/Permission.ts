import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    name: string

  @OneToMany(() => User, user => user.permission_id)
	  users: User[]
}
