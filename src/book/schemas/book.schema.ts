'use strict'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category{
  Scifi = 'science fiction',
  Drama = 'drama',
  Terror = 'terror',
  Love= 'love'
}
@Schema({
  timestamps: true,
})
export class Book {
  
    @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  units: number;

  @Prop()
  category : Category;

  @Prop()
  price: number;
/*
  @Prop()
  createdAt: {type: Date, default: Date.now};

  @Prop()
  updatedAt : {type: Date, default: Date.now}
*/
  
}
export const BookSchema = SchemaFactory.createForClass(Book)