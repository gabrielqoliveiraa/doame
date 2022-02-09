import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreatePedidos1644239673377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'requests',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'userId',
            type: 'uuid',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'bloodType',
            type: 'varchar',
          },
          {
            name: 'bagQuantity',
            type: 'int',
          },
          {
            name: 'contact',
            type: 'varchar',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_pedido',
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requests')
  }
}
