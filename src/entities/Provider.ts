import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('providers')
export class Provider {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    cnpj: string

  @Column({ type: 'text' })
    corporate_name: string

  @Column({ type: 'text' })
    fantasy_name: string

  @Column({ type: 'text' })
    observation: string

  @Column({ type: 'text' })
    type: string
}
