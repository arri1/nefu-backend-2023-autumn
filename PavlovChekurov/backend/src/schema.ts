export interface User {
  id: number;
  createdAt: Date;
  email: string;
  name?: string;
  password: string;
  posts?: Post[];
  group?: Group;
  groupId?: number;
  comments?: Comment[];
}

export interface Post {
  id: number;
  published: boolean;
  title: string;
  author?: User;
  authorId?: number;
  comments?: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: number;
  contain: string;
  post: Post;
  postId: number;
  author?: User;
  authorId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Group {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  users?: User[];
}
