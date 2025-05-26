import * as Types from '../types.generated';

import {IUseFetcherArgs} from '@/library/graphql/fetcher';
export type IPaginateMeta = { currentPage: number, pageLimit: number, order?: { orderField: string, orderBy: string } | undefined };

export type IPaginateInfo = { totalItems: number, totalPages: number };

export type IResultIconSvg = { id: string, code: string, viewBox: string, content: string, defs: string };

export type IMemberShort = { id: string, name: string, avatarUrl?: string | undefined };

export type ICustomerShort = { id: string, name: string, avatarUrl?: string | undefined };

export type ITeamShort = { id: string, name: string, theme?: { color?: string | undefined } | undefined, workspace: { id: string, name: string } };

export type IRepoTeamShort = { id: string, name: string, avatarUrl?: string | undefined, team: { id: string, name: string, theme?: { color?: string | undefined } | undefined, workspace: { id: string, name: string } } };

export type IEvaluateCommentShort = { id: string, category: Types.EEvaluateCommentCategory, content?: string | undefined, updateField?: Types.EEvaluateCommentUpdateField | undefined, updateStartDate?: string | undefined, updateEndDate?: string | undefined, updateStatus?: Types.EEvaluateStatus | undefined, updateWorkTime?: number | undefined, createdAt: string, updatedAt?: string | undefined, updateAssign?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined };

export type IEvaluateFields = { id: string, title: string, progressRate: number, createdAt: string, doneAt?: string | undefined, cancelAt?: string | undefined, estimateWorkTime: number, estimateStartDate?: string | undefined, estimateEndDate?: string | undefined, status: Types.EEvaluateStatus, commentCount: number, commentTodayCount: number, skillPoint: number, team?: { id: string, name: string, theme?: { color?: string | undefined } | undefined, workspace: { id: string, name: string } } | undefined, developer?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined };

export type IProjectShort = { id: string, sn?: string | undefined, name: string };

export type ITaskCommentShort = { id: string, category: Types.ETaskCommentCategory, content?: string | undefined, updateField?: Types.ETaskCommentUpdateField | undefined, updatePriority?: Types.ETaskPriority | undefined, updateCategory?: Types.ETaskCategory | undefined, updateStartDate?: string | undefined, updateEndDate?: string | undefined, updateWorkTime?: number | undefined, updateType?: Types.ETaskType | undefined, updateArchive?: boolean | undefined, updateMomentous?: boolean | undefined, updateProgressRate?: number | undefined, cloneSn?: string | undefined, joinProjectSn?: string | undefined, createdAt: string, updatedAt?: string | undefined, updateStatus?: { id: string, name: string } | undefined, task: { id: string, project: { id: string, name: string } }, updateAssign?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, creator: { id: string, name: string, avatarUrl?: string | undefined } };

export type ITaskFields = { id: string, title: string, sn?: string | undefined, progressRate: number, releaseVersion?: string | undefined, priority: Types.ETaskPriority, createdAt: string, doneAt?: string | undefined, cancelAt?: string | undefined, estimateWorkTime: number, estimateStartDate?: string | undefined, estimateEndDate?: string | undefined, category: Types.ETaskCategory, statusId: string, isArchive: boolean, skillPoint: number, doneWorkTime: number, commentCount: number, subTaskCount: number, subTaskDoneCount: number, repo: { id: string, name: string, avatarUrl?: string | undefined, team: { id: string, name: string, theme?: { color?: string | undefined } | undefined, workspace: { id: string, name: string } } }, developer?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, tester?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, merger?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, thumb?: { thumbUrl?: string | undefined } | undefined };

export type IProjectFields = { id: string, sn?: string | undefined, name: string, desc?: string | undefined, status: Types.EProjectStatus, createdAt: string, updatedAt?: string | undefined, taskDoneTotal: number, taskTotal: number, evaluateTotal: number, quoteTotal: number, quoteDoneTotal: number, isEvaluateEnable: boolean, isTaskEnable: boolean, isQuotationEnable: boolean, taskMember?: Array<{ id: string, name: string, avatarUrl?: string | undefined }> | undefined, customer?: { id: string, name: string, avatarUrl?: string | undefined } | undefined };

export type ITaskFileField = { id: string, fileUrl?: string | undefined, thumbUrl?: string | undefined, createdAt: string, file: { title: string, name?: string | undefined, mimeType?: string | undefined, size?: number | undefined }, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined };

export type IEvaluateFileField = { id: string, fileUrl?: string | undefined, thumbUrl?: string | undefined, createdAt: string, file?: { title: string, name?: string | undefined, mimeType?: string | undefined, size?: number | undefined } | undefined, creator?: { id: string, name: string, avatarUrl?: string | undefined } | undefined };

export type ITaskWithListRow = { id: string, sn: string, title: string, category: Types.ETaskCategory, estimateEndDate?: string | undefined, estimateStartDate?: string | undefined, estimateWorkTime: number, isArchive: boolean, priority: Types.ETaskPriority, projectId: string, progressRate: number, statusId: string, createdAt: string, doneWorkTime: number, skillPoint: number, commentTodayCount: number, commentCount: number, subTaskCount: number, subTaskDoneCount: number, developer?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, merger?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, tester?: { id: string, name: string, avatarUrl?: string | undefined } | undefined, repo: { id: string, name: string, avatarUrl?: string | undefined, team: { id: string, name: string, theme?: { color?: string | undefined } | undefined, workspace: { id: string, name: string } } } };

