import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

import {ReadStream} from 'fs-capacitor';

interface GraphQLFileUpload {
  filename: string
  mimetype: string
  encoding: string
  createReadStream(options?:{encoding?: string, highWaterMark?: number}): ReadStream
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Data level project parser */
  DataLevelProject: EDataLevel.Project;
  /** Data level task parser */
  DataLevelTask: EDataLevel.Task;
  /** Data level team parser */
  DataLevelTeam: EDataLevel.Team;
  /** The `Upload` scalar type represents a file upload. */
  Upload: Promise<GraphQLFileUpload>;
}

export interface IAuthDirectGoogleVerify {
  url: Scalars['String'];
}

export interface IAuthLogin {
  name: Scalars['String'];
  tokenInfo: ITokenInfo;
}

export interface IAuthLoginByGoogleInput {
  code: Scalars['String'];
}

export interface IAuthLoginInput {
  account: Scalars['String'];
  password: Scalars['String'];
}

export interface IAuthLoginWithGoogle {
  name: Scalars['String'];
  tokenInfo: ITokenInfo;
}

export interface IAuthRefreshToken {
  tokenInfo: ITokenInfo;
}

export interface IAuthRefreshTokenInput {
  refreshToken: Scalars['String'];
}

export interface IAuthResetPasswordInput {
  confirmNewPassword: Scalars['String'];
  email: Scalars['String'];
  newPassword: Scalars['String'];
  verifyCode: Scalars['String'];
  verifyCodeId: Scalars['String'];
}

export interface IAuthSendVerifyCode {
  message: Scalars['String'];
  verifyCodeId: Scalars['String'];
}

export interface IAuthSendVerifyCodeInput {
  email: Scalars['String'];
}

export interface IAuthSignUp {
  message: Scalars['String'];
  name: Scalars['String'];
  tokenInfo: ITokenInfo;
}

export interface IAuthSignUpInput {
  account: Scalars['String'];
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  verifyCode: Scalars['String'];
  verifyCodeId: Scalars['String'];
}

export interface IAvatar {
  path?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
}

