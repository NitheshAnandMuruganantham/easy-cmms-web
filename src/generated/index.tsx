import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  decrement?: InputMaybe<Scalars["BigInt"]>;
  divide?: InputMaybe<Scalars["BigInt"]>;
  increment?: InputMaybe<Scalars["BigInt"]>;
  multiply?: InputMaybe<Scalars["BigInt"]>;
  set?: InputMaybe<Scalars["BigInt"]>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type Block = {
  __typename?: "Block";
  Invoices?: Maybe<Array<Invoices>>;
  Items?: Maybe<Array<Items>>;
  Mailings?: Maybe<Array<Scalars["String"]>>;
  Maintenance?: Maybe<Array<Maintenance>>;
  Replacements?: Maybe<Array<Replacements>>;
  Reports?: Maybe<Array<Reports>>;
  Sections?: Maybe<Array<Sections>>;
  Ticket?: Maybe<Array<Ticket>>;
  Users?: Maybe<Array<Users>>;
  _count: BlockCount;
  block_settings?: Maybe<Array<Block_Settings>>;
  catagory?: Maybe<Array<Catagory>>;
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  location: Scalars["String"];
  machine_catagory?: Maybe<Array<Machine_Catagory>>;
  machines?: Maybe<Array<Machines>>;
  name: Scalars["String"];
  production_data?: Maybe<Array<Production_Data>>;
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  updated_at: Scalars["DateTime"];
};

export type BlockMachinesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MachinesOrderByWithAggregationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type BlockAvgAggregate = {
  __typename?: "BlockAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
};

export type BlockAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockCount = {
  __typename?: "BlockCount";
  Invoices: Scalars["Int"];
  Items: Scalars["Int"];
  Maintenance: Scalars["Int"];
  Replacements: Scalars["Int"];
  Reports: Scalars["Int"];
  Sections: Scalars["Int"];
  Ticket: Scalars["Int"];
  Users: Scalars["Int"];
  block_settings: Scalars["Int"];
  catagory: Scalars["Int"];
  invoice_items: Scalars["Int"];
  machine_catagory: Scalars["Int"];
  machines: Scalars["Int"];
  production_data: Scalars["Int"];
  routine_maintanances: Scalars["Int"];
};

