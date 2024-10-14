import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Todo } from './schemas/todo.schema'
import { Model, Types } from 'mongoose'

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>
  ) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoModel.create(createTodoDto)
  }

  async findAllTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec()
  }

  async findTodoById(id: Types.ObjectId): Promise<Todo> {
    const todo = await this.todoModel.findById(id).exec()
    if (!todo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return todo
  }

  async updateTodo(id: Types.ObjectId, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const updatedTodo = await this.todoModel
      .findByIdAndUpdate(id, updateTodoDto, { new: true, runValidators: true })
      .exec()
    if (!updatedTodo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return updatedTodo
  }

  async removeTodo(id: Types.ObjectId): Promise<Todo> {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec()
    if (!deletedTodo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return deletedTodo
  }
}
