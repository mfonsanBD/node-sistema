import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679595155787 implements MigrationInterface {
    name = 'default1679595155787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "servers"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "demand"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "resolition"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "servers" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "demand" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "resolition" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "slug" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "resolition"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "demand"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "servers"`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "resolition" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "demand" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "servers" text NOT NULL`);
    }

}
