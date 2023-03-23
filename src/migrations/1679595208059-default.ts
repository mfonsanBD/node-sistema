import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679595208059 implements MigrationInterface {
    name = 'default1679595208059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "situations" ("id" SERIAL NOT NULL, "name" text NOT NULL, "slug" text NOT NULL, CONSTRAINT "PK_e3fc708166295dcff265ca2fb56" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "cadas" DROP COLUMN "slug"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cadas" ADD "slug" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cadas" ADD "name" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "situations"`);
    }

}
