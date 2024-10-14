import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TodoDocument = HydratedDocument<Todo>

@Schema({
  collection: 'todos',
  timestamps: true,
  toJSON: { versionKey: false },
})
export class Todo {
  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  description: string

  @Prop({ required: false, default: false })
  done: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
