/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
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
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
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
  }
`;
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
      id
      userId
      menuId
      menu {
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
  }
`;
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
      id
      userId
      menuId
      menu {
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
  }
`;
