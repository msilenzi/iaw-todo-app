import { plainToInstance } from 'class-transformer'
import { IsNumber, IsString, validateSync } from 'class-validator'

class EnvironmentVariables {
  @IsNumber()
  PORT: number

  @IsString()
  AUTH0_ISSUER_URL: string

  @IsString()
  AUTH0_AUDIENCE: string

  @IsString()
  AUTH0_CLIENT_ID: string

  @IsString()
  DB_URI: string
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }
  return validatedConfig
}
