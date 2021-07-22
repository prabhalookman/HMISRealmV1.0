import { gql } from 'apollo-server-express';

export default gql`

type Site {
    _id: ID
    name: String
    default_language: String
    account_status: String
    accessible: Boolean    
    active: Boolean
    suspended: Boolean
    deleted: Boolean
    payment_status_id: String
    payment_status: String
    subcription_id: ID
    created_by: ID
    created_at: String
    updated_at: String
    deleted_at: String
    googleAnalyticsCode: String
}
input siteInput {
    name: String
    default_language: String
    account_status: String
    accessible: Boolean    
    active: Boolean
    suspended: Boolean
    deleted: Boolean
    payment_status_id: String
    payment_status: String
    subcription_id: ID
    created_by: ID
    created_at: String
    updated_at: String
    deleted_at: String
    googleAnalyticsCode: String
}

extend type Query {
    getSite: [Site]
}

extend type Mutation {
    addSite(input: siteInput): Site
    updateSite(siteID: ID!, input: siteInput): Site
    deleteSite(siteID: ID!): Site
}
`
