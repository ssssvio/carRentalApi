import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCars1724357734161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(` 
            CREATE TABLE cars (
                id INT PRIMARY KEY IDENTITY(1,1),
                name NVARCHAR(255) NOT NULL,
                brand NVARCHAR(255) NOT NULL,
                year INT NOT NULL,
                color NVARCHAR(255) NOT NULL,
                price DECIMAL(18,2) NOT NULL,
                rented BIT NOT NULL
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE cars;`);
    }

}
