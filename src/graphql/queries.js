/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBuilding = /* GraphQL */ `
  query GetBuilding($id: ID!) {
    getBuilding(id: $id) {
      id
      name
      address
      managerID
      manager {
        id
        name
        email
        phoneNumber
        buildings {
          nextToken
        }
        createdAt
        updatedAt
      }
      tenants {
        items {
          id
          buildingID
          name
          email
          phoneNumber
          aboutMe
          ownership
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBuildings = /* GraphQL */ `
  query ListBuildings(
    $filter: ModelBuildingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        managerID
        manager {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        tenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
      id
      name
      email
      phoneNumber
      buildings {
        items {
          id
          name
          address
          managerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phoneNumber
        buildings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      id
      buildingID
      name
      email
      phoneNumber
      aboutMe
      ownership
      comments {
        items {
          id
          tenantID
          buildingID
          projectID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buildingID
        name
        email
        phoneNumber
        aboutMe
        ownership
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      buildingID
      name
      cost
      rating
      comments {
        items {
          id
          tenantID
          buildingID
          projectID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buildingID
        name
        cost
        rating
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPoll = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
      id
      buildingID
      name
      description
      answers
      answersCount
      comments {
        items {
          id
          tenantID
          buildingID
          projectID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPolls = /* GraphQL */ `
  query ListPolls(
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        buildingID
        name
        description
        answers
        answersCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      tenantID
      buildingID
      projectID
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tenantID
        buildingID
        projectID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const managerByBuilding = /* GraphQL */ `
  query ManagerByBuilding(
    $managerID: ID
    $address: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBuildingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    managerByBuilding(
      managerID: $managerID
      address: $address
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        address
        managerID
        manager {
          id
          name
          email
          phoneNumber
          createdAt
          updatedAt
        }
        tenants {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectsByBuilding = /* GraphQL */ `
  query ProjectsByBuilding(
    $buildingID: ID
    $cost: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByBuilding(
      buildingID: $buildingID
      cost: $cost
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buildingID
        name
        cost
        rating
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const pollByBuilding = /* GraphQL */ `
  query PollByBuilding(
    $buildingID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pollByBuilding(
      buildingID: $buildingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        buildingID
        name
        description
        answers
        answersCount
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByTenant = /* GraphQL */ `
  query CommentsByTenant(
    $tenantID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByTenant(
      tenantID: $tenantID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        buildingID
        projectID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByBuilding = /* GraphQL */ `
  query CommentsByBuilding(
    $buildingID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByBuilding(
      buildingID: $buildingID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        buildingID
        projectID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByProject = /* GraphQL */ `
  query CommentsByProject(
    $projectID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByProject(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenantID
        buildingID
        projectID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
