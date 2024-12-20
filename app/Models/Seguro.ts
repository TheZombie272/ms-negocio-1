import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from './Vehiculo'

export default class Seguro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehiculo_id: number

  @column()
  public fecha_inicio: DateTime

  @column()
  public fecha_vencimiento: DateTime

  @belongsTo(() => Vehiculo, {
    foreignKey: 'vehiculo_id'
  })
  public vehiculo: BelongsTo<typeof Vehiculo>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
