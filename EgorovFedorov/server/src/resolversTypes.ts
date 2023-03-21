import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> }
} & {
  User?: User
  Post?: Post
  Comment?: Comment
  Group?: Group
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregatePost?: AggregatePost
  PostGroupByOutputType?: PostGroupByOutputType
  AggregateComment?: AggregateComment
  CommentGroupByOutputType?: CommentGroupByOutputType
  AggregateGroup?: AggregateGroup
  GroupGroupByOutputType?: GroupGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType
  UserSumAggregateOutputType?: UserSumAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  PostCountOutputType?: PostCountOutputType
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostAvgAggregateOutputType?: PostAvgAggregateOutputType
  PostSumAggregateOutputType?: PostSumAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
  CommentCountAggregateOutputType?: CommentCountAggregateOutputType
  CommentAvgAggregateOutputType?: CommentAvgAggregateOutputType
  CommentSumAggregateOutputType?: CommentSumAggregateOutputType
  CommentMinAggregateOutputType?: CommentMinAggregateOutputType
  CommentMaxAggregateOutputType?: CommentMaxAggregateOutputType
  GroupCountOutputType?: GroupCountOutputType
  GroupCountAggregateOutputType?: GroupCountAggregateOutputType
  GroupAvgAggregateOutputType?: GroupAvgAggregateOutputType
  GroupSumAggregateOutputType?: GroupSumAggregateOutputType
  GroupMinAggregateOutputType?: GroupMinAggregateOutputType
  GroupMaxAggregateOutputType?: GroupMaxAggregateOutputType
}

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, number>
  createdAt?: Resolver<Client.User, {}, Date>
  email?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string | null>
  password?: Resolver<Client.User, {}, string>
  posts?: Resolver<Client.User, UserPostsArgs, Client.Post[] | null>
  group?: Resolver<Client.User, {}, Client.Group | null>
  groupId?: Resolver<Client.User, {}, number | null>
  comments?: Resolver<Client.User, UserCommentsArgs, Client.Comment[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export type Post = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Post, {}, number>
  published?: Resolver<Client.Post, {}, boolean>
  title?: Resolver<Client.Post, {}, string>
  author?: Resolver<Client.Post, {}, Client.User | null>
  authorId?: Resolver<Client.Post, {}, number | null>
  comments?: Resolver<Client.Post, PostCommentsArgs, Client.Comment[] | null>
  createdAt?: Resolver<Client.Post, {}, Date>
  updatedAt?: Resolver<Client.Post, {}, Date>
  _count?: Resolver<Client.Post, {}, Client.Prisma.PostCountOutputType>
}

export type Comment = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Comment, {}, number>
  contain?: Resolver<Client.Comment, {}, string>
  post?: Resolver<Client.Comment, {}, Client.Post>
  postId?: Resolver<Client.Comment, {}, number>
  author?: Resolver<Client.Comment, {}, Client.User | null>
  authorId?: Resolver<Client.Comment, {}, number | null>
  createdAt?: Resolver<Client.Comment, {}, Date>
  updatedAt?: Resolver<Client.Comment, {}, Date>
}

