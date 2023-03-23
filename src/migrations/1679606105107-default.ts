import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679606105107 implements MigrationInterface {
    name = 'default1679606105107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "email" text NOT NULL, "phone" text, "mobile" text NOT NULL, "website" text, "affiliated_id" integer, "company_id" integer, "provider_id" integer, CONSTRAINT "REL_50056548520341ad208a9288a5" UNIQUE ("affiliated_id"), CONSTRAINT "REL_b53945f3dfe982678bfeb5e1b4" UNIQUE ("company_id"), CONSTRAINT "REL_ecea28cb007f7a944b4ae66ef6" UNIQUE ("provider_id"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_50056548520341ad208a9288a5a" FOREIGN KEY ("affiliated_id") REFERENCES "affiliated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_b53945f3dfe982678bfeb5e1b4f" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_ecea28cb007f7a944b4ae66ef62" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_ecea28cb007f7a944b4ae66ef62"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_b53945f3dfe982678bfeb5e1b4f"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_50056548520341ad208a9288a5a"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
