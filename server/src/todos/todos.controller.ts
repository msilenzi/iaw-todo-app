import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiOAuth2, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { Types } from 'mongoose'
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { Todo } from './schemas/todo.schema'
import { TodosService } from './todos.service'

@Controller('todos')
@ApiTags('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiBearerAuth('Auth0')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Crear un nuevo todo' })
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto)
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Obtener todos los todos' })
  findAllTodos() {
    return this.todosService.findAllTodos()
  }

  @Get(':id')
  // @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Obtener un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  findTodoById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.todosService.findTodoById(id)
  }

  @Patch(':id')
  @ApiBearerAuth('Auth0')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Actualizar un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  updateTodo(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body() updateTodoDto: UpdateTodoDto
  ) {
    return this.todosService.updateTodo(id, updateTodoDto)
  }

  @Delete(':id')
  @ApiBearerAuth('Auth0')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Eliminar un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  removeTodo(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.todosService.removeTodo(id)
  }
}
