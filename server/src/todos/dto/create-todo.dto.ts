import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string

  @IsString()
  @IsNotEmpty()
  readonly description: string

  @IsOptional()
  @IsBoolean()
  readonly done?: boolean
}