export type Group = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Group, {}, number>
  name?: Resolver<Client.Group, {}, string>
  createdAt?: Resolver<Client.Group, {}, Date>
  updatedAt?: Resolver<Client.Group, {}, Date>
  users?: Resolver<Client.Group, GroupUsersArgs, Client.User[] | null>
  _count?: Resolver<Client.Group, {}, Client.Prisma.GroupCountOutputType>
}

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findFirstUserOrThrow?: Resolver<
    {},
    FindFirstUserOrThrowArgs,
    Client.User | null
  >
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findUniqueUserOrThrow?: Resolver<
    {},
    FindUniqueUserOrThrowArgs,
    Client.User | null
  >
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findFirstPostOrThrow?: Resolver<
    {},
    FindFirstPostOrThrowArgs,
    Client.Post | null
  >
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
  findUniquePostOrThrow?: Resolver<
    {},
    FindUniquePostOrThrowArgs,
    Client.Post | null
  >
  findFirstComment?: Resolver<{}, FindFirstCommentArgs, Client.Comment | null>
  findFirstCommentOrThrow?: Resolver<
    {},
    FindFirstCommentOrThrowArgs,
    Client.Comment | null
  >
  findManyComment?: Resolver<{}, FindManyCommentArgs, Client.Comment[]>
  findManyCommentCount?: Resolver<{}, FindManyCommentArgs, number>
  aggregateComment?: Resolver<
    {},
    AggregateCommentArgs,
    Client.Prisma.GetCommentAggregateType<AggregateCommentArgs>
  >
  groupByComment?: Resolver<
    {},
    GroupByCommentArgs,
    Client.Prisma.CommentGroupByOutputType[]
  >
  findUniqueComment?: Resolver<{}, FindUniqueCommentArgs, Client.Comment | null>
  findUniqueCommentOrThrow?: Resolver<
    {},
    FindUniqueCommentOrThrowArgs,
    Client.Comment | null
  >
  findFirstGroup?: Resolver<{}, FindFirstGroupArgs, Client.Group | null>
  findFirstGroupOrThrow?: Resolver<
    {},
    FindFirstGroupOrThrowArgs,
    Client.Group | null
  >
  findManyGroup?: Resolver<{}, FindManyGroupArgs, Client.Group[]>
  findManyGroupCount?: Resolver<{}, FindManyGroupArgs, number>
  aggregateGroup?: Resolver<
    {},
    AggregateGroupArgs,
    Client.Prisma.GetGroupAggregateType<AggregateGroupArgs>
  >
  groupByGroup?: Resolver<
    {},
    GroupByGroupArgs,
    Client.Prisma.GroupGroupByOutputType[]
  >
  findUniqueGroup?: Resolver<{}, FindUniqueGroupArgs, Client.Group | null>
  findUniqueGroupOrThrow?: Resolver<
    {},
    FindUniqueGroupOrThrowArgs,
    Client.Group | null
  >
}

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  createOneComment?: Resolver<{}, CreateOneCommentArgs, Client.Comment>
  upsertOneComment?: Resolver<{}, UpsertOneCommentArgs, Client.Comment>
  deleteOneComment?: Resolver<{}, DeleteOneCommentArgs, Client.Comment | null>
  updateOneComment?: Resolver<{}, UpdateOneCommentArgs, Client.Comment | null>
  updateManyComment?: Resolver<
    {},
    UpdateManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyComment?: Resolver<
    {},
    DeleteManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  createOneGroup?: Resolver<{}, CreateOneGroupArgs, Client.Group>
  upsertOneGroup?: Resolver<{}, UpsertOneGroupArgs, Client.Group>
  deleteOneGroup?: Resolver<{}, DeleteOneGroupArgs, Client.Group | null>
  updateOneGroup?: Resolver<{}, UpdateOneGroupArgs, Client.Group | null>
  updateManyGroup?: Resolver<
    {},
    UpdateManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyGroup?: Resolver<
    {},
    DeleteManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  groupId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number | null>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export type AggregatePost = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export type PostGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, number>
  published?: Resolver<Client.Prisma.PostGroupByOutputType, {}, boolean>
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  authorId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, number | null>
  createdAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export type AggregateComment = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMaxAggregateOutputType | null
  >
}

export type CommentGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, number>
  contain?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, string>
  postId?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, number>
  authorId?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, number | null>
  createdAt?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.CommentGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CommentGroupByOutputType,
    {},
    Client.Prisma.CommentMaxAggregateOutputType | null
  >
}

export type AggregateGroup = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMaxAggregateOutputType | null
  >
}

export type GroupGroupByOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, number>
  name?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.GroupGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.GroupGroupByOutputType,
    {},
    Client.Prisma.GroupMaxAggregateOutputType | null
  >
}

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export type UserCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  posts?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
  comments?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  groupId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export type UserAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>
  groupId?: Resolver<
    Client.Prisma.UserAvgAggregateOutputType,
    {},
    number | null
  >
}

export type UserSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>
  groupId?: Resolver<
    Client.Prisma.UserSumAggregateOutputType,
    {},
    number | null
  >
}

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    number | null
  >
}

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    number | null
  >
}

export type PostCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  comments?: Resolver<Client.Prisma.PostCountOutputType, {}, number>
}

