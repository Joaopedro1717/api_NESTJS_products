import { Entity, EntityRepository, Repository } from 'typeorm';
import { Product } from 'src/products/products';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}
