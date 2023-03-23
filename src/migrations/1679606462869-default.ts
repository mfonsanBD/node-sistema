import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679606462869 implements MigrationInterface {
    name = 'default1679606462869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zipcode" text NOT NULL, "place" text NOT NULL, "complement" text NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "affiliated_id" integer, "company_id" integer, "provider_id" integer, CONSTRAINT "REL_cb3946cafc4863f6d590f4d542" UNIQUE ("affiliated_id"), CONSTRAINT "REL_b8fd04c2a58474606a8fc55936" UNIQUE ("company_id"), CONSTRAINT "REL_33522d83a7d9856c5aab6b9bb5" UNIQUE ("provider_id"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_cb3946cafc4863f6d590f4d5421" FOREIGN KEY ("affiliated_id") REFERENCES "affiliated"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_b8fd04c2a58474606a8fc559366" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_33522d83a7d9856c5aab6b9bb59" FOREIGN KEY ("provider_id") REFERENCES "providers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_33522d83a7d9856c5aab6b9bb59"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_b8fd04c2a58474606a8fc559366"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_cb3946cafc4863f6d590f4d5421"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
