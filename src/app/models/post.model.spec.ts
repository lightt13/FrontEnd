import { Post } from '../models/post.model';

describe('Post', () => {
  it('should create an instance', () => {
    const post: Post = {
      id: 1,
      title: 'Sample Title',
      body: 'Sample Body',
      dateCreated: new Date(),
      userName: 'johnm',
      firstName: 'John',
      lastName: 'Doe'
    };
    expect(post).toBeTruthy();
  });
});