export type PostCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  published?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  authorId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export type PostAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostAvgAggregateOutputType, {}, number | null>
  authorId?: Resolver<
    Client.Prisma.PostAvgAggregateOutputType,
    {},
    number | null
  >
}

export type PostSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostSumAggregateOutputType, {}, number | null>
  authorId?: Resolver<
    Client.Prisma.PostSumAggregateOutputType,
    {},
    number | null
  >
}

export type PostMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, number | null>
  published?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  authorId?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
}

export type PostMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, number | null>
  published?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  authorId?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type CommentCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  contain?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  postId?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  authorId?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
}

export type CommentAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentAvgAggregateOutputType, {}, number | null>
  postId?: Resolver<
    Client.Prisma.CommentAvgAggregateOutputType,
    {},
    number | null
  >
  authorId?: Resolver<
    Client.Prisma.CommentAvgAggregateOutputType,
    {},
    number | null
  >
}

export type CommentSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentSumAggregateOutputType, {}, number | null>
  postId?: Resolver<
    Client.Prisma.CommentSumAggregateOutputType,
    {},
    number | null
  >
  authorId?: Resolver<
    Client.Prisma.CommentSumAggregateOutputType,
    {},
    number | null
  >
}

export type CommentMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentMinAggregateOutputType, {}, number | null>
  contain?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    number | null
  >
  authorId?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
}

export type CommentMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.CommentMaxAggregateOutputType, {}, number | null>
  contain?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    number | null
  >
  authorId?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
}

export type GroupCountOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  users?: Resolver<Client.Prisma.GroupCountOutputType, {}, number>
}

export type GroupCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
}

export type GroupAvgAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupAvgAggregateOutputType, {}, number | null>
}

export type GroupSumAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupSumAggregateOutputType, {}, number | null>
}

export type GroupMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupMinAggregateOutputType, {}, number | null>
  name?: Resolver<Client.Prisma.GroupMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.GroupMinAggregateOutputType,
    {},
    Date | null
  >
}

export type GroupMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>
} & {
  id?: Resolver<Client.Prisma.GroupMaxAggregateOutputType, {}, number | null>
  name?: Resolver<Client.Prisma.GroupMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.GroupMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface UserPostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface UserCommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface PostCommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface GroupUsersArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindFirstUserOrThrowArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _avg?: Client.Prisma.UserAvgAggregateInputType
  _sum?: Client.Prisma.UserSumAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindUniqueUserOrThrowArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstPostArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindFirstPostOrThrowArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByWithRelationInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindManyPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export interface AggregatePostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithRelationInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PostCountAggregateInputType
  _avg?: Client.Prisma.PostAvgAggregateInputType
  _sum?: Client.Prisma.PostSumAggregateInputType
  _min?: Client.Prisma.PostMinAggregateInputType
  _max?: Client.Prisma.PostMaxAggregateInputType
}

export interface GroupByPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByWithAggregationInput[]
  by: PostScalarFieldEnum[]
  having?: PostScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null
}

export interface FindUniquePostOrThrowArgs {
  where: PostWhereUniqueInput | null
}

export interface FindFirstCommentArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface FindFirstCommentOrThrowArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByWithRelationInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface FindManyCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithRelationInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CommentScalarFieldEnum[]
}

export interface AggregateCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithRelationInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CommentCountAggregateInputType
  _avg?: Client.Prisma.CommentAvgAggregateInputType
  _sum?: Client.Prisma.CommentSumAggregateInputType
  _min?: Client.Prisma.CommentMinAggregateInputType
  _max?: Client.Prisma.CommentMaxAggregateInputType
}

export interface GroupByCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByWithAggregationInput[]
  by: CommentScalarFieldEnum[]
  having?: CommentScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface FindUniqueCommentOrThrowArgs {
  where: CommentWhereUniqueInput | null
}

export interface FindFirstGroupArgs {
  where?: GroupWhereInput | null
  orderBy?: GroupOrderByWithRelationInput[] | null
  cursor?: GroupWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: GroupScalarFieldEnum[] | null
}

