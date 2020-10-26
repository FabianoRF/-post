import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommentService from '../services/CreateCommentService';
import ListCommentService from '../services/ListCommentService';

export default {
  async create(request: Request, response: Response): Promise<Response> {
    const { comment } = request.body;
    const { id } = request.params;

    const createComment = container.resolve(CreateCommentService);

    const newComment = await createComment.execute({
      comment,
      post_id: Number(id),
    });

    return response.json(newComment);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listComments = container.resolve(ListCommentService);

    const comments = await listComments.execute(Number(id));

    if (!comments) {
      return response.status(404).json();
    }

    return response.json(comments);
  },
};