export interface IBookmark {
  /** 國家 */
  country?: Maybe<ECountry>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  desc?: Maybe<Scalars['String']>;
  devUrl?: Maybe<Scalars['String']>;
  evaluateUrl?: Maybe<Scalars['String']>;
  /** 頭像網址 */
  faviconUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  remark?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface IBookmarkCreateInput {
  country?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  devUrl?: InputMaybe<Scalars['String']>;
  evaluateUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remark?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IBookmarkUpdateInput {
  country?: InputMaybe<Scalars['String']>;
  desc?: InputMaybe<Scalars['String']>;
  devUrl?: InputMaybe<Scalars['String']>;
  evaluateUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  remark?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}

export interface IBookmarksWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IBookmark>;
}

export interface IBookmarksWithPaginationSearchInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface ICategoryGroupCount {
  /** 需求 */
  feat?: Maybe<Scalars['Int']>;
  /** 需求 */
  fix?: Maybe<Scalars['Int']>;
  /** 優化 */
  refactor?: Maybe<Scalars['Int']>;
}

export interface IComment {
  content: Scalars['String'];
  id: Scalars['String'];
}

export interface ICustomer {
  /** 地址 */
  address?: Maybe<Scalars['String']>;
  /** 頭像網址 */
  avatarUrl?: Maybe<Scalars['String']>;
  /** 城市 */
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 預設交易幣別 */
  defaultTransactionCurrency: ETransactionCurrency;
  desc?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** 傳真 */
  fax?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEnable: Scalars['Boolean'];
  name: Scalars['String'];
  /** 專案 */
  projects?: Maybe<Array<IProject>>;
  /** 備註 */
  remark?: Maybe<Scalars['String']>;
  serialNumber: Scalars['Int'];
  /** 編號 */
  sn?: Maybe<Scalars['String']>;
  /** 電話 */
  tel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 網址 */
  website?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
  /** 郵遞區號 */
  zipCode?: Maybe<Scalars['String']>;
}

export interface ICustomerCreateInput {
  /** 地址 */
  address?: InputMaybe<Scalars['String']>;
  /** 城市 */
  city?: InputMaybe<Scalars['String']>;
  /** 預設交易幣別 */
  defaultTransactionCurrency?: InputMaybe<ETransactionCurrency>;
  desc?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** 傳真 */
  fax?: InputMaybe<Scalars['String']>;
  /** isEnable */
  isEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  /** Remark */
  remark?: InputMaybe<Scalars['String']>;
  /** 電話 */
  tel?: InputMaybe<Scalars['String']>;
  /** 郵遞區號 */
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface ICustomerUpdateInput {
  /** 地址 */
  address?: InputMaybe<Scalars['String']>;
  /** 城市 */
  city?: InputMaybe<Scalars['String']>;
  /** 預設交易幣別 */
  defaultTransactionCurrency?: InputMaybe<ETransactionCurrency>;
  desc?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** 傳真 */
  fax?: InputMaybe<Scalars['String']>;
  /** isEnable */
  isEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  /** Remark */
  remark?: InputMaybe<Scalars['String']>;
  /** 電話 */
  tel?: InputMaybe<Scalars['String']>;
  /** 郵遞區號 */
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface ICustomersWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<ICustomer>;
}

export interface ICustomersWithPaginationSearchInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface IDashboardCategoryGroup {
  /** 類別群組統計 */
  categoryGroupCount: ICategoryGroupCount;
}

export interface IDashboardCount {
  /** 類別群組統計 */
  categoryGroupCount: ICategoryGroupCount;
  /** 活動熱力數據 */
  graphList: Array<IGraph>;
  /** 本月已完成任務 */
  thisMonthDoneTask: Scalars['Float'];
  /** 總未處理任務 */
  thisMonthWaitProcessedTask: Scalars['Int'];
  /** 本月工作時數 */
  thisMonthWorkHour: Scalars['Float'];
  /** 本週已完成任務 */
  thisWeekDoneTask: Scalars['Int'];
  /** 本週未處理任務 */
  thisWeekWaitProcessedTask: Scalars['Int'];
  /** 本週工作時數 */
  thisWeekWorkHour: Scalars['Float'];
  /** 今日排定任務 */
  todayScheduleTask: Scalars['Int'];
}

export interface IDashboardGraph {
  /** 活動熱力數據 */
  graphList: Array<IGraph>;
}

export interface IDashboardOsInfo {
  cpuCount: Scalars['Int'];
  gcHeapStats: Scalars['Int'];
  memoryTotal: Scalars['Int'];
}

export interface IDateRange {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
}

/** 地區代碼 */
export enum ECountry {
  /** Australia */
  Aus = 'AUS',
  /** China */
  Chn = 'CHN',
  /** Hong Kong */
  Hkg = 'HKG',
  /** Indonesia */
  Idn = 'IDN',
  /** Japan */
  Jpn = 'JPN',
  /** Korea */
  Kor = 'KOR',
  /** Malaysia */
  Mys = 'MYS',
  /** Philippines */
  Phl = 'PHL',
  /** Singapore */
  Sgp = 'SGP',
  /** Thailand */
  Tha = 'THA',
  /** Taiwan */
  Twa = 'TWA',
  /** America */
  Usa = 'USA',
  /** Vietnam */
  Vnm = 'VNM'
}

/** 任務訊息類別 */
export enum EEvaluateCommentCategory {
  /** 操作記錄 */
  Log = 'log',
  /** 留言訊息 */
  Message = 'message'
}

/** 任務紀錄更改欄位項目 */
export enum EEvaluateCommentUpdateField {
  /** 指派開發者 */
  AssignDeveloper = 'assignDeveloper',
  AssignMerger = 'assignMerger',
  /** 指派測試者 */
  AssignTester = 'assignTester',
  /** 類別 */
  Category = 'category',
  Create = 'create',
  EstimateWorkTime = 'estimateWorkTime',
  EstimatesDate = 'estimatesDate',
  Move = 'move',
  /** 優先權 */
  Priority = 'priority',
  Repo = 'repo',
  SkillPoint = 'skillPoint',
  /** 狀態 */
  Status = 'status'
}

/** 連結方式 */
export enum EEvaluateLinkMode {
  /** 來源 */
  From = 'from',
  /** 目標 */
  To = 'to'
}

/** 評估狀態 */
export enum EEvaluateStatus {
  /** 已取消 */
  Cancel = 'cancel',
  /** 已完成 */
  Done = 'done',
  /** 有需要調整或修正 */
  NeedFix = 'needFix',
  /** 暫停 */
  Pause = 'pause',
  /** 處理中 */
  Processing = 'processing',
  /** 已準備完成可以開始的任務 */
  ReadyStart = 'readyStart',
  /** 需等待確認, 無法開始 */
  WaitConfirm = 'waitConfirm',
  /** 等待測試人員測試 */
  WaitTested = 'waitTested'
}

/** Git平台 */
export enum EGitPlatform {
  /** Bitbucket */
  Bitbucket = 'bitbucket',
  /** Github */
  Github = 'github',
  /** Gitlab */
  Gitlab = 'gitlab'
}

/** Icon symbols download type */
export enum EIconSvgDownloadType {
  /** Flutter file */
  Flutter = 'flutter',
  /** SVG file */
  Svg = 'svg',
  /** Typescript file */
  Typescript = 'typescript'
}

/** 登入裝置 */
export enum ELoginDeviceCode {
  /** 桌面裝置 */
  Desktop = 'desktop',
  /** 行動裝置 */
  Mobile = 'mobile',
  Tablet = 'tablet'
}

/** 付款事件類型 */
export enum EPaymentEventType {
  /** 付款取消 */
  Cancelled = 'cancelled',
  /** 付款成功 */
  Completed = 'completed',
  /** 付款失敗 */
  Denied = 'denied'
}

/** 付款方式 */
export enum EPaymentType {
  /** 藍星金流 */
  BlueStar = 'blueStar',
  /** PayPal */
  Paypal = 'paypal'
}

/** 專案便利貼 */
export enum EProjectNoteCategory {
  /** 超連結 */
  Link = 'link',
  /** 文字 */
  Text = 'text'
}

/** 專案狀態 */
export enum EProjectStatus {
  /** 已取消 */
  Cancel = 'cancel',
  /** 已完成 */
  Done = 'done',
  /** 處理中 */
  Processing = 'processing',
  /** 已準備完成可以開始的任務 */
  ReadyStart = 'readyStart',
  /** 需等待確認, 無法開始 */
  WaitConfirm = 'waitConfirm'
}

/** 指定專案 */
export enum EProjectTarget {
  /** 虛擬專案 */
  Virtual = 'virtual'
}

/** 報價狀態 */
export enum EQuotationStatus {
  /** 取消 */
  Cancel = 'cancel',
  /** 客戶拒絕 */
  CustomerAgree = 'customerAgree',
  /** 客戶同意 */
  CustomerRejects = 'customerRejects',
  /** 估價中 */
  UnderEvaluation = 'underEvaluation',
  /** 待確認需求 */
  WaitConfirm = 'waitConfirm',
  /** 待客戶同意報價 */
  WaitCustomCheck = 'waitCustomCheck'
}

/** 庫平台版本 */
export enum ERepoPlatform {
  /** APP(同構版本) */
  App = 'app',
  /** Android APP */
  AppAndroid = 'appAndroid',
  /** IOS APP */
  AppIos = 'appIOS',
  /** 網頁版 */
  Web = 'web',
  /** 桌面網頁版 */
  WebDesktop = 'webDesktop',
  /** 手機網頁版 */
  WebMobile = 'webMobile'
}

/** 註冊方法 */
export enum ESignUpMethod {
  /** account */
  Account = 'account',
  /** googleOAuth */
  GoogleOAuth = 'googleOAuth'
}

/** 任務指派人類型 */
export enum ETaskAssignType {
  /** 開發人員 */
  Developer = 'developer',
  Merger = 'merger',
  /** 測試人員 */
  Tester = 'tester'
}

/** 任務類型 */
export enum ETaskCategory {
  /** 需求 */
  Feat = 'feat',
  /** 修正 */
  Fix = 'fix',
  /** 優化 */
  Refactor = 'refactor'
}

/** 任務更改類型 */
export enum ETaskChangeType {
  /** 類別 */
  Category = 'category',
  /** 複製 */
  Clone = 'clone',
  /** 留言新增 */
  CommentAdd = 'commentAdd',
  /** 留言變更 */
  CommentChange = 'commentChange',
  /** 留言刪除 */
  CommentRemove = 'commentRemove',
  /** 新增 */
  Create = 'create',
  /** 交付日 */
  DeadlineDate = 'deadlineDate',
  Developer = 'developer',
  /** 完成時間 */
  DoneWorkTime = 'doneWorkTime',
  /** 預估時間 */
  EstimateDate = 'estimateDate',
  /** 預估時間 */
  EstimateWorkTime = 'estimateWorkTime',
  /** 檔案新增 */
  FileAdd = 'fileAdd',
  /** 檔案移除 */
  FileRemove = 'fileRemove',
  /** 檔案更名 */
  FileRename = 'fileRename',
  /** 是否封存 */
  IsArchive = 'isArchive',
  IsMomentous = 'isMomentous',
  /** 加入專案 */
  JoinProject = 'joinProject',
  /** 離開專案 */
  LeaveProject = 'leaveProject',
  Merger = 'merger',
  /** 移動 */
  Move = 'move',
  /** 優先度 */
  Priority = 'priority',
  /** 進度 */
  ProgressRate = 'progressRate',
  ReleaseVersion = 'releaseVersion',
  /** 移除 */
  Remove = 'remove',
  SkillPoint = 'skillPoint',
  /** 狀態 */
  Status = 'status',
  Tester = 'tester',
  /** 標題 */
  Title = 'title'
}

/** 任務訊息類別 */
export enum ETaskCommentCategory {
  /** 操作記錄 */
  Log = 'log',
  /** 留言訊息 */
  Message = 'message'
}

/** 任務紀錄更改欄位項目 */
export enum ETaskCommentUpdateField {
  /** 封存 */
  Archive = 'archive',
  /** 指派開發者 */
  AssignDeveloper = 'assignDeveloper',
  /** 指派合併者 */
  AssignMerger = 'assignMerger',
  /** 指派測試者 */
  AssignTester = 'assignTester',
  /** 類別 */
  Category = 'category',
  /** 克隆任務 */
  Clone = 'clone',
  /** 建立任務 */
  Create = 'create',
  /** 預估工作時間 */
  EstimateWorkTime = 'estimateWorkTime',
  /** 預估日期 */
  EstimatesDate = 'estimatesDate',
  /** 加入專案 */
  JoinProject = 'joinProject',
  /** 離開專案 */
  LeaveProject = 'leaveProject',
  /** 重要 */
  Momentous = 'momentous',
  /** 移動任務 */
  Move = 'move',
  /** 優先權 */
  Priority = 'priority',
  /** 進度 */
  ProgressRate = 'progressRate',
  /** 狀態 */
  Status = 'status',
  UpdateReleaseVersion = 'updateReleaseVersion'
}

/** 連結方式 */
export enum ETaskLinkMode {
  /** 來源 */
  From = 'from',
  /** 目標 */
  To = 'to'
}

/** 任務優先度 */
export enum ETaskPriority {
  /** 高 */
  High = 'high',
  /** 低 */
  Low = 'low',
  /** 中 */
  Medium = 'medium'
}

/** 任務狀態模板 */
export enum ETaskStatusTemplateCode {
  /** 完整 */
  Complete = 'complete',
  /** 預設 */
  Default = 'default'
}

/** 任務狀態觸發 */
export enum ETaskStatusTrigger {
  /** git分支合併 */
  GitBranchMerged = 'gitBranchMerged',
  /** Git合併請求 */
  GitPullRequest = 'gitPullRequest'
}

/** 任務測試裝置 */
export enum ETaskTestDevice {
  /** 桌面瀏覽器Chrome */
  DesktopChrome = 'desktopChrome',
  /** 桌面瀏覽器Firefox */
  DesktopFirefox = 'desktopFirefox',
  /** 桌面瀏覽器Safari */
  DesktopSafari = 'desktopSafari',
  /** 手機瀏覽器Chrome */
  MobileChrome = 'mobileChrome',
  /** 手機瀏覽器Firefox */
  MobileFirefox = 'mobileFirefox',
  /** 手機瀏覽器Safari */
  MobileSafari = 'mobileSafari'
}

/** 任務類型 */
export enum ETaskType {
  /** 問題處理任務 */
  Issue = 'issue',
  /** 專案任務 */
  Project = 'project'
}

/** 團隊角色 */
export enum ETeamMemberRole {
  /** 開發者 */
  Developer = 'developer',
  /** 訪客 */
  Guest = 'guest',
  /** 維護者 */
  Maintainer = 'maintainer',
  /** 擁有者 */
  Owner = 'owner',
  /** 規劃者 */
  Planner = 'planner',
  /** 報告者 */
  Reporter = 'reporter',
  /** 測試者 */
  Tester = 'tester'
}

/** 交易幣別 */
export enum ETransactionCurrency {
  /** 澳幣 */
  Aud = 'AUD',
  /** 加拿大幣 */
  Cad = 'CAD',
  /** 人民幣 */
  Cny = 'CNY',
  /** 歐元 */
  Eur = 'EUR',
  /** 港幣 */
  Hkd = 'HKD',
  /** 盧比 */
  Idr = 'IDR',
  /** 日幣 */
  Jpy = 'JPY',
  /** 韓幣 */
  Krw = 'KRW',
  /** 林吉特 */
  Myr = 'MYR',
  /** 菲律賓比索 */
  Php = 'PHP',
  /** 盧布 */
  Rub = 'RUB',
  /** 新加坡元 */
  Sgd = 'SGD',
  /** 泰銖 */
  Thb = 'THB',
  /** 台幣 */
  Twd = 'TWD',
  /** 美金 */
  Usd = 'USD',
  /** 越南盾 */
  Vnd = 'VND'
}

/** 工作區方案 */
export enum EWorkspacePlan {
  /** 企業方案 */
  Enterprise = 'enterprise',
  /** 免費方案 */
  Free = 'free',
  /** 優質方案 */
  Premium = 'premium',
  /** 基礎方案 */
  Standard = 'standard'
}

/** 指定工作區 */
export enum EWorkspaceTarget {
  /** 個人的 */
  Me = 'me'
}

export interface IEvaluate {
  /** 任務價值 */
  amount: Scalars['Int'];
  /** 任務取消時間 */
  cancelAt?: Maybe<Scalars['String']>;
  /** 任務單留言總數 */
  commentCount: Scalars['Int'];
  /** 今日任務單留言 */
  commentTodayCount: Scalars['Int'];
  /** 留言 */
  comments?: Maybe<Array<IEvaluateComment>>;
  /** 內容 */
  content: Scalars['String'];
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 開發者 */
  developer?: Maybe<IMember>;
  /** 開發者ID */
  developerId?: Maybe<Scalars['ID']>;
  /** 任務完成時間 */
  doneAt?: Maybe<Scalars['String']>;
  /** 預估完成日 */
  estimateEndDate?: Maybe<Scalars['String']>;
  /** 預估開始日 */
  estimateStartDate?: Maybe<Scalars['String']>;
  /** 預估工時 */
  estimateWorkTime: Scalars['Float'];
  /** 附加檔案 */
  files?: Maybe<Array<IEvaluateFile>>;
  /** 來源評估 */
  fromEvaluates?: Maybe<Array<IEvaluateLink>>;
  id: Scalars['ID'];
  /** 是否自訂價值 */
  isCustomAmount: Scalars['Boolean'];
  /** 進度 */
  progressRate: Scalars['Int'];
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['String'];
  /** 排序 */
  sequence: Scalars['Int'];
  serialNumber: Scalars['Int'];
  /** 技術點數 */
  skillPoint: Scalars['Float'];
  sn?: Maybe<Scalars['String']>;
  /** 任務狀態 */
  status: EEvaluateStatus;
  /** 關聯任務 */
  tasks?: Maybe<Array<ITask>>;
  /** 所屬團隊 */
  team?: Maybe<ITeam>;
  /** 所屬團隊ID */
  teamId?: Maybe<Scalars['ID']>;
  /** 標題 */
  title: Scalars['String'];
  /** 目標評估 */
  toEvaluates?: Maybe<Array<IEvaluateLink>>;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IEvaluateComment {
  category: EEvaluateCommentCategory;
  cloneSerialNumber?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 所屬評估單 */
  evaluate: IEvaluate;
  /** 所屬評估單ID */
  evaluateId: Scalars['ID'];
  id: Scalars['ID'];
  /** 更新的被指派者 */
  updateAssign?: Maybe<IMember>;
  /** 更新的被指派者ID */
  updateAssignId?: Maybe<Scalars['ID']>;
  /** 更新的完成日 */
  updateEndDate?: Maybe<Scalars['String']>;
  updateField?: Maybe<EEvaluateCommentUpdateField>;
  /** 更新的技術點數 */
  updateSkillPoint?: Maybe<Scalars['Float']>;
  /** 更新的開始日 */
  updateStartDate?: Maybe<Scalars['String']>;
  /** 更新的任務狀態 */
  updateStatus?: Maybe<EEvaluateStatus>;
  /** 更新的預估工時 */
  updateWorkTime?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IEvaluateCommentCreate {
  message: Scalars['String'];
  newData: IEvaluateComment;
  newId: Scalars['String'];
}

export interface IEvaluateCommentUpdateInput {
  content?: InputMaybe<Scalars['String']>;
}

export interface IEvaluateCreateInput {
  developerId?: InputMaybe<Scalars['ID']>;
  projectId: Scalars['ID'];
  teamId: Scalars['ID'];
  title: Scalars['String'];
}

export interface IEvaluateFile {
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 所屬工作單 */
  evaluate: IEvaluate;
  /** 所屬工作單ID */
  evaluateId: Scalars['ID'];
  file?: Maybe<IImageFile>;
  /** 檔案網址 */
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 縮圖網址 */
  thumbUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IEvaluateFileUpload {
  message: Scalars['String'];
  newData: IEvaluateFile;
  newId: Scalars['String'];
}

export interface IEvaluateLink {
  createdAt: Scalars['String'];
  /** 來源ID */
  from: IEvaluate;
  /** 來源ID */
  fromId: Scalars['ID'];
  id: Scalars['ID'];
  /** 目標ID */
  to: IEvaluate;
  /** 目標ID */
  toId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IEvaluateSearchInput {
  isArchive?: InputMaybe<Scalars['Boolean']>;
  isMomentous?: InputMaybe<Scalars['Boolean']>;
  parentEvaluateId?: InputMaybe<Scalars['ID']>;
  projectId?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<EEvaluateStatus>;
  title?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['ID']>;
}

export interface IEvaluateUpdateAssignerInput {
  developerId?: InputMaybe<Scalars['ID']>;
}

export interface IEvaluateUpdateEstimatesDate {
  estimateEndDate: Scalars['String'];
  estimateStartDate: Scalars['String'];
  id: Scalars['ID'];
}

export interface IEvaluateUpdateFieldInput {
  content?: InputMaybe<Scalars['String']>;
  doneWorkTime?: InputMaybe<Scalars['Float']>;
  estimateWorkTime?: InputMaybe<Scalars['Float']>;
  skillPoint?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<EEvaluateStatus>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IEvaluateUpdateMultiStatusInput {
  progressRate?: InputMaybe<Scalars['Int']>;
  status: EEvaluateStatus;
}

export interface IEvaluateUpdateSequenceToInput {
  isAfter?: InputMaybe<Scalars['Boolean']>;
  toEvaluateId?: InputMaybe<Scalars['ID']>;
}

export interface IEvaluateUpdateSequenceWhereInput {
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}

export interface IEvaluateWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IEvaluate>;
}

export interface IGraph {
  /** 日期 */
  day: Scalars['String'];
  /** 時數 */
  value: Scalars['Float'];
}

export interface IICreateRangeDate {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
}

export interface IIProjectStatusGroup {
  id: Scalars['ID'];
  name: Scalars['String'];
  projectsIds?: Maybe<Array<Scalars['ID']>>;
}

export interface IITaskStatusGroup {
  id: Scalars['ID'];
  taskIds: Array<Scalars['ID']>;
}

export interface IIconSvg {
  code: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  defs: Scalars['String'];
  /** 所屬Icon Symbols */
  iconSymbols: IIconSymbols;
  /** 所屬Icon Symbols ID */
  iconSymbolsId: Scalars['ID'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
  viewBox: Scalars['String'];
}

export interface IIconSvgDownloadInput {
  type: EIconSvgDownloadType;
}

export interface IIconSvgUpdateInput {
  code: Scalars['String'];
  content: Scalars['String'];
  defs: Scalars['String'];
  viewBox: Scalars['String'];
}

export interface IIconSvgUpload {
  message: Scalars['String'];
  newData: IIconSvg;
  newId: Scalars['String'];
}

export interface IIconSvgUploadSymbols {
  message: Scalars['String'];
}

export interface IIconSvgWithPaginationSearchInput {
  code?: InputMaybe<Scalars['String']>;
  iconId: Scalars['ID'];
}

export interface IIconSymbols {
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  desc?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  pullToken?: Maybe<Scalars['String']>;
  serialNumber: Scalars['Int'];
  sn?: Maybe<Scalars['String']>;
  /** 庫使用的ICON */
  svgs?: Maybe<Array<IIconSvg>>;
  /** Symbol總數 */
  symbolCount: Scalars['Int'];
  updatedAt?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface IIconSymbolsCreateInput {
  desc?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface IIconSymbolsUpdateInput {
  desc?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface IIconSymbolsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IIconSymbols>;
}

export interface IIconSymbolsWithPaginationInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface IImageFile {
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  version?: Maybe<Scalars['Int']>;
}

export interface IInfo {
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
}

export interface IMember {
  account: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  /** 建立的書籤 */
  bookmark?: Maybe<Array<IBookmark>>;
  /** 建立的庫ICON */
  createIconSvg?: Maybe<Array<IIconSvg>>;
  /** 建立的庫ICON */
  createIconSymbols?: Maybe<Array<IIconSymbols>>;
  /** 建立的專案里程碑 */
  createProjectMilestones?: Maybe<Array<IProjectMilestone>>;
  /** 建立的專案便利貼 */
  createProjectNote?: Maybe<Array<IProjectNote>>;
  /** 建立的專案 */
  createProjects?: Maybe<Array<IProject>>;
  /** 建立的庫 */
  createRepo?: Maybe<Array<IRepo>>;
  /** 建立的團隊 */
  createTeams?: Maybe<Array<ITeam>>;
  createdAt: Scalars['String'];
  /** 建立的評估單 */
  creatorEvaluates?: Maybe<Array<IEvaluate>>;
  /** 建立的工作單 */
  creatorTasks?: Maybe<Array<ITask>>;
  /** 建立的客戶 */
  customer?: Maybe<Array<ICustomer>>;
  /** 被指派的開發工作 */
  devEvaluates?: Maybe<Array<IEvaluate>>;
  /** 被指派的開發工作 */
  devTasks?: Maybe<Array<ITask>>;
  email: Scalars['String'];
  /** 評估被指派紀錄 */
  evaluateCommentAssigns?: Maybe<Array<IEvaluateComment>>;
  /** 評估留言 */
  evaluateComments?: Maybe<Array<IEvaluateComment>>;
  /** 上傳評估檔案 */
  evaluateFiles?: Maybe<Array<IEvaluateFile>>;
  id: Scalars['ID'];
  isEmailVerify: Scalars['Boolean'];
  isEnable: Scalars['Boolean'];
  /** 是否開啟WebPush */
  isEnableWebPush: Scalars['Boolean'];
  /** 是否有設定密碼 */
  isHasPassword: Scalars['Boolean'];
  /** 登入紀錄 */
  loginHistories?: Maybe<Array<IMemberLoginHistory>>;
  /** 建立的工作區 */
  memberBillings?: Maybe<Array<IMemberBilling>>;
  /** 被指派的合併工作 */
  mergeTasks?: Maybe<Array<ITask>>;
  name: Scalars['String'];
  /** 擁有的團隊 */
  ownerTeams?: Maybe<Array<ITeam>>;
  /** 個人的工作區 */
  personalWorkspace?: Maybe<IWorkspace>;
  personalWorkspaceId?: Maybe<Scalars['String']>;
  /** 註冊方法 */
  signUpMethod: ESignUpMethod;
  /** 任務被指派紀錄 */
  taskCommentAssigns?: Maybe<Array<ITaskComment>>;
  /** 任務留言 */
  taskComments?: Maybe<Array<ITaskComment>>;
  /** 上傳忍物檔案 */
  taskFiles?: Maybe<Array<ITaskFile>>;
  /** 參與的團隊 */
  teamMembers?: Maybe<Array<ITeamMember>>;
  /** 被指派的測試工作 */
  testTasks?: Maybe<Array<ITask>>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 所屬工作日誌 */
  workLog?: Maybe<Array<IWorkLog>>;
  /** 建立的工作區 */
  workspace?: Maybe<Array<IWorkspace>>;
}

export interface IMemberBilling {
  /** 金額 */
  amount: Scalars['Int'];
  /** 帳單資訊 */
  billingInfo?: Maybe<Scalars['String']>;
  /** 取消時間 */
  cancelAt?: Maybe<Scalars['String']>;
  /** 取消原因 */
  cancelReason?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 幣別 */
  currency: Scalars['String'];
  /** 帳單紀錄 */
  histories?: Maybe<Array<IMemberBillingHistory>>;
  id: Scalars['ID'];
  /** 是否啟用中 */
  isActive: Scalars['Boolean'];
  /** 是否年繳 */
  isPaymentCycleYear: Scalars['Boolean'];
  /** 下一次請款時間 */
  nextBillingTime?: Maybe<Scalars['String']>;
  /** 擁有者 */
  owner: IMember;
  /** 擁有者ID */
  ownerId: Scalars['ID'];
  /** 付款方式 */
  paymentType: EPaymentType;
  /** Paypal計畫ID */
  paypalPlanId: Scalars['String'];
  /** 付款成功的期數 */
  periodsCompleted: Scalars['Int'];
  /** 計畫代碼 */
  planCode: EWorkspacePlan;
  serialNumber: Scalars['String'];
  sn?: Maybe<Scalars['String']>;
  /** 開始時間 */
  startTime: Scalars['String'];
  subscriptionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface IMemberBillingHistory {
  /** 金額 */
  amount: Scalars['Int'];
  /** 帳單資訊 */
  billingInfo?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 幣別 */
  currency: Scalars['String'];
  eventTime: Scalars['String'];
  /** 事件類型 */
  eventType: EPaymentEventType;
  /** 帳單主表 */
  head: IMemberBilling;
  /** 帳單主表ID */
  headId: Scalars['ID'];
  id: Scalars['ID'];
  /** 是否驗證通過 */
  isVerified: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['String']>;
  webhookEventId: Scalars['String'];
}

export interface IMemberBillingHistorySearchInput {
  eventId?: InputMaybe<Scalars['String']>;
}

export interface IMemberBillingHistoryWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IMemberBillingHistory>;
}

export interface IMemberBillingSearchInput {
  serialNumber?: InputMaybe<Scalars['String']>;
}

export interface IMemberBillingWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IMemberBilling>;
}

export interface IMemberLoginHistory {
  client?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  /** 裝置 */
  device: ELoginDeviceCode;
  id: Scalars['ID'];
  /** IP */
  ip: Scalars['String'];
  /** 位置 */
  location?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  osVersion?: Maybe<Scalars['String']>;
  /** 所屬工作者 */
  owner: IMember;
  /** 所屬工作者ID */
  ownerId: Scalars['ID'];
}

export interface IMemberProfileUpdateInput {
  email: Scalars['String'];
  name: Scalars['String'];
}

export interface IMemberProfileUpdatePasswordInput {
  newPassword: Scalars['String'];
  oldPassword?: InputMaybe<Scalars['String']>;
}

export interface IMeta {
  currentPage: Scalars['Int'];
  order?: Maybe<IOrder>;
  pageLimit: Scalars['Int'];
}

export interface IMutation {
  addComment: IComment;
  /** 跳轉Google驗證網址 */
  authDirectGoogleVerify: IAuthDirectGoogleVerify;
  /** 帳號密碼登入 */
  authLogin: IAuthLogin;
  /** 登入使用Google OAuth (call back code) */
  authLoginWithGoogle: IAuthLoginWithGoogle;
  /** 登出 */
  authLogout: IResultUpdateData;
  /** 刷新Token */
  authRefreshToken: IAuthRefreshToken;
  /** 重設密碼 */
  authResetPassword: IResultMessage;
  /** 發送重設密碼的EMAIL驗證碼 */
  authSendVerifyCode: IAuthSendVerifyCode;
  /** 帳號密碼註冊 */
  authSignUp: IAuthSignUp;
  /** 新增書籤 */
  bookmarkCreate: IResultCreateData;
  /** 刪除書籤 */
  bookmarkDelete: IResultDeleteData;
  /** 刪除書籤頭像 */
  bookmarkDeleteAvatar: IResultDeleteData;
  /** 更新書籤 */
  bookmarkUpdate: IResultUpdateData;
  /** 新增客戶 */
  customerCreate: IResultCreateData;
  /** 刪除客戶 */
  customerDelete: IResultDeleteData;
  /** 刪除客戶頭像 */
  customerDeleteAvatar: IResultDeleteData;
  /** 更新客戶 */
  customerUpdate: IResultUpdateData;
  /** 複製一個任務到新的庫 */
  evaluateClone: IResultCreateData2;
  /** 新增留言 */
  evaluateCommentCreate: IEvaluateCommentCreate;
  /** 刪除留言 */
  evaluateCommentDelete: IResultDeleteData;
  /** 更新留言內容 */
  evaluateCommentUpdateComment: IResultUpdateData;
  /** 新增評估 */
  evaluateCreate: IResultCreateData;
  /** 新增評估(使用設計圖) */
  evaluateCreateByImage: IResultCreateData;
  /** 刪除評估單 */
  evaluateDelete: IResultDeleteData;
  /** 刪除任務檔案 */
  evaluateFileDelete: IResultDeleteData;
  /** 更新任務檔案名稱 */
  evaluateFileUpdateName: IResultUpdateData;
  /** 新增任務檔案 */
  evaluateFileUpload: IEvaluateFileUpload;
  /** 插入一個任務到新的庫 */
  evaluateInsert: IResultCreateData2;
  /** 新增目標任務 */
  evaluateLinkAdd: IResultCreateData;
  /** 刪除目標任務 */
  evaluateLinkDelete: IResultDeleteData;
  /** 移動一個任務到別的團隊 */
  evaluateMoveNewTeam: IResultEvaluateMoveTeamData;
  /** 更新評估的指派者 */
  evaluateUpdateAssigner: IResultUpdateData;
  /** 更新評估預估日期區間 */
  evaluateUpdateEstimatesDate: IResultUpdateData;
  /** 更新評估 */
  evaluateUpdateField: IResultUpdateData;
  /** 更新多筆評估狀態 */
  evaluateUpdateMultiStatus: IResultUpdateData;
  /** 更新排序 */
  evaluateUpdateSequence: IResultUpdateData;
  /** 清空庫圖標 */
  iconSvgClear: IResultDeleteData;
  /** 刪除庫圖標 */
  iconSvgDelete: IResultDeleteData;
  /** 下載Icon Svg */
  iconSvgDownload?: Maybe<IResultDownloadData>;
  /** 更新庫圖標 */
  iconSvgUpdate: IResultUpdateData;
  /** 新增庫圖標使用SVG */
  iconSvgUploadSvg: IIconSvgUpload;
  /** 新增庫圖標使用Symbols */
  iconSvgUploadSymbols: IIconSvgUploadSymbols;
  /** 新增IconSymbols */
  iconSymbolsCreate: IResultCreateData;
  /** 刪除IconSymbols */
  iconSymbolsDelete: IResultDeleteData;
  /** 刪除IconSymbols頭像 */
  iconSymbolsDeleteAvatar: IResultDeleteData;
  /** 下載庫的Icon Symbols */
  iconSymbolsDownload?: Maybe<IResultDownloadData>;
  /** 刷新PullToken */
  iconSymbolsRefreshPullToken: IResultUpdateData;
  /** 更新IconSymbols */
  iconSymbolsUpdate: IResultUpdateData;
  /** 新增工作區訂閱 */
  memberBillingCancel: IResultUpdateData;
  /** 新增訂閱帳單 */
  memberBillingCreateWithPaypal: IResultCreateData;
  /** 測試通知 */
  notificationTest: IResultMessage;
  /** 設定通知Key */
  notificationUpdateKey: IResultUpdateData;
  /** 刪除工作區頭像 */
  profileDeleteAvatar: IResultDeleteData;
  /** 更新個人資料 */
  profileUpdate: IResultUpdateData;
  /** 更新個人密碼 */
  profileUpdatePassword: IResultUpdateData;
  /** 計算報價(來自評估) */
  projectCalcToQuoteByEvaluate: IResultCreateData;
  /** 新增專案 */
  projectCreate: IResultCreateData;
  /** 刪除專案 */
  projectDelete: IResultDeleteData;
  /** 刪除工作區Banner */
  projectDeleteBanner: IResultDeleteData;
  /** 新增專案里程碑 */
  projectMilestoneCreate: IResultCreateData;
  /** 刪除專案里程碑 */
  projectMilestoneDelete: IResultDeleteData;
  /** 更新專案里程碑 */
  projectMilestoneUpdate: IResultUpdateData;
  /** 新增專案里程碑 */
  projectNoteCreate: IResultCreateData;
  /** 刪除專案里程碑 */
  projectNoteDelete: IResultDeleteData;
  /** 更新專案里程碑 */
  projectNoteUpdate: IResultUpdateData;
  /** 更新專案報價設定 */
  projectQuotationUpdate: IResultUpdateData;
  /** 更新專案 */
  projectUpdate: IResultUpdateData;
  /** 更新排序 */
  projectUpdateSequence: IResultUpdateData;
  /** 刪除專案里程碑 */
  quotationDelete: IResultDeleteData;
  /** 下載報價單PDF */
  quotationDownload: IResultDownloadData;
  /** 更新專案里程碑 */
  quotationUpdate: IResultUpdateData;
  /** 新增庫 */
  repoCreate: IResultCreateData;
  /** 刪除庫 */
  repoDelete: IResultDeleteData;
  /** 刪除庫頭像 */
  repoDeleteAvatar: IResultDeleteData;
  /** 更新庫 */
  repoUpdate: IResultUpdateData;
  /** 開啟Webhook */
  repoWebhookEnableUpdate: IResultUpdateData;
  /** 複製一個任務到新的庫 */
  taskClone: IResultCreateData2;
  /** 新增留言 */
  taskCommentCreate: ITaskCommentCreateData;
  /** 刪除留言 */
  taskCommentDelete: IResultDeleteData;
  /** 更新留言內容 */
  taskCommentUpdateComment: IResultUpdateData;
  /** 新增任務 */
  taskCreate: IResultTaskCreateData;
  /** 新增任務(使用設計圖) */
  taskCreateByImage: IResultTaskCreateData;
  /** 刪除任務單 */
  taskDelete: IResultDeleteData;
  /** 刪除任務檔案 */
  taskFileDelete: IResultDeleteData;
  /** 更新任務檔案名稱 */
  taskFileUpdateName: IResultUpdateData;
  /** 新增任務檔案 */
  taskFileUpload: ITaskFileUpload;
  /** 插入一個任務到新的庫 */
  taskInsert: IResultTaskCreateData;
  /** 加入到專案 */
  taskJoinProject: IResultTaskJoinProjectData;
  /** 離開專案 */
  taskLeaveProject: IResultUpdateData;
  /** 新增目標任務 */
  taskLinkAdd: IResultCreateData;
  /** 刪除目標任務 */
  taskLinkDelete: IResultDeleteData;
  /** 移動一個任務到別的庫 */
  taskMoveNewRepo: IResultTaskMoveRepoData;
  /** 刪除任務卡封面 */
  taskRemoveThumb: IResultUpdateData;
  /** 產生工作報告 */
  taskReportDownload: IResultDownloadData;
  /** 新增任務狀態 */
  taskStatusCreate: IResultCreateData;
  /** 刪除任務狀態 */
  taskStatusDelete: IResultDeleteData;
  /** 新增任務狀態 */
  taskStatusKindCreate: IResultCreateData;
  /** 刪除任務狀態 */
  taskStatusKindDelete: IResultDeleteData;
  /** 更新任務狀態 */
  taskStatusKindUpdate: IResultUpdateData;
  /** 更新任務狀態 */
  taskStatusUpdate: IResultUpdateData;
  /** 更新排序 */
  taskStatusUpdateSequence: IResultUpdateData;
  /** 更新任務的指派者 */
  taskUpdateAssigner: IResultUpdateData;
  /** 更新任務預估時間 */
  taskUpdateEstimatesDate: IResultUpdateData;
  /** 更新任務 */
  taskUpdateField: IResultUpdateData;
  /** 更新任務為重要 */
  taskUpdateMomentous: IResultUpdateData;
  /** 封存任務 */
  taskUpdateMultiArchive: IResultUpdateData;
  /** 標記發佈版本 */
  taskUpdateMultiMarkReleaseVersion: IResultUpdateData;
  /** 更新多筆任務狀態 */
  taskUpdateMultiStatus: IResultUpdateData;
  /** 更新排序(排程) */
  taskUpdateSequenceSchedule: IResultUpdateData;
  /** 更新排序(狀態) */
  taskUpdateSequenceStatus: IResultUpdateData;
  /** 更新任務卡封面 */
  taskUpdateThumb: IResultTaskUpdateThumbData;
  /** 新增團隊 */
  teamCreate: IResultCreateData;
  /** 刪除工作區 */
  teamDelete: IResultDeleteData;
  /** 同意加入團隊 */
  teamMemberAgreeJoin: IResultCreateData;
  /** 邀請加入團隊 */
  teamMemberInviteJoin: IResultMessage;
  /** 自己離開團隊 */
  teamMemberLeave: IResultMessage;
  /** 將成員從團隊中移除 */
  teamMemberRemoveMember: IResultDeleteData;
  /** 更新成員資料 */
  teamMemberUpdate: IResultUpdateData;
  /** 更新團隊 */
  teamUpdate: IResultUpdateData;
  /** 新增工作紀錄 */
  workLogCreate: IWorkLogCreate;
  /** 更新工作記錄的時間 */
  workLogDelete: IResultDeleteData;
  /** 輸出工作記錄 */
  workLogExportReport: IResultDownloadData;
  /** 結束一筆任務單的紀錄工作時間 */
  workLogStop: IWorkLogStop;
  /** 更新工作記錄的時間 */
  workLogUpdateTime: IWorkLogUpdateTime;
  /** 更新工作記錄的標題 */
  workLogUpdateTitle: IResultUpdateData;
  /** 新增工作區 */
  workspaceCreate: IResultCreateData;
  /** 刪除工作區 */
  workspaceDelete: IResultDeleteData;
  /** 刪除工作區頭像 */
  workspaceDeleteAvatar: IResultDeleteData;
  /** 刪除工作區Banner */
  workspaceDeleteBanner: IResultDeleteData;
  /** 開始試用 */
  workspaceStartTrial: IResultUpdateData;
  /** 更新工作區 */
  workspaceUpdate: IResultUpdateData;
  /** 更新工作區 */
  workspaceUpdateQuotation: IResultUpdateData;
}


export interface IMutationAuthLoginArgs {
  input: IAuthLoginInput;
}


export interface IMutationAuthLoginWithGoogleArgs {
  input: IAuthLoginByGoogleInput;
}


export interface IMutationAuthRefreshTokenArgs {
  input: IAuthRefreshTokenInput;
}


export interface IMutationAuthResetPasswordArgs {
  input: IAuthResetPasswordInput;
}


export interface IMutationAuthSendVerifyCodeArgs {
  input: IAuthSendVerifyCodeInput;
}


export interface IMutationAuthSignUpArgs {
  input: IAuthSignUpInput;
}


export interface IMutationBookmarkCreateArgs {
  favicon?: InputMaybe<Scalars['Upload']>;
  input: IBookmarkCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationBookmarkDeleteArgs {
  bookmarkId: Scalars['ID'];
}


export interface IMutationBookmarkDeleteAvatarArgs {
  bookmarkId: Scalars['ID'];
}


export interface IMutationBookmarkUpdateArgs {
  bookmarkId: Scalars['ID'];
  favicon?: InputMaybe<Scalars['Upload']>;
  input: IBookmarkUpdateInput;
}


export interface IMutationCustomerCreateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: ICustomerCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationCustomerDeleteArgs {
  customerId: Scalars['ID'];
}


export interface IMutationCustomerDeleteAvatarArgs {
  customerId: Scalars['ID'];
}


export interface IMutationCustomerUpdateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  customerId: Scalars['ID'];
  input: ICustomerUpdateInput;
}


export interface IMutationEvaluateCloneArgs {
  evaluateId: Scalars['ID'];
  isAfterSequence?: InputMaybe<Scalars['Boolean']>;
}


export interface IMutationEvaluateCommentCreateArgs {
  evaluateId: Scalars['ID'];
  input: IEvaluateCommentUpdateInput;
}


export interface IMutationEvaluateCommentDeleteArgs {
  evaluateCommentId: Scalars['ID'];
}


export interface IMutationEvaluateCommentUpdateCommentArgs {
  evaluateCommentId: Scalars['ID'];
  input: IEvaluateCommentUpdateInput;
}


export interface IMutationEvaluateCreateArgs {
  input: IEvaluateCreateInput;
}


export interface IMutationEvaluateCreateByImageArgs {
  file?: InputMaybe<Scalars['Upload']>;
  input: IEvaluateCreateInput;
}


export interface IMutationEvaluateDeleteArgs {
  evaluateId: Scalars['ID'];
}


export interface IMutationEvaluateFileDeleteArgs {
  evaluateFileId: Scalars['ID'];
}


export interface IMutationEvaluateFileUpdateNameArgs {
  evaluateFileId: Scalars['ID'];
  name: Scalars['String'];
}


export interface IMutationEvaluateFileUploadArgs {
  evaluateId: Scalars['ID'];
  file?: InputMaybe<Scalars['Upload']>;
}


export interface IMutationEvaluateInsertArgs {
  evaluateId: Scalars['ID'];
}


export interface IMutationEvaluateLinkAddArgs {
  evaluateId: Scalars['ID'];
  toId: Scalars['ID'];
}


export interface IMutationEvaluateLinkDeleteArgs {
  evaluateId: Scalars['ID'];
  mode: EEvaluateLinkMode;
}


export interface IMutationEvaluateMoveNewTeamArgs {
  evaluateId: Scalars['ID'];
  newTeamId: Scalars['ID'];
}


export interface IMutationEvaluateUpdateAssignerArgs {
  evaluateId: Scalars['ID'];
  input: IEvaluateUpdateAssignerInput;
}


export interface IMutationEvaluateUpdateEstimatesDateArgs {
  dataList: Array<IEvaluateUpdateEstimatesDate>;
}


export interface IMutationEvaluateUpdateFieldArgs {
  evaluateId: Scalars['ID'];
  input: IEvaluateUpdateFieldInput;
}


export interface IMutationEvaluateUpdateMultiStatusArgs {
  evaluateIds: Array<Scalars['ID']>;
  input: IEvaluateUpdateMultiStatusInput;
}


export interface IMutationEvaluateUpdateSequenceArgs {
  evaluateId: Scalars['ID'];
  to?: InputMaybe<IEvaluateUpdateSequenceToInput>;
  where: IEvaluateUpdateSequenceWhereInput;
}


export interface IMutationIconSvgClearArgs {
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSvgDeleteArgs {
  iconSvgId: Scalars['ID'];
}


export interface IMutationIconSvgDownloadArgs {
  iconSvgId: Scalars['ID'];
}


export interface IMutationIconSvgUpdateArgs {
  iconSvgId: Scalars['ID'];
  input: IIconSvgUpdateInput;
}


export interface IMutationIconSvgUploadSvgArgs {
  file?: InputMaybe<Scalars['Upload']>;
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSvgUploadSymbolsArgs {
  file?: InputMaybe<Scalars['Upload']>;
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSymbolsCreateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IIconSymbolsCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationIconSymbolsDeleteArgs {
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSymbolsDeleteAvatarArgs {
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSymbolsDownloadArgs {
  iconSymbolsId: Scalars['ID'];
  input: IIconSvgDownloadInput;
}


export interface IMutationIconSymbolsRefreshPullTokenArgs {
  iconSymbolsId: Scalars['ID'];
}


export interface IMutationIconSymbolsUpdateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  iconSymbolsId: Scalars['ID'];
  input: IIconSymbolsUpdateInput;
}


export interface IMutationMemberBillingCancelArgs {
  input: IWorkspaceOrderCancelInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationMemberBillingCreateWithPaypalArgs {
  input: IWorkspaceOrderCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationNotificationUpdateKeyArgs {
  pushSubscription: Scalars['String'];
}


export interface IMutationProfileUpdateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IMemberProfileUpdateInput;
}


export interface IMutationProfileUpdatePasswordArgs {
  input: IMemberProfileUpdatePasswordInput;
}


export interface IMutationProjectCalcToQuoteByEvaluateArgs {
  projectId: Scalars['ID'];
  saveName: Scalars['String'];
}


export interface IMutationProjectCreateArgs {
  banner?: InputMaybe<Scalars['Upload']>;
  input: IProjectCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationProjectDeleteArgs {
  projectId: Scalars['ID'];
}


export interface IMutationProjectDeleteBannerArgs {
  projectId: Scalars['ID'];
}


export interface IMutationProjectMilestoneCreateArgs {
  input: IProjectMilestoneCreateInput;
}


export interface IMutationProjectMilestoneDeleteArgs {
  projectMilestoneId: Scalars['ID'];
}


export interface IMutationProjectMilestoneUpdateArgs {
  input: IProjectMilestoneUpdateInput;
  projectMilestoneId: Scalars['ID'];
}


export interface IMutationProjectNoteCreateArgs {
  input: IProjectNoteCreateInput;
}


export interface IMutationProjectNoteDeleteArgs {
  projectNoteId: Scalars['ID'];
}


export interface IMutationProjectNoteUpdateArgs {
  input: IProjectNoteUpdateInput;
  projectNoteId: Scalars['ID'];
}


export interface IMutationProjectQuotationUpdateArgs {
  input: IProjectQuotationUpdateInput;
  projectId: Scalars['ID'];
}


export interface IMutationProjectUpdateArgs {
  banner?: InputMaybe<Scalars['Upload']>;
  input: IProjectUpdateInput;
  projectId: Scalars['ID'];
}


export interface IMutationProjectUpdateSequenceArgs {
  active: IProjectUpdateSequenceWhereInput;
  over: IProjectUpdateSequenceToInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationQuotationDeleteArgs {
  quotationId: Scalars['ID'];
}


export interface IMutationQuotationDownloadArgs {
  isVisibleDetailAmount?: InputMaybe<Scalars['Boolean']>;
  quotationId: Scalars['ID'];
}


export interface IMutationQuotationUpdateArgs {
  input: IQuotationUpdateInput;
  quotationId: Scalars['ID'];
  signatureReturn?: InputMaybe<Scalars['Upload']>;
}


export interface IMutationRepoCreateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IRepoCreateInput;
}


export interface IMutationRepoDeleteArgs {
  repoId: Scalars['ID'];
}


export interface IMutationRepoDeleteAvatarArgs {
  repoId: Scalars['ID'];
}


export interface IMutationRepoUpdateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IRepoUpdateInput;
  repoId: Scalars['ID'];
}


export interface IMutationRepoWebhookEnableUpdateArgs {
  input: IRepoWebhookEnableUpdateInput;
  repoId: Scalars['ID'];
}


export interface IMutationTaskCloneArgs {
  input?: InputMaybe<ITaskCloneInput>;
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskCommentCreateArgs {
  input: ITaskCommentUpdateInput;
  taskId: Scalars['ID'];
}


export interface IMutationTaskCommentDeleteArgs {
  taskCommentId: Scalars['ID'];
}


export interface IMutationTaskCommentUpdateCommentArgs {
  input: ITaskCommentUpdateInput;
  taskCommentId: Scalars['ID'];
}


export interface IMutationTaskCreateArgs {
  input: ITaskCreateInput;
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskCreateByImageArgs {
  file?: InputMaybe<Scalars['Upload']>;
  input: ITaskCreateInput;
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskDeleteArgs {
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskFileDeleteArgs {
  taskFileId: Scalars['ID'];
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskFileUpdateNameArgs {
  name: Scalars['String'];
  taskFileId: Scalars['ID'];
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskFileUploadArgs {
  file?: InputMaybe<Scalars['Upload']>;
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskInsertArgs {
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskJoinProjectArgs {
  newProjectId: Scalars['ID'];
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskLeaveProjectArgs {
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskLinkAddArgs {
  taskId: Scalars['ID'];
  toId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskLinkDeleteArgs {
  mode: ETaskLinkMode;
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskMoveNewRepoArgs {
  newRepoId: Scalars['ID'];
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskRemoveThumbArgs {
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskReportDownloadArgs {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
  teamId: Scalars['ID'];
}


export interface IMutationTaskStatusCreateArgs {
  input: ITaskStatusCreateInput;
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskStatusDeleteArgs {
  taskStatusId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskStatusKindCreateArgs {
  input: ITaskStatusKindCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskStatusKindDeleteArgs {
  taskStatusKindId: Scalars['ID'];
}


export interface IMutationTaskStatusKindUpdateArgs {
  input: ITaskStatusKindUpdateInput;
  taskStatusKindId: Scalars['ID'];
}


export interface IMutationTaskStatusUpdateArgs {
  input: ITaskStatusUpdateInput;
  taskStatusId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskStatusUpdateSequenceArgs {
  projectId: Scalars['ID'];
  taskStatusId: Scalars['ID'];
  toTaskStatusId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateAssignerArgs {
  input: ITaskUpdateAssignerInput;
  taskId: Scalars['ID'];
  type: ETaskAssignType;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateEstimatesDateArgs {
  dataList: Array<ITaskUpdateEstimatesDate>;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateFieldArgs {
  input: ITaskUpdateFieldInput;
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateMomentousArgs {
  input: ITaskUpdateMomentousInput;
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateMultiArchiveArgs {
  isArchive: Scalars['Boolean'];
  taskIds: Array<Scalars['ID']>;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateMultiMarkReleaseVersionArgs {
  releaseVersion?: InputMaybe<Scalars['String']>;
  taskIds: Array<Scalars['ID']>;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateMultiStatusArgs {
  input: ITaskUpdateMultiStatusInput;
  projectId?: InputMaybe<Scalars['ID']>;
  taskIds: Array<Scalars['ID']>;
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateSequenceScheduleArgs {
  taskId: Scalars['ID'];
  to?: InputMaybe<ITaskUpdateSequenceScheduleToInput>;
  where: ITaskUpdateSequenceScheduleWhereInput;
}


export interface IMutationTaskUpdateSequenceStatusArgs {
  active: ITaskUpdateSequenceStatusWhereInput;
  over: ITaskUpdateSequenceStatusToInput;
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTaskUpdateThumbArgs {
  taskFileId: Scalars['ID'];
  taskId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IMutationTeamCreateArgs {
  input: ITeamCreateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationTeamDeleteArgs {
  teamId: Scalars['ID'];
}


export interface IMutationTeamMemberAgreeJoinArgs {
  teamId: Scalars['ID'];
}


export interface IMutationTeamMemberInviteJoinArgs {
  input: ITeamMemberInviteJoinInput;
  teamId: Scalars['ID'];
}


export interface IMutationTeamMemberLeaveArgs {
  teamId: Scalars['ID'];
}


export interface IMutationTeamMemberRemoveMemberArgs {
  teamMemberId: Scalars['ID'];
}


export interface IMutationTeamMemberUpdateArgs {
  input: ITeamMemberUpdateInput;
  teamMemberId: Scalars['ID'];
}


export interface IMutationTeamUpdateArgs {
  input: ITeamUpdateInput;
  teamId: Scalars['ID'];
}


export interface IMutationWorkLogCreateArgs {
  input: IWorkLogCreateInput;
  taskId: Scalars['ID'];
}


export interface IMutationWorkLogDeleteArgs {
  workLogId: Scalars['ID'];
}


export interface IMutationWorkLogExportReportArgs {
  teamId: Scalars['ID'];
}


export interface IMutationWorkLogStopArgs {
  taskId: Scalars['ID'];
}


export interface IMutationWorkLogUpdateTimeArgs {
  input: IWorkLogUpdateTimeInput;
  workLogId: Scalars['ID'];
}


export interface IMutationWorkLogUpdateTitleArgs {
  title: Scalars['String'];
  workLogId: Scalars['ID'];
}


export interface IMutationWorkspaceCreateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IWorkspaceCreateInput;
}


export interface IMutationWorkspaceDeleteArgs {
  workspaceId: Scalars['ID'];
}


export interface IMutationWorkspaceDeleteAvatarArgs {
  workspaceId: Scalars['ID'];
}


export interface IMutationWorkspaceDeleteBannerArgs {
  workspaceId: Scalars['ID'];
}


export interface IMutationWorkspaceStartTrialArgs {
  workspaceId: Scalars['ID'];
}


export interface IMutationWorkspaceUpdateArgs {
  avatar?: InputMaybe<Scalars['Upload']>;
  input: IWorkspaceUpdateInput;
  workspaceId: Scalars['ID'];
}


export interface IMutationWorkspaceUpdateQuotationArgs {
  banner?: InputMaybe<Scalars['Upload']>;
  input: IWorkspaceUpdateQuotationInput;
  workspaceId: Scalars['ID'];
}

export interface IOrder {
  orderBy: Scalars['String'];
  orderField: Scalars['String'];
}

export interface IOrderInput {
  orderBy: Scalars['String'];
  orderField: Scalars['String'];
}

export interface IPaginateInput {
  currentPage: Scalars['Int'];
  order?: InputMaybe<IOrderInput>;
  pageLimit: Scalars['Int'];
}

export interface IProject {
  amount: Scalars['Int'];
  /** 專案封存時間 */
  archiveAt?: Maybe<Scalars['String']>;
  /** 取得專案BannerURL */
  bannerUrl?: Maybe<Scalars['String']>;
  /** 專案取消時間 */
  cancelAt?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 客戶 */
  customer?: Maybe<ICustomer>;
  /** 客戶ID */
  customerId?: Maybe<Scalars['ID']>;
  desc?: Maybe<Scalars['String']>;
  /** 專案完成時間 */
  doneAt?: Maybe<Scalars['String']>;
  /** 專案中的評估者 */
  evaluateMember?: Maybe<Array<IMember>>;
  /** 專案中的評估數 */
  evaluateTotal: Scalars['Float'];
  evaluates?: Maybe<Array<IEvaluate>>;
  exchangeRate: Scalars['Int'];
  id: Scalars['ID'];
  /** 是否為封存 (不等於刪除, 日後調閱) */
  isArchive: Scalars['Boolean'];
  /** 是否軟刪除 */
  isDelete: Scalars['Boolean'];
  /** 是否啟用評估 */
  isEvaluateEnable: Scalars['Boolean'];
  /** 是否為公開 */
  isPublic: Scalars['Boolean'];
  /** 是否啟用報價 */
  isQuotationEnable: Scalars['Boolean'];
  /** 是否啟用任務 */
  isTaskEnable: Scalars['Boolean'];
  /** 是否為虛擬專案 */
  isVirtual: Scalars['Boolean'];
  milestones?: Maybe<Array<IProjectMilestone>>;
  name: Scalars['String'];
  note?: Maybe<Array<IProjectNote>>;
  paymentCycles?: Maybe<Array<IProjectsPaymentCycles>>;
  profit: Scalars['Int'];
  quotations?: Maybe<Array<IQuotation>>;
  /** 專案中完成的報價數 */
  quoteDoneTotal: Scalars['Float'];
  /** 專案中的報價數 */
  quoteTotal: Scalars['Float'];
  remark?: Maybe<Scalars['String']>;
  riskEstimation: Scalars['Int'];
  /** 排序 */
  sequence: Scalars['Int'];
  serialNumber: Scalars['Int'];
  sn?: Maybe<Scalars['String']>;
  /** 專案狀態 */
  status: EProjectStatus;
  /** 狀態更新時間 */
  statusUpdatedAt?: Maybe<Scalars['String']>;
  /** 專案中的已完成任務數 */
  taskDoneTotal: Scalars['Float'];
  /** 專案中的開發者 */
  taskMember?: Maybe<Array<IMember>>;
  /** 專案中的任務數 */
  taskTotal: Scalars['Float'];
  tasks?: Maybe<Array<ITask>>;
  /** 條款 */
  terms?: Maybe<Scalars['String']>;
  /** 交易幣別 */
  transactionCurrency: ETransactionCurrency;
  updatedAt?: Maybe<Scalars['String']>;
  virtual: EProjectTarget;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface IProjectCreateInput {
  customerId?: InputMaybe<Scalars['ID']>;
  desc?: InputMaybe<Scalars['String']>;
  isEvaluateEnable?: InputMaybe<Scalars['Boolean']>;
  isQuotationEnable?: InputMaybe<Scalars['Boolean']>;
  isTaskEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  statusTemplateCode: ETaskStatusTemplateCode;
}

export interface IProjectMilestone {
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** 日期 */
  date: Scalars['String'];
  id: Scalars['ID'];
  /** 名稱 */
  name: Scalars['String'];
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['ID'];
  /** 備註 */
  remark: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IProjectMilestoneCreateInput {
  date?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
}

export interface IProjectMilestoneUpdateInput {
  date?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
}

export interface IProjectMilestonesWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IProjectMilestone>;
}

export interface IProjectMilestonesWithPaginationSearchInput {
  name?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
}

export interface IProjectNote {
  /** 類型 */
  category: EProjectNoteCategory;
  /** 內容 */
  content: Scalars['String'];
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** 名稱 */
  name: Scalars['String'];
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IProjectNoteCreateInput {
  content?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
}

export interface IProjectNoteUpdateInput {
  content?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
}

export interface IProjectQuotationUpdateInput {
  customerId?: InputMaybe<Scalars['ID']>;
  exchangeRate?: InputMaybe<Scalars['Int']>;
  isQuotationEnable?: InputMaybe<Scalars['Boolean']>;
  paymentCycles?: InputMaybe<Array<IProjectsPaymentCyclesInput>>;
  profit?: InputMaybe<Scalars['Int']>;
  riskEstimation?: InputMaybe<Scalars['Int']>;
  terms?: InputMaybe<Scalars['String']>;
  transactionCurrency?: InputMaybe<ETransactionCurrency>;
}

export interface IProjectUpdateInput {
  desc?: InputMaybe<Scalars['String']>;
  isArchive?: InputMaybe<Scalars['Boolean']>;
  isEvaluateEnable?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  isTaskEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<EProjectStatus>;
}

export interface IProjectUpdateSequenceToInput {
  projectId?: InputMaybe<Scalars['String']>;
  statusId: Scalars['String'];
}

export interface IProjectUpdateSequenceWhereInput {
  projectId: Scalars['ID'];
  statusId: Scalars['String'];
}

export interface IProjectWithStatusGroup {
  groups: Array<IIProjectStatusGroup>;
  projects?: Maybe<Array<IProject>>;
}

export interface IProjectsPaymentCycles {
  cycle: Scalars['Int'];
  desc: Scalars['String'];
}

export interface IProjectsPaymentCyclesInput {
  cycle: Scalars['Int'];
  desc: Scalars['String'];
}

export interface IProjectsSearchInput {
  isArchive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<EProjectStatus>;
}

export interface IProjectsWithGantt {
  projectMap: Array<IProjectsWithGanttProject>;
  tasks: Array<IProjectsWithGanttTask>;
  teamTasks: Array<IProjectsWithGanttTeamTask>;
}

export interface IProjectsWithGanttProject {
  children: Array<IProjectsWithGanttTeam>;
  dataLevel: Scalars['DataLevelProject'];
  id: Scalars['ID'];
  milestones?: Maybe<Array<IProjectMilestone>>;
  text: Scalars['String'];
}

export interface IProjectsWithGanttTask {
  assigners?: Maybe<Array<IMember>>;
  dataLevel: Scalars['DataLevelTask'];
  estimateEndDate?: Maybe<Scalars['String']>;
  estimateStartDate?: Maybe<Scalars['String']>;
  estimateWorkTime?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  links?: Maybe<Array<Scalars['String']>>;
  progressRate?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  statusId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
}

export interface IProjectsWithGanttTeam {
  barColor?: Maybe<Scalars['String']>;
  dataLevel: Scalars['DataLevelTeam'];
  id: Scalars['ID'];
  text: Scalars['String'];
}

export interface IProjectsWithGanttTeamTask {
  key: Scalars['ID'];
  tasks: Array<Scalars['String']>;
}

export interface IProjectsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IProject>;
}

export interface IQuery {
  /** API版本 */
  apiVersion: Scalars['String'];
  /** 取得 Bcrypt Hash */
  bcryptHash: Scalars['String'];
  /** 取得書籤 */
  bookmark?: Maybe<IBookmark>;
  /** 取得書籤(分頁) */
  bookmarksWithPagination: IBookmarksWithPagination;
  /** 取得客戶 */
  customer?: Maybe<ICustomer>;
  /** 取得客戶列表 */
  customers?: Maybe<Array<ICustomer>>;
  /** 取得客戶列表(分頁) */
  customersWithPagination: ICustomersWithPagination;
  /** 取得統計數據 */
  dashboardCount: IDashboardCount;
  /** 取得ULID */
  dashboardGenerateId: Scalars['String'];
  /** 取得系統資訊 */
  dashboardOSInfo: IDashboardOsInfo;
  /** 取得一筆評估單 */
  evaluate?: Maybe<IEvaluate>;
  /** 取得評估單的所有留言 */
  evaluateComments?: Maybe<Array<IEvaluateComment>>;
  evaluateFile?: Maybe<IEvaluateFile>;
  evaluateFiles?: Maybe<Array<IEvaluateFile>>;
  /** 取得評估單列表 */
  evaluates: Array<IEvaluate>;
  /** 取得評估單(分頁) */
  evaluatesWithPagination: IEvaluateWithPagination;
  /** 取得未完成的專案評估列表到子項目(甘特圖) */
  guestProjectsEvaluateWithGantt: IProjectsWithGantt;
  /** 取得未完成的專案任務列表到子項目(甘特圖) */
  guestProjectsTaskWithGantt: IProjectsWithGantt;
  /** 取得一筆任務單 */
  guestTask?: Maybe<ITask>;
  /** 取得任務單的所有留言 */
  guestTaskComments?: Maybe<Array<ITaskComment>>;
  guestTaskFile?: Maybe<ITaskFile>;
  guestTaskFiles?: Maybe<Array<ITaskFile>>;
  /** 取得任務單(依狀態分群) */
  guestTasksWithStatusGroup: ITaskWithStatusGroup;
  /** 取得庫圖標列表 */
  iconSvgs: Array<IIconSvg>;
  /** 取得一筆IconSymbols */
  iconSymbols?: Maybe<IIconSymbols>;
  /** 取得IconSymbols(分頁) */
  iconSymbolsWithPagination: IIconSymbolsWithPagination;
  member?: Maybe<IMember>;
  /** 取得一筆帳單 */
  memberBilling?: Maybe<IMemberBilling>;
  /** 取得工作區(分頁) */
  memberBillingHistoryWithPagination: IMemberBillingHistoryWithPagination;
  /** 取得工作區(分頁) */
  memberBillingWithPagination: IMemberBillingWithPagination;
  /** 確認登入者 */
  profileMe: IMember;
  project?: Maybe<IProject>;
  projectMilestone?: Maybe<IProjectMilestone>;
  /** 取得截止日表 */
  projectMilestoneDeadline?: Maybe<Array<IProjectMilestone>>;
  /** 取得專里程碑列表(分頁) */
  projectMilestonesWithPagination: IProjectMilestonesWithPagination;
  projectNote?: Maybe<IProjectNote>;
  /** 取得便利貼列表 */
  projectNotes: Array<IProjectNote>;
  projectQuotation?: Maybe<IProject>;
  /** 取得專案列表(分頁) */
  projects: Array<IProject>;
  /** 取得未完成的專案評估列表到子項目(甘特圖) */
  projectsEvaluateWithGantt: IProjectsWithGantt;
  /** 取得未完成的專案任務列表到子項目(甘特圖) */
  projectsTaskWithGantt: IProjectsWithGantt;
  /** 取得專案列表(分頁) */
  projectsWithPagination: IProjectsWithPagination;
  /** 取得專案列表(依狀態分群) */
  projectsWithStatusGroup: IProjectWithStatusGroup;
  /** 取得報價單 */
  quotation?: Maybe<IQuotation>;
  /** 取得報價單列表(分頁) */
  quotationsWithPagination: IQuotationsWithPagination;
  /** 取得一筆庫 */
  repo?: Maybe<IRepo>;
  /** 取得庫(分頁) */
  reposWithPagination: IReposWithPagination;
  /** 取得一筆任務單 */
  task?: Maybe<ITask>;
  /** 取得任務單紀錄(分頁) */
  taskCommentLogsWithPagination?: Maybe<ITaskCommentLogsWithPagination>;
  /** 取得任務單的所有留言 */
  taskComments?: Maybe<Array<ITaskComment>>;
  taskFile?: Maybe<ITaskFile>;
  taskFiles?: Maybe<Array<ITaskFile>>;
  /** 取得成員任務(甘特圖) */
  taskMemberWithGantt: ITaskMemberWithGantt;
  taskStatus?: Maybe<ITaskStatus>;
  taskStatusKind?: Maybe<ITaskStatusKind>;
  /** 取得狀態列表 */
  taskStatusKinds: Array<ITaskStatusKind>;
  /** 取得狀態列表 */
  taskStatuses: Array<ITaskStatus>;
  /** 取得進行中任務單 */
  taskWithProcess?: Maybe<ITask>;
  /** 取得任務單列表 */
  tasks: Array<ITask>;
  /** 取得任務單(分頁) */
  tasksWithPagination: ITasksWithPagination;
  /** 取得任務單(依狀態分群) */
  tasksWithStatusGroup: ITaskWithStatusGroup;
  team?: Maybe<ITeam>;
  /** 取得團隊的操作權限 */
  teamMeRole?: Maybe<ETeamMemberRole>;
  /** 取得團隊成員資料 */
  teamMember?: Maybe<ITeamMember>;
  /** 取得團隊成員列表(分頁) */
  teamMemberDashboardCategoryGroup: IDashboardCategoryGroup;
  /** 取得團隊成員列表(分頁) */
  teamMemberDashboardGraph: IDashboardGraph;
  /** 取得團隊成員列表 */
  teamMembers?: Maybe<Array<IShortMember>>;
  /** 取得團隊成員列表(分頁) */
  teamMembersWithPagination: ITeamMembersWithPagination;
  /** 取得團隊列表 */
  teams?: Maybe<Array<ITeam>>;
  /** 取得等待加入的團隊列表 */
  teamsInvite?: Maybe<Array<ITeam>>;
  /** 取得等待加入的團隊列表/確認用 */
  teamsInviteCheck: Scalars['Boolean'];
  /** 取得團隊列表(分頁) */
  teamsWithPagination?: Maybe<ITeamsWithPagination>;
  /** 取得主題色 */
  themes: Array<ITheme>;
  /** 取得工作記錄的日期(年月) */
  workLogsRecordWithMonth?: Maybe<Array<Scalars['String']>>;
  /** 取得工作記錄(分頁) */
  workLogsWithPagination?: Maybe<IWorkLogsWithPagination>;
  /** 取得一筆工作區 */
  workspace?: Maybe<IWorkspace>;
  /** 取得所有工作區 */
  workspaceAllows: IWorkspaceAllows;
  /** 取得工作區的設定 */
  workspaceConfig?: Maybe<IWorkspace>;
  /** 取得工作區計畫設定 */
  workspacePlanConfig?: Maybe<Array<IWorkspacesOrderPlanConfig>>;
  /** 取得一筆工作區報價設定 */
  workspaceQuotation?: Maybe<IWorkspace>;
  /** 取得工作區(分頁) */
  workspacesWithPagination: IWorkspacesWithPagination;
}


export interface IQueryBookmarkArgs {
  bookmarkId: Scalars['ID'];
}


export interface IQueryBookmarksWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<IBookmarksWithPaginationSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryCustomerArgs {
  customerId: Scalars['ID'];
}


export interface IQueryCustomersArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryCustomersWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<ICustomersWithPaginationSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryEvaluateArgs {
  evaluateId: Scalars['ID'];
}


export interface IQueryEvaluateCommentsArgs {
  evaluateId: Scalars['ID'];
}


export interface IQueryEvaluateFileArgs {
  evaluateFileId: Scalars['ID'];
}


export interface IQueryEvaluateFilesArgs {
  evaluateId: Scalars['ID'];
}


export interface IQueryEvaluatesArgs {
  search: IEvaluateSearchInput;
}


export interface IQueryEvaluatesWithPaginationArgs {
  paginate: IPaginateInput;
  projectId: Scalars['ID'];
  search: IEvaluateSearchInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryGuestProjectsEvaluateWithGanttArgs {
  projectId: Scalars['ID'];
}


export interface IQueryGuestProjectsTaskWithGanttArgs {
  projectId: Scalars['ID'];
}


export interface IQueryGuestTaskArgs {
  taskId: Scalars['ID'];
}


export interface IQueryGuestTaskCommentsArgs {
  taskId: Scalars['ID'];
}


export interface IQueryGuestTaskFileArgs {
  taskFileId: Scalars['ID'];
}


export interface IQueryGuestTaskFilesArgs {
  taskId: Scalars['ID'];
}


export interface IQueryGuestTasksWithStatusGroupArgs {
  projectId: Scalars['ID'];
  search?: InputMaybe<ITaskSearchInput>;
}


export interface IQueryIconSvgsArgs {
  iconSymbolsId: Scalars['ID'];
  paginate: IPaginateInput;
  search?: InputMaybe<IIconSvgWithPaginationSearchInput>;
}


export interface IQueryIconSymbolsArgs {
  iconSymbolsId: Scalars['ID'];
}


export interface IQueryIconSymbolsWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<IIconSymbolsWithPaginationInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryMemberArgs {
  memberId: Scalars['Int'];
}


export interface IQueryMemberBillingArgs {
  billingId: Scalars['ID'];
}


export interface IQueryMemberBillingHistoryWithPaginationArgs {
  billingId: Scalars['ID'];
  paginate: IPaginateInput;
  search?: InputMaybe<IMemberBillingHistorySearchInput>;
}


export interface IQueryMemberBillingWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<IMemberBillingSearchInput>;
}


export interface IQueryProjectArgs {
  projectId: Scalars['ID'];
}


export interface IQueryProjectMilestoneArgs {
  projectMilestoneId: Scalars['ID'];
}


export interface IQueryProjectMilestoneDeadlineArgs {
  projectId: Scalars['ID'];
}


export interface IQueryProjectMilestonesWithPaginationArgs {
  paginate: IPaginateInput;
  search: IProjectMilestonesWithPaginationSearchInput;
}


export interface IQueryProjectNoteArgs {
  projectNoteId: Scalars['ID'];
}


export interface IQueryProjectNotesArgs {
  projectId: Scalars['ID'];
}


export interface IQueryProjectQuotationArgs {
  projectId: Scalars['ID'];
}


export interface IQueryProjectsArgs {
  search?: InputMaybe<IProjectsSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryProjectsEvaluateWithGanttArgs {
  projectId?: InputMaybe<Scalars['ID']>;
  workspaceId: Scalars['ID'];
}


export interface IQueryProjectsTaskWithGanttArgs {
  projectId: Scalars['ID'];
  search?: InputMaybe<ITaskSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryProjectsWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<IProjectsSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryProjectsWithStatusGroupArgs {
  search?: InputMaybe<IProjectsSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryQuotationArgs {
  quotationId: Scalars['ID'];
}


export interface IQueryQuotationsWithPaginationArgs {
  paginate: IPaginateInput;
  search: IQuotationsWithPaginationSearchInput;
}


export interface IQueryRepoArgs {
  repoId: Scalars['ID'];
}


export interface IQueryReposWithPaginationArgs {
  paginate: IPaginateInput;
  search: IReposWithPaginationInput;
}


export interface IQueryTaskArgs {
  taskId: Scalars['ID'];
}


export interface IQueryTaskCommentLogsWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<ITaskCommentLogsWithPaginationInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryTaskCommentsArgs {
  taskId: Scalars['ID'];
}


export interface IQueryTaskFileArgs {
  taskFileId: Scalars['ID'];
}


export interface IQueryTaskFilesArgs {
  taskId: Scalars['ID'];
}


export interface IQueryTaskMemberWithGanttArgs {
  projectId: Scalars['ID'];
  search: ITaskSearchInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryTaskStatusArgs {
  taskStatusId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IQueryTaskStatusKindArgs {
  taskStatusKindId: Scalars['ID'];
}


export interface IQueryTaskStatusKindsArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryTaskStatusesArgs {
  projectId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IQueryTaskWithProcessArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryTasksArgs {
  projectId?: InputMaybe<Scalars['ID']>;
  search: ITaskSearchInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryTasksWithPaginationArgs {
  paginate: IPaginateInput;
  search: ITaskSearchInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryTasksWithStatusGroupArgs {
  projectId: Scalars['ID'];
  search?: InputMaybe<ITaskSearchInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryTeamArgs {
  teamId: Scalars['ID'];
}


export interface IQueryTeamMeRoleArgs {
  teamId: Scalars['ID'];
}


export interface IQueryTeamMemberArgs {
  teamMemberId: Scalars['ID'];
}


export interface IQueryTeamMemberDashboardCategoryGroupArgs {
  teamMemberId: Scalars['ID'];
}


export interface IQueryTeamMemberDashboardGraphArgs {
  teamMemberId: Scalars['ID'];
}


export interface IQueryTeamMembersArgs {
  search?: InputMaybe<ITeamMemberSearchInput>;
  teamId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IQueryTeamMembersWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<ITeamMemberSearchInput>;
  teamId: Scalars['ID'];
  workspaceId: Scalars['ID'];
}


export interface IQueryTeamsArgs {
  search?: InputMaybe<ITeamsInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryTeamsWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<ITeamsInput>;
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkLogsRecordWithMonthArgs {
  input: IWorkLogsRecordWithMonthInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkLogsWithPaginationArgs {
  paginate: IPaginateInput;
  search: IWorkLogsWithPaginationInput;
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkspaceArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkspaceConfigArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkspaceQuotationArgs {
  workspaceId: Scalars['ID'];
}


export interface IQueryWorkspacesWithPaginationArgs {
  paginate: IPaginateInput;
  search?: InputMaybe<IWorkspaceSearchInput>;
}

export interface IQuotation {
  /** 任務取消時間 */
  cancelAt?: Maybe<Scalars['String']>;
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  details?: Maybe<Array<IQuotationDetail>>;
  /** 折扣 */
  discount: Scalars['Int'];
  /** 任務完成時間 */
  doneAt?: Maybe<Scalars['String']>;
  fromInfo?: Maybe<IQuotationCustomerInfo>;
  id: Scalars['ID'];
  /** 標題 */
  name: Scalars['String'];
  /** 付款帳戶 */
  paymentAccount?: Maybe<Scalars['String']>;
  paymentCycles?: Maybe<Array<IProjectsPaymentCycles>>;
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['String'];
  remark?: Maybe<Scalars['String']>;
  serialNumber: Scalars['Int'];
  /** 取得客戶簽回檔URL */
  signatureReturnUrl?: Maybe<Scalars['String']>;
  sn?: Maybe<Scalars['String']>;
  /** 報價狀態 */
  status: EQuotationStatus;
  /** 小計 */
  subTotalAmount: Scalars['Int'];
  /** 稅 */
  taxAmount: Scalars['Int'];
  /** 稅率 */
  taxRate: Scalars['Float'];
  /** 條款 */
  terms?: Maybe<Scalars['String']>;
  toInfo?: Maybe<IQuotationCustomerInfo>;
  /** 報價單總金額 */
  totalAmount: Scalars['Int'];
  /** 工作項目總數 */
  totalItem: Scalars['Int'];
  /** 總工時 */
  totalWorkTime: Scalars['Float'];
  /** 交易幣別 */
  transactionCurrency: ETransactionCurrency;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IQuotationCustomerInfo {
  /** 地址 */
  address?: Maybe<Scalars['String']>;
  /** 城市 */
  city?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** 傳真 */
  fax?: Maybe<Scalars['String']>;
  /** 名稱 */
  name?: Maybe<Scalars['String']>;
  /** 電話 */
  tel?: Maybe<Scalars['String']>;
  /** 網址 */
  website?: Maybe<Scalars['String']>;
  /** 郵遞區號 */
  zipCode?: Maybe<Scalars['String']>;
}

export interface IQuotationDetail {
  /** 任務價值 */
  amount: Scalars['Int'];
  /** 建立時間 */
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  /** 所屬專案 */
  quotationHead: IQuotation;
  /** 所屬報價單ID */
  quotationHeadId: Scalars['String'];
  /** 排序 */
  sequence: Scalars['Int'];
  /** 標題 */
  title: Scalars['String'];
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
}

export interface IQuotationUpdateInput {
  discount: Scalars['Int'];
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  status: EQuotationStatus;
}

export interface IQuotationsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IQuotation>;
}

export interface IQuotationsWithPaginationSearchInput {
  name?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
}

export interface IRepo {
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  desc?: Maybe<Scalars['String']>;
  /** Git平台 */
  gitPlatform?: Maybe<EGitPlatform>;
  gitRepository?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** 平台版本 */
  platform?: Maybe<ERepoPlatform>;
  serialNumber: Scalars['Int'];
  sn?: Maybe<Scalars['String']>;
  /** 底下的任務單 */
  tasks?: Maybe<Array<ITask>>;
  /** 所屬團隊 */
  team: ITeam;
  /** 所屬團隊ID */
  teamId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
  webhookSecret?: Maybe<Scalars['String']>;
  webhooksUrl: IReposWebhookUrl;
}

export interface IRepoCreateInput {
  desc?: InputMaybe<Scalars['String']>;
  gitRepository?: InputMaybe<Scalars['String']>;
  isWebhookEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  platform?: InputMaybe<ERepoPlatform>;
  teamId: Scalars['ID'];
}

export interface IRepoUpdateInput {
  desc?: InputMaybe<Scalars['String']>;
  gitRepository?: InputMaybe<Scalars['String']>;
  isWebhookEnable?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  platform?: InputMaybe<ERepoPlatform>;
}

export interface IRepoWebhookEnableUpdateInput {
  gitPlatform?: InputMaybe<Scalars['String']>;
}

export interface IReposWebhookUrl {
  bitbucket: Scalars['String'];
  github: Scalars['String'];
  gitlab: Scalars['String'];
}

export interface IReposWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IRepo>;
}

export interface IReposWithPaginationInput {
  name?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
}

export interface IResultCreateData {
  message: Scalars['String'];
  newId: Scalars['String'];
}

export interface IResultCreateData2 {
  message: Scalars['String'];
  newId: Scalars['ID'];
}

export interface IResultDeleteData {
  deleteCount: Scalars['Int'];
  message: Scalars['String'];
}

export interface IResultDownloadData {
  buffer: Scalars['String'];
  message: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
}

export interface IResultEvaluateMoveTeamData {
  message: Scalars['String'];
  newTeam: ITeam;
  updateCount: Scalars['Int'];
}

export interface IResultMessage {
  message: Scalars['String'];
}

export interface IResultTaskCreateData {
  message: Scalars['String'];
  newData: ITaskCreateData;
  newId: Scalars['String'];
}

export interface IResultTaskJoinProjectData {
  message: Scalars['String'];
  newProject: IProject;
  updateCount: Scalars['Int'];
}

export interface IResultTaskMoveRepoData {
  message: Scalars['String'];
  newRepo: IRepo;
  updateCount: Scalars['Int'];
}

export interface IResultTaskUpdateThumbData {
  message: Scalars['String'];
  thumbUrl: Scalars['String'];
  updateCount: Scalars['Int'];
}

export interface IResultUpdateData {
  message: Scalars['String'];
  updateCount: Scalars['Int'];
}

export interface IShortMember {
  avatar?: Maybe<IAvatar>;
  avatarUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isHidden: Scalars['Boolean'];
  name: Scalars['String'];
  role: ETeamMemberRole;
}

export interface ISubscription {
  addComment: IComment;
  taskChange: ITaskChangeSubscriptData;
  taskCreate: ITaskCreateSubscriptData;
  teamInviteCheck: ITeamInviteCheckData;
}


export interface ISubscriptionTaskChangeArgs {
  workspaceId: Scalars['ID'];
}


export interface ISubscriptionTaskCreateArgs {
  workspaceId: Scalars['ID'];
}

export interface ITask {
  /** 任務價值 */
  amount: Scalars['Int'];
  /** 任務封存時間 */
  archiveAt?: Maybe<Scalars['String']>;
  assigners?: Maybe<Array<IShortMember>>;
  /** 任務取消時間 */
  cancelAt?: Maybe<Scalars['String']>;
  /** 問題類型 */
  category: ETaskCategory;
  /** 任務單留言總數 */
  commentCount: Scalars['Int'];
  /** 今日任務單留言 */
  commentTodayCount: Scalars['Int'];
  /** 留言 */
  comments?: Maybe<Array<ITaskComment>>;
  /** 內容 */
  content: Scalars['String'];
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  /** PM預估截止日 */
  deadlineEndDate?: Maybe<Scalars['String']>;
  /** PM預估開始日 */
  deadlineStartDate?: Maybe<Scalars['String']>;
  /** 開發者 */
  developer?: Maybe<IMember>;
  /** 開發者ID */
  developerId?: Maybe<Scalars['ID']>;
  /** 任務完成時間 */
  doneAt?: Maybe<Scalars['String']>;
  /** 任務單的總工作時間 */
  doneWorkTime: Scalars['Float'];
  /** 開發結束時間 */
  endOfDevTime?: Maybe<Scalars['String']>;
  /** 預估完成日 */
  estimateEndDate?: Maybe<Scalars['String']>;
  /** 預估開始日 */
  estimateStartDate?: Maybe<Scalars['String']>;
  /** 預估工時 */
  estimateWorkTime: Scalars['Float'];
  /** 關聯評估 */
  evaluate?: Maybe<IEvaluate>;
  /** 關聯評估ID */
  evaluateId?: Maybe<Scalars['ID']>;
  /** 附加檔案 */
  files?: Maybe<Array<ITaskFile>>;
  /** 來源任務 */
  fromTasks?: Maybe<Array<ITaskLink>>;
  id: Scalars['ID'];
  /** 是否為封存 (不等於刪除, 日後調閱) */
  isArchive: Scalars['Boolean'];
  /** 是否自訂價值 */
  isCustomAmount: Scalars['Boolean'];
  /** 是否軟刪除 */
  isDelete: Scalars['Boolean'];
  /** 是否為重要問題, 日後方便調閱當時處理方法 */
  isMomentous: Scalars['Boolean'];
  /** 最後工作時間 */
  lastWorkLogTime?: Maybe<Scalars['String']>;
  /** 合併者 */
  merger?: Maybe<IMember>;
  /** 合併者ID */
  mergerId?: Maybe<Scalars['ID']>;
  /** 任務為重要時間 */
  momentousAt?: Maybe<Scalars['String']>;
  /** 父層任務 */
  parentTask?: Maybe<ITask>;
  /** 父層任務ID */
  parentTaskId?: Maybe<Scalars['ID']>;
  /** 任務優先度 */
  priority: ETaskPriority;
  /** 進度 */
  progressRate: Scalars['Int'];
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['String'];
  /** 發布版本 */
  releaseVersion?: Maybe<Scalars['String']>;
  /** 發布版本標記時間 */
  releaseVersionAt?: Maybe<Scalars['String']>;
  /** 所屬倉庫 */
  repo: IRepo;
  /** 所屬倉庫ID */
  repoId: Scalars['ID'];
  /** 排序(排程) */
  sequenceSchedule: Scalars['Int'];
  /** 排序(狀態) */
  sequenceStatus: Scalars['Int'];
  serialNumber: Scalars['Int'];
  /** 技術點數 */
  skillPoint: Scalars['Float'];
  sn?: Maybe<Scalars['String']>;
  /** 狀態 */
  status: ITaskStatus;
  /** 狀態ID */
  statusId: Scalars['ID'];
  /** 狀態更新時間 */
  statusUpdatedAt?: Maybe<Scalars['String']>;
  /** 子任務總數 */
  subTaskCount: Scalars['Int'];
  /** 子任務總數(已結束) */
  subTaskDoneCount: Scalars['Int'];
  /** 關聯子任務 */
  subTasks?: Maybe<Array<ITask>>;
  /** 測試裝置 */
  testDevice?: Maybe<ETaskTestDevice>;
  /** 測試者 */
  tester?: Maybe<IMember>;
  /** 測試者ID */
  testerId?: Maybe<Scalars['ID']>;
  /** 預覽圖 */
  thumb?: Maybe<ITaskFile>;
  /** 預覽圖ID */
  thumbId?: Maybe<Scalars['ID']>;
  /** 標題 */
  title: Scalars['String'];
  /** 目標任務 */
  toTasks?: Maybe<Array<ITaskLink>>;
  /** 任務類型 */
  type: ETaskType;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 工作日誌 */
  workLog?: Maybe<Array<IWorkLog>>;
}

export interface ITaskChangeData {
  /** 新增留言 */
  commentCreate?: Maybe<ITaskChangeFieldCreateComment>;
  /** 更改留言 */
  commentDelete?: Maybe<ITaskChangeFieldDeleteComment>;
  /** 更改留言 */
  commentModify?: Maybe<ITaskChangeFieldCommentMessage>;
  /** 更改優先度 */
  fieldArchive?: Maybe<ITaskChangeFieldArchive>;
  /** 更改類別 */
  fieldCategory?: Maybe<ITaskChangeFieldCategory>;
  /** 新增檔案 */
  fieldCreate?: Maybe<ITaskChangeFieldAddFile>;
  /** 更改開發者 */
  fieldDeveloper?: Maybe<ITaskChangeFieldDeveloper>;
  /** 更改完成時間 */
  fieldDownWorkTime?: Maybe<ITaskChangeFieldDownWorkTime>;
  /** 更改時間區間 */
  fieldEstimateDate?: Maybe<ITaskChangeFieldEstimateDate>;
  /** 更改預估時間 */
  fieldEstimateWorkTime?: Maybe<ITaskChangeFieldEstimateWorkTime>;
  /** 更改合併者 */
  fieldMerger?: Maybe<ITaskChangeFieldMerger>;
  /** 更改重要 */
  fieldMomentous?: Maybe<ITaskChangeFieldMomentous>;
  /** 更改優先度 */
  fieldPriority?: Maybe<ITaskChangeFieldPriority>;
  /** 更改進度 */
  fieldProgressRate?: Maybe<ITaskChangeFieldProgressRate>;
  /** 更改專案 */
  fieldProject?: Maybe<ITaskChangeFieldProject>;
  /** 更改庫 */
  fieldRepo?: Maybe<ITaskChangeFieldRepo>;
  /** 更改點數 */
  fieldSkillPoint?: Maybe<ITaskChangeFieldSkillPoint>;
  /** 更改狀態 */
  fieldStatus?: Maybe<ITaskChangeFieldStatus>;
  /** 更改測試者 */
  fieldTester?: Maybe<ITaskChangeFieldTester>;
  /** 更改標題 */
  fieldTitle?: Maybe<ITaskChangeFieldTitle>;
  /** 刪除檔案 */
  fileDelete?: Maybe<ITaskChangeFieldFileDelete>;
  /** 更改檔案名稱 */
  fileModify?: Maybe<ITaskChangeFieldFileName>;
}

export interface ITaskChangeFieldAddFile {
  file?: Maybe<ITaskFile>;
}

export interface ITaskChangeFieldArchive {
  archive: Scalars['Boolean'];
}

export interface ITaskChangeFieldCategory {
  category: ETaskCategory;
}

export interface ITaskChangeFieldCommentMessage {
  comment: ITaskComment;
}

export interface ITaskChangeFieldCreateComment {
  comment: ITaskComment;
}

export interface ITaskChangeFieldDeleteComment {
  id: Scalars['ID'];
}

export interface ITaskChangeFieldDeveloper {
  /** 開發者 */
  developer: IMember;
}

export interface ITaskChangeFieldDownWorkTime {
  /** 完成時間 */
  doneWorkTime: Scalars['Float'];
}

export interface ITaskChangeFieldEstimateDate {
  estimateEndDate?: Maybe<Scalars['String']>;
  estimateStartDate?: Maybe<Scalars['String']>;
}

export interface ITaskChangeFieldEstimateWorkTime {
  estimateWorkTime: Scalars['Float'];
}

export interface ITaskChangeFieldFileDelete {
  id: Scalars['ID'];
}

export interface ITaskChangeFieldFileName {
  id: Scalars['ID'];
  name: Scalars['ID'];
}

export interface ITaskChangeFieldMerger {
  /** 合併者 */
  merger: IMember;
}

export interface ITaskChangeFieldMomentous {
  isMomentous: Scalars['Boolean'];
}

export interface ITaskChangeFieldPriority {
  priority: ETaskPriority;
}

export interface ITaskChangeFieldProgressRate {
  progressRate: Scalars['Int'];
}

export interface ITaskChangeFieldProject {
  projectId: Scalars['ID'];
}

export interface ITaskChangeFieldRepo {
  isDiffTeam?: Maybe<Scalars['Boolean']>;
  repo: IRepo;
}

export interface ITaskChangeFieldSkillPoint {
  skillPoint: Scalars['Float'];
}

export interface ITaskChangeFieldStatus {
  progressRate?: Maybe<Scalars['Int']>;
  statusId: Scalars['String'];
}

export interface ITaskChangeFieldTester {
  /** 測試者 */
  tester: IMember;
}

export interface ITaskChangeFieldTitle {
  title: Scalars['String'];
}

export interface ITaskChangeSubscriptData {
  data?: Maybe<ITaskChangeData>;
  /** 發送者ID */
  senderId: Scalars['ID'];
  taskIds: Array<Scalars['ID']>;
  type: ETaskChangeType;
  /** 工作區ID */
  workspaceId: Scalars['ID'];
}

export interface ITaskCloneInput {
  isAfterSequence?: InputMaybe<Scalars['Boolean']>;
  repoId?: InputMaybe<Scalars['ID']>;
}

export interface ITaskComment {
  /** 任務訊息類別 */
  category: ETaskCommentCategory;
  /** 複製的任務編號 */
  cloneSerialNumber?: Maybe<Scalars['Int']>;
  cloneSn?: Maybe<Scalars['String']>;
  /** 內容 */
  content?: Maybe<Scalars['String']>;
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator: IMember;
  /** 建立者ID */
  creatorId: Scalars['ID'];
  id: Scalars['ID'];
  /** 加入到的專案編號 */
  joinProjectSerialNumber: Scalars['Int'];
  joinProjectSn?: Maybe<Scalars['String']>;
  /** 所屬工作單 */
  task: ITask;
  /** 所屬工作單ID */
  taskId: Scalars['ID'];
  /** 更新的封存狀態 */
  updateArchive?: Maybe<Scalars['Boolean']>;
  /** 更新的被指派者 */
  updateAssign?: Maybe<IMember>;
  /** 更新的被指派者ID */
  updateAssignId?: Maybe<Scalars['ID']>;
  /** 更新的問題類型 */
  updateCategory?: Maybe<ETaskCategory>;
  /** 更新的完成日 */
  updateEndDate?: Maybe<Scalars['String']>;
  /** 更新的欄位 */
  updateField?: Maybe<ETaskCommentUpdateField>;
  /** 更新的重要狀態 */
  updateMomentous?: Maybe<Scalars['Boolean']>;
  /** 更新的任務優先度 */
  updatePriority?: Maybe<ETaskPriority>;
  /** 更新的進度 */
  updateProgressRate?: Maybe<Scalars['Int']>;
  /** 更新的發布版本 */
  updateReleaseVersion?: Maybe<Scalars['String']>;
  /** 更新的開始日 */
  updateStartDate?: Maybe<Scalars['String']>;
  /** 狀態 */
  updateStatus?: Maybe<ITaskStatus>;
  /** 狀態ID */
  updateStatusId?: Maybe<Scalars['ID']>;
  /** 更新的任務類型 */
  updateType?: Maybe<ETaskType>;
  /** 更新的預估工時 */
  updateWorkTime?: Maybe<Scalars['Float']>;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITaskCommentCreateData {
  message: Scalars['String'];
  newData: ITaskComment;
  newId: Scalars['String'];
}

export interface ITaskCommentLogsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<ITaskComment>;
}

export interface ITaskCommentLogsWithPaginationInput {
  createdRangeDate?: InputMaybe<IICreateRangeDate>;
  creatorId?: InputMaybe<Scalars['String']>;
  serialNumber?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
}

export interface ITaskCommentUpdateInput {
  content?: InputMaybe<Scalars['String']>;
}

export interface ITaskCreateData {
  category: ETaskCategory;
  commentCount: Scalars['Int'];
  commentTodayCount: Scalars['Int'];
  createdAt: Scalars['String'];
  /** 開發者 */
  developer?: Maybe<IMember>;
  doneWorkTime: Scalars['Int'];
  estimateEndDate?: Maybe<Scalars['String']>;
  estimateStartDate?: Maybe<Scalars['String']>;
  estimateWorkTime: Scalars['Float'];
  id: Scalars['ID'];
  isArchive: Scalars['Boolean'];
  /** 合併者 */
  merger?: Maybe<IMember>;
  priority: ETaskPriority;
  progressRate: Scalars['Int'];
  projectId: Scalars['String'];
  /** 所屬倉庫 */
  repo: IRepo;
  skillPoint: Scalars['Int'];
  sn: Scalars['String'];
  statusId: Scalars['String'];
  subTaskCount: Scalars['Int'];
  subTaskDoneCount: Scalars['Int'];
  /** 測試者 */
  tester?: Maybe<IMember>;
  title: Scalars['String'];
}

export interface ITaskCreateInput {
  developerId?: InputMaybe<Scalars['ID']>;
  parentTaskId?: InputMaybe<Scalars['ID']>;
  repoId: Scalars['ID'];
  statusId?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
}

export interface ITaskCreateSubscriptData {
  data: ITaskCreateData;
  /** 發送者ID */
  senderId: Scalars['ID'];
  /** 工作區ID */
  workspaceId: Scalars['ID'];
}

export interface ITaskFile {
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  file: IImageFile;
  /** 檔案網址 */
  fileUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 所屬工作單 */
  task: ITask;
  /** 所屬工作單ID */
  taskId: Scalars['ID'];
  /** 被設定的任務(預覽圖) */
  taskThumb?: Maybe<Array<ITask>>;
  /** 縮圖網址 */
  thumbUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITaskFileUpload {
  isThumb: Scalars['Boolean'];
  message: Scalars['String'];
  newData: ITaskFile;
  newId: Scalars['String'];
}

export interface ITaskLink {
  createdAt: Scalars['String'];
  /** 來源ID */
  from: ITask;
  /** 來源ID */
  fromId: Scalars['ID'];
  id: Scalars['ID'];
  /** 目標ID */
  to: ITask;
  /** 目標ID */
  toId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITaskMemberWithGantt {
  projectMap: Array<IProjectsWithGanttProject>;
  tasks: Array<ITaskMemberWithGanttTask>;
}

export interface ITaskMemberWithGanttTask {
  assigners?: Maybe<Array<IRepo>>;
  dataLevel: Scalars['DataLevelTask'];
  estimateEndDate?: Maybe<Scalars['String']>;
  estimateStartDate?: Maybe<Scalars['String']>;
  estimateWorkTime?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  links?: Maybe<Array<Scalars['String']>>;
  progressRate?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  status?: Maybe<ITaskStatus>;
  text: Scalars['String'];
}

export interface ITaskSearchInput {
  category?: InputMaybe<ETaskCategory>;
  createEndDate?: InputMaybe<Scalars['String']>;
  createStartDate?: InputMaybe<Scalars['String']>;
  developerId?: InputMaybe<Scalars['ID']>;
  estimateDate?: InputMaybe<IDateRange>;
  isArchive?: InputMaybe<Scalars['Boolean']>;
  isMomentous?: InputMaybe<Scalars['Boolean']>;
  mergerId?: InputMaybe<Scalars['ID']>;
  parentTaskId?: InputMaybe<Scalars['ID']>;
  repoId?: InputMaybe<Scalars['ID']>;
  statusId?: InputMaybe<Scalars['String']>;
  testerId?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ITaskStatus {
  color?: Maybe<Scalars['String']>;
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** 是否為取消狀態 */
  isCancel: Scalars['Boolean'];
  /** 是否為預設 */
  isDefault: Scalars['Boolean'];
  /** 是否為結束狀態 */
  isFinish: Scalars['Boolean'];
  /** 是否為進行中狀態 */
  isProcessing: Scalars['Boolean'];
  /** 狀態類型 */
  kind?: Maybe<ITaskStatusKind>;
  /** 狀態類型 */
  kindId?: Maybe<Scalars['ID']>;
  /** 標題 */
  name: Scalars['String'];
  /** 所屬專案 */
  project: IProject;
  /** 所屬專案ID */
  projectId: Scalars['String'];
  /** 排序 */
  sequence: Scalars['Int'];
  /** 任務 */
  taskComments?: Maybe<Array<ITaskComment>>;
  /** 任務 */
  tasks?: Maybe<Array<ITask>>;
  /** 主題色 */
  theme?: Maybe<ITheme>;
  /** 主題色ID */
  themeId?: Maybe<Scalars['ID']>;
  /** 觸發類 */
  trigger?: Maybe<ETaskStatusTrigger>;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITaskStatusCreateInput {
  desc?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFinish?: InputMaybe<Scalars['Boolean']>;
  isProcessing?: InputMaybe<Scalars['Boolean']>;
  kindId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  themeId?: InputMaybe<Scalars['String']>;
  trigger?: InputMaybe<Scalars['String']>;
}

export interface ITaskStatusKind {
  /** 建立時間 */
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** 標題 */
  name: Scalars['String'];
  /** 排序 */
  sequence: Scalars['Int'];
  /** 狀態 */
  status?: Maybe<Array<ITaskStatus>>;
  /** 更新時間 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 工作區 */
  workspace?: Maybe<IWorkspace>;
  /** 工作區ID */
  workspaceId?: Maybe<Scalars['ID']>;
}

export interface ITaskStatusKindCreateInput {
  name: Scalars['String'];
  themeId?: InputMaybe<Scalars['String']>;
}

export interface ITaskStatusKindUpdateInput {
  name: Scalars['String'];
  themeId?: InputMaybe<Scalars['String']>;
}

export interface ITaskStatusUpdateInput {
  desc?: InputMaybe<Scalars['String']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFinish?: InputMaybe<Scalars['Boolean']>;
  isProcessing?: InputMaybe<Scalars['Boolean']>;
  kindId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  themeId?: InputMaybe<Scalars['String']>;
  trigger?: InputMaybe<Scalars['String']>;
}

export interface ITaskUpdateAssignerInput {
  developerId?: InputMaybe<Scalars['ID']>;
  mergerId?: InputMaybe<Scalars['ID']>;
  testerId?: InputMaybe<Scalars['ID']>;
}

export interface ITaskUpdateEstimatesDate {
  estimateEndDate?: InputMaybe<Scalars['String']>;
  estimateStartDate?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
}

export interface ITaskUpdateFieldInput {
  category?: InputMaybe<ETaskCategory>;
  content?: InputMaybe<Scalars['String']>;
  doneWorkTime?: InputMaybe<Scalars['Float']>;
  estimateWorkTime?: InputMaybe<Scalars['Float']>;
  priority?: InputMaybe<ETaskPriority>;
  progressRate?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['ID']>;
  releaseVersion?: InputMaybe<Scalars['String']>;
  skillPoint?: InputMaybe<Scalars['Float']>;
  testDevice?: InputMaybe<ETaskTestDevice>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ITaskUpdateMomentousInput {
  isMomentous?: InputMaybe<Scalars['Boolean']>;
}

export interface ITaskUpdateMultiStatusInput {
  progressRate?: InputMaybe<Scalars['Int']>;
  statusId: Scalars['String'];
}

export interface ITaskUpdateSequenceScheduleToInput {
  isAfter?: InputMaybe<Scalars['Boolean']>;
  toTaskId?: InputMaybe<Scalars['ID']>;
}

export interface ITaskUpdateSequenceScheduleWhereInput {
  projectId?: InputMaybe<Scalars['ID']>;
  workspaceId: Scalars['ID'];
}

export interface ITaskUpdateSequenceStatusToInput {
  statusId: Scalars['String'];
  taskId?: InputMaybe<Scalars['String']>;
}

export interface ITaskUpdateSequenceStatusWhereInput {
  statusId: Scalars['String'];
  taskId: Scalars['String'];
}

export interface ITaskWithStatusGroup {
  groups: Array<IITaskStatusGroup>;
  tasks: Array<ITask>;
}

export interface ITasksWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<ITask>;
}

export interface ITeam {
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 建立者 */
  creator?: Maybe<IMember>;
  /** 建立者ID */
  creatorId?: Maybe<Scalars['ID']>;
  desc?: Maybe<Scalars['String']>;
  /** 評估 */
  evaluates?: Maybe<Array<IEvaluate>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  /** 擁有者ID */
  owner?: Maybe<IMember>;
  /** 擁有者ID */
  ownerId?: Maybe<Scalars['ID']>;
  /** 專案 */
  repos?: Maybe<Array<IRepo>>;
  serialNumber: Scalars['Int'];
  sn?: Maybe<Scalars['String']>;
  /** 團隊成員 */
  teamMembers?: Maybe<Array<ITeamMember>>;
  /** 主題色 */
  theme?: Maybe<ITheme>;
  /** 主題色ID */
  themeId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface ITeamCreateInput {
  desc?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  themeId?: InputMaybe<Scalars['String']>;
}

export interface ITeamInviteCheckData {
  /** 是否有團隊邀請加入 */
  isHasInvite: Scalars['Boolean'];
  /** 被通知者ID */
  memberId: Scalars['ID'];
}

export interface ITeamMember {
  createdAt: Scalars['String'];
  hourSalaryAmount: Scalars['Int'];
  id: Scalars['ID'];
  isAgreeJoin: Scalars['Boolean'];
  isEnable: Scalars['Boolean'];
  /** 成員 */
  member: IMember;
  /** 成員ID */
  memberId: Scalars['ID'];
  /** 團隊角色 */
  role: ETeamMemberRole;
  /** 團隊 */
  team: ITeam;
  /** 團隊ID */
  teamId: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITeamMemberInviteJoinInput {
  email: Scalars['String'];
}

export interface ITeamMemberSearchInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface ITeamMemberUpdateInput {
  hourSalaryAmount?: InputMaybe<Scalars['Int']>;
  isEnable?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<ETeamMemberRole>;
}

export interface ITeamMembersWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<ITeamMember>;
}

export interface ITeamUpdateInput {
  desc?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  themeId?: InputMaybe<Scalars['String']>;
}

export interface ITeamsInput {
  name?: InputMaybe<Scalars['String']>;
  stageId?: InputMaybe<Scalars['ID']>;
  taskId?: InputMaybe<Scalars['ID']>;
}

export interface ITeamsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<ITeam>;
}

export interface ITheme {
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  /** 任務狀態 */
  taskStatuses?: Maybe<Array<ITaskStatus>>;
  /** 團隊 */
  teams?: Maybe<Array<ITeam>>;
  updatedAt?: Maybe<Scalars['String']>;
}

export interface ITokenInfo {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
}

export interface IWorkLog {
  createdAt: Scalars['String'];
  endTime?: Maybe<Scalars['String']>;
  /** 消耗工時 */
  hour: Scalars['Float'];
  id: Scalars['ID'];
  /** 所屬工作者 */
  owner?: Maybe<IMember>;
  /** 所屬工作者ID */
  ownerId?: Maybe<Scalars['ID']>;
  startTime: Scalars['String'];
  /** 花費時間的任務 */
  task?: Maybe<ITask>;
  /** 花費時間的任務ID */
  taskId?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  /** 所屬工作區 */
  workspace: IWorkspace;
  /** 所屬工作區ID */
  workspaceId: Scalars['ID'];
}

export interface IWorkLogCreate {
  message: Scalars['String'];
  newId: Scalars['String'];
  startTime: Scalars['String'];
}

export interface IWorkLogCreateInput {
  startTime?: InputMaybe<Scalars['String']>;
}

export interface IWorkLogStop {
  doneWorkTime: Scalars['Float'];
  message: Scalars['String'];
  updateCount: Scalars['Int'];
}

export interface IWorkLogUpdateTime {
  hour: Scalars['Float'];
  message: Scalars['String'];
  updateCount: Scalars['Int'];
}

export interface IWorkLogUpdateTimeInput {
  date?: InputMaybe<Scalars['String']>;
  endTime?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['String']>;
}

export interface IWorkLogsRecordWithMonthInput {
  month: Scalars['Int'];
  year: Scalars['Int'];
}

export interface IWorkLogsWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IWorkLog>;
}

export interface IWorkLogsWithPaginationInput {
  date?: InputMaybe<Scalars['String']>;
  taskId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IWorkspace {
  /** 地址 */
  address?: Maybe<Scalars['String']>;
  /** 取得工作區圖示URL */
  avatarUrl?: Maybe<Scalars['String']>;
  /** 取得工作區Banner URL */
  bannerUrl?: Maybe<Scalars['String']>;
  /** 帳單 */
  billings?: Maybe<Array<IMemberBilling>>;
  /** 書籤 */
  bookmark?: Maybe<Array<IBookmark>>;
  /** 城市 */
  city?: Maybe<Scalars['String']>;
  /** 收款帳戶 */
  collectionAccount?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  /** 客戶 */
  customer?: Maybe<Array<ICustomer>>;
  desc?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** 傳真 */
  fax?: Maybe<Scalars['String']>;
  /** Icon */
  icons?: Maybe<Array<IIconSymbols>>;
  id: Scalars['ID'];
  isAlreadyTried: Scalars['Boolean'];
  isPersonal: Scalars['Boolean'];
  isSkipHoliday: Scalars['Boolean'];
  /** 是否為試用 */
  isSubscriptTried: Scalars['Boolean'];
  me: EWorkspaceTarget;
  /** 名稱 */
  name: Scalars['String'];
  /** 擁有者 */
  owner: IMember;
  /** 擁有者ID */
  ownerId: Scalars['ID'];
  planCode: EWorkspacePlan;
  /** 工作區的專案總數 */
  projectCount: Scalars['Int'];
  /** 專案 */
  projects?: Maybe<Array<IProject>>;
  serialNumber: Scalars['Int'];
  sn?: Maybe<Scalars['String']>;
  /** 任務狀態群組 */
  statusesKind?: Maybe<Array<ITaskStatusKind>>;
  /** 訂閱結束日期 */
  subscriptEndDate?: Maybe<Scalars['String']>;
  /** 訂閱開始日期 */
  subscriptStartDate?: Maybe<Scalars['String']>;
  /** 工作區的任務總數 */
  taskCount: Scalars['Int'];
  /** 稅率 */
  taxRate: Scalars['Float'];
  /** 工作區的團隊總數 */
  teamCount: Scalars['Int'];
  /** 團隊 */
  teams?: Maybe<Array<ITeam>>;
  /** 電話 */
  tel?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 工作區的虛擬專案Id */
  virtualProjectId: Scalars['String'];
  /** 網址 */
  website?: Maybe<Scalars['String']>;
  /** 工作記錄 */
  workLog?: Maybe<Array<IWorkLog>>;
  /** 郵遞區號 */
  zipCode?: Maybe<Scalars['String']>;
}

export interface IWorkspaceAllows {
  workspaces: Array<IWorkspace>;
}

export interface IWorkspaceCreateInput {
  /** 說明 */
  desc?: InputMaybe<Scalars['String']>;
  /** 是否忽略假日 */
  isSkipHoliday?: InputMaybe<Scalars['Boolean']>;
  /** 名稱 */
  name: Scalars['String'];
}

export interface IWorkspaceOrderCancelInput {
  /** 取消說明 */
  cancelReason?: InputMaybe<Scalars['String']>;
}

export interface IWorkspaceOrderCreateInput {
  /** 是否年繳 */
  isPaymentCycleYear: Scalars['Boolean'];
  /** Paypal訂閱ID */
  paypalSubscriptionId: Scalars['String'];
  /** 計畫代碼 */
  planCode: EWorkspacePlan;
}

export interface IWorkspaceSearchInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface IWorkspaceUpdateInput {
  /** 說明 */
  desc?: InputMaybe<Scalars['String']>;
  /** 是否忽略假日 */
  isSkipHoliday?: InputMaybe<Scalars['Boolean']>;
  /** 名稱 */
  name: Scalars['String'];
}

export interface IWorkspaceUpdateQuotationInput {
  /** 地址 */
  address?: InputMaybe<Scalars['String']>;
  /** 城市 */
  city?: InputMaybe<Scalars['String']>;
  /** 收款帳戶 */
  collectionAccount?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** 傳真 */
  fax?: InputMaybe<Scalars['String']>;
  /** 稅率 */
  taxRate?: InputMaybe<Scalars['Float']>;
  /** 電話 */
  tel?: InputMaybe<Scalars['String']>;
  /** 網址 */
  website?: InputMaybe<Scalars['String']>;
  /** 郵遞區號 */
  zipCode?: InputMaybe<Scalars['String']>;
}

export interface IWorkspacesOrderPlanConfig {
  code: EWorkspacePlan;
  desc: Scalars['String'];
  features: Array<IWorkspacesOrderPlanConfigFeature>;
  limit: IWorkspacesOrderPlanConfigLimit;
  name: Scalars['String'];
  price: IWorkspacesOrderPlanConfigPrice;
}

export interface IWorkspacesOrderPlanConfigFeature {
  children?: Maybe<Array<IWorkspacesOrderPlanConfigFeature>>;
  text: Scalars['String'];
}

export interface IWorkspacesOrderPlanConfigLimit {
  evaluateCount: Scalars['Int'];
  iconSvgCount: Scalars['Int'];
  iconSymbolsCount: Scalars['Int'];
  projectCount: Scalars['Int'];
  taskCount: Scalars['Int'];
  teamCount: Scalars['Int'];
  teamMemberCount: Scalars['Int'];
  teamRepoCount: Scalars['Int'];
}

export interface IWorkspacesOrderPlanConfigPrice {
  month: IWorkspacesOrderPlanPrice;
  year: IWorkspacesOrderPlanPrice;
}

export interface IWorkspacesOrderPlanPrice {
  amount: Scalars['Int'];
  paypalPlanId?: Maybe<Scalars['String']>;
}

export interface IWorkspacesWithPagination {
  info: IInfo;
  meta: IMeta;
  rows: Array<IWorkspace>;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  AuthDirectGoogleVerify: ResolverTypeWrapper<IAuthDirectGoogleVerify>;
  AuthLogin: ResolverTypeWrapper<IAuthLogin>;
  AuthLoginByGoogleInput: IAuthLoginByGoogleInput;
  AuthLoginInput: IAuthLoginInput;
  AuthLoginWithGoogle: ResolverTypeWrapper<IAuthLoginWithGoogle>;
  AuthRefreshToken: ResolverTypeWrapper<IAuthRefreshToken>;
  AuthRefreshTokenInput: IAuthRefreshTokenInput;
  AuthResetPasswordInput: IAuthResetPasswordInput;
  AuthSendVerifyCode: ResolverTypeWrapper<IAuthSendVerifyCode>;
  AuthSendVerifyCodeInput: IAuthSendVerifyCodeInput;
  AuthSignUp: ResolverTypeWrapper<IAuthSignUp>;
  AuthSignUpInput: IAuthSignUpInput;
  Avatar: ResolverTypeWrapper<IAvatar>;
  Bookmark: ResolverTypeWrapper<IBookmark>;
  BookmarkCreateInput: IBookmarkCreateInput;
  BookmarkUpdateInput: IBookmarkUpdateInput;
  BookmarksWithPagination: ResolverTypeWrapper<IBookmarksWithPagination>;
  BookmarksWithPaginationSearchInput: IBookmarksWithPaginationSearchInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CategoryGroupCount: ResolverTypeWrapper<ICategoryGroupCount>;
  Comment: ResolverTypeWrapper<IComment>;
  Customer: ResolverTypeWrapper<ICustomer>;
  CustomerCreateInput: ICustomerCreateInput;
  CustomerUpdateInput: ICustomerUpdateInput;
  CustomersWithPagination: ResolverTypeWrapper<ICustomersWithPagination>;
  CustomersWithPaginationSearchInput: ICustomersWithPaginationSearchInput;
  DashboardCategoryGroup: ResolverTypeWrapper<IDashboardCategoryGroup>;
  DashboardCount: ResolverTypeWrapper<IDashboardCount>;
  DashboardGraph: ResolverTypeWrapper<IDashboardGraph>;
  DashboardOSInfo: ResolverTypeWrapper<IDashboardOsInfo>;
  DataLevelProject: ResolverTypeWrapper<Scalars['DataLevelProject']>;
  DataLevelTask: ResolverTypeWrapper<Scalars['DataLevelTask']>;
  DataLevelTeam: ResolverTypeWrapper<Scalars['DataLevelTeam']>;
  DateRange: IDateRange;
  ECountry: ECountry;
  EEvaluateCommentCategory: EEvaluateCommentCategory;
  EEvaluateCommentUpdateField: EEvaluateCommentUpdateField;
  EEvaluateLinkMode: EEvaluateLinkMode;
  EEvaluateStatus: EEvaluateStatus;
  EGitPlatform: EGitPlatform;
  EIconSvgDownloadType: EIconSvgDownloadType;
  ELoginDeviceCode: ELoginDeviceCode;
  EPaymentEventType: EPaymentEventType;
  EPaymentType: EPaymentType;
  EProjectNoteCategory: EProjectNoteCategory;
  EProjectStatus: EProjectStatus;
  EProjectTarget: EProjectTarget;
  EQuotationStatus: EQuotationStatus;
  ERepoPlatform: ERepoPlatform;
  ESignUpMethod: ESignUpMethod;
  ETaskAssignType: ETaskAssignType;
  ETaskCategory: ETaskCategory;
  ETaskChangeType: ETaskChangeType;
  ETaskCommentCategory: ETaskCommentCategory;
  ETaskCommentUpdateField: ETaskCommentUpdateField;
  ETaskLinkMode: ETaskLinkMode;
  ETaskPriority: ETaskPriority;
  ETaskStatusTemplateCode: ETaskStatusTemplateCode;
  ETaskStatusTrigger: ETaskStatusTrigger;
  ETaskTestDevice: ETaskTestDevice;
  ETaskType: ETaskType;
  ETeamMemberRole: ETeamMemberRole;
  ETransactionCurrency: ETransactionCurrency;
  EWorkspacePlan: EWorkspacePlan;
  EWorkspaceTarget: EWorkspaceTarget;
  Evaluate: ResolverTypeWrapper<IEvaluate>;
  EvaluateComment: ResolverTypeWrapper<IEvaluateComment>;
  EvaluateCommentCreate: ResolverTypeWrapper<IEvaluateCommentCreate>;
  EvaluateCommentUpdateInput: IEvaluateCommentUpdateInput;
  EvaluateCreateInput: IEvaluateCreateInput;
  EvaluateFile: ResolverTypeWrapper<IEvaluateFile>;
  EvaluateFileUpload: ResolverTypeWrapper<IEvaluateFileUpload>;
  EvaluateLink: ResolverTypeWrapper<IEvaluateLink>;
  EvaluateSearchInput: IEvaluateSearchInput;
  EvaluateUpdateAssignerInput: IEvaluateUpdateAssignerInput;
  EvaluateUpdateEstimatesDate: IEvaluateUpdateEstimatesDate;
  EvaluateUpdateFieldInput: IEvaluateUpdateFieldInput;
  EvaluateUpdateMultiStatusInput: IEvaluateUpdateMultiStatusInput;
  EvaluateUpdateSequenceToInput: IEvaluateUpdateSequenceToInput;
  EvaluateUpdateSequenceWhereInput: IEvaluateUpdateSequenceWhereInput;
  EvaluateWithPagination: ResolverTypeWrapper<IEvaluateWithPagination>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Graph: ResolverTypeWrapper<IGraph>;
  ICreateRangeDate: IICreateRangeDate;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IProjectStatusGroup: ResolverTypeWrapper<IIProjectStatusGroup>;
  ITaskStatusGroup: ResolverTypeWrapper<IITaskStatusGroup>;
  IconSvg: ResolverTypeWrapper<IIconSvg>;
  IconSvgDownloadInput: IIconSvgDownloadInput;
  IconSvgUpdateInput: IIconSvgUpdateInput;
  IconSvgUpload: ResolverTypeWrapper<IIconSvgUpload>;
  IconSvgUploadSymbols: ResolverTypeWrapper<IIconSvgUploadSymbols>;
  IconSvgWithPaginationSearchInput: IIconSvgWithPaginationSearchInput;
  IconSymbols: ResolverTypeWrapper<IIconSymbols>;
  IconSymbolsCreateInput: IIconSymbolsCreateInput;
  IconSymbolsUpdateInput: IIconSymbolsUpdateInput;
  IconSymbolsWithPagination: ResolverTypeWrapper<IIconSymbolsWithPagination>;
  IconSymbolsWithPaginationInput: IIconSymbolsWithPaginationInput;
  ImageFile: ResolverTypeWrapper<IImageFile>;
  Info: ResolverTypeWrapper<IInfo>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Member: ResolverTypeWrapper<IMember>;
  MemberBilling: ResolverTypeWrapper<IMemberBilling>;
  MemberBillingHistory: ResolverTypeWrapper<IMemberBillingHistory>;
  MemberBillingHistorySearchInput: IMemberBillingHistorySearchInput;
  MemberBillingHistoryWithPagination: ResolverTypeWrapper<IMemberBillingHistoryWithPagination>;
  MemberBillingSearchInput: IMemberBillingSearchInput;
  MemberBillingWithPagination: ResolverTypeWrapper<IMemberBillingWithPagination>;
  MemberLoginHistory: ResolverTypeWrapper<IMemberLoginHistory>;
  MemberProfileUpdateInput: IMemberProfileUpdateInput;
  MemberProfileUpdatePasswordInput: IMemberProfileUpdatePasswordInput;
  Meta: ResolverTypeWrapper<IMeta>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<IOrder>;
  OrderInput: IOrderInput;
  PaginateInput: IPaginateInput;
  Project: ResolverTypeWrapper<IProject>;
  ProjectCreateInput: IProjectCreateInput;
  ProjectMilestone: ResolverTypeWrapper<IProjectMilestone>;
  ProjectMilestoneCreateInput: IProjectMilestoneCreateInput;
  ProjectMilestoneUpdateInput: IProjectMilestoneUpdateInput;
  ProjectMilestonesWithPagination: ResolverTypeWrapper<IProjectMilestonesWithPagination>;
  ProjectMilestonesWithPaginationSearchInput: IProjectMilestonesWithPaginationSearchInput;
  ProjectNote: ResolverTypeWrapper<IProjectNote>;
  ProjectNoteCreateInput: IProjectNoteCreateInput;
  ProjectNoteUpdateInput: IProjectNoteUpdateInput;
  ProjectQuotationUpdateInput: IProjectQuotationUpdateInput;
  ProjectUpdateInput: IProjectUpdateInput;
  ProjectUpdateSequenceToInput: IProjectUpdateSequenceToInput;
  ProjectUpdateSequenceWhereInput: IProjectUpdateSequenceWhereInput;
  ProjectWithStatusGroup: ResolverTypeWrapper<IProjectWithStatusGroup>;
  ProjectsPaymentCycles: ResolverTypeWrapper<IProjectsPaymentCycles>;
  ProjectsPaymentCyclesInput: IProjectsPaymentCyclesInput;
  ProjectsSearchInput: IProjectsSearchInput;
  ProjectsWithGantt: ResolverTypeWrapper<IProjectsWithGantt>;
  ProjectsWithGanttProject: ResolverTypeWrapper<IProjectsWithGanttProject>;
  ProjectsWithGanttTask: ResolverTypeWrapper<IProjectsWithGanttTask>;
  ProjectsWithGanttTeam: ResolverTypeWrapper<IProjectsWithGanttTeam>;
  ProjectsWithGanttTeamTask: ResolverTypeWrapper<IProjectsWithGanttTeamTask>;
  ProjectsWithPagination: ResolverTypeWrapper<IProjectsWithPagination>;
  Query: ResolverTypeWrapper<{}>;
  Quotation: ResolverTypeWrapper<IQuotation>;
  QuotationCustomerInfo: ResolverTypeWrapper<IQuotationCustomerInfo>;
  QuotationDetail: ResolverTypeWrapper<IQuotationDetail>;
  QuotationUpdateInput: IQuotationUpdateInput;
  QuotationsWithPagination: ResolverTypeWrapper<IQuotationsWithPagination>;
  QuotationsWithPaginationSearchInput: IQuotationsWithPaginationSearchInput;
  Repo: ResolverTypeWrapper<IRepo>;
  RepoCreateInput: IRepoCreateInput;
  RepoUpdateInput: IRepoUpdateInput;
  RepoWebhookEnableUpdateInput: IRepoWebhookEnableUpdateInput;
  ReposWebhookUrl: ResolverTypeWrapper<IReposWebhookUrl>;
  ReposWithPagination: ResolverTypeWrapper<IReposWithPagination>;
  ReposWithPaginationInput: IReposWithPaginationInput;
  ResultCreateData: ResolverTypeWrapper<IResultCreateData>;
  ResultCreateData2: ResolverTypeWrapper<IResultCreateData2>;
  ResultDeleteData: ResolverTypeWrapper<IResultDeleteData>;
  ResultDownloadData: ResolverTypeWrapper<IResultDownloadData>;
  ResultEvaluateMoveTeamData: ResolverTypeWrapper<IResultEvaluateMoveTeamData>;
  ResultMessage: ResolverTypeWrapper<IResultMessage>;
  ResultTaskCreateData: ResolverTypeWrapper<IResultTaskCreateData>;
  ResultTaskJoinProjectData: ResolverTypeWrapper<IResultTaskJoinProjectData>;
  ResultTaskMoveRepoData: ResolverTypeWrapper<IResultTaskMoveRepoData>;
  ResultTaskUpdateThumbData: ResolverTypeWrapper<IResultTaskUpdateThumbData>;
  ResultUpdateData: ResolverTypeWrapper<IResultUpdateData>;
  ShortMember: ResolverTypeWrapper<IShortMember>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Task: ResolverTypeWrapper<ITask>;
  TaskChangeData: ResolverTypeWrapper<ITaskChangeData>;
  TaskChangeFieldAddFile: ResolverTypeWrapper<ITaskChangeFieldAddFile>;
  TaskChangeFieldArchive: ResolverTypeWrapper<ITaskChangeFieldArchive>;
  TaskChangeFieldCategory: ResolverTypeWrapper<ITaskChangeFieldCategory>;
  TaskChangeFieldCommentMessage: ResolverTypeWrapper<ITaskChangeFieldCommentMessage>;
  TaskChangeFieldCreateComment: ResolverTypeWrapper<ITaskChangeFieldCreateComment>;
  TaskChangeFieldDeleteComment: ResolverTypeWrapper<ITaskChangeFieldDeleteComment>;
  TaskChangeFieldDeveloper: ResolverTypeWrapper<ITaskChangeFieldDeveloper>;
  TaskChangeFieldDownWorkTime: ResolverTypeWrapper<ITaskChangeFieldDownWorkTime>;
  TaskChangeFieldEstimateDate: ResolverTypeWrapper<ITaskChangeFieldEstimateDate>;
  TaskChangeFieldEstimateWorkTime: ResolverTypeWrapper<ITaskChangeFieldEstimateWorkTime>;
  TaskChangeFieldFileDelete: ResolverTypeWrapper<ITaskChangeFieldFileDelete>;
  TaskChangeFieldFileName: ResolverTypeWrapper<ITaskChangeFieldFileName>;
  TaskChangeFieldMerger: ResolverTypeWrapper<ITaskChangeFieldMerger>;
  TaskChangeFieldMomentous: ResolverTypeWrapper<ITaskChangeFieldMomentous>;
  TaskChangeFieldPriority: ResolverTypeWrapper<ITaskChangeFieldPriority>;
  TaskChangeFieldProgressRate: ResolverTypeWrapper<ITaskChangeFieldProgressRate>;
  TaskChangeFieldProject: ResolverTypeWrapper<ITaskChangeFieldProject>;
  TaskChangeFieldRepo: ResolverTypeWrapper<ITaskChangeFieldRepo>;
  TaskChangeFieldSkillPoint: ResolverTypeWrapper<ITaskChangeFieldSkillPoint>;
  TaskChangeFieldStatus: ResolverTypeWrapper<ITaskChangeFieldStatus>;
  TaskChangeFieldTester: ResolverTypeWrapper<ITaskChangeFieldTester>;
  TaskChangeFieldTitle: ResolverTypeWrapper<ITaskChangeFieldTitle>;
  TaskChangeSubscriptData: ResolverTypeWrapper<ITaskChangeSubscriptData>;
  TaskCloneInput: ITaskCloneInput;
  TaskComment: ResolverTypeWrapper<ITaskComment>;
  TaskCommentCreateData: ResolverTypeWrapper<ITaskCommentCreateData>;
  TaskCommentLogsWithPagination: ResolverTypeWrapper<ITaskCommentLogsWithPagination>;
  TaskCommentLogsWithPaginationInput: ITaskCommentLogsWithPaginationInput;
  TaskCommentUpdateInput: ITaskCommentUpdateInput;
  TaskCreateData: ResolverTypeWrapper<ITaskCreateData>;
  TaskCreateInput: ITaskCreateInput;
  TaskCreateSubscriptData: ResolverTypeWrapper<ITaskCreateSubscriptData>;
  TaskFile: ResolverTypeWrapper<ITaskFile>;
  TaskFileUpload: ResolverTypeWrapper<ITaskFileUpload>;
  TaskLink: ResolverTypeWrapper<ITaskLink>;
  TaskMemberWithGantt: ResolverTypeWrapper<ITaskMemberWithGantt>;
  TaskMemberWithGanttTask: ResolverTypeWrapper<ITaskMemberWithGanttTask>;
  TaskSearchInput: ITaskSearchInput;
  TaskStatus: ResolverTypeWrapper<ITaskStatus>;
  TaskStatusCreateInput: ITaskStatusCreateInput;
  TaskStatusKind: ResolverTypeWrapper<ITaskStatusKind>;
  TaskStatusKindCreateInput: ITaskStatusKindCreateInput;
  TaskStatusKindUpdateInput: ITaskStatusKindUpdateInput;
  TaskStatusUpdateInput: ITaskStatusUpdateInput;
  TaskUpdateAssignerInput: ITaskUpdateAssignerInput;
  TaskUpdateEstimatesDate: ITaskUpdateEstimatesDate;
  TaskUpdateFieldInput: ITaskUpdateFieldInput;
  TaskUpdateMomentousInput: ITaskUpdateMomentousInput;
  TaskUpdateMultiStatusInput: ITaskUpdateMultiStatusInput;
  TaskUpdateSequenceScheduleToInput: ITaskUpdateSequenceScheduleToInput;
  TaskUpdateSequenceScheduleWhereInput: ITaskUpdateSequenceScheduleWhereInput;
  TaskUpdateSequenceStatusToInput: ITaskUpdateSequenceStatusToInput;
  TaskUpdateSequenceStatusWhereInput: ITaskUpdateSequenceStatusWhereInput;
  TaskWithStatusGroup: ResolverTypeWrapper<ITaskWithStatusGroup>;
  TasksWithPagination: ResolverTypeWrapper<ITasksWithPagination>;
  Team: ResolverTypeWrapper<ITeam>;
  TeamCreateInput: ITeamCreateInput;
  TeamInviteCheckData: ResolverTypeWrapper<ITeamInviteCheckData>;
  TeamMember: ResolverTypeWrapper<ITeamMember>;
  TeamMemberInviteJoinInput: ITeamMemberInviteJoinInput;
  TeamMemberSearchInput: ITeamMemberSearchInput;
  TeamMemberUpdateInput: ITeamMemberUpdateInput;
  TeamMembersWithPagination: ResolverTypeWrapper<ITeamMembersWithPagination>;
  TeamUpdateInput: ITeamUpdateInput;
  TeamsInput: ITeamsInput;
  TeamsWithPagination: ResolverTypeWrapper<ITeamsWithPagination>;
  Theme: ResolverTypeWrapper<ITheme>;
  TokenInfo: ResolverTypeWrapper<ITokenInfo>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  WorkLog: ResolverTypeWrapper<IWorkLog>;
  WorkLogCreate: ResolverTypeWrapper<IWorkLogCreate>;
  WorkLogCreateInput: IWorkLogCreateInput;
  WorkLogStop: ResolverTypeWrapper<IWorkLogStop>;
  WorkLogUpdateTime: ResolverTypeWrapper<IWorkLogUpdateTime>;
  WorkLogUpdateTimeInput: IWorkLogUpdateTimeInput;
  WorkLogsRecordWithMonthInput: IWorkLogsRecordWithMonthInput;
  WorkLogsWithPagination: ResolverTypeWrapper<IWorkLogsWithPagination>;
  WorkLogsWithPaginationInput: IWorkLogsWithPaginationInput;
  Workspace: ResolverTypeWrapper<IWorkspace>;
  WorkspaceAllows: ResolverTypeWrapper<IWorkspaceAllows>;
  WorkspaceCreateInput: IWorkspaceCreateInput;
  WorkspaceOrderCancelInput: IWorkspaceOrderCancelInput;
  WorkspaceOrderCreateInput: IWorkspaceOrderCreateInput;
  WorkspaceSearchInput: IWorkspaceSearchInput;
  WorkspaceUpdateInput: IWorkspaceUpdateInput;
  WorkspaceUpdateQuotationInput: IWorkspaceUpdateQuotationInput;
  WorkspacesOrderPlanConfig: ResolverTypeWrapper<IWorkspacesOrderPlanConfig>;
  WorkspacesOrderPlanConfigFeature: ResolverTypeWrapper<IWorkspacesOrderPlanConfigFeature>;
  WorkspacesOrderPlanConfigLimit: ResolverTypeWrapper<IWorkspacesOrderPlanConfigLimit>;
  WorkspacesOrderPlanConfigPrice: ResolverTypeWrapper<IWorkspacesOrderPlanConfigPrice>;
  WorkspacesOrderPlanPrice: ResolverTypeWrapper<IWorkspacesOrderPlanPrice>;
  WorkspacesWithPagination: ResolverTypeWrapper<IWorkspacesWithPagination>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  AuthDirectGoogleVerify: IAuthDirectGoogleVerify;
  AuthLogin: IAuthLogin;
  AuthLoginByGoogleInput: IAuthLoginByGoogleInput;
  AuthLoginInput: IAuthLoginInput;
  AuthLoginWithGoogle: IAuthLoginWithGoogle;
  AuthRefreshToken: IAuthRefreshToken;
  AuthRefreshTokenInput: IAuthRefreshTokenInput;
  AuthResetPasswordInput: IAuthResetPasswordInput;
  AuthSendVerifyCode: IAuthSendVerifyCode;
  AuthSendVerifyCodeInput: IAuthSendVerifyCodeInput;
  AuthSignUp: IAuthSignUp;
  AuthSignUpInput: IAuthSignUpInput;
  Avatar: IAvatar;
  Bookmark: IBookmark;
  BookmarkCreateInput: IBookmarkCreateInput;
  BookmarkUpdateInput: IBookmarkUpdateInput;
  BookmarksWithPagination: IBookmarksWithPagination;
  BookmarksWithPaginationSearchInput: IBookmarksWithPaginationSearchInput;
  Boolean: Scalars['Boolean'];
  CategoryGroupCount: ICategoryGroupCount;
  Comment: IComment;
  Customer: ICustomer;
  CustomerCreateInput: ICustomerCreateInput;
  CustomerUpdateInput: ICustomerUpdateInput;
  CustomersWithPagination: ICustomersWithPagination;
  CustomersWithPaginationSearchInput: ICustomersWithPaginationSearchInput;
  DashboardCategoryGroup: IDashboardCategoryGroup;
  DashboardCount: IDashboardCount;
  DashboardGraph: IDashboardGraph;
  DashboardOSInfo: IDashboardOsInfo;
  DataLevelProject: Scalars['DataLevelProject'];
  DataLevelTask: Scalars['DataLevelTask'];
  DataLevelTeam: Scalars['DataLevelTeam'];
  DateRange: IDateRange;
  Evaluate: IEvaluate;
  EvaluateComment: IEvaluateComment;
  EvaluateCommentCreate: IEvaluateCommentCreate;
  EvaluateCommentUpdateInput: IEvaluateCommentUpdateInput;
  EvaluateCreateInput: IEvaluateCreateInput;
  EvaluateFile: IEvaluateFile;
  EvaluateFileUpload: IEvaluateFileUpload;
  EvaluateLink: IEvaluateLink;
  EvaluateSearchInput: IEvaluateSearchInput;
  EvaluateUpdateAssignerInput: IEvaluateUpdateAssignerInput;
  EvaluateUpdateEstimatesDate: IEvaluateUpdateEstimatesDate;
  EvaluateUpdateFieldInput: IEvaluateUpdateFieldInput;
  EvaluateUpdateMultiStatusInput: IEvaluateUpdateMultiStatusInput;
  EvaluateUpdateSequenceToInput: IEvaluateUpdateSequenceToInput;
  EvaluateUpdateSequenceWhereInput: IEvaluateUpdateSequenceWhereInput;
  EvaluateWithPagination: IEvaluateWithPagination;
  Float: Scalars['Float'];
  Graph: IGraph;
  ICreateRangeDate: IICreateRangeDate;
  ID: Scalars['ID'];
  IProjectStatusGroup: IIProjectStatusGroup;
  ITaskStatusGroup: IITaskStatusGroup;
  IconSvg: IIconSvg;
  IconSvgDownloadInput: IIconSvgDownloadInput;
  IconSvgUpdateInput: IIconSvgUpdateInput;
  IconSvgUpload: IIconSvgUpload;
  IconSvgUploadSymbols: IIconSvgUploadSymbols;
  IconSvgWithPaginationSearchInput: IIconSvgWithPaginationSearchInput;
  IconSymbols: IIconSymbols;
  IconSymbolsCreateInput: IIconSymbolsCreateInput;
  IconSymbolsUpdateInput: IIconSymbolsUpdateInput;
  IconSymbolsWithPagination: IIconSymbolsWithPagination;
  IconSymbolsWithPaginationInput: IIconSymbolsWithPaginationInput;
  ImageFile: IImageFile;
  Info: IInfo;
  Int: Scalars['Int'];
  Member: IMember;
  MemberBilling: IMemberBilling;
  MemberBillingHistory: IMemberBillingHistory;
  MemberBillingHistorySearchInput: IMemberBillingHistorySearchInput;
  MemberBillingHistoryWithPagination: IMemberBillingHistoryWithPagination;
  MemberBillingSearchInput: IMemberBillingSearchInput;
  MemberBillingWithPagination: IMemberBillingWithPagination;
  MemberLoginHistory: IMemberLoginHistory;
  MemberProfileUpdateInput: IMemberProfileUpdateInput;
  MemberProfileUpdatePasswordInput: IMemberProfileUpdatePasswordInput;
  Meta: IMeta;
  Mutation: {};
  Order: IOrder;
  OrderInput: IOrderInput;
  PaginateInput: IPaginateInput;
  Project: IProject;
  ProjectCreateInput: IProjectCreateInput;
  ProjectMilestone: IProjectMilestone;
  ProjectMilestoneCreateInput: IProjectMilestoneCreateInput;
  ProjectMilestoneUpdateInput: IProjectMilestoneUpdateInput;
  ProjectMilestonesWithPagination: IProjectMilestonesWithPagination;
  ProjectMilestonesWithPaginationSearchInput: IProjectMilestonesWithPaginationSearchInput;
  ProjectNote: IProjectNote;
  ProjectNoteCreateInput: IProjectNoteCreateInput;
  ProjectNoteUpdateInput: IProjectNoteUpdateInput;
  ProjectQuotationUpdateInput: IProjectQuotationUpdateInput;
  ProjectUpdateInput: IProjectUpdateInput;
  ProjectUpdateSequenceToInput: IProjectUpdateSequenceToInput;
  ProjectUpdateSequenceWhereInput: IProjectUpdateSequenceWhereInput;
  ProjectWithStatusGroup: IProjectWithStatusGroup;
  ProjectsPaymentCycles: IProjectsPaymentCycles;
  ProjectsPaymentCyclesInput: IProjectsPaymentCyclesInput;
  ProjectsSearchInput: IProjectsSearchInput;
  ProjectsWithGantt: IProjectsWithGantt;
  ProjectsWithGanttProject: IProjectsWithGanttProject;
  ProjectsWithGanttTask: IProjectsWithGanttTask;
  ProjectsWithGanttTeam: IProjectsWithGanttTeam;
  ProjectsWithGanttTeamTask: IProjectsWithGanttTeamTask;
  ProjectsWithPagination: IProjectsWithPagination;
  Query: {};
  Quotation: IQuotation;
  QuotationCustomerInfo: IQuotationCustomerInfo;
  QuotationDetail: IQuotationDetail;
  QuotationUpdateInput: IQuotationUpdateInput;
  QuotationsWithPagination: IQuotationsWithPagination;
  QuotationsWithPaginationSearchInput: IQuotationsWithPaginationSearchInput;
  Repo: IRepo;
  RepoCreateInput: IRepoCreateInput;
  RepoUpdateInput: IRepoUpdateInput;
  RepoWebhookEnableUpdateInput: IRepoWebhookEnableUpdateInput;
  ReposWebhookUrl: IReposWebhookUrl;
  ReposWithPagination: IReposWithPagination;
  ReposWithPaginationInput: IReposWithPaginationInput;
  ResultCreateData: IResultCreateData;
  ResultCreateData2: IResultCreateData2;
  ResultDeleteData: IResultDeleteData;
  ResultDownloadData: IResultDownloadData;
  ResultEvaluateMoveTeamData: IResultEvaluateMoveTeamData;
  ResultMessage: IResultMessage;
  ResultTaskCreateData: IResultTaskCreateData;
  ResultTaskJoinProjectData: IResultTaskJoinProjectData;
  ResultTaskMoveRepoData: IResultTaskMoveRepoData;
  ResultTaskUpdateThumbData: IResultTaskUpdateThumbData;
  ResultUpdateData: IResultUpdateData;
  ShortMember: IShortMember;
  String: Scalars['String'];
  Subscription: {};
  Task: ITask;
  TaskChangeData: ITaskChangeData;
  TaskChangeFieldAddFile: ITaskChangeFieldAddFile;
  TaskChangeFieldArchive: ITaskChangeFieldArchive;
  TaskChangeFieldCategory: ITaskChangeFieldCategory;
  TaskChangeFieldCommentMessage: ITaskChangeFieldCommentMessage;
  TaskChangeFieldCreateComment: ITaskChangeFieldCreateComment;
  TaskChangeFieldDeleteComment: ITaskChangeFieldDeleteComment;
  TaskChangeFieldDeveloper: ITaskChangeFieldDeveloper;
  TaskChangeFieldDownWorkTime: ITaskChangeFieldDownWorkTime;
  TaskChangeFieldEstimateDate: ITaskChangeFieldEstimateDate;
  TaskChangeFieldEstimateWorkTime: ITaskChangeFieldEstimateWorkTime;
  TaskChangeFieldFileDelete: ITaskChangeFieldFileDelete;
  TaskChangeFieldFileName: ITaskChangeFieldFileName;
  TaskChangeFieldMerger: ITaskChangeFieldMerger;
  TaskChangeFieldMomentous: ITaskChangeFieldMomentous;
  TaskChangeFieldPriority: ITaskChangeFieldPriority;
  TaskChangeFieldProgressRate: ITaskChangeFieldProgressRate;
  TaskChangeFieldProject: ITaskChangeFieldProject;
  TaskChangeFieldRepo: ITaskChangeFieldRepo;
  TaskChangeFieldSkillPoint: ITaskChangeFieldSkillPoint;
  TaskChangeFieldStatus: ITaskChangeFieldStatus;
  TaskChangeFieldTester: ITaskChangeFieldTester;
  TaskChangeFieldTitle: ITaskChangeFieldTitle;
  TaskChangeSubscriptData: ITaskChangeSubscriptData;
  TaskCloneInput: ITaskCloneInput;
  TaskComment: ITaskComment;
  TaskCommentCreateData: ITaskCommentCreateData;
  TaskCommentLogsWithPagination: ITaskCommentLogsWithPagination;
  TaskCommentLogsWithPaginationInput: ITaskCommentLogsWithPaginationInput;
  TaskCommentUpdateInput: ITaskCommentUpdateInput;
  TaskCreateData: ITaskCreateData;
  TaskCreateInput: ITaskCreateInput;
  TaskCreateSubscriptData: ITaskCreateSubscriptData;
  TaskFile: ITaskFile;
  TaskFileUpload: ITaskFileUpload;
  TaskLink: ITaskLink;
  TaskMemberWithGantt: ITaskMemberWithGantt;
  TaskMemberWithGanttTask: ITaskMemberWithGanttTask;
  TaskSearchInput: ITaskSearchInput;
  TaskStatus: ITaskStatus;
  TaskStatusCreateInput: ITaskStatusCreateInput;
  TaskStatusKind: ITaskStatusKind;
  TaskStatusKindCreateInput: ITaskStatusKindCreateInput;
  TaskStatusKindUpdateInput: ITaskStatusKindUpdateInput;
  TaskStatusUpdateInput: ITaskStatusUpdateInput;
  TaskUpdateAssignerInput: ITaskUpdateAssignerInput;
  TaskUpdateEstimatesDate: ITaskUpdateEstimatesDate;
  TaskUpdateFieldInput: ITaskUpdateFieldInput;
  TaskUpdateMomentousInput: ITaskUpdateMomentousInput;
  TaskUpdateMultiStatusInput: ITaskUpdateMultiStatusInput;
  TaskUpdateSequenceScheduleToInput: ITaskUpdateSequenceScheduleToInput;
  TaskUpdateSequenceScheduleWhereInput: ITaskUpdateSequenceScheduleWhereInput;
  TaskUpdateSequenceStatusToInput: ITaskUpdateSequenceStatusToInput;
  TaskUpdateSequenceStatusWhereInput: ITaskUpdateSequenceStatusWhereInput;
  TaskWithStatusGroup: ITaskWithStatusGroup;
  TasksWithPagination: ITasksWithPagination;
  Team: ITeam;
  TeamCreateInput: ITeamCreateInput;
  TeamInviteCheckData: ITeamInviteCheckData;
  TeamMember: ITeamMember;
  TeamMemberInviteJoinInput: ITeamMemberInviteJoinInput;
  TeamMemberSearchInput: ITeamMemberSearchInput;
  TeamMemberUpdateInput: ITeamMemberUpdateInput;
  TeamMembersWithPagination: ITeamMembersWithPagination;
  TeamUpdateInput: ITeamUpdateInput;
  TeamsInput: ITeamsInput;
  TeamsWithPagination: ITeamsWithPagination;
  Theme: ITheme;
  TokenInfo: ITokenInfo;
  Upload: Scalars['Upload'];
  WorkLog: IWorkLog;
  WorkLogCreate: IWorkLogCreate;
  WorkLogCreateInput: IWorkLogCreateInput;
  WorkLogStop: IWorkLogStop;
  WorkLogUpdateTime: IWorkLogUpdateTime;
  WorkLogUpdateTimeInput: IWorkLogUpdateTimeInput;
  WorkLogsRecordWithMonthInput: IWorkLogsRecordWithMonthInput;
  WorkLogsWithPagination: IWorkLogsWithPagination;
  WorkLogsWithPaginationInput: IWorkLogsWithPaginationInput;
  Workspace: IWorkspace;
  WorkspaceAllows: IWorkspaceAllows;
  WorkspaceCreateInput: IWorkspaceCreateInput;
  WorkspaceOrderCancelInput: IWorkspaceOrderCancelInput;
  WorkspaceOrderCreateInput: IWorkspaceOrderCreateInput;
  WorkspaceSearchInput: IWorkspaceSearchInput;
  WorkspaceUpdateInput: IWorkspaceUpdateInput;
  WorkspaceUpdateQuotationInput: IWorkspaceUpdateQuotationInput;
  WorkspacesOrderPlanConfig: IWorkspacesOrderPlanConfig;
  WorkspacesOrderPlanConfigFeature: IWorkspacesOrderPlanConfigFeature;
  WorkspacesOrderPlanConfigLimit: IWorkspacesOrderPlanConfigLimit;
  WorkspacesOrderPlanConfigPrice: IWorkspacesOrderPlanConfigPrice;
  WorkspacesOrderPlanPrice: IWorkspacesOrderPlanPrice;
  WorkspacesWithPagination: IWorkspacesWithPagination;
};

export type IAuthDirectGoogleVerifyResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthDirectGoogleVerify'] = IResolversParentTypes['AuthDirectGoogleVerify']> = {
  url?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAuthLoginResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthLogin'] = IResolversParentTypes['AuthLogin']> = {
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  tokenInfo?: Resolver<IResolversTypes['TokenInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAuthLoginWithGoogleResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthLoginWithGoogle'] = IResolversParentTypes['AuthLoginWithGoogle']> = {
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  tokenInfo?: Resolver<IResolversTypes['TokenInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAuthRefreshTokenResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthRefreshToken'] = IResolversParentTypes['AuthRefreshToken']> = {
  tokenInfo?: Resolver<IResolversTypes['TokenInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAuthSendVerifyCodeResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthSendVerifyCode'] = IResolversParentTypes['AuthSendVerifyCode']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  verifyCodeId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAuthSignUpResolvers<ContextType = any, ParentType extends IResolversParentTypes['AuthSignUp'] = IResolversParentTypes['AuthSignUp']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  tokenInfo?: Resolver<IResolversTypes['TokenInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAvatarResolvers<ContextType = any, ParentType extends IResolversParentTypes['Avatar'] = IResolversParentTypes['Avatar']> = {
  path?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IBookmarkResolvers<ContextType = any, ParentType extends IResolversParentTypes['Bookmark'] = IResolversParentTypes['Bookmark']> = {
  country?: Resolver<Maybe<IResolversTypes['ECountry']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  devUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  evaluateUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  faviconUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  remark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IBookmarksWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['BookmarksWithPagination'] = IResolversParentTypes['BookmarksWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Bookmark']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICategoryGroupCountResolvers<ContextType = any, ParentType extends IResolversParentTypes['CategoryGroupCount'] = IResolversParentTypes['CategoryGroupCount']> = {
  feat?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  fix?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  refactor?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICommentResolvers<ContextType = any, ParentType extends IResolversParentTypes['Comment'] = IResolversParentTypes['Comment']> = {
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICustomerResolvers<ContextType = any, ParentType extends IResolversParentTypes['Customer'] = IResolversParentTypes['Customer']> = {
  address?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  defaultTransactionCurrency?: Resolver<IResolversTypes['ETransactionCurrency'], ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<IResolversTypes['Project']>>, ParentType, ContextType>;
  remark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  zipCode?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICustomersWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['CustomersWithPagination'] = IResolversParentTypes['CustomersWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Customer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDashboardCategoryGroupResolvers<ContextType = any, ParentType extends IResolversParentTypes['DashboardCategoryGroup'] = IResolversParentTypes['DashboardCategoryGroup']> = {
  categoryGroupCount?: Resolver<IResolversTypes['CategoryGroupCount'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDashboardCountResolvers<ContextType = any, ParentType extends IResolversParentTypes['DashboardCount'] = IResolversParentTypes['DashboardCount']> = {
  categoryGroupCount?: Resolver<IResolversTypes['CategoryGroupCount'], ParentType, ContextType>;
  graphList?: Resolver<Array<IResolversTypes['Graph']>, ParentType, ContextType>;
  thisMonthDoneTask?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  thisMonthWaitProcessedTask?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  thisMonthWorkHour?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  thisWeekDoneTask?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  thisWeekWaitProcessedTask?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  thisWeekWorkHour?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  todayScheduleTask?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDashboardGraphResolvers<ContextType = any, ParentType extends IResolversParentTypes['DashboardGraph'] = IResolversParentTypes['DashboardGraph']> = {
  graphList?: Resolver<Array<IResolversTypes['Graph']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IDashboardOsInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['DashboardOSInfo'] = IResolversParentTypes['DashboardOSInfo']> = {
  cpuCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  gcHeapStats?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  memoryTotal?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IDataLevelProjectScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DataLevelProject'], any> {
  name: 'DataLevelProject';
}

export interface IDataLevelTaskScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DataLevelTask'], any> {
  name: 'DataLevelTask';
}

export interface IDataLevelTeamScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['DataLevelTeam'], any> {
  name: 'DataLevelTeam';
}

export type IEvaluateResolvers<ContextType = any, ParentType extends IResolversParentTypes['Evaluate'] = IResolversParentTypes['Evaluate']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  cancelAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  commentCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  commentTodayCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<IResolversTypes['EvaluateComment']>>, ParentType, ContextType>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  developer?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  developerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  doneAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  files?: Resolver<Maybe<Array<IResolversTypes['EvaluateFile']>>, ParentType, ContextType>;
  fromEvaluates?: Resolver<Maybe<Array<IResolversTypes['EvaluateLink']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isCustomAmount?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  progressRate?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  skillPoint?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<IResolversTypes['EEvaluateStatus'], ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  team?: Resolver<Maybe<IResolversTypes['Team']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  toEvaluates?: Resolver<Maybe<Array<IResolversTypes['EvaluateLink']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateCommentResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateComment'] = IResolversParentTypes['EvaluateComment']> = {
  category?: Resolver<IResolversTypes['EEvaluateCommentCategory'], ParentType, ContextType>;
  cloneSerialNumber?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  content?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  evaluate?: Resolver<IResolversTypes['Evaluate'], ParentType, ContextType>;
  evaluateId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updateAssign?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  updateAssignId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  updateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updateField?: Resolver<Maybe<IResolversTypes['EEvaluateCommentUpdateField']>, ParentType, ContextType>;
  updateSkillPoint?: Resolver<Maybe<IResolversTypes['Float']>, ParentType, ContextType>;
  updateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updateStatus?: Resolver<Maybe<IResolversTypes['EEvaluateStatus']>, ParentType, ContextType>;
  updateWorkTime?: Resolver<Maybe<IResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateCommentCreateResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateCommentCreate'] = IResolversParentTypes['EvaluateCommentCreate']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['EvaluateComment'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateFileResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateFile'] = IResolversParentTypes['EvaluateFile']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  evaluate?: Resolver<IResolversTypes['Evaluate'], ParentType, ContextType>;
  evaluateId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  file?: Resolver<Maybe<IResolversTypes['ImageFile']>, ParentType, ContextType>;
  fileUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  thumbUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateFileUploadResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateFileUpload'] = IResolversParentTypes['EvaluateFileUpload']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['EvaluateFile'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateLinkResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateLink'] = IResolversParentTypes['EvaluateLink']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<IResolversTypes['Evaluate'], ParentType, ContextType>;
  fromId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  to?: Resolver<IResolversTypes['Evaluate'], ParentType, ContextType>;
  toId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IEvaluateWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['EvaluateWithPagination'] = IResolversParentTypes['EvaluateWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Evaluate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphResolvers<ContextType = any, ParentType extends IResolversParentTypes['Graph'] = IResolversParentTypes['Graph']> = {
  day?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIProjectStatusGroupResolvers<ContextType = any, ParentType extends IResolversParentTypes['IProjectStatusGroup'] = IResolversParentTypes['IProjectStatusGroup']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  projectsIds?: Resolver<Maybe<Array<IResolversTypes['ID']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IITaskStatusGroupResolvers<ContextType = any, ParentType extends IResolversParentTypes['ITaskStatusGroup'] = IResolversParentTypes['ITaskStatusGroup']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  taskIds?: Resolver<Array<IResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIconSvgResolvers<ContextType = any, ParentType extends IResolversParentTypes['IconSvg'] = IResolversParentTypes['IconSvg']> = {
  code?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  defs?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  iconSymbols?: Resolver<IResolversTypes['IconSymbols'], ParentType, ContextType>;
  iconSymbolsId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  viewBox?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIconSvgUploadResolvers<ContextType = any, ParentType extends IResolversParentTypes['IconSvgUpload'] = IResolversParentTypes['IconSvgUpload']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['IconSvg'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIconSvgUploadSymbolsResolvers<ContextType = any, ParentType extends IResolversParentTypes['IconSvgUploadSymbols'] = IResolversParentTypes['IconSvgUploadSymbols']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIconSymbolsResolvers<ContextType = any, ParentType extends IResolversParentTypes['IconSymbols'] = IResolversParentTypes['IconSymbols']> = {
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  pullToken?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  svgs?: Resolver<Maybe<Array<IResolversTypes['IconSvg']>>, ParentType, ContextType>;
  symbolCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IIconSymbolsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['IconSymbolsWithPagination'] = IResolversParentTypes['IconSymbolsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['IconSymbols']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IImageFileResolvers<ContextType = any, ParentType extends IResolversParentTypes['ImageFile'] = IResolversParentTypes['ImageFile']> = {
  mimeType?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['Info'] = IResolversParentTypes['Info']> = {
  totalItems?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberResolvers<ContextType = any, ParentType extends IResolversParentTypes['Member'] = IResolversParentTypes['Member']> = {
  account?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  bookmark?: Resolver<Maybe<Array<IResolversTypes['Bookmark']>>, ParentType, ContextType>;
  createIconSvg?: Resolver<Maybe<Array<IResolversTypes['IconSvg']>>, ParentType, ContextType>;
  createIconSymbols?: Resolver<Maybe<Array<IResolversTypes['IconSymbols']>>, ParentType, ContextType>;
  createProjectMilestones?: Resolver<Maybe<Array<IResolversTypes['ProjectMilestone']>>, ParentType, ContextType>;
  createProjectNote?: Resolver<Maybe<Array<IResolversTypes['ProjectNote']>>, ParentType, ContextType>;
  createProjects?: Resolver<Maybe<Array<IResolversTypes['Project']>>, ParentType, ContextType>;
  createRepo?: Resolver<Maybe<Array<IResolversTypes['Repo']>>, ParentType, ContextType>;
  createTeams?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creatorEvaluates?: Resolver<Maybe<Array<IResolversTypes['Evaluate']>>, ParentType, ContextType>;
  creatorTasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  customer?: Resolver<Maybe<Array<IResolversTypes['Customer']>>, ParentType, ContextType>;
  devEvaluates?: Resolver<Maybe<Array<IResolversTypes['Evaluate']>>, ParentType, ContextType>;
  devTasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  evaluateCommentAssigns?: Resolver<Maybe<Array<IResolversTypes['EvaluateComment']>>, ParentType, ContextType>;
  evaluateComments?: Resolver<Maybe<Array<IResolversTypes['EvaluateComment']>>, ParentType, ContextType>;
  evaluateFiles?: Resolver<Maybe<Array<IResolversTypes['EvaluateFile']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isEmailVerify?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isEnableWebPush?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isHasPassword?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  loginHistories?: Resolver<Maybe<Array<IResolversTypes['MemberLoginHistory']>>, ParentType, ContextType>;
  memberBillings?: Resolver<Maybe<Array<IResolversTypes['MemberBilling']>>, ParentType, ContextType>;
  mergeTasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  ownerTeams?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType>;
  personalWorkspace?: Resolver<Maybe<IResolversTypes['Workspace']>, ParentType, ContextType>;
  personalWorkspaceId?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  signUpMethod?: Resolver<IResolversTypes['ESignUpMethod'], ParentType, ContextType>;
  taskCommentAssigns?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType>;
  taskComments?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType>;
  taskFiles?: Resolver<Maybe<Array<IResolversTypes['TaskFile']>>, ParentType, ContextType>;
  teamMembers?: Resolver<Maybe<Array<IResolversTypes['TeamMember']>>, ParentType, ContextType>;
  testTasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workLog?: Resolver<Maybe<Array<IResolversTypes['WorkLog']>>, ParentType, ContextType>;
  workspace?: Resolver<Maybe<Array<IResolversTypes['Workspace']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberBillingResolvers<ContextType = any, ParentType extends IResolversParentTypes['MemberBilling'] = IResolversParentTypes['MemberBilling']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  billingInfo?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  cancelAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  cancelReason?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  histories?: Resolver<Maybe<Array<IResolversTypes['MemberBillingHistory']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isPaymentCycleYear?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  nextBillingTime?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  ownerId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  paymentType?: Resolver<IResolversTypes['EPaymentType'], ParentType, ContextType>;
  paypalPlanId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  periodsCompleted?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  planCode?: Resolver<IResolversTypes['EWorkspacePlan'], ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  subscriptionId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberBillingHistoryResolvers<ContextType = any, ParentType extends IResolversParentTypes['MemberBillingHistory'] = IResolversParentTypes['MemberBillingHistory']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  billingInfo?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  eventTime?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  eventType?: Resolver<IResolversTypes['EPaymentEventType'], ParentType, ContextType>;
  head?: Resolver<IResolversTypes['MemberBilling'], ParentType, ContextType>;
  headId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isVerified?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  webhookEventId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberBillingHistoryWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['MemberBillingHistoryWithPagination'] = IResolversParentTypes['MemberBillingHistoryWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['MemberBillingHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberBillingWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['MemberBillingWithPagination'] = IResolversParentTypes['MemberBillingWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['MemberBilling']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMemberLoginHistoryResolvers<ContextType = any, ParentType extends IResolversParentTypes['MemberLoginHistory'] = IResolversParentTypes['MemberLoginHistory']> = {
  client?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  clientVersion?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  device?: Resolver<IResolversTypes['ELoginDeviceCode'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  ip?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  location?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  os?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  osVersion?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  ownerId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMetaResolvers<ContextType = any, ParentType extends IResolversParentTypes['Meta'] = IResolversParentTypes['Meta']> = {
  currentPage?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  order?: Resolver<Maybe<IResolversTypes['Order']>, ParentType, ContextType>;
  pageLimit?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  addComment?: Resolver<IResolversTypes['Comment'], ParentType, ContextType>;
  authDirectGoogleVerify?: Resolver<IResolversTypes['AuthDirectGoogleVerify'], ParentType, ContextType>;
  authLogin?: Resolver<IResolversTypes['AuthLogin'], ParentType, ContextType, RequireFields<IMutationAuthLoginArgs, 'input'>>;
  authLoginWithGoogle?: Resolver<IResolversTypes['AuthLoginWithGoogle'], ParentType, ContextType, RequireFields<IMutationAuthLoginWithGoogleArgs, 'input'>>;
  authLogout?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType>;
  authRefreshToken?: Resolver<IResolversTypes['AuthRefreshToken'], ParentType, ContextType, RequireFields<IMutationAuthRefreshTokenArgs, 'input'>>;
  authResetPassword?: Resolver<IResolversTypes['ResultMessage'], ParentType, ContextType, RequireFields<IMutationAuthResetPasswordArgs, 'input'>>;
  authSendVerifyCode?: Resolver<IResolversTypes['AuthSendVerifyCode'], ParentType, ContextType, RequireFields<IMutationAuthSendVerifyCodeArgs, 'input'>>;
  authSignUp?: Resolver<IResolversTypes['AuthSignUp'], ParentType, ContextType, RequireFields<IMutationAuthSignUpArgs, 'input'>>;
  bookmarkCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationBookmarkCreateArgs, 'input' | 'workspaceId'>>;
  bookmarkDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationBookmarkDeleteArgs, 'bookmarkId'>>;
  bookmarkDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationBookmarkDeleteAvatarArgs, 'bookmarkId'>>;
  bookmarkUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationBookmarkUpdateArgs, 'bookmarkId' | 'input'>>;
  customerCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationCustomerCreateArgs, 'input' | 'workspaceId'>>;
  customerDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationCustomerDeleteArgs, 'customerId'>>;
  customerDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationCustomerDeleteAvatarArgs, 'customerId'>>;
  customerUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationCustomerUpdateArgs, 'customerId' | 'input'>>;
  evaluateClone?: Resolver<IResolversTypes['ResultCreateData2'], ParentType, ContextType, RequireFields<IMutationEvaluateCloneArgs, 'evaluateId'>>;
  evaluateCommentCreate?: Resolver<IResolversTypes['EvaluateCommentCreate'], ParentType, ContextType, RequireFields<IMutationEvaluateCommentCreateArgs, 'evaluateId' | 'input'>>;
  evaluateCommentDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationEvaluateCommentDeleteArgs, 'evaluateCommentId'>>;
  evaluateCommentUpdateComment?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateCommentUpdateCommentArgs, 'evaluateCommentId' | 'input'>>;
  evaluateCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationEvaluateCreateArgs, 'input'>>;
  evaluateCreateByImage?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationEvaluateCreateByImageArgs, 'input'>>;
  evaluateDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationEvaluateDeleteArgs, 'evaluateId'>>;
  evaluateFileDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationEvaluateFileDeleteArgs, 'evaluateFileId'>>;
  evaluateFileUpdateName?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateFileUpdateNameArgs, 'evaluateFileId' | 'name'>>;
  evaluateFileUpload?: Resolver<IResolversTypes['EvaluateFileUpload'], ParentType, ContextType, RequireFields<IMutationEvaluateFileUploadArgs, 'evaluateId'>>;
  evaluateInsert?: Resolver<IResolversTypes['ResultCreateData2'], ParentType, ContextType, RequireFields<IMutationEvaluateInsertArgs, 'evaluateId'>>;
  evaluateLinkAdd?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationEvaluateLinkAddArgs, 'evaluateId' | 'toId'>>;
  evaluateLinkDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationEvaluateLinkDeleteArgs, 'evaluateId' | 'mode'>>;
  evaluateMoveNewTeam?: Resolver<IResolversTypes['ResultEvaluateMoveTeamData'], ParentType, ContextType, RequireFields<IMutationEvaluateMoveNewTeamArgs, 'evaluateId' | 'newTeamId'>>;
  evaluateUpdateAssigner?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateUpdateAssignerArgs, 'evaluateId' | 'input'>>;
  evaluateUpdateEstimatesDate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateUpdateEstimatesDateArgs, 'dataList'>>;
  evaluateUpdateField?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateUpdateFieldArgs, 'evaluateId' | 'input'>>;
  evaluateUpdateMultiStatus?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateUpdateMultiStatusArgs, 'evaluateIds' | 'input'>>;
  evaluateUpdateSequence?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationEvaluateUpdateSequenceArgs, 'evaluateId' | 'where'>>;
  iconSvgClear?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationIconSvgClearArgs, 'iconSymbolsId'>>;
  iconSvgDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationIconSvgDeleteArgs, 'iconSvgId'>>;
  iconSvgDownload?: Resolver<Maybe<IResolversTypes['ResultDownloadData']>, ParentType, ContextType, RequireFields<IMutationIconSvgDownloadArgs, 'iconSvgId'>>;
  iconSvgUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationIconSvgUpdateArgs, 'iconSvgId' | 'input'>>;
  iconSvgUploadSvg?: Resolver<IResolversTypes['IconSvgUpload'], ParentType, ContextType, RequireFields<IMutationIconSvgUploadSvgArgs, 'iconSymbolsId'>>;
  iconSvgUploadSymbols?: Resolver<IResolversTypes['IconSvgUploadSymbols'], ParentType, ContextType, RequireFields<IMutationIconSvgUploadSymbolsArgs, 'iconSymbolsId'>>;
  iconSymbolsCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationIconSymbolsCreateArgs, 'input' | 'workspaceId'>>;
  iconSymbolsDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationIconSymbolsDeleteArgs, 'iconSymbolsId'>>;
  iconSymbolsDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationIconSymbolsDeleteAvatarArgs, 'iconSymbolsId'>>;
  iconSymbolsDownload?: Resolver<Maybe<IResolversTypes['ResultDownloadData']>, ParentType, ContextType, RequireFields<IMutationIconSymbolsDownloadArgs, 'iconSymbolsId' | 'input'>>;
  iconSymbolsRefreshPullToken?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationIconSymbolsRefreshPullTokenArgs, 'iconSymbolsId'>>;
  iconSymbolsUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationIconSymbolsUpdateArgs, 'iconSymbolsId' | 'input'>>;
  memberBillingCancel?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationMemberBillingCancelArgs, 'input' | 'workspaceId'>>;
  memberBillingCreateWithPaypal?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationMemberBillingCreateWithPaypalArgs, 'input' | 'workspaceId'>>;
  notificationTest?: Resolver<IResolversTypes['ResultMessage'], ParentType, ContextType>;
  notificationUpdateKey?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationNotificationUpdateKeyArgs, 'pushSubscription'>>;
  profileDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType>;
  profileUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProfileUpdateArgs, 'input'>>;
  profileUpdatePassword?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProfileUpdatePasswordArgs, 'input'>>;
  projectCalcToQuoteByEvaluate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationProjectCalcToQuoteByEvaluateArgs, 'projectId' | 'saveName'>>;
  projectCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationProjectCreateArgs, 'input' | 'workspaceId'>>;
  projectDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationProjectDeleteArgs, 'projectId'>>;
  projectDeleteBanner?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationProjectDeleteBannerArgs, 'projectId'>>;
  projectMilestoneCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationProjectMilestoneCreateArgs, 'input'>>;
  projectMilestoneDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationProjectMilestoneDeleteArgs, 'projectMilestoneId'>>;
  projectMilestoneUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProjectMilestoneUpdateArgs, 'input' | 'projectMilestoneId'>>;
  projectNoteCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationProjectNoteCreateArgs, 'input'>>;
  projectNoteDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationProjectNoteDeleteArgs, 'projectNoteId'>>;
  projectNoteUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProjectNoteUpdateArgs, 'input' | 'projectNoteId'>>;
  projectQuotationUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProjectQuotationUpdateArgs, 'input' | 'projectId'>>;
  projectUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProjectUpdateArgs, 'input' | 'projectId'>>;
  projectUpdateSequence?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationProjectUpdateSequenceArgs, 'active' | 'over' | 'workspaceId'>>;
  quotationDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationQuotationDeleteArgs, 'quotationId'>>;
  quotationDownload?: Resolver<IResolversTypes['ResultDownloadData'], ParentType, ContextType, RequireFields<IMutationQuotationDownloadArgs, 'quotationId'>>;
  quotationUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationQuotationUpdateArgs, 'input' | 'quotationId'>>;
  repoCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationRepoCreateArgs, 'input'>>;
  repoDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationRepoDeleteArgs, 'repoId'>>;
  repoDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationRepoDeleteAvatarArgs, 'repoId'>>;
  repoUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationRepoUpdateArgs, 'input' | 'repoId'>>;
  repoWebhookEnableUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationRepoWebhookEnableUpdateArgs, 'input' | 'repoId'>>;
  taskClone?: Resolver<IResolversTypes['ResultCreateData2'], ParentType, ContextType, RequireFields<IMutationTaskCloneArgs, 'taskId' | 'workspaceId'>>;
  taskCommentCreate?: Resolver<IResolversTypes['TaskCommentCreateData'], ParentType, ContextType, RequireFields<IMutationTaskCommentCreateArgs, 'input' | 'taskId'>>;
  taskCommentDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskCommentDeleteArgs, 'taskCommentId'>>;
  taskCommentUpdateComment?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskCommentUpdateCommentArgs, 'input' | 'taskCommentId'>>;
  taskCreate?: Resolver<IResolversTypes['ResultTaskCreateData'], ParentType, ContextType, RequireFields<IMutationTaskCreateArgs, 'input' | 'projectId' | 'workspaceId'>>;
  taskCreateByImage?: Resolver<IResolversTypes['ResultTaskCreateData'], ParentType, ContextType, RequireFields<IMutationTaskCreateByImageArgs, 'input' | 'projectId' | 'workspaceId'>>;
  taskDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskDeleteArgs, 'taskId' | 'workspaceId'>>;
  taskFileDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskFileDeleteArgs, 'taskFileId' | 'taskId' | 'workspaceId'>>;
  taskFileUpdateName?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskFileUpdateNameArgs, 'name' | 'taskFileId' | 'taskId' | 'workspaceId'>>;
  taskFileUpload?: Resolver<IResolversTypes['TaskFileUpload'], ParentType, ContextType, RequireFields<IMutationTaskFileUploadArgs, 'taskId' | 'workspaceId'>>;
  taskInsert?: Resolver<IResolversTypes['ResultTaskCreateData'], ParentType, ContextType, RequireFields<IMutationTaskInsertArgs, 'taskId' | 'workspaceId'>>;
  taskJoinProject?: Resolver<IResolversTypes['ResultTaskJoinProjectData'], ParentType, ContextType, RequireFields<IMutationTaskJoinProjectArgs, 'newProjectId' | 'taskId' | 'workspaceId'>>;
  taskLeaveProject?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskLeaveProjectArgs, 'taskId' | 'workspaceId'>>;
  taskLinkAdd?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationTaskLinkAddArgs, 'taskId' | 'toId' | 'workspaceId'>>;
  taskLinkDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskLinkDeleteArgs, 'mode' | 'taskId' | 'workspaceId'>>;
  taskMoveNewRepo?: Resolver<IResolversTypes['ResultTaskMoveRepoData'], ParentType, ContextType, RequireFields<IMutationTaskMoveNewRepoArgs, 'newRepoId' | 'taskId' | 'workspaceId'>>;
  taskRemoveThumb?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskRemoveThumbArgs, 'taskId' | 'workspaceId'>>;
  taskReportDownload?: Resolver<IResolversTypes['ResultDownloadData'], ParentType, ContextType, RequireFields<IMutationTaskReportDownloadArgs, 'endDate' | 'startDate' | 'teamId'>>;
  taskStatusCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationTaskStatusCreateArgs, 'input' | 'projectId' | 'workspaceId'>>;
  taskStatusDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskStatusDeleteArgs, 'taskStatusId' | 'workspaceId'>>;
  taskStatusKindCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationTaskStatusKindCreateArgs, 'input' | 'workspaceId'>>;
  taskStatusKindDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTaskStatusKindDeleteArgs, 'taskStatusKindId'>>;
  taskStatusKindUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskStatusKindUpdateArgs, 'input' | 'taskStatusKindId'>>;
  taskStatusUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskStatusUpdateArgs, 'input' | 'taskStatusId' | 'workspaceId'>>;
  taskStatusUpdateSequence?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskStatusUpdateSequenceArgs, 'projectId' | 'taskStatusId' | 'toTaskStatusId' | 'workspaceId'>>;
  taskUpdateAssigner?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateAssignerArgs, 'input' | 'taskId' | 'type' | 'workspaceId'>>;
  taskUpdateEstimatesDate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateEstimatesDateArgs, 'dataList' | 'workspaceId'>>;
  taskUpdateField?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateFieldArgs, 'input' | 'taskId' | 'workspaceId'>>;
  taskUpdateMomentous?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateMomentousArgs, 'input' | 'taskId' | 'workspaceId'>>;
  taskUpdateMultiArchive?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateMultiArchiveArgs, 'isArchive' | 'taskIds' | 'workspaceId'>>;
  taskUpdateMultiMarkReleaseVersion?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateMultiMarkReleaseVersionArgs, 'taskIds' | 'workspaceId'>>;
  taskUpdateMultiStatus?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateMultiStatusArgs, 'input' | 'taskIds' | 'workspaceId'>>;
  taskUpdateSequenceSchedule?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateSequenceScheduleArgs, 'taskId' | 'where'>>;
  taskUpdateSequenceStatus?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateSequenceStatusArgs, 'active' | 'over' | 'projectId' | 'workspaceId'>>;
  taskUpdateThumb?: Resolver<IResolversTypes['ResultTaskUpdateThumbData'], ParentType, ContextType, RequireFields<IMutationTaskUpdateThumbArgs, 'taskFileId' | 'taskId' | 'workspaceId'>>;
  teamCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationTeamCreateArgs, 'input' | 'workspaceId'>>;
  teamDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTeamDeleteArgs, 'teamId'>>;
  teamMemberAgreeJoin?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationTeamMemberAgreeJoinArgs, 'teamId'>>;
  teamMemberInviteJoin?: Resolver<IResolversTypes['ResultMessage'], ParentType, ContextType, RequireFields<IMutationTeamMemberInviteJoinArgs, 'input' | 'teamId'>>;
  teamMemberLeave?: Resolver<IResolversTypes['ResultMessage'], ParentType, ContextType, RequireFields<IMutationTeamMemberLeaveArgs, 'teamId'>>;
  teamMemberRemoveMember?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationTeamMemberRemoveMemberArgs, 'teamMemberId'>>;
  teamMemberUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTeamMemberUpdateArgs, 'input' | 'teamMemberId'>>;
  teamUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationTeamUpdateArgs, 'input' | 'teamId'>>;
  workLogCreate?: Resolver<IResolversTypes['WorkLogCreate'], ParentType, ContextType, RequireFields<IMutationWorkLogCreateArgs, 'input' | 'taskId'>>;
  workLogDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationWorkLogDeleteArgs, 'workLogId'>>;
  workLogExportReport?: Resolver<IResolversTypes['ResultDownloadData'], ParentType, ContextType, RequireFields<IMutationWorkLogExportReportArgs, 'teamId'>>;
  workLogStop?: Resolver<IResolversTypes['WorkLogStop'], ParentType, ContextType, RequireFields<IMutationWorkLogStopArgs, 'taskId'>>;
  workLogUpdateTime?: Resolver<IResolversTypes['WorkLogUpdateTime'], ParentType, ContextType, RequireFields<IMutationWorkLogUpdateTimeArgs, 'input' | 'workLogId'>>;
  workLogUpdateTitle?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationWorkLogUpdateTitleArgs, 'title' | 'workLogId'>>;
  workspaceCreate?: Resolver<IResolversTypes['ResultCreateData'], ParentType, ContextType, RequireFields<IMutationWorkspaceCreateArgs, 'input'>>;
  workspaceDelete?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationWorkspaceDeleteArgs, 'workspaceId'>>;
  workspaceDeleteAvatar?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationWorkspaceDeleteAvatarArgs, 'workspaceId'>>;
  workspaceDeleteBanner?: Resolver<IResolversTypes['ResultDeleteData'], ParentType, ContextType, RequireFields<IMutationWorkspaceDeleteBannerArgs, 'workspaceId'>>;
  workspaceStartTrial?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationWorkspaceStartTrialArgs, 'workspaceId'>>;
  workspaceUpdate?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationWorkspaceUpdateArgs, 'input' | 'workspaceId'>>;
  workspaceUpdateQuotation?: Resolver<IResolversTypes['ResultUpdateData'], ParentType, ContextType, RequireFields<IMutationWorkspaceUpdateQuotationArgs, 'input' | 'workspaceId'>>;
};

export type IOrderResolvers<ContextType = any, ParentType extends IResolversParentTypes['Order'] = IResolversParentTypes['Order']> = {
  orderBy?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  orderField?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectResolvers<ContextType = any, ParentType extends IResolversParentTypes['Project'] = IResolversParentTypes['Project']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  archiveAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  bannerUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  cancelAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<IResolversTypes['Customer']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  doneAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  evaluateMember?: Resolver<Maybe<Array<IResolversTypes['Member']>>, ParentType, ContextType>;
  evaluateTotal?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  evaluates?: Resolver<Maybe<Array<IResolversTypes['Evaluate']>>, ParentType, ContextType>;
  exchangeRate?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isArchive?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isDelete?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isEvaluateEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isPublic?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isQuotationEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isTaskEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isVirtual?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  milestones?: Resolver<Maybe<Array<IResolversTypes['ProjectMilestone']>>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<Array<IResolversTypes['ProjectNote']>>, ParentType, ContextType>;
  paymentCycles?: Resolver<Maybe<Array<IResolversTypes['ProjectsPaymentCycles']>>, ParentType, ContextType>;
  profit?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  quotations?: Resolver<Maybe<Array<IResolversTypes['Quotation']>>, ParentType, ContextType>;
  quoteDoneTotal?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  quoteTotal?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  remark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  riskEstimation?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sequence?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<IResolversTypes['EProjectStatus'], ParentType, ContextType>;
  statusUpdatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  taskDoneTotal?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  taskMember?: Resolver<Maybe<Array<IResolversTypes['Member']>>, ParentType, ContextType>;
  taskTotal?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  terms?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  transactionCurrency?: Resolver<IResolversTypes['ETransactionCurrency'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  virtual?: Resolver<IResolversTypes['EProjectTarget'], ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectMilestoneResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectMilestone'] = IResolversParentTypes['ProjectMilestone']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  date?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  remark?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectMilestonesWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectMilestonesWithPagination'] = IResolversParentTypes['ProjectMilestonesWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['ProjectMilestone']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectNoteResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectNote'] = IResolversParentTypes['ProjectNote']> = {
  category?: Resolver<IResolversTypes['EProjectNoteCategory'], ParentType, ContextType>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectWithStatusGroupResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectWithStatusGroup'] = IResolversParentTypes['ProjectWithStatusGroup']> = {
  groups?: Resolver<Array<IResolversTypes['IProjectStatusGroup']>, ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<IResolversTypes['Project']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsPaymentCyclesResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsPaymentCycles'] = IResolversParentTypes['ProjectsPaymentCycles']> = {
  cycle?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  desc?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithGanttResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithGantt'] = IResolversParentTypes['ProjectsWithGantt']> = {
  projectMap?: Resolver<Array<IResolversTypes['ProjectsWithGanttProject']>, ParentType, ContextType>;
  tasks?: Resolver<Array<IResolversTypes['ProjectsWithGanttTask']>, ParentType, ContextType>;
  teamTasks?: Resolver<Array<IResolversTypes['ProjectsWithGanttTeamTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithGanttProjectResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithGanttProject'] = IResolversParentTypes['ProjectsWithGanttProject']> = {
  children?: Resolver<Array<IResolversTypes['ProjectsWithGanttTeam']>, ParentType, ContextType>;
  dataLevel?: Resolver<IResolversTypes['DataLevelProject'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  milestones?: Resolver<Maybe<Array<IResolversTypes['ProjectMilestone']>>, ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithGanttTaskResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithGanttTask'] = IResolversParentTypes['ProjectsWithGanttTask']> = {
  assigners?: Resolver<Maybe<Array<IResolversTypes['Member']>>, ParentType, ContextType>;
  dataLevel?: Resolver<IResolversTypes['DataLevelTask'], ParentType, ContextType>;
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateWorkTime?: Resolver<Maybe<IResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<IResolversTypes['String']>>, ParentType, ContextType>;
  progressRate?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  sequence?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  statusId?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithGanttTeamResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithGanttTeam'] = IResolversParentTypes['ProjectsWithGanttTeam']> = {
  barColor?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  dataLevel?: Resolver<IResolversTypes['DataLevelTeam'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithGanttTeamTaskResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithGanttTeamTask'] = IResolversParentTypes['ProjectsWithGanttTeamTask']> = {
  key?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  tasks?: Resolver<Array<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IProjectsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['ProjectsWithPagination'] = IResolversParentTypes['ProjectsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Project']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  apiVersion?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  bcryptHash?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  bookmark?: Resolver<Maybe<IResolversTypes['Bookmark']>, ParentType, ContextType, RequireFields<IQueryBookmarkArgs, 'bookmarkId'>>;
  bookmarksWithPagination?: Resolver<IResolversTypes['BookmarksWithPagination'], ParentType, ContextType, RequireFields<IQueryBookmarksWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  customer?: Resolver<Maybe<IResolversTypes['Customer']>, ParentType, ContextType, RequireFields<IQueryCustomerArgs, 'customerId'>>;
  customers?: Resolver<Maybe<Array<IResolversTypes['Customer']>>, ParentType, ContextType, RequireFields<IQueryCustomersArgs, 'workspaceId'>>;
  customersWithPagination?: Resolver<IResolversTypes['CustomersWithPagination'], ParentType, ContextType, RequireFields<IQueryCustomersWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  dashboardCount?: Resolver<IResolversTypes['DashboardCount'], ParentType, ContextType>;
  dashboardGenerateId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  dashboardOSInfo?: Resolver<IResolversTypes['DashboardOSInfo'], ParentType, ContextType>;
  evaluate?: Resolver<Maybe<IResolversTypes['Evaluate']>, ParentType, ContextType, RequireFields<IQueryEvaluateArgs, 'evaluateId'>>;
  evaluateComments?: Resolver<Maybe<Array<IResolversTypes['EvaluateComment']>>, ParentType, ContextType, RequireFields<IQueryEvaluateCommentsArgs, 'evaluateId'>>;
  evaluateFile?: Resolver<Maybe<IResolversTypes['EvaluateFile']>, ParentType, ContextType, RequireFields<IQueryEvaluateFileArgs, 'evaluateFileId'>>;
  evaluateFiles?: Resolver<Maybe<Array<IResolversTypes['EvaluateFile']>>, ParentType, ContextType, RequireFields<IQueryEvaluateFilesArgs, 'evaluateId'>>;
  evaluates?: Resolver<Array<IResolversTypes['Evaluate']>, ParentType, ContextType, RequireFields<IQueryEvaluatesArgs, 'search'>>;
  evaluatesWithPagination?: Resolver<IResolversTypes['EvaluateWithPagination'], ParentType, ContextType, RequireFields<IQueryEvaluatesWithPaginationArgs, 'paginate' | 'projectId' | 'search' | 'workspaceId'>>;
  guestProjectsEvaluateWithGantt?: Resolver<IResolversTypes['ProjectsWithGantt'], ParentType, ContextType, RequireFields<IQueryGuestProjectsEvaluateWithGanttArgs, 'projectId'>>;
  guestProjectsTaskWithGantt?: Resolver<IResolversTypes['ProjectsWithGantt'], ParentType, ContextType, RequireFields<IQueryGuestProjectsTaskWithGanttArgs, 'projectId'>>;
  guestTask?: Resolver<Maybe<IResolversTypes['Task']>, ParentType, ContextType, RequireFields<IQueryGuestTaskArgs, 'taskId'>>;
  guestTaskComments?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<IQueryGuestTaskCommentsArgs, 'taskId'>>;
  guestTaskFile?: Resolver<Maybe<IResolversTypes['TaskFile']>, ParentType, ContextType, RequireFields<IQueryGuestTaskFileArgs, 'taskFileId'>>;
  guestTaskFiles?: Resolver<Maybe<Array<IResolversTypes['TaskFile']>>, ParentType, ContextType, RequireFields<IQueryGuestTaskFilesArgs, 'taskId'>>;
  guestTasksWithStatusGroup?: Resolver<IResolversTypes['TaskWithStatusGroup'], ParentType, ContextType, RequireFields<IQueryGuestTasksWithStatusGroupArgs, 'projectId'>>;
  iconSvgs?: Resolver<Array<IResolversTypes['IconSvg']>, ParentType, ContextType, RequireFields<IQueryIconSvgsArgs, 'iconSymbolsId' | 'paginate'>>;
  iconSymbols?: Resolver<Maybe<IResolversTypes['IconSymbols']>, ParentType, ContextType, RequireFields<IQueryIconSymbolsArgs, 'iconSymbolsId'>>;
  iconSymbolsWithPagination?: Resolver<IResolversTypes['IconSymbolsWithPagination'], ParentType, ContextType, RequireFields<IQueryIconSymbolsWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  member?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType, RequireFields<IQueryMemberArgs, 'memberId'>>;
  memberBilling?: Resolver<Maybe<IResolversTypes['MemberBilling']>, ParentType, ContextType, RequireFields<IQueryMemberBillingArgs, 'billingId'>>;
  memberBillingHistoryWithPagination?: Resolver<IResolversTypes['MemberBillingHistoryWithPagination'], ParentType, ContextType, RequireFields<IQueryMemberBillingHistoryWithPaginationArgs, 'billingId' | 'paginate'>>;
  memberBillingWithPagination?: Resolver<IResolversTypes['MemberBillingWithPagination'], ParentType, ContextType, RequireFields<IQueryMemberBillingWithPaginationArgs, 'paginate'>>;
  profileMe?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  project?: Resolver<Maybe<IResolversTypes['Project']>, ParentType, ContextType, RequireFields<IQueryProjectArgs, 'projectId'>>;
  projectMilestone?: Resolver<Maybe<IResolversTypes['ProjectMilestone']>, ParentType, ContextType, RequireFields<IQueryProjectMilestoneArgs, 'projectMilestoneId'>>;
  projectMilestoneDeadline?: Resolver<Maybe<Array<IResolversTypes['ProjectMilestone']>>, ParentType, ContextType, RequireFields<IQueryProjectMilestoneDeadlineArgs, 'projectId'>>;
  projectMilestonesWithPagination?: Resolver<IResolversTypes['ProjectMilestonesWithPagination'], ParentType, ContextType, RequireFields<IQueryProjectMilestonesWithPaginationArgs, 'paginate' | 'search'>>;
  projectNote?: Resolver<Maybe<IResolversTypes['ProjectNote']>, ParentType, ContextType, RequireFields<IQueryProjectNoteArgs, 'projectNoteId'>>;
  projectNotes?: Resolver<Array<IResolversTypes['ProjectNote']>, ParentType, ContextType, RequireFields<IQueryProjectNotesArgs, 'projectId'>>;
  projectQuotation?: Resolver<Maybe<IResolversTypes['Project']>, ParentType, ContextType, RequireFields<IQueryProjectQuotationArgs, 'projectId'>>;
  projects?: Resolver<Array<IResolversTypes['Project']>, ParentType, ContextType, RequireFields<IQueryProjectsArgs, 'workspaceId'>>;
  projectsEvaluateWithGantt?: Resolver<IResolversTypes['ProjectsWithGantt'], ParentType, ContextType, RequireFields<IQueryProjectsEvaluateWithGanttArgs, 'workspaceId'>>;
  projectsTaskWithGantt?: Resolver<IResolversTypes['ProjectsWithGantt'], ParentType, ContextType, RequireFields<IQueryProjectsTaskWithGanttArgs, 'projectId' | 'workspaceId'>>;
  projectsWithPagination?: Resolver<IResolversTypes['ProjectsWithPagination'], ParentType, ContextType, RequireFields<IQueryProjectsWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  projectsWithStatusGroup?: Resolver<IResolversTypes['ProjectWithStatusGroup'], ParentType, ContextType, RequireFields<IQueryProjectsWithStatusGroupArgs, 'workspaceId'>>;
  quotation?: Resolver<Maybe<IResolversTypes['Quotation']>, ParentType, ContextType, RequireFields<IQueryQuotationArgs, 'quotationId'>>;
  quotationsWithPagination?: Resolver<IResolversTypes['QuotationsWithPagination'], ParentType, ContextType, RequireFields<IQueryQuotationsWithPaginationArgs, 'paginate' | 'search'>>;
  repo?: Resolver<Maybe<IResolversTypes['Repo']>, ParentType, ContextType, RequireFields<IQueryRepoArgs, 'repoId'>>;
  reposWithPagination?: Resolver<IResolversTypes['ReposWithPagination'], ParentType, ContextType, RequireFields<IQueryReposWithPaginationArgs, 'paginate' | 'search'>>;
  task?: Resolver<Maybe<IResolversTypes['Task']>, ParentType, ContextType, RequireFields<IQueryTaskArgs, 'taskId'>>;
  taskCommentLogsWithPagination?: Resolver<Maybe<IResolversTypes['TaskCommentLogsWithPagination']>, ParentType, ContextType, RequireFields<IQueryTaskCommentLogsWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  taskComments?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType, RequireFields<IQueryTaskCommentsArgs, 'taskId'>>;
  taskFile?: Resolver<Maybe<IResolversTypes['TaskFile']>, ParentType, ContextType, RequireFields<IQueryTaskFileArgs, 'taskFileId'>>;
  taskFiles?: Resolver<Maybe<Array<IResolversTypes['TaskFile']>>, ParentType, ContextType, RequireFields<IQueryTaskFilesArgs, 'taskId'>>;
  taskMemberWithGantt?: Resolver<IResolversTypes['TaskMemberWithGantt'], ParentType, ContextType, RequireFields<IQueryTaskMemberWithGanttArgs, 'projectId' | 'search' | 'workspaceId'>>;
  taskStatus?: Resolver<Maybe<IResolversTypes['TaskStatus']>, ParentType, ContextType, RequireFields<IQueryTaskStatusArgs, 'taskStatusId' | 'workspaceId'>>;
  taskStatusKind?: Resolver<Maybe<IResolversTypes['TaskStatusKind']>, ParentType, ContextType, RequireFields<IQueryTaskStatusKindArgs, 'taskStatusKindId'>>;
  taskStatusKinds?: Resolver<Array<IResolversTypes['TaskStatusKind']>, ParentType, ContextType, RequireFields<IQueryTaskStatusKindsArgs, 'workspaceId'>>;
  taskStatuses?: Resolver<Array<IResolversTypes['TaskStatus']>, ParentType, ContextType, RequireFields<IQueryTaskStatusesArgs, 'projectId' | 'workspaceId'>>;
  taskWithProcess?: Resolver<Maybe<IResolversTypes['Task']>, ParentType, ContextType, RequireFields<IQueryTaskWithProcessArgs, 'workspaceId'>>;
  tasks?: Resolver<Array<IResolversTypes['Task']>, ParentType, ContextType, RequireFields<IQueryTasksArgs, 'search' | 'workspaceId'>>;
  tasksWithPagination?: Resolver<IResolversTypes['TasksWithPagination'], ParentType, ContextType, RequireFields<IQueryTasksWithPaginationArgs, 'paginate' | 'search' | 'workspaceId'>>;
  tasksWithStatusGroup?: Resolver<IResolversTypes['TaskWithStatusGroup'], ParentType, ContextType, RequireFields<IQueryTasksWithStatusGroupArgs, 'projectId' | 'workspaceId'>>;
  team?: Resolver<Maybe<IResolversTypes['Team']>, ParentType, ContextType, RequireFields<IQueryTeamArgs, 'teamId'>>;
  teamMeRole?: Resolver<Maybe<IResolversTypes['ETeamMemberRole']>, ParentType, ContextType, RequireFields<IQueryTeamMeRoleArgs, 'teamId'>>;
  teamMember?: Resolver<Maybe<IResolversTypes['TeamMember']>, ParentType, ContextType, RequireFields<IQueryTeamMemberArgs, 'teamMemberId'>>;
  teamMemberDashboardCategoryGroup?: Resolver<IResolversTypes['DashboardCategoryGroup'], ParentType, ContextType, RequireFields<IQueryTeamMemberDashboardCategoryGroupArgs, 'teamMemberId'>>;
  teamMemberDashboardGraph?: Resolver<IResolversTypes['DashboardGraph'], ParentType, ContextType, RequireFields<IQueryTeamMemberDashboardGraphArgs, 'teamMemberId'>>;
  teamMembers?: Resolver<Maybe<Array<IResolversTypes['ShortMember']>>, ParentType, ContextType, RequireFields<IQueryTeamMembersArgs, 'teamId' | 'workspaceId'>>;
  teamMembersWithPagination?: Resolver<IResolversTypes['TeamMembersWithPagination'], ParentType, ContextType, RequireFields<IQueryTeamMembersWithPaginationArgs, 'paginate' | 'teamId' | 'workspaceId'>>;
  teams?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType, RequireFields<IQueryTeamsArgs, 'workspaceId'>>;
  teamsInvite?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType>;
  teamsInviteCheck?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  teamsWithPagination?: Resolver<Maybe<IResolversTypes['TeamsWithPagination']>, ParentType, ContextType, RequireFields<IQueryTeamsWithPaginationArgs, 'paginate' | 'workspaceId'>>;
  themes?: Resolver<Array<IResolversTypes['Theme']>, ParentType, ContextType>;
  workLogsRecordWithMonth?: Resolver<Maybe<Array<IResolversTypes['String']>>, ParentType, ContextType, RequireFields<IQueryWorkLogsRecordWithMonthArgs, 'input' | 'workspaceId'>>;
  workLogsWithPagination?: Resolver<Maybe<IResolversTypes['WorkLogsWithPagination']>, ParentType, ContextType, RequireFields<IQueryWorkLogsWithPaginationArgs, 'paginate' | 'search' | 'workspaceId'>>;
  workspace?: Resolver<Maybe<IResolversTypes['Workspace']>, ParentType, ContextType, RequireFields<IQueryWorkspaceArgs, 'workspaceId'>>;
  workspaceAllows?: Resolver<IResolversTypes['WorkspaceAllows'], ParentType, ContextType>;
  workspaceConfig?: Resolver<Maybe<IResolversTypes['Workspace']>, ParentType, ContextType, RequireFields<IQueryWorkspaceConfigArgs, 'workspaceId'>>;
  workspacePlanConfig?: Resolver<Maybe<Array<IResolversTypes['WorkspacesOrderPlanConfig']>>, ParentType, ContextType>;
  workspaceQuotation?: Resolver<Maybe<IResolversTypes['Workspace']>, ParentType, ContextType, RequireFields<IQueryWorkspaceQuotationArgs, 'workspaceId'>>;
  workspacesWithPagination?: Resolver<IResolversTypes['WorkspacesWithPagination'], ParentType, ContextType, RequireFields<IQueryWorkspacesWithPaginationArgs, 'paginate'>>;
};

export type IQuotationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Quotation'] = IResolversParentTypes['Quotation']> = {
  cancelAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  details?: Resolver<Maybe<Array<IResolversTypes['QuotationDetail']>>, ParentType, ContextType>;
  discount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  doneAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  fromInfo?: Resolver<Maybe<IResolversTypes['QuotationCustomerInfo']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  paymentAccount?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  paymentCycles?: Resolver<Maybe<Array<IResolversTypes['ProjectsPaymentCycles']>>, ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  remark?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  signatureReturnUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<IResolversTypes['EQuotationStatus'], ParentType, ContextType>;
  subTotalAmount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  taxAmount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  taxRate?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  terms?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  toInfo?: Resolver<Maybe<IResolversTypes['QuotationCustomerInfo']>, ParentType, ContextType>;
  totalAmount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  totalItem?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  totalWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  transactionCurrency?: Resolver<IResolversTypes['ETransactionCurrency'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQuotationCustomerInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['QuotationCustomerInfo'] = IResolversParentTypes['QuotationCustomerInfo']> = {
  address?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  tel?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQuotationDetailResolvers<ContextType = any, ParentType extends IResolversParentTypes['QuotationDetail'] = IResolversParentTypes['QuotationDetail']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  quotationHead?: Resolver<IResolversTypes['Quotation'], ParentType, ContextType>;
  quotationHeadId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IQuotationsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['QuotationsWithPagination'] = IResolversParentTypes['QuotationsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Quotation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IRepoResolvers<ContextType = any, ParentType extends IResolversParentTypes['Repo'] = IResolversParentTypes['Repo']> = {
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  gitPlatform?: Resolver<Maybe<IResolversTypes['EGitPlatform']>, ParentType, ContextType>;
  gitRepository?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<Maybe<IResolversTypes['ERepoPlatform']>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  team?: Resolver<IResolversTypes['Team'], ParentType, ContextType>;
  teamId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  webhookSecret?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  webhooksUrl?: Resolver<IResolversTypes['ReposWebhookUrl'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IReposWebhookUrlResolvers<ContextType = any, ParentType extends IResolversParentTypes['ReposWebhookUrl'] = IResolversParentTypes['ReposWebhookUrl']> = {
  bitbucket?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  github?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  gitlab?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IReposWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['ReposWithPagination'] = IResolversParentTypes['ReposWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Repo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultCreateDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultCreateData'] = IResolversParentTypes['ResultCreateData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultCreateData2Resolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultCreateData2'] = IResolversParentTypes['ResultCreateData2']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultDeleteDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultDeleteData'] = IResolversParentTypes['ResultDeleteData']> = {
  deleteCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultDownloadDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultDownloadData'] = IResolversParentTypes['ResultDownloadData']> = {
  buffer?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  mimeType?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultEvaluateMoveTeamDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultEvaluateMoveTeamData'] = IResolversParentTypes['ResultEvaluateMoveTeamData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newTeam?: Resolver<IResolversTypes['Team'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultMessageResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultMessage'] = IResolversParentTypes['ResultMessage']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultTaskCreateDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultTaskCreateData'] = IResolversParentTypes['ResultTaskCreateData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['TaskCreateData'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultTaskJoinProjectDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultTaskJoinProjectData'] = IResolversParentTypes['ResultTaskJoinProjectData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newProject?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultTaskMoveRepoDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultTaskMoveRepoData'] = IResolversParentTypes['ResultTaskMoveRepoData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newRepo?: Resolver<IResolversTypes['Repo'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultTaskUpdateThumbDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultTaskUpdateThumbData'] = IResolversParentTypes['ResultTaskUpdateThumbData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  thumbUrl?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResultUpdateDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['ResultUpdateData'] = IResolversParentTypes['ResultUpdateData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IShortMemberResolvers<ContextType = any, ParentType extends IResolversParentTypes['ShortMember'] = IResolversParentTypes['ShortMember']> = {
  avatar?: Resolver<Maybe<IResolversTypes['Avatar']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isHidden?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<IResolversTypes['ETeamMemberRole'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ISubscriptionResolvers<ContextType = any, ParentType extends IResolversParentTypes['Subscription'] = IResolversParentTypes['Subscription']> = {
  addComment?: SubscriptionResolver<IResolversTypes['Comment'], "addComment", ParentType, ContextType>;
  taskChange?: SubscriptionResolver<IResolversTypes['TaskChangeSubscriptData'], "taskChange", ParentType, ContextType, RequireFields<ISubscriptionTaskChangeArgs, 'workspaceId'>>;
  taskCreate?: SubscriptionResolver<IResolversTypes['TaskCreateSubscriptData'], "taskCreate", ParentType, ContextType, RequireFields<ISubscriptionTaskCreateArgs, 'workspaceId'>>;
  teamInviteCheck?: SubscriptionResolver<IResolversTypes['TeamInviteCheckData'], "teamInviteCheck", ParentType, ContextType>;
};

export type ITaskResolvers<ContextType = any, ParentType extends IResolversParentTypes['Task'] = IResolversParentTypes['Task']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  archiveAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  assigners?: Resolver<Maybe<Array<IResolversTypes['ShortMember']>>, ParentType, ContextType>;
  cancelAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<IResolversTypes['ETaskCategory'], ParentType, ContextType>;
  commentCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  commentTodayCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType>;
  content?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  deadlineEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  deadlineStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  developer?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  developerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  doneAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  doneWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  endOfDevTime?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  evaluate?: Resolver<Maybe<IResolversTypes['Evaluate']>, ParentType, ContextType>;
  evaluateId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<IResolversTypes['TaskFile']>>, ParentType, ContextType>;
  fromTasks?: Resolver<Maybe<Array<IResolversTypes['TaskLink']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isArchive?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isCustomAmount?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isDelete?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isMomentous?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  lastWorkLogTime?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  merger?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  mergerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  momentousAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  parentTask?: Resolver<Maybe<IResolversTypes['Task']>, ParentType, ContextType>;
  parentTaskId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  priority?: Resolver<IResolversTypes['ETaskPriority'], ParentType, ContextType>;
  progressRate?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  releaseVersion?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  releaseVersionAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  repo?: Resolver<IResolversTypes['Repo'], ParentType, ContextType>;
  repoId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  sequenceSchedule?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sequenceStatus?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  skillPoint?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<IResolversTypes['TaskStatus'], ParentType, ContextType>;
  statusId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  statusUpdatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  subTaskCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  subTaskDoneCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  subTasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  testDevice?: Resolver<Maybe<IResolversTypes['ETaskTestDevice']>, ParentType, ContextType>;
  tester?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  testerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  thumb?: Resolver<Maybe<IResolversTypes['TaskFile']>, ParentType, ContextType>;
  thumbId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  toTasks?: Resolver<Maybe<Array<IResolversTypes['TaskLink']>>, ParentType, ContextType>;
  type?: Resolver<IResolversTypes['ETaskType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workLog?: Resolver<Maybe<Array<IResolversTypes['WorkLog']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeData'] = IResolversParentTypes['TaskChangeData']> = {
  commentCreate?: Resolver<Maybe<IResolversTypes['TaskChangeFieldCreateComment']>, ParentType, ContextType>;
  commentDelete?: Resolver<Maybe<IResolversTypes['TaskChangeFieldDeleteComment']>, ParentType, ContextType>;
  commentModify?: Resolver<Maybe<IResolversTypes['TaskChangeFieldCommentMessage']>, ParentType, ContextType>;
  fieldArchive?: Resolver<Maybe<IResolversTypes['TaskChangeFieldArchive']>, ParentType, ContextType>;
  fieldCategory?: Resolver<Maybe<IResolversTypes['TaskChangeFieldCategory']>, ParentType, ContextType>;
  fieldCreate?: Resolver<Maybe<IResolversTypes['TaskChangeFieldAddFile']>, ParentType, ContextType>;
  fieldDeveloper?: Resolver<Maybe<IResolversTypes['TaskChangeFieldDeveloper']>, ParentType, ContextType>;
  fieldDownWorkTime?: Resolver<Maybe<IResolversTypes['TaskChangeFieldDownWorkTime']>, ParentType, ContextType>;
  fieldEstimateDate?: Resolver<Maybe<IResolversTypes['TaskChangeFieldEstimateDate']>, ParentType, ContextType>;
  fieldEstimateWorkTime?: Resolver<Maybe<IResolversTypes['TaskChangeFieldEstimateWorkTime']>, ParentType, ContextType>;
  fieldMerger?: Resolver<Maybe<IResolversTypes['TaskChangeFieldMerger']>, ParentType, ContextType>;
  fieldMomentous?: Resolver<Maybe<IResolversTypes['TaskChangeFieldMomentous']>, ParentType, ContextType>;
  fieldPriority?: Resolver<Maybe<IResolversTypes['TaskChangeFieldPriority']>, ParentType, ContextType>;
  fieldProgressRate?: Resolver<Maybe<IResolversTypes['TaskChangeFieldProgressRate']>, ParentType, ContextType>;
  fieldProject?: Resolver<Maybe<IResolversTypes['TaskChangeFieldProject']>, ParentType, ContextType>;
  fieldRepo?: Resolver<Maybe<IResolversTypes['TaskChangeFieldRepo']>, ParentType, ContextType>;
  fieldSkillPoint?: Resolver<Maybe<IResolversTypes['TaskChangeFieldSkillPoint']>, ParentType, ContextType>;
  fieldStatus?: Resolver<Maybe<IResolversTypes['TaskChangeFieldStatus']>, ParentType, ContextType>;
  fieldTester?: Resolver<Maybe<IResolversTypes['TaskChangeFieldTester']>, ParentType, ContextType>;
  fieldTitle?: Resolver<Maybe<IResolversTypes['TaskChangeFieldTitle']>, ParentType, ContextType>;
  fileDelete?: Resolver<Maybe<IResolversTypes['TaskChangeFieldFileDelete']>, ParentType, ContextType>;
  fileModify?: Resolver<Maybe<IResolversTypes['TaskChangeFieldFileName']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldAddFileResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldAddFile'] = IResolversParentTypes['TaskChangeFieldAddFile']> = {
  file?: Resolver<Maybe<IResolversTypes['TaskFile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldArchiveResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldArchive'] = IResolversParentTypes['TaskChangeFieldArchive']> = {
  archive?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldCategoryResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldCategory'] = IResolversParentTypes['TaskChangeFieldCategory']> = {
  category?: Resolver<IResolversTypes['ETaskCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldCommentMessageResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldCommentMessage'] = IResolversParentTypes['TaskChangeFieldCommentMessage']> = {
  comment?: Resolver<IResolversTypes['TaskComment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldCreateCommentResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldCreateComment'] = IResolversParentTypes['TaskChangeFieldCreateComment']> = {
  comment?: Resolver<IResolversTypes['TaskComment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldDeleteCommentResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldDeleteComment'] = IResolversParentTypes['TaskChangeFieldDeleteComment']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldDeveloperResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldDeveloper'] = IResolversParentTypes['TaskChangeFieldDeveloper']> = {
  developer?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldDownWorkTimeResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldDownWorkTime'] = IResolversParentTypes['TaskChangeFieldDownWorkTime']> = {
  doneWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldEstimateDateResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldEstimateDate'] = IResolversParentTypes['TaskChangeFieldEstimateDate']> = {
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldEstimateWorkTimeResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldEstimateWorkTime'] = IResolversParentTypes['TaskChangeFieldEstimateWorkTime']> = {
  estimateWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldFileDeleteResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldFileDelete'] = IResolversParentTypes['TaskChangeFieldFileDelete']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldFileNameResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldFileName'] = IResolversParentTypes['TaskChangeFieldFileName']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldMergerResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldMerger'] = IResolversParentTypes['TaskChangeFieldMerger']> = {
  merger?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldMomentousResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldMomentous'] = IResolversParentTypes['TaskChangeFieldMomentous']> = {
  isMomentous?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldPriorityResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldPriority'] = IResolversParentTypes['TaskChangeFieldPriority']> = {
  priority?: Resolver<IResolversTypes['ETaskPriority'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldProgressRateResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldProgressRate'] = IResolversParentTypes['TaskChangeFieldProgressRate']> = {
  progressRate?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldProjectResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldProject'] = IResolversParentTypes['TaskChangeFieldProject']> = {
  projectId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldRepoResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldRepo'] = IResolversParentTypes['TaskChangeFieldRepo']> = {
  isDiffTeam?: Resolver<Maybe<IResolversTypes['Boolean']>, ParentType, ContextType>;
  repo?: Resolver<IResolversTypes['Repo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldSkillPointResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldSkillPoint'] = IResolversParentTypes['TaskChangeFieldSkillPoint']> = {
  skillPoint?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldStatusResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldStatus'] = IResolversParentTypes['TaskChangeFieldStatus']> = {
  progressRate?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  statusId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldTesterResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldTester'] = IResolversParentTypes['TaskChangeFieldTester']> = {
  tester?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeFieldTitleResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeFieldTitle'] = IResolversParentTypes['TaskChangeFieldTitle']> = {
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskChangeSubscriptDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskChangeSubscriptData'] = IResolversParentTypes['TaskChangeSubscriptData']> = {
  data?: Resolver<Maybe<IResolversTypes['TaskChangeData']>, ParentType, ContextType>;
  senderId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  taskIds?: Resolver<Array<IResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<IResolversTypes['ETaskChangeType'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskCommentResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskComment'] = IResolversParentTypes['TaskComment']> = {
  category?: Resolver<IResolversTypes['ETaskCommentCategory'], ParentType, ContextType>;
  cloneSerialNumber?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  cloneSn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  creatorId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  joinProjectSerialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  joinProjectSn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  task?: Resolver<IResolversTypes['Task'], ParentType, ContextType>;
  taskId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updateArchive?: Resolver<Maybe<IResolversTypes['Boolean']>, ParentType, ContextType>;
  updateAssign?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  updateAssignId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  updateCategory?: Resolver<Maybe<IResolversTypes['ETaskCategory']>, ParentType, ContextType>;
  updateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updateField?: Resolver<Maybe<IResolversTypes['ETaskCommentUpdateField']>, ParentType, ContextType>;
  updateMomentous?: Resolver<Maybe<IResolversTypes['Boolean']>, ParentType, ContextType>;
  updatePriority?: Resolver<Maybe<IResolversTypes['ETaskPriority']>, ParentType, ContextType>;
  updateProgressRate?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  updateReleaseVersion?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updateStatus?: Resolver<Maybe<IResolversTypes['TaskStatus']>, ParentType, ContextType>;
  updateStatusId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  updateType?: Resolver<Maybe<IResolversTypes['ETaskType']>, ParentType, ContextType>;
  updateWorkTime?: Resolver<Maybe<IResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskCommentCreateDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskCommentCreateData'] = IResolversParentTypes['TaskCommentCreateData']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['TaskComment'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskCommentLogsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskCommentLogsWithPagination'] = IResolversParentTypes['TaskCommentLogsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['TaskComment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskCreateDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskCreateData'] = IResolversParentTypes['TaskCreateData']> = {
  category?: Resolver<IResolversTypes['ETaskCategory'], ParentType, ContextType>;
  commentCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  commentTodayCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  developer?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  doneWorkTime?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isArchive?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  merger?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  priority?: Resolver<IResolversTypes['ETaskPriority'], ParentType, ContextType>;
  progressRate?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  repo?: Resolver<IResolversTypes['Repo'], ParentType, ContextType>;
  skillPoint?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  statusId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  subTaskCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  subTaskDoneCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  tester?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskCreateSubscriptDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskCreateSubscriptData'] = IResolversParentTypes['TaskCreateSubscriptData']> = {
  data?: Resolver<IResolversTypes['TaskCreateData'], ParentType, ContextType>;
  senderId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskFileResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskFile'] = IResolversParentTypes['TaskFile']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  file?: Resolver<IResolversTypes['ImageFile'], ParentType, ContextType>;
  fileUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  task?: Resolver<IResolversTypes['Task'], ParentType, ContextType>;
  taskId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  taskThumb?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  thumbUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskFileUploadResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskFileUpload'] = IResolversParentTypes['TaskFileUpload']> = {
  isThumb?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newData?: Resolver<IResolversTypes['TaskFile'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskLinkResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskLink'] = IResolversParentTypes['TaskLink']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<IResolversTypes['Task'], ParentType, ContextType>;
  fromId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  to?: Resolver<IResolversTypes['Task'], ParentType, ContextType>;
  toId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskMemberWithGanttResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskMemberWithGantt'] = IResolversParentTypes['TaskMemberWithGantt']> = {
  projectMap?: Resolver<Array<IResolversTypes['ProjectsWithGanttProject']>, ParentType, ContextType>;
  tasks?: Resolver<Array<IResolversTypes['TaskMemberWithGanttTask']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskMemberWithGanttTaskResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskMemberWithGanttTask'] = IResolversParentTypes['TaskMemberWithGanttTask']> = {
  assigners?: Resolver<Maybe<Array<IResolversTypes['Repo']>>, ParentType, ContextType>;
  dataLevel?: Resolver<IResolversTypes['DataLevelTask'], ParentType, ContextType>;
  estimateEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  estimateWorkTime?: Resolver<Maybe<IResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  links?: Resolver<Maybe<Array<IResolversTypes['String']>>, ParentType, ContextType>;
  progressRate?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  sequence?: Resolver<Maybe<IResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<IResolversTypes['TaskStatus']>, ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskStatusResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskStatus'] = IResolversParentTypes['TaskStatus']> = {
  color?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isCancel?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isDefault?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isFinish?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isProcessing?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<Maybe<IResolversTypes['TaskStatusKind']>, ParentType, ContextType>;
  kindId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<IResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  taskComments?: Resolver<Maybe<Array<IResolversTypes['TaskComment']>>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<IResolversTypes['Task']>>, ParentType, ContextType>;
  theme?: Resolver<Maybe<IResolversTypes['Theme']>, ParentType, ContextType>;
  themeId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  trigger?: Resolver<Maybe<IResolversTypes['ETaskStatusTrigger']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskStatusKindResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskStatusKind'] = IResolversParentTypes['TaskStatusKind']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  sequence?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<Array<IResolversTypes['TaskStatus']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<Maybe<IResolversTypes['Workspace']>, ParentType, ContextType>;
  workspaceId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITaskWithStatusGroupResolvers<ContextType = any, ParentType extends IResolversParentTypes['TaskWithStatusGroup'] = IResolversParentTypes['TaskWithStatusGroup']> = {
  groups?: Resolver<Array<IResolversTypes['ITaskStatusGroup']>, ParentType, ContextType>;
  tasks?: Resolver<Array<IResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITasksWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['TasksWithPagination'] = IResolversParentTypes['TasksWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITeamResolvers<ContextType = any, ParentType extends IResolversParentTypes['Team'] = IResolversParentTypes['Team']> = {
  color?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  creator?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  creatorId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  evaluates?: Resolver<Maybe<Array<IResolversTypes['Evaluate']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  repos?: Resolver<Maybe<Array<IResolversTypes['Repo']>>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  teamMembers?: Resolver<Maybe<Array<IResolversTypes['TeamMember']>>, ParentType, ContextType>;
  theme?: Resolver<Maybe<IResolversTypes['Theme']>, ParentType, ContextType>;
  themeId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITeamInviteCheckDataResolvers<ContextType = any, ParentType extends IResolversParentTypes['TeamInviteCheckData'] = IResolversParentTypes['TeamInviteCheckData']> = {
  isHasInvite?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  memberId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITeamMemberResolvers<ContextType = any, ParentType extends IResolversParentTypes['TeamMember'] = IResolversParentTypes['TeamMember']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  hourSalaryAmount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isAgreeJoin?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isEnable?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  member?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  memberId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<IResolversTypes['ETeamMemberRole'], ParentType, ContextType>;
  team?: Resolver<IResolversTypes['Team'], ParentType, ContextType>;
  teamId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITeamMembersWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['TeamMembersWithPagination'] = IResolversParentTypes['TeamMembersWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['TeamMember']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITeamsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['TeamsWithPagination'] = IResolversParentTypes['TeamsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IThemeResolvers<ContextType = any, ParentType extends IResolversParentTypes['Theme'] = IResolversParentTypes['Theme']> = {
  color?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  taskStatuses?: Resolver<Maybe<Array<IResolversTypes['TaskStatus']>>, ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITokenInfoResolvers<ContextType = any, ParentType extends IResolversParentTypes['TokenInfo'] = IResolversParentTypes['TokenInfo']> = {
  accessToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface IUploadScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type IWorkLogResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkLog'] = IResolversParentTypes['WorkLog']> = {
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  endTime?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  hour?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<Maybe<IResolversTypes['Member']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  startTime?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  task?: Resolver<Maybe<IResolversTypes['Task']>, ParentType, ContextType>;
  taskId?: Resolver<Maybe<IResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workspace?: Resolver<IResolversTypes['Workspace'], ParentType, ContextType>;
  workspaceId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkLogCreateResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkLogCreate'] = IResolversParentTypes['WorkLogCreate']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  newId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkLogStopResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkLogStop'] = IResolversParentTypes['WorkLogStop']> = {
  doneWorkTime?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkLogUpdateTimeResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkLogUpdateTime'] = IResolversParentTypes['WorkLogUpdateTime']> = {
  hour?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkLogsWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkLogsWithPagination'] = IResolversParentTypes['WorkLogsWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['WorkLog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspaceResolvers<ContextType = any, ParentType extends IResolversParentTypes['Workspace'] = IResolversParentTypes['Workspace']> = {
  address?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  bannerUrl?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  billings?: Resolver<Maybe<Array<IResolversTypes['MemberBilling']>>, ParentType, ContextType>;
  bookmark?: Resolver<Maybe<Array<IResolversTypes['Bookmark']>>, ParentType, ContextType>;
  city?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  collectionAccount?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<Maybe<Array<IResolversTypes['Customer']>>, ParentType, ContextType>;
  desc?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  fax?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  icons?: Resolver<Maybe<Array<IResolversTypes['IconSymbols']>>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isAlreadyTried?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isPersonal?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isSkipHoliday?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  isSubscriptTried?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  me?: Resolver<IResolversTypes['EWorkspaceTarget'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<IResolversTypes['Member'], ParentType, ContextType>;
  ownerId?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  planCode?: Resolver<IResolversTypes['EWorkspacePlan'], ParentType, ContextType>;
  projectCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<IResolversTypes['Project']>>, ParentType, ContextType>;
  serialNumber?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  sn?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  statusesKind?: Resolver<Maybe<Array<IResolversTypes['TaskStatusKind']>>, ParentType, ContextType>;
  subscriptEndDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  subscriptStartDate?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  taskCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  taxRate?: Resolver<IResolversTypes['Float'], ParentType, ContextType>;
  teamCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<Maybe<Array<IResolversTypes['Team']>>, ParentType, ContextType>;
  tel?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  virtualProjectId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  workLog?: Resolver<Maybe<Array<IResolversTypes['WorkLog']>>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspaceAllowsResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspaceAllows'] = IResolversParentTypes['WorkspaceAllows']> = {
  workspaces?: Resolver<Array<IResolversTypes['Workspace']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesOrderPlanConfigResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesOrderPlanConfig'] = IResolversParentTypes['WorkspacesOrderPlanConfig']> = {
  code?: Resolver<IResolversTypes['EWorkspacePlan'], ParentType, ContextType>;
  desc?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  features?: Resolver<Array<IResolversTypes['WorkspacesOrderPlanConfigFeature']>, ParentType, ContextType>;
  limit?: Resolver<IResolversTypes['WorkspacesOrderPlanConfigLimit'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<IResolversTypes['WorkspacesOrderPlanConfigPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesOrderPlanConfigFeatureResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesOrderPlanConfigFeature'] = IResolversParentTypes['WorkspacesOrderPlanConfigFeature']> = {
  children?: Resolver<Maybe<Array<IResolversTypes['WorkspacesOrderPlanConfigFeature']>>, ParentType, ContextType>;
  text?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesOrderPlanConfigLimitResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesOrderPlanConfigLimit'] = IResolversParentTypes['WorkspacesOrderPlanConfigLimit']> = {
  evaluateCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  iconSvgCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  iconSymbolsCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  projectCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  taskCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  teamCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  teamMemberCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  teamRepoCount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesOrderPlanConfigPriceResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesOrderPlanConfigPrice'] = IResolversParentTypes['WorkspacesOrderPlanConfigPrice']> = {
  month?: Resolver<IResolversTypes['WorkspacesOrderPlanPrice'], ParentType, ContextType>;
  year?: Resolver<IResolversTypes['WorkspacesOrderPlanPrice'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesOrderPlanPriceResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesOrderPlanPrice'] = IResolversParentTypes['WorkspacesOrderPlanPrice']> = {
  amount?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  paypalPlanId?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IWorkspacesWithPaginationResolvers<ContextType = any, ParentType extends IResolversParentTypes['WorkspacesWithPagination'] = IResolversParentTypes['WorkspacesWithPagination']> = {
  info?: Resolver<IResolversTypes['Info'], ParentType, ContextType>;
  meta?: Resolver<IResolversTypes['Meta'], ParentType, ContextType>;
  rows?: Resolver<Array<IResolversTypes['Workspace']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = any> = {
  AuthDirectGoogleVerify?: IAuthDirectGoogleVerifyResolvers<ContextType>;
  AuthLogin?: IAuthLoginResolvers<ContextType>;
  AuthLoginWithGoogle?: IAuthLoginWithGoogleResolvers<ContextType>;
  AuthRefreshToken?: IAuthRefreshTokenResolvers<ContextType>;
  AuthSendVerifyCode?: IAuthSendVerifyCodeResolvers<ContextType>;
  AuthSignUp?: IAuthSignUpResolvers<ContextType>;
  Avatar?: IAvatarResolvers<ContextType>;
  Bookmark?: IBookmarkResolvers<ContextType>;
  BookmarksWithPagination?: IBookmarksWithPaginationResolvers<ContextType>;
  CategoryGroupCount?: ICategoryGroupCountResolvers<ContextType>;
  Comment?: ICommentResolvers<ContextType>;
  Customer?: ICustomerResolvers<ContextType>;
  CustomersWithPagination?: ICustomersWithPaginationResolvers<ContextType>;
  DashboardCategoryGroup?: IDashboardCategoryGroupResolvers<ContextType>;
  DashboardCount?: IDashboardCountResolvers<ContextType>;
  DashboardGraph?: IDashboardGraphResolvers<ContextType>;
  DashboardOSInfo?: IDashboardOsInfoResolvers<ContextType>;
  DataLevelProject?: GraphQLScalarType;
  DataLevelTask?: GraphQLScalarType;
  DataLevelTeam?: GraphQLScalarType;
  Evaluate?: IEvaluateResolvers<ContextType>;
  EvaluateComment?: IEvaluateCommentResolvers<ContextType>;
  EvaluateCommentCreate?: IEvaluateCommentCreateResolvers<ContextType>;
  EvaluateFile?: IEvaluateFileResolvers<ContextType>;
  EvaluateFileUpload?: IEvaluateFileUploadResolvers<ContextType>;
  EvaluateLink?: IEvaluateLinkResolvers<ContextType>;
  EvaluateWithPagination?: IEvaluateWithPaginationResolvers<ContextType>;
  Graph?: IGraphResolvers<ContextType>;
  IProjectStatusGroup?: IIProjectStatusGroupResolvers<ContextType>;
  ITaskStatusGroup?: IITaskStatusGroupResolvers<ContextType>;
  IconSvg?: IIconSvgResolvers<ContextType>;
  IconSvgUpload?: IIconSvgUploadResolvers<ContextType>;
  IconSvgUploadSymbols?: IIconSvgUploadSymbolsResolvers<ContextType>;
  IconSymbols?: IIconSymbolsResolvers<ContextType>;
  IconSymbolsWithPagination?: IIconSymbolsWithPaginationResolvers<ContextType>;
  ImageFile?: IImageFileResolvers<ContextType>;
  Info?: IInfoResolvers<ContextType>;
  Member?: IMemberResolvers<ContextType>;
  MemberBilling?: IMemberBillingResolvers<ContextType>;
  MemberBillingHistory?: IMemberBillingHistoryResolvers<ContextType>;
  MemberBillingHistoryWithPagination?: IMemberBillingHistoryWithPaginationResolvers<ContextType>;
  MemberBillingWithPagination?: IMemberBillingWithPaginationResolvers<ContextType>;
  MemberLoginHistory?: IMemberLoginHistoryResolvers<ContextType>;
  Meta?: IMetaResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Order?: IOrderResolvers<ContextType>;
  Project?: IProjectResolvers<ContextType>;
  ProjectMilestone?: IProjectMilestoneResolvers<ContextType>;
  ProjectMilestonesWithPagination?: IProjectMilestonesWithPaginationResolvers<ContextType>;
  ProjectNote?: IProjectNoteResolvers<ContextType>;
  ProjectWithStatusGroup?: IProjectWithStatusGroupResolvers<ContextType>;
  ProjectsPaymentCycles?: IProjectsPaymentCyclesResolvers<ContextType>;
  ProjectsWithGantt?: IProjectsWithGanttResolvers<ContextType>;
  ProjectsWithGanttProject?: IProjectsWithGanttProjectResolvers<ContextType>;
  ProjectsWithGanttTask?: IProjectsWithGanttTaskResolvers<ContextType>;
  ProjectsWithGanttTeam?: IProjectsWithGanttTeamResolvers<ContextType>;
  ProjectsWithGanttTeamTask?: IProjectsWithGanttTeamTaskResolvers<ContextType>;
  ProjectsWithPagination?: IProjectsWithPaginationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Quotation?: IQuotationResolvers<ContextType>;
  QuotationCustomerInfo?: IQuotationCustomerInfoResolvers<ContextType>;
  QuotationDetail?: IQuotationDetailResolvers<ContextType>;
  QuotationsWithPagination?: IQuotationsWithPaginationResolvers<ContextType>;
  Repo?: IRepoResolvers<ContextType>;
  ReposWebhookUrl?: IReposWebhookUrlResolvers<ContextType>;
  ReposWithPagination?: IReposWithPaginationResolvers<ContextType>;
  ResultCreateData?: IResultCreateDataResolvers<ContextType>;
  ResultCreateData2?: IResultCreateData2Resolvers<ContextType>;
  ResultDeleteData?: IResultDeleteDataResolvers<ContextType>;
  ResultDownloadData?: IResultDownloadDataResolvers<ContextType>;
  ResultEvaluateMoveTeamData?: IResultEvaluateMoveTeamDataResolvers<ContextType>;
  ResultMessage?: IResultMessageResolvers<ContextType>;
  ResultTaskCreateData?: IResultTaskCreateDataResolvers<ContextType>;
  ResultTaskJoinProjectData?: IResultTaskJoinProjectDataResolvers<ContextType>;
  ResultTaskMoveRepoData?: IResultTaskMoveRepoDataResolvers<ContextType>;
  ResultTaskUpdateThumbData?: IResultTaskUpdateThumbDataResolvers<ContextType>;
  ResultUpdateData?: IResultUpdateDataResolvers<ContextType>;
  ShortMember?: IShortMemberResolvers<ContextType>;
  Subscription?: ISubscriptionResolvers<ContextType>;
  Task?: ITaskResolvers<ContextType>;
  TaskChangeData?: ITaskChangeDataResolvers<ContextType>;
  TaskChangeFieldAddFile?: ITaskChangeFieldAddFileResolvers<ContextType>;
  TaskChangeFieldArchive?: ITaskChangeFieldArchiveResolvers<ContextType>;
  TaskChangeFieldCategory?: ITaskChangeFieldCategoryResolvers<ContextType>;
  TaskChangeFieldCommentMessage?: ITaskChangeFieldCommentMessageResolvers<ContextType>;
  TaskChangeFieldCreateComment?: ITaskChangeFieldCreateCommentResolvers<ContextType>;
  TaskChangeFieldDeleteComment?: ITaskChangeFieldDeleteCommentResolvers<ContextType>;
  TaskChangeFieldDeveloper?: ITaskChangeFieldDeveloperResolvers<ContextType>;
  TaskChangeFieldDownWorkTime?: ITaskChangeFieldDownWorkTimeResolvers<ContextType>;
  TaskChangeFieldEstimateDate?: ITaskChangeFieldEstimateDateResolvers<ContextType>;
  TaskChangeFieldEstimateWorkTime?: ITaskChangeFieldEstimateWorkTimeResolvers<ContextType>;
  TaskChangeFieldFileDelete?: ITaskChangeFieldFileDeleteResolvers<ContextType>;
  TaskChangeFieldFileName?: ITaskChangeFieldFileNameResolvers<ContextType>;
  TaskChangeFieldMerger?: ITaskChangeFieldMergerResolvers<ContextType>;
  TaskChangeFieldMomentous?: ITaskChangeFieldMomentousResolvers<ContextType>;
  TaskChangeFieldPriority?: ITaskChangeFieldPriorityResolvers<ContextType>;
  TaskChangeFieldProgressRate?: ITaskChangeFieldProgressRateResolvers<ContextType>;
  TaskChangeFieldProject?: ITaskChangeFieldProjectResolvers<ContextType>;
  TaskChangeFieldRepo?: ITaskChangeFieldRepoResolvers<ContextType>;
  TaskChangeFieldSkillPoint?: ITaskChangeFieldSkillPointResolvers<ContextType>;
  TaskChangeFieldStatus?: ITaskChangeFieldStatusResolvers<ContextType>;
  TaskChangeFieldTester?: ITaskChangeFieldTesterResolvers<ContextType>;
  TaskChangeFieldTitle?: ITaskChangeFieldTitleResolvers<ContextType>;
  TaskChangeSubscriptData?: ITaskChangeSubscriptDataResolvers<ContextType>;
  TaskComment?: ITaskCommentResolvers<ContextType>;
  TaskCommentCreateData?: ITaskCommentCreateDataResolvers<ContextType>;
  TaskCommentLogsWithPagination?: ITaskCommentLogsWithPaginationResolvers<ContextType>;
  TaskCreateData?: ITaskCreateDataResolvers<ContextType>;
  TaskCreateSubscriptData?: ITaskCreateSubscriptDataResolvers<ContextType>;
  TaskFile?: ITaskFileResolvers<ContextType>;
  TaskFileUpload?: ITaskFileUploadResolvers<ContextType>;
  TaskLink?: ITaskLinkResolvers<ContextType>;
  TaskMemberWithGantt?: ITaskMemberWithGanttResolvers<ContextType>;
  TaskMemberWithGanttTask?: ITaskMemberWithGanttTaskResolvers<ContextType>;
  TaskStatus?: ITaskStatusResolvers<ContextType>;
  TaskStatusKind?: ITaskStatusKindResolvers<ContextType>;
  TaskWithStatusGroup?: ITaskWithStatusGroupResolvers<ContextType>;
  TasksWithPagination?: ITasksWithPaginationResolvers<ContextType>;
  Team?: ITeamResolvers<ContextType>;
  TeamInviteCheckData?: ITeamInviteCheckDataResolvers<ContextType>;
  TeamMember?: ITeamMemberResolvers<ContextType>;
  TeamMembersWithPagination?: ITeamMembersWithPaginationResolvers<ContextType>;
  TeamsWithPagination?: ITeamsWithPaginationResolvers<ContextType>;
  Theme?: IThemeResolvers<ContextType>;
  TokenInfo?: ITokenInfoResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  WorkLog?: IWorkLogResolvers<ContextType>;
  WorkLogCreate?: IWorkLogCreateResolvers<ContextType>;
  WorkLogStop?: IWorkLogStopResolvers<ContextType>;
  WorkLogUpdateTime?: IWorkLogUpdateTimeResolvers<ContextType>;
  WorkLogsWithPagination?: IWorkLogsWithPaginationResolvers<ContextType>;
  Workspace?: IWorkspaceResolvers<ContextType>;
  WorkspaceAllows?: IWorkspaceAllowsResolvers<ContextType>;
  WorkspacesOrderPlanConfig?: IWorkspacesOrderPlanConfigResolvers<ContextType>;
  WorkspacesOrderPlanConfigFeature?: IWorkspacesOrderPlanConfigFeatureResolvers<ContextType>;
  WorkspacesOrderPlanConfigLimit?: IWorkspacesOrderPlanConfigLimitResolvers<ContextType>;
  WorkspacesOrderPlanConfigPrice?: IWorkspacesOrderPlanConfigPriceResolvers<ContextType>;
  WorkspacesOrderPlanPrice?: IWorkspacesOrderPlanPriceResolvers<ContextType>;
  WorkspacesWithPagination?: IWorkspacesWithPaginationResolvers<ContextType>;
};

