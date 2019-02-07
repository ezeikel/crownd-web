module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCartItem {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateShop {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type CartItem {
  id: ID!
  quantity: Int!
  item: Item
  user: User!
}

type CartItemConnection {
  pageInfo: PageInfo!
  edges: [CartItemEdge]!
  aggregate: AggregateCartItem!
}

input CartItemCreateInput {
  quantity: Int
  item: ItemCreateOneInput
  user: UserCreateOneWithoutCartInput!
}

input CartItemCreateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  connect: [CartItemWhereUniqueInput!]
}

input CartItemCreateWithoutUserInput {
  quantity: Int
  item: ItemCreateOneInput
}

type CartItemEdge {
  node: CartItem!
  cursor: String!
}

enum CartItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartItemPreviousValues {
  id: ID!
  quantity: Int!
}

input CartItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [CartItemScalarWhereInput!]
  OR: [CartItemScalarWhereInput!]
  NOT: [CartItemScalarWhereInput!]
}

type CartItemSubscriptionPayload {
  mutation: MutationType!
  node: CartItem
  updatedFields: [String!]
  previousValues: CartItemPreviousValues
}

input CartItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CartItemWhereInput
  AND: [CartItemSubscriptionWhereInput!]
  OR: [CartItemSubscriptionWhereInput!]
  NOT: [CartItemSubscriptionWhereInput!]
}

input CartItemUpdateInput {
  quantity: Int
  item: ItemUpdateOneInput
  user: UserUpdateOneRequiredWithoutCartInput
}

input CartItemUpdateManyDataInput {
  quantity: Int
}

input CartItemUpdateManyMutationInput {
  quantity: Int
}

input CartItemUpdateManyWithoutUserInput {
  create: [CartItemCreateWithoutUserInput!]
  delete: [CartItemWhereUniqueInput!]
  connect: [CartItemWhereUniqueInput!]
  disconnect: [CartItemWhereUniqueInput!]
  update: [CartItemUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CartItemUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CartItemScalarWhereInput!]
  updateMany: [CartItemUpdateManyWithWhereNestedInput!]
}

input CartItemUpdateManyWithWhereNestedInput {
  where: CartItemScalarWhereInput!
  data: CartItemUpdateManyDataInput!
}

input CartItemUpdateWithoutUserDataInput {
  quantity: Int
  item: ItemUpdateOneInput
}

input CartItemUpdateWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  data: CartItemUpdateWithoutUserDataInput!
}

input CartItemUpsertWithWhereUniqueWithoutUserInput {
  where: CartItemWhereUniqueInput!
  update: CartItemUpdateWithoutUserDataInput!
  create: CartItemCreateWithoutUserInput!
}

input CartItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  item: ItemWhereInput
  user: UserWhereInput
  AND: [CartItemWhereInput!]
  OR: [CartItemWhereInput!]
  NOT: [CartItemWhereInput!]
}

input CartItemWhereUniqueInput {
  id: ID
}

scalar DateTime

type Item {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  owner: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  owner: UserCreateOneInput!
}

input ItemCreateOneInput {
  create: ItemCreateInput
  connect: ItemWhereUniqueInput
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  price_ASC
  price_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  image: String
  largeImage: String
  price: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateDataInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  owner: UserUpdateOneRequiredInput
}

input ItemUpdateInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  owner: UserUpdateOneRequiredInput
}

input ItemUpdateManyMutationInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
}

input ItemUpdateOneInput {
  create: ItemCreateInput
  update: ItemUpdateDataInput
  upsert: ItemUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ItemWhereUniqueInput
}

