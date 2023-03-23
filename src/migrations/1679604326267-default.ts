import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679604326267 implements MigrationInterface {
    name = 'default1679604326267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "providers" ("id" SERIAL NOT NULL, "cnpj" text NOT NULL, "corporate_name" text NOT NULL, "fantasy_name" text NOT NULL, "observation" text NOT NULL, "type" text NOT NULL, CONSTRAINT "PK_af13fc2ebf382fe0dad2e4793aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "companies" ADD "observation" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP COLUMN "observation"`);
        await queryRunner.query(`DROP TABLE "providers"`);
    }

}