export interface FindFirstGroupOrThrowArgs {
  where?: GroupWhereInput | null
  orderBy?: GroupOrderByWithRelationInput[] | null
  cursor?: GroupWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: GroupScalarFieldEnum[] | null
}

export interface FindManyGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithRelationInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  distinct?: GroupScalarFieldEnum[]
}

export interface AggregateGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithRelationInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.GroupCountAggregateInputType
  _avg?: Client.Prisma.GroupAvgAggregateInputType
  _sum?: Client.Prisma.GroupSumAggregateInputType
  _min?: Client.Prisma.GroupMinAggregateInputType
  _max?: Client.Prisma.GroupMaxAggregateInputType
}

export interface GroupByGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByWithAggregationInput[]
  by: GroupScalarFieldEnum[]
  having?: GroupScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface FindUniqueGroupOrThrowArgs {
  where: GroupWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOnePostArgs {
  data: PostCreateInput
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null
  where: PostWhereUniqueInput | null
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput
}

export interface CreateOneCommentArgs {
  data: CommentCreateInput
}

export interface UpsertOneCommentArgs {
  where: CommentWhereUniqueInput
  create: CommentCreateInput
  update: CommentUpdateInput
}

export interface DeleteOneCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface UpdateOneCommentArgs {
  data: CommentUpdateInput | null
  where: CommentWhereUniqueInput | null
}

export interface UpdateManyCommentArgs {
  data: CommentUpdateManyMutationInput
  where?: CommentWhereInput
}

export interface DeleteManyCommentArgs {
  where?: CommentWhereInput
}

export interface CreateOneGroupArgs {
  data: GroupCreateInput
}

export interface UpsertOneGroupArgs {
  where: GroupWhereUniqueInput
  create: GroupCreateInput
  update: GroupUpdateInput
}

export interface DeleteOneGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface UpdateOneGroupArgs {
  data: GroupUpdateInput | null
  where: GroupWhereUniqueInput | null
}

export interface UpdateManyGroupArgs {
  data: GroupUpdateManyMutationInput
  where?: GroupWhereInput
}

export interface DeleteManyGroupArgs {
  where?: GroupWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: IntFilter
  createdAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  password?: StringFilter
  posts?: PostListRelationFilter
  group?: GroupWhereInput | null
  groupId?: IntNullableFilter | null
  comments?: CommentListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  posts?: PostOrderByRelationAggregateInput
  group?: GroupOrderByWithRelationInput
  groupId?: SortOrder
  comments?: CommentOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: number
  email?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  groupId?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _avg?: UserAvgOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
  _sum?: UserSumOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  email?: StringWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  password?: StringWithAggregatesFilter
  groupId?: IntNullableWithAggregatesFilter | null
}

export interface PostWhereInput {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: IntFilter
  published?: BoolFilter
  title?: StringFilter
  author?: UserWhereInput | null
  authorId?: IntNullableFilter | null
  comments?: CommentListRelationFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface PostOrderByWithRelationInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  author?: UserOrderByWithRelationInput
  authorId?: SortOrder
  comments?: CommentOrderByRelationAggregateInput
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PostWhereUniqueInput {
  id?: number
}

export interface PostOrderByWithAggregationInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: PostCountOrderByAggregateInput
  _avg?: PostAvgOrderByAggregateInput
  _max?: PostMaxOrderByAggregateInput
  _min?: PostMinOrderByAggregateInput
  _sum?: PostSumOrderByAggregateInput
}

export interface PostScalarWhereWithAggregatesInput {
  AND?: PostScalarWhereWithAggregatesInput[]
  OR?: PostScalarWhereWithAggregatesInput[]
  NOT?: PostScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  published?: BoolWithAggregatesFilter
  title?: StringWithAggregatesFilter
  authorId?: IntNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[]
  OR?: CommentWhereInput[]
  NOT?: CommentWhereInput[]
  id?: IntFilter
  contain?: StringFilter
  post?: PostWhereInput
  postId?: IntFilter
  author?: UserWhereInput | null
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface CommentOrderByWithRelationInput {
  id?: SortOrder
  contain?: SortOrder
  post?: PostOrderByWithRelationInput
  postId?: SortOrder
  author?: UserOrderByWithRelationInput
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CommentWhereUniqueInput {
  id?: number
}

export interface CommentOrderByWithAggregationInput {
  id?: SortOrder
  contain?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: CommentCountOrderByAggregateInput
  _avg?: CommentAvgOrderByAggregateInput
  _max?: CommentMaxOrderByAggregateInput
  _min?: CommentMinOrderByAggregateInput
  _sum?: CommentSumOrderByAggregateInput
}

export interface CommentScalarWhereWithAggregatesInput {
  AND?: CommentScalarWhereWithAggregatesInput[]
  OR?: CommentScalarWhereWithAggregatesInput[]
  NOT?: CommentScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  contain?: StringWithAggregatesFilter
  postId?: IntWithAggregatesFilter
  authorId?: IntNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[]
  OR?: GroupWhereInput[]
  NOT?: GroupWhereInput[]
  id?: IntFilter
  name?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  users?: UserListRelationFilter
}

export interface GroupOrderByWithRelationInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  users?: UserOrderByRelationAggregateInput
}

export interface GroupWhereUniqueInput {
  id?: number
}

export interface GroupOrderByWithAggregationInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  _count?: GroupCountOrderByAggregateInput
  _avg?: GroupAvgOrderByAggregateInput
  _max?: GroupMaxOrderByAggregateInput
  _min?: GroupMinOrderByAggregateInput
  _sum?: GroupSumOrderByAggregateInput
}

export interface GroupScalarWhereWithAggregatesInput {
  AND?: GroupScalarWhereWithAggregatesInput[]
  OR?: GroupScalarWhereWithAggregatesInput[]
  NOT?: GroupScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  name?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
}

export interface UserCreateInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  group?: GroupCreateNestedOneWithoutUsersInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  groupId?: number | null
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorNestedInput
  group?: GroupUpdateOneWithoutUsersNestedInput
  comments?: CommentUpdateManyWithoutAuthorNestedInput
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
  comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
}

