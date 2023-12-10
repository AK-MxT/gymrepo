/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listMenusByUser = /* GraphQL */ `
  query ListMenusByUser(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenusByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        title
        menulist {
          menuName
          weight
          count
          set
          note
        }
        isDeleted
        deletedAt
        deletedBy
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
export const listRecordsByUser = /* GraphQL */ `
  query ListRecordsByUser(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecordsByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        menuId
        menu {
          id
          userId
          title
          isDeleted
          deletedAt
          deletedBy
          createdAt
          createdBy
          updatedAt
          updatedBy
        }
        records {
          menuName
          weight
          count
          set
          note
        }
        isDeleted
        deletedAt
        deletedBy
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
