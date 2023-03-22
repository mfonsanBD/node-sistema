import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679520410515 implements MigrationInterface {
    name = 'default1679520410515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cadas" ("id" SERIAL NOT NULL, "servers" text NOT NULL, "demand" text NOT NULL, "resolition" text NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_d650c1a354e7b68ad3fa83ce0f2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cadas"`);
    }

}
