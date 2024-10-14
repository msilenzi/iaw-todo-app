import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument, Types } from 'mongoose'

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

  // Campos generados automáticamente por Mongoose:
  // Estos campos no llevan @Prop porque están para que los detecte Swagger
  // y genere los tipos correctamente. No influyen en la creación de la BD.

  @ApiProperty({ type: String })
  _id: Types.ObjectId

  createdAt: Date

  updatedAt: Date

  // __v: number
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
