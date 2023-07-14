import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createCategoriesUseCase: CreateCategoryUseCase) { }
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createCategoriesUseCase.execute({ name, description });
    return res.status(201).send();
  }
}
export { CreateCategoryController };
