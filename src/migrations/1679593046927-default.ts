import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679593046927 implements MigrationInterface {
    name = 'default1679593046927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_96aac72f1574b88752e9fb00089"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "user_id" TO "permission_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_4daed8ecfcce827ad3a6ba2587c" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_4daed8ecfcce827ad3a6ba2587c"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "permission_id" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_96aac72f1574b88752e9fb00089" FOREIGN KEY ("user_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
