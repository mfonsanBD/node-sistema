import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679582736426 implements MigrationInterface {
    name = 'default1679582736426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "title" text NOT NULL, "responsible" text NOT NULL, "phone" text, "dateAndTime" TIMESTAMP WITH TIME ZONE, "start" date, "end" date, "location" text NOT NULL, "address" text NOT NULL, "city" text NOT NULL, "privacyPolicy" text, "useTerms" text, "ticketPrice" text, "description" text, "schedule" text, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
