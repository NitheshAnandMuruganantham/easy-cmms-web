import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
  JSON: any;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']>;
  divide?: InputMaybe<Scalars['BigInt']>;
  increment?: InputMaybe<Scalars['BigInt']>;
  multiply?: InputMaybe<Scalars['BigInt']>;
  set?: InputMaybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type Block = {
  __typename?: 'Block';
  _count: BlockCount;
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  location: Scalars['String'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type BlockMachinesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MachinesOrderByWithAggregationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type BlockAvgAggregate = {
  __typename?: 'BlockAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type BlockAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockCount = {
  __typename?: 'BlockCount';
  machines: Scalars['Int'];
};

export type BlockCountAggregate = {
  __typename?: 'BlockCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type BlockCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  location: Scalars['String'];
  machines?: InputMaybe<MachinesCreateNestedManyWithoutBlockInput>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BlockCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<BlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlockCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<BlockCreateWithoutMachinesInput>;
};

export type BlockCreateOrConnectWithoutMachinesInput = {
  create: BlockCreateWithoutMachinesInput;
  where: BlockWhereUniqueInput;
};

export type BlockCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  location: Scalars['String'];
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BlockMaxAggregate = {
  __typename?: 'BlockMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BlockMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockMinAggregate = {
  __typename?: 'BlockMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BlockMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockOrderByWithAggregationInput = {
  _avg?: InputMaybe<BlockAvgOrderByAggregateInput>;
  _count?: InputMaybe<BlockCountOrderByAggregateInput>;
  _max?: InputMaybe<BlockMaxOrderByAggregateInput>;
  _min?: InputMaybe<BlockMinOrderByAggregateInput>;
  _sum?: InputMaybe<BlockSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockRelationFilter = {
  is?: InputMaybe<BlockWhereInput>;
  isNot?: InputMaybe<BlockWhereInput>;
};

export type BlockSumAggregate = {
  __typename?: 'BlockSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type BlockSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutBlockNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlockUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<BlockWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BlockCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<BlockCreateWithoutMachinesInput>;
  update?: InputMaybe<BlockUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<BlockUpsertWithoutMachinesInput>;
};

export type BlockUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlockUpsertWithoutMachinesInput = {
  create: BlockCreateWithoutMachinesInput;
  update: BlockUpdateWithoutMachinesInput;
};

export type BlockWhereInput = {
  AND?: InputMaybe<Array<BlockWhereInput>>;
  NOT?: InputMaybe<Array<BlockWhereInput>>;
  OR?: InputMaybe<Array<BlockWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  location?: InputMaybe<StringFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type BlockWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type CatagoryAvgAggregate = {
  __typename?: 'CatagoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CatagoryCount = {
  __typename?: 'CatagoryCount';
  items: Scalars['Int'];
};

export type CatagoryCountAggregate = {
  __typename?: 'CatagoryCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type CatagoryMaxAggregate = {
  __typename?: 'CatagoryMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CatagoryMinAggregate = {
  __typename?: 'CatagoryMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CatagoryRelationFilter = {
  is?: InputMaybe<CatagoryWhereInput>;
  isNot?: InputMaybe<CatagoryWhereInput>;
};

export type CatagorySumAggregate = {
  __typename?: 'CatagorySumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Enumticket_StatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Ticket_Status>;
};

export type Enumticket_StatusFilter = {
  equals?: InputMaybe<Ticket_Status>;
  in?: InputMaybe<Array<Ticket_Status>>;
  not?: InputMaybe<NestedEnumticket_StatusFilter>;
  notIn?: InputMaybe<Array<Ticket_Status>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type ItemCatagory = {
  __typename?: 'ItemCatagory';
  _count: ItemCatagoryCount;
  countItems: CatagoryCount;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  items?: Maybe<Array<Items>>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type ItemCatagoryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemsOrderByWithAggregationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};

export type ItemCatagoryAvgAggregate = {
  __typename?: 'ItemCatagoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemCatagoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCount = {
  __typename?: 'ItemCatagoryCount';
  items: Scalars['Int'];
};

export type ItemCatagoryCountAggregate = {
  __typename?: 'ItemCatagoryCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type ItemCatagoryCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<ItemsCreateNestedManyWithoutItemCatagoryInput>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ItemCatagoryMaxAggregate = {
  __typename?: 'ItemCatagoryMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ItemCatagoryMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryMinAggregate = {
  __typename?: 'ItemCatagoryMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ItemCatagoryMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<ItemCatagoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<ItemCatagoryCountOrderByAggregateInput>;
  _max?: InputMaybe<ItemCatagoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<ItemCatagoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<ItemCatagorySumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagorySumAggregate = {
  __typename?: 'ItemCatagorySumAggregate';
  id?: Maybe<Scalars['String']>;
};

export type ItemCatagorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ItemCatagoryUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateManyWithoutItemCatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemCatagoryWhereInput = {
  AND?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  NOT?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  OR?: InputMaybe<Array<ItemCatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Items = {
  __typename?: 'Items';
  _count: ItemsCount;
  catagory: Catagory;
  catagory_id: Scalars['BigInt'];
  code: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  replacements?: Maybe<Array<Replacements>>;
  unit_price: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};


export type ItemsReplacementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};

export type ItemsAvgAggregate = {
  __typename?: 'ItemsAvgAggregate';
  catagory_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  unit_price?: Maybe<Scalars['Float']>;
};

export type ItemsAvgOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
};

export type ItemsCount = {
  __typename?: 'ItemsCount';
  replacements: Scalars['Int'];
};

export type ItemsCountAggregate = {
  __typename?: 'ItemsCountAggregate';
  _all: Scalars['Int'];
  catagory_id: Scalars['Int'];
  code: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  quantity: Scalars['Int'];
  unit_price: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type ItemsCountOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsCreateInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ItemsCreateManyItemCatagoryInput = {
  code: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  unit_price: Scalars['Float'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ItemsCreateManyItemCatagoryInputEnvelope = {
  data: Array<ItemsCreateManyItemCatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ItemsCreateNestedManyWithoutItemCatagoryInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutItemCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
};

export type ItemsCreateNestedOneWithoutReplacementsInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
};

export type ItemsCreateOrConnectWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutReplacementsInput = {
  create: ItemsCreateWithoutReplacementsInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateWithoutItemCatagoryInput = {
  code: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  replacements_scheduled?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars['Float'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ItemsCreateWithoutReplacementsInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars['String'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  unit_price: Scalars['Float'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ItemsListRelationFilter = {
  every?: InputMaybe<ItemsWhereInput>;
  none?: InputMaybe<ItemsWhereInput>;
  some?: InputMaybe<ItemsWhereInput>;
};

export type ItemsMaxAggregate = {
  __typename?: 'ItemsMaxAggregate';
  catagory_id?: Maybe<Scalars['BigInt']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  unit_price?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ItemsMaxOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsMinAggregate = {
  __typename?: 'ItemsMinAggregate';
  catagory_id?: Maybe<Scalars['BigInt']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  unit_price?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ItemsMinOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ItemsOrderByWithAggregationInput = {
  _avg?: InputMaybe<ItemsAvgOrderByAggregateInput>;
  _count?: InputMaybe<ItemsCountOrderByAggregateInput>;
  _max?: InputMaybe<ItemsMaxOrderByAggregateInput>;
  _min?: InputMaybe<ItemsMinOrderByAggregateInput>;
  _sum?: InputMaybe<ItemsSumOrderByAggregateInput>;
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsOrderByWithRelationInput = {
  catagory?: InputMaybe<CatagoryOrderByWithRelationInput>;
  catagory_id?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  replacements?: InputMaybe<ReplacementsOrderByRelationAggregateInput>;
  unit_price?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemsRelationFilter = {
  is?: InputMaybe<ItemsWhereInput>;
  isNot?: InputMaybe<ItemsWhereInput>;
};

export type ItemsScalarWhereInput = {
  AND?: InputMaybe<Array<ItemsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ItemsScalarWhereInput>>;
  OR?: InputMaybe<Array<ItemsScalarWhereInput>>;
  catagory_id?: InputMaybe<BigIntFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ItemsSumAggregate = {
  __typename?: 'ItemsSumAggregate';
  catagory_id?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  quantity?: Maybe<Scalars['Int']>;
  unit_price?: Maybe<Scalars['Float']>;
};

export type ItemsSumOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
};

export type ItemsUpdateInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateManyMutationInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateManyWithWhereWithoutItemCatagoryInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithoutItemCatagoryNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutItemCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutItemCatagoryInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput>>;
};

export type ItemsUpdateOneRequiredWithoutReplacementsNestedInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
  update?: InputMaybe<ItemsUpdateWithoutReplacementsInput>;
  upsert?: InputMaybe<ItemsUpsertWithoutReplacementsInput>;
};

export type ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput = {
  data: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithoutItemCatagoryInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  replacements_scheduled?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutReplacementsInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  update: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithoutReplacementsInput = {
  create: ItemsCreateWithoutReplacementsInput;
  update: ItemsUpdateWithoutReplacementsInput;
};

export type ItemsWhereInput = {
  AND?: InputMaybe<Array<ItemsWhereInput>>;
  NOT?: InputMaybe<Array<ItemsWhereInput>>;
  OR?: InputMaybe<Array<ItemsWhereInput>>;
  catagory?: InputMaybe<CatagoryRelationFilter>;
  catagory_id?: InputMaybe<BigIntFilter>;
  code?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  replacements?: InputMaybe<ReplacementsListRelationFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ItemsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']>;
  array_ends_with?: InputMaybe<Scalars['JSON']>;
  array_starts_with?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Array<Scalars['String']>>;
  string_contains?: InputMaybe<Scalars['String']>;
  string_ends_with?: InputMaybe<Scalars['String']>;
  string_starts_with?: InputMaybe<Scalars['String']>;
};

export type Machines = {
  __typename?: 'Machines';
  Ticket?: Maybe<Array<Ticket>>;
  _count: MachinesCount;
  block: Block;
  block_id: Scalars['BigInt'];
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  label: Scalars['String'];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile: Scalars['JSON'];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  section: Sections;
  section_id: Scalars['BigInt'];
  updated_at: Scalars['DateTime'];
};


export type MachinesMaintenanceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type MachinesAvgAggregate = {
  __typename?: 'MachinesAvgAggregate';
  block_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  priority?: Maybe<Scalars['Float']>;
  section_id?: Maybe<Scalars['Float']>;
};

export type MachinesAvgOrderByAggregateInput = {
  block_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesCount = {
  __typename?: 'MachinesCount';
  Ticket: Scalars['Int'];
  maintenance: Scalars['Int'];
  routine_maintanances: Scalars['Int'];
};

export type MachinesCountAggregate = {
  __typename?: 'MachinesCountAggregate';
  _all: Scalars['Int'];
  block_id: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  label: Scalars['Int'];
  name: Scalars['Int'];
  priority: Scalars['Int'];
  profile: Scalars['Int'];
  section_id: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type MachinesCountOrderByAggregateInput = {
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesCreateInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  block: BlockCreateNestedOneWithoutMachinesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  section_id: Scalars['BigInt'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateManyBlockInputEnvelope = {
  data: Array<MachinesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MachinesCreateManySection_Machines_SectionTosectionInput = {
  block_id: Scalars['BigInt'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateManySection_Machines_SectionTosectionInputEnvelope = {
  data: Array<MachinesCreateManySection_Machines_SectionTosectionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MachinesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MachinesCreateManyBlockInputEnvelope>;
};

export type MachinesCreateNestedManyWithoutSection_Machines_SectionTosectionInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutSection_Machines_SectionTosectionInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutSection_Machines_SectionTosectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySection_Machines_SectionTosectionInputEnvelope>;
};

export type MachinesCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<MachinesCreateWithoutMaintenanceInput>;
};

export type MachinesCreateNestedOneWithoutRoutine_MaintanancesInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<MachinesCreateWithoutRoutine_MaintanancesInput>;
};

export type MachinesCreateNestedOneWithoutTicketInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MachinesCreateWithoutTicketInput>;
};

export type MachinesCreateOrConnectWithoutBlockInput = {
  create: MachinesCreateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutMaintenanceInput = {
  create: MachinesCreateWithoutMaintenanceInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutRoutine_MaintanancesInput = {
  create: MachinesCreateWithoutRoutine_MaintanancesInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutSection_Machines_SectionTosectionInput = {
  create: MachinesCreateWithoutSection_Machines_SectionTosectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutTicketInput = {
  create: MachinesCreateWithoutTicketInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  block: BlockCreateNestedOneWithoutMachinesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  block: BlockCreateNestedOneWithoutMachinesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateWithoutSection_Machines_SectionTosectionInput = {
  block: BlockCreateNestedOneWithoutMachinesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesCreateWithoutTicketInput = {
  block: BlockCreateNestedOneWithoutMachinesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  label: Scalars['String'];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars['String'];
  priority: Scalars['Int'];
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MachinesListRelationFilter = {
  every?: InputMaybe<MachinesWhereInput>;
  none?: InputMaybe<MachinesWhereInput>;
  some?: InputMaybe<MachinesWhereInput>;
};

export type MachinesMaxAggregate = {
  __typename?: 'MachinesMaxAggregate';
  block_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  section_id?: Maybe<Scalars['BigInt']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MachinesMaxOrderByAggregateInput = {
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesMinAggregate = {
  __typename?: 'MachinesMinAggregate';
  block_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  section_id?: Maybe<Scalars['BigInt']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MachinesMinOrderByAggregateInput = {
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MachinesOrderByWithAggregationInput = {
  _avg?: InputMaybe<MachinesAvgOrderByAggregateInput>;
  _count?: InputMaybe<MachinesCountOrderByAggregateInput>;
  _max?: InputMaybe<MachinesMaxOrderByAggregateInput>;
  _min?: InputMaybe<MachinesMinOrderByAggregateInput>;
  _sum?: InputMaybe<MachinesSumOrderByAggregateInput>;
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesOrderByWithRelationInput = {
  Ticket?: InputMaybe<TicketOrderByRelationAggregateInput>;
  block?: InputMaybe<BlockOrderByWithRelationInput>;
  block_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section?: InputMaybe<SectionsOrderByWithRelationInput>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesRelationFilter = {
  is?: InputMaybe<MachinesWhereInput>;
  isNot?: InputMaybe<MachinesWhereInput>;
};

export type MachinesScalarWhereInput = {
  AND?: InputMaybe<Array<MachinesScalarWhereInput>>;
  NOT?: InputMaybe<Array<MachinesScalarWhereInput>>;
  OR?: InputMaybe<Array<MachinesScalarWhereInput>>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  profile?: InputMaybe<JsonFilter>;
  section_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MachinesSumAggregate = {
  __typename?: 'MachinesSumAggregate';
  block_id?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  priority?: Maybe<Scalars['Int']>;
  section_id?: Maybe<Scalars['BigInt']>;
};

export type MachinesSumOrderByAggregateInput = {
  block_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesUpdateInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  block?: InputMaybe<BlockUpdateOneRequiredWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateManyWithWhereWithoutBlockInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithWhereWithoutSection_Machines_SectionTosectionInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MachinesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<MachinesUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type MachinesUpdateManyWithoutSection_Machines_SectionTosectionNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutSection_Machines_SectionTosectionInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutSection_Machines_SectionTosectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySection_Machines_SectionTosectionInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutSection_Machines_SectionTosectionInput>>;
  updateMany?: InputMaybe<Array<MachinesUpdateManyWithWhereWithoutSection_Machines_SectionTosectionInput>>;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutSection_Machines_SectionTosectionInput>>;
};

export type MachinesUpdateOneRequiredWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<MachinesCreateWithoutMaintenanceInput>;
  update?: InputMaybe<MachinesUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutMaintenanceInput>;
};

export type MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<MachinesCreateWithoutRoutine_MaintanancesInput>;
  update?: InputMaybe<MachinesUpdateWithoutRoutine_MaintanancesInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutRoutine_MaintanancesInput>;
};

export type MachinesUpdateOneRequiredWithoutTicketNestedInput = {
  connect?: InputMaybe<MachinesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MachinesCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MachinesCreateWithoutTicketInput>;
  update?: InputMaybe<MachinesUpdateWithoutTicketInput>;
  upsert?: InputMaybe<MachinesUpsertWithoutTicketInput>;
};

export type MachinesUpdateWithWhereUniqueWithoutBlockInput = {
  data: MachinesUpdateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithWhereUniqueWithoutSection_Machines_SectionTosectionInput = {
  data: MachinesUpdateWithoutSection_Machines_SectionTosectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  block?: InputMaybe<BlockUpdateOneRequiredWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  block?: InputMaybe<BlockUpdateOneRequiredWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutSection_Machines_SectionTosectionInput = {
  block?: InputMaybe<BlockUpdateOneRequiredWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutTicketInput = {
  block?: InputMaybe<BlockUpdateOneRequiredWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpsertWithWhereUniqueWithoutBlockInput = {
  create: MachinesCreateWithoutBlockInput;
  update: MachinesUpdateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithWhereUniqueWithoutSection_Machines_SectionTosectionInput = {
  create: MachinesCreateWithoutSection_Machines_SectionTosectionInput;
  update: MachinesUpdateWithoutSection_Machines_SectionTosectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithoutMaintenanceInput = {
  create: MachinesCreateWithoutMaintenanceInput;
  update: MachinesUpdateWithoutMaintenanceInput;
};

export type MachinesUpsertWithoutRoutine_MaintanancesInput = {
  create: MachinesCreateWithoutRoutine_MaintanancesInput;
  update: MachinesUpdateWithoutRoutine_MaintanancesInput;
};

export type MachinesUpsertWithoutTicketInput = {
  create: MachinesCreateWithoutTicketInput;
  update: MachinesUpdateWithoutTicketInput;
};

export type MachinesWhereInput = {
  AND?: InputMaybe<Array<MachinesWhereInput>>;
  NOT?: InputMaybe<Array<MachinesWhereInput>>;
  OR?: InputMaybe<Array<MachinesWhereInput>>;
  Ticket?: InputMaybe<TicketListRelationFilter>;
  block?: InputMaybe<BlockRelationFilter>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  profile?: InputMaybe<JsonFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  section?: InputMaybe<SectionsRelationFilter>;
  section_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MachinesWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Maintenance = {
  __typename?: 'Maintenance';
  _count: MaintenanceCount;
  assigned?: Maybe<Scalars['Boolean']>;
  assignee: Users;
  assignee_id: Scalars['BigInt'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  elapsed?: Maybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id: Scalars['BigInt'];
  machine: Machines;
  machine_id: Scalars['BigInt'];
  machines: Machines;
  metadata: Scalars['JSON'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  replacements?: Maybe<Array<Replacements>>;
  reports?: Maybe<Array<Reports>>;
  resolved: Scalars['Boolean'];
  ticket?: Maybe<Ticket>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at: Scalars['DateTime'];
};

export type MaintenanceAvgAggregate = {
  __typename?: 'MaintenanceAvgAggregate';
  assignee_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  machine_id?: Maybe<Scalars['Float']>;
};

export type MaintenanceCount = {
  __typename?: 'MaintenanceCount';
  replacements: Scalars['Int'];
  reports: Scalars['Int'];
};

export type MaintenanceCountAggregate = {
  __typename?: 'MaintenanceCountAggregate';
  _all: Scalars['Int'];
  assignee_id: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  elapsed: Scalars['Int'];
  from: Scalars['Int'];
  id: Scalars['Int'];
  machine_id: Scalars['Int'];
  metadata: Scalars['Int'];
  name: Scalars['Int'];
  photo: Scalars['Int'];
  resolved: Scalars['Int'];
  to: Scalars['Int'];
  un_planned: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type MaintenanceCreateInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machine_id: Scalars['BigInt'];
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  resolved: Scalars['Boolean'];
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateManyAssigneeInputEnvelope = {
  data: Array<MaintenanceCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MaintenanceCreateManyMachinesInput = {
  assignee_id: Scalars['BigInt'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  resolved: Scalars['Boolean'];
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateManyMachinesInputEnvelope = {
  data: Array<MaintenanceCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MaintenanceCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
};

export type MaintenanceCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyMachinesInputEnvelope>;
};

export type MaintenanceCreateNestedOneWithoutReplacementsInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReplacementsInput>;
};

export type MaintenanceCreateNestedOneWithoutReportsInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReportsInput>;
};

export type MaintenanceCreateNestedOneWithoutTicketInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MaintenanceCreateWithoutTicketInput>;
};

export type MaintenanceCreateOrConnectWithoutAssigneeInput = {
  create: MaintenanceCreateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutMachinesInput = {
  create: MaintenanceCreateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutReplacementsInput = {
  create: MaintenanceCreateWithoutReplacementsInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutReportsInput = {
  create: MaintenanceCreateWithoutReportsInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateOrConnectWithoutTicketInput = {
  create: MaintenanceCreateWithoutTicketInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceCreateWithoutAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateWithoutMachinesInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateWithoutReplacementsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateWithoutReportsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceCreateWithoutTicketInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  elapsed?: InputMaybe<Scalars['DateTime']>;
  from: Scalars['DateTime'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars['Boolean'];
  to: Scalars['DateTime'];
  un_planned: Scalars['Boolean'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MaintenanceListRelationFilter = {
  every?: InputMaybe<MaintenanceWhereInput>;
  none?: InputMaybe<MaintenanceWhereInput>;
  some?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceMaxAggregate = {
  __typename?: 'MaintenanceMaxAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  elapsed?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  to?: Maybe<Scalars['DateTime']>;
  un_planned?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MaintenanceMinAggregate = {
  __typename?: 'MaintenanceMinAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  elapsed?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  to?: Maybe<Scalars['DateTime']>;
  un_planned?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MaintenanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MaintenanceOrderByWithRelationInput = {
  assignee?: InputMaybe<UsersOrderByWithRelationInput>;
  assignee_id?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  elapsed?: InputMaybe<SortOrder>;
  from?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machine_id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByWithRelationInput>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  replacements?: InputMaybe<ReplacementsOrderByRelationAggregateInput>;
  reports?: InputMaybe<ReportsOrderByRelationAggregateInput>;
  resolved?: InputMaybe<SortOrder>;
  ticket?: InputMaybe<TicketOrderByWithRelationInput>;
  to?: InputMaybe<SortOrder>;
  un_planned?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MaintenanceRelationFilter = {
  is?: InputMaybe<MaintenanceWhereInput>;
  isNot?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceScalarWhereInput = {
  AND?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  OR?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  elapsed?: InputMaybe<DateTimeNullableFilter>;
  from?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  resolved?: InputMaybe<BoolFilter>;
  to?: InputMaybe<DateTimeFilter>;
  un_planned?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceSumAggregate = {
  __typename?: 'MaintenanceSumAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
};

export type MaintenanceUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateManyWithWhereWithoutAssigneeInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithWhereWithoutMachinesInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<MaintenanceUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type MaintenanceUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MaintenanceCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<MaintenanceCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyMachinesInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutMachinesInput>>;
  updateMany?: InputMaybe<Array<MaintenanceUpdateManyWithWhereWithoutMachinesInput>>;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutMachinesInput>>;
};

export type MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReplacementsInput>;
  update?: InputMaybe<MaintenanceUpdateWithoutReplacementsInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutReplacementsInput>;
};

export type MaintenanceUpdateOneRequiredWithoutReportsNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutReportsInput>;
  create?: InputMaybe<MaintenanceCreateWithoutReportsInput>;
  update?: InputMaybe<MaintenanceUpdateWithoutReportsInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutReportsInput>;
};

export type MaintenanceUpdateOneWithoutTicketNestedInput = {
  connect?: InputMaybe<MaintenanceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MaintenanceCreateOrConnectWithoutTicketInput>;
  create?: InputMaybe<MaintenanceCreateWithoutTicketInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MaintenanceUpdateWithoutTicketInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutTicketInput>;
};

export type MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: MaintenanceUpdateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithWhereUniqueWithoutMachinesInput = {
  data: MaintenanceUpdateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithoutAssigneeInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutMachinesInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutReplacementsInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutReportsInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateOneWithoutMaintenanceNestedInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpdateWithoutTicketInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photo?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutMaintenanceNestedInput>;
  reports?: InputMaybe<ReportsUpdateManyWithoutMaintenanceNestedInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  to?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  un_planned?: InputMaybe<BoolFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: MaintenanceCreateWithoutAssigneeInput;
  update: MaintenanceUpdateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithWhereUniqueWithoutMachinesInput = {
  create: MaintenanceCreateWithoutMachinesInput;
  update: MaintenanceUpdateWithoutMachinesInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpsertWithoutReplacementsInput = {
  create: MaintenanceCreateWithoutReplacementsInput;
  update: MaintenanceUpdateWithoutReplacementsInput;
};

export type MaintenanceUpsertWithoutReportsInput = {
  create: MaintenanceCreateWithoutReportsInput;
  update: MaintenanceUpdateWithoutReportsInput;
};

export type MaintenanceUpsertWithoutTicketInput = {
  create: MaintenanceCreateWithoutTicketInput;
  update: MaintenanceUpdateWithoutTicketInput;
};

export type MaintenanceWhereInput = {
  AND?: InputMaybe<Array<MaintenanceWhereInput>>;
  NOT?: InputMaybe<Array<MaintenanceWhereInput>>;
  OR?: InputMaybe<Array<MaintenanceWhereInput>>;
  assignee?: InputMaybe<UsersRelationFilter>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  elapsed?: InputMaybe<DateTimeNullableFilter>;
  from?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesRelationFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  photo?: InputMaybe<StringNullableFilter>;
  replacements?: InputMaybe<ReplacementsListRelationFilter>;
  reports?: InputMaybe<ReportsListRelationFilter>;
  resolved?: InputMaybe<BoolFilter>;
  ticket?: InputMaybe<TicketRelationFilter>;
  to?: InputMaybe<DateTimeFilter>;
  un_planned?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MaintenanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlock: Block;
  createItem: Items;
  createItemCatagory: ItemCatagory;
  createMachine: Machines;
  createMaintanance: Maintenance;
  createReplacement: Replacements;
  createReport: Reports;
  createRoutineMaintanance: Routine_Maintanances;
  createSection: Section;
  createTicket: Ticket;
  createUser: Users;
  removeBlock: Block;
  removeItem: Items;
  removeItemCatagory: ItemCatagory;
  removeMachine: Machines;
  removeMaintanance: Maintenance;
  removeReplacement: Replacements;
  removeReport: Reports;
  removeRoutineMaintanance: Routine_Maintanances;
  removeSection: Section;
  removeTicket: Ticket;
  removeUser: Users;
  updateBlock: Block;
  updateItem: Items;
  updateItemCatagory: ItemCatagory;
  updateMachine: Machines;
  updateMaintanance: Maintenance;
  updateReplacement: Replacements;
  updateReport: Reports;
  updateRoutineMaintanance: Routine_Maintanances;
  updateSection: Section;
  updateTicket: Ticket;
  updateUser: Users;
};


export type MutationCreateBlockArgs = {
  createBlockInput: BlockCreateInput;
};


export type MutationCreateItemArgs = {
  createItemInput: ItemsCreateInput;
};


export type MutationCreateItemCatagoryArgs = {
  createItemCatagoryInput: ItemCatagoryCreateInput;
};


export type MutationCreateMachineArgs = {
  createMachineInput: MachinesCreateInput;
};


export type MutationCreateMaintananceArgs = {
  createMaintananceInput: MaintenanceCreateInput;
};


export type MutationCreateReplacementArgs = {
  createReplacementInput: ReplacementsCreateInput;
};


export type MutationCreateReportArgs = {
  createReportInput: ReportsCreateInput;
};


export type MutationCreateRoutineMaintananceArgs = {
  createRoutineMaintananceInput: Routine_MaintanancesCreateInput;
};


export type MutationCreateSectionArgs = {
  createSectionInput: SectionCreateInput;
};


export type MutationCreateTicketArgs = {
  createTicketInput: TicketCreateInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UsersCreateInput;
};


export type MutationRemoveBlockArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveItemArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveItemCatagoryArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMachineArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveMaintananceArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveReplacementArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveReportArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveRoutineMaintananceArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSectionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTicketArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateBlockArgs = {
  id: Scalars['Int'];
  updateBlockInput: BlockUpdateInput;
};


export type MutationUpdateItemArgs = {
  id: Scalars['Int'];
  updateItemInput: ItemsUpdateInput;
};


export type MutationUpdateItemCatagoryArgs = {
  id: Scalars['Int'];
  updateItemCatagoryInput: ItemCatagoryUpdateInput;
};


export type MutationUpdateMachineArgs = {
  id: Scalars['Int'];
  updateMachineInput: MachinesUpdateInput;
};


export type MutationUpdateMaintananceArgs = {
  id: Scalars['Int'];
  updateMaintananceInput: MaintenanceUpdateInput;
};


export type MutationUpdateReplacementArgs = {
  id: Scalars['Int'];
  updateReplacementInput: ReplacementsUpdateInput;
};


export type MutationUpdateReportArgs = {
  id: Scalars['Int'];
  updateReportInput: ReportsUpdateInput;
};


export type MutationUpdateRoutineMaintananceArgs = {
  id: Scalars['Int'];
  updateRoutineMaintananceInput: Routine_MaintanancesUpdateInput;
};


export type MutationUpdateSectionArgs = {
  id: Scalars['Int'];
  updateSectionInput: SectionUpdateInput;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['Int'];
  updateTicketInput: TicketUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  updateUserInput: UsersUpdateInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumticket_StatusFilter = {
  equals?: InputMaybe<Ticket_Status>;
  in?: InputMaybe<Array<Ticket_Status>>;
  not?: InputMaybe<NestedEnumticket_StatusFilter>;
  notIn?: InputMaybe<Array<Ticket_Status>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  block: Block;
  blocks: Array<Block>;
  item: Items;
  itemCatagories: Array<ItemCatagory>;
  itemCatagory: ItemCatagory;
  items: Array<Items>;
  machine: Machines;
  machines: Array<Machines>;
  machinesCount: Scalars['Int'];
  maintenance: Maintenance;
  maintenanceCount: Scalars['Int'];
  maintenances: Array<Maintenance>;
  replacement: Replacements;
  replacements: Array<Replacements>;
  report: Reports;
  routineMaintanance: Routine_Maintanances;
  routineMaintanances: Array<Routine_Maintanances>;
  routineMaintanancesCount: Scalars['Int'];
  section: Section;
  ticket: Ticket;
  tickets: Array<Ticket>;
  ticketsCount: Scalars['Int'];
  user: Users;
  users: Array<Users>;
  usersCount: Scalars['Int'];
};


export type QueryBlockArgs = {
  id: Scalars['Int'];
};


export type QueryBlocksArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
};


export type QueryItemArgs = {
  id: Scalars['Int'];
};


export type QueryItemCatagoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
};


export type QueryItemCatagoryArgs = {
  id: Scalars['Int'];
};


export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};


export type QueryMachineArgs = {
  id: Scalars['Int'];
};


export type QueryMachinesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};


export type QueryMachinesCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};


export type QueryMaintenanceArgs = {
  id: Scalars['Int'];
};


export type QueryMaintenanceCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type QueryMaintenancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type QueryReplacementArgs = {
  id: Scalars['Int'];
};


export type QueryReplacementsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};


export type QueryReportArgs = {
  id: Scalars['Int'];
};


export type QueryRoutineMaintananceArgs = {
  id: Scalars['Int'];
};


export type QueryRoutineMaintanancesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};


export type QueryRoutineMaintanancesCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};


export type QuerySectionArgs = {
  id: Scalars['Int'];
};


export type QueryTicketArgs = {
  id: Scalars['Int'];
};


export type QueryTicketsArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryTicketsCountArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TicketWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};


export type QueryUsersCountArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Replacements = {
  __typename?: 'Replacements';
  approved: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['BigInt'];
  item: Items;
  item_id: Scalars['BigInt'];
  items: Items;
  maintanance_id: Scalars['BigInt'];
  maintenance: Maintenance;
  metadata: Scalars['JSON'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at: Scalars['DateTime'];
};

export type ReplacementsAvgAggregate = {
  __typename?: 'ReplacementsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  item_id?: Maybe<Scalars['Float']>;
  maintanance_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type ReplacementsCountAggregate = {
  __typename?: 'ReplacementsCountAggregate';
  _all: Scalars['Int'];
  approved: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  maintanance_id: Scalars['Int'];
  metadata: Scalars['Int'];
  name: Scalars['Int'];
  quantity: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type ReplacementsCreateInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ReplacementsCreateManyItemsInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  maintanance_id: Scalars['BigInt'];
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ReplacementsCreateManyItemsInputEnvelope = {
  data: Array<ReplacementsCreateManyItemsInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReplacementsCreateManyMaintenanceInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  item_id: Scalars['BigInt'];
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ReplacementsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReplacementsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReplacementsCreateNestedManyWithoutItemsInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
};

export type ReplacementsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
};

export type ReplacementsCreateOrConnectWithoutItemsInput = {
  create: ReplacementsCreateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateOrConnectWithoutMaintenanceInput = {
  create: ReplacementsCreateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateWithoutItemsInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ReplacementsCreateWithoutMaintenanceInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars['JSON']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ReplacementsListRelationFilter = {
  every?: InputMaybe<ReplacementsWhereInput>;
  none?: InputMaybe<ReplacementsWhereInput>;
  some?: InputMaybe<ReplacementsWhereInput>;
};

export type ReplacementsMaxAggregate = {
  __typename?: 'ReplacementsMaxAggregate';
  approved?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  item_id?: Maybe<Scalars['BigInt']>;
  maintanance_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ReplacementsMinAggregate = {
  __typename?: 'ReplacementsMinAggregate';
  approved?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  item_id?: Maybe<Scalars['BigInt']>;
  maintanance_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ReplacementsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReplacementsOrderByWithRelationInput = {
  approved?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  item_id?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemsOrderByWithRelationInput>;
  maintanance_id?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  metadata?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ReplacementsScalarWhereInput = {
  AND?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  OR?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  maintanance_id?: InputMaybe<BigIntFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ReplacementsSumAggregate = {
  __typename?: 'ReplacementsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  item_id?: Maybe<Scalars['BigInt']>;
  maintanance_id?: Maybe<Scalars['BigInt']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type ReplacementsUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyMutationInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyWithWhereWithoutItemsInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithoutItemsNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutItemsInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplacementsUpdateWithWhereUniqueWithoutItemsInput>>;
  updateMany?: InputMaybe<Array<ReplacementsUpdateManyWithWhereWithoutItemsInput>>;
  upsert?: InputMaybe<Array<ReplacementsUpsertWithWhereUniqueWithoutItemsInput>>;
};

export type ReplacementsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput>>;
  updateMany?: InputMaybe<Array<ReplacementsUpdateManyWithWhereWithoutMaintenanceInput>>;
  upsert?: InputMaybe<Array<ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput>>;
};

export type ReplacementsUpdateWithWhereUniqueWithoutItemsInput = {
  data: ReplacementsUpdateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReplacementsUpdateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithoutItemsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateWithoutMaintenanceInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpsertWithWhereUniqueWithoutItemsInput = {
  create: ReplacementsCreateWithoutItemsInput;
  update: ReplacementsUpdateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput = {
  create: ReplacementsCreateWithoutMaintenanceInput;
  update: ReplacementsUpdateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsWhereInput = {
  AND?: InputMaybe<Array<ReplacementsWhereInput>>;
  NOT?: InputMaybe<Array<ReplacementsWhereInput>>;
  OR?: InputMaybe<Array<ReplacementsWhereInput>>;
  approved?: InputMaybe<BoolFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsRelationFilter>;
  maintanance_id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  metadata?: InputMaybe<JsonFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ReplacementsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Reports = {
  __typename?: 'Reports';
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  maintance_id: Scalars['BigInt'];
  maintenance: Maintenance;
  report: Scalars['String'];
  sign: Scalars['String'];
  tag: Scalars['JSON'];
  updated_at: Scalars['DateTime'];
  validated: Scalars['BigInt'];
  validated_sign: Scalars['BigInt'];
};

export type ReportsAvgAggregate = {
  __typename?: 'ReportsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  maintance_id?: Maybe<Scalars['Float']>;
  validated?: Maybe<Scalars['Float']>;
  validated_sign?: Maybe<Scalars['Float']>;
};

export type ReportsCountAggregate = {
  __typename?: 'ReportsCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  maintance_id: Scalars['Int'];
  report: Scalars['Int'];
  sign: Scalars['Int'];
  tag: Scalars['Int'];
  updated_at: Scalars['Int'];
  validated: Scalars['Int'];
  validated_sign: Scalars['Int'];
};

export type ReportsCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance: MaintenanceCreateNestedOneWithoutReportsInput;
  report: Scalars['String'];
  sign: Scalars['String'];
  tag: Scalars['JSON'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  validated: Scalars['BigInt'];
  validated_sign: Scalars['BigInt'];
};

export type ReportsCreateManyMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  report: Scalars['String'];
  sign: Scalars['String'];
  tag: Scalars['JSON'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  validated: Scalars['BigInt'];
  validated_sign: Scalars['BigInt'];
};

export type ReportsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReportsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReportsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
};

export type ReportsCreateOrConnectWithoutMaintenanceInput = {
  create: ReportsCreateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  report: Scalars['String'];
  sign: Scalars['String'];
  tag: Scalars['JSON'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  validated: Scalars['BigInt'];
  validated_sign: Scalars['BigInt'];
};

export type ReportsListRelationFilter = {
  every?: InputMaybe<ReportsWhereInput>;
  none?: InputMaybe<ReportsWhereInput>;
  some?: InputMaybe<ReportsWhereInput>;
};

export type ReportsMaxAggregate = {
  __typename?: 'ReportsMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  maintance_id?: Maybe<Scalars['BigInt']>;
  report?: Maybe<Scalars['String']>;
  sign?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  validated?: Maybe<Scalars['BigInt']>;
  validated_sign?: Maybe<Scalars['BigInt']>;
};

export type ReportsMinAggregate = {
  __typename?: 'ReportsMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  maintance_id?: Maybe<Scalars['BigInt']>;
  report?: Maybe<Scalars['String']>;
  sign?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  validated?: Maybe<Scalars['BigInt']>;
  validated_sign?: Maybe<Scalars['BigInt']>;
};

export type ReportsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReportsScalarWhereInput = {
  AND?: InputMaybe<Array<ReportsScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReportsScalarWhereInput>>;
  OR?: InputMaybe<Array<ReportsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintance_id?: InputMaybe<BigIntFilter>;
  report?: InputMaybe<StringFilter>;
  sign?: InputMaybe<StringFilter>;
  tag?: InputMaybe<JsonFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  validated?: InputMaybe<BigIntFilter>;
  validated_sign?: InputMaybe<BigIntFilter>;
};

export type ReportsSumAggregate = {
  __typename?: 'ReportsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  maintance_id?: Maybe<Scalars['BigInt']>;
  validated?: Maybe<Scalars['BigInt']>;
  validated_sign?: Maybe<Scalars['BigInt']>;
};

export type ReportsUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReportsNestedInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReportsUpdateManyMutationInput;
  where: ReportsScalarWhereInput;
};

export type ReportsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutMaintenanceInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportsUpdateWithWhereUniqueWithoutMaintenanceInput>>;
  updateMany?: InputMaybe<Array<ReportsUpdateManyWithWhereWithoutMaintenanceInput>>;
  upsert?: InputMaybe<Array<ReportsUpsertWithWhereUniqueWithoutMaintenanceInput>>;
};

export type ReportsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReportsUpdateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars['JSON']>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpsertWithWhereUniqueWithoutMaintenanceInput = {
  create: ReportsCreateWithoutMaintenanceInput;
  update: ReportsUpdateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsWhereInput = {
  AND?: InputMaybe<Array<ReportsWhereInput>>;
  NOT?: InputMaybe<Array<ReportsWhereInput>>;
  OR?: InputMaybe<Array<ReportsWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintance_id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  report?: InputMaybe<StringFilter>;
  sign?: InputMaybe<StringFilter>;
  tag?: InputMaybe<JsonFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  validated?: InputMaybe<BigIntFilter>;
  validated_sign?: InputMaybe<BigIntFilter>;
};

export type ReportsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export enum Role {
  Admin = 'ADMIN',
  Engineer = 'ENGINEER',
  Fitter = 'FITTER',
  Guest = 'GUEST',
  Manager = 'MANAGER',
  Supervisor = 'SUPERVISOR'
}

export type Routine_MaintanancesAvgAggregate = {
  __typename?: 'Routine_maintanancesAvgAggregate';
  assignee_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  meachine_id?: Maybe<Scalars['Float']>;
};

export type Routine_MaintanancesCountAggregate = {
  __typename?: 'Routine_maintanancesCountAggregate';
  _all: Scalars['Int'];
  assignee_id: Scalars['Int'];
  created_at: Scalars['Int'];
  cron: Scalars['Int'];
  description: Scalars['Int'];
  from: Scalars['Int'];
  id: Scalars['Int'];
  meachine_id: Scalars['Int'];
  name: Scalars['Int'];
  to: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type Routine_MaintanancesListRelationFilter = {
  every?: InputMaybe<Routine_MaintanancesWhereInput>;
  none?: InputMaybe<Routine_MaintanancesWhereInput>;
  some?: InputMaybe<Routine_MaintanancesWhereInput>;
};

export type Routine_MaintanancesMaxAggregate = {
  __typename?: 'Routine_maintanancesMaxAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  cron?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  meachine_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesMinAggregate = {
  __typename?: 'Routine_maintanancesMinAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  created_at?: Maybe<Scalars['DateTime']>;
  cron?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  meachine_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesSumAggregate = {
  __typename?: 'Routine_maintanancesSumAggregate';
  assignee_id?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  meachine_id?: Maybe<Scalars['BigInt']>;
};

export type Section = {
  __typename?: 'Section';
  _count: SectionCount;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type SectionMachinesArgs = {
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type SectionAvgAggregate = {
  __typename?: 'SectionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SectionCount = {
  __typename?: 'SectionCount';
  machines: Scalars['Int'];
};

export type SectionCountAggregate = {
  __typename?: 'SectionCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type SectionCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutSection_Machines_SectionTosectionInput>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type SectionMaxAggregate = {
  __typename?: 'SectionMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SectionMinAggregate = {
  __typename?: 'SectionMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SectionSumAggregate = {
  __typename?: 'SectionSumAggregate';
  id?: Maybe<Scalars['String']>;
};

export type SectionUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutSection_Machines_SectionTosectionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Sections = {
  __typename?: 'Sections';
  _count: SectionsCount;
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  machines?: Maybe<Array<Machines>>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type SectionsAvgAggregate = {
  __typename?: 'SectionsAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SectionsCount = {
  __typename?: 'SectionsCount';
  machines: Scalars['Int'];
};

export type SectionsCountAggregate = {
  __typename?: 'SectionsCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updated_at: Scalars['Int'];
};

export type SectionsCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
};

export type SectionsCreateOrConnectWithoutMachinesInput = {
  create: SectionsCreateWithoutMachinesInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type SectionsMaxAggregate = {
  __typename?: 'SectionsMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SectionsMinAggregate = {
  __typename?: 'SectionsMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SectionsOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type SectionsRelationFilter = {
  is?: InputMaybe<SectionsWhereInput>;
  isNot?: InputMaybe<SectionsWhereInput>;
};

export type SectionsSumAggregate = {
  __typename?: 'SectionsSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type SectionsUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
  update?: InputMaybe<SectionsUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<SectionsUpsertWithoutMachinesInput>;
};

export type SectionsUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpsertWithoutMachinesInput = {
  create: SectionsCreateWithoutMachinesInput;
  update: SectionsUpdateWithoutMachinesInput;
};

export type SectionsWhereInput = {
  AND?: InputMaybe<Array<SectionsWhereInput>>;
  NOT?: InputMaybe<Array<SectionsWhereInput>>;
  OR?: InputMaybe<Array<SectionsWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SectionsWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['BigInt'];
  machine: Machines;
  machine_id: Scalars['BigInt'];
  machines: Machines;
  maintanance?: Maybe<Maintenance>;
  maintenance?: Maybe<Maintenance>;
  maintenance_id?: Maybe<Scalars['BigInt']>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at: Scalars['DateTime'];
  user: Users;
  user_id: Scalars['BigInt'];
};

export type TicketAvgAggregate = {
  __typename?: 'TicketAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  machine_id?: Maybe<Scalars['Float']>;
  maintenance_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

export type TicketCountAggregate = {
  __typename?: 'TicketCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  machine_id: Scalars['Int'];
  maintenance_id: Scalars['Int'];
  name: Scalars['Int'];
  photos: Scalars['Int'];
  status: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type TicketCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateManyMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance_id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateManyMachinesInputEnvelope = {
  data: Array<TicketCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TicketCreateManyUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  machine_id: Scalars['BigInt'];
  maintenance_id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateManyUserInputEnvelope = {
  data: Array<TicketCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TicketCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<TicketCreateManyMachinesInputEnvelope>;
};

export type TicketCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
};

export type TicketCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<TicketWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TicketCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<TicketCreateWithoutMaintenanceInput>;
};

export type TicketCreateOrConnectWithoutMachinesInput = {
  create: TicketCreateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutMaintenanceInput = {
  create: TicketCreateWithoutMaintenanceInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateOrConnectWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars['String'];
  photos: Scalars['String'];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketMaxAggregate = {
  __typename?: 'TicketMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
  maintenance_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['String']>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['BigInt']>;
};

export type TicketMinAggregate = {
  __typename?: 'TicketMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
  maintenance_id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  photos?: Maybe<Scalars['String']>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<Scalars['BigInt']>;
};

export type TicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TicketOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machine_id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByWithRelationInput>;
  maintenance?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  maintenance_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photos?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type TicketRelationFilter = {
  is?: InputMaybe<TicketWhereInput>;
  isNot?: InputMaybe<TicketWhereInput>;
};

export type TicketScalarWhereInput = {
  AND?: InputMaybe<Array<TicketScalarWhereInput>>;
  NOT?: InputMaybe<Array<TicketScalarWhereInput>>;
  OR?: InputMaybe<Array<TicketScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  maintenance_id?: InputMaybe<BigIntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  photos?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumticket_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TicketSumAggregate = {
  __typename?: 'TicketSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
  machine_id?: Maybe<Scalars['BigInt']>;
  maintenance_id?: Maybe<Scalars['BigInt']>;
  user_id?: Maybe<Scalars['BigInt']>;
};

export type TicketUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateManyWithWhereWithoutMachinesInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutUserInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutMachinesInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<TicketCreateManyMachinesInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutMachinesInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutMachinesInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutMachinesInput>>;
};

export type TicketUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutUserInput>>;
  createMany?: InputMaybe<TicketCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TicketUpdateOneWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<TicketWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TicketCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<TicketCreateWithoutMaintenanceInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TicketUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<TicketUpsertWithoutMaintenanceInput>;
};

export type TicketUpdateWithWhereUniqueWithoutMachinesInput = {
  data: TicketUpdateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutUserInput = {
  data: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpdateWithoutUserInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutTicketNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneWithoutTicketNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  photos?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<Enumticket_StatusFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TicketUpsertWithWhereUniqueWithoutMachinesInput = {
  create: TicketCreateWithoutMachinesInput;
  update: TicketUpdateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithWhereUniqueWithoutUserInput = {
  create: TicketCreateWithoutUserInput;
  update: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpsertWithoutMaintenanceInput = {
  create: TicketCreateWithoutMaintenanceInput;
  update: TicketUpdateWithoutMaintenanceInput;
};

export type TicketWhereInput = {
  AND?: InputMaybe<Array<TicketWhereInput>>;
  NOT?: InputMaybe<Array<TicketWhereInput>>;
  OR?: InputMaybe<Array<TicketWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  machine_id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesRelationFilter>;
  maintenance?: InputMaybe<MaintenanceRelationFilter>;
  maintenance_id?: InputMaybe<BigIntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  photos?: InputMaybe<StringFilter>;
  status?: InputMaybe<Enumticket_StatusFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type TicketWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance_id?: InputMaybe<Scalars['BigInt']>;
};

export type Users = {
  __typename?: 'Users';
  _count: UsersCount;
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars['String'];
  phone: Scalars['String'];
  profile: Scalars['JSON'];
  role: Role;
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  ticket?: Maybe<Array<Ticket>>;
  updated_at: Scalars['DateTime'];
  /**
   * @DtoCreateHidden
   * @DtoUpdateHidden
   */
  user_auth_id?: Maybe<Scalars['String']>;
};


export type UsersMaintenanceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};


export type UsersTicketArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  where?: InputMaybe<TicketWhereInput>;
};

export type UsersAvgAggregate = {
  __typename?: 'UsersAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UsersCount = {
  __typename?: 'UsersCount';
  maintenance: Scalars['Int'];
  routine_maintanances: Scalars['Int'];
  ticket: Scalars['Int'];
};

export type UsersCountAggregate = {
  __typename?: 'UsersCountAggregate';
  _all: Scalars['Int'];
  created_at: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phone: Scalars['Int'];
  profile: Scalars['Int'];
  role: Scalars['Int'];
  updated_at: Scalars['Int'];
  user_auth_id: Scalars['Int'];
};

export type UsersCreateInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars['String'];
  phone: Scalars['String'];
  profile?: InputMaybe<Scalars['JSON']>;
  role: Role;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_auth_id?: InputMaybe<Scalars['String']>;
};

export type UsersCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
};

export type UsersCreateNestedOneWithoutRoutine_MaintanancesInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
};

export type UsersCreateOrConnectWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutRoutine_MaintanancesInput = {
  create: UsersCreateWithoutRoutine_MaintanancesInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  profile?: InputMaybe<Scalars['JSON']>;
  role: Role;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_auth_id?: InputMaybe<Scalars['String']>;
};

export type UsersCreateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars['String'];
  phone: Scalars['String'];
  profile?: InputMaybe<Scalars['JSON']>;
  role: Role;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  user_auth_id?: InputMaybe<Scalars['String']>;
};

export type UsersMaxAggregate = {
  __typename?: 'UsersMaxAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_auth_id?: Maybe<Scalars['String']>;
};

export type UsersMinAggregate = {
  __typename?: 'UsersMinAggregate';
  created_at?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updated_at?: Maybe<Scalars['DateTime']>;
  user_auth_id?: Maybe<Scalars['String']>;
};

export type UsersOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maintenance?: InputMaybe<MaintenanceOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  ticket?: InputMaybe<TicketOrderByRelationAggregateInput>;
  updated_at?: InputMaybe<SortOrder>;
  user_auth_id?: InputMaybe<SortOrder>;
};

export type UsersRelationFilter = {
  is?: InputMaybe<UsersWhereInput>;
  isNot?: InputMaybe<UsersWhereInput>;
};

export type UsersSumAggregate = {
  __typename?: 'UsersSumAggregate';
  id?: Maybe<Scalars['BigInt']>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_auth_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UsersUpdateOneRequiredWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
  update?: InputMaybe<UsersUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<UsersUpsertWithoutMaintenanceInput>;
};

export type UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
  update?: InputMaybe<UsersUpdateWithoutRoutine_MaintanancesInput>;
  upsert?: InputMaybe<UsersUpsertWithoutRoutine_MaintanancesInput>;
};

export type UsersUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_auth_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars['JSON']>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user_auth_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UsersUpsertWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  update: UsersUpdateWithoutMaintenanceInput;
};

export type UsersUpsertWithoutRoutine_MaintanancesInput = {
  create: UsersCreateWithoutRoutine_MaintanancesInput;
  update: UsersUpdateWithoutRoutine_MaintanancesInput;
};

export type UsersWhereInput = {
  AND?: InputMaybe<Array<UsersWhereInput>>;
  NOT?: InputMaybe<Array<UsersWhereInput>>;
  OR?: InputMaybe<Array<UsersWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  profile?: InputMaybe<JsonFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  ticket?: InputMaybe<TicketListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_auth_id?: InputMaybe<StringNullableFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
  phone?: InputMaybe<Scalars['String']>;
  user_auth_id?: InputMaybe<Scalars['String']>;
};

export type Catagory = {
  __typename?: 'catagory';
  _count: CatagoryCount;
  created_at: Scalars['DateTime'];
  id: Scalars['BigInt'];
  items?: Maybe<Array<Items>>;
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CatagoryCreateNestedOneWithoutItemsInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
};

export type CatagoryCreateOrConnectWithoutItemsInput = {
  create: CatagoryCreateWithoutItemsInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryCreateWithoutItemsInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CatagoryOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemsOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CatagoryUpdateOneRequiredWithoutItemsNestedInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
  update?: InputMaybe<CatagoryUpdateWithoutItemsInput>;
  upsert?: InputMaybe<CatagoryUpsertWithoutItemsInput>;
};

export type CatagoryUpdateWithoutItemsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpsertWithoutItemsInput = {
  create: CatagoryCreateWithoutItemsInput;
  update: CatagoryUpdateWithoutItemsInput;
};

export type CatagoryWhereInput = {
  AND?: InputMaybe<Array<CatagoryWhereInput>>;
  NOT?: InputMaybe<Array<CatagoryWhereInput>>;
  OR?: InputMaybe<Array<CatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  items?: InputMaybe<ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CatagoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export type Routine_Maintanances = {
  __typename?: 'routine_maintanances';
  assignee: Users;
  assignee_id: Scalars['BigInt'];
  created_at: Scalars['DateTime'];
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id: Scalars['BigInt'];
  meachine: Machines;
  meachine_id: Scalars['BigInt'];
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Routine_MaintanancesCreateInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  meachine_id: Scalars['BigInt'];
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesCreateManyAssigneeInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Routine_MaintanancesCreateManyMeachineInput = {
  assignee_id: Scalars['BigInt'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesCreateManyMeachineInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyMeachineInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Routine_MaintanancesCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
};

export type Routine_MaintanancesCreateNestedManyWithoutMeachineInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
};

export type Routine_MaintanancesCreateOrConnectWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateOrConnectWithoutMeachineInput = {
  create: Routine_MaintanancesCreateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateWithoutAssigneeInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesCreateWithoutMeachineInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars['DateTime']>;
  cron: Scalars['String'];
  description: Scalars['String'];
  from: Scalars['String'];
  id?: InputMaybe<Scalars['BigInt']>;
  name: Scalars['String'];
  to: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type Routine_MaintanancesScalarWhereInput = {
  AND?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  NOT?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  OR?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  cron?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesSumOrderByAggregateInput = {
  assignee_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meachine_id?: InputMaybe<SortOrder>;
};

export type Routine_MaintanancesUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  to?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  to?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type Routine_MaintanancesUpdateManyWithoutMeachineNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>>;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutMeachineInput>>;
  updateMany?: InputMaybe<Array<Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput>>;
  upsert?: InputMaybe<Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutMeachineInput>>;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutMeachineInput = {
  data: Routine_MaintanancesUpdateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithoutAssigneeInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  to?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateWithoutMeachineInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  from?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  to?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  update: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutMeachineInput = {
  create: Routine_MaintanancesCreateWithoutMeachineInput;
  update: Routine_MaintanancesUpdateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesWhereInput = {
  AND?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  NOT?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  OR?: InputMaybe<Array<Routine_MaintanancesWhereInput>>;
  assignee?: InputMaybe<UsersRelationFilter>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  cron?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine?: InputMaybe<MachinesRelationFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesWhereUniqueInput = {
  id?: InputMaybe<Scalars['BigInt']>;
};

export enum Ticket_Status {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Pending = 'PENDING'
}

export type GetAllMachinesDropdownQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMachinesDropdownQuery = { __typename?: 'Query', machines: Array<{ __typename?: 'Machines', label: string, value: any }> };

export type MachinesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MachinesWhereInput>;
}>;


export type MachinesQuery = { __typename?: 'Query', machines: Array<{ __typename?: 'Machines', id: any, label: string, name: string, priority: number, profile: any, section: { __typename?: 'Sections', id: any, name: string }, block: { __typename?: 'Block', id: any, name: string } }> };

export type MachinesCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MachinesWhereInput>;
}>;


export type MachinesCountQuery = { __typename?: 'Query', machinesCount: number };

export type MaintenanceQueryVariables = Exact<{
  where?: InputMaybe<MaintenanceWhereInput>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type MaintenanceQuery = { __typename?: 'Query', maintenances: Array<{ __typename?: 'Maintenance', id: any, from: any, to: any, elapsed?: any | null, created_at: any, description: string, resolved: boolean, name: string, assignee: { __typename?: 'Users', id: any, name: string }, machine: { __typename?: 'Machines', id: any, label: string } }> };

export type MaintanceCountQueryVariables = Exact<{
  where?: InputMaybe<MaintenanceWhereInput>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type MaintanceCountQuery = { __typename?: 'Query', maintenanceCount: number };

export type GetMaintananceQueryVariables = Exact<{
  maintenanceId: Scalars['Int'];
}>;


export type GetMaintananceQuery = { __typename?: 'Query', maintenance: { __typename?: 'Maintenance', created_at: any, updated_at: any, photo?: string | null, description: string, name: string, id: any, from: any, to: any, assigned?: boolean | null, elapsed?: any | null, resolved: boolean, un_planned: boolean, ticket?: { __typename?: 'Ticket', id: any, name: string, created_at: any } | null, assignee: { __typename?: 'Users', id: any, name: string, phone: string }, machine: { __typename?: 'Machines', id: any, label: string, priority: number, block: { __typename?: 'Block', id: any, name: string }, section: { __typename?: 'Sections', id: any, name: string } } } };

export type UpdateMaintananceMutationVariables = Exact<{
  updateMaintananceId: Scalars['Int'];
  updateMaintananceInput: MaintenanceUpdateInput;
}>;


export type UpdateMaintananceMutation = { __typename?: 'Mutation', updateMaintanance: { __typename?: 'Maintenance', id: any } };

export type CreateMaintananceMutationVariables = Exact<{
  createMaintananceInput: MaintenanceCreateInput;
}>;


export type CreateMaintananceMutation = { __typename?: 'Mutation', createMaintanance: { __typename?: 'Maintenance', id: any } };

export type DeleteMaintananceMutationVariables = Exact<{
  removeMaintananceId: Scalars['Int'];
}>;


export type DeleteMaintananceMutation = { __typename?: 'Mutation', removeMaintanance: { __typename?: 'Maintenance', id: any } };

export type RoutineMaintanancesQueryVariables = Exact<{
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type RoutineMaintanancesQuery = { __typename?: 'Query', routineMaintanances: Array<{ __typename?: 'routine_maintanances', id: any, name: string, from: string, to: string, created_at: any, cron: string, description: string, meachine: { __typename?: 'Machines', id: any, name: string, label: string, section_id: any, block_id: any }, assignee: { __typename?: 'Users', id: any, name: string, phone: string } }> };

export type RoutineMaintanancesCountQueryVariables = Exact<{
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
}>;


export type RoutineMaintanancesCountQuery = { __typename?: 'Query', routineMaintanancesCount: number };

export type RoutineMaintananceQueryVariables = Exact<{
  routineMaintananceId: Scalars['Int'];
}>;


export type RoutineMaintananceQuery = { __typename?: 'Query', routineMaintanance: { __typename?: 'routine_maintanances', id: any, name: string, from: string, to: string, created_at: any, cron: string, description: string, meachine: { __typename?: 'Machines', id: any, name: string, label: string, section_id: any, block_id: any }, assignee: { __typename?: 'Users', id: any, name: string, phone: string } } };

export type CreateRoutineMaintananceMutationVariables = Exact<{
  createRoutineMaintananceInput: Routine_MaintanancesCreateInput;
}>;


export type CreateRoutineMaintananceMutation = { __typename?: 'Mutation', createRoutineMaintanance: { __typename?: 'routine_maintanances', id: any } };

export type UpdateRoutineMaintananceMutationVariables = Exact<{
  updateRoutineMaintananceId: Scalars['Int'];
  updateRoutineMaintananceInput: Routine_MaintanancesUpdateInput;
}>;


export type UpdateRoutineMaintananceMutation = { __typename?: 'Mutation', updateRoutineMaintanance: { __typename?: 'routine_maintanances', id: any } };

export type RemoveRoutineMaintananceMutationVariables = Exact<{
  removeRoutineMaintananceId: Scalars['Int'];
}>;


export type RemoveRoutineMaintananceMutation = { __typename?: 'Mutation', removeRoutineMaintanance: { __typename?: 'routine_maintanances', id: any } };

export type TicketsQueryVariables = Exact<{
  where?: InputMaybe<TicketWhereInput>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
}>;


export type TicketsQuery = { __typename?: 'Query', tickets: Array<{ __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, created_at: any, machine: { __typename?: 'Machines', id: any, name: string, label: string }, user: { __typename?: 'Users', id: any, name: string } }> };

export type CreateTicketsMutationVariables = Exact<{
  createTicketInput: TicketCreateInput;
}>;


export type CreateTicketsMutation = { __typename?: 'Mutation', createTicket: { __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, created_at: any, machine: { __typename?: 'Machines', id: any, name: string, label: string }, user: { __typename?: 'Users', id: any, name: string } } };

export type GetTicketQueryVariables = Exact<{
  ticketId: Scalars['Int'];
}>;


export type GetTicketQuery = { __typename?: 'Query', ticket: { __typename?: 'Ticket', id: any, description: string, name: string, photos: string, status: Ticket_Status, updated_at: any, created_at: any, machine: { __typename?: 'Machines', id: any, label: string, priority: number, block: { __typename?: 'Block', id: any, name: string }, section: { __typename?: 'Sections', id: any, name: string } }, user: { __typename?: 'Users', id: any, name: string } } };

export type TicketsCountQueryVariables = Exact<{
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Float']>;
  take?: InputMaybe<Scalars['Float']>;
  where?: InputMaybe<TicketWhereInput>;
}>;


export type TicketsCountQuery = { __typename?: 'Query', ticketsCount: number };

export type DeleteTicketMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTicketMutation = { __typename?: 'Mutation', removeTicket: { __typename?: 'Ticket', id: any } };

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', id: any, name: string, role: Role, profile: any, phone: string, created_at: any }> };

export type UsersCountQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type UsersCountQuery = { __typename?: 'Query', usersCount: number };

export type UsersDropDownQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type UsersDropDownQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', name: string, phone: string, value: any }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: UsersCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Users', id: any } };

export type DeleteUsersMutationVariables = Exact<{
  removeUserId: Scalars['Int'];
}>;


export type DeleteUsersMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'Users', id: any } };


export const GetAllMachinesDropdownDocument = gql`
    query getAllMachinesDropdown {
  machines {
    value: id
    label
  }
}
    `;

/**
 * __useGetAllMachinesDropdownQuery__
 *
 * To run a query within a React component, call `useGetAllMachinesDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMachinesDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMachinesDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMachinesDropdownQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>(GetAllMachinesDropdownDocument, options);
      }
export function useGetAllMachinesDropdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>(GetAllMachinesDropdownDocument, options);
        }
export type GetAllMachinesDropdownQueryHookResult = ReturnType<typeof useGetAllMachinesDropdownQuery>;
export type GetAllMachinesDropdownLazyQueryHookResult = ReturnType<typeof useGetAllMachinesDropdownLazyQuery>;
export type GetAllMachinesDropdownQueryResult = Apollo.QueryResult<GetAllMachinesDropdownQuery, GetAllMachinesDropdownQueryVariables>;
export const MachinesDocument = gql`
    query Machines($limit: Int, $orderBy: MachinesOrderByWithRelationInput, $offset: Int, $where: MachinesWhereInput) {
  machines(limit: $limit, orderBy: $orderBy, offset: $offset, where: $where) {
    id
    label
    name
    priority
    profile
    section {
      id
      name
    }
    block {
      id
      name
    }
    priority
  }
}
    `;

/**
 * __useMachinesQuery__
 *
 * To run a query within a React component, call `useMachinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachinesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMachinesQuery(baseOptions?: Apollo.QueryHookOptions<MachinesQuery, MachinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MachinesQuery, MachinesQueryVariables>(MachinesDocument, options);
      }
export function useMachinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MachinesQuery, MachinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MachinesQuery, MachinesQueryVariables>(MachinesDocument, options);
        }
export type MachinesQueryHookResult = ReturnType<typeof useMachinesQuery>;
export type MachinesLazyQueryHookResult = ReturnType<typeof useMachinesLazyQuery>;
export type MachinesQueryResult = Apollo.QueryResult<MachinesQuery, MachinesQueryVariables>;
export const MachinesCountDocument = gql`
    query MachinesCount($limit: Int, $orderBy: MachinesOrderByWithRelationInput, $offset: Int, $where: MachinesWhereInput) {
  machinesCount(limit: $limit, orderBy: $orderBy, offset: $offset, where: $where)
}
    `;

/**
 * __useMachinesCountQuery__
 *
 * To run a query within a React component, call `useMachinesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachinesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachinesCountQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMachinesCountQuery(baseOptions?: Apollo.QueryHookOptions<MachinesCountQuery, MachinesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MachinesCountQuery, MachinesCountQueryVariables>(MachinesCountDocument, options);
      }
export function useMachinesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MachinesCountQuery, MachinesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MachinesCountQuery, MachinesCountQueryVariables>(MachinesCountDocument, options);
        }
export type MachinesCountQueryHookResult = ReturnType<typeof useMachinesCountQuery>;
export type MachinesCountLazyQueryHookResult = ReturnType<typeof useMachinesCountLazyQuery>;
export type MachinesCountQueryResult = Apollo.QueryResult<MachinesCountQuery, MachinesCountQueryVariables>;
export const MaintenanceDocument = gql`
    query Maintenance($where: MaintenanceWhereInput, $orderBy: MaintenanceOrderByWithRelationInput, $offset: Int, $limit: Int) {
  maintenances(where: $where, orderBy: $orderBy, offset: $offset, limit: $limit) {
    id
    assignee {
      id
      name
    }
    from
    to
    elapsed
    created_at
    description
    resolved
    name
    machine {
      id
      label
    }
  }
}
    `;

/**
 * __useMaintenanceQuery__
 *
 * To run a query within a React component, call `useMaintenanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaintenanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaintenanceQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMaintenanceQuery(baseOptions?: Apollo.QueryHookOptions<MaintenanceQuery, MaintenanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaintenanceQuery, MaintenanceQueryVariables>(MaintenanceDocument, options);
      }
export function useMaintenanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaintenanceQuery, MaintenanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaintenanceQuery, MaintenanceQueryVariables>(MaintenanceDocument, options);
        }
export type MaintenanceQueryHookResult = ReturnType<typeof useMaintenanceQuery>;
export type MaintenanceLazyQueryHookResult = ReturnType<typeof useMaintenanceLazyQuery>;
export type MaintenanceQueryResult = Apollo.QueryResult<MaintenanceQuery, MaintenanceQueryVariables>;
export const MaintanceCountDocument = gql`
    query maintanceCount($where: MaintenanceWhereInput, $offset: Int, $orderBy: MaintenanceOrderByWithRelationInput, $limit: Int) {
  maintenanceCount(
    where: $where
    offset: $offset
    orderBy: $orderBy
    limit: $limit
  )
}
    `;

/**
 * __useMaintanceCountQuery__
 *
 * To run a query within a React component, call `useMaintanceCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaintanceCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaintanceCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMaintanceCountQuery(baseOptions?: Apollo.QueryHookOptions<MaintanceCountQuery, MaintanceCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaintanceCountQuery, MaintanceCountQueryVariables>(MaintanceCountDocument, options);
      }
export function useMaintanceCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaintanceCountQuery, MaintanceCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaintanceCountQuery, MaintanceCountQueryVariables>(MaintanceCountDocument, options);
        }
export type MaintanceCountQueryHookResult = ReturnType<typeof useMaintanceCountQuery>;
export type MaintanceCountLazyQueryHookResult = ReturnType<typeof useMaintanceCountLazyQuery>;
export type MaintanceCountQueryResult = Apollo.QueryResult<MaintanceCountQuery, MaintanceCountQueryVariables>;
export const GetMaintananceDocument = gql`
    query getMaintanance($maintenanceId: Int!) {
  maintenance(id: $maintenanceId) {
    created_at
    updated_at
    photo
    description
    name
    id
    from
    to
    assigned
    elapsed
    resolved
    un_planned
    ticket {
      id
      name
      created_at
    }
    assignee {
      id
      name
      phone
    }
    machine {
      id
      label
      priority
      block {
        id
        name
      }
      section {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetMaintananceQuery__
 *
 * To run a query within a React component, call `useGetMaintananceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMaintananceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMaintananceQuery({
 *   variables: {
 *      maintenanceId: // value for 'maintenanceId'
 *   },
 * });
 */
export function useGetMaintananceQuery(baseOptions: Apollo.QueryHookOptions<GetMaintananceQuery, GetMaintananceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(GetMaintananceDocument, options);
      }
export function useGetMaintananceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMaintananceQuery, GetMaintananceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(GetMaintananceDocument, options);
        }
export type GetMaintananceQueryHookResult = ReturnType<typeof useGetMaintananceQuery>;
export type GetMaintananceLazyQueryHookResult = ReturnType<typeof useGetMaintananceLazyQuery>;
export type GetMaintananceQueryResult = Apollo.QueryResult<GetMaintananceQuery, GetMaintananceQueryVariables>;
export const UpdateMaintananceDocument = gql`
    mutation updateMaintanance($updateMaintananceId: Int!, $updateMaintananceInput: MaintenanceUpdateInput!) {
  updateMaintanance(
    id: $updateMaintananceId
    updateMaintananceInput: $updateMaintananceInput
  ) {
    id
  }
}
    `;
export type UpdateMaintananceMutationFn = Apollo.MutationFunction<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>;

/**
 * __useUpdateMaintananceMutation__
 *
 * To run a mutation, you first call `useUpdateMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMaintananceMutation, { data, loading, error }] = useUpdateMaintananceMutation({
 *   variables: {
 *      updateMaintananceId: // value for 'updateMaintananceId'
 *      updateMaintananceInput: // value for 'updateMaintananceInput'
 *   },
 * });
 */
export function useUpdateMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>(UpdateMaintananceDocument, options);
      }
export type UpdateMaintananceMutationHookResult = ReturnType<typeof useUpdateMaintananceMutation>;
export type UpdateMaintananceMutationResult = Apollo.MutationResult<UpdateMaintananceMutation>;
export type UpdateMaintananceMutationOptions = Apollo.BaseMutationOptions<UpdateMaintananceMutation, UpdateMaintananceMutationVariables>;
export const CreateMaintananceDocument = gql`
    mutation createMaintanance($createMaintananceInput: MaintenanceCreateInput!) {
  createMaintanance(createMaintananceInput: $createMaintananceInput) {
    id
  }
}
    `;
export type CreateMaintananceMutationFn = Apollo.MutationFunction<CreateMaintananceMutation, CreateMaintananceMutationVariables>;

/**
 * __useCreateMaintananceMutation__
 *
 * To run a mutation, you first call `useCreateMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMaintananceMutation, { data, loading, error }] = useCreateMaintananceMutation({
 *   variables: {
 *      createMaintananceInput: // value for 'createMaintananceInput'
 *   },
 * });
 */
export function useCreateMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<CreateMaintananceMutation, CreateMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMaintananceMutation, CreateMaintananceMutationVariables>(CreateMaintananceDocument, options);
      }
export type CreateMaintananceMutationHookResult = ReturnType<typeof useCreateMaintananceMutation>;
export type CreateMaintananceMutationResult = Apollo.MutationResult<CreateMaintananceMutation>;
export type CreateMaintananceMutationOptions = Apollo.BaseMutationOptions<CreateMaintananceMutation, CreateMaintananceMutationVariables>;
export const DeleteMaintananceDocument = gql`
    mutation deleteMaintanance($removeMaintananceId: Int!) {
  removeMaintanance(id: $removeMaintananceId) {
    id
  }
}
    `;
export type DeleteMaintananceMutationFn = Apollo.MutationFunction<DeleteMaintananceMutation, DeleteMaintananceMutationVariables>;

/**
 * __useDeleteMaintananceMutation__
 *
 * To run a mutation, you first call `useDeleteMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMaintananceMutation, { data, loading, error }] = useDeleteMaintananceMutation({
 *   variables: {
 *      removeMaintananceId: // value for 'removeMaintananceId'
 *   },
 * });
 */
export function useDeleteMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMaintananceMutation, DeleteMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMaintananceMutation, DeleteMaintananceMutationVariables>(DeleteMaintananceDocument, options);
      }
export type DeleteMaintananceMutationHookResult = ReturnType<typeof useDeleteMaintananceMutation>;
export type DeleteMaintananceMutationResult = Apollo.MutationResult<DeleteMaintananceMutation>;
export type DeleteMaintananceMutationOptions = Apollo.BaseMutationOptions<DeleteMaintananceMutation, DeleteMaintananceMutationVariables>;
export const RoutineMaintanancesDocument = gql`
    query routineMaintanances($where: routine_maintanancesWhereInput, $limit: Int, $orderBy: routine_maintanancesSumOrderByAggregateInput, $offset: Int) {
  routineMaintanances(
    where: $where
    limit: $limit
    orderBy: $orderBy
    offset: $offset
  ) {
    id
    name
    from
    to
    created_at
    cron
    description
    meachine {
      id
      name
      label
      section_id
      block_id
    }
    assignee {
      id
      name
      phone
    }
  }
}
    `;

/**
 * __useRoutineMaintanancesQuery__
 *
 * To run a query within a React component, call `useRoutineMaintanancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoutineMaintanancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoutineMaintanancesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      orderBy: // value for 'orderBy'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useRoutineMaintanancesQuery(baseOptions?: Apollo.QueryHookOptions<RoutineMaintanancesQuery, RoutineMaintanancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoutineMaintanancesQuery, RoutineMaintanancesQueryVariables>(RoutineMaintanancesDocument, options);
      }
export function useRoutineMaintanancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoutineMaintanancesQuery, RoutineMaintanancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoutineMaintanancesQuery, RoutineMaintanancesQueryVariables>(RoutineMaintanancesDocument, options);
        }
export type RoutineMaintanancesQueryHookResult = ReturnType<typeof useRoutineMaintanancesQuery>;
export type RoutineMaintanancesLazyQueryHookResult = ReturnType<typeof useRoutineMaintanancesLazyQuery>;
export type RoutineMaintanancesQueryResult = Apollo.QueryResult<RoutineMaintanancesQuery, RoutineMaintanancesQueryVariables>;
export const RoutineMaintanancesCountDocument = gql`
    query routineMaintanancesCount($where: routine_maintanancesWhereInput, $limit: Int, $offset: Int, $orderBy: routine_maintanancesSumOrderByAggregateInput) {
  routineMaintanancesCount(
    where: $where
    limit: $limit
    offset: $offset
    orderBy: $orderBy
  )
}
    `;

/**
 * __useRoutineMaintanancesCountQuery__
 *
 * To run a query within a React component, call `useRoutineMaintanancesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoutineMaintanancesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoutineMaintanancesCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useRoutineMaintanancesCountQuery(baseOptions?: Apollo.QueryHookOptions<RoutineMaintanancesCountQuery, RoutineMaintanancesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoutineMaintanancesCountQuery, RoutineMaintanancesCountQueryVariables>(RoutineMaintanancesCountDocument, options);
      }
export function useRoutineMaintanancesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoutineMaintanancesCountQuery, RoutineMaintanancesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoutineMaintanancesCountQuery, RoutineMaintanancesCountQueryVariables>(RoutineMaintanancesCountDocument, options);
        }
export type RoutineMaintanancesCountQueryHookResult = ReturnType<typeof useRoutineMaintanancesCountQuery>;
export type RoutineMaintanancesCountLazyQueryHookResult = ReturnType<typeof useRoutineMaintanancesCountLazyQuery>;
export type RoutineMaintanancesCountQueryResult = Apollo.QueryResult<RoutineMaintanancesCountQuery, RoutineMaintanancesCountQueryVariables>;
export const RoutineMaintananceDocument = gql`
    query routineMaintanance($routineMaintananceId: Int!) {
  routineMaintanance(id: $routineMaintananceId) {
    id
    name
    from
    to
    created_at
    cron
    description
    meachine {
      id
      name
      label
      section_id
      block_id
    }
    assignee {
      id
      name
      phone
    }
  }
}
    `;

/**
 * __useRoutineMaintananceQuery__
 *
 * To run a query within a React component, call `useRoutineMaintananceQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoutineMaintananceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoutineMaintananceQuery({
 *   variables: {
 *      routineMaintananceId: // value for 'routineMaintananceId'
 *   },
 * });
 */
export function useRoutineMaintananceQuery(baseOptions: Apollo.QueryHookOptions<RoutineMaintananceQuery, RoutineMaintananceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoutineMaintananceQuery, RoutineMaintananceQueryVariables>(RoutineMaintananceDocument, options);
      }
export function useRoutineMaintananceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoutineMaintananceQuery, RoutineMaintananceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoutineMaintananceQuery, RoutineMaintananceQueryVariables>(RoutineMaintananceDocument, options);
        }
export type RoutineMaintananceQueryHookResult = ReturnType<typeof useRoutineMaintananceQuery>;
export type RoutineMaintananceLazyQueryHookResult = ReturnType<typeof useRoutineMaintananceLazyQuery>;
export type RoutineMaintananceQueryResult = Apollo.QueryResult<RoutineMaintananceQuery, RoutineMaintananceQueryVariables>;
export const CreateRoutineMaintananceDocument = gql`
    mutation createRoutineMaintanance($createRoutineMaintananceInput: routine_maintanancesCreateInput!) {
  createRoutineMaintanance(
    createRoutineMaintananceInput: $createRoutineMaintananceInput
  ) {
    id
  }
}
    `;
export type CreateRoutineMaintananceMutationFn = Apollo.MutationFunction<CreateRoutineMaintananceMutation, CreateRoutineMaintananceMutationVariables>;

/**
 * __useCreateRoutineMaintananceMutation__
 *
 * To run a mutation, you first call `useCreateRoutineMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoutineMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoutineMaintananceMutation, { data, loading, error }] = useCreateRoutineMaintananceMutation({
 *   variables: {
 *      createRoutineMaintananceInput: // value for 'createRoutineMaintananceInput'
 *   },
 * });
 */
export function useCreateRoutineMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoutineMaintananceMutation, CreateRoutineMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoutineMaintananceMutation, CreateRoutineMaintananceMutationVariables>(CreateRoutineMaintananceDocument, options);
      }
export type CreateRoutineMaintananceMutationHookResult = ReturnType<typeof useCreateRoutineMaintananceMutation>;
export type CreateRoutineMaintananceMutationResult = Apollo.MutationResult<CreateRoutineMaintananceMutation>;
export type CreateRoutineMaintananceMutationOptions = Apollo.BaseMutationOptions<CreateRoutineMaintananceMutation, CreateRoutineMaintananceMutationVariables>;
export const UpdateRoutineMaintananceDocument = gql`
    mutation updateRoutineMaintanance($updateRoutineMaintananceId: Int!, $updateRoutineMaintananceInput: routine_maintanancesUpdateInput!) {
  updateRoutineMaintanance(
    id: $updateRoutineMaintananceId
    updateRoutineMaintananceInput: $updateRoutineMaintananceInput
  ) {
    id
  }
}
    `;
export type UpdateRoutineMaintananceMutationFn = Apollo.MutationFunction<UpdateRoutineMaintananceMutation, UpdateRoutineMaintananceMutationVariables>;

/**
 * __useUpdateRoutineMaintananceMutation__
 *
 * To run a mutation, you first call `useUpdateRoutineMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoutineMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoutineMaintananceMutation, { data, loading, error }] = useUpdateRoutineMaintananceMutation({
 *   variables: {
 *      updateRoutineMaintananceId: // value for 'updateRoutineMaintananceId'
 *      updateRoutineMaintananceInput: // value for 'updateRoutineMaintananceInput'
 *   },
 * });
 */
export function useUpdateRoutineMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoutineMaintananceMutation, UpdateRoutineMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoutineMaintananceMutation, UpdateRoutineMaintananceMutationVariables>(UpdateRoutineMaintananceDocument, options);
      }
export type UpdateRoutineMaintananceMutationHookResult = ReturnType<typeof useUpdateRoutineMaintananceMutation>;
export type UpdateRoutineMaintananceMutationResult = Apollo.MutationResult<UpdateRoutineMaintananceMutation>;
export type UpdateRoutineMaintananceMutationOptions = Apollo.BaseMutationOptions<UpdateRoutineMaintananceMutation, UpdateRoutineMaintananceMutationVariables>;
export const RemoveRoutineMaintananceDocument = gql`
    mutation removeRoutineMaintanance($removeRoutineMaintananceId: Int!) {
  removeRoutineMaintanance(id: $removeRoutineMaintananceId) {
    id
  }
}
    `;
export type RemoveRoutineMaintananceMutationFn = Apollo.MutationFunction<RemoveRoutineMaintananceMutation, RemoveRoutineMaintananceMutationVariables>;

/**
 * __useRemoveRoutineMaintananceMutation__
 *
 * To run a mutation, you first call `useRemoveRoutineMaintananceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveRoutineMaintananceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeRoutineMaintananceMutation, { data, loading, error }] = useRemoveRoutineMaintananceMutation({
 *   variables: {
 *      removeRoutineMaintananceId: // value for 'removeRoutineMaintananceId'
 *   },
 * });
 */
export function useRemoveRoutineMaintananceMutation(baseOptions?: Apollo.MutationHookOptions<RemoveRoutineMaintananceMutation, RemoveRoutineMaintananceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveRoutineMaintananceMutation, RemoveRoutineMaintananceMutationVariables>(RemoveRoutineMaintananceDocument, options);
      }
export type RemoveRoutineMaintananceMutationHookResult = ReturnType<typeof useRemoveRoutineMaintananceMutation>;
export type RemoveRoutineMaintananceMutationResult = Apollo.MutationResult<RemoveRoutineMaintananceMutation>;
export type RemoveRoutineMaintananceMutationOptions = Apollo.BaseMutationOptions<RemoveRoutineMaintananceMutation, RemoveRoutineMaintananceMutationVariables>;
export const TicketsDocument = gql`
    query Tickets($where: TicketWhereInput, $skip: Float, $take: Float, $orderBy: TicketOrderByWithRelationInput) {
  tickets(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
    id
    description
    name
    machine {
      id
      name
      label
    }
    name
    photos
    status
    user {
      id
      name
    }
    created_at
  }
}
    `;

/**
 * __useTicketsQuery__
 *
 * To run a query within a React component, call `useTicketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useTicketsQuery(baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options);
      }
export function useTicketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketsQuery, TicketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(TicketsDocument, options);
        }
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>;
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>;
export type TicketsQueryResult = Apollo.QueryResult<TicketsQuery, TicketsQueryVariables>;
export const CreateTicketsDocument = gql`
    mutation createTickets($createTicketInput: TicketCreateInput!) {
  createTicket(createTicketInput: $createTicketInput) {
    id
    description
    machine {
      id
      name
      label
    }
    name
    photos
    status
    user {
      id
      name
    }
    created_at
  }
}
    `;
export type CreateTicketsMutationFn = Apollo.MutationFunction<CreateTicketsMutation, CreateTicketsMutationVariables>;

/**
 * __useCreateTicketsMutation__
 *
 * To run a mutation, you first call `useCreateTicketsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTicketsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTicketsMutation, { data, loading, error }] = useCreateTicketsMutation({
 *   variables: {
 *      createTicketInput: // value for 'createTicketInput'
 *   },
 * });
 */
export function useCreateTicketsMutation(baseOptions?: Apollo.MutationHookOptions<CreateTicketsMutation, CreateTicketsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTicketsMutation, CreateTicketsMutationVariables>(CreateTicketsDocument, options);
      }
export type CreateTicketsMutationHookResult = ReturnType<typeof useCreateTicketsMutation>;
export type CreateTicketsMutationResult = Apollo.MutationResult<CreateTicketsMutation>;
export type CreateTicketsMutationOptions = Apollo.BaseMutationOptions<CreateTicketsMutation, CreateTicketsMutationVariables>;
export const GetTicketDocument = gql`
    query getTicket($ticketId: Int!) {
  ticket(id: $ticketId) {
    id
    description
    machine {
      id
      label
      priority
      block {
        id
        name
      }
      section {
        id
        name
      }
    }
    name
    photos
    status
    updated_at
    created_at
    user {
      id
      name
    }
  }
}
    `;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;
export const TicketsCountDocument = gql`
    query ticketsCount($orderBy: TicketOrderByWithRelationInput, $skip: Float, $take: Float, $where: TicketWhereInput) {
  ticketsCount(orderBy: $orderBy, skip: $skip, take: $take, where: $where)
}
    `;

/**
 * __useTicketsCountQuery__
 *
 * To run a query within a React component, call `useTicketsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTicketsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTicketsCountQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTicketsCountQuery(baseOptions?: Apollo.QueryHookOptions<TicketsCountQuery, TicketsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TicketsCountQuery, TicketsCountQueryVariables>(TicketsCountDocument, options);
      }
export function useTicketsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TicketsCountQuery, TicketsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TicketsCountQuery, TicketsCountQueryVariables>(TicketsCountDocument, options);
        }
export type TicketsCountQueryHookResult = ReturnType<typeof useTicketsCountQuery>;
export type TicketsCountLazyQueryHookResult = ReturnType<typeof useTicketsCountLazyQuery>;
export type TicketsCountQueryResult = Apollo.QueryResult<TicketsCountQuery, TicketsCountQueryVariables>;
export const DeleteTicketDocument = gql`
    mutation deleteTicket($id: Int!) {
  removeTicket(id: $id) {
    id
  }
}
    `;
export type DeleteTicketMutationFn = Apollo.MutationFunction<DeleteTicketMutation, DeleteTicketMutationVariables>;

/**
 * __useDeleteTicketMutation__
 *
 * To run a mutation, you first call `useDeleteTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTicketMutation, { data, loading, error }] = useDeleteTicketMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTicketMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTicketMutation, DeleteTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTicketMutation, DeleteTicketMutationVariables>(DeleteTicketDocument, options);
      }
export type DeleteTicketMutationHookResult = ReturnType<typeof useDeleteTicketMutation>;
export type DeleteTicketMutationResult = Apollo.MutationResult<DeleteTicketMutation>;
export type DeleteTicketMutationOptions = Apollo.BaseMutationOptions<DeleteTicketMutation, DeleteTicketMutationVariables>;
export const UsersDocument = gql`
    query Users($where: UsersWhereInput, $offset: Int, $orderBy: UsersOrderByWithRelationInput, $limit: Int) {
  users(where: $where, offset: $offset, orderBy: $orderBy, limit: $limit) {
    id
    name
    role
    profile
    phone
    created_at
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UsersCountDocument = gql`
    query usersCount($where: UsersWhereInput, $orderBy: UsersOrderByWithRelationInput, $limit: Int, $offset: Int) {
  usersCount(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset)
}
    `;

/**
 * __useUsersCountQuery__
 *
 * To run a query within a React component, call `useUsersCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUsersCountQuery(baseOptions?: Apollo.QueryHookOptions<UsersCountQuery, UsersCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersCountQuery, UsersCountQueryVariables>(UsersCountDocument, options);
      }
export function useUsersCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersCountQuery, UsersCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersCountQuery, UsersCountQueryVariables>(UsersCountDocument, options);
        }
export type UsersCountQueryHookResult = ReturnType<typeof useUsersCountQuery>;
export type UsersCountLazyQueryHookResult = ReturnType<typeof useUsersCountLazyQuery>;
export type UsersCountQueryResult = Apollo.QueryResult<UsersCountQuery, UsersCountQueryVariables>;
export const UsersDropDownDocument = gql`
    query usersDropDown($where: UsersWhereInput, $orderBy: UsersOrderByWithRelationInput, $limit: Int, $offset: Int) {
  users(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset) {
    value: id
    name
    phone
  }
}
    `;

/**
 * __useUsersDropDownQuery__
 *
 * To run a query within a React component, call `useUsersDropDownQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersDropDownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersDropDownQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useUsersDropDownQuery(baseOptions?: Apollo.QueryHookOptions<UsersDropDownQuery, UsersDropDownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(UsersDropDownDocument, options);
      }
export function useUsersDropDownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersDropDownQuery, UsersDropDownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(UsersDropDownDocument, options);
        }
export type UsersDropDownQueryHookResult = ReturnType<typeof useUsersDropDownQuery>;
export type UsersDropDownLazyQueryHookResult = ReturnType<typeof useUsersDropDownLazyQuery>;
export type UsersDropDownQueryResult = Apollo.QueryResult<UsersDropDownQuery, UsersDropDownQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: UsersCreateInput!) {
  createUser(createUserInput: $createUserInput) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUsersDocument = gql`
    mutation deleteUsers($removeUserId: Int!) {
  removeUser(id: $removeUserId) {
    id
  }
}
    `;
export type DeleteUsersMutationFn = Apollo.MutationFunction<DeleteUsersMutation, DeleteUsersMutationVariables>;

/**
 * __useDeleteUsersMutation__
 *
 * To run a mutation, you first call `useDeleteUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsersMutation, { data, loading, error }] = useDeleteUsersMutation({
 *   variables: {
 *      removeUserId: // value for 'removeUserId'
 *   },
 * });
 */
export function useDeleteUsersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsersMutation, DeleteUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUsersMutation, DeleteUsersMutationVariables>(DeleteUsersDocument, options);
      }
export type DeleteUsersMutationHookResult = ReturnType<typeof useDeleteUsersMutation>;
export type DeleteUsersMutationResult = Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<DeleteUsersMutation, DeleteUsersMutationVariables>;