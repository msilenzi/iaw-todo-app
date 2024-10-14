import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { TodosService } from './todos.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger'
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe'
import { Types } from 'mongoose'
import { Todo } from './schemas/todo.schema'

@Controller('todos')
@ApiTags('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo todo' })
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto)
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los todos' })
  findAllTodos() {
    return this.todosService.findAllTodos()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  findTodoById(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.todosService.findTodoById(id)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  updateTodo(
    @Param('id', ParseMongoIdPipe) id: Types.ObjectId,
    @Body() updateTodoDto: UpdateTodoDto
  ) {
    return this.todosService.updateTodo(id, updateTodoDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un todo por ID' })
  @ApiParam({ name: 'id', type: String })
  removeTodo(@Param('id', ParseMongoIdPipe) id: Types.ObjectId) {
    return this.todosService.removeTodo(id)
  }
}
