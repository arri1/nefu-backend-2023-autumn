import gql from 'graphql-tag'

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum CommentScalarFieldEnum {
    id
    contain
    postId
    authorId
    createdAt
    updatedAt
  }

  enum GroupScalarFieldEnum {
    id
    name
    createdAt
    updatedAt
  }

  enum PostScalarFieldEnum {
    id
    published
    title
    authorId
    createdAt
    updatedAt
  }

  enum SortOrder {
    asc
    desc
  }

  enum TransactionIsolationLevel {
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    createdAt
    email
    name
    password
    groupId
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    email: StringFilter
    name: StringNullableFilter
    password: StringFilter
    groupId: IntNullableFilter
    posts: PostListRelationFilter
    group: GroupWhereInput
    comments: CommentListRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    email: SortOrder
    name: SortOrder
    password: SortOrder
    groupId: SortOrder
    posts: PostOrderByRelationAggregateInput
    group: GroupOrderByWithRelationInput
    comments: CommentOrderByRelationAggregateInput
  }

  input UserWhereUniqueInput {
    id: Int
    email: String
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    email: SortOrder
    name: SortOrder
    password: SortOrder
    groupId: SortOrder
    _count: UserCountOrderByAggregateInput
    _avg: UserAvgOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
    _sum: UserSumOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    email: StringWithAggregatesFilter
    name: StringNullableWithAggregatesFilter
    password: StringWithAggregatesFilter
    groupId: IntNullableWithAggregatesFilter
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: IntFilter
    published: BoolFilter
    title: StringFilter
    authorId: IntNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    author: UserWhereInput
    comments: CommentListRelationFilter
  }

  input PostOrderByWithRelationInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    author: UserOrderByWithRelationInput
    comments: CommentOrderByRelationAggregateInput
  }

  input PostWhereUniqueInput {
    id: Int
  }

  input PostOrderByWithAggregationInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: PostCountOrderByAggregateInput
    _avg: PostAvgOrderByAggregateInput
    _max: PostMaxOrderByAggregateInput
    _min: PostMinOrderByAggregateInput
    _sum: PostSumOrderByAggregateInput
  }

  input PostScalarWhereWithAggregatesInput {
    AND: [PostScalarWhereWithAggregatesInput!]
    OR: [PostScalarWhereWithAggregatesInput!]
    NOT: [PostScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    published: BoolWithAggregatesFilter
    title: StringWithAggregatesFilter
    authorId: IntNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input CommentWhereInput {
    AND: [CommentWhereInput!]
    OR: [CommentWhereInput!]
    NOT: [CommentWhereInput!]
    id: IntFilter
    contain: StringFilter
    postId: IntFilter
    authorId: IntNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    post: PostWhereInput
    author: UserWhereInput
  }

  input CommentOrderByWithRelationInput {
    id: SortOrder
    contain: SortOrder
    postId: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    post: PostOrderByWithRelationInput
    author: UserOrderByWithRelationInput
  }

  input CommentWhereUniqueInput {
    id: Int
  }

  input CommentOrderByWithAggregationInput {
    id: SortOrder
    contain: SortOrder
    postId: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: CommentCountOrderByAggregateInput
    _avg: CommentAvgOrderByAggregateInput
    _max: CommentMaxOrderByAggregateInput
    _min: CommentMinOrderByAggregateInput
    _sum: CommentSumOrderByAggregateInput
  }

  input CommentScalarWhereWithAggregatesInput {
    AND: [CommentScalarWhereWithAggregatesInput!]
    OR: [CommentScalarWhereWithAggregatesInput!]
    NOT: [CommentScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    contain: StringWithAggregatesFilter
    postId: IntWithAggregatesFilter
    authorId: IntNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input GroupWhereInput {
    AND: [GroupWhereInput!]
    OR: [GroupWhereInput!]
    NOT: [GroupWhereInput!]
    id: IntFilter
    name: StringFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    users: UserListRelationFilter
  }

  input GroupOrderByWithRelationInput {
    id: SortOrder
    name: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    users: UserOrderByRelationAggregateInput
  }

  input GroupWhereUniqueInput {
    id: Int
  }

  input GroupOrderByWithAggregationInput {
    id: SortOrder
    name: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    _count: GroupCountOrderByAggregateInput
    _avg: GroupAvgOrderByAggregateInput
    _max: GroupMaxOrderByAggregateInput
    _min: GroupMinOrderByAggregateInput
    _sum: GroupSumOrderByAggregateInput
  }

  input GroupScalarWhereWithAggregatesInput {
    AND: [GroupScalarWhereWithAggregatesInput!]
    OR: [GroupScalarWhereWithAggregatesInput!]
    NOT: [GroupScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    name: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
  }

  input UserCreateInput {
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    posts: PostCreateNestedManyWithoutAuthorInput
    group: GroupCreateNestedOneWithoutUsersInput
    comments: CommentCreateNestedManyWithoutAuthorInput
  }

  input UserUncheckedCreateInput {
    id: Int
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    groupId: Int
    posts: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserUpdateInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutAuthorNestedInput
    group: GroupUpdateOneWithoutUsersNestedInput
    comments: CommentUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    groupId: NullableIntFieldUpdateOperationsInput
    posts: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input UserUpdateManyMutationInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  input UserUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    groupId: NullableIntFieldUpdateOperationsInput
  }

  input PostCreateInput {
    published: Boolean
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    author: UserCreateNestedOneWithoutPostsInput
    comments: CommentCreateNestedManyWithoutPostInput
  }

  input PostUncheckedCreateInput {
    id: Int
    published: Boolean
    title: String!
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
    comments: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  input PostUpdateInput {
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsNestedInput
    comments: CommentUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    comments: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  input PostUpdateManyMutationInput {
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input PostUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentCreateInput {
    contain: String!
    createdAt: DateTime
    updatedAt: DateTime
    post: PostCreateNestedOneWithoutCommentsInput!
    author: UserCreateNestedOneWithoutCommentsInput
  }

  input CommentUncheckedCreateInput {
    id: Int
    contain: String!
    postId: Int!
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CommentUpdateInput {
    contain: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    post: PostUpdateOneRequiredWithoutCommentsNestedInput
    author: UserUpdateOneWithoutCommentsNestedInput
  }

  input CommentUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    contain: StringFieldUpdateOperationsInput
    postId: IntFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUpdateManyMutationInput {
    contain: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    contain: StringFieldUpdateOperationsInput
    postId: IntFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input GroupCreateInput {
    name: String!
    createdAt: DateTime
    updatedAt: DateTime
    users: UserCreateNestedManyWithoutGroupInput
  }

  input GroupUncheckedCreateInput {
    id: Int
    name: String!
    createdAt: DateTime
    updatedAt: DateTime
    users: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  input GroupUpdateInput {
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    users: UserUpdateManyWithoutGroupNestedInput
  }

  input GroupUncheckedUpdateInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    users: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  input GroupUpdateManyMutationInput {
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input GroupUncheckedUpdateManyInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input IntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input GroupRelationFilter {
    is: GroupWhereInput
    isNot: GroupWhereInput
  }

  input CommentListRelationFilter {
    every: CommentWhereInput
    some: CommentWhereInput
    none: CommentWhereInput
  }

  input PostOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input CommentOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    email: SortOrder
    name: SortOrder
    password: SortOrder
    groupId: SortOrder
  }

  input UserAvgOrderByAggregateInput {
    id: SortOrder
    groupId: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    email: SortOrder
    name: SortOrder
    password: SortOrder
    groupId: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    email: SortOrder
    name: SortOrder
    password: SortOrder
    groupId: SortOrder
  }

  input UserSumOrderByAggregateInput {
    id: SortOrder
    groupId: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input IntNullableWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _avg: NestedFloatNullableFilter
    _sum: NestedIntNullableFilter
    _min: NestedIntNullableFilter
    _max: NestedIntNullableFilter
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input PostCountOrderByAggregateInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostAvgOrderByAggregateInput {
    id: SortOrder
    authorId: SortOrder
  }

  input PostMaxOrderByAggregateInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostMinOrderByAggregateInput {
    id: SortOrder
    published: SortOrder
    title: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input PostSumOrderByAggregateInput {
    id: SortOrder
    authorId: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input PostRelationFilter {
    is: PostWhereInput
    isNot: PostWhereInput
  }

  input CommentCountOrderByAggregateInput {
    id: SortOrder
    contain: SortOrder
    postId: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input CommentAvgOrderByAggregateInput {
    id: SortOrder
    postId: SortOrder
    authorId: SortOrder
  }

  input CommentMaxOrderByAggregateInput {
    id: SortOrder
    contain: SortOrder
    postId: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input CommentMinOrderByAggregateInput {
    id: SortOrder
    contain: SortOrder
    postId: SortOrder
    authorId: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input CommentSumOrderByAggregateInput {
    id: SortOrder
    postId: SortOrder
    authorId: SortOrder
  }

  input UserListRelationFilter {
    every: UserWhereInput
    some: UserWhereInput
    none: UserWhereInput
  }

  input UserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input GroupCountOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input GroupAvgOrderByAggregateInput {
    id: SortOrder
  }

  input GroupMaxOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input GroupMinOrderByAggregateInput {
    id: SortOrder
    name: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  input GroupSumOrderByAggregateInput {
    id: SortOrder
  }

  input PostCreateNestedManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
  }

  input GroupCreateNestedOneWithoutUsersInput {
    create: GroupUncheckedCreateWithoutUsersInput
    connectOrCreate: GroupCreateOrConnectWithoutUsersInput
    connect: GroupWhereUniqueInput
  }

  input CommentCreateNestedManyWithoutAuthorInput {
    create: [CommentCreateWithoutAuthorInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutAuthorInput!]
    connect: [CommentWhereUniqueInput!]
  }

  input PostUncheckedCreateNestedManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    connect: [PostWhereUniqueInput!]
  }

  input CommentUncheckedCreateNestedManyWithoutAuthorInput {
    create: [CommentCreateWithoutAuthorInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutAuthorInput!]
    connect: [CommentWhereUniqueInput!]
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input PostUpdateManyWithoutAuthorNestedInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input GroupUpdateOneWithoutUsersNestedInput {
    create: GroupUncheckedCreateWithoutUsersInput
    connectOrCreate: GroupCreateOrConnectWithoutUsersInput
    upsert: GroupUpsertWithoutUsersInput
    disconnect: Boolean
    delete: Boolean
    connect: GroupWhereUniqueInput
    update: GroupUncheckedUpdateWithoutUsersInput
  }

  input CommentUpdateManyWithoutAuthorNestedInput {
    create: [CommentCreateWithoutAuthorInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutAuthorInput!]
    upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
    set: [CommentWhereUniqueInput!]
    disconnect: [CommentWhereUniqueInput!]
    delete: [CommentWhereUniqueInput!]
    connect: [CommentWhereUniqueInput!]
    update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [CommentUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [CommentScalarWhereInput!]
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input NullableIntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input PostUncheckedUpdateManyWithoutAuthorNestedInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input CommentUncheckedUpdateManyWithoutAuthorNestedInput {
    create: [CommentCreateWithoutAuthorInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutAuthorInput!]
    upsert: [CommentUpsertWithWhereUniqueWithoutAuthorInput!]
    set: [CommentWhereUniqueInput!]
    disconnect: [CommentWhereUniqueInput!]
    delete: [CommentWhereUniqueInput!]
    connect: [CommentWhereUniqueInput!]
    update: [CommentUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [CommentUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [CommentScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutPostsInput {
    create: UserUncheckedCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    connect: UserWhereUniqueInput
  }

  input CommentCreateNestedManyWithoutPostInput {
    create: [CommentCreateWithoutPostInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutPostInput!]
    connect: [CommentWhereUniqueInput!]
  }

  input CommentUncheckedCreateNestedManyWithoutPostInput {
    create: [CommentCreateWithoutPostInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutPostInput!]
    connect: [CommentWhereUniqueInput!]
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input UserUpdateOneWithoutPostsNestedInput {
    create: UserUncheckedCreateWithoutPostsInput
    connectOrCreate: UserCreateOrConnectWithoutPostsInput
    upsert: UserUpsertWithoutPostsInput
    disconnect: Boolean
    delete: Boolean
    connect: UserWhereUniqueInput
    update: UserUncheckedUpdateWithoutPostsInput
  }

  input CommentUpdateManyWithoutPostNestedInput {
    create: [CommentCreateWithoutPostInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutPostInput!]
    upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
    set: [CommentWhereUniqueInput!]
    disconnect: [CommentWhereUniqueInput!]
    delete: [CommentWhereUniqueInput!]
    connect: [CommentWhereUniqueInput!]
    update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
    updateMany: [CommentUpdateManyWithWhereWithoutPostInput!]
    deleteMany: [CommentScalarWhereInput!]
  }

  input CommentUncheckedUpdateManyWithoutPostNestedInput {
    create: [CommentCreateWithoutPostInput!]
    connectOrCreate: [CommentCreateOrConnectWithoutPostInput!]
    upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
    set: [CommentWhereUniqueInput!]
    disconnect: [CommentWhereUniqueInput!]
    delete: [CommentWhereUniqueInput!]
    connect: [CommentWhereUniqueInput!]
    update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
    updateMany: [CommentUpdateManyWithWhereWithoutPostInput!]
    deleteMany: [CommentScalarWhereInput!]
  }

  input PostCreateNestedOneWithoutCommentsInput {
    create: PostUncheckedCreateWithoutCommentsInput
    connectOrCreate: PostCreateOrConnectWithoutCommentsInput
    connect: PostWhereUniqueInput
  }

  input UserCreateNestedOneWithoutCommentsInput {
    create: UserUncheckedCreateWithoutCommentsInput
    connectOrCreate: UserCreateOrConnectWithoutCommentsInput
    connect: UserWhereUniqueInput
  }

  input PostUpdateOneRequiredWithoutCommentsNestedInput {
    create: PostUncheckedCreateWithoutCommentsInput
    connectOrCreate: PostCreateOrConnectWithoutCommentsInput
    upsert: PostUpsertWithoutCommentsInput
    connect: PostWhereUniqueInput
    update: PostUncheckedUpdateWithoutCommentsInput
  }

  input UserUpdateOneWithoutCommentsNestedInput {
    create: UserUncheckedCreateWithoutCommentsInput
    connectOrCreate: UserCreateOrConnectWithoutCommentsInput
    upsert: UserUpsertWithoutCommentsInput
    disconnect: Boolean
    delete: Boolean
    connect: UserWhereUniqueInput
    update: UserUncheckedUpdateWithoutCommentsInput
  }

  input UserCreateNestedManyWithoutGroupInput {
    create: [UserCreateWithoutGroupInput!]
    connectOrCreate: [UserCreateOrConnectWithoutGroupInput!]
    connect: [UserWhereUniqueInput!]
  }

  input UserUncheckedCreateNestedManyWithoutGroupInput {
    create: [UserCreateWithoutGroupInput!]
    connectOrCreate: [UserCreateOrConnectWithoutGroupInput!]
    connect: [UserWhereUniqueInput!]
  }

  input UserUpdateManyWithoutGroupNestedInput {
    create: [UserCreateWithoutGroupInput!]
    connectOrCreate: [UserCreateOrConnectWithoutGroupInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutGroupInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutGroupInput!]
    updateMany: [UserUpdateManyWithWhereWithoutGroupInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input UserUncheckedUpdateManyWithoutGroupNestedInput {
    create: [UserCreateWithoutGroupInput!]
    connectOrCreate: [UserCreateOrConnectWithoutGroupInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutGroupInput!]
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutGroupInput!]
    updateMany: [UserUpdateManyWithWhereWithoutGroupInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _avg: NestedFloatNullableFilter
    _sum: NestedIntNullableFilter
    _min: NestedIntNullableFilter
    _max: NestedIntNullableFilter
  }

  input NestedFloatNullableFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatNullableFilter
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input PostCreateWithoutAuthorInput {
    published: Boolean
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    comments: CommentCreateNestedManyWithoutPostInput
  }

  input PostUncheckedCreateWithoutAuthorInput {
    id: Int
    published: Boolean
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    comments: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  input PostCreateOrConnectWithoutAuthorInput {
    where: PostWhereUniqueInput!
    create: PostUncheckedCreateWithoutAuthorInput!
  }

  input GroupCreateWithoutUsersInput {
    name: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input GroupUncheckedCreateWithoutUsersInput {
    id: Int
    name: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input GroupCreateOrConnectWithoutUsersInput {
    where: GroupWhereUniqueInput!
    create: GroupUncheckedCreateWithoutUsersInput!
  }

  input CommentCreateWithoutAuthorInput {
    contain: String!
    createdAt: DateTime
    updatedAt: DateTime
    post: PostCreateNestedOneWithoutCommentsInput!
  }

  input CommentUncheckedCreateWithoutAuthorInput {
    id: Int
    contain: String!
    postId: Int!
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CommentCreateOrConnectWithoutAuthorInput {
    where: CommentWhereUniqueInput!
    create: CommentUncheckedCreateWithoutAuthorInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUncheckedUpdateWithoutAuthorInput!
    create: PostUncheckedCreateWithoutAuthorInput!
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUncheckedUpdateWithoutAuthorInput!
  }

  input PostUpdateManyWithWhereWithoutAuthorInput {
    where: PostScalarWhereInput!
    data: PostUncheckedUpdateManyWithoutPostsInput!
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
    id: IntFilter
    published: BoolFilter
    title: StringFilter
    authorId: IntNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input GroupUpsertWithoutUsersInput {
    update: GroupUncheckedUpdateWithoutUsersInput!
    create: GroupUncheckedCreateWithoutUsersInput!
  }

  input GroupUpdateWithoutUsersInput {
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input GroupUncheckedUpdateWithoutUsersInput {
    id: IntFieldUpdateOperationsInput
    name: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUpsertWithWhereUniqueWithoutAuthorInput {
    where: CommentWhereUniqueInput!
    update: CommentUncheckedUpdateWithoutAuthorInput!
    create: CommentUncheckedCreateWithoutAuthorInput!
  }

  input CommentUpdateWithWhereUniqueWithoutAuthorInput {
    where: CommentWhereUniqueInput!
    data: CommentUncheckedUpdateWithoutAuthorInput!
  }

  input CommentUpdateManyWithWhereWithoutAuthorInput {
    where: CommentScalarWhereInput!
    data: CommentUncheckedUpdateManyWithoutCommentsInput!
  }

  input CommentScalarWhereInput {
    AND: [CommentScalarWhereInput!]
    OR: [CommentScalarWhereInput!]
    NOT: [CommentScalarWhereInput!]
    id: IntFilter
    contain: StringFilter
    postId: IntFilter
    authorId: IntNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
  }

  input UserCreateWithoutPostsInput {
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    group: GroupCreateNestedOneWithoutUsersInput
    comments: CommentCreateNestedManyWithoutAuthorInput
  }

  input UserUncheckedCreateWithoutPostsInput {
    id: Int
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    groupId: Int
    comments: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserCreateOrConnectWithoutPostsInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutPostsInput!
  }

  input CommentCreateWithoutPostInput {
    contain: String!
    createdAt: DateTime
    updatedAt: DateTime
    author: UserCreateNestedOneWithoutCommentsInput
  }

  input CommentUncheckedCreateWithoutPostInput {
    id: Int
    contain: String!
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  input CommentCreateOrConnectWithoutPostInput {
    where: CommentWhereUniqueInput!
    create: CommentUncheckedCreateWithoutPostInput!
  }

  input UserUpsertWithoutPostsInput {
    update: UserUncheckedUpdateWithoutPostsInput!
    create: UserUncheckedCreateWithoutPostsInput!
  }

  input UserUpdateWithoutPostsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    group: GroupUpdateOneWithoutUsersNestedInput
    comments: CommentUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateWithoutPostsInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    groupId: NullableIntFieldUpdateOperationsInput
    comments: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input CommentUpsertWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput!
    update: CommentUncheckedUpdateWithoutPostInput!
    create: CommentUncheckedCreateWithoutPostInput!
  }

  input CommentUpdateWithWhereUniqueWithoutPostInput {
    where: CommentWhereUniqueInput!
    data: CommentUncheckedUpdateWithoutPostInput!
  }

  input CommentUpdateManyWithWhereWithoutPostInput {
    where: CommentScalarWhereInput!
    data: CommentUncheckedUpdateManyWithoutCommentsInput!
  }

  input PostCreateWithoutCommentsInput {
    published: Boolean
    title: String!
    createdAt: DateTime
    updatedAt: DateTime
    author: UserCreateNestedOneWithoutPostsInput
  }

  input PostUncheckedCreateWithoutCommentsInput {
    id: Int
    published: Boolean
    title: String!
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostCreateOrConnectWithoutCommentsInput {
    where: PostWhereUniqueInput!
    create: PostUncheckedCreateWithoutCommentsInput!
  }

  input UserCreateWithoutCommentsInput {
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    posts: PostCreateNestedManyWithoutAuthorInput
    group: GroupCreateNestedOneWithoutUsersInput
  }

  input UserUncheckedCreateWithoutCommentsInput {
    id: Int
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    groupId: Int
    posts: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserCreateOrConnectWithoutCommentsInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutCommentsInput!
  }

  input PostUpsertWithoutCommentsInput {
    update: PostUncheckedUpdateWithoutCommentsInput!
    create: PostUncheckedCreateWithoutCommentsInput!
  }

  input PostUpdateWithoutCommentsInput {
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    author: UserUpdateOneWithoutPostsNestedInput
  }

  input PostUncheckedUpdateWithoutCommentsInput {
    id: IntFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input UserUpsertWithoutCommentsInput {
    update: UserUncheckedUpdateWithoutCommentsInput!
    create: UserUncheckedCreateWithoutCommentsInput!
  }

  input UserUpdateWithoutCommentsInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutAuthorNestedInput
    group: GroupUpdateOneWithoutUsersNestedInput
  }

  input UserUncheckedUpdateWithoutCommentsInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    groupId: NullableIntFieldUpdateOperationsInput
    posts: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input UserCreateWithoutGroupInput {
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    posts: PostCreateNestedManyWithoutAuthorInput
    comments: CommentCreateNestedManyWithoutAuthorInput
  }

  input UserUncheckedCreateWithoutGroupInput {
    id: Int
    createdAt: DateTime
    email: String!
    name: String
    password: String!
    posts: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserCreateOrConnectWithoutGroupInput {
    where: UserWhereUniqueInput!
    create: UserUncheckedCreateWithoutGroupInput!
  }

  input UserUpsertWithWhereUniqueWithoutGroupInput {
    where: UserWhereUniqueInput!
    update: UserUncheckedUpdateWithoutGroupInput!
    create: UserUncheckedCreateWithoutGroupInput!
  }

  input UserUpdateWithWhereUniqueWithoutGroupInput {
    where: UserWhereUniqueInput!
    data: UserUncheckedUpdateWithoutGroupInput!
  }

  input UserUpdateManyWithWhereWithoutGroupInput {
    where: UserScalarWhereInput!
    data: UserUncheckedUpdateManyWithoutUsersInput!
  }

  input UserScalarWhereInput {
    AND: [UserScalarWhereInput!]
    OR: [UserScalarWhereInput!]
    NOT: [UserScalarWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    email: StringFilter
    name: StringNullableFilter
    password: StringFilter
    groupId: IntNullableFilter
  }

  input PostUpdateWithoutAuthorInput {
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    comments: CommentUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateWithoutAuthorInput {
    id: IntFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    comments: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  input PostUncheckedUpdateManyWithoutPostsInput {
    id: IntFieldUpdateOperationsInput
    published: BoolFieldUpdateOperationsInput
    title: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUpdateWithoutAuthorInput {
    contain: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    post: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  input CommentUncheckedUpdateWithoutAuthorInput {
    id: IntFieldUpdateOperationsInput
    contain: StringFieldUpdateOperationsInput
    postId: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUncheckedUpdateManyWithoutCommentsInput {
    id: IntFieldUpdateOperationsInput
    contain: StringFieldUpdateOperationsInput
    postId: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input CommentUpdateWithoutPostInput {
    contain: StringFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
    author: UserUpdateOneWithoutCommentsNestedInput
  }

  input CommentUncheckedUpdateWithoutPostInput {
    id: IntFieldUpdateOperationsInput
    contain: StringFieldUpdateOperationsInput
    authorId: NullableIntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    updatedAt: DateTimeFieldUpdateOperationsInput
  }

  input UserUpdateWithoutGroupInput {
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    posts: PostUpdateManyWithoutAuthorNestedInput
    comments: CommentUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateWithoutGroupInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
    posts: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateManyWithoutUsersInput {
    id: IntFieldUpdateOperationsInput
    createdAt: DateTimeFieldUpdateOperationsInput
    email: StringFieldUpdateOperationsInput
    name: NullableStringFieldUpdateOperationsInput
    password: StringFieldUpdateOperationsInput
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregatePost {
    _count: PostCountAggregateOutputType
    _avg: PostAvgAggregateOutputType
    _sum: PostSumAggregateOutputType
    _min: PostMinAggregateOutputType
    _max: PostMaxAggregateOutputType
  }

  type AggregateComment {
    _count: CommentCountAggregateOutputType
    _avg: CommentAvgAggregateOutputType
    _sum: CommentSumAggregateOutputType
    _min: CommentMinAggregateOutputType
    _max: CommentMaxAggregateOutputType
  }

  type AggregateGroup {
    _count: GroupCountAggregateOutputType
    _avg: GroupAvgAggregateOutputType
    _sum: GroupSumAggregateOutputType
    _min: GroupMinAggregateOutputType
    _max: GroupMaxAggregateOutputType
  }

  type UserCountOutputType {
    posts: Int!
    comments: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    email: Int!
    name: Int!
    password: Int!
    groupId: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType {
    id: Float
    groupId: Float
  }

  type UserSumAggregateOutputType {
    id: Int
    groupId: Int
  }

  type UserMinAggregateOutputType {
    id: Int
    createdAt: DateTime
    email: String
    name: String
    password: String
    groupId: Int
  }

  type UserMaxAggregateOutputType {
    id: Int
    createdAt: DateTime
    email: String
    name: String
    password: String
    groupId: Int
  }

  type PostCountOutputType {
    comments: Int!
  }

  type PostCountAggregateOutputType {
    id: Int!
    published: Int!
    title: Int!
    authorId: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type PostAvgAggregateOutputType {
    id: Float
    authorId: Float
  }

  type PostSumAggregateOutputType {
    id: Int
    authorId: Int
  }

  type PostMinAggregateOutputType {
    id: Int
    published: Boolean
    title: String
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type PostMaxAggregateOutputType {
    id: Int
    published: Boolean
    title: String
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type CommentCountAggregateOutputType {
    id: Int!
    contain: Int!
    postId: Int!
    authorId: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type CommentAvgAggregateOutputType {
    id: Float
    postId: Float
    authorId: Float
  }

  type CommentSumAggregateOutputType {
    id: Int
    postId: Int
    authorId: Int
  }

  type CommentMinAggregateOutputType {
    id: Int
    contain: String
    postId: Int
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type CommentMaxAggregateOutputType {
    id: Int
    contain: String
    postId: Int
    authorId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type GroupCountOutputType {
    users: Int!
  }

  type GroupCountAggregateOutputType {
    id: Int!
    name: Int!
    createdAt: Int!
    updatedAt: Int!
    _all: Int!
  }

  type GroupAvgAggregateOutputType {
    id: Float
  }

  type GroupSumAggregateOutputType {
    id: Int
  }

  type GroupMinAggregateOutputType {
    id: Int
    name: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type GroupMaxAggregateOutputType {
    id: Int
    name: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`
