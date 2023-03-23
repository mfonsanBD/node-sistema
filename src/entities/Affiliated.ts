import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Company } from './Company'
import { OptionalData } from './OptionalData'
import { Process } from './Process'

@Entity('affiliated')
export class Affiliated {
  @PrimaryGeneratedColumn()
    id: number

  @Column({ type: 'text',  })
    name: string

  @Column({ type: 'text' })
    cpf: string

  @Column({ type: 'timestamptz' })
    birthday: string

  @Column({ type: 'text' })
    professional_category: string

  @Column({ type: 'text' })
    gender: string

  @OneToOne(() => Company, company => company.affiliated)
  @JoinColumn({ name: 'company_id' })
    company: Company

  @Column({ type: 'text' })
    cnae: string

  @Column({ type: 'text' })
    avatar: string

  @Column({ type: 'text' })
    observation: string

  @Column({ type: 'int' })
    salary: number

  @OneToMany(() => Process, process => process.affiliated)
    process: Process[]

  @OneToOne(() => OptionalData, optionalData => optionalData.affiliated)
    optional_data: OptionalData
}