export type BlockCountAggregate = {
  __typename?: "BlockCountAggregate";
  Mailings: Scalars["Int"];
  _all: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  location: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type BlockCountOrderByAggregateInput = {
  Mailings?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockCreateInput = {
  Invoices?: InputMaybe<InvoicesCreateNestedManyWithoutBlockInput>;
  Items?: InputMaybe<ItemsCreateNestedManyWithoutBlockInput>;
  Mailings?: InputMaybe<BlockCreateMailingsInput>;
  Maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutBlockInput>;
  Replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutBlockInput>;
  Reports?: InputMaybe<ReportsCreateNestedManyWithoutBlockInput>;
  Sections?: InputMaybe<SectionsCreateNestedManyWithoutBlockInput>;
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutBlockInput>;
  Users?: InputMaybe<UsersCreateNestedManyWithoutBlockInput>;
  block_settings?: InputMaybe<Block_SettingsCreateNestedManyWithoutBlockInput>;
  catagory?: InputMaybe<CatagoryCreateNestedManyWithoutBlockInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutBlockInput>;
  location: Scalars["String"];
  machine_catagory?: InputMaybe<Machine_CatagoryCreateNestedManyWithoutBlockInput>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutBlockInput>;
  name: Scalars["String"];
  production_data?: InputMaybe<Production_DataCreateNestedManyWithoutBlockInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutBlockInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type BlockCreateMailingsInput = {
  set: Array<Scalars["String"]>;
};

export type BlockMaxAggregate = {
  __typename?: "BlockMaxAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type BlockMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockMinAggregate = {
  __typename?: "BlockMinAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type BlockMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type BlockOrderByWithAggregationInput = {
  Mailings?: InputMaybe<SortOrder>;
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
  __typename?: "BlockSumAggregate";
  id?: Maybe<Scalars["BigInt"]>;
};

export type BlockSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BlockUpdateInput = {
  Invoices?: InputMaybe<InvoicesUpdateManyWithoutBlockNestedInput>;
  Items?: InputMaybe<ItemsUpdateManyWithoutBlockNestedInput>;
  Mailings?: InputMaybe<BlockUpdateMailingsInput>;
  Maintenance?: InputMaybe<MaintenanceUpdateManyWithoutBlockNestedInput>;
  Replacements?: InputMaybe<ReplacementsUpdateManyWithoutBlockNestedInput>;
  Reports?: InputMaybe<ReportsUpdateManyWithoutBlockNestedInput>;
  Sections?: InputMaybe<SectionsUpdateManyWithoutBlockNestedInput>;
  Ticket?: InputMaybe<TicketUpdateManyWithoutBlockNestedInput>;
  Users?: InputMaybe<UsersUpdateManyWithoutBlockNestedInput>;
  block_settings?: InputMaybe<Block_SettingsUpdateManyWithoutBlockNestedInput>;
  catagory?: InputMaybe<CatagoryUpdateManyWithoutBlockNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutBlockNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateManyWithoutBlockNestedInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutBlockNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  production_data?: InputMaybe<Production_DataUpdateManyWithoutBlockNestedInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutBlockNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlockUpdateMailingsInput = {
  push?: InputMaybe<Array<Scalars["String"]>>;
  set?: InputMaybe<Array<Scalars["String"]>>;
};

export type BlockWhereInput = {
  AND?: InputMaybe<Array<BlockWhereInput>>;
  Invoices?: InputMaybe<InvoicesListRelationFilter>;
  Items?: InputMaybe<ItemsListRelationFilter>;
  Mailings?: InputMaybe<StringNullableListFilter>;
  Maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  NOT?: InputMaybe<Array<BlockWhereInput>>;
  OR?: InputMaybe<Array<BlockWhereInput>>;
  Replacements?: InputMaybe<ReplacementsListRelationFilter>;
  Reports?: InputMaybe<ReportsListRelationFilter>;
  Sections?: InputMaybe<SectionsListRelationFilter>;
  Ticket?: InputMaybe<TicketListRelationFilter>;
  Users?: InputMaybe<UsersListRelationFilter>;
  block_settings?: InputMaybe<Block_SettingsListRelationFilter>;
  catagory?: InputMaybe<CatagoryListRelationFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  machine_catagory?: InputMaybe<Machine_CatagoryListRelationFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  production_data?: InputMaybe<Production_DataListRelationFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Block_SettingsAvgAggregate = {
  __typename?: "Block_settingsAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Block_SettingsCountAggregate = {
  __typename?: "Block_settingsCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
  value: Scalars["Int"];
};

export type Block_SettingsListRelationFilter = {
  every?: InputMaybe<Block_SettingsWhereInput>;
  none?: InputMaybe<Block_SettingsWhereInput>;
  some?: InputMaybe<Block_SettingsWhereInput>;
};

export type Block_SettingsMaxAggregate = {
  __typename?: "Block_settingsMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Block_SettingsMinAggregate = {
  __typename?: "Block_settingsMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Block_SettingsSumAggregate = {
  __typename?: "Block_settingsSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["Boolean"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type CatagoryAvgAggregate = {
  __typename?: "CatagoryAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type CatagoryCount = {
  __typename?: "CatagoryCount";
  items: Scalars["Int"];
};

export type CatagoryCountAggregate = {
  __typename?: "CatagoryCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type CatagoryListRelationFilter = {
  every?: InputMaybe<CatagoryWhereInput>;
  none?: InputMaybe<CatagoryWhereInput>;
  some?: InputMaybe<CatagoryWhereInput>;
};

export type CatagoryMaxAggregate = {
  __typename?: "CatagoryMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type CatagoryMinAggregate = {
  __typename?: "CatagoryMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type CatagoryRelationFilter = {
  is?: InputMaybe<CatagoryWhereInput>;
  isNot?: InputMaybe<CatagoryWhereInput>;
};

export type CatagorySumAggregate = {
  __typename?: "CatagorySumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
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

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
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
  decrement?: InputMaybe<Scalars["Float"]>;
  divide?: InputMaybe<Scalars["Float"]>;
  increment?: InputMaybe<Scalars["Float"]>;
  multiply?: InputMaybe<Scalars["Float"]>;
  set?: InputMaybe<Scalars["Float"]>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars["Int"]>;
  divide?: InputMaybe<Scalars["Int"]>;
  increment?: InputMaybe<Scalars["Int"]>;
  multiply?: InputMaybe<Scalars["Int"]>;
  set?: InputMaybe<Scalars["Int"]>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type Invoice_ItemsAvgAggregate = {
  __typename?: "Invoice_itemsAvgAggregate";
  amount?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  invoice_id?: Maybe<Scalars["Float"]>;
  item_id?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
  unit_price?: Maybe<Scalars["Float"]>;
};

export type Invoice_ItemsCountAggregate = {
  __typename?: "Invoice_itemsCountAggregate";
  _all: Scalars["Int"];
  amount: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  invoice_id: Scalars["Int"];
  item_id: Scalars["Int"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type Invoice_ItemsListRelationFilter = {
  every?: InputMaybe<Invoice_ItemsWhereInput>;
  none?: InputMaybe<Invoice_ItemsWhereInput>;
  some?: InputMaybe<Invoice_ItemsWhereInput>;
};

export type Invoice_ItemsMaxAggregate = {
  __typename?: "Invoice_itemsMaxAggregate";
  amount?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  invoice_id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  quantity?: Maybe<Scalars["Float"]>;
  unit_price?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsMinAggregate = {
  __typename?: "Invoice_itemsMinAggregate";
  amount?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  invoice_id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  quantity?: Maybe<Scalars["Float"]>;
  unit_price?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsSumAggregate = {
  __typename?: "Invoice_itemsSumAggregate";
  amount?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  invoice_id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  quantity?: Maybe<Scalars["Float"]>;
  unit_price?: Maybe<Scalars["Float"]>;
};

export type Invoices = {
  __typename?: "Invoices";
  _count: InvoicesCount;
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  invoice_date: Scalars["DateTime"];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  number: Scalars["String"];
  total: Scalars["Float"];
  updated_at: Scalars["DateTime"];
};

export type InvoicesInvoice_ItemsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Invoice_ItemsOrderByRelationAggregateInput>;
  where?: InputMaybe<Invoice_ItemsWhereInput>;
};

export type InvoicesAvgAggregate = {
  __typename?: "InvoicesAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

export type InvoicesCount = {
  __typename?: "InvoicesCount";
  invoice_items: Scalars["Int"];
};

export type InvoicesCountAggregate = {
  __typename?: "InvoicesCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  invoice_date: Scalars["Int"];
  number: Scalars["Int"];
  total: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type InvoicesCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_date: Scalars["DateTime"];
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutInvoiceInput>;
  number: Scalars["String"];
  total: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoicesCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_date: Scalars["DateTime"];
  number: Scalars["String"];
  total: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoicesCreateManyBlockInputEnvelope = {
  data: Array<InvoicesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type InvoicesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoicesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<InvoicesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<InvoicesCreateManyBlockInputEnvelope>;
};

export type InvoicesCreateNestedOneWithoutInvoice_ItemsInput = {
  connect?: InputMaybe<InvoicesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InvoicesCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<InvoicesCreateWithoutInvoice_ItemsInput>;
};

export type InvoicesCreateOrConnectWithoutBlockInput = {
  create: InvoicesCreateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesCreateOrConnectWithoutInvoice_ItemsInput = {
  create: InvoicesCreateWithoutInvoice_ItemsInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_date: Scalars["DateTime"];
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutInvoiceInput>;
  number: Scalars["String"];
  total: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoicesCreateWithoutInvoice_ItemsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_date: Scalars["DateTime"];
  number: Scalars["String"];
  total: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type InvoicesListRelationFilter = {
  every?: InputMaybe<InvoicesWhereInput>;
  none?: InputMaybe<InvoicesWhereInput>;
  some?: InputMaybe<InvoicesWhereInput>;
};

export type InvoicesMaxAggregate = {
  __typename?: "InvoicesMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  invoice_date?: Maybe<Scalars["DateTime"]>;
  number?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type InvoicesMinAggregate = {
  __typename?: "InvoicesMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  invoice_date?: Maybe<Scalars["DateTime"]>;
  number?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export enum InvoicesOrderByRelevanceFieldEnum {
  Number = "number",
}

export type InvoicesOrderByRelevanceInput = {
  fields: Array<InvoicesOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type InvoicesOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<InvoicesOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invoice_date?: InputMaybe<SortOrder>;
  invoice_items?: InputMaybe<Invoice_ItemsOrderByRelationAggregateInput>;
  number?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type InvoicesRelationFilter = {
  is?: InputMaybe<InvoicesWhereInput>;
  isNot?: InputMaybe<InvoicesWhereInput>;
};

export type InvoicesScalarWhereInput = {
  AND?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  NOT?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  OR?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_date?: InputMaybe<DateTimeFilter>;
  number?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type InvoicesSumAggregate = {
  __typename?: "InvoicesSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  total?: Maybe<Scalars["Float"]>;
};

export type InvoicesUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutInvoiceNestedInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateManyWithWhereWithoutBlockInput = {
  data: InvoicesUpdateManyMutationInput;
  where: InvoicesScalarWhereInput;
};

export type InvoicesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InvoicesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<InvoicesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<InvoicesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InvoicesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  set?: InputMaybe<Array<InvoicesWhereUniqueInput>>;
  update?: InputMaybe<Array<InvoicesUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<InvoicesUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<InvoicesUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput = {
  connect?: InputMaybe<InvoicesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InvoicesCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<InvoicesCreateWithoutInvoice_ItemsInput>;
  update?: InputMaybe<InvoicesUpdateWithoutInvoice_ItemsInput>;
  upsert?: InputMaybe<InvoicesUpsertWithoutInvoice_ItemsInput>;
};

export type InvoicesUpdateWithWhereUniqueWithoutBlockInput = {
  data: InvoicesUpdateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutInvoiceNestedInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpdateWithoutInvoice_ItemsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  total?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InvoicesUpsertWithWhereUniqueWithoutBlockInput = {
  create: InvoicesCreateWithoutBlockInput;
  update: InvoicesUpdateWithoutBlockInput;
  where: InvoicesWhereUniqueInput;
};

export type InvoicesUpsertWithoutInvoice_ItemsInput = {
  create: InvoicesCreateWithoutInvoice_ItemsInput;
  update: InvoicesUpdateWithoutInvoice_ItemsInput;
};

export type InvoicesWhereInput = {
  AND?: InputMaybe<Array<InvoicesWhereInput>>;
  NOT?: InputMaybe<Array<InvoicesWhereInput>>;
  OR?: InputMaybe<Array<InvoicesWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_date?: InputMaybe<DateTimeFilter>;
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  number?: InputMaybe<StringFilter>;
  total?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type InvoicesWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type ItemCatagory = {
  __typename?: "ItemCatagory";
  _count: CatagoryCount;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  items?: Maybe<Array<Items>>;
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type ItemCatagoryItemsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemsOrderByWithAggregationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};

export type ItemCatagoryAvgAggregate = {
  __typename?: "ItemCatagoryAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
};

export type ItemCatagoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCount = {
  __typename?: "ItemCatagoryCount";
  items: Scalars["Int"];
};

export type ItemCatagoryCountAggregate = {
  __typename?: "ItemCatagoryCountAggregate";
  _all: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type ItemCatagoryCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  items?: InputMaybe<ItemsCreateNestedManyWithoutItemCatagoryInput>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemCatagoryMaxAggregate = {
  __typename?: "ItemCatagoryMaxAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type ItemCatagoryMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type ItemCatagoryMinAggregate = {
  __typename?: "ItemCatagoryMinAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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
  __typename?: "ItemCatagorySumAggregate";
  id?: Maybe<Scalars["String"]>;
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
  __typename?: "Items";
  _count: ItemsCount;
  block: Block;
  block_id: Scalars["BigInt"];
  catagory: Catagory;
  catagory_id: Scalars["BigInt"];
  code: Scalars["String"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  invoice_items?: Maybe<Array<Invoice_Items>>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements?: Maybe<Array<Replacements>>;
  unit_price: Scalars["Float"];
  updated_at: Scalars["DateTime"];
};

export type ItemsReplacementsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};

export type ItemsAvgAggregate = {
  __typename?: "ItemsAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  catagory_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
  unit_price?: Maybe<Scalars["Float"]>;
};

export type ItemsAvgOrderByAggregateInput = {
  catagory_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  unit_price?: InputMaybe<SortOrder>;
};

export type ItemsCount = {
  __typename?: "ItemsCount";
  invoice_items: Scalars["Int"];
  replacements: Scalars["Int"];
};

export type ItemsCountAggregate = {
  __typename?: "ItemsCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  catagory_id: Scalars["Int"];
  code: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Int"];
  updated_at: Scalars["Int"];
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
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateManyBlockInput = {
  catagory_id: Scalars["BigInt"];
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateManyBlockInputEnvelope = {
  data: Array<ItemsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ItemsCreateManyCatagoryInput = {
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateManyCatagoryInputEnvelope = {
  data: Array<ItemsCreateManyCatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ItemsCreateManyItemCatagoryInput = {
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateManyItemCatagoryInputEnvelope = {
  data: Array<ItemsCreateManyItemCatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ItemsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ItemsCreateManyBlockInputEnvelope>;
};

export type ItemsCreateNestedManyWithoutCatagoryInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyCatagoryInputEnvelope>;
};

export type ItemsCreateNestedManyWithoutItemCatagoryInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ItemsCreateOrConnectWithoutItemCatagoryInput>
  >;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
};

export type ItemsCreateNestedOneWithoutInvoice_ItemsInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<ItemsCreateWithoutInvoice_ItemsInput>;
};

export type ItemsCreateNestedOneWithoutReplacementsInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
};

export type ItemsCreateOrConnectWithoutBlockInput = {
  create: ItemsCreateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutCatagoryInput = {
  create: ItemsCreateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutInvoice_ItemsInput = {
  create: ItemsCreateWithoutInvoice_ItemsInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateOrConnectWithoutReplacementsInput = {
  create: ItemsCreateWithoutReplacementsInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsCreateWithoutBlockInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateWithoutCatagoryInput = {
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateWithoutInvoice_ItemsInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateWithoutItemCatagoryInput = {
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  replacements_scheduled?: InputMaybe<ReplacementsCreateNestedManyWithoutItemsInput>;
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsCreateWithoutReplacementsInput = {
  catagory: CatagoryCreateNestedOneWithoutItemsInput;
  code: Scalars["String"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_items?: InputMaybe<Invoice_ItemsCreateNestedManyWithoutItemInput>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ItemsListRelationFilter = {
  every?: InputMaybe<ItemsWhereInput>;
  none?: InputMaybe<ItemsWhereInput>;
  some?: InputMaybe<ItemsWhereInput>;
};

export type ItemsMaxAggregate = {
  __typename?: "ItemsMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  catagory_id?: Maybe<Scalars["BigInt"]>;
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  unit_price?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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
  __typename?: "ItemsMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  catagory_id?: Maybe<Scalars["BigInt"]>;
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  unit_price?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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
  __typename?: "ItemsSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  catagory_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  quantity?: Maybe<Scalars["Int"]>;
  unit_price?: Maybe<Scalars["Float"]>;
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
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
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

export type ItemsUpdateManyWithWhereWithoutBlockInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithWhereWithoutCatagoryInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithWhereWithoutItemCatagoryInput = {
  data: ItemsUpdateManyMutationInput;
  where: ItemsScalarWhereInput;
};

export type ItemsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ItemsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type ItemsUpdateManyWithoutCatagoryNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ItemsCreateOrConnectWithoutCatagoryInput>>;
  create?: InputMaybe<Array<ItemsCreateWithoutCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyCatagoryInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<Array<ItemsUpdateWithWhereUniqueWithoutCatagoryInput>>;
  updateMany?: InputMaybe<Array<ItemsUpdateManyWithWhereWithoutCatagoryInput>>;
  upsert?: InputMaybe<Array<ItemsUpsertWithWhereUniqueWithoutCatagoryInput>>;
};

export type ItemsUpdateManyWithoutItemCatagoryNestedInput = {
  connect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ItemsCreateOrConnectWithoutItemCatagoryInput>
  >;
  create?: InputMaybe<Array<ItemsCreateWithoutItemCatagoryInput>>;
  createMany?: InputMaybe<ItemsCreateManyItemCatagoryInputEnvelope>;
  delete?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<ItemsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput>
  >;
  updateMany?: InputMaybe<
    Array<ItemsUpdateManyWithWhereWithoutItemCatagoryInput>
  >;
  upsert?: InputMaybe<
    Array<ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput>
  >;
};

export type ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutInvoice_ItemsInput>;
  create?: InputMaybe<ItemsCreateWithoutInvoice_ItemsInput>;
  update?: InputMaybe<ItemsUpdateWithoutInvoice_ItemsInput>;
  upsert?: InputMaybe<ItemsUpsertWithoutInvoice_ItemsInput>;
};

export type ItemsUpdateOneRequiredWithoutReplacementsNestedInput = {
  connect?: InputMaybe<ItemsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ItemsCreateOrConnectWithoutReplacementsInput>;
  create?: InputMaybe<ItemsCreateWithoutReplacementsInput>;
  update?: InputMaybe<ItemsUpdateWithoutReplacementsInput>;
  upsert?: InputMaybe<ItemsUpsertWithoutReplacementsInput>;
};

export type ItemsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ItemsUpdateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithWhereUniqueWithoutCatagoryInput = {
  data: ItemsUpdateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithWhereUniqueWithoutItemCatagoryInput = {
  data: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpdateWithoutBlockInput = {
  catagory?: InputMaybe<CatagoryUpdateOneRequiredWithoutItemsNestedInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutCatagoryInput = {
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  replacements?: InputMaybe<ReplacementsUpdateManyWithoutItemsNestedInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpdateWithoutInvoice_ItemsInput = {
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
  invoice_items?: InputMaybe<Invoice_ItemsUpdateManyWithoutItemNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ItemsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ItemsCreateWithoutBlockInput;
  update: ItemsUpdateWithoutBlockInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithWhereUniqueWithoutCatagoryInput = {
  create: ItemsCreateWithoutCatagoryInput;
  update: ItemsUpdateWithoutCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithWhereUniqueWithoutItemCatagoryInput = {
  create: ItemsCreateWithoutItemCatagoryInput;
  update: ItemsUpdateWithoutItemCatagoryInput;
  where: ItemsWhereUniqueInput;
};

export type ItemsUpsertWithoutInvoice_ItemsInput = {
  create: ItemsCreateWithoutInvoice_ItemsInput;
  update: ItemsUpdateWithoutInvoice_ItemsInput;
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
  invoice_items?: InputMaybe<Invoice_ItemsListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  replacements?: InputMaybe<ReplacementsListRelationFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type ItemsWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars["JSON"]>;
  array_ends_with?: InputMaybe<Scalars["JSON"]>;
  array_starts_with?: InputMaybe<Scalars["JSON"]>;
  equals?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<Scalars["JSON"]>;
  path?: InputMaybe<Array<Scalars["String"]>>;
  string_contains?: InputMaybe<Scalars["String"]>;
  string_ends_with?: InputMaybe<Scalars["String"]>;
  string_starts_with?: InputMaybe<Scalars["String"]>;
};

export type Machine_CatagoryAvgAggregate = {
  __typename?: "Machine_catagoryAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type Machine_CatagoryCount = {
  __typename?: "Machine_catagoryCount";
  machines: Scalars["Int"];
};

export type Machine_CatagoryCountAggregate = {
  __typename?: "Machine_catagoryCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type Machine_CatagoryListRelationFilter = {
  every?: InputMaybe<Machine_CatagoryWhereInput>;
  none?: InputMaybe<Machine_CatagoryWhereInput>;
  some?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type Machine_CatagoryMaxAggregate = {
  __typename?: "Machine_catagoryMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Machine_CatagoryMinAggregate = {
  __typename?: "Machine_catagoryMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Machine_CatagoryRelationFilter = {
  is?: InputMaybe<Machine_CatagoryWhereInput>;
  isNot?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type Machine_CatagorySumAggregate = {
  __typename?: "Machine_catagorySumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
};

export type Machines = {
  __typename?: "Machines";
  Ticket?: Maybe<Array<Ticket>>;
  _count: MachinesCount;
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  label: Scalars["String"];
  machine_catagory: Machine_Catagory;
  machine_catagory_id: Scalars["BigInt"];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile: Scalars["JSON"];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  section: Sections;
  section_id: Scalars["BigInt"];
  updated_at: Scalars["DateTime"];
};

export type MachinesMaintenanceArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type MachinesAvgAggregate = {
  __typename?: "MachinesAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  machine_catagory_id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
  section_id?: Maybe<Scalars["Float"]>;
};

export type MachinesAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesCount = {
  __typename?: "MachinesCount";
  Ticket: Scalars["Int"];
  maintenance: Scalars["Int"];
  routine_maintanances: Scalars["Int"];
};

export type MachinesCountAggregate = {
  __typename?: "MachinesCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  label: Scalars["Int"];
  machine_catagory_id: Scalars["Int"];
  name: Scalars["Int"];
  priority: Scalars["Int"];
  profile: Scalars["Int"];
  section_id: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type MachinesCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  profile?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesCreateInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory_id: Scalars["BigInt"];
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  section_id: Scalars["BigInt"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateManyBlockInputEnvelope = {
  data: Array<MachinesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MachinesCreateManyMachine_CatagoryInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  section_id: Scalars["BigInt"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateManyMachine_CatagoryInputEnvelope = {
  data: Array<MachinesCreateManyMachine_CatagoryInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MachinesCreateManySectionInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory_id: Scalars["BigInt"];
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateManySectionInputEnvelope = {
  data: Array<MachinesCreateManySectionInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MachinesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MachinesCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<MachinesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MachinesCreateManyBlockInputEnvelope>;
};

export type MachinesCreateNestedManyWithoutMachine_CatagoryInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MachinesCreateOrConnectWithoutMachine_CatagoryInput>
  >;
  create?: InputMaybe<Array<MachinesCreateWithoutMachine_CatagoryInput>>;
  createMany?: InputMaybe<MachinesCreateManyMachine_CatagoryInputEnvelope>;
};

export type MachinesCreateNestedManyWithoutSectionInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MachinesCreateOrConnectWithoutSectionInput>
  >;
  create?: InputMaybe<Array<MachinesCreateWithoutSectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySectionInputEnvelope>;
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

export type MachinesCreateOrConnectWithoutMachine_CatagoryInput = {
  create: MachinesCreateWithoutMachine_CatagoryInput;
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

export type MachinesCreateOrConnectWithoutSectionInput = {
  create: MachinesCreateWithoutSectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateOrConnectWithoutTicketInput = {
  create: MachinesCreateWithoutTicketInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesCreateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateWithoutMachine_CatagoryInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateWithoutSectionInput = {
  Ticket?: InputMaybe<TicketCreateNestedManyWithoutMachinesInput>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesCreateWithoutTicketInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  label: Scalars["String"];
  machine_catagory: Machine_CatagoryCreateNestedOneWithoutMachinesInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutMachinesInput>;
  name: Scalars["String"];
  priority: Scalars["Int"];
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutMeachineInput>;
  section: SectionsCreateNestedOneWithoutMachinesInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MachinesListRelationFilter = {
  every?: InputMaybe<MachinesWhereInput>;
  none?: InputMaybe<MachinesWhereInput>;
  some?: InputMaybe<MachinesWhereInput>;
};

export type MachinesMaxAggregate = {
  __typename?: "MachinesMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  label?: Maybe<Scalars["String"]>;
  machine_catagory_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  section_id?: Maybe<Scalars["BigInt"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MachinesMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type MachinesMinAggregate = {
  __typename?: "MachinesMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  label?: Maybe<Scalars["String"]>;
  machine_catagory_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  section_id?: Maybe<Scalars["BigInt"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MachinesMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
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
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
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
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  machine_catagory_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  priority?: InputMaybe<IntFilter>;
  profile?: InputMaybe<JsonFilter>;
  section_id?: InputMaybe<BigIntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type MachinesSumAggregate = {
  __typename?: "MachinesSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_catagory_id?: Maybe<Scalars["BigInt"]>;
  priority?: Maybe<Scalars["Int"]>;
  section_id?: Maybe<Scalars["BigInt"]>;
};

export type MachinesSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  machine_catagory_id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  section_id?: InputMaybe<SortOrder>;
};

export type MachinesUpdateInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
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
  profile?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateManyWithWhereWithoutBlockInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithWhereWithoutMachine_CatagoryInput = {
  data: MachinesUpdateManyMutationInput;
  where: MachinesScalarWhereInput;
};

export type MachinesUpdateManyWithWhereWithoutSectionInput = {
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

export type MachinesUpdateManyWithoutMachine_CatagoryNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MachinesCreateOrConnectWithoutMachine_CatagoryInput>
  >;
  create?: InputMaybe<Array<MachinesCreateWithoutMachine_CatagoryInput>>;
  createMany?: InputMaybe<MachinesCreateManyMachine_CatagoryInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MachinesUpdateWithWhereUniqueWithoutMachine_CatagoryInput>
  >;
  updateMany?: InputMaybe<
    Array<MachinesUpdateManyWithWhereWithoutMachine_CatagoryInput>
  >;
  upsert?: InputMaybe<
    Array<MachinesUpsertWithWhereUniqueWithoutMachine_CatagoryInput>
  >;
};

export type MachinesUpdateManyWithoutSectionNestedInput = {
  connect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MachinesCreateOrConnectWithoutSectionInput>
  >;
  create?: InputMaybe<Array<MachinesCreateWithoutSectionInput>>;
  createMany?: InputMaybe<MachinesCreateManySectionInputEnvelope>;
  delete?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MachinesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  set?: InputMaybe<Array<MachinesWhereUniqueInput>>;
  update?: InputMaybe<Array<MachinesUpdateWithWhereUniqueWithoutSectionInput>>;
  updateMany?: InputMaybe<
    Array<MachinesUpdateManyWithWhereWithoutSectionInput>
  >;
  upsert?: InputMaybe<Array<MachinesUpsertWithWhereUniqueWithoutSectionInput>>;
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

export type MachinesUpdateWithWhereUniqueWithoutMachine_CatagoryInput = {
  data: MachinesUpdateWithoutMachine_CatagoryInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithWhereUniqueWithoutSectionInput = {
  data: MachinesUpdateWithoutSectionInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpdateWithoutBlockInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutMachine_CatagoryInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutMaintenanceInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutRoutine_MaintanancesInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutSectionInput = {
  Ticket?: InputMaybe<TicketUpdateManyWithoutMachinesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpdateWithoutTicketInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  label?: InputMaybe<StringFieldUpdateOperationsInput>;
  machine_catagory?: InputMaybe<Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutMachinesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<IntFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutMeachineNestedInput>;
  section?: InputMaybe<SectionsUpdateOneRequiredWithoutMachinesNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MachinesUpsertWithWhereUniqueWithoutBlockInput = {
  create: MachinesCreateWithoutBlockInput;
  update: MachinesUpdateWithoutBlockInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithWhereUniqueWithoutMachine_CatagoryInput = {
  create: MachinesCreateWithoutMachine_CatagoryInput;
  update: MachinesUpdateWithoutMachine_CatagoryInput;
  where: MachinesWhereUniqueInput;
};

export type MachinesUpsertWithWhereUniqueWithoutSectionInput = {
  create: MachinesCreateWithoutSectionInput;
  update: MachinesUpdateWithoutSectionInput;
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
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  label?: InputMaybe<StringFilter>;
  machine_catagory?: InputMaybe<Machine_CatagoryRelationFilter>;
  machine_catagory_id?: InputMaybe<BigIntFilter>;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Machines_ItemsAvgAggregate = {
  __typename?: "Machines_itemsAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  item_id?: Maybe<Scalars["Float"]>;
  machine_id?: Maybe<Scalars["Float"]>;
};

export type Machines_ItemsCountAggregate = {
  __typename?: "Machines_itemsCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  id: Scalars["Int"];
  item_id: Scalars["Int"];
  machine_id: Scalars["Int"];
};

export type Machines_ItemsMaxAggregate = {
  __typename?: "Machines_itemsMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
};

export type Machines_ItemsMinAggregate = {
  __typename?: "Machines_itemsMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
};

export type Machines_ItemsSumAggregate = {
  __typename?: "Machines_itemsSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
};

export type Maintenance = {
  __typename?: "Maintenance";
  _count: MaintenanceCount;
  assigned?: Maybe<Scalars["Boolean"]>;
  assignee: Users;
  assignee_id: Scalars["BigInt"];
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  elapsed?: Maybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id: Scalars["BigInt"];
  machine: Machines;
  machine_id: Scalars["BigInt"];
  machines: Machines;
  metadata: Scalars["JSON"];
  name: Scalars["String"];
  photo?: Maybe<Scalars["String"]>;
  replacements?: Maybe<Array<Replacements>>;
  reports?: Maybe<Array<Reports>>;
  resolved: Scalars["Boolean"];
  ticket?: Maybe<Ticket>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at: Scalars["DateTime"];
};

export type MaintenanceAvgAggregate = {
  __typename?: "MaintenanceAvgAggregate";
  assignee_id?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  machine_id?: Maybe<Scalars["Float"]>;
};

export type MaintenanceCount = {
  __typename?: "MaintenanceCount";
  replacements: Scalars["Int"];
  reports: Scalars["Int"];
};

export type MaintenanceCountAggregate = {
  __typename?: "MaintenanceCountAggregate";
  _all: Scalars["Int"];
  assignee_id: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  description: Scalars["Int"];
  elapsed: Scalars["Int"];
  from: Scalars["Int"];
  id: Scalars["Int"];
  machine_id: Scalars["Int"];
  metadata: Scalars["Int"];
  name: Scalars["Int"];
  photo: Scalars["Int"];
  resolved: Scalars["Int"];
  to: Scalars["Int"];
  un_planned: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type MaintenanceCreateInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machine_id: Scalars["BigInt"];
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  resolved: Scalars["Boolean"];
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateManyAssigneeInputEnvelope = {
  data: Array<MaintenanceCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MaintenanceCreateManyBlockInput = {
  assignee_id: Scalars["BigInt"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machine_id: Scalars["BigInt"];
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  resolved: Scalars["Boolean"];
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateManyBlockInputEnvelope = {
  data: Array<MaintenanceCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MaintenanceCreateManyMachinesInput = {
  assignee_id: Scalars["BigInt"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  resolved: Scalars["Boolean"];
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateManyMachinesInputEnvelope = {
  data: Array<MaintenanceCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type MaintenanceCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
};

export type MaintenanceCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<MaintenanceCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyBlockInputEnvelope>;
};

export type MaintenanceCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutMachinesInput>
  >;
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

export type MaintenanceCreateOrConnectWithoutBlockInput = {
  create: MaintenanceCreateWithoutBlockInput;
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
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateWithoutBlockInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateWithoutMachinesInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateWithoutReplacementsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateWithoutReportsInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  ticket?: InputMaybe<TicketCreateNestedOneWithoutMaintenanceInput>;
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceCreateWithoutTicketInput = {
  assignee: UsersCreateNestedOneWithoutMaintenanceInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  elapsed?: InputMaybe<Scalars["DateTime"]>;
  from: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutMaintenanceInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  photo?: InputMaybe<Scalars["String"]>;
  replacements?: InputMaybe<ReplacementsCreateNestedManyWithoutMaintenanceInput>;
  reports?: InputMaybe<ReportsCreateNestedManyWithoutMaintenanceInput>;
  resolved: Scalars["Boolean"];
  to: Scalars["DateTime"];
  un_planned: Scalars["Boolean"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type MaintenanceListRelationFilter = {
  every?: InputMaybe<MaintenanceWhereInput>;
  none?: InputMaybe<MaintenanceWhereInput>;
  some?: InputMaybe<MaintenanceWhereInput>;
};

export type MaintenanceMaxAggregate = {
  __typename?: "MaintenanceMaxAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  elapsed?: Maybe<Scalars["DateTime"]>;
  from?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  resolved?: Maybe<Scalars["Boolean"]>;
  to?: Maybe<Scalars["DateTime"]>;
  un_planned?: Maybe<Scalars["Boolean"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MaintenanceMinAggregate = {
  __typename?: "MaintenanceMinAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  elapsed?: Maybe<Scalars["DateTime"]>;
  from?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Scalars["String"]>;
  resolved?: Maybe<Scalars["Boolean"]>;
  to?: Maybe<Scalars["DateTime"]>;
  un_planned?: Maybe<Scalars["Boolean"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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
  __typename?: "MaintenanceSumAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
};

export type MaintenanceUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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

export type MaintenanceUpdateManyWithWhereWithoutBlockInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithWhereWithoutMachinesInput = {
  data: MaintenanceUpdateManyMutationInput;
  where: MaintenanceScalarWhereInput;
};

export type MaintenanceUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<MaintenanceCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput>
  >;
  updateMany?: InputMaybe<
    Array<MaintenanceUpdateManyWithWhereWithoutAssigneeInput>
  >;
  upsert?: InputMaybe<
    Array<MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput>
  >;
};

export type MaintenanceUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<MaintenanceCreateWithoutBlockInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<Array<MaintenanceUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<
    Array<MaintenanceUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<Array<MaintenanceUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type MaintenanceUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<MaintenanceCreateOrConnectWithoutMachinesInput>
  >;
  create?: InputMaybe<Array<MaintenanceCreateWithoutMachinesInput>>;
  createMany?: InputMaybe<MaintenanceCreateManyMachinesInputEnvelope>;
  delete?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MaintenanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  set?: InputMaybe<Array<MaintenanceWhereUniqueInput>>;
  update?: InputMaybe<
    Array<MaintenanceUpdateWithWhereUniqueWithoutMachinesInput>
  >;
  updateMany?: InputMaybe<
    Array<MaintenanceUpdateManyWithWhereWithoutMachinesInput>
  >;
  upsert?: InputMaybe<
    Array<MaintenanceUpsertWithWhereUniqueWithoutMachinesInput>
  >;
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
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<MaintenanceUpdateWithoutTicketInput>;
  upsert?: InputMaybe<MaintenanceUpsertWithoutTicketInput>;
};

export type MaintenanceUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: MaintenanceUpdateWithoutAssigneeInput;
  where: MaintenanceWhereUniqueInput;
};

export type MaintenanceUpdateWithWhereUniqueWithoutBlockInput = {
  data: MaintenanceUpdateWithoutBlockInput;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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

export type MaintenanceUpdateWithoutBlockInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutMaintenanceNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  elapsed?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  from?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateOneRequiredWithoutMaintenanceNestedInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
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

export type MaintenanceUpsertWithWhereUniqueWithoutBlockInput = {
  create: MaintenanceCreateWithoutBlockInput;
  update: MaintenanceUpdateWithoutBlockInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createBlock: Block;
  createInvoice: Invoices;
  createItem: Items;
  createItemCatagory: ItemCatagory;
  createMachine: Machines;
  createMachineCategory: Machine_Catagory;
  createMaintanance: Maintenance;
  createProduction: Production_Data;
  createReplacement: Replacements;
  createReport: Reports;
  createRoutineMaintanance: Routine_Maintanances;
  createSection: Section;
  createTicket: Ticket;
  createUser: Users;
  removeBlock: Block;
  removeInvoices: Invoices;
  removeItem: Items;
  removeItemCatagory: ItemCatagory;
  removeMachine: Machines;
  removeMachineCatagories: Machine_Catagory;
  removeMaintanance: Maintenance;
  removeProductionData: Production_Data;
  removeReplacement: Replacements;
  removeReport: Reports;
  removeRoutineMaintanance: Routine_Maintanances;
  removeSection: Section;
  removeTicket: Ticket;
  removeUser: Users;
  updateBlock: Block;
  updateInvoices: Invoices;
  updateItem: Items;
  updateItemCatagory: ItemCatagory;
  updateMachine: Machines;
  updateMachineCatagories: Machine_Catagory;
  updateMaintanance: Maintenance;
  updateProduction: Production_Data;
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

export type MutationCreateInvoiceArgs = {
  createInvoiceInput: InvoicesCreateInput;
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

export type MutationCreateMachineCategoryArgs = {
  createCategoryInput: Machine_CatagoryCreateWithoutMachinesInput;
};

export type MutationCreateMaintananceArgs = {
  createMaintananceInput: MaintenanceCreateInput;
};

export type MutationCreateProductionArgs = {
  createProductionInput: Production_DataCreateInput;
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
  createSectionInput: SectionCreateWithoutMachinesInput;
};

export type MutationCreateTicketArgs = {
  createTicketInput: TicketCreateInput;
};

export type MutationCreateUserArgs = {
  createUserInput: UsersCreateInput;
};

export type MutationRemoveBlockArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveInvoicesArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveItemArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveItemCatagoryArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveMachineArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveMachineCatagoriesArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveMaintananceArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveProductionDataArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveReplacementArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveReportArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveRoutineMaintananceArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveSectionArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveTicketArgs = {
  id: Scalars["Int"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["Int"];
};

export type MutationUpdateBlockArgs = {
  id: Scalars["Int"];
  updateBlockInput: BlockUpdateInput;
};

export type MutationUpdateInvoicesArgs = {
  id: Scalars["Int"];
  updateInvoiceInput: InvoicesUpdateInput;
};

export type MutationUpdateItemArgs = {
  id: Scalars["Int"];
  updateItemInput: ItemsUpdateInput;
};

export type MutationUpdateItemCatagoryArgs = {
  id: Scalars["Int"];
  updateItemCatagoryInput: ItemCatagoryUpdateInput;
};

export type MutationUpdateMachineArgs = {
  id: Scalars["Int"];
  updateMachineInput: MachinesUpdateInput;
};

export type MutationUpdateMachineCatagoriesArgs = {
  data: Machine_CatagoryUpdateOneWithoutMachinesNestedInput;
  id: Scalars["Int"];
};

export type MutationUpdateMaintananceArgs = {
  id: Scalars["Int"];
  updateMaintananceInput: MaintenanceUpdateInput;
};

export type MutationUpdateProductionArgs = {
  id: Scalars["Int"];
  updateProductionInput: Production_DataUpdateInput;
};

export type MutationUpdateReplacementArgs = {
  id: Scalars["Int"];
  updateReplacementInput: ReplacementsUpdateInput;
};

export type MutationUpdateReportArgs = {
  id: Scalars["Int"];
  updateReportInput: ReportsUpdateInput;
};

export type MutationUpdateRoutineMaintananceArgs = {
  id: Scalars["Int"];
  updateRoutineMaintananceInput: Routine_MaintanancesUpdateInput;
};

export type MutationUpdateSectionArgs = {
  id: Scalars["Int"];
  updateSectionInput: SectionUpdateWithoutMachinesInput;
};

export type MutationUpdateTicketArgs = {
  id: Scalars["Int"];
  updateTicketInput: TicketUpdateInput;
};

export type MutationUpdateUserArgs = {
  id: Scalars["Int"];
  updateUserInput: UsersUpdateInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
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
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["DateTime"]>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type Production_DataAvgAggregate = {
  __typename?: "Production_dataAvgAggregate";
  blockId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updated_by?: Maybe<Scalars["Float"]>;
};

export type Production_DataCountAggregate = {
  __typename?: "Production_dataCountAggregate";
  _all: Scalars["Int"];
  blockId: Scalars["Int"];
  created_at: Scalars["Int"];
  date: Scalars["Int"];
  id: Scalars["Int"];
  production: Scalars["Int"];
  shift: Scalars["Int"];
  updated_at: Scalars["Int"];
  updated_by: Scalars["Int"];
};

export type Production_DataListRelationFilter = {
  every?: InputMaybe<Production_DataWhereInput>;
  none?: InputMaybe<Production_DataWhereInput>;
  some?: InputMaybe<Production_DataWhereInput>;
};

export type Production_DataMaxAggregate = {
  __typename?: "Production_dataMaxAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  date?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  shift?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  updated_by?: Maybe<Scalars["BigInt"]>;
};

export type Production_DataMinAggregate = {
  __typename?: "Production_dataMinAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  date?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  shift?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  updated_by?: Maybe<Scalars["BigInt"]>;
};

export type Production_DataSumAggregate = {
  __typename?: "Production_dataSumAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  updated_by?: Maybe<Scalars["BigInt"]>;
};

export type Query = {
  __typename?: "Query";
  block: Block;
  blocks: Array<Block>;
  blocksCount: Scalars["Int"];
  invoice: Invoices;
  invoiceCount: Scalars["Int"];
  invoices: Array<Invoices>;
  item: Items;
  itemCatagories: Array<ItemCatagory>;
  itemCatagoriesCount: Scalars["Int"];
  itemCatagory: ItemCatagory;
  items: Array<Items>;
  itemsCount: Scalars["Int"];
  machine: Machines;
  machineCatagories: Array<Machine_Catagory>;
  machineCatagoriesCount: Scalars["Int"];
  machineCategory: Machine_Catagory;
  machines: Array<Machines>;
  machinesCount: Scalars["Int"];
  maintenance: Maintenance;
  maintenanceCount: Scalars["Int"];
  maintenances: Array<Maintenance>;
  production: Production_Data;
  productionData: Array<Production_Data>;
  productionDataCount: Scalars["Int"];
  replacement: Replacements;
  replacements: Array<Replacements>;
  replacementsCount: Scalars["Int"];
  report: Reports;
  routineMaintanance: Routine_Maintanances;
  routineMaintanances: Array<Routine_Maintanances>;
  routineMaintanancesCount: Scalars["Int"];
  section: Section;
  sections: Array<Section>;
  sectionsCount: Scalars["Int"];
  ticket: Ticket;
  tickets: Array<Ticket>;
  ticketsCount: Scalars["Int"];
  user: Users;
  users: Array<Users>;
  usersCount: Scalars["Int"];
};

export type QueryBlockArgs = {
  id: Scalars["Int"];
};

export type QueryBlocksArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
};

export type QueryBlocksCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
};

export type QueryInvoiceArgs = {
  id: Scalars["Int"];
};

export type QueryInvoiceCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
  where?: InputMaybe<InvoicesWhereInput>;
};

export type QueryInvoicesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
  where?: InputMaybe<InvoicesWhereInput>;
};

export type QueryItemArgs = {
  id: Scalars["Int"];
};

export type QueryItemCatagoriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
};

export type QueryItemCatagoriesCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
};

export type QueryItemCatagoryArgs = {
  id: Scalars["Int"];
};

export type QueryItemsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};

export type QueryItemsCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  where?: InputMaybe<ItemsWhereInput>;
};

export type QueryMachineArgs = {
  id: Scalars["Int"];
};

export type QueryMachineCatagoriesArgs = {
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type QueryMachineCatagoriesCountArgs = {
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
};

export type QueryMachineCategoryArgs = {
  id: Scalars["Int"];
};

export type QueryMachinesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type QueryMachinesCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type QueryMaintenanceArgs = {
  id: Scalars["Int"];
};

export type QueryMaintenanceCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type QueryMaintenancesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type QueryProductionArgs = {
  id: Scalars["Int"];
};

export type QueryProductionDataArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Production_DataOrderByWithAggregationInput>;
  where?: InputMaybe<Production_DataWhereInput>;
};

export type QueryProductionDataCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Production_DataOrderByWithAggregationInput>;
  where?: InputMaybe<Production_DataWhereInput>;
};

export type QueryReplacementArgs = {
  id: Scalars["Int"];
};

export type QueryReplacementsArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};

export type QueryReplacementsCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
};

export type QueryReportArgs = {
  id: Scalars["Int"];
};

export type QueryRoutineMaintananceArgs = {
  id: Scalars["Int"];
};

export type QueryRoutineMaintanancesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};

export type QueryRoutineMaintanancesCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
};

export type QuerySectionArgs = {
  id: Scalars["Int"];
};

export type QuerySectionsArgs = {
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QuerySectionsCountArgs = {
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionWhereInput>;
};

export type QueryTicketArgs = {
  id: Scalars["Int"];
};

export type QueryTicketsArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Float"]>;
  take?: InputMaybe<Scalars["Float"]>;
  where?: InputMaybe<TicketWhereInput>;
};

export type QueryTicketsCountArgs = {
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Float"]>;
  take?: InputMaybe<Scalars["Float"]>;
  where?: InputMaybe<TicketWhereInput>;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};

export type QueryUsersCountArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  where?: InputMaybe<UsersWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type Replacements = {
  __typename?: "Replacements";
  approved: Scalars["Boolean"];
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["BigInt"];
  item: Items;
  item_id: Scalars["BigInt"];
  items: Items;
  maintanance_id: Scalars["BigInt"];
  maintenance: Maintenance;
  metadata: Scalars["JSON"];
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at: Scalars["DateTime"];
};

export type ReplacementsAvgAggregate = {
  __typename?: "ReplacementsAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  item_id?: Maybe<Scalars["Float"]>;
  maintanance_id?: Maybe<Scalars["Float"]>;
  quantity?: Maybe<Scalars["Float"]>;
};

export type ReplacementsCountAggregate = {
  __typename?: "ReplacementsCountAggregate";
  _all: Scalars["Int"];
  approved: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  description: Scalars["Int"];
  id: Scalars["Int"];
  item_id: Scalars["Int"];
  maintanance_id: Scalars["Int"];
  metadata: Scalars["Int"];
  name: Scalars["Int"];
  quantity: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type ReplacementsCreateInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateManyBlockInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  item_id: Scalars["BigInt"];
  maintanance_id: Scalars["BigInt"];
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateManyBlockInputEnvelope = {
  data: Array<ReplacementsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReplacementsCreateManyItemsInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  maintanance_id: Scalars["BigInt"];
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateManyItemsInputEnvelope = {
  data: Array<ReplacementsCreateManyItemsInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReplacementsCreateManyMaintenanceInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  item_id: Scalars["BigInt"];
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReplacementsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReplacementsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyBlockInputEnvelope>;
};

export type ReplacementsCreateNestedManyWithoutItemsInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutItemsInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
};

export type ReplacementsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
};

export type ReplacementsCreateOrConnectWithoutBlockInput = {
  create: ReplacementsCreateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateOrConnectWithoutItemsInput = {
  create: ReplacementsCreateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateOrConnectWithoutMaintenanceInput = {
  create: ReplacementsCreateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsCreateWithoutBlockInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateWithoutItemsInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance: MaintenanceCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsCreateWithoutMaintenanceInput = {
  approved?: InputMaybe<Scalars["Boolean"]>;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  items: ItemsCreateNestedOneWithoutReplacementsInput;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name: Scalars["String"];
  quantity: Scalars["Int"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type ReplacementsListRelationFilter = {
  every?: InputMaybe<ReplacementsWhereInput>;
  none?: InputMaybe<ReplacementsWhereInput>;
  some?: InputMaybe<ReplacementsWhereInput>;
};

export type ReplacementsMaxAggregate = {
  __typename?: "ReplacementsMaxAggregate";
  approved?: Maybe<Scalars["Boolean"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  maintanance_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type ReplacementsMinAggregate = {
  __typename?: "ReplacementsMinAggregate";
  approved?: Maybe<Scalars["Boolean"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  maintanance_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  quantity?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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
  __typename?: "ReplacementsSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  item_id?: Maybe<Scalars["BigInt"]>;
  maintanance_id?: Maybe<Scalars["BigInt"]>;
  quantity?: Maybe<Scalars["Int"]>;
};

export type ReplacementsUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyMutationInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateManyWithWhereWithoutBlockInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithWhereWithoutItemsInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReplacementsUpdateManyMutationInput;
  where: ReplacementsScalarWhereInput;
};

export type ReplacementsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ReplacementsUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<ReplacementsUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<ReplacementsUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type ReplacementsUpdateManyWithoutItemsNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutItemsInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutItemsInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyItemsInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ReplacementsUpdateWithWhereUniqueWithoutItemsInput>
  >;
  updateMany?: InputMaybe<
    Array<ReplacementsUpdateManyWithWhereWithoutItemsInput>
  >;
  upsert?: InputMaybe<
    Array<ReplacementsUpsertWithWhereUniqueWithoutItemsInput>
  >;
};

export type ReplacementsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReplacementsCreateOrConnectWithoutMaintenanceInput>
  >;
  create?: InputMaybe<Array<ReplacementsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReplacementsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReplacementsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReplacementsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput>
  >;
  updateMany?: InputMaybe<
    Array<ReplacementsUpdateManyWithWhereWithoutMaintenanceInput>
  >;
  upsert?: InputMaybe<
    Array<ReplacementsUpsertWithWhereUniqueWithoutMaintenanceInput>
  >;
};

export type ReplacementsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ReplacementsUpdateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithWhereUniqueWithoutItemsInput = {
  data: ReplacementsUpdateWithoutItemsInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReplacementsUpdateWithoutMaintenanceInput;
  where: ReplacementsWhereUniqueInput;
};

export type ReplacementsUpdateWithoutBlockInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateOneRequiredWithoutReplacementsNestedInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpdateWithoutItemsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReplacementsNestedInput>;
  metadata?: InputMaybe<Scalars["JSON"]>;
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
  metadata?: InputMaybe<Scalars["JSON"]>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ReplacementsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ReplacementsCreateWithoutBlockInput;
  update: ReplacementsUpdateWithoutBlockInput;
  where: ReplacementsWhereUniqueInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Reports = {
  __typename?: "Reports";
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  maintance_id: Scalars["BigInt"];
  maintenance: Maintenance;
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at: Scalars["DateTime"];
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsAvgAggregate = {
  __typename?: "ReportsAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  maintance_id?: Maybe<Scalars["Float"]>;
  validated?: Maybe<Scalars["Float"]>;
  validated_sign?: Maybe<Scalars["Float"]>;
};

export type ReportsCountAggregate = {
  __typename?: "ReportsCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  maintance_id: Scalars["Int"];
  report: Scalars["Int"];
  sign: Scalars["Int"];
  tag: Scalars["Int"];
  updated_at: Scalars["Int"];
  validated: Scalars["Int"];
  validated_sign: Scalars["Int"];
};

export type ReportsCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance: MaintenanceCreateNestedOneWithoutReportsInput;
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintance_id: Scalars["BigInt"];
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsCreateManyBlockInputEnvelope = {
  data: Array<ReportsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReportsCreateManyMaintenanceInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsCreateManyMaintenanceInputEnvelope = {
  data: Array<ReportsCreateManyMaintenanceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type ReportsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReportsCreateManyBlockInputEnvelope>;
};

export type ReportsCreateNestedManyWithoutMaintenanceInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReportsCreateOrConnectWithoutMaintenanceInput>
  >;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
};

export type ReportsCreateOrConnectWithoutBlockInput = {
  create: ReportsCreateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsCreateOrConnectWithoutMaintenanceInput = {
  create: ReportsCreateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance: MaintenanceCreateNestedOneWithoutReportsInput;
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  report: Scalars["String"];
  sign: Scalars["String"];
  tag: Scalars["JSON"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  validated: Scalars["BigInt"];
  validated_sign: Scalars["BigInt"];
};

export type ReportsListRelationFilter = {
  every?: InputMaybe<ReportsWhereInput>;
  none?: InputMaybe<ReportsWhereInput>;
  some?: InputMaybe<ReportsWhereInput>;
};

export type ReportsMaxAggregate = {
  __typename?: "ReportsMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  maintance_id?: Maybe<Scalars["BigInt"]>;
  report?: Maybe<Scalars["String"]>;
  sign?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  validated?: Maybe<Scalars["BigInt"]>;
  validated_sign?: Maybe<Scalars["BigInt"]>;
};

export type ReportsMinAggregate = {
  __typename?: "ReportsMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  maintance_id?: Maybe<Scalars["BigInt"]>;
  report?: Maybe<Scalars["String"]>;
  sign?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  validated?: Maybe<Scalars["BigInt"]>;
  validated_sign?: Maybe<Scalars["BigInt"]>;
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
  __typename?: "ReportsSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  maintance_id?: Maybe<Scalars["BigInt"]>;
  validated?: Maybe<Scalars["BigInt"]>;
  validated_sign?: Maybe<Scalars["BigInt"]>;
};

export type ReportsUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReportsNestedInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateManyWithWhereWithoutBlockInput = {
  data: ReportsUpdateManyMutationInput;
  where: ReportsScalarWhereInput;
};

export type ReportsUpdateManyWithWhereWithoutMaintenanceInput = {
  data: ReportsUpdateManyMutationInput;
  where: ReportsScalarWhereInput;
};

export type ReportsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReportsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<ReportsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<ReportsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  update?: InputMaybe<Array<ReportsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<ReportsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<ReportsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type ReportsUpdateManyWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ReportsCreateOrConnectWithoutMaintenanceInput>
  >;
  create?: InputMaybe<Array<ReportsCreateWithoutMaintenanceInput>>;
  createMany?: InputMaybe<ReportsCreateManyMaintenanceInputEnvelope>;
  delete?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReportsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  set?: InputMaybe<Array<ReportsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ReportsUpdateWithWhereUniqueWithoutMaintenanceInput>
  >;
  updateMany?: InputMaybe<
    Array<ReportsUpdateManyWithWhereWithoutMaintenanceInput>
  >;
  upsert?: InputMaybe<
    Array<ReportsUpsertWithWhereUniqueWithoutMaintenanceInput>
  >;
};

export type ReportsUpdateWithWhereUniqueWithoutBlockInput = {
  data: ReportsUpdateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpdateWithWhereUniqueWithoutMaintenanceInput = {
  data: ReportsUpdateWithoutMaintenanceInput;
  where: ReportsWhereUniqueInput;
};

export type ReportsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateOneRequiredWithoutReportsNestedInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  report?: InputMaybe<StringFieldUpdateOperationsInput>;
  sign?: InputMaybe<StringFieldUpdateOperationsInput>;
  tag?: InputMaybe<Scalars["JSON"]>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  validated?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  validated_sign?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ReportsUpsertWithWhereUniqueWithoutBlockInput = {
  create: ReportsCreateWithoutBlockInput;
  update: ReportsUpdateWithoutBlockInput;
  where: ReportsWhereUniqueInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export enum Role {
  Admin = "ADMIN",
  Engineer = "ENGINEER",
  Fitter = "FITTER",
  Guest = "GUEST",
  InputController = "INPUT_CONTROLLER",
  Manager = "MANAGER",
  ProductionController = "PRODUCTION_CONTROLLER",
  Supervisor = "SUPERVISOR",
}

export type Routine_MaintanancesAvgAggregate = {
  __typename?: "Routine_maintanancesAvgAggregate";
  assignee_id?: Maybe<Scalars["Float"]>;
  block_id?: Maybe<Scalars["Float"]>;
  duration?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  meachine_id?: Maybe<Scalars["Float"]>;
};

export type Routine_MaintanancesCountAggregate = {
  __typename?: "Routine_maintanancesCountAggregate";
  _all: Scalars["Int"];
  assignee_id: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  cron: Scalars["Int"];
  description: Scalars["Int"];
  duration: Scalars["Int"];
  id: Scalars["Int"];
  meachine_id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type Routine_MaintanancesListRelationFilter = {
  every?: InputMaybe<Routine_MaintanancesWhereInput>;
  none?: InputMaybe<Routine_MaintanancesWhereInput>;
  some?: InputMaybe<Routine_MaintanancesWhereInput>;
};

export type Routine_MaintanancesMaxAggregate = {
  __typename?: "Routine_maintanancesMaxAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  cron?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["BigInt"]>;
  meachine_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesMinAggregate = {
  __typename?: "Routine_maintanancesMinAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  cron?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["BigInt"]>;
  meachine_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesSumAggregate = {
  __typename?: "Routine_maintanancesSumAggregate";
  assignee_id?: Maybe<Scalars["BigInt"]>;
  block_id?: Maybe<Scalars["BigInt"]>;
  duration?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["BigInt"]>;
  meachine_id?: Maybe<Scalars["BigInt"]>;
};

export type Section = {
  __typename?: "Section";
  _count: SectionCount;
  created_at: Scalars["DateTime"];
  id: Scalars["ID"];
  machines?: Maybe<Array<Machines>>;
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type SectionMachinesArgs = {
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type SectionAvgAggregate = {
  __typename?: "SectionAvgAggregate";
  id?: Maybe<Scalars["Float"]>;
};

export type SectionCount = {
  __typename?: "SectionCount";
  machines: Scalars["Int"];
};

export type SectionCountAggregate = {
  __typename?: "SectionCountAggregate";
  _all: Scalars["Int"];
  created_at: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type SectionCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["String"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SectionMaxAggregate = {
  __typename?: "SectionMaxAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type SectionMinAggregate = {
  __typename?: "SectionMinAggregate";
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type SectionOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type SectionSumAggregate = {
  __typename?: "SectionSumAggregate";
  id?: Maybe<Scalars["String"]>;
};

export type SectionUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Sections = {
  __typename?: "Sections";
  _count: SectionsCount;
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  machines?: Maybe<Array<Machines>>;
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type SectionsCount = {
  __typename?: "SectionsCount";
  machines: Scalars["Int"];
};

export type SectionsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SectionsCreateManyBlockInputEnvelope = {
  data: Array<SectionsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type SectionsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<SectionsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<SectionsCreateManyBlockInputEnvelope>;
};

export type SectionsCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
};

export type SectionsCreateOrConnectWithoutBlockInput = {
  create: SectionsCreateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsCreateOrConnectWithoutMachinesInput = {
  create: SectionsCreateWithoutMachinesInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutSectionInput>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SectionsCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type SectionsListRelationFilter = {
  every?: InputMaybe<SectionsWhereInput>;
  none?: InputMaybe<SectionsWhereInput>;
  some?: InputMaybe<SectionsWhereInput>;
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

export type SectionsScalarWhereInput = {
  AND?: InputMaybe<Array<SectionsScalarWhereInput>>;
  NOT?: InputMaybe<Array<SectionsScalarWhereInput>>;
  OR?: InputMaybe<Array<SectionsScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type SectionsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpdateManyWithWhereWithoutBlockInput = {
  data: SectionsUpdateManyMutationInput;
  where: SectionsScalarWhereInput;
};

export type SectionsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionsCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<SectionsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<SectionsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SectionsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionsWhereUniqueInput>>;
  update?: InputMaybe<Array<SectionsUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<SectionsUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<SectionsUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type SectionsUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<SectionsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionsCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<SectionsCreateWithoutMachinesInput>;
  update?: InputMaybe<SectionsUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<SectionsUpsertWithoutMachinesInput>;
};

export type SectionsUpdateWithWhereUniqueWithoutBlockInput = {
  data: SectionsUpdateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
};

export type SectionsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutSectionNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SectionsUpsertWithWhereUniqueWithoutBlockInput = {
  create: SectionsCreateWithoutBlockInput;
  update: SectionsUpdateWithoutBlockInput;
  where: SectionsWhereUniqueInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars["String"]>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["String"]>>;
  has?: InputMaybe<Scalars["String"]>;
  hasEvery?: InputMaybe<Array<Scalars["String"]>>;
  hasSome?: InputMaybe<Array<Scalars["String"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type Ticket = {
  __typename?: "Ticket";
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["BigInt"];
  machine: Machines;
  machine_id: Scalars["BigInt"];
  machines: Machines;
  maintanance?: Maybe<Maintenance>;
  maintenance?: Maybe<Maintenance>;
  maintenance_id?: Maybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at: Scalars["DateTime"];
  user: Users;
  user_id: Scalars["BigInt"];
};

export type TicketAvgAggregate = {
  __typename?: "TicketAvgAggregate";
  block_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  machine_id?: Maybe<Scalars["Float"]>;
  maintenance_id?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

export type TicketCountAggregate = {
  __typename?: "TicketCountAggregate";
  _all: Scalars["Int"];
  block_id: Scalars["Int"];
  created_at: Scalars["Int"];
  description: Scalars["Int"];
  id: Scalars["Int"];
  machine_id: Scalars["Int"];
  maintenance_id: Scalars["Int"];
  name: Scalars["Int"];
  photos: Scalars["Int"];
  status: Scalars["Int"];
  updated_at: Scalars["Int"];
  user_id: Scalars["Int"];
};

export type TicketCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machine_id: Scalars["BigInt"];
  maintenance_id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateManyBlockInputEnvelope = {
  data: Array<TicketCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TicketCreateManyMachinesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance_id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateManyMachinesInputEnvelope = {
  data: Array<TicketCreateManyMachinesInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TicketCreateManyUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machine_id: Scalars["BigInt"];
  maintenance_id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateManyUserInputEnvelope = {
  data: Array<TicketCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type TicketCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutBlockInput>>;
  createMany?: InputMaybe<TicketCreateManyBlockInputEnvelope>;
};

export type TicketCreateNestedManyWithoutMachinesInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TicketCreateOrConnectWithoutMachinesInput>
  >;
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

export type TicketCreateOrConnectWithoutBlockInput = {
  create: TicketCreateWithoutBlockInput;
  where: TicketWhereUniqueInput;
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

export type TicketCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketCreateWithoutUserInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  id?: InputMaybe<Scalars["BigInt"]>;
  machines: MachinesCreateNestedOneWithoutTicketInput;
  maintenance?: InputMaybe<MaintenanceCreateNestedOneWithoutTicketInput>;
  name: Scalars["String"];
  photos: Scalars["String"];
  status: Ticket_Status;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type TicketListRelationFilter = {
  every?: InputMaybe<TicketWhereInput>;
  none?: InputMaybe<TicketWhereInput>;
  some?: InputMaybe<TicketWhereInput>;
};

export type TicketMaxAggregate = {
  __typename?: "TicketMaxAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
  maintenance_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  photos?: Maybe<Scalars["String"]>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  user_id?: Maybe<Scalars["BigInt"]>;
};

export type TicketMinAggregate = {
  __typename?: "TicketMinAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
  maintenance_id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  photos?: Maybe<Scalars["String"]>;
  status?: Maybe<Ticket_Status>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  user_id?: Maybe<Scalars["BigInt"]>;
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
  __typename?: "TicketSumAggregate";
  block_id?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
  machine_id?: Maybe<Scalars["BigInt"]>;
  maintenance_id?: Maybe<Scalars["BigInt"]>;
  user_id?: Maybe<Scalars["BigInt"]>;
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

export type TicketUpdateManyWithWhereWithoutBlockInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutMachinesInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithWhereWithoutUserInput = {
  data: TicketUpdateManyMutationInput;
  where: TicketScalarWhereInput;
};

export type TicketUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TicketCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<TicketCreateWithoutBlockInput>>;
  createMany?: InputMaybe<TicketCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<TicketWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TicketScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  set?: InputMaybe<Array<TicketWhereUniqueInput>>;
  update?: InputMaybe<Array<TicketUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<TicketUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<TicketUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type TicketUpdateManyWithoutMachinesNestedInput = {
  connect?: InputMaybe<Array<TicketWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<TicketCreateOrConnectWithoutMachinesInput>
  >;
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
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<TicketUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<TicketUpsertWithoutMaintenanceInput>;
};

export type TicketUpdateWithWhereUniqueWithoutBlockInput = {
  data: TicketUpdateWithoutBlockInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutMachinesInput = {
  data: TicketUpdateWithoutMachinesInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithWhereUniqueWithoutUserInput = {
  data: TicketUpdateWithoutUserInput;
  where: TicketWhereUniqueInput;
};

export type TicketUpdateWithoutBlockInput = {
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

export type TicketUpsertWithWhereUniqueWithoutBlockInput = {
  create: TicketCreateWithoutBlockInput;
  update: TicketUpdateWithoutBlockInput;
  where: TicketWhereUniqueInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance_id?: InputMaybe<Scalars["BigInt"]>;
};

export type Users = {
  __typename?: "Users";
  _count: UsersCount;
  block: Block;
  blockId: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  extra_roles?: Maybe<Array<Role>>;
  id: Scalars["BigInt"];
  maintenance?: Maybe<Array<Maintenance>>;
  name: Scalars["String"];
  phone: Scalars["String"];
  production_data?: Maybe<Array<Production_Data>>;
  profile: Scalars["JSON"];
  role: Role;
  role_alias: Scalars["String"];
  routine_maintanances?: Maybe<Array<Routine_Maintanances>>;
  ticket?: Maybe<Array<Ticket>>;
  updated_at: Scalars["DateTime"];
};

export type UsersMaintenanceArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  where?: InputMaybe<MaintenanceWhereInput>;
};

export type UsersTicketArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  where?: InputMaybe<TicketWhereInput>;
};

export type UsersAvgAggregate = {
  __typename?: "UsersAvgAggregate";
  blockId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

export type UsersCount = {
  __typename?: "UsersCount";
  maintenance: Scalars["Int"];
  production_data: Scalars["Int"];
  routine_maintanances: Scalars["Int"];
  ticket: Scalars["Int"];
};

export type UsersCountAggregate = {
  __typename?: "UsersCountAggregate";
  _all: Scalars["Int"];
  blockId: Scalars["Int"];
  created_at: Scalars["Int"];
  extra_roles: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["Int"];
  phone: Scalars["Int"];
  profile: Scalars["Int"];
  role: Scalars["Int"];
  role_alias: Scalars["Int"];
  updated_at: Scalars["Int"];
};

export type UsersCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars["String"];
  phone: Scalars["String"];
  production_data?: InputMaybe<Production_DataCreateNestedManyWithoutUpdatedByInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  phone: Scalars["String"];
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateManyBlockInputEnvelope = {
  data: Array<UsersCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type UsersCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<UsersCreateWithoutBlockInput>>;
  createMany?: InputMaybe<UsersCreateManyBlockInputEnvelope>;
};

export type UsersCreateNestedOneWithoutMaintenanceInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
};

export type UsersCreateNestedOneWithoutProduction_DataInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutProduction_DataInput>;
  create?: InputMaybe<UsersCreateWithoutProduction_DataInput>;
};

export type UsersCreateNestedOneWithoutRoutine_MaintanancesInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
};

export type UsersCreateOrConnectWithoutBlockInput = {
  create: UsersCreateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutProduction_DataInput = {
  create: UsersCreateWithoutProduction_DataInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateOrConnectWithoutRoutine_MaintanancesInput = {
  create: UsersCreateWithoutRoutine_MaintanancesInput;
  where: UsersWhereUniqueInput;
};

export type UsersCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars["String"];
  phone: Scalars["String"];
  production_data?: InputMaybe<Production_DataCreateNestedManyWithoutUpdatedByInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateWithoutMaintenanceInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  phone: Scalars["String"];
  production_data?: InputMaybe<Production_DataCreateNestedManyWithoutUpdatedByInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateWithoutProduction_DataInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars["String"];
  phone: Scalars["String"];
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesCreateNestedManyWithoutAssigneeInput>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  extra_roles?: InputMaybe<UsersCreateextra_RolesInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
  maintenance?: InputMaybe<MaintenanceCreateNestedManyWithoutAssigneeInput>;
  name: Scalars["String"];
  phone: Scalars["String"];
  production_data?: InputMaybe<Production_DataCreateNestedManyWithoutUpdatedByInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role: Role;
  role_alias?: InputMaybe<Scalars["String"]>;
  ticket?: InputMaybe<TicketCreateNestedManyWithoutUserInput>;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type UsersCreateextra_RolesInput = {
  set: Array<Role>;
};

export type UsersListRelationFilter = {
  every?: InputMaybe<UsersWhereInput>;
  none?: InputMaybe<UsersWhereInput>;
  some?: InputMaybe<UsersWhereInput>;
};

export type UsersMaxAggregate = {
  __typename?: "UsersMaxAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<Role>;
  role_alias?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type UsersMinAggregate = {
  __typename?: "UsersMinAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["BigInt"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  role?: Maybe<Role>;
  role_alias?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
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

export type UsersScalarWhereInput = {
  AND?: InputMaybe<Array<UsersScalarWhereInput>>;
  NOT?: InputMaybe<Array<UsersScalarWhereInput>>;
  OR?: InputMaybe<Array<UsersScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  extra_roles?: InputMaybe<EnumRoleNullableListFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  profile?: InputMaybe<JsonFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  role_alias?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UsersSumAggregate = {
  __typename?: "UsersSumAggregate";
  blockId?: Maybe<Scalars["BigInt"]>;
  id?: Maybe<Scalars["BigInt"]>;
};

export type UsersUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  production_data?: InputMaybe<Production_DataUpdateManyWithoutUpdatedByNestedInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateManyWithWhereWithoutBlockInput = {
  data: UsersUpdateManyMutationInput;
  where: UsersScalarWhereInput;
};

export type UsersUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UsersCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<UsersCreateWithoutBlockInput>>;
  createMany?: InputMaybe<UsersCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<UsersWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UsersScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UsersWhereUniqueInput>>;
  set?: InputMaybe<Array<UsersWhereUniqueInput>>;
  update?: InputMaybe<Array<UsersUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<UsersUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<UsersUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type UsersUpdateOneRequiredWithoutMaintenanceNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutMaintenanceInput>;
  create?: InputMaybe<UsersCreateWithoutMaintenanceInput>;
  update?: InputMaybe<UsersUpdateWithoutMaintenanceInput>;
  upsert?: InputMaybe<UsersUpsertWithoutMaintenanceInput>;
};

export type UsersUpdateOneRequiredWithoutProduction_DataNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutProduction_DataInput>;
  create?: InputMaybe<UsersCreateWithoutProduction_DataInput>;
  update?: InputMaybe<UsersUpdateWithoutProduction_DataInput>;
  upsert?: InputMaybe<UsersUpsertWithoutProduction_DataInput>;
};

export type UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput = {
  connect?: InputMaybe<UsersWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UsersCreateOrConnectWithoutRoutine_MaintanancesInput>;
  create?: InputMaybe<UsersCreateWithoutRoutine_MaintanancesInput>;
  update?: InputMaybe<UsersUpdateWithoutRoutine_MaintanancesInput>;
  upsert?: InputMaybe<UsersUpsertWithoutRoutine_MaintanancesInput>;
};

export type UsersUpdateWithWhereUniqueWithoutBlockInput = {
  data: UsersUpdateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  production_data?: InputMaybe<Production_DataUpdateManyWithoutUpdatedByNestedInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutMaintenanceInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  production_data?: InputMaybe<Production_DataUpdateManyWithoutUpdatedByNestedInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutProduction_DataInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateWithoutRoutine_MaintanancesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  extra_roles?: InputMaybe<UsersUpdateextra_RolesInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  maintenance?: InputMaybe<MaintenanceUpdateManyWithoutAssigneeNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  production_data?: InputMaybe<Production_DataUpdateManyWithoutUpdatedByNestedInput>;
  profile?: InputMaybe<Scalars["JSON"]>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  role_alias?: InputMaybe<StringFieldUpdateOperationsInput>;
  ticket?: InputMaybe<TicketUpdateManyWithoutUserNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersUpdateextra_RolesInput = {
  push?: InputMaybe<Array<Role>>;
  set?: InputMaybe<Array<Role>>;
};

export type UsersUpsertWithWhereUniqueWithoutBlockInput = {
  create: UsersCreateWithoutBlockInput;
  update: UsersUpdateWithoutBlockInput;
  where: UsersWhereUniqueInput;
};

export type UsersUpsertWithoutMaintenanceInput = {
  create: UsersCreateWithoutMaintenanceInput;
  update: UsersUpdateWithoutMaintenanceInput;
};

export type UsersUpsertWithoutProduction_DataInput = {
  create: UsersCreateWithoutProduction_DataInput;
  update: UsersUpdateWithoutProduction_DataInput;
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
  extra_roles?: InputMaybe<EnumRoleNullableListFilter>;
  id?: InputMaybe<BigIntFilter>;
  maintenance?: InputMaybe<MaintenanceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  production_data?: InputMaybe<Production_DataListRelationFilter>;
  profile?: InputMaybe<JsonFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  role_alias?: InputMaybe<StringFilter>;
  routine_maintanances?: InputMaybe<Routine_MaintanancesListRelationFilter>;
  ticket?: InputMaybe<TicketListRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type UsersWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
  phone?: InputMaybe<Scalars["String"]>;
};

export type Block_Settings = {
  __typename?: "block_settings";
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
  value: Scalars["JSON"];
};

export type Block_SettingsBlock_IdNameCompoundUniqueInput = {
  block_id: Scalars["BigInt"];
  name: Scalars["String"];
};

export type Block_SettingsCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value: Scalars["JSON"];
};

export type Block_SettingsCreateManyBlockInputEnvelope = {
  data: Array<Block_SettingsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Block_SettingsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Block_SettingsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Block_SettingsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Block_SettingsCreateManyBlockInputEnvelope>;
};

export type Block_SettingsCreateOrConnectWithoutBlockInput = {
  create: Block_SettingsCreateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  value: Scalars["JSON"];
};

export type Block_SettingsScalarWhereInput = {
  AND?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  OR?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type Block_SettingsUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars["JSON"]>;
};

export type Block_SettingsUpdateManyWithWhereWithoutBlockInput = {
  data: Block_SettingsUpdateManyMutationInput;
  where: Block_SettingsScalarWhereInput;
};

export type Block_SettingsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Block_SettingsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Block_SettingsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Block_SettingsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Block_SettingsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  set?: InputMaybe<Array<Block_SettingsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Block_SettingsUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<Block_SettingsUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<Block_SettingsUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type Block_SettingsUpdateWithWhereUniqueWithoutBlockInput = {
  data: Block_SettingsUpdateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  value?: InputMaybe<Scalars["JSON"]>;
};

export type Block_SettingsUpsertWithWhereUniqueWithoutBlockInput = {
  create: Block_SettingsCreateWithoutBlockInput;
  update: Block_SettingsUpdateWithoutBlockInput;
  where: Block_SettingsWhereUniqueInput;
};

export type Block_SettingsWhereInput = {
  AND?: InputMaybe<Array<Block_SettingsWhereInput>>;
  NOT?: InputMaybe<Array<Block_SettingsWhereInput>>;
  OR?: InputMaybe<Array<Block_SettingsWhereInput>>;
  block?: InputMaybe<BlockRelationFilter>;
  block_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  value?: InputMaybe<JsonFilter>;
};

export type Block_SettingsWhereUniqueInput = {
  block_id_name?: InputMaybe<Block_SettingsBlock_IdNameCompoundUniqueInput>;
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Catagory = {
  __typename?: "catagory";
  _count: CatagoryCount;
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  items?: Maybe<Array<Items>>;
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type CatagoryCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CatagoryCreateManyBlockInputEnvelope = {
  data: Array<CatagoryCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type CatagoryCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<CatagoryCreateManyBlockInputEnvelope>;
};

export type CatagoryCreateNestedOneWithoutItemsInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
};

export type CatagoryCreateOrConnectWithoutBlockInput = {
  create: CatagoryCreateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryCreateOrConnectWithoutItemsInput = {
  create: CatagoryCreateWithoutItemsInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  items?: InputMaybe<ItemsCreateNestedManyWithoutCatagoryInput>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CatagoryCreateWithoutItemsInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type CatagoryOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<ItemsOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type CatagoryScalarWhereInput = {
  AND?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type CatagoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpdateManyWithWhereWithoutBlockInput = {
  data: CatagoryUpdateManyMutationInput;
  where: CatagoryScalarWhereInput;
};

export type CatagoryUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CatagoryCreateOrConnectWithoutBlockInput>>;
  create?: InputMaybe<Array<CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<CatagoryCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CatagoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CatagoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CatagoryUpdateWithWhereUniqueWithoutBlockInput>>;
  updateMany?: InputMaybe<Array<CatagoryUpdateManyWithWhereWithoutBlockInput>>;
  upsert?: InputMaybe<Array<CatagoryUpsertWithWhereUniqueWithoutBlockInput>>;
};

export type CatagoryUpdateOneRequiredWithoutItemsNestedInput = {
  connect?: InputMaybe<CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CatagoryCreateOrConnectWithoutItemsInput>;
  create?: InputMaybe<CatagoryCreateWithoutItemsInput>;
  update?: InputMaybe<CatagoryUpdateWithoutItemsInput>;
  upsert?: InputMaybe<CatagoryUpsertWithoutItemsInput>;
};

export type CatagoryUpdateWithWhereUniqueWithoutBlockInput = {
  data: CatagoryUpdateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
};

export type CatagoryUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  items?: InputMaybe<ItemsUpdateManyWithoutCatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpdateWithoutItemsInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CatagoryUpsertWithWhereUniqueWithoutBlockInput = {
  create: CatagoryCreateWithoutBlockInput;
  update: CatagoryUpdateWithoutBlockInput;
  where: CatagoryWhereUniqueInput;
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
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Invoice_Items = {
  __typename?: "invoice_items";
  amount: Scalars["Float"];
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  invoice: Invoices;
  invoice_id: Scalars["BigInt"];
  item: Items;
  item_id: Scalars["BigInt"];
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at: Scalars["DateTime"];
};

export type Invoice_ItemsCreateManyBlockInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_id: Scalars["BigInt"];
  item_id: Scalars["BigInt"];
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsCreateManyBlockInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Invoice_ItemsCreateManyInvoiceInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  item_id: Scalars["BigInt"];
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsCreateManyInvoiceInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyInvoiceInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Invoice_ItemsCreateManyItemInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice_id: Scalars["BigInt"];
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsCreateManyItemInputEnvelope = {
  data: Array<Invoice_ItemsCreateManyItemInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Invoice_ItemsCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyBlockInputEnvelope>;
};

export type Invoice_ItemsCreateNestedManyWithoutInvoiceInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutInvoiceInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutInvoiceInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyInvoiceInputEnvelope>;
};

export type Invoice_ItemsCreateNestedManyWithoutItemInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutItemInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutItemInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyItemInputEnvelope>;
};

export type Invoice_ItemsCreateOrConnectWithoutBlockInput = {
  create: Invoice_ItemsCreateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateOrConnectWithoutInvoiceInput = {
  create: Invoice_ItemsCreateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateOrConnectWithoutItemInput = {
  create: Invoice_ItemsCreateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsCreateWithoutBlockInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice: InvoicesCreateNestedOneWithoutInvoice_ItemsInput;
  item: ItemsCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsCreateWithoutInvoiceInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  item: ItemsCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsCreateWithoutItemInput = {
  amount: Scalars["Float"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  invoice: InvoicesCreateNestedOneWithoutInvoice_ItemsInput;
  quantity: Scalars["Float"];
  unit_price: Scalars["Float"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Invoice_ItemsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Invoice_ItemsScalarWhereInput = {
  AND?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  NOT?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  OR?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice_id?: InputMaybe<BigIntFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Invoice_ItemsUpdateManyMutationInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutBlockInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutInvoiceInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithWhereWithoutItemInput = {
  data: Invoice_ItemsUpdateManyMutationInput;
  where: Invoice_ItemsScalarWhereInput;
};

export type Invoice_ItemsUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Invoice_ItemsUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<Invoice_ItemsUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<Invoice_ItemsUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type Invoice_ItemsUpdateManyWithoutInvoiceNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutInvoiceInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutInvoiceInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyInvoiceInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Invoice_ItemsUpdateWithWhereUniqueWithoutInvoiceInput>
  >;
  updateMany?: InputMaybe<
    Array<Invoice_ItemsUpdateManyWithWhereWithoutInvoiceInput>
  >;
  upsert?: InputMaybe<
    Array<Invoice_ItemsUpsertWithWhereUniqueWithoutInvoiceInput>
  >;
};

export type Invoice_ItemsUpdateManyWithoutItemNestedInput = {
  connect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Invoice_ItemsCreateOrConnectWithoutItemInput>
  >;
  create?: InputMaybe<Array<Invoice_ItemsCreateWithoutItemInput>>;
  createMany?: InputMaybe<Invoice_ItemsCreateManyItemInputEnvelope>;
  delete?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Invoice_ItemsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  set?: InputMaybe<Array<Invoice_ItemsWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Invoice_ItemsUpdateWithWhereUniqueWithoutItemInput>
  >;
  updateMany?: InputMaybe<
    Array<Invoice_ItemsUpdateManyWithWhereWithoutItemInput>
  >;
  upsert?: InputMaybe<
    Array<Invoice_ItemsUpsertWithWhereUniqueWithoutItemInput>
  >;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutBlockInput = {
  data: Invoice_ItemsUpdateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutInvoiceInput = {
  data: Invoice_ItemsUpdateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithWhereUniqueWithoutItemInput = {
  data: Invoice_ItemsUpdateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpdateWithoutBlockInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice?: InputMaybe<InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  item?: InputMaybe<ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateWithoutInvoiceInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  item?: InputMaybe<ItemsUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpdateWithoutItemInput = {
  amount?: InputMaybe<FloatFieldUpdateOperationsInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  invoice?: InputMaybe<InvoicesUpdateOneRequiredWithoutInvoice_ItemsNestedInput>;
  quantity?: InputMaybe<FloatFieldUpdateOperationsInput>;
  unit_price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutBlockInput = {
  create: Invoice_ItemsCreateWithoutBlockInput;
  update: Invoice_ItemsUpdateWithoutBlockInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutInvoiceInput = {
  create: Invoice_ItemsCreateWithoutInvoiceInput;
  update: Invoice_ItemsUpdateWithoutInvoiceInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsUpsertWithWhereUniqueWithoutItemInput = {
  create: Invoice_ItemsCreateWithoutItemInput;
  update: Invoice_ItemsUpdateWithoutItemInput;
  where: Invoice_ItemsWhereUniqueInput;
};

export type Invoice_ItemsWhereInput = {
  AND?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  NOT?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  OR?: InputMaybe<Array<Invoice_ItemsWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  invoice?: InputMaybe<InvoicesRelationFilter>;
  invoice_id?: InputMaybe<BigIntFilter>;
  item?: InputMaybe<ItemsRelationFilter>;
  item_id?: InputMaybe<BigIntFilter>;
  quantity?: InputMaybe<FloatFilter>;
  unit_price?: InputMaybe<FloatFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Invoice_ItemsWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Machine_Catagory = {
  __typename?: "machine_catagory";
  _count: Machine_CatagoryCount;
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  id: Scalars["BigInt"];
  machines?: Maybe<Array<Machines>>;
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type Machine_CatagoryMachinesArgs = {
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MachinesWhereInput>;
};

export type Machine_CatagoryCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Machine_CatagoryCreateManyBlockInputEnvelope = {
  data: Array<Machine_CatagoryCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Machine_CatagoryCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Machine_CatagoryCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Machine_CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Machine_CatagoryCreateManyBlockInputEnvelope>;
};

export type Machine_CatagoryCreateNestedOneWithoutMachinesInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
};

export type Machine_CatagoryCreateOrConnectWithoutBlockInput = {
  create: Machine_CatagoryCreateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryCreateOrConnectWithoutMachinesInput = {
  create: Machine_CatagoryCreateWithoutMachinesInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  machines?: InputMaybe<MachinesCreateNestedManyWithoutMachine_CatagoryInput>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Machine_CatagoryCreateWithoutMachinesInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export enum Machine_CatagoryOrderByRelevanceFieldEnum {
  Name = "name",
}

export type Machine_CatagoryOrderByRelevanceInput = {
  fields: Array<Machine_CatagoryOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrder;
};

export type Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<Machine_CatagoryOrderByRelevanceInput>;
  created_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machines?: InputMaybe<MachinesOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
};

export type Machine_CatagoryScalarWhereInput = {
  AND?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  OR?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Machine_CatagoryUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpdateManyWithWhereWithoutBlockInput = {
  data: Machine_CatagoryUpdateManyMutationInput;
  where: Machine_CatagoryScalarWhereInput;
};

export type Machine_CatagoryUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Machine_CatagoryCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Machine_CatagoryCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Machine_CatagoryCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Machine_CatagoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Machine_CatagoryWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Machine_CatagoryUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<Machine_CatagoryUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<Machine_CatagoryUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type Machine_CatagoryUpdateOneRequiredWithoutMachinesNestedInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
  update?: InputMaybe<Machine_CatagoryUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<Machine_CatagoryUpsertWithoutMachinesInput>;
};

export type Machine_CatagoryUpdateOneWithoutMachinesNestedInput = {
  connect?: InputMaybe<Machine_CatagoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Machine_CatagoryCreateOrConnectWithoutMachinesInput>;
  create?: InputMaybe<Machine_CatagoryCreateWithoutMachinesInput>;
  delete?: InputMaybe<Scalars["Boolean"]>;
  disconnect?: InputMaybe<Scalars["Boolean"]>;
  update?: InputMaybe<Machine_CatagoryUpdateWithoutMachinesInput>;
  upsert?: InputMaybe<Machine_CatagoryUpsertWithoutMachinesInput>;
};

export type Machine_CatagoryUpdateWithWhereUniqueWithoutBlockInput = {
  data: Machine_CatagoryUpdateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  machines?: InputMaybe<MachinesUpdateManyWithoutMachine_CatagoryNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpdateWithoutMachinesInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Machine_CatagoryUpsertWithWhereUniqueWithoutBlockInput = {
  create: Machine_CatagoryCreateWithoutBlockInput;
  update: Machine_CatagoryUpdateWithoutBlockInput;
  where: Machine_CatagoryWhereUniqueInput;
};

export type Machine_CatagoryUpsertWithoutMachinesInput = {
  create: Machine_CatagoryCreateWithoutMachinesInput;
  update: Machine_CatagoryUpdateWithoutMachinesInput;
};

export type Machine_CatagoryWhereInput = {
  AND?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  NOT?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  OR?: InputMaybe<Array<Machine_CatagoryWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  machines?: InputMaybe<MachinesListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Machine_CatagoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Production_Data = {
  __typename?: "production_data";
  Block: Block;
  blockId: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  date: Scalars["DateTime"];
  id: Scalars["BigInt"];
  production: Scalars["JSON"];
  shift: Scalars["String"];
  updatedBy: Users;
  updated_at: Scalars["DateTime"];
  updated_by: Scalars["BigInt"];
};

export type Production_DataAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataCountOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  production?: InputMaybe<SortOrder>;
  shift?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataCreateInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift: Scalars["String"];
  updatedBy: UsersCreateNestedOneWithoutProduction_DataInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Production_DataCreateManyBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
  updated_by: Scalars["BigInt"];
};

export type Production_DataCreateManyBlockInputEnvelope = {
  data: Array<Production_DataCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Production_DataCreateManyUpdatedByInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Production_DataCreateManyUpdatedByInputEnvelope = {
  data: Array<Production_DataCreateManyUpdatedByInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Production_DataCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Production_DataCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Production_DataCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Production_DataCreateManyBlockInputEnvelope>;
};

export type Production_DataCreateNestedManyWithoutUpdatedByInput = {
  connect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Production_DataCreateOrConnectWithoutUpdatedByInput>
  >;
  create?: InputMaybe<Array<Production_DataCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<Production_DataCreateManyUpdatedByInputEnvelope>;
};

export type Production_DataCreateOrConnectWithoutBlockInput = {
  create: Production_DataCreateWithoutBlockInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataCreateOrConnectWithoutUpdatedByInput = {
  create: Production_DataCreateWithoutUpdatedByInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataCreateWithoutBlockInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift: Scalars["String"];
  updatedBy: UsersCreateNestedOneWithoutProduction_DataInput;
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Production_DataCreateWithoutUpdatedByInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  date: Scalars["DateTime"];
  id?: InputMaybe<Scalars["BigInt"]>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Production_DataMaxOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  shift?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataMinOrderByAggregateInput = {
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  shift?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataOrderByWithAggregationInput = {
  _avg?: InputMaybe<Production_DataAvgOrderByAggregateInput>;
  _count?: InputMaybe<Production_DataCountOrderByAggregateInput>;
  _max?: InputMaybe<Production_DataMaxOrderByAggregateInput>;
  _min?: InputMaybe<Production_DataMinOrderByAggregateInput>;
  _sum?: InputMaybe<Production_DataSumOrderByAggregateInput>;
  created_at?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  production?: InputMaybe<SortOrder>;
  shift?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataScalarWhereInput = {
  AND?: InputMaybe<Array<Production_DataScalarWhereInput>>;
  NOT?: InputMaybe<Array<Production_DataScalarWhereInput>>;
  OR?: InputMaybe<Array<Production_DataScalarWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  production?: InputMaybe<JsonFilter>;
  shift?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  updated_by?: InputMaybe<BigIntFilter>;
};

export type Production_DataSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  updated_by?: InputMaybe<SortOrder>;
};

export type Production_DataUpdateInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedBy?: InputMaybe<UsersUpdateOneRequiredWithoutProduction_DataNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Production_DataUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Production_DataUpdateManyWithWhereWithoutBlockInput = {
  data: Production_DataUpdateManyMutationInput;
  where: Production_DataScalarWhereInput;
};

export type Production_DataUpdateManyWithWhereWithoutUpdatedByInput = {
  data: Production_DataUpdateManyMutationInput;
  where: Production_DataScalarWhereInput;
};

export type Production_DataUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Production_DataCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Production_DataCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Production_DataCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Production_DataScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  set?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Production_DataUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<Production_DataUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<Production_DataUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type Production_DataUpdateManyWithoutUpdatedByNestedInput = {
  connect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Production_DataCreateOrConnectWithoutUpdatedByInput>
  >;
  create?: InputMaybe<Array<Production_DataCreateWithoutUpdatedByInput>>;
  createMany?: InputMaybe<Production_DataCreateManyUpdatedByInputEnvelope>;
  delete?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Production_DataScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  set?: InputMaybe<Array<Production_DataWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Production_DataUpdateWithWhereUniqueWithoutUpdatedByInput>
  >;
  updateMany?: InputMaybe<
    Array<Production_DataUpdateManyWithWhereWithoutUpdatedByInput>
  >;
  upsert?: InputMaybe<
    Array<Production_DataUpsertWithWhereUniqueWithoutUpdatedByInput>
  >;
};

export type Production_DataUpdateWithWhereUniqueWithoutBlockInput = {
  data: Production_DataUpdateWithoutBlockInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataUpdateWithWhereUniqueWithoutUpdatedByInput = {
  data: Production_DataUpdateWithoutUpdatedByInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataUpdateWithoutBlockInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedBy?: InputMaybe<UsersUpdateOneRequiredWithoutProduction_DataNestedInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Production_DataUpdateWithoutUpdatedByInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  production?: InputMaybe<Scalars["JSON"]>;
  shift?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Production_DataUpsertWithWhereUniqueWithoutBlockInput = {
  create: Production_DataCreateWithoutBlockInput;
  update: Production_DataUpdateWithoutBlockInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataUpsertWithWhereUniqueWithoutUpdatedByInput = {
  create: Production_DataCreateWithoutUpdatedByInput;
  update: Production_DataUpdateWithoutUpdatedByInput;
  where: Production_DataWhereUniqueInput;
};

export type Production_DataWhereInput = {
  AND?: InputMaybe<Array<Production_DataWhereInput>>;
  NOT?: InputMaybe<Array<Production_DataWhereInput>>;
  OR?: InputMaybe<Array<Production_DataWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  production?: InputMaybe<JsonFilter>;
  shift?: InputMaybe<StringFilter>;
  updatedBy?: InputMaybe<UsersRelationFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  updated_by?: InputMaybe<BigIntFilter>;
};

export type Production_DataWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export type Routine_Maintanances = {
  __typename?: "routine_maintanances";
  assignee: Users;
  assignee_id: Scalars["BigInt"];
  block: Block;
  block_id: Scalars["BigInt"];
  created_at: Scalars["DateTime"];
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id: Scalars["BigInt"];
  meachine: Machines;
  meachine_id: Scalars["BigInt"];
  name: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export type Routine_MaintanancesCreateInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateManyAssigneeInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  meachine_id: Scalars["BigInt"];
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateManyAssigneeInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Routine_MaintanancesCreateManyBlockInput = {
  assignee_id: Scalars["BigInt"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  meachine_id: Scalars["BigInt"];
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateManyBlockInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyBlockInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Routine_MaintanancesCreateManyMeachineInput = {
  assignee_id: Scalars["BigInt"];
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateManyMeachineInputEnvelope = {
  data: Array<Routine_MaintanancesCreateManyMeachineInput>;
  skipDuplicates?: InputMaybe<Scalars["Boolean"]>;
};

export type Routine_MaintanancesCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
};

export type Routine_MaintanancesCreateNestedManyWithoutBlockInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyBlockInputEnvelope>;
};

export type Routine_MaintanancesCreateNestedManyWithoutMeachineInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
};

export type Routine_MaintanancesCreateOrConnectWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateOrConnectWithoutBlockInput = {
  create: Routine_MaintanancesCreateWithoutBlockInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateOrConnectWithoutMeachineInput = {
  create: Routine_MaintanancesCreateWithoutMeachineInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesCreateWithoutAssigneeInput = {
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateWithoutBlockInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  meachine: MachinesCreateNestedOneWithoutRoutine_MaintanancesInput;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesCreateWithoutMeachineInput = {
  assignee: UsersCreateNestedOneWithoutRoutine_MaintanancesInput;
  created_at?: InputMaybe<Scalars["DateTime"]>;
  cron: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  id?: InputMaybe<Scalars["BigInt"]>;
  name: Scalars["String"];
  updated_at?: InputMaybe<Scalars["DateTime"]>;
};

export type Routine_MaintanancesScalarWhereInput = {
  AND?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  NOT?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  OR?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  assignee_id?: InputMaybe<BigIntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  cron?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesSumOrderByAggregateInput = {
  assignee_id?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meachine_id?: InputMaybe<SortOrder>;
};

export type Routine_MaintanancesUpdateInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyMutationInput = {
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutBlockInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput = {
  data: Routine_MaintanancesUpdateManyMutationInput;
  where: Routine_MaintanancesScalarWhereInput;
};

export type Routine_MaintanancesUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutAssigneeInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput>
  >;
  updateMany?: InputMaybe<
    Array<Routine_MaintanancesUpdateManyWithWhereWithoutAssigneeInput>
  >;
  upsert?: InputMaybe<
    Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput>
  >;
};

export type Routine_MaintanancesUpdateManyWithoutBlockNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutBlockInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutBlockInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyBlockInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutBlockInput>
  >;
  updateMany?: InputMaybe<
    Array<Routine_MaintanancesUpdateManyWithWhereWithoutBlockInput>
  >;
  upsert?: InputMaybe<
    Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutBlockInput>
  >;
};

export type Routine_MaintanancesUpdateManyWithoutMeachineNestedInput = {
  connect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<Routine_MaintanancesCreateOrConnectWithoutMeachineInput>
  >;
  create?: InputMaybe<Array<Routine_MaintanancesCreateWithoutMeachineInput>>;
  createMany?: InputMaybe<Routine_MaintanancesCreateManyMeachineInputEnvelope>;
  delete?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Routine_MaintanancesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  set?: InputMaybe<Array<Routine_MaintanancesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<Routine_MaintanancesUpdateWithWhereUniqueWithoutMeachineInput>
  >;
  updateMany?: InputMaybe<
    Array<Routine_MaintanancesUpdateManyWithWhereWithoutMeachineInput>
  >;
  upsert?: InputMaybe<
    Array<Routine_MaintanancesUpsertWithWhereUniqueWithoutMeachineInput>
  >;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpdateWithWhereUniqueWithoutBlockInput = {
  data: Routine_MaintanancesUpdateWithoutBlockInput;
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
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateWithoutBlockInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  meachine?: InputMaybe<MachinesUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpdateWithoutMeachineInput = {
  assignee?: InputMaybe<UsersUpdateOneRequiredWithoutRoutine_MaintanancesNestedInput>;
  created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cron?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: Routine_MaintanancesCreateWithoutAssigneeInput;
  update: Routine_MaintanancesUpdateWithoutAssigneeInput;
  where: Routine_MaintanancesWhereUniqueInput;
};

export type Routine_MaintanancesUpsertWithWhereUniqueWithoutBlockInput = {
  create: Routine_MaintanancesCreateWithoutBlockInput;
  update: Routine_MaintanancesUpdateWithoutBlockInput;
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
  duration?: InputMaybe<IntFilter>;
  id?: InputMaybe<BigIntFilter>;
  meachine?: InputMaybe<MachinesRelationFilter>;
  meachine_id?: InputMaybe<BigIntFilter>;
  name?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export type Routine_MaintanancesWhereUniqueInput = {
  id?: InputMaybe<Scalars["BigInt"]>;
};

export enum Ticket_Status {
  Closed = "CLOSED",
  Open = "OPEN",
  Pending = "PENDING",
}

export type CreateBlockMutationVariables = Exact<{
  createBlockInput: BlockCreateInput;
}>;

export type CreateBlockMutation = {
  __typename?: "Mutation";
  createBlock: { __typename?: "Block"; id: any };
};

export type CreateSectionMutationVariables = Exact<{
  createSectionInput: SectionCreateWithoutMachinesInput;
}>;

export type CreateSectionMutation = {
  __typename?: "Mutation";
  createSection: { __typename?: "Section"; id: string };
};

export type CreateCatagoriesMutationVariables = Exact<{
  createCategoryInput: Machine_CatagoryCreateWithoutMachinesInput;
}>;

export type CreateCatagoriesMutation = {
  __typename?: "Mutation";
  createMachineCategory: { __typename?: "machine_catagory"; id: any };
};

export type BlockDropdownQueryVariables = Exact<{ [key: string]: never }>;

export type BlockDropdownQuery = {
  __typename?: "Query";
  blocks: Array<{ __typename?: "Block"; name: string; value: any }>;
};

export type MeachineCatagoryDropdownQueryVariables = Exact<{
  [key: string]: never;
}>;

export type MeachineCatagoryDropdownQuery = {
  __typename?: "Query";
  machineCatagories: Array<{
    __typename?: "machine_catagory";
    name: string;
    value: any;
  }>;
};

export type SectionsDropdownQueryVariables = Exact<{ [key: string]: never }>;

export type SectionsDropdownQuery = {
  __typename?: "Query";
  sections: Array<{ __typename?: "Section"; name: string; value: string }>;
};

export type BlockQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
}>;

export type BlockQuery = {
  __typename?: "Query";
  blocks: Array<{
    __typename?: "Block";
    id: any;
    name: string;
    Mailings?: Array<string> | null;
    location: string;
    _count: { __typename?: "BlockCount"; machines: number };
  }>;
};

export type SectionsQueryVariables = Exact<{
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionWhereInput>;
}>;

export type SectionsQuery = {
  __typename?: "Query";
  sections: Array<{
    __typename?: "Section";
    id: string;
    name: string;
    _count: { __typename?: "SectionCount"; machines: number };
  }>;
};

export type SectionsCountQueryVariables = Exact<{
  orderBy?: InputMaybe<SectionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SectionWhereInput>;
}>;

export type SectionsCountQuery = {
  __typename?: "Query";
  sectionsCount: number;
};

export type MachineCatagoriesQueryVariables = Exact<{
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
}>;

export type MachineCatagoriesQuery = {
  __typename?: "Query";
  machineCatagories: Array<{
    __typename?: "machine_catagory";
    id: any;
    name: string;
    _count: { __typename?: "Machine_catagoryCount"; machines: number };
  }>;
};

export type MachineCatagoriesCountQueryVariables = Exact<{
  orderBy?: InputMaybe<Machine_CatagoryOrderByWithRelationAndSearchRelevanceInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Machine_CatagoryWhereInput>;
}>;

export type MachineCatagoriesCountQuery = {
  __typename?: "Query";
  machineCatagoriesCount: number;
};

export type RemoveSectionMutationVariables = Exact<{
  removeSectionId: Scalars["Int"];
}>;

export type RemoveSectionMutation = {
  __typename?: "Mutation";
  removeSection: { __typename?: "Section"; id: string };
};

export type RemoveBlockMutationVariables = Exact<{
  removeBlockId: Scalars["Int"];
}>;

export type RemoveBlockMutation = {
  __typename?: "Mutation";
  removeBlock: { __typename?: "Block"; id: any };
};

export type RemoveMachineCatagoriesMutationVariables = Exact<{
  removeMachineCatagoriesId: Scalars["Int"];
}>;

export type RemoveMachineCatagoriesMutation = {
  __typename?: "Mutation";
  removeMachineCatagories: { __typename?: "machine_catagory"; id: any };
};

export type BlocksCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<BlockOrderByWithAggregationInput>;
  where?: InputMaybe<BlockWhereInput>;
}>;

export type BlocksCountQuery = { __typename?: "Query"; blocksCount: number };

export type UpdateBlockMutationVariables = Exact<{
  updateBlockId: Scalars["Int"];
  updateBlockInput: BlockUpdateInput;
}>;

export type UpdateBlockMutation = {
  __typename?: "Mutation";
  updateBlock: { __typename?: "Block"; id: any };
};

export type InvoicesQueryVariables = Exact<{
  where?: InputMaybe<InvoicesWhereInput>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type InvoicesQuery = {
  __typename?: "Query";
  invoices: Array<{
    __typename?: "Invoices";
    id: any;
    invoice_date: any;
    number: string;
    total: number;
    invoice_items?: Array<{
      __typename?: "invoice_items";
      id: any;
      amount: number;
      quantity: number;
      unit_price: number;
      item: {
        __typename?: "Items";
        id: any;
        name: string;
        quantity: number;
        code: string;
        unit_price: number;
        catagory: { __typename?: "catagory"; id: any; name: string };
      };
    }> | null;
  }>;
};

export type InvoiceQueryVariables = Exact<{
  invoiceId: Scalars["Int"];
}>;

export type InvoiceQuery = {
  __typename?: "Query";
  invoice: {
    __typename?: "Invoices";
    id: any;
    invoice_date: any;
    number: string;
    total: number;
    invoice_items?: Array<{
      __typename?: "invoice_items";
      id: any;
      amount: number;
      quantity: number;
      unit_price: number;
      item: {
        __typename?: "Items";
        id: any;
        name: string;
        quantity: number;
        code: string;
        unit_price: number;
        catagory: { __typename?: "catagory"; id: any; name: string };
      };
    }> | null;
  };
};

export type InvoiceCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<InvoicesWhereInput>;
  orderBy?: InputMaybe<InvoicesOrderByWithRelationAndSearchRelevanceInput>;
}>;

export type InvoiceCountQuery = { __typename?: "Query"; invoiceCount: number };

export type RemoveInvoicesMutationVariables = Exact<{
  removeInvoicesId: Scalars["Int"];
}>;

export type RemoveInvoicesMutation = {
  __typename?: "Mutation";
  removeInvoices: { __typename?: "Invoices"; id: any };
};

export type UpdateInvoicesMutationVariables = Exact<{
  updateInvoicesId: Scalars["Int"];
  updateInvoiceInput: InvoicesUpdateInput;
}>;

export type UpdateInvoicesMutation = {
  __typename?: "Mutation";
  updateInvoices: { __typename?: "Invoices"; id: any };
};

export type CreateInvoiceMutationVariables = Exact<{
  createInvoiceInput: InvoicesCreateInput;
}>;

export type CreateInvoiceMutation = {
  __typename?: "Mutation";
  createInvoice: { __typename?: "Invoices"; id: any };
};

export type ItemCataogiriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  where?: InputMaybe<ItemCatagoryWhereInput>;
}>;

export type ItemCataogiriesQuery = {
  __typename?: "Query";
  itemCatagories: Array<{
    __typename?: "ItemCatagory";
    id: string;
    name: string;
    created_at: any;
    _count: { __typename?: "CatagoryCount"; items: number };
  }>;
};

export type ItemCatagoriesCountQueryVariables = Exact<{
  where?: InputMaybe<ItemCatagoryWhereInput>;
  orderBy?: InputMaybe<ItemCatagoryOrderByWithAggregationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type ItemCatagoriesCountQuery = {
  __typename?: "Query";
  itemCatagoriesCount: number;
};

export type CreateItemCatagoryMutationVariables = Exact<{
  createItemCatagoryInput: ItemCatagoryCreateInput;
}>;

export type CreateItemCatagoryMutation = {
  __typename?: "Mutation";
  createItemCatagory: { __typename?: "ItemCatagory"; id: string };
};

export type RemoveItemCatagoryMutationVariables = Exact<{
  removeItemCatagoryId: Scalars["Int"];
}>;

export type RemoveItemCatagoryMutation = {
  __typename?: "Mutation";
  removeItemCatagory: { __typename?: "ItemCatagory"; id: string };
};

export type GetSpareCatagoryDropdownQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetSpareCatagoryDropdownQuery = {
  __typename?: "Query";
  itemCatagories: Array<{
    __typename?: "ItemCatagory";
    value: string;
    label: string;
  }>;
};

export type GetAllMachinesDropdownQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllMachinesDropdownQuery = {
  __typename?: "Query";
  machines: Array<{ __typename?: "Machines"; label: string; value: any }>;
};

export type MachinesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MachinesWhereInput>;
}>;

export type MachinesQuery = {
  __typename?: "Query";
  machines: Array<{
    __typename?: "Machines";
    id: any;
    label: string;
    name: string;
    priority: number;
    profile: any;
    section: { __typename?: "Sections"; id: any; name: string };
    machine_catagory: { __typename?: "machine_catagory"; name: string };
    block: { __typename?: "Block"; id: any; name: string };
  }>;
};

export type MachinesCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MachinesOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MachinesWhereInput>;
}>;

export type MachinesCountQuery = {
  __typename?: "Query";
  machinesCount: number;
};

export type RemoveMachineMutationVariables = Exact<{
  removeMachineId: Scalars["Int"];
}>;

export type RemoveMachineMutation = {
  __typename?: "Mutation";
  removeMachine: { __typename?: "Machines"; id: any };
};

export type CreateMachineMutationVariables = Exact<{
  createMachineInput: MachinesCreateInput;
}>;

export type CreateMachineMutation = {
  __typename?: "Mutation";
  createMachine: { __typename?: "Machines"; id: any };
};

export type UpdateMachineMutationVariables = Exact<{
  updateMachineId: Scalars["Int"];
  updateMachineInput: MachinesUpdateInput;
}>;

export type UpdateMachineMutation = {
  __typename?: "Mutation";
  updateMachine: { __typename?: "Machines"; id: any };
};

export type MaintenanceQueryVariables = Exact<{
  where?: InputMaybe<MaintenanceWhereInput>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  offset?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type MaintenanceQuery = {
  __typename?: "Query";
  maintenances: Array<{
    __typename?: "Maintenance";
    id: any;
    from: any;
    to: any;
    elapsed?: any | null;
    created_at: any;
    description: string;
    resolved: boolean;
    name: string;
    assignee: { __typename?: "Users"; id: any; name: string };
    machine: { __typename?: "Machines"; id: any; label: string };
  }>;
};

export type MaintanceCountQueryVariables = Exact<{
  where?: InputMaybe<MaintenanceWhereInput>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MaintenanceOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type MaintanceCountQuery = {
  __typename?: "Query";
  maintenanceCount: number;
};

export type GetMaintananceQueryVariables = Exact<{
  maintenanceId: Scalars["Int"];
}>;

export type GetMaintananceQuery = {
  __typename?: "Query";
  maintenance: {
    __typename?: "Maintenance";
    created_at: any;
    updated_at: any;
    photo?: string | null;
    description: string;
    name: string;
    id: any;
    from: any;
    to: any;
    assigned?: boolean | null;
    elapsed?: any | null;
    resolved: boolean;
    un_planned: boolean;
    ticket?: {
      __typename?: "Ticket";
      id: any;
      name: string;
      created_at: any;
    } | null;
    assignee: { __typename?: "Users"; id: any; name: string; phone: string };
    machine: {
      __typename?: "Machines";
      id: any;
      label: string;
      priority: number;
      block: { __typename?: "Block"; id: any; name: string };
      section: { __typename?: "Sections"; id: any; name: string };
    };
  };
};

export type UpdateMaintananceMutationVariables = Exact<{
  updateMaintananceId: Scalars["Int"];
  updateMaintananceInput: MaintenanceUpdateInput;
}>;

export type UpdateMaintananceMutation = {
  __typename?: "Mutation";
  updateMaintanance: { __typename?: "Maintenance"; id: any };
};

export type CreateMaintananceMutationVariables = Exact<{
  createMaintananceInput: MaintenanceCreateInput;
}>;

export type CreateMaintananceMutation = {
  __typename?: "Mutation";
  createMaintanance: { __typename?: "Maintenance"; id: any };
};

export type DeleteMaintananceMutationVariables = Exact<{
  removeMaintananceId: Scalars["Int"];
}>;

export type DeleteMaintananceMutation = {
  __typename?: "Mutation";
  removeMaintanance: { __typename?: "Maintenance"; id: any };
};

export type ProductionDataQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Production_DataOrderByWithAggregationInput>;
  where?: InputMaybe<Production_DataWhereInput>;
}>;

export type ProductionDataQuery = {
  __typename?: "Query";
  productionData: Array<{
    __typename?: "production_data";
    id: any;
    shift: string;
    date: any;
    production: any;
    created_at: any;
    updatedBy: { __typename?: "Users"; id: any; name: string };
  }>;
};

export type ProductionDataCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Production_DataOrderByWithAggregationInput>;
  where?: InputMaybe<Production_DataWhereInput>;
}>;

export type ProductionDataCountQuery = {
  __typename?: "Query";
  productionDataCount: number;
};

export type ProductionQueryVariables = Exact<{
  productionId: Scalars["Int"];
}>;

export type ProductionQuery = {
  __typename?: "Query";
  production: {
    __typename?: "production_data";
    id: any;
    shift: string;
    date: any;
    production: any;
    created_at: any;
    updatedBy: { __typename?: "Users"; id: any; name: string };
  };
};

export type RemoveProductionDataMutationVariables = Exact<{
  removeProductionDataId: Scalars["Int"];
}>;

export type RemoveProductionDataMutation = {
  __typename?: "Mutation";
  removeProductionData: { __typename?: "production_data"; id: any };
};

export type UpdateProductionMutationVariables = Exact<{
  updateProductionId: Scalars["Int"];
  updateProductionInput: Production_DataUpdateInput;
}>;

export type UpdateProductionMutation = {
  __typename?: "Mutation";
  updateProduction: { __typename?: "production_data"; id: any };
};

export type GetAllReplacementsQueryVariables = Exact<{
  where?: InputMaybe<ReplacementsWhereInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
}>;

export type GetAllReplacementsQuery = {
  __typename?: "Query";
  replacements: Array<{
    __typename?: "Replacements";
    id: any;
    name: string;
    created_at: any;
    approved: boolean;
    description: string;
    quantity: number;
    maintenance: {
      __typename?: "Maintenance";
      id: any;
      name: string;
      from: any;
      to: any;
      elapsed?: any | null;
      resolved: boolean;
      photo?: string | null;
      un_planned: boolean;
      assignee: { __typename?: "Users"; id: any; name: string };
      machine: {
        __typename?: "Machines";
        id: any;
        name: string;
        label: string;
        profile: any;
        section: { __typename?: "Sections"; id: any; name: string };
        machine_catagory: {
          __typename?: "machine_catagory";
          id: any;
          name: string;
        };
      };
    };
    item: {
      __typename?: "Items";
      id: any;
      name: string;
      quantity: number;
      unit_price: number;
      catagory: { __typename?: "catagory"; id: any; name: string };
    };
  }>;
};

export type GetAllReplacementsCountQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReplacementsOrderByWithRelationInput>;
  where?: InputMaybe<ReplacementsWhereInput>;
}>;

export type GetAllReplacementsCountQuery = {
  __typename?: "Query";
  replacementsCount: number;
};

export type RemoveReplacementMutationVariables = Exact<{
  removeReplacementId: Scalars["Int"];
}>;

export type RemoveReplacementMutation = {
  __typename?: "Mutation";
  removeReplacement: { __typename?: "Replacements"; id: any };
};

export type UpdateReplacementMutationVariables = Exact<{
  updateReplacementId: Scalars["Int"];
  updateReplacementInput: ReplacementsUpdateInput;
}>;

export type UpdateReplacementMutation = {
  __typename?: "Mutation";
  updateReplacement: { __typename?: "Replacements"; id: any };
};

export type RoutineMaintanancesQueryVariables = Exact<{
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type RoutineMaintanancesQuery = {
  __typename?: "Query";
  routineMaintanances: Array<{
    __typename?: "routine_maintanances";
    id: any;
    name: string;
    created_at: any;
    cron: string;
    duration: number;
    description: string;
    meachine: {
      __typename?: "Machines";
      id: any;
      name: string;
      label: string;
      section_id: any;
      block_id: any;
    };
    assignee: { __typename?: "Users"; id: any; name: string; phone: string };
  }>;
};

export type RoutineMaintanancesCountQueryVariables = Exact<{
  where?: InputMaybe<Routine_MaintanancesWhereInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Routine_MaintanancesSumOrderByAggregateInput>;
}>;

export type RoutineMaintanancesCountQuery = {
  __typename?: "Query";
  routineMaintanancesCount: number;
};

export type RoutineMaintananceQueryVariables = Exact<{
  routineMaintananceId: Scalars["Int"];
}>;

export type RoutineMaintananceQuery = {
  __typename?: "Query";
  routineMaintanance: {
    __typename?: "routine_maintanances";
    id: any;
    name: string;
    created_at: any;
    cron: string;
    duration: number;
    description: string;
    meachine: {
      __typename?: "Machines";
      id: any;
      name: string;
      label: string;
      section_id: any;
      block_id: any;
    };
    assignee: { __typename?: "Users"; id: any; name: string; phone: string };
  };
};

export type CreateRoutineMaintananceMutationVariables = Exact<{
  createRoutineMaintananceInput: Routine_MaintanancesCreateInput;
}>;

export type CreateRoutineMaintananceMutation = {
  __typename?: "Mutation";
  createRoutineMaintanance: { __typename?: "routine_maintanances"; id: any };
};

export type UpdateRoutineMaintananceMutationVariables = Exact<{
  updateRoutineMaintananceId: Scalars["Int"];
  updateRoutineMaintananceInput: Routine_MaintanancesUpdateInput;
}>;

export type UpdateRoutineMaintananceMutation = {
  __typename?: "Mutation";
  updateRoutineMaintanance: { __typename?: "routine_maintanances"; id: any };
};

export type RemoveRoutineMaintananceMutationVariables = Exact<{
  removeRoutineMaintananceId: Scalars["Int"];
}>;

export type RemoveRoutineMaintananceMutation = {
  __typename?: "Mutation";
  removeRoutineMaintanance: { __typename?: "routine_maintanances"; id: any };
};

export type GetAllSparesQueryVariables = Exact<{
  where?: InputMaybe<ItemsWhereInput>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type GetAllSparesQuery = {
  __typename?: "Query";
  items: Array<{
    __typename?: "Items";
    id: any;
    code: string;
    name: string;
    quantity: number;
    unit_price: number;
    catagory: { __typename?: "catagory"; id: any; name: string };
  }>;
};

export type SparesCountQueryVariables = Exact<{
  where?: InputMaybe<ItemsWhereInput>;
  orderBy?: InputMaybe<ItemsOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type SparesCountQuery = { __typename?: "Query"; itemsCount: number };

export type CreateSpareMutationVariables = Exact<{
  createItemInput: ItemsCreateInput;
}>;

export type CreateSpareMutation = {
  __typename?: "Mutation";
  createItem: { __typename?: "Items"; id: any };
};

export type RemoveSpareMutationVariables = Exact<{
  removeItemId: Scalars["Int"];
}>;

export type RemoveSpareMutation = {
  __typename?: "Mutation";
  removeItem: { __typename?: "Items"; id: any };
};

export type SpareDropdownQueryVariables = Exact<{ [key: string]: never }>;

export type SpareDropdownQuery = {
  __typename?: "Query";
  items: Array<{ __typename?: "Items"; value: any; label: string }>;
};

export type TicketsQueryVariables = Exact<{
  where?: InputMaybe<TicketWhereInput>;
  skip?: InputMaybe<Scalars["Float"]>;
  take?: InputMaybe<Scalars["Float"]>;
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
}>;

export type TicketsQuery = {
  __typename?: "Query";
  tickets: Array<{
    __typename?: "Ticket";
    id: any;
    description: string;
    name: string;
    photos: string;
    status: Ticket_Status;
    created_at: any;
    machine: { __typename?: "Machines"; id: any; name: string; label: string };
    user: { __typename?: "Users"; id: any; name: string };
  }>;
};

export type CreateTicketsMutationVariables = Exact<{
  createTicketInput: TicketCreateInput;
}>;

export type CreateTicketsMutation = {
  __typename?: "Mutation";
  createTicket: {
    __typename?: "Ticket";
    id: any;
    description: string;
    name: string;
    photos: string;
    status: Ticket_Status;
    created_at: any;
    machine: { __typename?: "Machines"; id: any; name: string; label: string };
    user: { __typename?: "Users"; id: any; name: string };
  };
};

export type GetTicketQueryVariables = Exact<{
  ticketId: Scalars["Int"];
}>;

export type GetTicketQuery = {
  __typename?: "Query";
  ticket: {
    __typename?: "Ticket";
    id: any;
    description: string;
    name: string;
    photos: string;
    status: Ticket_Status;
    updated_at: any;
    created_at: any;
    machine: {
      __typename?: "Machines";
      id: any;
      label: string;
      priority: number;
      block: { __typename?: "Block"; id: any; name: string };
      section: { __typename?: "Sections"; id: any; name: string };
    };
    user: { __typename?: "Users"; id: any; name: string };
  };
};

export type TicketsCountQueryVariables = Exact<{
  orderBy?: InputMaybe<TicketOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars["Float"]>;
  take?: InputMaybe<Scalars["Float"]>;
  where?: InputMaybe<TicketWhereInput>;
}>;

export type TicketsCountQuery = { __typename?: "Query"; ticketsCount: number };

export type DeleteTicketMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type DeleteTicketMutation = {
  __typename?: "Mutation";
  removeTicket: { __typename?: "Ticket"; id: any };
};

export type UsersQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "Users";
    id: any;
    name: string;
    role: Role;
    role_alias: string;
    extra_roles?: Array<Role> | null;
    profile: any;
    phone: string;
    created_at: any;
    block: { __typename?: "Block"; id: any; name: string };
  }>;
};

export type UsersCountQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type UsersCountQuery = { __typename?: "Query"; usersCount: number };

export type UsersDropDownQueryVariables = Exact<{
  where?: InputMaybe<UsersWhereInput>;
  orderBy?: InputMaybe<UsersOrderByWithRelationInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
}>;

export type UsersDropDownQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "Users";
    name: string;
    phone: string;
    value: any;
  }>;
};

export type CreateUserMutationVariables = Exact<{
  createUserInput: UsersCreateInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser: { __typename?: "Users"; id: any };
};

export type DeleteUsersMutationVariables = Exact<{
  removeUserId: Scalars["Int"];
}>;

export type DeleteUsersMutation = {
  __typename?: "Mutation";
  removeUser: { __typename?: "Users"; id: any };
};

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars["Int"];
  updateUserInput: UsersUpdateInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateUser: { __typename?: "Users"; id: any };
};

export const CreateBlockDocument = gql`
  mutation createBlock($createBlockInput: BlockCreateInput!) {
    createBlock(createBlockInput: $createBlockInput) {
      id
    }
  }
`;
export type CreateBlockMutationFn = Apollo.MutationFunction<
  CreateBlockMutation,
  CreateBlockMutationVariables
>;

/**
 * __useCreateBlockMutation__
 *
 * To run a mutation, you first call `useCreateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlockMutation, { data, loading, error }] = useCreateBlockMutation({
 *   variables: {
 *      createBlockInput: // value for 'createBlockInput'
 *   },
 * });
 */
export function useCreateBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBlockMutation,
    CreateBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBlockMutation, CreateBlockMutationVariables>(
    CreateBlockDocument,
    options
  );
}
export type CreateBlockMutationHookResult = ReturnType<
  typeof useCreateBlockMutation
>;
export type CreateBlockMutationResult =
  Apollo.MutationResult<CreateBlockMutation>;
export type CreateBlockMutationOptions = Apollo.BaseMutationOptions<
  CreateBlockMutation,
  CreateBlockMutationVariables
>;
export const CreateSectionDocument = gql`
  mutation createSection(
    $createSectionInput: SectionCreateWithoutMachinesInput!
  ) {
    createSection(createSectionInput: $createSectionInput) {
      id
    }
  }
`;
export type CreateSectionMutationFn = Apollo.MutationFunction<
  CreateSectionMutation,
  CreateSectionMutationVariables
>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      createSectionInput: // value for 'createSectionInput'
 *   },
 * });
 */
export function useCreateSectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSectionMutation,
    CreateSectionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateSectionMutation,
    CreateSectionMutationVariables
  >(CreateSectionDocument, options);
}
export type CreateSectionMutationHookResult = ReturnType<
  typeof useCreateSectionMutation
>;
export type CreateSectionMutationResult =
  Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<
  CreateSectionMutation,
  CreateSectionMutationVariables
>;
export const CreateCatagoriesDocument = gql`
  mutation createCatagories(
    $createCategoryInput: machine_catagoryCreateWithoutMachinesInput!
  ) {
    createMachineCategory(createCategoryInput: $createCategoryInput) {
      id
    }
  }
`;
export type CreateCatagoriesMutationFn = Apollo.MutationFunction<
  CreateCatagoriesMutation,
  CreateCatagoriesMutationVariables
>;

/**
 * __useCreateCatagoriesMutation__
 *
 * To run a mutation, you first call `useCreateCatagoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCatagoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCatagoriesMutation, { data, loading, error }] = useCreateCatagoriesMutation({
 *   variables: {
 *      createCategoryInput: // value for 'createCategoryInput'
 *   },
 * });
 */
export function useCreateCatagoriesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCatagoriesMutation,
    CreateCatagoriesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCatagoriesMutation,
    CreateCatagoriesMutationVariables
  >(CreateCatagoriesDocument, options);
}
export type CreateCatagoriesMutationHookResult = ReturnType<
  typeof useCreateCatagoriesMutation
>;
export type CreateCatagoriesMutationResult =
  Apollo.MutationResult<CreateCatagoriesMutation>;
export type CreateCatagoriesMutationOptions = Apollo.BaseMutationOptions<
  CreateCatagoriesMutation,
  CreateCatagoriesMutationVariables
>;
export const BlockDropdownDocument = gql`
  query blockDropdown {
    blocks {
      value: id
      name
    }
  }
`;

/**
 * __useBlockDropdownQuery__
 *
 * To run a query within a React component, call `useBlockDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlockDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlockDropdownQuery,
    BlockDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlockDropdownQuery, BlockDropdownQueryVariables>(
    BlockDropdownDocument,
    options
  );
}
export function useBlockDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlockDropdownQuery,
    BlockDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlockDropdownQuery, BlockDropdownQueryVariables>(
    BlockDropdownDocument,
    options
  );
}
export type BlockDropdownQueryHookResult = ReturnType<
  typeof useBlockDropdownQuery
>;
export type BlockDropdownLazyQueryHookResult = ReturnType<
  typeof useBlockDropdownLazyQuery
>;
export type BlockDropdownQueryResult = Apollo.QueryResult<
  BlockDropdownQuery,
  BlockDropdownQueryVariables
>;
export const MeachineCatagoryDropdownDocument = gql`
  query MeachineCatagoryDropdown {
    machineCatagories {
      value: id
      name
    }
  }
`;

/**
 * __useMeachineCatagoryDropdownQuery__
 *
 * To run a query within a React component, call `useMeachineCatagoryDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeachineCatagoryDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeachineCatagoryDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeachineCatagoryDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeachineCatagoryDropdownQuery,
    MeachineCatagoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MeachineCatagoryDropdownQuery,
    MeachineCatagoryDropdownQueryVariables
  >(MeachineCatagoryDropdownDocument, options);
}
export function useMeachineCatagoryDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeachineCatagoryDropdownQuery,
    MeachineCatagoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MeachineCatagoryDropdownQuery,
    MeachineCatagoryDropdownQueryVariables
  >(MeachineCatagoryDropdownDocument, options);
}
export type MeachineCatagoryDropdownQueryHookResult = ReturnType<
  typeof useMeachineCatagoryDropdownQuery
>;
export type MeachineCatagoryDropdownLazyQueryHookResult = ReturnType<
  typeof useMeachineCatagoryDropdownLazyQuery
>;
export type MeachineCatagoryDropdownQueryResult = Apollo.QueryResult<
  MeachineCatagoryDropdownQuery,
  MeachineCatagoryDropdownQueryVariables
>;
export const SectionsDropdownDocument = gql`
  query sectionsDropdown {
    sections {
      value: id
      name
    }
  }
`;

/**
 * __useSectionsDropdownQuery__
 *
 * To run a query within a React component, call `useSectionsDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useSectionsDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SectionsDropdownQuery,
    SectionsDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SectionsDropdownQuery, SectionsDropdownQueryVariables>(
    SectionsDropdownDocument,
    options
  );
}
export function useSectionsDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SectionsDropdownQuery,
    SectionsDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    SectionsDropdownQuery,
    SectionsDropdownQueryVariables
  >(SectionsDropdownDocument, options);
}
export type SectionsDropdownQueryHookResult = ReturnType<
  typeof useSectionsDropdownQuery
>;
export type SectionsDropdownLazyQueryHookResult = ReturnType<
  typeof useSectionsDropdownLazyQuery
>;
export type SectionsDropdownQueryResult = Apollo.QueryResult<
  SectionsDropdownQuery,
  SectionsDropdownQueryVariables
>;
export const BlockDocument = gql`
  query Block(
    $limit: Int
    $offset: Int
    $orderBy: BlockOrderByWithAggregationInput
    $where: BlockWhereInput
  ) {
    blocks(limit: $limit, offset: $offset, orderBy: $orderBy, where: $where) {
      id
      name
      Mailings
      location
      _count {
        machines
      }
    }
  }
`;

/**
 * __useBlockQuery__
 *
 * To run a query within a React component, call `useBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBlockQuery(
  baseOptions?: Apollo.QueryHookOptions<BlockQuery, BlockQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlockQuery, BlockQueryVariables>(
    BlockDocument,
    options
  );
}
export function useBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlockQuery, BlockQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlockQuery, BlockQueryVariables>(
    BlockDocument,
    options
  );
}
export type BlockQueryHookResult = ReturnType<typeof useBlockQuery>;
export type BlockLazyQueryHookResult = ReturnType<typeof useBlockLazyQuery>;
export type BlockQueryResult = Apollo.QueryResult<
  BlockQuery,
  BlockQueryVariables
>;
export const SectionsDocument = gql`
  query Sections(
    $orderBy: SectionOrderByWithRelationInput
    $skip: Int
    $take: Int
    $where: SectionWhereInput
  ) {
    sections(orderBy: $orderBy, skip: $skip, take: $take, where: $where) {
      id
      name
      _count {
        machines
      }
    }
  }
`;

/**
 * __useSectionsQuery__
 *
 * To run a query within a React component, call `useSectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<SectionsQuery, SectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SectionsQuery, SectionsQueryVariables>(
    SectionsDocument,
    options
  );
}
export function useSectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SectionsQuery,
    SectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SectionsQuery, SectionsQueryVariables>(
    SectionsDocument,
    options
  );
}
export type SectionsQueryHookResult = ReturnType<typeof useSectionsQuery>;
export type SectionsLazyQueryHookResult = ReturnType<
  typeof useSectionsLazyQuery
>;
export type SectionsQueryResult = Apollo.QueryResult<
  SectionsQuery,
  SectionsQueryVariables
>;
export const SectionsCountDocument = gql`
  query SectionsCount(
    $orderBy: SectionOrderByWithRelationInput
    $skip: Int
    $take: Int
    $where: SectionWhereInput
  ) {
    sectionsCount(orderBy: $orderBy, skip: $skip, take: $take, where: $where)
  }
`;

/**
 * __useSectionsCountQuery__
 *
 * To run a query within a React component, call `useSectionsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSectionsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSectionsCountQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSectionsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SectionsCountQuery,
    SectionsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SectionsCountQuery, SectionsCountQueryVariables>(
    SectionsCountDocument,
    options
  );
}
export function useSectionsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SectionsCountQuery,
    SectionsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SectionsCountQuery, SectionsCountQueryVariables>(
    SectionsCountDocument,
    options
  );
}
export type SectionsCountQueryHookResult = ReturnType<
  typeof useSectionsCountQuery
>;
export type SectionsCountLazyQueryHookResult = ReturnType<
  typeof useSectionsCountLazyQuery
>;
export type SectionsCountQueryResult = Apollo.QueryResult<
  SectionsCountQuery,
  SectionsCountQueryVariables
>;
export const MachineCatagoriesDocument = gql`
  query machineCatagories(
    $orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput
    $skip: Int
    $take: Int
    $where: machine_catagoryWhereInput
  ) {
    machineCatagories(
      orderBy: $orderBy
      skip: $skip
      take: $take
      where: $where
    ) {
      id
      name
      _count {
        machines
      }
    }
  }
`;

/**
 * __useMachineCatagoriesQuery__
 *
 * To run a query within a React component, call `useMachineCatagoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachineCatagoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachineCatagoriesQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMachineCatagoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MachineCatagoriesQuery,
    MachineCatagoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MachineCatagoriesQuery,
    MachineCatagoriesQueryVariables
  >(MachineCatagoriesDocument, options);
}
export function useMachineCatagoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MachineCatagoriesQuery,
    MachineCatagoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MachineCatagoriesQuery,
    MachineCatagoriesQueryVariables
  >(MachineCatagoriesDocument, options);
}
export type MachineCatagoriesQueryHookResult = ReturnType<
  typeof useMachineCatagoriesQuery
>;
export type MachineCatagoriesLazyQueryHookResult = ReturnType<
  typeof useMachineCatagoriesLazyQuery
>;
export type MachineCatagoriesQueryResult = Apollo.QueryResult<
  MachineCatagoriesQuery,
  MachineCatagoriesQueryVariables
>;
export const MachineCatagoriesCountDocument = gql`
  query machineCatagoriesCount(
    $orderBy: machine_catagoryOrderByWithRelationAndSearchRelevanceInput
    $skip: Int
    $take: Int
    $where: machine_catagoryWhereInput
  ) {
    machineCatagoriesCount(
      orderBy: $orderBy
      skip: $skip
      take: $take
      where: $where
    )
  }
`;

/**
 * __useMachineCatagoriesCountQuery__
 *
 * To run a query within a React component, call `useMachineCatagoriesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useMachineCatagoriesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMachineCatagoriesCountQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMachineCatagoriesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MachineCatagoriesCountQuery,
    MachineCatagoriesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MachineCatagoriesCountQuery,
    MachineCatagoriesCountQueryVariables
  >(MachineCatagoriesCountDocument, options);
}
export function useMachineCatagoriesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MachineCatagoriesCountQuery,
    MachineCatagoriesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MachineCatagoriesCountQuery,
    MachineCatagoriesCountQueryVariables
  >(MachineCatagoriesCountDocument, options);
}
export type MachineCatagoriesCountQueryHookResult = ReturnType<
  typeof useMachineCatagoriesCountQuery
>;
export type MachineCatagoriesCountLazyQueryHookResult = ReturnType<
  typeof useMachineCatagoriesCountLazyQuery
>;
export type MachineCatagoriesCountQueryResult = Apollo.QueryResult<
  MachineCatagoriesCountQuery,
  MachineCatagoriesCountQueryVariables
>;
export const RemoveSectionDocument = gql`
  mutation removeSection($removeSectionId: Int!) {
    removeSection(id: $removeSectionId) {
      id
    }
  }
`;
export type RemoveSectionMutationFn = Apollo.MutationFunction<
  RemoveSectionMutation,
  RemoveSectionMutationVariables
>;

/**
 * __useRemoveSectionMutation__
 *
 * To run a mutation, you first call `useRemoveSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSectionMutation, { data, loading, error }] = useRemoveSectionMutation({
 *   variables: {
 *      removeSectionId: // value for 'removeSectionId'
 *   },
 * });
 */
export function useRemoveSectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveSectionMutation,
    RemoveSectionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveSectionMutation,
    RemoveSectionMutationVariables
  >(RemoveSectionDocument, options);
}
export type RemoveSectionMutationHookResult = ReturnType<
  typeof useRemoveSectionMutation
>;
export type RemoveSectionMutationResult =
  Apollo.MutationResult<RemoveSectionMutation>;
export type RemoveSectionMutationOptions = Apollo.BaseMutationOptions<
  RemoveSectionMutation,
  RemoveSectionMutationVariables
>;
export const RemoveBlockDocument = gql`
  mutation removeBlock($removeBlockId: Int!) {
    removeBlock(id: $removeBlockId) {
      id
    }
  }
`;
export type RemoveBlockMutationFn = Apollo.MutationFunction<
  RemoveBlockMutation,
  RemoveBlockMutationVariables
>;

/**
 * __useRemoveBlockMutation__
 *
 * To run a mutation, you first call `useRemoveBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBlockMutation, { data, loading, error }] = useRemoveBlockMutation({
 *   variables: {
 *      removeBlockId: // value for 'removeBlockId'
 *   },
 * });
 */
export function useRemoveBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveBlockMutation,
    RemoveBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveBlockMutation, RemoveBlockMutationVariables>(
    RemoveBlockDocument,
    options
  );
}
export type RemoveBlockMutationHookResult = ReturnType<
  typeof useRemoveBlockMutation
>;
export type RemoveBlockMutationResult =
  Apollo.MutationResult<RemoveBlockMutation>;
export type RemoveBlockMutationOptions = Apollo.BaseMutationOptions<
  RemoveBlockMutation,
  RemoveBlockMutationVariables
>;
export const RemoveMachineCatagoriesDocument = gql`
  mutation removeMachineCatagories($removeMachineCatagoriesId: Int!) {
    removeMachineCatagories(id: $removeMachineCatagoriesId) {
      id
    }
  }
`;
export type RemoveMachineCatagoriesMutationFn = Apollo.MutationFunction<
  RemoveMachineCatagoriesMutation,
  RemoveMachineCatagoriesMutationVariables
>;

/**
 * __useRemoveMachineCatagoriesMutation__
 *
 * To run a mutation, you first call `useRemoveMachineCatagoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMachineCatagoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMachineCatagoriesMutation, { data, loading, error }] = useRemoveMachineCatagoriesMutation({
 *   variables: {
 *      removeMachineCatagoriesId: // value for 'removeMachineCatagoriesId'
 *   },
 * });
 */
export function useRemoveMachineCatagoriesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveMachineCatagoriesMutation,
    RemoveMachineCatagoriesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveMachineCatagoriesMutation,
    RemoveMachineCatagoriesMutationVariables
  >(RemoveMachineCatagoriesDocument, options);
}
export type RemoveMachineCatagoriesMutationHookResult = ReturnType<
  typeof useRemoveMachineCatagoriesMutation
>;
export type RemoveMachineCatagoriesMutationResult =
  Apollo.MutationResult<RemoveMachineCatagoriesMutation>;
export type RemoveMachineCatagoriesMutationOptions = Apollo.BaseMutationOptions<
  RemoveMachineCatagoriesMutation,
  RemoveMachineCatagoriesMutationVariables
>;
export const BlocksCountDocument = gql`
  query blocksCount(
    $limit: Int
    $offset: Int
    $orderBy: BlockOrderByWithAggregationInput
    $where: BlockWhereInput
  ) {
    blocksCount(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    )
  }
`;

/**
 * __useBlocksCountQuery__
 *
 * To run a query within a React component, call `useBlocksCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlocksCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksCountQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useBlocksCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BlocksCountQuery,
    BlocksCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlocksCountQuery, BlocksCountQueryVariables>(
    BlocksCountDocument,
    options
  );
}
export function useBlocksCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BlocksCountQuery,
    BlocksCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlocksCountQuery, BlocksCountQueryVariables>(
    BlocksCountDocument,
    options
  );
}
export type BlocksCountQueryHookResult = ReturnType<typeof useBlocksCountQuery>;
export type BlocksCountLazyQueryHookResult = ReturnType<
  typeof useBlocksCountLazyQuery
>;
export type BlocksCountQueryResult = Apollo.QueryResult<
  BlocksCountQuery,
  BlocksCountQueryVariables
>;
export const UpdateBlockDocument = gql`
  mutation updateBlock(
    $updateBlockId: Int!
    $updateBlockInput: BlockUpdateInput!
  ) {
    updateBlock(id: $updateBlockId, updateBlockInput: $updateBlockInput) {
      id
    }
  }
`;
export type UpdateBlockMutationFn = Apollo.MutationFunction<
  UpdateBlockMutation,
  UpdateBlockMutationVariables
>;

/**
 * __useUpdateBlockMutation__
 *
 * To run a mutation, you first call `useUpdateBlockMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlockMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlockMutation, { data, loading, error }] = useUpdateBlockMutation({
 *   variables: {
 *      updateBlockId: // value for 'updateBlockId'
 *      updateBlockInput: // value for 'updateBlockInput'
 *   },
 * });
 */
export function useUpdateBlockMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBlockMutation,
    UpdateBlockMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBlockMutation, UpdateBlockMutationVariables>(
    UpdateBlockDocument,
    options
  );
}
export type UpdateBlockMutationHookResult = ReturnType<
  typeof useUpdateBlockMutation
>;
export type UpdateBlockMutationResult =
  Apollo.MutationResult<UpdateBlockMutation>;
export type UpdateBlockMutationOptions = Apollo.BaseMutationOptions<
  UpdateBlockMutation,
  UpdateBlockMutationVariables
>;
export const InvoicesDocument = gql`
  query invoices(
    $where: InvoicesWhereInput
    $orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput
    $limit: Int
    $offset: Int
  ) {
    invoices(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset) {
      id
      invoice_date
      number
      total
      invoice_items {
        id
        amount
        quantity
        unit_price
        id
        item {
          id
          name
          quantity
          code
          unit_price
          catagory {
            id
            name
          }
        }
      }
    }
  }
`;

/**
 * __useInvoicesQuery__
 *
 * To run a query within a React component, call `useInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoicesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useInvoicesQuery(
  baseOptions?: Apollo.QueryHookOptions<InvoicesQuery, InvoicesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<InvoicesQuery, InvoicesQueryVariables>(
    InvoicesDocument,
    options
  );
}
export function useInvoicesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    InvoicesQuery,
    InvoicesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<InvoicesQuery, InvoicesQueryVariables>(
    InvoicesDocument,
    options
  );
}
export type InvoicesQueryHookResult = ReturnType<typeof useInvoicesQuery>;
export type InvoicesLazyQueryHookResult = ReturnType<
  typeof useInvoicesLazyQuery
>;
export type InvoicesQueryResult = Apollo.QueryResult<
  InvoicesQuery,
  InvoicesQueryVariables
>;
export const InvoiceDocument = gql`
  query invoice($invoiceId: Int!) {
    invoice(id: $invoiceId) {
      id
      invoice_date
      number
      total
      invoice_items {
        id
        amount
        quantity
        unit_price
        id
        item {
          id
          name
          quantity
          code
          unit_price
          catagory {
            id
            name
          }
        }
      }
    }
  }
`;

/**
 * __useInvoiceQuery__
 *
 * To run a query within a React component, call `useInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoiceQuery({
 *   variables: {
 *      invoiceId: // value for 'invoiceId'
 *   },
 * });
 */
export function useInvoiceQuery(
  baseOptions: Apollo.QueryHookOptions<InvoiceQuery, InvoiceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<InvoiceQuery, InvoiceQueryVariables>(
    InvoiceDocument,
    options
  );
}
export function useInvoiceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<InvoiceQuery, InvoiceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<InvoiceQuery, InvoiceQueryVariables>(
    InvoiceDocument,
    options
  );
}
export type InvoiceQueryHookResult = ReturnType<typeof useInvoiceQuery>;
export type InvoiceLazyQueryHookResult = ReturnType<typeof useInvoiceLazyQuery>;
export type InvoiceQueryResult = Apollo.QueryResult<
  InvoiceQuery,
  InvoiceQueryVariables
>;
export const InvoiceCountDocument = gql`
  query invoiceCount(
    $limit: Int
    $offset: Int
    $where: InvoicesWhereInput
    $orderBy: InvoicesOrderByWithRelationAndSearchRelevanceInput
  ) {
    invoiceCount(
      limit: $limit
      offset: $offset
      where: $where
      orderBy: $orderBy
    )
  }
`;

/**
 * __useInvoiceCountQuery__
 *
 * To run a query within a React component, call `useInvoiceCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvoiceCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvoiceCountQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useInvoiceCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    InvoiceCountQuery,
    InvoiceCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<InvoiceCountQuery, InvoiceCountQueryVariables>(
    InvoiceCountDocument,
    options
  );
}
export function useInvoiceCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    InvoiceCountQuery,
    InvoiceCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<InvoiceCountQuery, InvoiceCountQueryVariables>(
    InvoiceCountDocument,
    options
  );
}
export type InvoiceCountQueryHookResult = ReturnType<
  typeof useInvoiceCountQuery
>;
export type InvoiceCountLazyQueryHookResult = ReturnType<
  typeof useInvoiceCountLazyQuery
>;
export type InvoiceCountQueryResult = Apollo.QueryResult<
  InvoiceCountQuery,
  InvoiceCountQueryVariables
>;
export const RemoveInvoicesDocument = gql`
  mutation removeInvoices($removeInvoicesId: Int!) {
    removeInvoices(id: $removeInvoicesId) {
      id
    }
  }
`;
export type RemoveInvoicesMutationFn = Apollo.MutationFunction<
  RemoveInvoicesMutation,
  RemoveInvoicesMutationVariables
>;

/**
 * __useRemoveInvoicesMutation__
 *
 * To run a mutation, you first call `useRemoveInvoicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveInvoicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeInvoicesMutation, { data, loading, error }] = useRemoveInvoicesMutation({
 *   variables: {
 *      removeInvoicesId: // value for 'removeInvoicesId'
 *   },
 * });
 */
export function useRemoveInvoicesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveInvoicesMutation,
    RemoveInvoicesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveInvoicesMutation,
    RemoveInvoicesMutationVariables
  >(RemoveInvoicesDocument, options);
}
export type RemoveInvoicesMutationHookResult = ReturnType<
  typeof useRemoveInvoicesMutation
>;
export type RemoveInvoicesMutationResult =
  Apollo.MutationResult<RemoveInvoicesMutation>;
export type RemoveInvoicesMutationOptions = Apollo.BaseMutationOptions<
  RemoveInvoicesMutation,
  RemoveInvoicesMutationVariables
>;
export const UpdateInvoicesDocument = gql`
  mutation updateInvoices(
    $updateInvoicesId: Int!
    $updateInvoiceInput: InvoicesUpdateInput!
  ) {
    updateInvoices(
      id: $updateInvoicesId
      updateInvoiceInput: $updateInvoiceInput
    ) {
      id
    }
  }
`;
export type UpdateInvoicesMutationFn = Apollo.MutationFunction<
  UpdateInvoicesMutation,
  UpdateInvoicesMutationVariables
>;

/**
 * __useUpdateInvoicesMutation__
 *
 * To run a mutation, you first call `useUpdateInvoicesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInvoicesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInvoicesMutation, { data, loading, error }] = useUpdateInvoicesMutation({
 *   variables: {
 *      updateInvoicesId: // value for 'updateInvoicesId'
 *      updateInvoiceInput: // value for 'updateInvoiceInput'
 *   },
 * });
 */
export function useUpdateInvoicesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateInvoicesMutation,
    UpdateInvoicesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateInvoicesMutation,
    UpdateInvoicesMutationVariables
  >(UpdateInvoicesDocument, options);
}
export type UpdateInvoicesMutationHookResult = ReturnType<
  typeof useUpdateInvoicesMutation
>;
export type UpdateInvoicesMutationResult =
  Apollo.MutationResult<UpdateInvoicesMutation>;
export type UpdateInvoicesMutationOptions = Apollo.BaseMutationOptions<
  UpdateInvoicesMutation,
  UpdateInvoicesMutationVariables
>;
export const CreateInvoiceDocument = gql`
  mutation createInvoice($createInvoiceInput: InvoicesCreateInput!) {
    createInvoice(createInvoiceInput: $createInvoiceInput) {
      id
    }
  }
`;
export type CreateInvoiceMutationFn = Apollo.MutationFunction<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>;

/**
 * __useCreateInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvoiceMutation, { data, loading, error }] = useCreateInvoiceMutation({
 *   variables: {
 *      createInvoiceInput: // value for 'createInvoiceInput'
 *   },
 * });
 */
export function useCreateInvoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateInvoiceMutation,
    CreateInvoiceMutationVariables
  >(CreateInvoiceDocument, options);
}
export type CreateInvoiceMutationHookResult = ReturnType<
  typeof useCreateInvoiceMutation
>;
export type CreateInvoiceMutationResult =
  Apollo.MutationResult<CreateInvoiceMutation>;
export type CreateInvoiceMutationOptions = Apollo.BaseMutationOptions<
  CreateInvoiceMutation,
  CreateInvoiceMutationVariables
>;
export const ItemCataogiriesDocument = gql`
  query itemCataogiries(
    $limit: Int
    $offset: Int
    $orderBy: ItemCatagoryOrderByWithAggregationInput
    $where: ItemCatagoryWhereInput
  ) {
    itemCatagories(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    ) {
      id
      name
      created_at
      _count {
        items
      }
    }
  }
`;

/**
 * __useItemCataogiriesQuery__
 *
 * To run a query within a React component, call `useItemCataogiriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemCataogiriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemCataogiriesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useItemCataogiriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ItemCataogiriesQuery,
    ItemCataogiriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ItemCataogiriesQuery, ItemCataogiriesQueryVariables>(
    ItemCataogiriesDocument,
    options
  );
}
export function useItemCataogiriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ItemCataogiriesQuery,
    ItemCataogiriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ItemCataogiriesQuery,
    ItemCataogiriesQueryVariables
  >(ItemCataogiriesDocument, options);
}
export type ItemCataogiriesQueryHookResult = ReturnType<
  typeof useItemCataogiriesQuery
>;
export type ItemCataogiriesLazyQueryHookResult = ReturnType<
  typeof useItemCataogiriesLazyQuery
>;
export type ItemCataogiriesQueryResult = Apollo.QueryResult<
  ItemCataogiriesQuery,
  ItemCataogiriesQueryVariables
>;
export const ItemCatagoriesCountDocument = gql`
  query itemCatagoriesCount(
    $where: ItemCatagoryWhereInput
    $orderBy: ItemCatagoryOrderByWithAggregationInput
    $limit: Int
    $offset: Int
  ) {
    itemCatagoriesCount(
      where: $where
      orderBy: $orderBy
      limit: $limit
      offset: $offset
    )
  }
`;

/**
 * __useItemCatagoriesCountQuery__
 *
 * To run a query within a React component, call `useItemCatagoriesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemCatagoriesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemCatagoriesCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useItemCatagoriesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ItemCatagoriesCountQuery,
    ItemCatagoriesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ItemCatagoriesCountQuery,
    ItemCatagoriesCountQueryVariables
  >(ItemCatagoriesCountDocument, options);
}
export function useItemCatagoriesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ItemCatagoriesCountQuery,
    ItemCatagoriesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ItemCatagoriesCountQuery,
    ItemCatagoriesCountQueryVariables
  >(ItemCatagoriesCountDocument, options);
}
export type ItemCatagoriesCountQueryHookResult = ReturnType<
  typeof useItemCatagoriesCountQuery
>;
export type ItemCatagoriesCountLazyQueryHookResult = ReturnType<
  typeof useItemCatagoriesCountLazyQuery
>;
export type ItemCatagoriesCountQueryResult = Apollo.QueryResult<
  ItemCatagoriesCountQuery,
  ItemCatagoriesCountQueryVariables
>;
export const CreateItemCatagoryDocument = gql`
  mutation createItemCatagory(
    $createItemCatagoryInput: ItemCatagoryCreateInput!
  ) {
    createItemCatagory(createItemCatagoryInput: $createItemCatagoryInput) {
      id
    }
  }
`;
export type CreateItemCatagoryMutationFn = Apollo.MutationFunction<
  CreateItemCatagoryMutation,
  CreateItemCatagoryMutationVariables
>;

/**
 * __useCreateItemCatagoryMutation__
 *
 * To run a mutation, you first call `useCreateItemCatagoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemCatagoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemCatagoryMutation, { data, loading, error }] = useCreateItemCatagoryMutation({
 *   variables: {
 *      createItemCatagoryInput: // value for 'createItemCatagoryInput'
 *   },
 * });
 */
export function useCreateItemCatagoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateItemCatagoryMutation,
    CreateItemCatagoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateItemCatagoryMutation,
    CreateItemCatagoryMutationVariables
  >(CreateItemCatagoryDocument, options);
}
export type CreateItemCatagoryMutationHookResult = ReturnType<
  typeof useCreateItemCatagoryMutation
>;
export type CreateItemCatagoryMutationResult =
  Apollo.MutationResult<CreateItemCatagoryMutation>;
export type CreateItemCatagoryMutationOptions = Apollo.BaseMutationOptions<
  CreateItemCatagoryMutation,
  CreateItemCatagoryMutationVariables
>;
export const RemoveItemCatagoryDocument = gql`
  mutation removeItemCatagory($removeItemCatagoryId: Int!) {
    removeItemCatagory(id: $removeItemCatagoryId) {
      id
    }
  }
`;
export type RemoveItemCatagoryMutationFn = Apollo.MutationFunction<
  RemoveItemCatagoryMutation,
  RemoveItemCatagoryMutationVariables
>;

/**
 * __useRemoveItemCatagoryMutation__
 *
 * To run a mutation, you first call `useRemoveItemCatagoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemCatagoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemCatagoryMutation, { data, loading, error }] = useRemoveItemCatagoryMutation({
 *   variables: {
 *      removeItemCatagoryId: // value for 'removeItemCatagoryId'
 *   },
 * });
 */
export function useRemoveItemCatagoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveItemCatagoryMutation,
    RemoveItemCatagoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveItemCatagoryMutation,
    RemoveItemCatagoryMutationVariables
  >(RemoveItemCatagoryDocument, options);
}
export type RemoveItemCatagoryMutationHookResult = ReturnType<
  typeof useRemoveItemCatagoryMutation
>;
export type RemoveItemCatagoryMutationResult =
  Apollo.MutationResult<RemoveItemCatagoryMutation>;
export type RemoveItemCatagoryMutationOptions = Apollo.BaseMutationOptions<
  RemoveItemCatagoryMutation,
  RemoveItemCatagoryMutationVariables
>;
export const GetSpareCatagoryDropdownDocument = gql`
  query getSpareCatagoryDropdown {
    itemCatagories {
      value: id
      label: name
    }
  }
`;

/**
 * __useGetSpareCatagoryDropdownQuery__
 *
 * To run a query within a React component, call `useGetSpareCatagoryDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpareCatagoryDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpareCatagoryDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpareCatagoryDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSpareCatagoryDropdownQuery,
    GetSpareCatagoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSpareCatagoryDropdownQuery,
    GetSpareCatagoryDropdownQueryVariables
  >(GetSpareCatagoryDropdownDocument, options);
}
export function useGetSpareCatagoryDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSpareCatagoryDropdownQuery,
    GetSpareCatagoryDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSpareCatagoryDropdownQuery,
    GetSpareCatagoryDropdownQueryVariables
  >(GetSpareCatagoryDropdownDocument, options);
}
export type GetSpareCatagoryDropdownQueryHookResult = ReturnType<
  typeof useGetSpareCatagoryDropdownQuery
>;
export type GetSpareCatagoryDropdownLazyQueryHookResult = ReturnType<
  typeof useGetSpareCatagoryDropdownLazyQuery
>;
export type GetSpareCatagoryDropdownQueryResult = Apollo.QueryResult<
  GetSpareCatagoryDropdownQuery,
  GetSpareCatagoryDropdownQueryVariables
>;
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
export function useGetAllMachinesDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllMachinesDropdownQuery,
    GetAllMachinesDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllMachinesDropdownQuery,
    GetAllMachinesDropdownQueryVariables
  >(GetAllMachinesDropdownDocument, options);
}
export function useGetAllMachinesDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllMachinesDropdownQuery,
    GetAllMachinesDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllMachinesDropdownQuery,
    GetAllMachinesDropdownQueryVariables
  >(GetAllMachinesDropdownDocument, options);
}
export type GetAllMachinesDropdownQueryHookResult = ReturnType<
  typeof useGetAllMachinesDropdownQuery
>;
export type GetAllMachinesDropdownLazyQueryHookResult = ReturnType<
  typeof useGetAllMachinesDropdownLazyQuery
>;
export type GetAllMachinesDropdownQueryResult = Apollo.QueryResult<
  GetAllMachinesDropdownQuery,
  GetAllMachinesDropdownQueryVariables
>;
export const MachinesDocument = gql`
  query Machines(
    $limit: Int
    $orderBy: MachinesOrderByWithRelationInput
    $offset: Int
    $where: MachinesWhereInput
  ) {
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
      machine_catagory {
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
export function useMachinesQuery(
  baseOptions?: Apollo.QueryHookOptions<MachinesQuery, MachinesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MachinesQuery, MachinesQueryVariables>(
    MachinesDocument,
    options
  );
}
export function useMachinesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MachinesQuery,
    MachinesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MachinesQuery, MachinesQueryVariables>(
    MachinesDocument,
    options
  );
}
export type MachinesQueryHookResult = ReturnType<typeof useMachinesQuery>;
export type MachinesLazyQueryHookResult = ReturnType<
  typeof useMachinesLazyQuery
>;
export type MachinesQueryResult = Apollo.QueryResult<
  MachinesQuery,
  MachinesQueryVariables
>;
export const MachinesCountDocument = gql`
  query MachinesCount(
    $limit: Int
    $orderBy: MachinesOrderByWithRelationInput
    $offset: Int
    $where: MachinesWhereInput
  ) {
    machinesCount(
      limit: $limit
      orderBy: $orderBy
      offset: $offset
      where: $where
    )
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
export function useMachinesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MachinesCountQuery,
    MachinesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MachinesCountQuery, MachinesCountQueryVariables>(
    MachinesCountDocument,
    options
  );
}
export function useMachinesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MachinesCountQuery,
    MachinesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MachinesCountQuery, MachinesCountQueryVariables>(
    MachinesCountDocument,
    options
  );
}
export type MachinesCountQueryHookResult = ReturnType<
  typeof useMachinesCountQuery
>;
export type MachinesCountLazyQueryHookResult = ReturnType<
  typeof useMachinesCountLazyQuery
>;
export type MachinesCountQueryResult = Apollo.QueryResult<
  MachinesCountQuery,
  MachinesCountQueryVariables
>;
export const RemoveMachineDocument = gql`
  mutation removeMachine($removeMachineId: Int!) {
    removeMachine(id: $removeMachineId) {
      id
    }
  }
`;
export type RemoveMachineMutationFn = Apollo.MutationFunction<
  RemoveMachineMutation,
  RemoveMachineMutationVariables
>;

/**
 * __useRemoveMachineMutation__
 *
 * To run a mutation, you first call `useRemoveMachineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMachineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMachineMutation, { data, loading, error }] = useRemoveMachineMutation({
 *   variables: {
 *      removeMachineId: // value for 'removeMachineId'
 *   },
 * });
 */
export function useRemoveMachineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveMachineMutation,
    RemoveMachineMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveMachineMutation,
    RemoveMachineMutationVariables
  >(RemoveMachineDocument, options);
}
export type RemoveMachineMutationHookResult = ReturnType<
  typeof useRemoveMachineMutation
>;
export type RemoveMachineMutationResult =
  Apollo.MutationResult<RemoveMachineMutation>;
export type RemoveMachineMutationOptions = Apollo.BaseMutationOptions<
  RemoveMachineMutation,
  RemoveMachineMutationVariables
>;
export const CreateMachineDocument = gql`
  mutation createMachine($createMachineInput: MachinesCreateInput!) {
    createMachine(createMachineInput: $createMachineInput) {
      id
    }
  }
`;
export type CreateMachineMutationFn = Apollo.MutationFunction<
  CreateMachineMutation,
  CreateMachineMutationVariables
>;

/**
 * __useCreateMachineMutation__
 *
 * To run a mutation, you first call `useCreateMachineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMachineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMachineMutation, { data, loading, error }] = useCreateMachineMutation({
 *   variables: {
 *      createMachineInput: // value for 'createMachineInput'
 *   },
 * });
 */
export function useCreateMachineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMachineMutation,
    CreateMachineMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMachineMutation,
    CreateMachineMutationVariables
  >(CreateMachineDocument, options);
}
export type CreateMachineMutationHookResult = ReturnType<
  typeof useCreateMachineMutation
>;
export type CreateMachineMutationResult =
  Apollo.MutationResult<CreateMachineMutation>;
export type CreateMachineMutationOptions = Apollo.BaseMutationOptions<
  CreateMachineMutation,
  CreateMachineMutationVariables
>;
export const UpdateMachineDocument = gql`
  mutation updateMachine(
    $updateMachineId: Int!
    $updateMachineInput: MachinesUpdateInput!
  ) {
    updateMachine(
      id: $updateMachineId
      updateMachineInput: $updateMachineInput
    ) {
      id
    }
  }
`;
export type UpdateMachineMutationFn = Apollo.MutationFunction<
  UpdateMachineMutation,
  UpdateMachineMutationVariables
>;

/**
 * __useUpdateMachineMutation__
 *
 * To run a mutation, you first call `useUpdateMachineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMachineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMachineMutation, { data, loading, error }] = useUpdateMachineMutation({
 *   variables: {
 *      updateMachineId: // value for 'updateMachineId'
 *      updateMachineInput: // value for 'updateMachineInput'
 *   },
 * });
 */
export function useUpdateMachineMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMachineMutation,
    UpdateMachineMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMachineMutation,
    UpdateMachineMutationVariables
  >(UpdateMachineDocument, options);
}
export type UpdateMachineMutationHookResult = ReturnType<
  typeof useUpdateMachineMutation
>;
export type UpdateMachineMutationResult =
  Apollo.MutationResult<UpdateMachineMutation>;
export type UpdateMachineMutationOptions = Apollo.BaseMutationOptions<
  UpdateMachineMutation,
  UpdateMachineMutationVariables
>;
export const MaintenanceDocument = gql`
  query Maintenance(
    $where: MaintenanceWhereInput
    $orderBy: MaintenanceOrderByWithRelationInput
    $offset: Int
    $limit: Int
  ) {
    maintenances(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
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
export function useMaintenanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MaintenanceQuery,
    MaintenanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MaintenanceQuery, MaintenanceQueryVariables>(
    MaintenanceDocument,
    options
  );
}
export function useMaintenanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MaintenanceQuery,
    MaintenanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MaintenanceQuery, MaintenanceQueryVariables>(
    MaintenanceDocument,
    options
  );
}
export type MaintenanceQueryHookResult = ReturnType<typeof useMaintenanceQuery>;
export type MaintenanceLazyQueryHookResult = ReturnType<
  typeof useMaintenanceLazyQuery
>;
export type MaintenanceQueryResult = Apollo.QueryResult<
  MaintenanceQuery,
  MaintenanceQueryVariables
>;
export const MaintanceCountDocument = gql`
  query maintanceCount(
    $where: MaintenanceWhereInput
    $offset: Int
    $orderBy: MaintenanceOrderByWithRelationInput
    $limit: Int
  ) {
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
export function useMaintanceCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MaintanceCountQuery,
    MaintanceCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MaintanceCountQuery, MaintanceCountQueryVariables>(
    MaintanceCountDocument,
    options
  );
}
export function useMaintanceCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MaintanceCountQuery,
    MaintanceCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MaintanceCountQuery, MaintanceCountQueryVariables>(
    MaintanceCountDocument,
    options
  );
}
export type MaintanceCountQueryHookResult = ReturnType<
  typeof useMaintanceCountQuery
>;
export type MaintanceCountLazyQueryHookResult = ReturnType<
  typeof useMaintanceCountLazyQuery
>;
export type MaintanceCountQueryResult = Apollo.QueryResult<
  MaintanceCountQuery,
  MaintanceCountQueryVariables
>;
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
export function useGetMaintananceQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMaintananceQuery,
    GetMaintananceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(
    GetMaintananceDocument,
    options
  );
}
export function useGetMaintananceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMaintananceQuery,
    GetMaintananceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMaintananceQuery, GetMaintananceQueryVariables>(
    GetMaintananceDocument,
    options
  );
}
export type GetMaintananceQueryHookResult = ReturnType<
  typeof useGetMaintananceQuery
>;
export type GetMaintananceLazyQueryHookResult = ReturnType<
  typeof useGetMaintananceLazyQuery
>;
export type GetMaintananceQueryResult = Apollo.QueryResult<
  GetMaintananceQuery,
  GetMaintananceQueryVariables
>;
export const UpdateMaintananceDocument = gql`
  mutation updateMaintanance(
    $updateMaintananceId: Int!
    $updateMaintananceInput: MaintenanceUpdateInput!
  ) {
    updateMaintanance(
      id: $updateMaintananceId
      updateMaintananceInput: $updateMaintananceInput
    ) {
      id
    }
  }
`;
export type UpdateMaintananceMutationFn = Apollo.MutationFunction<
  UpdateMaintananceMutation,
  UpdateMaintananceMutationVariables
>;

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
export function useUpdateMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMaintananceMutation,
    UpdateMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMaintananceMutation,
    UpdateMaintananceMutationVariables
  >(UpdateMaintananceDocument, options);
}
export type UpdateMaintananceMutationHookResult = ReturnType<
  typeof useUpdateMaintananceMutation
>;
export type UpdateMaintananceMutationResult =
  Apollo.MutationResult<UpdateMaintananceMutation>;
export type UpdateMaintananceMutationOptions = Apollo.BaseMutationOptions<
  UpdateMaintananceMutation,
  UpdateMaintananceMutationVariables
>;
export const CreateMaintananceDocument = gql`
  mutation createMaintanance($createMaintananceInput: MaintenanceCreateInput!) {
    createMaintanance(createMaintananceInput: $createMaintananceInput) {
      id
    }
  }
`;
export type CreateMaintananceMutationFn = Apollo.MutationFunction<
  CreateMaintananceMutation,
  CreateMaintananceMutationVariables
>;

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
export function useCreateMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMaintananceMutation,
    CreateMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMaintananceMutation,
    CreateMaintananceMutationVariables
  >(CreateMaintananceDocument, options);
}
export type CreateMaintananceMutationHookResult = ReturnType<
  typeof useCreateMaintananceMutation
>;
export type CreateMaintananceMutationResult =
  Apollo.MutationResult<CreateMaintananceMutation>;
export type CreateMaintananceMutationOptions = Apollo.BaseMutationOptions<
  CreateMaintananceMutation,
  CreateMaintananceMutationVariables
>;
export const DeleteMaintananceDocument = gql`
  mutation deleteMaintanance($removeMaintananceId: Int!) {
    removeMaintanance(id: $removeMaintananceId) {
      id
    }
  }
`;
export type DeleteMaintananceMutationFn = Apollo.MutationFunction<
  DeleteMaintananceMutation,
  DeleteMaintananceMutationVariables
>;

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
export function useDeleteMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMaintananceMutation,
    DeleteMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMaintananceMutation,
    DeleteMaintananceMutationVariables
  >(DeleteMaintananceDocument, options);
}
export type DeleteMaintananceMutationHookResult = ReturnType<
  typeof useDeleteMaintananceMutation
>;
export type DeleteMaintananceMutationResult =
  Apollo.MutationResult<DeleteMaintananceMutation>;
export type DeleteMaintananceMutationOptions = Apollo.BaseMutationOptions<
  DeleteMaintananceMutation,
  DeleteMaintananceMutationVariables
>;
export const ProductionDataDocument = gql`
  query productionData(
    $limit: Int
    $offset: Int
    $orderBy: production_dataOrderByWithAggregationInput
    $where: production_dataWhereInput
  ) {
    productionData(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    ) {
      id
      updatedBy {
        id
        name
      }
      shift
      date
      production
      created_at
    }
  }
`;

/**
 * __useProductionDataQuery__
 *
 * To run a query within a React component, call `useProductionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductionDataQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductionDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProductionDataQuery,
    ProductionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductionDataQuery, ProductionDataQueryVariables>(
    ProductionDataDocument,
    options
  );
}
export function useProductionDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductionDataQuery,
    ProductionDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductionDataQuery, ProductionDataQueryVariables>(
    ProductionDataDocument,
    options
  );
}
export type ProductionDataQueryHookResult = ReturnType<
  typeof useProductionDataQuery
>;
export type ProductionDataLazyQueryHookResult = ReturnType<
  typeof useProductionDataLazyQuery
>;
export type ProductionDataQueryResult = Apollo.QueryResult<
  ProductionDataQuery,
  ProductionDataQueryVariables
>;
export const ProductionDataCountDocument = gql`
  query productionDataCount(
    $limit: Int
    $offset: Int
    $orderBy: production_dataOrderByWithAggregationInput
    $where: production_dataWhereInput
  ) {
    productionDataCount(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    )
  }
`;

/**
 * __useProductionDataCountQuery__
 *
 * To run a query within a React component, call `useProductionDataCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductionDataCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductionDataCountQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductionDataCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ProductionDataCountQuery,
    ProductionDataCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ProductionDataCountQuery,
    ProductionDataCountQueryVariables
  >(ProductionDataCountDocument, options);
}
export function useProductionDataCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductionDataCountQuery,
    ProductionDataCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ProductionDataCountQuery,
    ProductionDataCountQueryVariables
  >(ProductionDataCountDocument, options);
}
export type ProductionDataCountQueryHookResult = ReturnType<
  typeof useProductionDataCountQuery
>;
export type ProductionDataCountLazyQueryHookResult = ReturnType<
  typeof useProductionDataCountLazyQuery
>;
export type ProductionDataCountQueryResult = Apollo.QueryResult<
  ProductionDataCountQuery,
  ProductionDataCountQueryVariables
>;
export const ProductionDocument = gql`
  query production($productionId: Int!) {
    production(id: $productionId) {
      id
      updatedBy {
        id
        name
      }
      shift
      date
      production
      created_at
    }
  }
`;

/**
 * __useProductionQuery__
 *
 * To run a query within a React component, call `useProductionQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductionQuery({
 *   variables: {
 *      productionId: // value for 'productionId'
 *   },
 * });
 */
export function useProductionQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProductionQuery,
    ProductionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProductionQuery, ProductionQueryVariables>(
    ProductionDocument,
    options
  );
}
export function useProductionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductionQuery,
    ProductionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProductionQuery, ProductionQueryVariables>(
    ProductionDocument,
    options
  );
}
export type ProductionQueryHookResult = ReturnType<typeof useProductionQuery>;
export type ProductionLazyQueryHookResult = ReturnType<
  typeof useProductionLazyQuery
>;
export type ProductionQueryResult = Apollo.QueryResult<
  ProductionQuery,
  ProductionQueryVariables
>;
export const RemoveProductionDataDocument = gql`
  mutation removeProductionData($removeProductionDataId: Int!) {
    removeProductionData(id: $removeProductionDataId) {
      id
    }
  }
`;
export type RemoveProductionDataMutationFn = Apollo.MutationFunction<
  RemoveProductionDataMutation,
  RemoveProductionDataMutationVariables
>;

/**
 * __useRemoveProductionDataMutation__
 *
 * To run a mutation, you first call `useRemoveProductionDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductionDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductionDataMutation, { data, loading, error }] = useRemoveProductionDataMutation({
 *   variables: {
 *      removeProductionDataId: // value for 'removeProductionDataId'
 *   },
 * });
 */
export function useRemoveProductionDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveProductionDataMutation,
    RemoveProductionDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveProductionDataMutation,
    RemoveProductionDataMutationVariables
  >(RemoveProductionDataDocument, options);
}
export type RemoveProductionDataMutationHookResult = ReturnType<
  typeof useRemoveProductionDataMutation
>;
export type RemoveProductionDataMutationResult =
  Apollo.MutationResult<RemoveProductionDataMutation>;
export type RemoveProductionDataMutationOptions = Apollo.BaseMutationOptions<
  RemoveProductionDataMutation,
  RemoveProductionDataMutationVariables
>;
export const UpdateProductionDocument = gql`
  mutation updateProduction(
    $updateProductionId: Int!
    $updateProductionInput: production_dataUpdateInput!
  ) {
    updateProduction(
      id: $updateProductionId
      updateProductionInput: $updateProductionInput
    ) {
      id
    }
  }
`;
export type UpdateProductionMutationFn = Apollo.MutationFunction<
  UpdateProductionMutation,
  UpdateProductionMutationVariables
>;

/**
 * __useUpdateProductionMutation__
 *
 * To run a mutation, you first call `useUpdateProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductionMutation, { data, loading, error }] = useUpdateProductionMutation({
 *   variables: {
 *      updateProductionId: // value for 'updateProductionId'
 *      updateProductionInput: // value for 'updateProductionInput'
 *   },
 * });
 */
export function useUpdateProductionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductionMutation,
    UpdateProductionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductionMutation,
    UpdateProductionMutationVariables
  >(UpdateProductionDocument, options);
}
export type UpdateProductionMutationHookResult = ReturnType<
  typeof useUpdateProductionMutation
>;
export type UpdateProductionMutationResult =
  Apollo.MutationResult<UpdateProductionMutation>;
export type UpdateProductionMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductionMutation,
  UpdateProductionMutationVariables
>;
export const GetAllReplacementsDocument = gql`
  query getAllReplacements(
    $where: ReplacementsWhereInput
    $limit: Int
    $offset: Int
    $orderBy: ReplacementsOrderByWithRelationInput
  ) {
    replacements(
      where: $where
      limit: $limit
      offset: $offset
      orderBy: $orderBy
    ) {
      id
      name
      created_at
      approved
      description
      quantity
      maintenance {
        id
        name
        from
        to
        assignee {
          id
          name
        }
        elapsed
        resolved
        photo
        un_planned
        machine {
          id
          name
          section {
            id
            name
          }
          machine_catagory {
            id
            name
          }
          label
          profile
        }
      }
      item {
        id
        name
        quantity
        unit_price
        catagory {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetAllReplacementsQuery__
 *
 * To run a query within a React component, call `useGetAllReplacementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReplacementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReplacementsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetAllReplacementsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllReplacementsQuery,
    GetAllReplacementsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllReplacementsQuery,
    GetAllReplacementsQueryVariables
  >(GetAllReplacementsDocument, options);
}
export function useGetAllReplacementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllReplacementsQuery,
    GetAllReplacementsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllReplacementsQuery,
    GetAllReplacementsQueryVariables
  >(GetAllReplacementsDocument, options);
}
export type GetAllReplacementsQueryHookResult = ReturnType<
  typeof useGetAllReplacementsQuery
>;
export type GetAllReplacementsLazyQueryHookResult = ReturnType<
  typeof useGetAllReplacementsLazyQuery
>;
export type GetAllReplacementsQueryResult = Apollo.QueryResult<
  GetAllReplacementsQuery,
  GetAllReplacementsQueryVariables
>;
export const GetAllReplacementsCountDocument = gql`
  query getAllReplacementsCount(
    $limit: Int
    $offset: Int
    $orderBy: ReplacementsOrderByWithRelationInput
    $where: ReplacementsWhereInput
  ) {
    replacementsCount(
      limit: $limit
      offset: $offset
      orderBy: $orderBy
      where: $where
    )
  }
`;

/**
 * __useGetAllReplacementsCountQuery__
 *
 * To run a query within a React component, call `useGetAllReplacementsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReplacementsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReplacementsCountQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetAllReplacementsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllReplacementsCountQuery,
    GetAllReplacementsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllReplacementsCountQuery,
    GetAllReplacementsCountQueryVariables
  >(GetAllReplacementsCountDocument, options);
}
export function useGetAllReplacementsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllReplacementsCountQuery,
    GetAllReplacementsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllReplacementsCountQuery,
    GetAllReplacementsCountQueryVariables
  >(GetAllReplacementsCountDocument, options);
}
export type GetAllReplacementsCountQueryHookResult = ReturnType<
  typeof useGetAllReplacementsCountQuery
>;
export type GetAllReplacementsCountLazyQueryHookResult = ReturnType<
  typeof useGetAllReplacementsCountLazyQuery
>;
export type GetAllReplacementsCountQueryResult = Apollo.QueryResult<
  GetAllReplacementsCountQuery,
  GetAllReplacementsCountQueryVariables
>;
export const RemoveReplacementDocument = gql`
  mutation removeReplacement($removeReplacementId: Int!) {
    removeReplacement(id: $removeReplacementId) {
      id
    }
  }
`;
export type RemoveReplacementMutationFn = Apollo.MutationFunction<
  RemoveReplacementMutation,
  RemoveReplacementMutationVariables
>;

/**
 * __useRemoveReplacementMutation__
 *
 * To run a mutation, you first call `useRemoveReplacementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReplacementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReplacementMutation, { data, loading, error }] = useRemoveReplacementMutation({
 *   variables: {
 *      removeReplacementId: // value for 'removeReplacementId'
 *   },
 * });
 */
export function useRemoveReplacementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveReplacementMutation,
    RemoveReplacementMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveReplacementMutation,
    RemoveReplacementMutationVariables
  >(RemoveReplacementDocument, options);
}
export type RemoveReplacementMutationHookResult = ReturnType<
  typeof useRemoveReplacementMutation
>;
export type RemoveReplacementMutationResult =
  Apollo.MutationResult<RemoveReplacementMutation>;
export type RemoveReplacementMutationOptions = Apollo.BaseMutationOptions<
  RemoveReplacementMutation,
  RemoveReplacementMutationVariables
>;
export const UpdateReplacementDocument = gql`
  mutation updateReplacement(
    $updateReplacementId: Int!
    $updateReplacementInput: ReplacementsUpdateInput!
  ) {
    updateReplacement(
      id: $updateReplacementId
      updateReplacementInput: $updateReplacementInput
    ) {
      id
    }
  }
`;
export type UpdateReplacementMutationFn = Apollo.MutationFunction<
  UpdateReplacementMutation,
  UpdateReplacementMutationVariables
>;

/**
 * __useUpdateReplacementMutation__
 *
 * To run a mutation, you first call `useUpdateReplacementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReplacementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReplacementMutation, { data, loading, error }] = useUpdateReplacementMutation({
 *   variables: {
 *      updateReplacementId: // value for 'updateReplacementId'
 *      updateReplacementInput: // value for 'updateReplacementInput'
 *   },
 * });
 */
export function useUpdateReplacementMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateReplacementMutation,
    UpdateReplacementMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateReplacementMutation,
    UpdateReplacementMutationVariables
  >(UpdateReplacementDocument, options);
}
export type UpdateReplacementMutationHookResult = ReturnType<
  typeof useUpdateReplacementMutation
>;
export type UpdateReplacementMutationResult =
  Apollo.MutationResult<UpdateReplacementMutation>;
export type UpdateReplacementMutationOptions = Apollo.BaseMutationOptions<
  UpdateReplacementMutation,
  UpdateReplacementMutationVariables
>;
export const RoutineMaintanancesDocument = gql`
  query routineMaintanances(
    $where: routine_maintanancesWhereInput
    $limit: Int
    $orderBy: routine_maintanancesSumOrderByAggregateInput
    $offset: Int
  ) {
    routineMaintanances(
      where: $where
      limit: $limit
      orderBy: $orderBy
      offset: $offset
    ) {
      id
      name
      created_at
      cron
      duration
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
export function useRoutineMaintanancesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RoutineMaintanancesQuery,
    RoutineMaintanancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RoutineMaintanancesQuery,
    RoutineMaintanancesQueryVariables
  >(RoutineMaintanancesDocument, options);
}
export function useRoutineMaintanancesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoutineMaintanancesQuery,
    RoutineMaintanancesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RoutineMaintanancesQuery,
    RoutineMaintanancesQueryVariables
  >(RoutineMaintanancesDocument, options);
}
export type RoutineMaintanancesQueryHookResult = ReturnType<
  typeof useRoutineMaintanancesQuery
>;
export type RoutineMaintanancesLazyQueryHookResult = ReturnType<
  typeof useRoutineMaintanancesLazyQuery
>;
export type RoutineMaintanancesQueryResult = Apollo.QueryResult<
  RoutineMaintanancesQuery,
  RoutineMaintanancesQueryVariables
>;
export const RoutineMaintanancesCountDocument = gql`
  query routineMaintanancesCount(
    $where: routine_maintanancesWhereInput
    $limit: Int
    $offset: Int
    $orderBy: routine_maintanancesSumOrderByAggregateInput
  ) {
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
export function useRoutineMaintanancesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RoutineMaintanancesCountQuery,
    RoutineMaintanancesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RoutineMaintanancesCountQuery,
    RoutineMaintanancesCountQueryVariables
  >(RoutineMaintanancesCountDocument, options);
}
export function useRoutineMaintanancesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoutineMaintanancesCountQuery,
    RoutineMaintanancesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RoutineMaintanancesCountQuery,
    RoutineMaintanancesCountQueryVariables
  >(RoutineMaintanancesCountDocument, options);
}
export type RoutineMaintanancesCountQueryHookResult = ReturnType<
  typeof useRoutineMaintanancesCountQuery
>;
export type RoutineMaintanancesCountLazyQueryHookResult = ReturnType<
  typeof useRoutineMaintanancesCountLazyQuery
>;
export type RoutineMaintanancesCountQueryResult = Apollo.QueryResult<
  RoutineMaintanancesCountQuery,
  RoutineMaintanancesCountQueryVariables
>;
export const RoutineMaintananceDocument = gql`
  query routineMaintanance($routineMaintananceId: Int!) {
    routineMaintanance(id: $routineMaintananceId) {
      id
      name
      created_at
      cron
      duration
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
export function useRoutineMaintananceQuery(
  baseOptions: Apollo.QueryHookOptions<
    RoutineMaintananceQuery,
    RoutineMaintananceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RoutineMaintananceQuery,
    RoutineMaintananceQueryVariables
  >(RoutineMaintananceDocument, options);
}
export function useRoutineMaintananceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RoutineMaintananceQuery,
    RoutineMaintananceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RoutineMaintananceQuery,
    RoutineMaintananceQueryVariables
  >(RoutineMaintananceDocument, options);
}
export type RoutineMaintananceQueryHookResult = ReturnType<
  typeof useRoutineMaintananceQuery
>;
export type RoutineMaintananceLazyQueryHookResult = ReturnType<
  typeof useRoutineMaintananceLazyQuery
>;
export type RoutineMaintananceQueryResult = Apollo.QueryResult<
  RoutineMaintananceQuery,
  RoutineMaintananceQueryVariables
>;
export const CreateRoutineMaintananceDocument = gql`
  mutation createRoutineMaintanance(
    $createRoutineMaintananceInput: routine_maintanancesCreateInput!
  ) {
    createRoutineMaintanance(
      createRoutineMaintananceInput: $createRoutineMaintananceInput
    ) {
      id
    }
  }
`;
export type CreateRoutineMaintananceMutationFn = Apollo.MutationFunction<
  CreateRoutineMaintananceMutation,
  CreateRoutineMaintananceMutationVariables
>;

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
export function useCreateRoutineMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRoutineMaintananceMutation,
    CreateRoutineMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRoutineMaintananceMutation,
    CreateRoutineMaintananceMutationVariables
  >(CreateRoutineMaintananceDocument, options);
}
export type CreateRoutineMaintananceMutationHookResult = ReturnType<
  typeof useCreateRoutineMaintananceMutation
>;
export type CreateRoutineMaintananceMutationResult =
  Apollo.MutationResult<CreateRoutineMaintananceMutation>;
export type CreateRoutineMaintananceMutationOptions =
  Apollo.BaseMutationOptions<
    CreateRoutineMaintananceMutation,
    CreateRoutineMaintananceMutationVariables
  >;
export const UpdateRoutineMaintananceDocument = gql`
  mutation updateRoutineMaintanance(
    $updateRoutineMaintananceId: Int!
    $updateRoutineMaintananceInput: routine_maintanancesUpdateInput!
  ) {
    updateRoutineMaintanance(
      id: $updateRoutineMaintananceId
      updateRoutineMaintananceInput: $updateRoutineMaintananceInput
    ) {
      id
    }
  }
`;
export type UpdateRoutineMaintananceMutationFn = Apollo.MutationFunction<
  UpdateRoutineMaintananceMutation,
  UpdateRoutineMaintananceMutationVariables
>;

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
export function useUpdateRoutineMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateRoutineMaintananceMutation,
    UpdateRoutineMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateRoutineMaintananceMutation,
    UpdateRoutineMaintananceMutationVariables
  >(UpdateRoutineMaintananceDocument, options);
}
export type UpdateRoutineMaintananceMutationHookResult = ReturnType<
  typeof useUpdateRoutineMaintananceMutation
>;
export type UpdateRoutineMaintananceMutationResult =
  Apollo.MutationResult<UpdateRoutineMaintananceMutation>;
export type UpdateRoutineMaintananceMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateRoutineMaintananceMutation,
    UpdateRoutineMaintananceMutationVariables
  >;
export const RemoveRoutineMaintananceDocument = gql`
  mutation removeRoutineMaintanance($removeRoutineMaintananceId: Int!) {
    removeRoutineMaintanance(id: $removeRoutineMaintananceId) {
      id
    }
  }
`;
export type RemoveRoutineMaintananceMutationFn = Apollo.MutationFunction<
  RemoveRoutineMaintananceMutation,
  RemoveRoutineMaintananceMutationVariables
>;

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
export function useRemoveRoutineMaintananceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveRoutineMaintananceMutation,
    RemoveRoutineMaintananceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveRoutineMaintananceMutation,
    RemoveRoutineMaintananceMutationVariables
  >(RemoveRoutineMaintananceDocument, options);
}
export type RemoveRoutineMaintananceMutationHookResult = ReturnType<
  typeof useRemoveRoutineMaintananceMutation
>;
export type RemoveRoutineMaintananceMutationResult =
  Apollo.MutationResult<RemoveRoutineMaintananceMutation>;
export type RemoveRoutineMaintananceMutationOptions =
  Apollo.BaseMutationOptions<
    RemoveRoutineMaintananceMutation,
    RemoveRoutineMaintananceMutationVariables
  >;
export const GetAllSparesDocument = gql`
  query getAllSpares(
    $where: ItemsWhereInput
    $orderBy: ItemsOrderByWithRelationInput
    $limit: Int
    $offset: Int
  ) {
    items(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset) {
      id
      catagory {
        id
        name
      }
      code
      name
      quantity
      unit_price
    }
  }
`;

/**
 * __useGetAllSparesQuery__
 *
 * To run a query within a React component, call `useGetAllSparesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSparesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSparesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllSparesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllSparesQuery,
    GetAllSparesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllSparesQuery, GetAllSparesQueryVariables>(
    GetAllSparesDocument,
    options
  );
}
export function useGetAllSparesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllSparesQuery,
    GetAllSparesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllSparesQuery, GetAllSparesQueryVariables>(
    GetAllSparesDocument,
    options
  );
}
export type GetAllSparesQueryHookResult = ReturnType<
  typeof useGetAllSparesQuery
>;
export type GetAllSparesLazyQueryHookResult = ReturnType<
  typeof useGetAllSparesLazyQuery
>;
export type GetAllSparesQueryResult = Apollo.QueryResult<
  GetAllSparesQuery,
  GetAllSparesQueryVariables
>;
export const SparesCountDocument = gql`
  query sparesCount(
    $where: ItemsWhereInput
    $orderBy: ItemsOrderByWithRelationInput
    $limit: Int
    $offset: Int
  ) {
    itemsCount(where: $where, orderBy: $orderBy, limit: $limit, offset: $offset)
  }
`;

/**
 * __useSparesCountQuery__
 *
 * To run a query within a React component, call `useSparesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useSparesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSparesCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useSparesCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SparesCountQuery,
    SparesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SparesCountQuery, SparesCountQueryVariables>(
    SparesCountDocument,
    options
  );
}
export function useSparesCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SparesCountQuery,
    SparesCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SparesCountQuery, SparesCountQueryVariables>(
    SparesCountDocument,
    options
  );
}
export type SparesCountQueryHookResult = ReturnType<typeof useSparesCountQuery>;
export type SparesCountLazyQueryHookResult = ReturnType<
  typeof useSparesCountLazyQuery
>;
export type SparesCountQueryResult = Apollo.QueryResult<
  SparesCountQuery,
  SparesCountQueryVariables
>;
export const CreateSpareDocument = gql`
  mutation createSpare($createItemInput: ItemsCreateInput!) {
    createItem(createItemInput: $createItemInput) {
      id
    }
  }
`;
export type CreateSpareMutationFn = Apollo.MutationFunction<
  CreateSpareMutation,
  CreateSpareMutationVariables
>;

/**
 * __useCreateSpareMutation__
 *
 * To run a mutation, you first call `useCreateSpareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpareMutation, { data, loading, error }] = useCreateSpareMutation({
 *   variables: {
 *      createItemInput: // value for 'createItemInput'
 *   },
 * });
 */
export function useCreateSpareMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSpareMutation,
    CreateSpareMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSpareMutation, CreateSpareMutationVariables>(
    CreateSpareDocument,
    options
  );
}
export type CreateSpareMutationHookResult = ReturnType<
  typeof useCreateSpareMutation
>;
export type CreateSpareMutationResult =
  Apollo.MutationResult<CreateSpareMutation>;
export type CreateSpareMutationOptions = Apollo.BaseMutationOptions<
  CreateSpareMutation,
  CreateSpareMutationVariables
>;
export const RemoveSpareDocument = gql`
  mutation removeSpare($removeItemId: Int!) {
    removeItem(id: $removeItemId) {
      id
    }
  }
`;
export type RemoveSpareMutationFn = Apollo.MutationFunction<
  RemoveSpareMutation,
  RemoveSpareMutationVariables
>;

/**
 * __useRemoveSpareMutation__
 *
 * To run a mutation, you first call `useRemoveSpareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSpareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSpareMutation, { data, loading, error }] = useRemoveSpareMutation({
 *   variables: {
 *      removeItemId: // value for 'removeItemId'
 *   },
 * });
 */
export function useRemoveSpareMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveSpareMutation,
    RemoveSpareMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveSpareMutation, RemoveSpareMutationVariables>(
    RemoveSpareDocument,
    options
  );
}
export type RemoveSpareMutationHookResult = ReturnType<
  typeof useRemoveSpareMutation
>;
export type RemoveSpareMutationResult =
  Apollo.MutationResult<RemoveSpareMutation>;
export type RemoveSpareMutationOptions = Apollo.BaseMutationOptions<
  RemoveSpareMutation,
  RemoveSpareMutationVariables
>;
export const SpareDropdownDocument = gql`
  query spareDropdown {
    items {
      value: id
      label: name
    }
  }
`;

/**
 * __useSpareDropdownQuery__
 *
 * To run a query within a React component, call `useSpareDropdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpareDropdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpareDropdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useSpareDropdownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SpareDropdownQuery,
    SpareDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SpareDropdownQuery, SpareDropdownQueryVariables>(
    SpareDropdownDocument,
    options
  );
}
export function useSpareDropdownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SpareDropdownQuery,
    SpareDropdownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SpareDropdownQuery, SpareDropdownQueryVariables>(
    SpareDropdownDocument,
    options
  );
}
export type SpareDropdownQueryHookResult = ReturnType<
  typeof useSpareDropdownQuery
>;
export type SpareDropdownLazyQueryHookResult = ReturnType<
  typeof useSpareDropdownLazyQuery
>;
export type SpareDropdownQueryResult = Apollo.QueryResult<
  SpareDropdownQuery,
  SpareDropdownQueryVariables
>;
export const TicketsDocument = gql`
  query Tickets(
    $where: TicketWhereInput
    $skip: Float
    $take: Float
    $orderBy: TicketOrderByWithRelationInput
  ) {
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
export function useTicketsQuery(
  baseOptions?: Apollo.QueryHookOptions<TicketsQuery, TicketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TicketsQuery, TicketsQueryVariables>(
    TicketsDocument,
    options
  );
}
export function useTicketsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TicketsQuery, TicketsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TicketsQuery, TicketsQueryVariables>(
    TicketsDocument,
    options
  );
}
export type TicketsQueryHookResult = ReturnType<typeof useTicketsQuery>;
export type TicketsLazyQueryHookResult = ReturnType<typeof useTicketsLazyQuery>;
export type TicketsQueryResult = Apollo.QueryResult<
  TicketsQuery,
  TicketsQueryVariables
>;
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
export type CreateTicketsMutationFn = Apollo.MutationFunction<
  CreateTicketsMutation,
  CreateTicketsMutationVariables
>;

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
export function useCreateTicketsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTicketsMutation,
    CreateTicketsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateTicketsMutation,
    CreateTicketsMutationVariables
  >(CreateTicketsDocument, options);
}
export type CreateTicketsMutationHookResult = ReturnType<
  typeof useCreateTicketsMutation
>;
export type CreateTicketsMutationResult =
  Apollo.MutationResult<CreateTicketsMutation>;
export type CreateTicketsMutationOptions = Apollo.BaseMutationOptions<
  CreateTicketsMutation,
  CreateTicketsMutationVariables
>;
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
export function useGetTicketQuery(
  baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(
    GetTicketDocument,
    options
  );
}
export function useGetTicketLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTicketQuery,
    GetTicketQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(
    GetTicketDocument,
    options
  );
}
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<
  typeof useGetTicketLazyQuery
>;
export type GetTicketQueryResult = Apollo.QueryResult<
  GetTicketQuery,
  GetTicketQueryVariables
>;
export const TicketsCountDocument = gql`
  query ticketsCount(
    $orderBy: TicketOrderByWithRelationInput
    $skip: Float
    $take: Float
    $where: TicketWhereInput
  ) {
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
export function useTicketsCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TicketsCountQuery,
    TicketsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TicketsCountQuery, TicketsCountQueryVariables>(
    TicketsCountDocument,
    options
  );
}
export function useTicketsCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TicketsCountQuery,
    TicketsCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TicketsCountQuery, TicketsCountQueryVariables>(
    TicketsCountDocument,
    options
  );
}
export type TicketsCountQueryHookResult = ReturnType<
  typeof useTicketsCountQuery
>;
export type TicketsCountLazyQueryHookResult = ReturnType<
  typeof useTicketsCountLazyQuery
>;
export type TicketsCountQueryResult = Apollo.QueryResult<
  TicketsCountQuery,
  TicketsCountQueryVariables
>;
export const DeleteTicketDocument = gql`
  mutation deleteTicket($id: Int!) {
    removeTicket(id: $id) {
      id
    }
  }
`;
export type DeleteTicketMutationFn = Apollo.MutationFunction<
  DeleteTicketMutation,
  DeleteTicketMutationVariables
>;

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
export function useDeleteTicketMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteTicketMutation,
    DeleteTicketMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteTicketMutation,
    DeleteTicketMutationVariables
  >(DeleteTicketDocument, options);
}
export type DeleteTicketMutationHookResult = ReturnType<
  typeof useDeleteTicketMutation
>;
export type DeleteTicketMutationResult =
  Apollo.MutationResult<DeleteTicketMutation>;
export type DeleteTicketMutationOptions = Apollo.BaseMutationOptions<
  DeleteTicketMutation,
  DeleteTicketMutationVariables
>;
export const UsersDocument = gql`
  query Users(
    $where: UsersWhereInput
    $offset: Int
    $orderBy: UsersOrderByWithRelationInput
    $limit: Int
  ) {
    users(where: $where, offset: $offset, orderBy: $orderBy, limit: $limit) {
      id
      name
      role
      role_alias
      extra_roles
      block {
        id
        name
      }
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
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UsersCountDocument = gql`
  query usersCount(
    $where: UsersWhereInput
    $orderBy: UsersOrderByWithRelationInput
    $limit: Int
    $offset: Int
  ) {
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
export function useUsersCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsersCountQuery,
    UsersCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersCountQuery, UsersCountQueryVariables>(
    UsersCountDocument,
    options
  );
}
export function useUsersCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersCountQuery,
    UsersCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersCountQuery, UsersCountQueryVariables>(
    UsersCountDocument,
    options
  );
}
export type UsersCountQueryHookResult = ReturnType<typeof useUsersCountQuery>;
export type UsersCountLazyQueryHookResult = ReturnType<
  typeof useUsersCountLazyQuery
>;
export type UsersCountQueryResult = Apollo.QueryResult<
  UsersCountQuery,
  UsersCountQueryVariables
>;
export const UsersDropDownDocument = gql`
  query usersDropDown(
    $where: UsersWhereInput
    $orderBy: UsersOrderByWithRelationInput
    $limit: Int
    $offset: Int
  ) {
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
export function useUsersDropDownQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UsersDropDownQuery,
    UsersDropDownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(
    UsersDropDownDocument,
    options
  );
}
export function useUsersDropDownLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersDropDownQuery,
    UsersDropDownQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersDropDownQuery, UsersDropDownQueryVariables>(
    UsersDropDownDocument,
    options
  );
}
export type UsersDropDownQueryHookResult = ReturnType<
  typeof useUsersDropDownQuery
>;
export type UsersDropDownLazyQueryHookResult = ReturnType<
  typeof useUsersDropDownLazyQuery
>;
export type UsersDropDownQueryResult = Apollo.QueryResult<
  UsersDropDownQuery,
  UsersDropDownQueryVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($createUserInput: UsersCreateInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

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
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const DeleteUsersDocument = gql`
  mutation deleteUsers($removeUserId: Int!) {
    removeUser(id: $removeUserId) {
      id
    }
  }
`;
export type DeleteUsersMutationFn = Apollo.MutationFunction<
  DeleteUsersMutation,
  DeleteUsersMutationVariables
>;

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
export function useDeleteUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUsersMutation,
    DeleteUsersMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUsersMutation, DeleteUsersMutationVariables>(
    DeleteUsersDocument,
    options
  );
}
export type DeleteUsersMutationHookResult = ReturnType<
  typeof useDeleteUsersMutation
>;
export type DeleteUsersMutationResult =
  Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<
  DeleteUsersMutation,
  DeleteUsersMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser(
    $updateUserId: Int!
    $updateUserInput: UsersUpdateInput!
  ) {
    updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {
      id
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserId: // value for 'updateUserId'
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
