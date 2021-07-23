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

    _id_gt: ID
    name_gt: String
    default_language_gt: String
    account_status_gt: String
    accessible_gt: Boolean
    active_gt: Boolean
    suspended_gt: Boolean
    deleted_gt: Boolean
    payment_status_id_gt: String
    payment_status_gt: String
    subcription_id_gt: ID
    created_by_gt: ID
    created_at_gt: String
    updated_at_gt: String
    deleted_at_gt: String
    googleAnalyticsCode_gt: String

    _id_gte: ID
    name_gte: String
    default_language_gte: String
    account_status_gte: String
    accessible_gte: Boolean
    active_gte: Boolean
    suspended_gte: Boolean
    deleted_gte: Boolean
    payment_status_id_gte: String
    payment_status_gte: String
    subcription_id_gte: ID
    created_by_gte: ID
    created_at_gte: String
    updated_at_gte: String
    deleted_at_gte: String
    googleAnalyticsCode_gte: String

    _id_lt: ID
    name_lt: String
    default_language_lt: String
    account_status_lt: String
    accessible_lt: Boolean
    active_lt: Boolean
    suspended_lt: Boolean
    deleted_lt: Boolean
    payment_status_id_lt: String
    payment_status_lt: String
    subcription_id_lt: ID
    created_by_lt: ID
    created_at_lt: String
    updated_at_lt: String
    deleted_at_lt: String
    googleAnalyticsCode_lt: String

    _id_lte: ID
    name_lte: String
    default_language_lte: String
    account_status_lte: String
    accessible_lte: Boolean
    active_lte: Boolean
    suspended_lte: Boolean
    deleted_lte: Boolean
    payment_status_id_lte: String
    payment_status_lte: String
    subcription_id_lte: ID
    created_by_lte: ID
    created_at_lte: String
    updated_at_lte: String
    deleted_at_lte: String
    googleAnalyticsCode_lte: String

    _id_ne: ID
    name_ne: String
    default_language_ne: String
    account_status_ne: String
    accessible_ne: Boolean
    active_ne: Boolean
    suspended_ne: Boolean
    deleted_ne: Boolean
    payment_status_id_ne: String
    payment_status_ne: String
    subcription_id_ne: ID
    created_by_ne: ID
    created_at_ne: String
    updated_at_ne: String
    deleted_at_ne: String
    googleAnalyticsCode_ne: String

    _id_in: ID
    name_in: String
    default_language_in: String
    account_status_in: String
    accessible_in: Boolean
    active_in: Boolean
    suspended_in: Boolean
    deleted_in: Boolean
    payment_status_id_in: String
    payment_status_in: String
    subcription_id_in: ID
    created_by_in: ID
    created_at_in: String
    updated_at_in: String
    deleted_at_in: String
    googleAnalyticsCode_in: String

    _id_nin: ID
    name_nin: String
    default_language_nin: String
    account_status_nin: String
    accessible_nin: Boolean
    active_nin: Boolean
    suspended_nin: Boolean
    deleted_nin: Boolean
    payment_status_id_nin: String
    payment_status_nin: String
    subcription_id_nin: ID
    created_by_nin: ID
    created_at_nin: String
    updated_at_nin: String
    deleted_at_nin: String
    googleAnalyticsCode_nin: String

    _id_exists: ID
    name_exists: String
    default_language_exists: String
    account_status_exists: String
    accessible_exists: Boolean
    active_exists: Boolean
    suspended_exists: Boolean
    deleted_exists: Boolean
    payment_status_id_exists: String
    payment_status_exists: String
    subcription_id_exists: ID
    created_by_exists: ID
    created_at_exists: String
    updated_at_exists: String
    deleted_at_exists: String
    googleAnalyticsCode_exists: String
}


