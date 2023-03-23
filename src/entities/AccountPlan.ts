import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('account_plan')
export class AccountPlan {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    classe: string

  @Column({ type: 'text' })
    type: string

  @Column({ type: 'text' })
    name: string

  @Column({ type: 'boolean' })
    isTitle: boolean
}