export interface UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
}

export interface PostCreateInput {
  published?: boolean
  title: string
  author?: UserCreateNestedOneWithoutPostsInput
  comments?: CommentCreateNestedManyWithoutPostInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PostUncheckedCreateInput {
  id?: number
  published?: boolean
  title: string
  authorId?: number | null
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PostUpdateInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutPostsNestedInput
  comments?: CommentUpdateManyWithoutPostNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUpdateManyMutationInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentCreateInput {
  contain: string
  post: PostCreateNestedOneWithoutCommentsInput
  author?: UserCreateNestedOneWithoutCommentsInput
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentUncheckedCreateInput {
  id?: number
  contain: string
  postId: number
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentUpdateInput {
  contain?: StringFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  author?: UserUpdateOneWithoutCommentsNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateManyMutationInput {
  contain?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupCreateInput {
  name: string
  createdAt?: Date
  updatedAt?: Date
  users?: UserCreateNestedManyWithoutGroupInput
}

export interface GroupUncheckedCreateInput {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
  users?: UserUncheckedCreateNestedManyWithoutGroupInput
}

export interface GroupUpdateInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  users?: UserUpdateManyWithoutGroupNestedInput
}

export interface GroupUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  users?: UserUncheckedUpdateManyWithoutGroupNestedInput
}

export interface GroupUpdateManyMutationInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export interface GroupRelationFilter {
  is?: GroupWhereInput | null
  isNot?: GroupWhereInput | null
}

export interface IntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface CommentListRelationFilter {
  every?: CommentWhereInput
  some?: CommentWhereInput
  none?: CommentWhereInput
}

export interface PostOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface CommentOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  groupId?: SortOrder
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder
  groupId?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  groupId?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  groupId?: SortOrder
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder
  groupId?: SortOrder
}

export interface IntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface IntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export interface PostCountOrderByAggregateInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PostAvgOrderByAggregateInput {
  id?: SortOrder
  authorId?: SortOrder
}

export interface PostMaxOrderByAggregateInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PostMinOrderByAggregateInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PostSumOrderByAggregateInput {
  id?: SortOrder
  authorId?: SortOrder
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostRelationFilter {
  is?: PostWhereInput
  isNot?: PostWhereInput
}

export interface CommentCountOrderByAggregateInput {
  id?: SortOrder
  contain?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CommentAvgOrderByAggregateInput {
  id?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
}

export interface CommentMaxOrderByAggregateInput {
  id?: SortOrder
  contain?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CommentMinOrderByAggregateInput {
  id?: SortOrder
  contain?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CommentSumOrderByAggregateInput {
  id?: SortOrder
  postId?: SortOrder
  authorId?: SortOrder
}

export interface UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

export interface UserOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface GroupCountOrderByAggregateInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface GroupAvgOrderByAggregateInput {
  id?: SortOrder
}

export interface GroupMaxOrderByAggregateInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface GroupMinOrderByAggregateInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface GroupSumOrderByAggregateInput {
  id?: SortOrder
}

export interface PostCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  connect?: PostWhereUniqueInput[]
}

export interface GroupCreateNestedOneWithoutUsersInput {
  create?: GroupUncheckedCreateWithoutUsersInput
  connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
  connect?: GroupWhereUniqueInput
}

export interface CommentCreateNestedManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface PostUncheckedCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  connect?: PostWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface PostUpdateManyWithoutAuthorNestedInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface GroupUpdateOneWithoutUsersNestedInput {
  create?: GroupUncheckedCreateWithoutUsersInput
  connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
  upsert?: GroupUpsertWithoutUsersInput
  disconnect?: boolean
  delete?: boolean
  connect?: GroupWhereUniqueInput
  update?: GroupUncheckedUpdateWithoutUsersInput
}

export interface CommentUpdateManyWithoutAuthorNestedInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface PostUncheckedUpdateManyWithoutAuthorNestedInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  connect?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface CommentUncheckedUpdateManyWithoutAuthorNestedInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface CommentCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface UserUpdateOneWithoutPostsNestedInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutPostsInput
}

export interface CommentUpdateManyWithoutPostNestedInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface CommentUncheckedUpdateManyWithoutPostNestedInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutPostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  connect?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface PostCreateNestedOneWithoutCommentsInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
  connect?: PostWhereUniqueInput
}

export interface UserCreateNestedOneWithoutCommentsInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateOneRequiredWithoutCommentsNestedInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
  upsert?: PostUpsertWithoutCommentsInput
  connect?: PostWhereUniqueInput
  update?: PostUncheckedUpdateWithoutCommentsInput
}

export interface UserUpdateOneWithoutCommentsNestedInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
  upsert?: UserUpsertWithoutCommentsInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutCommentsInput
}

export interface UserCreateNestedManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutGroupInput[]
  connect?: UserWhereUniqueInput[]
}

export interface UserUncheckedCreateNestedManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutGroupInput[]
  connect?: UserWhereUniqueInput[]
}

