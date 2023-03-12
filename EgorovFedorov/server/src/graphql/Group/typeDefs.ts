import gql from 'graphql-tag'

export default gql`
  type Group {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    users(
      where: UserWhereInput
      orderBy: UserOrderByWithRelationInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    _count: GroupCountOutputType!
  }

  type Query {
    findUniqueGroup(where: GroupWhereUniqueInput!): Group
    findFirstGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): Group
    findManyGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): [Group!]
    findManyGroupCount(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
      distinct: [GroupScalarFieldEnum]
    ): Int!
    aggregateGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByWithRelationInput]
      cursor: GroupWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateGroup
  }

  type Mutation {
    createOneGroup(data: GroupCreateInput!): Group!
    updateOneGroup(
      data: GroupUpdateInput!
      where: GroupWhereUniqueInput!
    ): Group!
    deleteOneGroup(where: GroupWhereUniqueInput!): Group
    upsertOneGroup(
      where: GroupWhereUniqueInput!
      create: GroupCreateInput!
      update: GroupUpdateInput!
    ): Group
    deleteManyGroup(where: GroupWhereInput): BatchPayload
    updateManyGroup(
      data: GroupUpdateManyMutationInput!
      where: GroupWhereInput
    ): BatchPayload
  }
`
