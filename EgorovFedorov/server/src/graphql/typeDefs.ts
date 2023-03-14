import Group from './Group/typeDefs'
import Comment from './Comment/typeDefs'
import Post from './Post/typeDefs'
import User from './User/typeDefs'
import { mergeTypeDefs } from '@graphql-tools/merge'
import InputTypes from './InputTypes'

export default mergeTypeDefs([InputTypes, User, Post, Comment, Group])
