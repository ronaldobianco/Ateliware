export interface GitRepository {
  body: Body;
}

export interface Body {
  message: string;
  data:    Data;
}

export interface Data {
  totalCount:        number;
  incompleteResults: boolean;
  items:             Item[];
}

export interface Item {
  id:               number;
  nodeID:           string;
  name:             string;
  fullName:         string;
  private:          boolean;
  owner:            Owner;
  htmlURL:          string;
  description:      string;
  fork:             boolean;
  url:              string;
  forksURL:         string;
  keysURL:          string;
  collaboratorsURL: string;
  teamsURL:         string;
  hooksURL:         string;
  issueEventsURL:   string;
  eventsURL:        string;
  assigneesURL:     string;
  branchesURL:      string;
  tagsURL:          string;
  blobsURL:         string;
  gitTagsURL:       string;
  gitRefsURL:       string;
  treesURL:         string;
  statusesURL:      string;
  languagesURL:     string;
  stargazersURL:    string;
  contributorsURL:  string;
  subscribersURL:   string;
  subscriptionURL:  string;
  commitsURL:       string;
  gitCommitsURL:    string;
  commentsURL:      string;
  issueCommentURL:  string;
  contentsURL:      string;
  compareURL:       string;
  mergesURL:        string;
  archiveURL:       string;
  downloadsURL:     string;
  issuesURL:        string;
  pullsURL:         string;
  milestonesURL:    string;
  notificationsURL: string;
  labelsURL:        string;
  releasesURL:      string;
  deploymentsURL:   string;
  createdAt:        Date;
  updatedAt:        Date;
  pushedAt:         Date;
  gitURL:           string;
  sshURL:           string;
  cloneURL:         string;
  svnURL:           string;
  homepage:         string;
  size:             number;
  stargazersCount:  number;
  watchersCount:    number;
  language:         null | string;
  hasIssues:        boolean;
  hasProjects:      boolean;
  hasDownloads:     boolean;
  hasWiki:          boolean;
  hasPages:         boolean;
  forksCount:       number;
  mirrorURL:        null;
  archived:         boolean;
  disabled:         boolean;
  openIssuesCount:  number;
  license:          License;
  allowForking:     boolean;
  isTemplate:       boolean;
  topics:           string[];
  visibility:       string;
  forks:            number;
  openIssues:       number;
  watchers:         number;
  defaultBranch:    string;
  score:            number;
}

export interface License {
  key:    string;
  name:   string;
  spdxID: string;
  url:    string;
  nodeID: string;
}

export interface Owner {
  login:             string;
  id:                number;
  nodeID:            string;
  avatarURL:         string;
  gravatarID:        string;
  url:               string;
  htmlURL:           string;
  followersURL:      string;
  followingURL:      string;
  gistsURL:          string;
  starredURL:        string;
  subscriptionsURL:  string;
  organizationsURL:  string;
  reposURL:          string;
  eventsURL:         string;
  receivedEventsURL: string;
  type:              string;
  siteAdmin:         boolean;
}