export const PaginateMeta = `
    fragment PaginateMeta on Meta {
  currentPage
  pageLimit
  order {
    orderField
    orderBy
  }
}
    `;
export const PaginateInfo = `
    fragment PaginateInfo on Info {
  totalItems
  totalPages
}
    `;
export const ResultIconSvg = `
    fragment ResultIconSvg on IconSvg {
  id
  code
  viewBox
  content
  defs
}
    `;
export const MemberShort = `
    fragment MemberShort on Member {
  id
  name
  avatarUrl
}
    `;
export const EvaluateCommentShort = `
    fragment EvaluateCommentShort on EvaluateComment {
  id
  category
  content
  updateField
  updateStartDate
  updateEndDate
  updateStatus
  updateWorkTime
  updateAssign {
    ...MemberShort
  }
  createdAt
  updatedAt
  creator {
    ...MemberShort
  }
}
    ${MemberShort}`;
export const TeamShort = `
    fragment TeamShort on Team {
  id
  name
  theme {
    color
  }
  workspace {
    id
    name
  }
}
    `;
export const EvaluateFields = `
    fragment EvaluateFields on Evaluate {
  id
  title
  progressRate
  createdAt
  doneAt
  cancelAt
  estimateWorkTime
  estimateStartDate
  estimateEndDate
  status
  commentCount
  commentTodayCount
  team {
    ...TeamShort
  }
  developer {
    ...MemberShort
  }
  creator {
    ...MemberShort
  }
  skillPoint
}
    ${TeamShort}
${MemberShort}`;
export const ProjectShort = `
    fragment ProjectShort on Project {
  id
  sn
  name
}
    `;
export const TaskCommentShort = `
    fragment TaskCommentShort on TaskComment {
  id
  category
  content
  updateField
  updatePriority
  updateCategory
  updateStartDate
  updateEndDate
  updateStatus {
    id
    name
  }
  updateWorkTime
  updateType
  updateArchive
  updateMomentous
  updateProgressRate
  cloneSn
  joinProjectSn
  task {
    id
    project {
      id
      name
    }
  }
  updateAssign {
    ...MemberShort
  }
  createdAt
  updatedAt
  creator {
    ...MemberShort
  }
}
    ${MemberShort}`;
export const RepoTeamShort = `
    fragment RepoTeamShort on Repo {
  id
  name
  avatarUrl
  team {
    ...TeamShort
  }
}
    ${TeamShort}`;
export const TaskFields = `
    fragment TaskFields on Task {
  id
  title
  sn
  progressRate
  releaseVersion
  priority
  createdAt
  doneAt
  cancelAt
  estimateWorkTime
  estimateStartDate
  estimateEndDate
  category
  statusId
  isArchive
  skillPoint
  releaseVersion
  doneWorkTime
  commentCount
  repo {
    ...RepoTeamShort
  }
  developer {
    ...MemberShort
  }
  tester {
    ...MemberShort
  }
  merger {
    ...MemberShort
  }
  creator {
    ...MemberShort
  }
  subTaskCount
  subTaskDoneCount
  thumb {
    thumbUrl
  }
}
    ${RepoTeamShort}
${MemberShort}`;
export const CustomerShort = `
    fragment CustomerShort on Customer {
  id
  name
  avatarUrl
}
    `;
export const ProjectFields = `
    fragment ProjectFields on Project {
  id
  sn
  name
  desc
  status
  createdAt
  updatedAt
  taskDoneTotal
  taskTotal
  evaluateTotal
  quoteTotal
  quoteDoneTotal
  taskMember {
    id
    name
    avatarUrl
  }
  status
  isEvaluateEnable
  isTaskEnable
  isQuotationEnable
  customer {
    ...CustomerShort
  }
}
    ${CustomerShort}`;
export const TaskFileField = `
    fragment TaskFileField on TaskFile {
  id
  file {
    title
    name
    mimeType
    size
  }
  fileUrl
  thumbUrl
  createdAt
  creator {
    id
    name
    avatarUrl
  }
}
    `;
export const EvaluateFileField = `
    fragment EvaluateFileField on EvaluateFile {
  id
  file {
    title
    name
    mimeType
    size
  }
  fileUrl
  thumbUrl
  createdAt
  creator {
    id
    name
    avatarUrl
  }
}
    `;
export const TaskWithListRow = `
    fragment TaskWithListRow on TaskCreateData {
  id
  sn
  title
  category
  estimateEndDate
  estimateStartDate
  estimateWorkTime
  isArchive
  developer {
    ...MemberShort
  }
  merger {
    ...MemberShort
  }
  tester {
    ...MemberShort
  }
  priority
  projectId
  progressRate
  repo {
    ...RepoTeamShort
  }
  statusId
  createdAt
  doneWorkTime
  progressRate
  priority
  skillPoint
  estimateWorkTime
  commentTodayCount
  commentCount
  subTaskCount
  subTaskDoneCount
  estimateWorkTime
}
    ${MemberShort}
${RepoTeamShort}`;
