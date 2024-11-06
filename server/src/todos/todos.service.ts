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

  async createTodo(createTodoDto: CreateTodoDto, userId: string): Promise<Todo> {
    return this.todoModel.create({ ...createTodoDto, userId })
  }

  async findAllTodos(userId: string): Promise<Todo[]> {
    return this.todoModel.find({ userId }).exec()
  }

  async findTodoById(id: Types.ObjectId, userId: string): Promise<Todo> {
    const todo = await this.todoModel.findOne({ _id: id, userId })
    if (!todo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return todo
  }

  async updateTodo(
    id: Types.ObjectId,
    userId: string,
    updateTodoDto: UpdateTodoDto
  ): Promise<Todo> {
    const updatedTodo = await this.todoModel
      .findOneAndUpdate({ _id: id, userId }, updateTodoDto, { new: true })
      .exec()
    if (!updatedTodo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return updatedTodo
  }

  async removeTodo(id: Types.ObjectId, userId: string): Promise<Todo> {
    const deletedTodo = await this.todoModel.findOneAndDelete({ _id: id, userId }).exec()
    if (!deletedTodo) throw new NotFoundException(`Todo with id '${id}' not found`)
    return deletedTodo
  }
}
