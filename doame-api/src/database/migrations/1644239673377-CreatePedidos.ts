import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePedidos1644239673377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'pedidos',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                },
                {
                  name: 'user_id',
                  type: 'uuid'
                },
                {
                  name: 'descricao',
                  type: 'varchar',
                },
                {
                  name: 'tipo_sangue',
                  type: 'varchar',
                },
                {
                  name: 'quantidade_bolsas',
                  type: 'int',
                },
                {
                  name: 'contato',
                  type: 'varchar',
                }
              ],
              foreignKeys: [
                  {
                      name: 'fk_user_pedido',
                      columnNames: ['user_id'],
                      referencedTableName: 'users',
                      referencedColumnNames: ['id']
                  }
              ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedidos')
    }

}
