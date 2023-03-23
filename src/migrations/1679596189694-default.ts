import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679596189694 implements MigrationInterface {
    name = 'default1679596189694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" RENAME COLUMN "resolition" TO "resolution"`);
        await queryRunner.query(`CREATE TABLE "account_plan" ("id" SERIAL NOT NULL, "classe" text NOT NULL, "type" text NOT NULL, "name" text NOT NULL, "isTitle" boolean NOT NULL, CONSTRAINT "PK_a4fa9c211f9beb64eb36b43a674" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account_plan"`);
        await queryRunner.query(`ALTER TABLE "cadas" RENAME COLUMN "resolution" TO "resolition"`);
    }

}