input SiteInput {
    _id:ID
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

input SiteInsertInput {
    _id:ID
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

input SiteUpdateInput {
    accessible: Boolean
    accessible_unset :Boolean
    account_status: String
    account_status_unset : String
    active: Boolean
    active_unset :Boolean
    created_at: String
    created_at_unset :Boolean
    created_by: ID
    created_by_unset :Boolean
    default_language: String
    default_language_unset :Boolean
    deleted: Boolean
    deleted_unset :Boolean
    deleted_at: String
    deleted_at_unset :Boolean    
    googleAnalyticsCode: String
    googleAnalyticsCode_unset : String
    name: String
    name_unset : String
    payment_status: String
    payment_status_unset :String
    payment_status_id: String
    payment_status_id_unset : String
    subcription_id: ID
    subcription_id_unset : ID
    suspended: Boolean
    suspended_unset : Boolean
    updated_at: String
    updated_at_unset : String
}

input SiteQueryInput {
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

    _id_gt: ID
    name_gt: String
    default_language_gt: String
    account_status_gt: String
    accessible_gt: Boolean
    active_gt: Boolean
    suspended_gt: Boolean
    deleted_gt: Boolean
    payment_status_id_gt: String
    payment_status_gt: String
    subcription_id_gt: ID
    created_by_gt: ID
    created_at_gt: String
    updated_at_gt: String
    deleted_at_gt: String
    googleAnalyticsCode_gt: String

    _id_gte: ID
    name_gte: String
    default_language_gte: String
    account_status_gte: String
    accessible_gte: Boolean
    active_gte: Boolean
    suspended_gte: Boolean
    deleted_gte: Boolean
    payment_status_id_gte: String
    payment_status_gte: String
    subcription_id_gte: ID
    created_by_gte: ID
    created_at_gte: String
    updated_at_gte: String
    deleted_at_gte: String
    googleAnalyticsCode_gte: String

    _id_lt: ID
    name_lt: String
    default_language_lt: String
    account_status_lt: String
    accessible_lt: Boolean
    active_lt: Boolean
    suspended_lt: Boolean
    deleted_lt: Boolean
    payment_status_id_lt: String
    payment_status_lt: String
    subcription_id_lt: ID
    created_by_lt: ID
    created_at_lt: String
    updated_at_lt: String
    deleted_at_lt: String
    googleAnalyticsCode_lt: String

    _id_lte: ID
    name_lte: String
    default_language_lte: String
    account_status_lte: String
    accessible_lte: Boolean
    active_lte: Boolean
    suspended_lte: Boolean
    deleted_lte: Boolean
    payment_status_id_lte: String
    payment_status_lte: String
    subcription_id_lte: ID
    created_by_lte: ID
    created_at_lte: String
    updated_at_lte: String
    deleted_at_lte: String
    googleAnalyticsCode_lte: String

    _id_ne: ID
    name_ne: String
    default_language_ne: String
    account_status_ne: String
    accessible_ne: Boolean
    active_ne: Boolean
    suspended_ne: Boolean
    deleted_ne: Boolean
    payment_status_id_ne: String
    payment_status_ne: String
    subcription_id_ne: ID
    created_by_ne: ID
    created_at_ne: String
    updated_at_ne: String
    deleted_at_ne: String
    googleAnalyticsCode_ne: String

    _id_in: ID
    name_in: String
    default_language_in: String
    account_status_in: String
    accessible_in: Boolean
    active_in: Boolean
    suspended_in: Boolean
    deleted_in: Boolean
    payment_status_id_in: String
    payment_status_in: String
    subcription_id_in: ID
    created_by_in: ID
    created_at_in: String
    updated_at_in: String
    deleted_at_in: String
    googleAnalyticsCode_in: String

    _id_nin: ID
    name_nin: String
    default_language_nin: String
    account_status_nin: String
    accessible_nin: Boolean
    active_nin: Boolean
    suspended_nin: Boolean
    deleted_nin: Boolean
    payment_status_id_nin: String
    payment_status_nin: String
    subcription_id_nin: ID
    created_by_nin: ID
    created_at_nin: String
    updated_at_nin: String
    deleted_at_nin: String
    googleAnalyticsCode_nin: String

    _id_exists: ID
    name_exists: String
    default_language_exists: String
    account_status_exists: String
    accessible_exists: Boolean
    active_exists: Boolean
    suspended_exists: Boolean
    deleted_exists: Boolean
    payment_status_id_exists: String
    payment_status_exists: String
    subcription_id_exists: ID
    created_by_exists: ID
    created_at_exists: String
    updated_at_exists: String
    deleted_at_exists: String
    googleAnalyticsCode_exists: String
    AND: [SiteQueryInput!]
    OR: [SiteQueryInput!]
}

input PermissionSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input LocationsettingSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input TimingSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input BusinessinfoSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input BusinessSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input AddressSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input AddonSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input RoleSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input UserSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input StaffdetailSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input WorkspaceSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input EventcategorySite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input EventSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input StaffSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}

input AdvancepricingSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
}



enum SiteSortByInput {
    _ID: ASC,
    NAME_ASC 
    DEFAULT_LANGUAGE_ASC 
    ACCOUNT_STATUS_ASC 
    ACCESSIBLE_ASC 
    ACTIVE_ASC 
    SUSPENDED_ASC 
    DELETED_ASC 
    PAYMENT_STATUS_ID_ASC 
    PAYMENT_STATUS_ASC 
    SUBCRIPTION_ID_ASC 
    CREATED_BY_ASC 
    CREATED_AT_ASC 
    UPDATED_AT_ASC 
    DELETED_AT_ASC 
    GOOGLEANALYTICSCODE_ASC 
    _ID: DESC
    NAME_DESC 
    DEFAULT_LANGUAGE_DESC 
    ACCOUNT_STATUS_DESC 
    ACCESSIBLE_DESC 
    ACTIVE_DESC 
    SUSPENDED_DESC 
    DELETED_DESC 
    PAYMENT_STATUS_ID_DESC 
    PAYMENT_STATUS_DESC 
    SUBCRIPTION_ID_DESC 
    CREATED_BY_DESC 
    CREATED_AT_DESC 
    UPDATED_AT_DESC 
    DELETED_AT_DESC 
    GOOGLEANALYTICSCODE_DESC
}

extend type Query {
    getSite: [Site]
}

extend type Mutation {
    addSite(input: SiteInsertInput): Site
    updateSite(siteID: ID!, input: SiteInsertInput): Site
    deleteSite(siteID: ID!): Site
}
`


/*
Site
SiteInput

SiteInsertInput
SiteUpdateInput
SiteQueryInput

PermissionSite_idRelationInput
LocationsettingSite_idRelationInput
TimingSite_idRelationInput
BusinessinfoSite_idRelationInput
BusinessSite_idRelationInput
AddressSite_idRelationInput
AddonSite_idRelationInput
RoleSite_idRelationInput
UserSite_idRelationInput
StaffdetailSite_idRelationInput
WorkspaceSite_idRelationInput
EventcategorySite_idRelationInput
EventSite_idRelationInput
StaffSite_idRelationInput
AdvancepricingSite_idRelationInput

SiteSortByInput
 */