export interface UserUpdateManyWithoutGroupNestedInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutGroupInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutGroupInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  connect?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: UserUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: UserScalarWhereInput[]
}

export interface UserUncheckedUpdateManyWithoutGroupNestedInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutGroupInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutGroupInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  connect?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: UserUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: UserScalarWhereInput[]
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedIntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface NestedFloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface NestedFloatNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatNullableFilter | null
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface PostCreateWithoutAuthorInput {
  published?: boolean
  title: string
  comments?: CommentCreateNestedManyWithoutPostInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PostUncheckedCreateWithoutAuthorInput {
  id?: number
  published?: boolean
  title: string
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PostCreateOrConnectWithoutAuthorInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface GroupCreateWithoutUsersInput {
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GroupUncheckedCreateWithoutUsersInput {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GroupCreateOrConnectWithoutUsersInput {
  where: GroupWhereUniqueInput
  create: GroupUncheckedCreateWithoutUsersInput
}

export interface CommentCreateWithoutAuthorInput {
  contain: string
  post: PostCreateNestedOneWithoutCommentsInput
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentUncheckedCreateWithoutAuthorInput {
  id?: number
  contain: string
  postId: number
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentCreateOrConnectWithoutAuthorInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutAuthorInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUncheckedUpdateWithoutAuthorInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUncheckedUpdateWithoutAuthorInput
}

export interface PostUpdateManyWithWhereWithoutAuthorInput {
  where: PostScalarWhereInput
  data: PostUncheckedUpdateManyWithoutPostsInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: IntFilter
  published?: BoolFilter
  title?: StringFilter
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface GroupUpsertWithoutUsersInput {
  update: GroupUncheckedUpdateWithoutUsersInput
  create: GroupUncheckedCreateWithoutUsersInput
}

export interface GroupUpdateWithoutUsersInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutAuthorInput
  create: CommentUncheckedCreateWithoutAuthorInput
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutAuthorInput
}

export interface CommentUpdateManyWithWhereWithoutAuthorInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface CommentScalarWhereInput {
  AND?: CommentScalarWhereInput[]
  OR?: CommentScalarWhereInput[]
  NOT?: CommentScalarWhereInput[]
  id?: IntFilter
  contain?: StringFilter
  postId?: IntFilter
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface UserCreateWithoutPostsInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  group?: GroupCreateNestedOneWithoutUsersInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateWithoutPostsInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  groupId?: number | null
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutPostsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface CommentCreateWithoutPostInput {
  contain: string
  author?: UserCreateNestedOneWithoutCommentsInput
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentUncheckedCreateWithoutPostInput {
  id?: number
  contain: string
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentCreateOrConnectWithoutPostInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUncheckedUpdateWithoutPostsInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpdateWithoutPostsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  group?: GroupUpdateOneWithoutUsersNestedInput
  comments?: CommentUpdateManyWithoutAuthorNestedInput
}

export interface UserUncheckedUpdateWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
  comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutPostInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutPostInput
}

export interface CommentUpdateManyWithWhereWithoutPostInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface PostCreateWithoutCommentsInput {
  published?: boolean
  title: string
  author?: UserCreateNestedOneWithoutPostsInput
  createdAt?: Date
  updatedAt?: Date
}

export interface PostUncheckedCreateWithoutCommentsInput {
  id?: number
  published?: boolean
  title: string
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface PostCreateOrConnectWithoutCommentsInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface UserCreateWithoutCommentsInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  group?: GroupCreateNestedOneWithoutUsersInput
}

export interface UserUncheckedCreateWithoutCommentsInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  groupId?: number | null
}

export interface UserCreateOrConnectWithoutCommentsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUncheckedUpdateWithoutCommentsInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface PostUpdateWithoutCommentsInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutPostsNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUncheckedUpdateWithoutCommentsInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface UserUpdateWithoutCommentsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorNestedInput
  group?: GroupUpdateOneWithoutUsersNestedInput
}

export interface UserUncheckedUpdateWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
}

export interface UserCreateWithoutGroupInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateWithoutGroupInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutGroupInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutGroupInput
}

export interface UserUpsertWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput
  update: UserUncheckedUpdateWithoutGroupInput
  create: UserUncheckedCreateWithoutGroupInput
}

export interface UserUpdateWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput
  data: UserUncheckedUpdateWithoutGroupInput
}

export interface UserUpdateManyWithWhereWithoutGroupInput {
  where: UserScalarWhereInput
  data: UserUncheckedUpdateManyWithoutUsersInput
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[]
  OR?: UserScalarWhereInput[]
  NOT?: UserScalarWhereInput[]
  id?: IntFilter
  createdAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  password?: StringFilter
  groupId?: IntNullableFilter | null
}

export interface PostUpdateWithoutAuthorInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  comments?: CommentUpdateManyWithoutPostNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateWithoutAuthorInput {
  contain?: StringFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateManyWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateWithoutPostInput {
  contain?: StringFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutCommentsNestedInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateWithoutPostInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUpdateWithoutGroupInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorNestedInput
  comments?: CommentUpdateManyWithoutAuthorNestedInput
}

export interface UserUncheckedUpdateWithoutGroupInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export enum CommentScalarFieldEnum {
  id = 'id',
  contain = 'contain',
  postId = 'postId',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum GroupScalarFieldEnum {
  id = 'id',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum PostScalarFieldEnum {
  id = 'id',
  published = 'published',
  title = 'title',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TransactionIsolationLevel {
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  email = 'email',
  name = 'name',
  password = 'password',
  groupId = 'groupId',
}
