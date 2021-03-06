/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBuilding = /* GraphQL */ `
  subscription OnCreateBuilding {
    onCreateBuilding {
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
export const onUpdateBuilding = /* GraphQL */ `
  subscription OnUpdateBuilding {
    onUpdateBuilding {
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
export const onDeleteBuilding = /* GraphQL */ `
  subscription OnDeleteBuilding {
    onDeleteBuilding {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
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
          pollID
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
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
          pollID
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
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
          pollID
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
          pollID
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
          pollID
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
          pollID
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
export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll {
    onCreatePoll {
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
          pollID
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
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll {
    onUpdatePoll {
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
          pollID
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
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll {
    onDeletePoll {
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
          pollID
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      tenantID
      buildingID
      projectID
      pollID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      tenantID
      buildingID
      projectID
      pollID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      tenantID
      buildingID
      projectID
      pollID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument {
    onCreateDocument {
      id
      buildingID
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument {
    onUpdateDocument {
      id
      buildingID
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument {
    onDeleteDocument {
      id
      buildingID
      name
      url
      createdAt
      updatedAt
    }
  }
`;
