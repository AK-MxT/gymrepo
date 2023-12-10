/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenuInput = {
  id?: string | null,
  userId: string,
  title: string,
  menulist?: Array< MenuDetailInput > | null,
  isDeleted: TrueFalse,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt?: string | null,
  createdBy: string,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type MenuDetailInput = {
  menuName: string,
  weight: number,
  count: number,
  set: number,
  note?: string | null,
};

export enum TrueFalse {
  TRUE = "TRUE",
  FALSE = "FALSE",
}


export type ModelMenuConditionInput = {
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  isDeleted?: ModelTrueFalseInput | null,
  deletedAt?: ModelStringInput | null,
  deletedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedBy?: ModelIDInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTrueFalseInput = {
  eq?: TrueFalse | null,
  ne?: TrueFalse | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  userId: string,
  title: string,
  menulist?:  Array<MenuDetail > | null,
  isDeleted: TrueFalse,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt: string,
  createdBy: string,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type MenuDetail = {
  __typename: "MenuDetail",
  menuName: string,
  weight: number,
  count: number,
  set: number,
  note?: string | null,
};

export type UpdateMenuInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  menulist?: Array< MenuDetailInput > | null,
  isDeleted?: TrueFalse | null,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt?: string | null,
  createdBy?: string | null,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type CreateRecordInput = {
  id?: string | null,
  userId: string,
  menuId: string,
  records?: Array< MenuDetailInput > | null,
  isDeleted: TrueFalse,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt?: string | null,
  createdBy: string,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type ModelRecordConditionInput = {
  userId?: ModelIDInput | null,
  menuId?: ModelIDInput | null,
  isDeleted?: ModelTrueFalseInput | null,
  deletedAt?: ModelStringInput | null,
  deletedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedBy?: ModelIDInput | null,
  and?: Array< ModelRecordConditionInput | null > | null,
  or?: Array< ModelRecordConditionInput | null > | null,
  not?: ModelRecordConditionInput | null,
};

export type Record = {
  __typename: "Record",
  id: string,
  userId: string,
  menuId: string,
  menu: Menu,
  records?:  Array<MenuDetail > | null,
  isDeleted: TrueFalse,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt: string,
  createdBy: string,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type UpdateRecordInput = {
  id: string,
  userId?: string | null,
  menuId?: string | null,
  records?: Array< MenuDetailInput > | null,
  isDeleted?: TrueFalse | null,
  deletedAt?: string | null,
  deletedBy?: string | null,
  createdAt?: string | null,
  createdBy?: string | null,
  updatedAt?: string | null,
  updatedBy?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  isDeleted?: ModelTrueFalseInput | null,
  deletedAt?: ModelStringInput | null,
  deletedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedBy?: ModelIDInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelRecordFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  menuId?: ModelIDInput | null,
  isDeleted?: ModelTrueFalseInput | null,
  deletedAt?: ModelStringInput | null,
  deletedBy?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  updatedBy?: ModelIDInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
};

export type ModelRecordConnection = {
  __typename: "ModelRecordConnection",
  items:  Array<Record | null >,
  nextToken?: string | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    userId: string,
    title: string,
    menulist?:  Array< {
      __typename: "MenuDetail",
      menuName: string,
      weight: number,
      count: number,
      set: number,
      note?: string | null,
    } > | null,
    isDeleted: TrueFalse,
    deletedAt?: string | null,
    deletedBy?: string | null,
    createdAt: string,
    createdBy: string,
    updatedAt?: string | null,
    updatedBy?: string | null,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    userId: string,
    title: string,
    menulist?:  Array< {
      __typename: "MenuDetail",
      menuName: string,
      weight: number,
      count: number,
      set: number,
      note?: string | null,
    } > | null,
    isDeleted: TrueFalse,
    deletedAt?: string | null,
    deletedBy?: string | null,
    createdAt: string,
    createdBy: string,
    updatedAt?: string | null,
    updatedBy?: string | null,
  } | null,
};

export type CreateRecordMutationVariables = {
  input: CreateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type CreateRecordMutation = {
  createRecord?:  {
    __typename: "Record",
    id: string,
    userId: string,
    menuId: string,
    menu:  {
      __typename: "Menu",
      id: string,
      userId: string,
      title: string,
      menulist?:  Array< {
        __typename: "MenuDetail",
        menuName: string,
        weight: number,
        count: number,
        set: number,
        note?: string | null,
      } > | null,
      isDeleted: TrueFalse,
      deletedAt?: string | null,
      deletedBy?: string | null,
      createdAt: string,
      createdBy: string,
      updatedAt?: string | null,
      updatedBy?: string | null,
    },
    records?:  Array< {
      __typename: "MenuDetail",
      menuName: string,
      weight: number,
      count: number,
      set: number,
      note?: string | null,
    } > | null,
    isDeleted: TrueFalse,
    deletedAt?: string | null,
    deletedBy?: string | null,
    createdAt: string,
    createdBy: string,
    updatedAt?: string | null,
    updatedBy?: string | null,
  } | null,
};

export type UpdateRecordMutationVariables = {
  input: UpdateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type UpdateRecordMutation = {
  updateRecord?:  {
    __typename: "Record",
    id: string,
    userId: string,
    menuId: string,
    menu:  {
      __typename: "Menu",
      id: string,
      userId: string,
      title: string,
      menulist?:  Array< {
        __typename: "MenuDetail",
        menuName: string,
        weight: number,
        count: number,
        set: number,
        note?: string | null,
      } > | null,
      isDeleted: TrueFalse,
      deletedAt?: string | null,
      deletedBy?: string | null,
      createdAt: string,
      createdBy: string,
      updatedAt?: string | null,
      updatedBy?: string | null,
    },
    records?:  Array< {
      __typename: "MenuDetail",
      menuName: string,
      weight: number,
      count: number,
      set: number,
      note?: string | null,
    } > | null,
    isDeleted: TrueFalse,
    deletedAt?: string | null,
    deletedBy?: string | null,
    createdAt: string,
    createdBy: string,
    updatedAt?: string | null,
    updatedBy?: string | null,
  } | null,
};

export type ListMenusByUserQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusByUserQuery = {
  listMenusByUser?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      userId: string,
      title: string,
      menulist?:  Array< {
        __typename: "MenuDetail",
        menuName: string,
        weight: number,
        count: number,
        set: number,
        note?: string | null,
      } > | null,
      isDeleted: TrueFalse,
      deletedAt?: string | null,
      deletedBy?: string | null,
      createdAt: string,
      createdBy: string,
      updatedAt?: string | null,
      updatedBy?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListRecordsByUserQueryVariables = {
  userId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordsByUserQuery = {
  listRecordsByUser?:  {
    __typename: "ModelRecordConnection",
    items:  Array< {
      __typename: "Record",
      id: string,
      userId: string,
      menuId: string,
      menu:  {
        __typename: "Menu",
        id: string,
        userId: string,
        title: string,
        isDeleted: TrueFalse,
        deletedAt?: string | null,
        deletedBy?: string | null,
        createdAt: string,
        createdBy: string,
        updatedAt?: string | null,
        updatedBy?: string | null,
      },
      records?:  Array< {
        __typename: "MenuDetail",
        menuName: string,
        weight: number,
        count: number,
        set: number,
        note?: string | null,
      } > | null,
      isDeleted: TrueFalse,
      deletedAt?: string | null,
      deletedBy?: string | null,
      createdAt: string,
      createdBy: string,
      updatedAt?: string | null,
      updatedBy?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};
