import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679597152739 implements MigrationInterface {
    name = 'default1679597152739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "banks" ("id" SERIAL NOT NULL, "code" text NOT NULL, "name" text NOT NULL, "is_receita_facil" boolean NOT NULL, CONSTRAINT "PK_3975b5f684ec241e3901db62d77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accounts" ("id" SERIAL NOT NULL, "description" text NOT NULL, "post" text NOT NULL, "agency" text NOT NULL, "account" text NOT NULL, "bank_id" integer, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "accounts" ADD CONSTRAINT "FK_82bf2a76317b7b4506fa5db0e47" FOREIGN KEY ("bank_id") REFERENCES "banks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" DROP CONSTRAINT "FK_82bf2a76317b7b4506fa5db0e47"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
        await queryRunner.query(`DROP TABLE "banks"`);
    }

}
