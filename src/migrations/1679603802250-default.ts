import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679603802250 implements MigrationInterface {
    name = 'default1679603802250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" SERIAL NOT NULL, "cnpj" text NOT NULL, "cei" text NOT NULL, "opening_date" TIMESTAMP WITH TIME ZONE NOT NULL, "corporate_name" text NOT NULL, "fantasy_name" text NOT NULL, "bearing" text NOT NULL, "cnae" text NOT NULL, "number_employees" integer NOT NULL, "payroll" integer NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "process" ("id" SERIAL NOT NULL, "judicial" text NOT NULL, "administrative" text NOT NULL, "isActive" boolean NOT NULL, "affiliated_id" integer, CONSTRAINT "PK_d5e3ab0f6df55ee74ca24967952" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "affiliated" ("id" SERIAL NOT NULL, "name" text NOT NULL, "cpf" text NOT NULL, "birthday" TIMESTAMP WITH TIME ZONE NOT NULL, "professional_category" text NOT NULL, "gender" text NOT NULL, "cnae" text NOT NULL, "avatar" text NOT NULL, "observation" text NOT NULL, "salary" integer NOT NULL, "company_id" integer, CONSTRAINT "REL_99fde056f3caadd7b1ee9062b7" UNIQUE ("company_id"), CONSTRAINT "PK_883dac1e63ce107c4833f37ab85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "process" ADD CONSTRAINT "FK_b06e30dc51e8c6c5ce795e80e7c" FOREIGN KEY ("affiliated_id") REFERENCES "affiliated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "affiliated" ADD CONSTRAINT "FK_99fde056f3caadd7b1ee9062b75" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "affiliated" DROP CONSTRAINT "FK_99fde056f3caadd7b1ee9062b75"`);
        await queryRunner.query(`ALTER TABLE "process" DROP CONSTRAINT "FK_b06e30dc51e8c6c5ce795e80e7c"`);
        await queryRunner.query(`DROP TABLE "affiliated"`);
        await queryRunner.query(`DROP TABLE "process"`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
