import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1664494863557 implements MigrationInterface {
    name = 'InitDB1664494863557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`files\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`mime_type\` varchar(255) NOT NULL, \`base64\` text NOT NULL, \`filename\` varchar(255) NOT NULL, \`track_id\` varchar(36) NULL, UNIQUE INDEX \`REL_c0692d5b401ff5fed0ee1d12f2\` (\`track_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tracks\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(255) NOT NULL, \`album\` varchar(255) NOT NULL, \`is_cover\` tinyint NOT NULL, \`duration\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`artist\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`artist_name\` varchar(255) NOT NULL, \`artist_nickname\` varchar(255) NOT NULL, \`artist_nationality\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`name\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, \`birth_date\` datetime NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`track_artist\` (\`track_id\` varchar(36) NOT NULL, \`artist_id\` varchar(36) NOT NULL, INDEX \`IDX_44b3054dbccf94b5385e7c16a5\` (\`track_id\`), INDEX \`IDX_bad2f837ce966cd4d0a7a4869d\` (\`artist_id\`), PRIMARY KEY (\`track_id\`, \`artist_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`files\` ADD CONSTRAINT \`FK_c0692d5b401ff5fed0ee1d12f2e\` FOREIGN KEY (\`track_id\`) REFERENCES \`tracks\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`track_artist\` ADD CONSTRAINT \`FK_44b3054dbccf94b5385e7c16a5d\` FOREIGN KEY (\`track_id\`) REFERENCES \`tracks\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`track_artist\` ADD CONSTRAINT \`FK_bad2f837ce966cd4d0a7a4869da\` FOREIGN KEY (\`artist_id\`) REFERENCES \`artist\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`track_artist\` DROP FOREIGN KEY \`FK_bad2f837ce966cd4d0a7a4869da\``);
        await queryRunner.query(`ALTER TABLE \`track_artist\` DROP FOREIGN KEY \`FK_44b3054dbccf94b5385e7c16a5d\``);
        await queryRunner.query(`ALTER TABLE \`files\` DROP FOREIGN KEY \`FK_c0692d5b401ff5fed0ee1d12f2e\``);
        await queryRunner.query(`DROP INDEX \`IDX_bad2f837ce966cd4d0a7a4869d\` ON \`track_artist\``);
        await queryRunner.query(`DROP INDEX \`IDX_44b3054dbccf94b5385e7c16a5\` ON \`track_artist\``);
        await queryRunner.query(`DROP TABLE \`track_artist\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`artist\``);
        await queryRunner.query(`DROP TABLE \`tracks\``);
        await queryRunner.query(`DROP INDEX \`REL_c0692d5b401ff5fed0ee1d12f2\` ON \`files\``);
        await queryRunner.query(`DROP TABLE \`files\``);
    }

}
