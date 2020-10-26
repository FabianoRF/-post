import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '../services/CreatePostService';
import ListPostService from '../services/ListPostService';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const listPost = container.resolve(ListPostService);

    const posts = await listPost.execute();

    if (!posts) {
      return response.status(404).json();
    }

    return response.json(posts);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const { message } = request.body;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute(message);

    return response.json(post);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listPost = container.resolve(ListPostService);

    const post = await listPost.execute(Number(id));

    if (!post) {
      return response.status(404).json();
    }

    return response.json(post);
  },
};