input ItemUpsertNestedInput {
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

input ItemWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  coordinates: [Float!]!
  address: String
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreatecoordinatesInput {
  set: [Float!]
}

input LocationCreateInput {
  coordinates: LocationCreatecoordinatesInput
  address: String
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  coordinates: [Float!]!
  address: String
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdatecoordinatesInput {
  set: [Float!]
}

input LocationUpdateDataInput {
  coordinates: LocationUpdatecoordinatesInput
  address: String
}

input LocationUpdateInput {
  coordinates: LocationUpdatecoordinatesInput
  address: String
}

input LocationUpdateManyMutationInput {
  coordinates: LocationUpdatecoordinatesInput
  address: String
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCartItem(data: CartItemCreateInput!): CartItem!
  updateCartItem(data: CartItemUpdateInput!, where: CartItemWhereUniqueInput!): CartItem
  updateManyCartItems(data: CartItemUpdateManyMutationInput!, where: CartItemWhereInput): BatchPayload!
  upsertCartItem(where: CartItemWhereUniqueInput!, create: CartItemCreateInput!, update: CartItemUpdateInput!): CartItem!
  deleteCartItem(where: CartItemWhereUniqueInput!): CartItem
  deleteManyCartItems(where: CartItemWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createShop(data: ShopCreateInput!): Shop!
  updateShop(data: ShopUpdateInput!, where: ShopWhereUniqueInput!): Shop
  updateManyShops(data: ShopUpdateManyMutationInput!, where: ShopWhereInput): BatchPayload!
  upsertShop(where: ShopWhereUniqueInput!, create: ShopCreateInput!, update: ShopUpdateInput!): Shop!
  deleteShop(where: ShopWhereUniqueInput!): Shop
  deleteManyShops(where: ShopWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  total: Int!
  user: User!
  charge: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  items: OrderItemCreateManyInput
  total: Int!
  user: UserCreateOneInput!
  charge: String!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  title: String!
  description: String!
  image: String!
  largeImage: String!
  price: Int!
  quantity: Int!
  user: User
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  title: String!
  description: String!
  image: String!
  largeImage: String!
  price: Int!
  quantity: Int
  user: UserCreateOneInput
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  largeImage_ASC
  largeImage_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderItemPreviousValues {
  id: ID!
  title: String!
  description: String!
  image: String!
  largeImage: String!
  price: Int!
  quantity: Int!
}

input OrderItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemScalarWhereInput!]
  OR: [OrderItemScalarWhereInput!]
  NOT: [OrderItemScalarWhereInput!]
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
  OR: [OrderItemSubscriptionWhereInput!]
  NOT: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateDataInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
  user: UserUpdateOneInput
}

input OrderItemUpdateInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
  user: UserUpdateOneInput
}

input OrderItemUpdateManyDataInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyMutationInput {
  title: String
  description: String
  image: String
  largeImage: String
  price: Int
  quantity: Int
}

input OrderItemUpdateManyWithWhereNestedInput {
  where: OrderItemScalarWhereInput!
  data: OrderItemUpdateManyDataInput!
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  largeImage: String
  largeImage_not: String
  largeImage_in: [String!]
  largeImage_not_in: [String!]
  largeImage_lt: String
  largeImage_lte: String
  largeImage_gt: String
  largeImage_gte: String
  largeImage_contains: String
  largeImage_not_contains: String
  largeImage_starts_with: String
  largeImage_not_starts_with: String
  largeImage_ends_with: String
  largeImage_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  user: UserWhereInput
  AND: [OrderItemWhereInput!]
  OR: [OrderItemWhereInput!]
  NOT: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  total_ASC
  total_DESC
  charge_ASC
  charge_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  total: Int!
  charge: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  items: OrderItemUpdateManyInput
  total: Int
  user: UserUpdateOneRequiredInput
  charge: String
}

input OrderUpdateManyMutationInput {
  total: Int
  charge: String
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  items_every: OrderItemWhereInput
  items_some: OrderItemWhereInput
  items_none: OrderItemWhereInput
  total: Int
  total_not: Int
  total_in: [Int!]
  total_not_in: [Int!]
  total_lt: Int
  total_lte: Int
  total_gt: Int
  total_gte: Int
  user: UserWhereInput
  charge: String
  charge_not: String
  charge_in: [String!]
  charge_not_in: [String!]
  charge_lt: String
  charge_lte: String
  charge_gt: String
  charge_gte: String
  charge_contains: String
  charge_not_contains: String
  charge_starts_with: String
  charge_not_starts_with: String
  charge_ends_with: String
  charge_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  ITEMCREATE
  ITEMUPDATE
  ITEMDELETE
  PERMISSIONUPDATE
}

type Query {
  cartItem(where: CartItemWhereUniqueInput!): CartItem
  cartItems(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem]!
  cartItemsConnection(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartItemConnection!
  item(where: ItemWhereUniqueInput!): Item
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  shop(where: ShopWhereUniqueInput!): Shop
  shops(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Shop]!
  shopsConnection(where: ShopWhereInput, orderBy: ShopOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShopConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Shop {
  id: ID!
  name: String
  description: String
  type: ShopType
  location: Location
  open: Boolean!
  owner: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ShopConnection {
  pageInfo: PageInfo!
  edges: [ShopEdge]!
  aggregate: AggregateShop!
}

input ShopCreateInput {
  name: String
  description: String
  type: ShopType
  location: LocationCreateOneInput
  open: Boolean
  owner: UserCreateOneInput!
}

type ShopEdge {
  node: Shop!
  cursor: String!
}

enum ShopOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  type_ASC
  type_DESC
  open_ASC
  open_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShopPreviousValues {
  id: ID!
  name: String
  description: String
  type: ShopType
  open: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ShopSubscriptionPayload {
  mutation: MutationType!
  node: Shop
  updatedFields: [String!]
  previousValues: ShopPreviousValues
}

input ShopSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShopWhereInput
  AND: [ShopSubscriptionWhereInput!]
  OR: [ShopSubscriptionWhereInput!]
  NOT: [ShopSubscriptionWhereInput!]
}

enum ShopType {
  BARBERSHOP
  HAIRDRESSER
  HAIRSHOP
}

input ShopUpdateInput {
  name: String
  description: String
  type: ShopType
  location: LocationUpdateOneInput
  open: Boolean
  owner: UserUpdateOneRequiredInput
}

input ShopUpdateManyMutationInput {
  name: String
  description: String
  type: ShopType
  open: Boolean
}

input ShopWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  type: ShopType
  type_not: ShopType
  type_in: [ShopType!]
  type_not_in: [ShopType!]
  location: LocationWhereInput
  open: Boolean
  open_not: Boolean
  owner: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ShopWhereInput!]
  OR: [ShopWhereInput!]
  NOT: [ShopWhereInput!]
}

input ShopWhereUniqueInput {
  id: ID
}

type Subscription {
  cartItem(where: CartItemSubscriptionWhereInput): CartItemSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  shop(where: ShopSubscriptionWhereInput): ShopSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  username: String
  firstName: String!
  lastName: String!
  permissions: [Permission!]!
  cart(where: CartItemWhereInput, orderBy: CartItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartItem!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  username: String
  firstName: String!
  lastName: String!
  permissions: UserCreatepermissionsInput
  cart: CartItemCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCartInput {
  create: UserCreateWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutCartInput {
  email: String
  username: String
  firstName: String!
  lastName: String!
  permissions: UserCreatepermissionsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  username: String
  firstName: String!
  lastName: String!
  permissions: [Permission!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  username: String
  firstName: String
  lastName: String
  permissions: UserUpdatepermissionsInput
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpdateInput {
  email: String
  username: String
  firstName: String
  lastName: String
  permissions: UserUpdatepermissionsInput
  cart: CartItemUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  username: String
  firstName: String
  lastName: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutCartInput {
  create: UserCreateWithoutCartInput
  update: UserUpdateWithoutCartDataInput
  upsert: UserUpsertWithoutCartInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutCartDataInput {
  email: String
  username: String
  firstName: String
  lastName: String
  permissions: UserUpdatepermissionsInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCartInput {
  update: UserUpdateWithoutCartDataInput!
  create: UserCreateWithoutCartInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  cart_every: CartItemWhereInput
  cart_some: CartItemWhereInput
  cart_none: CartItemWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    