import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679605450414 implements MigrationInterface {
    name = 'default1679605450414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "optional_data" ("id" SERIAL NOT NULL, "admission_date" TIMESTAMP WITH TIME ZONE NOT NULL, "card_validity" TIMESTAMP WITH TIME ZONE NOT NULL, "father" text NOT NULL, "mother" text NOT NULL, "marital_status" text NOT NULL, "spouse" text, "naturality" text NOT NULL, "rg" text NOT NULL, "ssp" text NOT NULL, "rg_expedition" TIMESTAMP WITH TIME ZONE NOT NULL, "profession" text NOT NULL, "community" text NOT NULL, "workplace" text NOT NULL, "work_card" text NOT NULL, "series" text NOT NULL, "work_card_expedition" TIMESTAMP WITH TIME ZONE NOT NULL, "pis" text NOT NULL, "nit" text NOT NULL, "voter_registration" text NOT NULL, "zone" text NOT NULL, "section" text NOT NULL, "situation_id" integer, "affiliated_id" integer, CONSTRAINT "REL_af9be9e73326294b4c623f7693" UNIQUE ("situation_id"), CONSTRAINT "REL_ffdd007bd4de975ae02bce31f2" UNIQUE ("affiliated_id"), CONSTRAINT "PK_9db18dad372e0866984f08a1f97" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "optional_data" ADD CONSTRAINT "FK_af9be9e73326294b4c623f76935" FOREIGN KEY ("situation_id") REFERENCES "situations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "optional_data" ADD CONSTRAINT "FK_ffdd007bd4de975ae02bce31f2d" FOREIGN KEY ("affiliated_id") REFERENCES "affiliated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "optional_data" DROP CONSTRAINT "FK_ffdd007bd4de975ae02bce31f2d"`);
        await queryRunner.query(`ALTER TABLE "optional_data" DROP CONSTRAINT "FK_af9be9e73326294b4c623f76935"`);
        await queryRunner.query(`DROP TABLE "optional_data"`);
    }

}
