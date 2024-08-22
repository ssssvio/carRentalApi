import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1724357669499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(` 
            CREATE TABLE users (
                id INT PRIMARY KEY IDENTITY(1,1),
                name NVARCHAR(255) NOT NULL,
                email NVARCHAR(255) NOT NULL,
                password NVARCHAR(255) NOT NULL
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE users;`);
    }

}
