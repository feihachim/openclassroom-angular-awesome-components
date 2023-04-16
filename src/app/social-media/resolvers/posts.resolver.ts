import { inject } from '@angular/core';
import { PostsService } from '../services/posts.service';

export const resolve = () => {
  const postsService = inject(PostsService);

  return postsService.getPosts();
};
