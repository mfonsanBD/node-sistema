import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679520747231 implements MigrationInterface {
    name = 'default1679520747231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "status" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "status" text NOT NULL`);
    }

}
