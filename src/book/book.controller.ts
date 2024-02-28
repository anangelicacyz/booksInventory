import { Body, Controller, Get, Post, Param, Put, Delete} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
    constructor(private BookService: BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.BookService.findAll()
    }
    @Post()
    async createBook(
        @Body()
        Book: CreateBookDto
    ): Promise<Book>{
        return this.BookService.create(Book)
    }
    @Get(':id')
    async getBook(
        @Param('id')
        id: string
        ): Promise<Book>{
        return this.BookService.findbyId(id)
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        Book: UpdateBookDto
    ): Promise<Book>{
        return this.BookService.updatedById(id, Book)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string
    ): Promise<Book>{
        return this.BookService.deleteById(id)
    }
}
