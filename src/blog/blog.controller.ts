import { Controller, Get, Logger, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { create } from 'domain';

@Controller('blog')
export class BlogController {
    @Get()
    getAll() {
        Logger.log('Get all articles', 'BlogController');
        return [];
    }

    @Get(':articleId')
    getOne(@Param('articleId') articleId: number) {
        Logger.log('Get an article', 'BlogController');
        return 'Get One article';
    }

    @Post()
    create(@Body() artilcleDto) {
        Logger.log('Create an article', 'BlogController');
        return 'Created article';
    }

    @Put(':articleId')
    update(@Param('articleId') articleId: number, @Body() articleDto) {
        Logger.log('Update an article', 'BlogController');
        return 'Modified article';
    }

    @Delete(':articleId')
    remove(@Param('articleId') articleId: number) {
        Logger.log('Delete an article', 'BlogController');
        return 'Deleted article';
    }
}
