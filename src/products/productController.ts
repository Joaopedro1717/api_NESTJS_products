import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { ProductService } from './productService';
import { Product } from './products';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Post()
    create(@Body() productData: Partial<Product>): Promise<Product> {
        return this.productService.create(productData);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() productData: Partial<Product>): Promise<Product> {
        return this.productService.update(id, productData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.productService.delete(id);
    }
 }