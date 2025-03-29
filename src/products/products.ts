import{ Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome_do_produto: string;

    @Column()
    fornecedor: string;

    @Column()
    endereco_fornecedor: string;

    @Column('int')
    quantidade: number;

    @Column('text')
    descricao: string;

    @CreateDateColumn()
    data_registro: Date;

    @UpdateDateColumn()
    data_update: Date;
}