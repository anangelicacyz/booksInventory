'use strict'

import { Category } from "../schemas/book.schema"

export class UpdateBookDto{
    readonly title: string
    readonly description: string
    readonly units: number
    readonly category: Category
    readonly price: number
}