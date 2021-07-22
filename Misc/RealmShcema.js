input LocationQueryInput {
    deleted_at_gt: DateTime
    type_gt: String
    type_nin: [String]
    deleted_at_exists: Boolean
    created_at_ne: DateTime
    type_gte: String
    name_exists: Boolean
    updated_at_in: [DateTime]
    created_at_exists: Boolean
    updated_at_gte: DateTime
    active_ne: Boolean
    type_in: [String]
    created_at_gt: DateTime
    updated_at_gt: DateTime
    name_gte: String
    name_gt: String
    created_at_lt: DateTime
    name_lt: String
    updated_at: DateTime
    _id: ObjectId
    type_lte: String
    updated_at_lte: DateTime
    deleted_at_nin: [DateTime]
    app_integration_need: Boolean
    _id_gte: ObjectId
    name: String
    type_param_exists: Boolean
    updated_at_nin: [DateTime]
    _id_lt: ObjectId
    name_nin: [String]
    deleted_exists: Boolean
    updated_at_ne: DateTime
    type_exists: Boolean
    created_at_nin: [DateTime]
    _id_in: [ObjectId]
    active_exists: Boolean
    name_ne: String
    deleted_at_lte: DateTime
    type_lt: String
    deleted_at: DateTime
    deleted: Boolean
    _id_lte: ObjectId
    active: Boolean
    name_lte: String
    updated_at_lt: DateTime
    created_at_lte: DateTime
    app_integration_need_exists: Boolean
    type: String
    deleted_at_ne: DateTime
    _id_nin: [ObjectId]
    name_in: [String]
    OR: [LocationQueryInput!]
    _id_ne: ObjectId
    deleted_ne: Boolean
    deleted_at_in: [DateTime]
    deleted_at_lt: DateTime
    _id_exists: Boolean
    created_at: DateTime
    type_ne: String
    updated_at_exists: Boolean
    _id_gt: ObjectId
    created_at_gte: DateTime
    created_at_in: [DateTime]
    type_param: Boolean
    app_integration_need_ne: Boolean
    type_param_ne: Boolean
    AND: [LocationQueryInput!]
    deleted_at_gte: DateTime
  }
  
  type Location {
    _id: ObjectId
    active: Boolean
    app_integration_need: Boolean
    created_at: DateTime
    deleted: Boolean
    deleted_at: DateTime
    name: String
    type: String
    type_param: Boolean
    updated_at: DateTime
  }
  
  input BusinesscategoryCreated_byRelationInput {
    link: ObjectId
    create: StaffInsertInput
  }
  
  input PermissionWorkspace_idRelationInput {
    create: WorkspaceInsertInput
    link: ObjectId
  }
  
  scalar ObjectId
  
  input TimingQueryInput {
    work_day_name_ne: String
    end_time_lte: String
    created_at: DateTime
    _id_lte: ObjectId
    created_by: StaffQueryInput
    start_time_exists: Boolean
    work_day_duration_ne: Int
    work_day_id_exists: Boolean
    end_time_gt: String
    type_ne: String
    workspace_ids_nin: [WorkspaceQueryInput]
    start_time_lte: String
    type_gt: String
    name_lt: String
    _id_gt: ObjectId
    end_time_exists: Boolean
    work_day_duration_lte: Int
    timing_order_exists: Boolean
    work_day_duration_gt: Int
    include_weekends_ne: Boolean
    end_time_nin: [String]
    timing_order_lt: Int
    time_zone_gte: String
    work_day_id_gt: Int
    business_hour_ne: Boolean
    work_day_name_nin: [String]
    created_at_in: [DateTime]
    custom_hour: Boolean
    timing_order_gte: Int
    deleted_at_ne: DateTime
    type_gte: String
    location_setting_ids_in: [LocationsettingQueryInput]
    location_setting_ids_exists: Boolean
    name_exists: Boolean
    type_exists: Boolean
    deleted_at_in: [DateTime]
    timing_order_in: [Int]
    time_zone_nin: [String]
    OR: [TimingQueryInput!]
    business_hour: Boolean
    created_at_gt: DateTime
    breaktime_nin: [TimingBreaktimeQueryInput]
    start_time: String
    deleted_at_nin: [DateTime]
    work_day_duration_exists: Boolean
    deleted_at: DateTime
    location_setting_ids_nin: [LocationsettingQueryInput]
    _id_gte: ObjectId
    created_at_exists: Boolean
    time_zone_lt: String
    created_by_exists: Boolean
    name_lte: String
    created_at_lte: DateTime
    work_day_id_lt: Int
    created_at_gte: DateTime
    _id_ne: ObjectId
    updated_at_in: [DateTime]
    work_day_name_exists: Boolean
    created_at_lt: DateTime
    is_override_block: Boolean
    work_day_duration: Int
    work_day_duration_in: [Int]
    workspace_ids: [WorkspaceQueryInput]
    work_day_id_ne: Int
    is_override_block_ne: Boolean
    work_day_id_in: [Int]
    work_day_duration_lt: Int
    type_nin: [String]
    is_override_block_exists: Boolean
    _id_in: [ObjectId]
    created_at_nin: [DateTime]
    business_hour_exists: Boolean
    time_zone_lte: String
    time_zone_gt: String
    start_time_lt: String
    deleted_at_gt: DateTime
    deleted_at_gte: DateTime
    work_day_name_gt: String
    work_day_name_in: [String]
    workspace_ids_in: [WorkspaceQueryInput]
    service_ids_exists: Boolean
    end_time_ne: String
    deleted_at_exists: Boolean
    location_setting_ids: [LocationsettingQueryInput]
    end_time: String
    recurringRule_exists: Boolean
    custom_hour_exists: Boolean
    work_day_id_gte: Int
    type_lte: String
    include_weekends_exists: Boolean
    name_gte: String
    name_nin: [String]
    start_time_ne: String
    updated_at_lt: DateTime
    service_ids_nin: [ObjectId]
    AND: [TimingQueryInput!]
    include_weekends: Boolean
    updated_at_gte: DateTime
    _id_lt: ObjectId
    work_day_duration_gte: Int
    deleted_at_lt: DateTime
    _id_nin: [ObjectId]
    name_ne: String
    _id_exists: Boolean
    updated_at_exists: Boolean
    work_day_name_lt: String
    name_in: [String]
    custom_hour_ne: Boolean
    work_day_id: Int
    workspace_ids_exists: Boolean
    timing_order_lte: Int
    start_time_in: [String]
    end_time_lt: String
    start_time_gt: String
    timing_order_ne: Int
    timing_order_nin: [Int]
    start_time_gte: String
    recurringRule: TimingRecurringRuleQueryInput
    _id: ObjectId
    work_day_name_gte: String
    name: String
    site_id: SiteQueryInput
    updated_at: DateTime
    breaktime_in: [TimingBreaktimeQueryInput]
    end_time_gte: String
    service_ids: [ObjectId]
    updated_at_lte: DateTime
    type_in: [String]
    type: String
    timing_order: Int
    work_day_name: String
    updated_at_nin: [DateTime]
    work_day_id_lte: Int
    site_id_exists: Boolean
    start_time_nin: [String]
    timing_order_gt: Int
    time_zone_exists: Boolean
    breaktime: [TimingBreaktimeQueryInput]
    work_day_id_nin: [Int]
    work_day_name_lte: String
    work_day_duration_nin: [Int]
    type_lt: String
    deleted_at_lte: DateTime
    updated_at_gt: DateTime
    created_at_ne: DateTime
    time_zone_in: [String]
    end_time_in: [String]
    name_gt: String
    breaktime_exists: Boolean
    service_ids_in: [ObjectId]
    time_zone: String
    time_zone_ne: String
    updated_at_ne: DateTime
  }
  
  input BusinessWorkspace_idRelationInput {
    create: [WorkspaceInsertInput]
    link: [ObjectId]
  }
  
  input TimingRecurringRuleQueryInput {
    repeatEvery_gte: Int
    until_lt: DateTime
    until_exists: Boolean
    freq_in: [String]
    freq_gte: String
    repeatEvery_gt: Int
    freq_gt: String
    AND: [TimingRecurringRuleQueryInput!]
    freq: String
    until_ne: DateTime
    repeatEvery_in: [Int]
    until_gt: DateTime
    freq_nin: [String]
    freq_lt: String
    repeatEvery_lte: Int
    until_in: [DateTime]
    until_gte: DateTime
    freq_ne: String
    repeatEvery_lt: Int
    until_lte: DateTime
    OR: [TimingRecurringRuleQueryInput!]
    repeatEvery_nin: [Int]
    until: DateTime
    freq_exists: Boolean
    repeatEvery_ne: Int
    repeatEvery_exists: Boolean
    freq_lte: String
    repeatEvery: Int
    until_nin: [DateTime]
  }
  
  type LocationsettingOncall {
    client_will_call: Boolean
    staff_will_call: Boolean
  }
  
  input LocationsettingVideoUpdateInput {
    type_unset: Boolean
    integration_id: String
    integration_id_unset: Boolean
    type: String
  }
  
  enum StaffdetailSortByInput {
    CREATED_AT_DESC
    DEAFULT_CALENDAR_VIEW_DESC
    INVITATION_STATUS_DESC
    BOOKING_URL_DESC
    CREATED_AT_ASC
    DELETED_AT_ASC
    INVITATION_STATUS_ASC
    IS_ACTIVE_ASC
    SORTING_ID_ASC
    UPDATED_AT_DESC
    _ID_DESC
    DEAFULT_CALENDAR_VIEW_ASC
    CREATED_BY_ASC
    CREATED_BY_DESC
    SITE_ID_DESC
    SORTING_ID_DESC
    _ID_ASC
    BOOKING_URL_ASC
    SITE_ID_ASC
    UPDATED_AT_ASC
    DELETED_AT_DESC
    IS_ACTIVE_DESC
  }
  
  enum BusinessSortByInput {
    CREATED_AT_DESC
    DELETED_AT_DESC
    SITE_ID_ASC
    STAFF_SIZE_DESC
    UPDATED_AT_ASC
    BUSINESS_BRANCH_ASC
    COLOR_CODE_DESC
    UPDATED_AT_DESC
    _ID_ASC
    AVATAR_OR_ICON_DESC
    BUSINESS_BRANCH_DESC
    NAME_ASC
    STAFF_SIZE_ASC
    CREATED_BY_ASC
    DISPLAY_NAME_ASC
    TYPE_ASC
    AVATAR_OR_ICON_PATH_DESC
    CREATED_AT_ASC
    CREATED_BY_DESC
    EMAIL_SIGNATURE_DESC
    NAME_DESC
    SITE_ID_DESC
    TYPE_DESC
    COLOR_CODE_ASC
    DELETED_AT_ASC
    DESCRIPTION_ASC
    DESCRIPTION_DESC
    DISPLAY_NAME_DESC
    WEB_URL_DESC
    _ID_DESC
    AVATAR_OR_ICON_ASC
    AVATAR_OR_ICON_PATH_ASC
    EMAIL_SIGNATURE_ASC
    WEB_URL_ASC
  }
  
  input BusinessinfoPolicyInsertInput {
    cancellation: String
    terms_and_condition: String
    appointment: String
  }
  
  input TimingBreaktimeInsertInput {
    start_time: String
    end_time: String
  }
  
  type Timeformat {
    _id: ObjectId
    business_hour_end: Int
    business_hour_start: Int
    date_format: String
    first_day: Int
    site_id: ObjectId
    timeFormat: Int
    time_zone: String
    workspace_id: ObjectId
  }
  
  enum UserSortByInput {
    SITE_ID_DESC
    _ID_ASC
    _ID_DESC
    PACCESS_ASC
    PACCESS_DESC
    SITE_ID_ASC
  }
  
  input BusinessinfoCreated_byRelationInput {
    link: ObjectId
    create: StaffInsertInput
  }
  
  input LocationsettingWorkspace_idRelationInput {
    create: WorkspaceInsertInput
    link: ObjectId
  }
  
  input BusinessSocial_networkQueryInput {
    link_nin: [String]
    OR: [BusinessSocial_networkQueryInput!]
    network_gt: String
    link_in: [String]
    network_gte: String
    network_lt: String
    link: String
    link_lt: String
    AND: [BusinessSocial_networkQueryInput!]
    network_ne: String
    link_gte: String
    link_ne: String
    network_nin: [String]
    link_lte: String
    network: String
    network_lte: String
    link_exists: Boolean
    link_gt: String
    network_exists: Boolean
    network_in: [String]
  }
  
  input RoleQueryInput {
    is_system_role: Boolean
    active_exists: Boolean
    site_id: SiteQueryInput
    createdOn_utc_gt: DateTime
    _id_lte: ObjectId
    _id_ne: ObjectId
    name_lt: String
    _id_lt: ObjectId
    is_system_role_ne: Boolean
    createdOn_utc_nin: [DateTime]
    OR: [RoleQueryInput!]
    permission_ids: [PermissionQueryInput]
    createdOn_utc_lte: DateTime
    createdOn_utc_lt: DateTime
    permission_ids_exists: Boolean
    _id_in: [ObjectId]
    system_name_in: [String]
    name_exists: Boolean
    createdOn_utc_gte: DateTime
    name_nin: [String]
    name_gt: String
    system_name_gt: String
    site_id_exists: Boolean
    _id_gt: ObjectId
    _id_gte: ObjectId
    system_name_ne: String
    _id: ObjectId
    name_ne: String
    createdOn_utc_ne: DateTime
    is_system_role_exists: Boolean
    system_name_gte: String
    createdOn_utc: DateTime
    createdOn_utc_in: [DateTime]
    system_name: String
    delete_exists: Boolean
    delete_ne: Boolean
    AND: [RoleQueryInput!]
    name_in: [String]
    name_lte: String
    active_ne: Boolean
    active: Boolean
    system_name_lte: String
    system_name_exists: Boolean
    system_name_nin: [String]
    createdOn_utc_exists: Boolean
    delete: Boolean
    workspace_id: WorkspaceQueryInput
    permission_ids_nin: [PermissionQueryInput]
    workspace_id_exists: Boolean
    name: String
    permission_ids_in: [PermissionQueryInput]
    _id_nin: [ObjectId]
    system_name_lt: String
    name_gte: String
    _id_exists: Boolean
  }
  
  type TimingBreaktime {
    end_time: String
    start_time: String
  }
  
  type StaffSocial_network {
    link: String
    network: String
  }
  
  input StaffUser_idRelationInput {
    link: ObjectId
    create: UserInsertInput
  }
  
  input BusinessinfoSite_idRelationInput {
    link: ObjectId
    create: SiteInsertInput
  }
  
  input UserInsertInput {
    delete: Boolean
    is_owener: Boolean
    paccess: ObjectId
    role_ids: UserRole_idsRelationInput
    site_id: UserSite_idRelationInput
    workspace_ids: UserWorkspace_idsRelationInput
    _id: ObjectId
    active: Boolean
  }
  
  input StaffUpdateInput {
    created_at: DateTime
    gender: String
    staff_detail_id: StaffStaff_detail_idRelationInput
    display_name: String
    user_id: StaffUser_idRelationInput
    email_unset: Boolean
    sortingId_inc: Int
    created_at_unset: Boolean
    phone_unset: Boolean
    created_by_unset: Boolean
    deleted_at: DateTime
    title_unset: Boolean
    last_name: String
    employement_from: DateTime
    experience_year: Int
    is_email_verified_unset: Boolean
    experience_year_inc: Int
    color_code: String
    display_name_unset: Boolean
    social_network_unset: Boolean
    is_active: Boolean
    first_name_unset: Boolean
    experience_month_inc: Int
    gender_unset: Boolean
    site_id: StaffSite_idRelationInput
    slug_unset: Boolean
    sortingId: Int
    site_owener: Boolean
    deleted_at_unset: Boolean
    employement_to_unset: Boolean
    workspace_ids_unset: Boolean
    name: String
    site_owener_unset: Boolean
    _id_unset: Boolean
    _id: ObjectId
    social_network: [StaffSocial_networkUpdateInput]
    is_email_verified: Boolean
    staff_detail_id_unset: Boolean
    last_name_unset: Boolean
    avatar_or_icon_path_unset: Boolean
    updated_at_unset: Boolean
    email_verified_date_time: DateTime
    first_name: String
    created_by: StaffCreated_byRelationInput
    phone: [StaffPhoneUpdateInput]
    avatar_or_icon: String
    avatar_or_icon_path: String
    experience_year_unset: Boolean
    title: String
    site_id_unset: Boolean
    experience_month: Int
    avatar_or_icon_unset: Boolean
    name_unset: Boolean
    color_code_unset: Boolean
    email: String
    description: String
    workspace_ids: StaffWorkspace_idsRelationInput
    description_unset: Boolean
    employement_to: DateTime
    updated_at: DateTime
    showSocialShare_unset: Boolean
    email_verified_date_time_unset: Boolean
    experience_month_unset: Boolean
    user_id_unset: Boolean
    is_active_unset: Boolean
    showSocialShare: Boolean
    sortingId_unset: Boolean
    slug: String
    employement_from_unset: Boolean
  }
  
  input LocationsettingInpersonUpdateInput {
    buinsess_address: Boolean
    buinsess_address_unset: Boolean
    buinsess_id: LocationsettingInpersonBuinsess_idRelationInput
    buinsess_id_unset: Boolean
    client_address: Boolean
    client_address_unset: Boolean
  }
  
  input BusinesscategoryQueryInput {
    deleted_at_in: [DateTime]
    type_gt: String
    created_at_gt: DateTime
    type_nin: [String]
    updated_at_in: [DateTime]
    active_exists: Boolean
    updated_at_nin: [DateTime]
    _id_ne: ObjectId
    _id_nin: [ObjectId]
    created_at_ne: DateTime
    category_name_nin: [String]
    created_at_exists: Boolean
    site_id: ObjectId
    category_name_gte: String
    site_id_lt: ObjectId
    created_by_exists: Boolean
    deleted_at_ne: DateTime
    updated_at_ne: DateTime
    category_name_in: [String]
    created_at_lte: DateTime
    _id_gte: ObjectId
    accessible_ne: Boolean
    updated_at_lte: DateTime
    type_lt: String
    created_at_nin: [DateTime]
    created_at_gte: DateTime
    site_id_ne: ObjectId
    deleted_at: DateTime
    updated_at_gt: DateTime
    created_at_in: [DateTime]
    site_id_in: [ObjectId]
    accessible_exists: Boolean
    created_at_lt: DateTime
    deleted_at_lte: DateTime
    category_name_exists: Boolean
    _id_in: [ObjectId]
    AND: [BusinesscategoryQueryInput!]
    category_name_ne: String
    active_ne: Boolean
    type_lte: String
    updated_at: DateTime
    parant_category_id_exists: Boolean
    created_at: DateTime
    type_ne: String
    category_name_gt: String
    OR: [BusinesscategoryQueryInput!]
    deleted_at_gt: DateTime
    type_in: [String]
    _id_exists: Boolean
    deleted_at_exists: Boolean
    site_id_gt: ObjectId
    site_id_lte: ObjectId
    parant_category_id: BusinesscategoryQueryInput
    deleted: Boolean
    _id_lte: ObjectId
    _id_lt: ObjectId
    _id: ObjectId
    updated_at_gte: DateTime
    active: Boolean
    site_id_nin: [ObjectId]
    category_name: String
    deleted_at_lt: DateTime
    deleted_ne: Boolean
    updated_at_lt: DateTime
    site_id_gte: ObjectId
    updated_at_exists: Boolean
    created_by: StaffQueryInput
    category_name_lt: String
    site_id_exists: Boolean
    deleted_at_nin: [DateTime]
    deleted_exists: Boolean
    type: String
    accessible: Boolean
    _id_gt: ObjectId
    deleted_at_gte: DateTime
    type_exists: Boolean
    type_gte: String
    category_name_lte: String
  }
  
  type Address {
    _id: ObjectId
    accessible: Boolean
    account_status: String
    active: Boolean
    address1: String
    address2: String
    business_branch: Boolean
    business_head_ofice: Boolean
    city: String
    country: String
    created_at: DateTime
    created_by: Staff
    default_address: Boolean
    delete: Boolean
    deleted_at: DateTime
    email: String
    latitude: String
    longitude: String
    phone: [AddressPhone]
    site_id: Site
    state: String
    type: String
    updated_at: DateTime
    workspace_id: [Workspace]
    zipCode: String
  }
  
  enum BusinessinfoSortByInput {
    BUSINESS_HOUR_START_DESC
    CREATED_BY_ASC
    DATE_FORMAT_DESC
    TIMEFORMAT_DESC
    TIME_ZONE_ASC
    UPDATED_AT_DESC
    CREATED_AT_DESC
    SITE_ID_ASC
    UPDATED_AT_ASC
    BUSINESS_HOUR_END_DESC
    CREATED_BY_DESC
    TIME_ZONE_DESC
    _ID_DESC
    DATE_FORMAT_ASC
    DELETED_AT_ASC
    TAX_NO_ASC
    _ID_ASC
    BOOKING_LINKS_DESC
    SITE_ID_DESC
    TAX_PERCENTAGE_ASC
    TAX_PERCENTAGE_DESC
    BUSINESS_HOUR_END_ASC
    FIRST_DAY_DESC
    TIMEFORMAT_ASC
    BUSINESS_HOUR_START_ASC
    CREATED_AT_ASC
    DELETED_AT_DESC
    FIRST_DAY_ASC
    BOOKING_LINKS_ASC
    TAX_NO_DESC
  }
  
  input TimingWorkspace_idsRelationInput {
    create: [WorkspaceInsertInput]
    link: [ObjectId]
  }
  
  input TimingCreated_byRelationInput {
    create: StaffInsertInput
    link: ObjectId
  }
  
  type LocationsettingInperson {
    buinsess_address: Boolean
    buinsess_id: Business
    client_address: Boolean
  }
  
  type BusinessinfoPolicy {
    appointment: String
    cancellation: String
    terms_and_condition: String
  }
  
  type BusinessSocial_network {
    link: String
    network: String
  }
  
  enum TimeformatSortByInput {
    WORKSPACE_ID_ASC
    WORKSPACE_ID_DESC
    _ID_ASC
    DATE_FORMAT_ASC
    FIRST_DAY_ASC
    FIRST_DAY_DESC
    TIMEFORMAT_ASC
    TIME_ZONE_DESC
    _ID_DESC
    BUSINESS_HOUR_START_ASC
    BUSINESS_HOUR_START_DESC
    SITE_ID_ASC
    TIMEFORMAT_DESC
    SITE_ID_DESC
    TIME_ZONE_ASC
    BUSINESS_HOUR_END_ASC
    BUSINESS_HOUR_END_DESC
    DATE_FORMAT_DESC
  }
  
  input PermissionUpdateInput {
    _id: ObjectId
    category: String
    name: String
    name_unset: Boolean
    category_unset: Boolean
    system_name: String
    workspace_id: PermissionWorkspace_idRelationInput
    workspace_id_unset: Boolean
    _id_unset: Boolean
    site_id_unset: Boolean
    site_id: PermissionSite_idRelationInput
    system_name_unset: Boolean
  }
  
  input TimingBreaktimeQueryInput {
    end_time_gt: String
    start_time_ne: String
    start_time_nin: [String]
    start_time_lte: String
    OR: [TimingBreaktimeQueryInput!]
    end_time_lte: String
    start_time_exists: Boolean
    AND: [TimingBreaktimeQueryInput!]
    end_time_ne: String
    start_time_lt: String
    end_time_gte: String
    end_time_exists: Boolean
    end_time: String
    start_time: String
    end_time_lt: String
    end_time_in: [String]
    start_time_gte: String
    start_time_in: [String]
    end_time_nin: [String]
    start_time_gt: String
  }
  
  type Site {
    _id: ObjectId
    accessible: Boolean
    account_status: String
    active: Boolean
    created_at: DateTime
    created_by: ObjectId
    default_language: String
    delete: Boolean
    deleted_at: DateTime
    googleAnalyticsCode: String
    name: String
    payment_status: String
    payment_status_id: String
    subcription_id: ObjectId
    suspended: Boolean
    updated_at: DateTime
  }
  
  input StaffSite_idRelationInput {
    link: ObjectId
    create: SiteInsertInput
  }
  
  input StaffdetailSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input UserRole_idsRelationInput {
    link: [ObjectId]
    create: [RoleInsertInput]
  }
  
  input StaffdetailUpdateInput {
    is_login: Boolean
    is_active_unset: Boolean
    sync: [StaffdetailSyncUpdateInput]
    updated_at_unset: Boolean
    invitationStatus_unset: Boolean
    sortingId: Int
    is_service_provider_unset: Boolean
    timing_ids: StaffdetailTiming_idsRelationInput
    address_ids_unset: Boolean
    sortingId_inc: Int
    booking_url: String
    is_sync_enabled: Boolean
    _id: ObjectId
    business_timings: Boolean
    _id_unset: Boolean
    deleted_at: DateTime
    paid_plan_commission: Boolean
    is_login_unset: Boolean
    address_ids: StaffdetailAddress_idsRelationInput
    staff_commission: Boolean
    is_sync_enabled_unset: Boolean
    sortingId_unset: Boolean
    deafult_calendar_view_unset: Boolean
    business_id_unset: Boolean
    services_id: [String]
    site_id: StaffdetailSite_idRelationInput
    updated_at: DateTime
    sync_unset: Boolean
    is_active: String
    created_by: StaffdetailCreated_byRelationInput
    created_at: DateTime
    is_service_provider: Boolean
    business_id: StaffdetailBusiness_idRelationInput
    deleted_at_unset: Boolean
    paid_plan_commission_unset: Boolean
    timing_ids_unset: Boolean
    workspace_id: StaffdetailWorkspace_idRelationInput
    invitationStatus: String
    created_by_unset: Boolean
    staff_commission_unset: Boolean
    site_id_unset: Boolean
    created_at_unset: Boolean
    deafult_calendar_view: String
    workspace_id_unset: Boolean
    business_timings_unset: Boolean
    booking_url_unset: Boolean
    services_id_unset: Boolean
  }
  
  input WorkspaceQueryInput {
    default_language: String
    display_order_nin: [Int]
    default_language_nin: [String]
    _id_exists: Boolean
    created_at_lt: DateTime
    time_zone_in: [String]
    display_order_gte: Int
    time_zone_lt: String
    display_name_lte: String
    color_code_ne: String
    created_by_in: [ObjectId]
    created_at_nin: [DateTime]
    created_by_lt: ObjectId
    type_gte: String
    time_zone_lte: String
    color_code_lte: String
    color_code_exists: Boolean
    deleted_at_gt: DateTime
    name_lt: String
    updated_at: DateTime
    time_zone_nin: [String]
    created_at_gte: DateTime
    accessible_exists: Boolean
    _id_lt: ObjectId
    default_language_lt: String
    created_at_gt: DateTime
    type_nin: [String]
    deleted_at_nin: [DateTime]
    _id: ObjectId
    name_in: [String]
    name: String
    type_exists: Boolean
    new_business_ne: Boolean
    is_owner_ne: Boolean
    created_at_in: [DateTime]
    active_exists: Boolean
    time_zone_ne: String
    display_name_gt: String
    site_id_exists: Boolean
    created_by_exists: Boolean
    type_lt: String
    type: String
    AND: [WorkspaceQueryInput!]
    name_ne: String
    color_code_gt: String
    created_by_ne: ObjectId
    is_owner: Boolean
    site_id: SiteQueryInput
    time_zone_gt: String
    display_order_ne: Int
    _id_ne: ObjectId
    deleted_at_lt: DateTime
    created_by_nin: [ObjectId]
    deleted_at_in: [DateTime]
    accessible_ne: Boolean
    updated_at_gt: DateTime
    display_name: String
    type_ne: String
    default_language_in: [String]
    updated_at_lt: DateTime
    display_order_lt: Int
    deleted_at_lte: DateTime
    created_by_gte: ObjectId
    updated_at_lte: DateTime
    type_gt: String
    time_zone: String
    color_code_gte: String
    updated_at_in: [DateTime]
    color_code_lt: String
    created_at_lte: DateTime
    name_nin: [String]
    display_order_in: [Int]
    display_name_exists: Boolean
    color_code_nin: [String]
    new_business_exists: Boolean
    created_by_gt: ObjectId
    updated_at_ne: DateTime
    default_language_lte: String
    default_language_gt: String
    _id_gt: ObjectId
    default_language_gte: String
    name_gt: String
    delete: Boolean
    time_zone_gte: String
    color_code: String
    created_at_exists: Boolean
    color_code_in: [String]
    deleted_at_exists: Boolean
    updated_at_nin: [DateTime]
    created_by: ObjectId
    type_lte: String
    type_in: [String]
    OR: [WorkspaceQueryInput!]
    delete_ne: Boolean
    updated_at_exists: Boolean
    default_language_ne: String
    delete_exists: Boolean
    updated_at_gte: DateTime
    _id_gte: ObjectId
    name_gte: String
    name_exists: Boolean
    display_order_exists: Boolean
    display_name_ne: String
    is_owner_exists: Boolean
    display_name_in: [String]
    default_language_exists: Boolean
    name_lte: String
    _id_in: [ObjectId]
    display_name_nin: [String]
    _id_nin: [ObjectId]
    display_name_lt: String
    deleted_at_ne: DateTime
    created_at: DateTime
    created_at_ne: DateTime
    deleted_at: DateTime
    display_name_gte: String
    time_zone_exists: Boolean
    active: Boolean
    new_business: Boolean
    display_order_gt: Int
    accessible: Boolean
    _id_lte: ObjectId
    active_ne: Boolean
    display_order_lte: Int
    created_by_lte: ObjectId
    display_order: Int
    deleted_at_gte: DateTime
  }
  
  input LocationsettingInpersonQueryInput {
    client_address_ne: Boolean
    client_address_exists: Boolean
    buinsess_address_exists: Boolean
    client_address: Boolean
    AND: [LocationsettingInpersonQueryInput!]
    OR: [LocationsettingInpersonQueryInput!]
    buinsess_address: Boolean
    buinsess_id: BusinessQueryInput
    buinsess_address_ne: Boolean
    buinsess_id_exists: Boolean
  }
  
  type Locationsetting {
    _id: ObjectId
    active: Boolean
    created_at: DateTime
    created_by: Staff
    deleted: Boolean
    deleted_at: DateTime
    inperson: LocationsettingInperson
    location_id: Location
    oncall: LocationsettingOncall
    site_id: Site
    updated_at: DateTime
    video: LocationsettingVideo
    workspace_id: Workspace
  }
  
  input LocationsettingCreated_byRelationInput {
    link: ObjectId
    create: StaffInsertInput
  }
  
  input AddressQueryInput {
    type_ne: String
    created_at_gte: DateTime
    country_exists: Boolean
    zipCode: String
    account_status_lte: String
    workspace_id: [WorkspaceQueryInput]
    type_gte: String
    longitude_lt: String
    default_address_ne: Boolean
    _id_lte: ObjectId
    created_at_nin: [DateTime]
    zipCode_gte: String
    _id_exists: Boolean
    address2_gte: String
    created_at_in: [DateTime]
    email_gte: String
    workspace_id_exists: Boolean
    state_lte: String
    address1_lte: String
    account_status_in: [String]
    email_in: [String]
    email_nin: [String]
    phone_in: [AddressPhoneQueryInput]
    city_gt: String
    updated_at: DateTime
    address2_nin: [String]
    email: String
    delete: Boolean
    created_at_lt: DateTime
    updated_at_ne: DateTime
    created_at_ne: DateTime
    address2_lt: String
    deleted_at_nin: [DateTime]
    latitude_ne: String
    latitude_exists: Boolean
    type_nin: [String]
    updated_at_lt: DateTime
    active_exists: Boolean
    address2_lte: String
    zipCode_gt: String
    zipCode_nin: [String]
    account_status: String
    updated_at_lte: DateTime
    address1_in: [String]
    deleted_at_in: [DateTime]
    address1_gte: String
    type_lte: String
    longitude_ne: String
    deleted_at: DateTime
    _id_in: [ObjectId]
    created_at_gt: DateTime
    longitude_gte: String
    country_in: [String]
    type_gt: String
    zipCode_lt: String
    address2_in: [String]
    zipCode_lte: String
    phone_nin: [AddressPhoneQueryInput]
    delete_exists: Boolean
    state_nin: [String]
    account_status_lt: String
    deleted_at_ne: DateTime
    type: String
    type_lt: String
    longitude_exists: Boolean
    city_gte: String
    latitude_gte: String
    AND: [AddressQueryInput!]
    state_lt: String
    zipCode_in: [String]
    address1_gt: String
    address1: String
    state_in: [String]
    created_by: StaffQueryInput
    city_lt: String
    deleted_at_lte: DateTime
    city: String
    updated_at_gt: DateTime
    email_lt: String
    longitude: String
    account_status_nin: [String]
    _id_ne: ObjectId
    business_head_ofice_ne: Boolean
    address1_lt: String
    accessible_ne: Boolean
    default_address_exists: Boolean
    longitude_in: [String]
    created_at: DateTime
    state_exists: Boolean
    active: Boolean
    email_lte: String
    site_id_exists: Boolean
    address2_exists: Boolean
    city_ne: String
    workspace_id_nin: [WorkspaceQueryInput]
    _id_gte: ObjectId
    updated_at_exists: Boolean
    active_ne: Boolean
    city_in: [String]
    _id_lt: ObjectId
    latitude_lt: String
    country_nin: [String]
    latitude_in: [String]
    account_status_gt: String
    address2_ne: String
    deleted_at_gt: DateTime
    phone_exists: Boolean
    country_gte: String
    state_gte: String
    latitude_lte: String
    country_ne: String
    state: String
    country_gt: String
    address2_gt: String
    latitude: String
    updated_at_nin: [DateTime]
    longitude_lte: String
    email_ne: String
    account_status_exists: Boolean
    email_gt: String
    created_at_exists: Boolean
    business_head_ofice: Boolean
    _id: ObjectId
    delete_ne: Boolean
    address2: String
    latitude_nin: [String]
    email_exists: Boolean
    state_gt: String
    latitude_gt: String
    account_status_gte: String
    accessible: Boolean
    OR: [AddressQueryInput!]
    longitude_nin: [String]
    accessible_exists: Boolean
    type_exists: Boolean
    address1_exists: Boolean
    workspace_id_in: [WorkspaceQueryInput]
    city_lte: String
    default_address: Boolean
    country: String
    city_exists: Boolean
    zipCode_ne: String
    business_head_ofice_exists: Boolean
    address1_nin: [String]
    business_branch: Boolean
    _id_gt: ObjectId
    country_lte: String
    address1_ne: String
    city_nin: [String]
    business_branch_ne: Boolean
    account_status_ne: String
    updated_at_in: [DateTime]
    country_lt: String
    zipCode_exists: Boolean
    state_ne: String
    longitude_gt: String
    deleted_at_exists: Boolean
    type_in: [String]
    deleted_at_gte: DateTime
    site_id: SiteQueryInput
    _id_nin: [ObjectId]
    updated_at_gte: DateTime
    phone: [AddressPhoneQueryInput]
    created_at_lte: DateTime
    created_by_exists: Boolean
    deleted_at_lt: DateTime
    business_branch_exists: Boolean
  }
  
  input RoleWorkspace_idRelationInput {
    create: WorkspaceInsertInput
    link: ObjectId
  }
  
  input BusinesscategoryUpdateInput {
    parant_category_id: BusinesscategoryParant_category_idRelationInput
    active_unset: Boolean
    updated_at: DateTime
    deleted: Boolean
    accessible_unset: Boolean
    created_at: DateTime
    site_id_unset: Boolean
    updated_at_unset: Boolean
    parant_category_id_unset: Boolean
    category_name_unset: Boolean
    accessible: Boolean
    deleted_at_unset: Boolean
    created_by: BusinesscategoryCreated_byRelationInput
    created_by_unset: Boolean
    category_name: String
    _id_unset: Boolean
    type_unset: Boolean
    _id: ObjectId
    created_at_unset: Boolean
    active: Boolean
    site_id: ObjectId
    type: String
    deleted_unset: Boolean
    deleted_at: DateTime
  }
  
  input StaffdetailAddress_idsRelationInput {
    create: [AddressInsertInput]
    link: [ObjectId]
  }
  
  input LocationsettingInpersonInsertInput {
    buinsess_address: Boolean
    buinsess_id: LocationsettingInpersonBuinsess_idRelationInput
    client_address: Boolean
  }
  
  input TimingUpdateInput {
    timing_order_inc: Int
    type_unset: Boolean
    start_time: String
    work_day_duration_inc: Int
    created_by: TimingCreated_byRelationInput
    _id: ObjectId
    work_day_duration: Int
    created_by_unset: Boolean
    updated_at_unset: Boolean
    location_setting_ids: TimingLocation_setting_idsRelationInput
    end_time: String
    recurringRule_unset: Boolean
    type: String
    start_time_unset: Boolean
    time_zone: String
    work_day_name_unset: Boolean
    include_weekends_unset: Boolean
    created_at_unset: Boolean
    breaktime: [TimingBreaktimeUpdateInput]
    custom_hour_unset: Boolean
    include_weekends: Boolean
    work_day_id_inc: Int
    workspace_ids_unset: Boolean
    work_day_id_unset: Boolean
    end_time_unset: Boolean
    work_day_name: String
    work_day_duration_unset: Boolean
    service_ids_unset: Boolean
    work_day_id: Int
    timing_order: Int
    is_override_block_unset: Boolean
    recurringRule: TimingRecurringRuleUpdateInput
    is_override_block: Boolean
    time_zone_unset: Boolean
    site_id_unset: Boolean
    site_id: TimingSite_idRelationInput
    _id_unset: Boolean
    deleted_at: DateTime
    created_at: DateTime
    business_hour: Boolean
    custom_hour: Boolean
    location_setting_ids_unset: Boolean
    business_hour_unset: Boolean
    name: String
    breaktime_unset: Boolean
    deleted_at_unset: Boolean
    name_unset: Boolean
    timing_order_unset: Boolean
    service_ids: [ObjectId]
    updated_at: DateTime
    workspace_ids: TimingWorkspace_idsRelationInput
  }
  
  input TimeformatInsertInput {
    workspace_id: ObjectId
    business_hour_end: Int
    business_hour_start: Int
    date_format: String
    first_day: Int
    timeFormat: Int
    time_zone: String
    _id: ObjectId
    site_id: ObjectId
  }
  
  type StaffdetailSync {
    key: String
    type: String
  }
  
  input TimeformatQueryInput {
    first_day: Int
    first_day_gte: Int
    _id: ObjectId
    timeFormat_ne: Int
    time_zone_exists: Boolean
    timeFormat_lt: Int
    business_hour_start_in: [Int]
    _id_lt: ObjectId
    first_day_in: [Int]
    timeFormat_in: [Int]
    first_day_exists: Boolean
    business_hour_start_ne: Int
    business_hour_end_lt: Int
    time_zone_gt: String
    date_format_gt: String
    site_id_gt: ObjectId
    site_id_lt: ObjectId
    workspace_id: ObjectId
    workspace_id_in: [ObjectId]
    business_hour_start_lte: Int
    timeFormat_gt: Int
    site_id_lte: ObjectId
    time_zone_gte: String
    time_zone_nin: [String]
    _id_nin: [ObjectId]
    first_day_lt: Int
    site_id_exists: Boolean
    business_hour_end_gte: Int
    _id_gte: ObjectId
    site_id_ne: ObjectId
    business_hour_start_exists: Boolean
    timeFormat_gte: Int
    business_hour_end_lte: Int
    business_hour_start: Int
    _id_gt: ObjectId
    site_id_in: [ObjectId]
    date_format_gte: String
    timeFormat_nin: [Int]
    timeFormat_lte: Int
    business_hour_end_nin: [Int]
    first_day_gt: Int
    AND: [TimeformatQueryInput!]
    time_zone: String
    first_day_ne: Int
    _id_exists: Boolean
    business_hour_end_in: [Int]
    first_day_nin: [Int]
    workspace_id_lte: ObjectId
    date_format_lte: String
    business_hour_end_gt: Int
    date_format_nin: [String]
    time_zone_lt: String
    date_format_in: [String]
    time_zone_lte: String
    workspace_id_exists: Boolean
    timeFormat: Int
    date_format_lt: String
    _id_in: [ObjectId]
    OR: [TimeformatQueryInput!]
    business_hour_end: Int
    date_format_ne: String
    site_id_nin: [ObjectId]
    business_hour_end_exists: Boolean
    time_zone_in: [String]
    workspace_id_nin: [ObjectId]
    first_day_lte: Int
    business_hour_end_ne: Int
    workspace_id_ne: ObjectId
    site_id_gte: ObjectId
    date_format: String
    business_hour_start_nin: [Int]
    time_zone_ne: String
    business_hour_start_lt: Int
    date_format_exists: Boolean
    business_hour_start_gte: Int
    site_id: ObjectId
    business_hour_start_gt: Int
    workspace_id_gte: ObjectId
    _id_ne: ObjectId
    timeFormat_exists: Boolean
    _id_lte: ObjectId
    workspace_id_lt: ObjectId
    workspace_id_gt: ObjectId
  }
  
  type Mutation {
    deleteManyAddresses(query: AddressQueryInput): DeleteManyPayload
    deleteManyBusinesscategories(query: BusinesscategoryQueryInput): DeleteManyPayload
    deleteManyBusinesses(query: BusinessQueryInput): DeleteManyPayload
    deleteManyBusinessinfos(query: BusinessinfoQueryInput): DeleteManyPayload
    deleteManyLocations(query: LocationQueryInput): DeleteManyPayload
    deleteManyLocationsettings(query: LocationsettingQueryInput): DeleteManyPayload
    deleteManyPermissions(query: PermissionQueryInput): DeleteManyPayload
    deleteManyRoles(query: RoleQueryInput): DeleteManyPayload
    deleteManySites(query: SiteQueryInput): DeleteManyPayload
    deleteManyStaffdetails(query: StaffdetailQueryInput): DeleteManyPayload
    deleteManyStaffs(query: StaffQueryInput): DeleteManyPayload
    deleteManyTimeformats(query: TimeformatQueryInput): DeleteManyPayload
    deleteManyTimings(query: TimingQueryInput): DeleteManyPayload
    deleteManyUsers(query: UserQueryInput): DeleteManyPayload
    deleteManyWorkspaces(query: WorkspaceQueryInput): DeleteManyPayload
    deleteOneAddress(query: AddressQueryInput!): Address
    deleteOneBusiness(query: BusinessQueryInput!): Business
    deleteOneBusinesscategory(query: BusinesscategoryQueryInput!): Businesscategory
    deleteOneBusinessinfo(query: BusinessinfoQueryInput!): Businessinfo
    deleteOneLocation(query: LocationQueryInput!): Location
    deleteOneLocationsetting(query: LocationsettingQueryInput!): Locationsetting
    deleteOnePermission(query: PermissionQueryInput!): Permission
    deleteOneRole(query: RoleQueryInput!): Role
    deleteOneSite(query: SiteQueryInput!): Site
    deleteOneStaff(query: StaffQueryInput!): Staff
    deleteOneStaffdetail(query: StaffdetailQueryInput!): Staffdetail
    deleteOneTimeformat(query: TimeformatQueryInput!): Timeformat
    deleteOneTiming(query: TimingQueryInput!): Timing
    deleteOneUser(query: UserQueryInput!): User
    deleteOneWorkspace(query: WorkspaceQueryInput!): Workspace
    insertManyAddresses(data: [AddressInsertInput!]!): InsertManyPayload
    insertManyBusinesscategories(data: [BusinesscategoryInsertInput!]!): InsertManyPayload
    insertManyBusinesses(data: [BusinessInsertInput!]!): InsertManyPayload
    insertManyBusinessinfos(data: [BusinessinfoInsertInput!]!): InsertManyPayload
    insertManyLocations(data: [LocationInsertInput!]!): InsertManyPayload
    insertManyLocationsettings(data: [LocationsettingInsertInput!]!): InsertManyPayload
    insertManyPermissions(data: [PermissionInsertInput!]!): InsertManyPayload
    insertManyRoles(data: [RoleInsertInput!]!): InsertManyPayload
    insertManySites(data: [SiteInsertInput!]!): InsertManyPayload
    insertManyStaffdetails(data: [StaffdetailInsertInput!]!): InsertManyPayload
    insertManyStaffs(data: [StaffInsertInput!]!): InsertManyPayload
    insertManyTimeformats(data: [TimeformatInsertInput!]!): InsertManyPayload
    insertManyTimings(data: [TimingInsertInput!]!): InsertManyPayload
    insertManyUsers(data: [UserInsertInput!]!): InsertManyPayload
    insertManyWorkspaces(data: [WorkspaceInsertInput!]!): InsertManyPayload
    insertOneAddress(data: AddressInsertInput!): Address
    insertOneBusiness(data: BusinessInsertInput!): Business
    insertOneBusinesscategory(data: BusinesscategoryInsertInput!): Businesscategory
    insertOneBusinessinfo(data: BusinessinfoInsertInput!): Businessinfo
    insertOneLocation(data: LocationInsertInput!): Location
    insertOneLocationsetting(data: LocationsettingInsertInput!): Locationsetting
    insertOnePermission(data: PermissionInsertInput!): Permission
    insertOneRole(data: RoleInsertInput!): Role
    insertOneSite(data: SiteInsertInput!): Site
    insertOneStaff(data: StaffInsertInput!): Staff
    insertOneStaffdetail(data: StaffdetailInsertInput!): Staffdetail
    insertOneTimeformat(data: TimeformatInsertInput!): Timeformat
    insertOneTiming(data: TimingInsertInput!): Timing
    insertOneUser(data: UserInsertInput!): User
    insertOneWorkspace(data: WorkspaceInsertInput!): Workspace
    replaceOneAddress(query: AddressQueryInput, data: AddressInsertInput!): Address
    replaceOneBusiness(query: BusinessQueryInput, data: BusinessInsertInput!): Business
    replaceOneBusinesscategory(query: BusinesscategoryQueryInput, data: BusinesscategoryInsertInput!): Businesscategory
    replaceOneBusinessinfo(query: BusinessinfoQueryInput, data: BusinessinfoInsertInput!): Businessinfo
    replaceOneLocation(data: LocationInsertInput!, query: LocationQueryInput): Location
    replaceOneLocationsetting(query: LocationsettingQueryInput, data: LocationsettingInsertInput!): Locationsetting
    replaceOnePermission(query: PermissionQueryInput, data: PermissionInsertInput!): Permission
    replaceOneRole(query: RoleQueryInput, data: RoleInsertInput!): Role
    replaceOneSite(query: SiteQueryInput, data: SiteInsertInput!): Site
    replaceOneStaff(query: StaffQueryInput, data: StaffInsertInput!): Staff
    replaceOneStaffdetail(data: StaffdetailInsertInput!, query: StaffdetailQueryInput): Staffdetail
    replaceOneTimeformat(query: TimeformatQueryInput, data: TimeformatInsertInput!): Timeformat
    replaceOneTiming(query: TimingQueryInput, data: TimingInsertInput!): Timing
    replaceOneUser(query: UserQueryInput, data: UserInsertInput!): User
    replaceOneWorkspace(query: WorkspaceQueryInput, data: WorkspaceInsertInput!): Workspace
    updateManyAddresses(query: AddressQueryInput, set: AddressUpdateInput!): UpdateManyPayload
    updateManyBusinesscategories(query: BusinesscategoryQueryInput, set: BusinesscategoryUpdateInput!): UpdateManyPayload
    updateManyBusinesses(query: BusinessQueryInput, set: BusinessUpdateInput!): UpdateManyPayload
    updateManyBusinessinfos(query: BusinessinfoQueryInput, set: BusinessinfoUpdateInput!): UpdateManyPayload
    updateManyLocations(query: LocationQueryInput, set: LocationUpdateInput!): UpdateManyPayload
    updateManyLocationsettings(query: LocationsettingQueryInput, set: LocationsettingUpdateInput!): UpdateManyPayload
    updateManyPermissions(query: PermissionQueryInput, set: PermissionUpdateInput!): UpdateManyPayload
    updateManyRoles(query: RoleQueryInput, set: RoleUpdateInput!): UpdateManyPayload
    updateManySites(set: SiteUpdateInput!, query: SiteQueryInput): UpdateManyPayload
    updateManyStaffdetails(query: StaffdetailQueryInput, set: StaffdetailUpdateInput!): UpdateManyPayload
    updateManyStaffs(query: StaffQueryInput, set: StaffUpdateInput!): UpdateManyPayload
    updateManyTimeformats(query: TimeformatQueryInput, set: TimeformatUpdateInput!): UpdateManyPayload
    updateManyTimings(query: TimingQueryInput, set: TimingUpdateInput!): UpdateManyPayload
    updateManyUsers(query: UserQueryInput, set: UserUpdateInput!): UpdateManyPayload
    updateManyWorkspaces(set: WorkspaceUpdateInput!, query: WorkspaceQueryInput): UpdateManyPayload
    updateOneAddress(query: AddressQueryInput, set: AddressUpdateInput!): Address
    updateOneBusiness(query: BusinessQueryInput, set: BusinessUpdateInput!): Business
    updateOneBusinesscategory(query: BusinesscategoryQueryInput, set: BusinesscategoryUpdateInput!): Businesscategory
    updateOneBusinessinfo(query: BusinessinfoQueryInput, set: BusinessinfoUpdateInput!): Businessinfo
    updateOneLocation(query: LocationQueryInput, set: LocationUpdateInput!): Location
    updateOneLocationsetting(query: LocationsettingQueryInput, set: LocationsettingUpdateInput!): Locationsetting
    updateOnePermission(query: PermissionQueryInput, set: PermissionUpdateInput!): Permission
    updateOneRole(query: RoleQueryInput, set: RoleUpdateInput!): Role
    updateOneSite(query: SiteQueryInput, set: SiteUpdateInput!): Site
    updateOneStaff(query: StaffQueryInput, set: StaffUpdateInput!): Staff
    updateOneStaffdetail(query: StaffdetailQueryInput, set: StaffdetailUpdateInput!): Staffdetail
    updateOneTimeformat(query: TimeformatQueryInput, set: TimeformatUpdateInput!): Timeformat
    updateOneTiming(query: TimingQueryInput, set: TimingUpdateInput!): Timing
    updateOneUser(query: UserQueryInput, set: UserUpdateInput!): User
    updateOneWorkspace(query: WorkspaceQueryInput, set: WorkspaceUpdateInput!): Workspace
    upsertOneAddress(query: AddressQueryInput, data: AddressInsertInput!): Address
    upsertOneBusiness(query: BusinessQueryInput, data: BusinessInsertInput!): Business
    upsertOneBusinesscategory(query: BusinesscategoryQueryInput, data: BusinesscategoryInsertInput!): Businesscategory
    upsertOneBusinessinfo(query: BusinessinfoQueryInput, data: BusinessinfoInsertInput!): Businessinfo
    upsertOneLocation(query: LocationQueryInput, data: LocationInsertInput!): Location
    upsertOneLocationsetting(data: LocationsettingInsertInput!, query: LocationsettingQueryInput): Locationsetting
    upsertOnePermission(query: PermissionQueryInput, data: PermissionInsertInput!): Permission
    upsertOneRole(query: RoleQueryInput, data: RoleInsertInput!): Role
    upsertOneSite(query: SiteQueryInput, data: SiteInsertInput!): Site
    upsertOneStaff(query: StaffQueryInput, data: StaffInsertInput!): Staff
    upsertOneStaffdetail(query: StaffdetailQueryInput, data: StaffdetailInsertInput!): Staffdetail
    upsertOneTimeformat(data: TimeformatInsertInput!, query: TimeformatQueryInput): Timeformat
    upsertOneTiming(query: TimingQueryInput, data: TimingInsertInput!): Timing
    upsertOneUser(query: UserQueryInput, data: UserInsertInput!): User
    upsertOneWorkspace(query: WorkspaceQueryInput, data: WorkspaceInsertInput!): Workspace
  }
  
  input StaffSocial_networkInsertInput {
    link: String
    network: String
  }
  
  input TimingRecurringRuleInsertInput {
    freq: String
    repeatEvery: Int
    until: DateTime
  }
  
  input BusinessinfoQueryInput {
    created_at_lte: DateTime
    created_at: DateTime
    timing_ids: [ObjectId]
    updated_at_gte: DateTime
    bookingLinks_lt: String
    delete: Boolean
    tax_no_gte: String
    time_zone_gte: String
    updated_at_ne: DateTime
    AND: [BusinessinfoQueryInput!]
    date_format_gt: String
    first_day_ne: Int
    business_hour_end: Int
    business_category: [BusinesscategoryQueryInput]
    tax_no_ne: String
    accessible_ne: Boolean
    business_hour_end_gte: Int
    updated_at_lt: DateTime
    active_ne: Boolean
    _id_ne: ObjectId
    tax_no_lte: String
    bookingLinks: String
    date_format_ne: String
    business_hour_end_lte: Int
    restrictedDays_exists: Boolean
    timeFormat: Int
    restrictedDays_in: [DateTime]
    time_zone_lt: String
    created_at_lt: DateTime
    _id_gte: ObjectId
    first_day_lt: Int
    updated_at: DateTime
    workspace_id_nin: [WorkspaceQueryInput]
    business_category_in: [BusinesscategoryQueryInput]
    _id_exists: Boolean
    tax_no_exists: Boolean
    delete_exists: Boolean
    address_ids_nin: [AddressQueryInput]
    business_hour_start_nin: [Int]
    OR: [BusinessinfoQueryInput!]
    tax_no_gt: String
    date_format_in: [String]
    deleted_at_lt: DateTime
    tax_percentage_in: [Int]
    created_at_gte: DateTime
    date_format: String
    restrictedDays: [DateTime]
    time_zone_in: [String]
    bookingLinks_gte: String
    bookingLinks_gt: String
    first_day_gte: Int
    _id: ObjectId
    is_tax: Boolean
    created_by: StaffQueryInput
    time_zone: String
    deleted_at_gte: DateTime
    updated_at_gt: DateTime
    first_day_nin: [Int]
    date_format_lt: String
    deleted_at_ne: DateTime
    business_hour_end_in: [Int]
    is_tax_exists: Boolean
    accessible_exists: Boolean
    business_hour_end_exists: Boolean
    deleted_at_exists: Boolean
    deleted_at: DateTime
    tax_percentage_exists: Boolean
    restrictedDays_nin: [DateTime]
    first_day_in: [Int]
    _id_in: [ObjectId]
    date_format_exists: Boolean
    created_at_gt: DateTime
    business_hour_end_ne: Int
    _id_lte: ObjectId
    tax_no_nin: [String]
    business_hour_end_gt: Int
    date_format_gte: String
    business_hour_start_gte: Int
    address_ids_in: [AddressQueryInput]
    created_at_in: [DateTime]
    accessible: Boolean
    date_format_nin: [String]
    created_at_nin: [DateTime]
    _id_nin: [ObjectId]
    first_day_lte: Int
    timing_ids_nin: [ObjectId]
    site_id_exists: Boolean
    tax_percentage_ne: Int
    business_hour_start_in: [Int]
    updated_at_exists: Boolean
    workspace_id_in: [WorkspaceQueryInput]
    updated_at_lte: DateTime
    site_id: SiteQueryInput
    tax_no: String
    business_category_exists: Boolean
    business_hour_start_lt: Int
    bookingLinks_lte: String
    created_by_exists: Boolean
    bookingLinks_exists: Boolean
    deleted_at_in: [DateTime]
    created_at_exists: Boolean
    timeFormat_gte: Int
    business_category_nin: [BusinesscategoryQueryInput]
    policy_exists: Boolean
    updated_at_nin: [DateTime]
    tax_no_lt: String
    timeFormat_nin: [Int]
    tax_percentage: Int
    business_hour_end_lt: Int
    business_hour_start_ne: Int
    time_zone_lte: String
    delete_ne: Boolean
    workspace_id_exists: Boolean
    timing_ids_exists: Boolean
    timing_ids_in: [ObjectId]
    tax_percentage_nin: [Int]
    tax_no_in: [String]
    active_exists: Boolean
    time_zone_exists: Boolean
    first_day_gt: Int
    bookingLinks_in: [String]
    policy: BusinessinfoPolicyQueryInput
    workspace_id: [WorkspaceQueryInput]
    tax_percentage_gt: Int
    timeFormat_lte: Int
    time_zone_nin: [String]
    timeFormat_exists: Boolean
    tax_percentage_lt: Int
    created_at_ne: DateTime
    timeFormat_gt: Int
    first_day_exists: Boolean
    tax_percentage_lte: Int
    address_ids: [AddressQueryInput]
    tax_percentage_gte: Int
    business_hour_start_exists: Boolean
    deleted_at_lte: DateTime
    updated_at_in: [DateTime]
    timeFormat_lt: Int
    business_hour_start_gt: Int
    time_zone_gt: String
    timeFormat_in: [Int]
    first_day: Int
    deleted_at_gt: DateTime
    bookingLinks_nin: [String]
    _id_lt: ObjectId
    business_hour_end_nin: [Int]
    is_tax_ne: Boolean
    business_hour_start_lte: Int
    time_zone_ne: String
    deleted_at_nin: [DateTime]
    address_ids_exists: Boolean
    date_format_lte: String
    business_hour_start: Int
    timeFormat_ne: Int
    _id_gt: ObjectId
    active: Boolean
    bookingLinks_ne: String
  }
  
  input BusinessinfoPolicyQueryInput {
    terms_and_condition_gte: String
    appointment_in: [String]
    appointment_gte: String
    cancellation_in: [String]
    cancellation_gt: String
    appointment_lte: String
    appointment_exists: Boolean
    cancellation: String
    terms_and_condition_lt: String
    terms_and_condition: String
    appointment_lt: String
    cancellation_gte: String
    cancellation_ne: String
    appointment_gt: String
    terms_and_condition_ne: String
    AND: [BusinessinfoPolicyQueryInput!]
    appointment_ne: String
    cancellation_exists: Boolean
    terms_and_condition_in: [String]
    terms_and_condition_nin: [String]
    cancellation_lt: String
    terms_and_condition_gt: String
    cancellation_lte: String
    terms_and_condition_lte: String
    appointment: String
    terms_and_condition_exists: Boolean
    appointment_nin: [String]
    cancellation_nin: [String]
    OR: [BusinessinfoPolicyQueryInput!]
  }
  
  input StaffInsertInput {
    last_name: String
    title: String
    updated_at: DateTime
    site_id: StaffSite_idRelationInput
    color_code: String
    showSocialShare: Boolean
    slug: String
    workspace_ids: StaffWorkspace_idsRelationInput
    _id: ObjectId
    email_verified_date_time: DateTime
    deleted_at: DateTime
    site_owener: Boolean
    staff_detail_id: StaffStaff_detail_idRelationInput
    created_at: DateTime
    employement_from: DateTime
    user_id: StaffUser_idRelationInput
    phone: [StaffPhoneInsertInput]
    sortingId: Int
    avatar_or_icon: String
    avatar_or_icon_path: String
    display_name: String
    name: String
    is_email_verified: Boolean
    gender: String
    employement_to: DateTime
    created_by: StaffCreated_byRelationInput
    experience_month: Int
    email: String
    first_name: String
    experience_year: Int
    social_network: [StaffSocial_networkInsertInput]
    description: String
    is_active: Boolean
  }
  
  input AddressInsertInput {
    default_address: Boolean
    zipCode: String
    country: String
    latitude: String
    _id: ObjectId
    state: String
    active: Boolean
    delete: Boolean
    city: String
    phone: [AddressPhoneInsertInput]
    site_id: AddressSite_idRelationInput
    workspace_id: AddressWorkspace_idRelationInput
    account_status: String
    created_at: DateTime
    updated_at: DateTime
    business_branch: Boolean
    type: String
    address2: String
    accessible: Boolean
    created_by: AddressCreated_byRelationInput
    deleted_at: DateTime
    email: String
    business_head_ofice: Boolean
    longitude: String
    address1: String
  }
  
  type Staffdetail {
    _id: ObjectId
    address_ids: [Address]
    booking_url: String
    business_id: [Business]
    business_timings: Boolean
    created_at: DateTime
    created_by: Staff
    deafult_calendar_view: String
    deleted_at: DateTime
    invitationStatus: String
    is_active: String
    is_login: Boolean
    is_service_provider: Boolean
    is_sync_enabled: Boolean
    paid_plan_commission: Boolean
    services_id: [String]
    site_id: Site
    sortingId: Int
    staff_commission: Boolean
    sync: [StaffdetailSync]
    timing_ids: [Timing]
    updated_at: DateTime
    workspace_id: [Workspace]
  }
  
  input StaffPhoneInsertInput {
    country_code: String
    is_verified: Boolean
    name: String
    no: String
    type: String
  }
  
  input LocationsettingOncallUpdateInput {
    client_will_call_unset: Boolean
    staff_will_call: Boolean
    staff_will_call_unset: Boolean
    client_will_call: Boolean
  }
  
  input BusinessQueryInput {
    color_code: String
    showSocialShare_exists: Boolean
    _id_nin: [ObjectId]
    deleted_at_lt: DateTime
    description_gte: String
    web_url_gte: String
    social_network_nin: [BusinessSocial_networkQueryInput]
    staff_size_nin: [Int]
    email_signature: String
    social_network: [BusinessSocial_networkQueryInput]
    updated_at_gte: DateTime
    avatar_or_icon_in: [String]
    updated_at_nin: [DateTime]
    type_exists: Boolean
    staff_size_lte: Int
    staff_size_in: [Int]
    business_branch_gte: String
    description_gt: String
    type: String
    updated_at_lt: DateTime
    workspace_id_nin: [WorkspaceQueryInput]
    business_branch_gt: String
    display_name_gte: String
    description_lte: String
    _id_in: [ObjectId]
    avatar_or_icon: String
    staff_size_gt: Int
    type_nin: [String]
    avatar_or_icon_path_ne: String
    display_name_exists: Boolean
    created_at_exists: Boolean
    avatar_or_icon_gte: String
    email_signature_gte: String
    active_ne: Boolean
    display_name_lte: String
    display_name_in: [String]
    AND: [BusinessQueryInput!]
    business_branch: String
    created_at_nin: [DateTime]
    business_info_ids_nin: [BusinessinfoQueryInput]
    avatar_or_icon_gt: String
    color_code_gt: String
    created_by: StaffQueryInput
    avatar_or_icon_path_lte: String
    description_exists: Boolean
    description_ne: String
    workspace_id_exists: Boolean
    avatar_or_icon_nin: [String]
    updated_at_in: [DateTime]
    name_nin: [String]
    _id_ne: ObjectId
    delete_exists: Boolean
    description_nin: [String]
    avatar_or_icon_path_in: [String]
    created_by_exists: Boolean
    business_branch_in: [String]
    _id_exists: Boolean
    accessible_ne: Boolean
    name_gt: String
    deleted_at_in: [DateTime]
    created_at_gte: DateTime
    deleted_at_exists: Boolean
    web_url_lt: String
    OR: [BusinessQueryInput!]
    accessible_exists: Boolean
    delete: Boolean
    business_info_ids_exists: Boolean
    color_code_in: [String]
    name_exists: Boolean
    description_in: [String]
    business_branch_nin: [String]
    type_gt: String
    display_name_nin: [String]
    email_signature_gt: String
    name_ne: String
    updated_at_lte: DateTime
    deleted_at_ne: DateTime
    avatar_or_icon_exists: Boolean
    deleted_at_gt: DateTime
    web_url_exists: Boolean
    color_code_nin: [String]
    created_at_lte: DateTime
    workspace_id: [WorkspaceQueryInput]
    showSocialShare_ne: Boolean
    description: String
    avatar_or_icon_path_nin: [String]
    name_in: [String]
    color_code_ne: String
    site_id_exists: Boolean
    business_branch_ne: String
    color_code_exists: Boolean
    avatar_or_icon_lte: String
    avatar_or_icon_lt: String
    deleted_at_nin: [DateTime]
    avatar_or_icon_ne: String
    staff_size: Int
    social_network_in: [BusinessSocial_networkQueryInput]
    business_branch_exists: Boolean
    web_url_ne: String
    name: String
    avatar_or_icon_path: String
    created_at_in: [DateTime]
    social_network_exists: Boolean
    web_url_gt: String
    _id_lt: ObjectId
    email_signature_ne: String
    created_at_gt: DateTime
    avatar_or_icon_path_gte: String
    email_signature_exists: Boolean
    avatar_or_icon_path_lt: String
    updated_at_exists: Boolean
    name_lt: String
    accessible: Boolean
    active_exists: Boolean
    business_info_ids_in: [BusinessinfoQueryInput]
    email_signature_nin: [String]
    business_info_ids: [BusinessinfoQueryInput]
    delete_ne: Boolean
    staff_size_gte: Int
    email_signature_lt: String
    _id_lte: ObjectId
    deleted_at_gte: DateTime
    web_url_in: [String]
    email_signature_lte: String
    deleted_at_lte: DateTime
    created_at_ne: DateTime
    _id_gt: ObjectId
    web_url_nin: [String]
    name_lte: String
    display_name: String
    type_in: [String]
    type_ne: String
    type_lt: String
    _id_gte: ObjectId
    active: Boolean
    web_url_lte: String
    web_url: String
    created_at_lt: DateTime
    email_signature_in: [String]
    name_gte: String
    staff_size_ne: Int
    description_lt: String
    site_id: SiteQueryInput
    updated_at_gt: DateTime
    showSocialShare: Boolean
    display_name_lt: String
    color_code_lt: String
    color_code_lte: String
    business_branch_lt: String
    display_name_gt: String
    deleted_at: DateTime
    workspace_id_in: [WorkspaceQueryInput]
    updated_at: DateTime
    type_lte: String
    color_code_gte: String
    staff_size_lt: Int
    avatar_or_icon_path_exists: Boolean
    avatar_or_icon_path_gt: String
    type_gte: String
    updated_at_ne: DateTime
    _id: ObjectId
    created_at: DateTime
    display_name_ne: String
    staff_size_exists: Boolean
    business_branch_lte: String
  }
  
  type Businessinfo {
    _id: ObjectId
    accessible: Boolean
    active: Boolean
    address_ids: [Address]
    bookingLinks: String
    business_category: [Businesscategory]
    business_hour_end: Int
    business_hour_start: Int
    created_at: DateTime
    created_by: Staff
    date_format: String
    delete: Boolean
    deleted_at: DateTime
    first_day: Int
    is_tax: Boolean
    policy: BusinessinfoPolicy
    restrictedDays: [DateTime]
    site_id: Site
    tax_no: String
    tax_percentage: Int
    timeFormat: Int
    time_zone: String
    timing_ids: [ObjectId]
    updated_at: DateTime
    workspace_id: [Workspace]
  }
  
  type InsertManyPayload {
    insertedIds: [ObjectId]!
  }
  
  input UserUpdateInput {
    delete: Boolean
    workspace_ids: UserWorkspace_idsRelationInput
    is_owener_unset: Boolean
    delete_unset: Boolean
    _id_unset: Boolean
    is_owener: Boolean
    workspace_ids_unset: Boolean
    paccess_unset: Boolean
    site_id_unset: Boolean
    _id: ObjectId
    active_unset: Boolean
    role_ids_unset: Boolean
    role_ids: UserRole_idsRelationInput
    active: Boolean
    site_id: UserSite_idRelationInput
    paccess: ObjectId
  }
  
  input BusinessUpdateInput {
    name_unset: Boolean
    web_url: String
    delete_unset: Boolean
    site_id: BusinessSite_idRelationInput
    showSocialShare: Boolean
    staff_size_inc: Int
    display_name: String
    social_network: [BusinessSocial_networkUpdateInput]
    social_network_unset: Boolean
    created_by_unset: Boolean
    created_at_unset: Boolean
    avatar_or_icon: String
    updated_at_unset: Boolean
    accessible: Boolean
    created_at: DateTime
    workspace_id_unset: Boolean
    _id: ObjectId
    business_info_ids: BusinessBusiness_info_idsRelationInput
    created_by: BusinessCreated_byRelationInput
    deleted_at: DateTime
    web_url_unset: Boolean
    type: String
    description: String
    site_id_unset: Boolean
    color_code: String
    active_unset: Boolean
    business_info_ids_unset: Boolean
    description_unset: Boolean
    email_signature: String
    type_unset: Boolean
    email_signature_unset: Boolean
    name: String
    staff_size: Int
    deleted_at_unset: Boolean
    _id_unset: Boolean
    avatar_or_icon_path: String
    display_name_unset: Boolean
    avatar_or_icon_unset: Boolean
    avatar_or_icon_path_unset: Boolean
    delete: Boolean
    business_branch_unset: Boolean
    color_code_unset: Boolean
    workspace_id: BusinessWorkspace_idRelationInput
    showSocialShare_unset: Boolean
    active: Boolean
    accessible_unset: Boolean
    business_branch: String
    staff_size_unset: Boolean
    updated_at: DateTime
  }
  
  input BusinessSocial_networkInsertInput {
    network: String
    link: String
  }
  
  input TimingLocation_setting_idsRelationInput {
    create: [LocationsettingInsertInput]
    link: [ObjectId]
  }
  
  input StaffdetailWorkspace_idRelationInput {
    create: [WorkspaceInsertInput]
    link: [ObjectId]
  }
  
  input StaffPhoneUpdateInput {
    country_code: String
    is_verified: Boolean
    country_code_unset: Boolean
    name: String
    type: String
    name_unset: Boolean
    type_unset: Boolean
    is_verified_unset: Boolean
    no: String
    no_unset: Boolean
  }
  
  input StaffPhoneQueryInput {
    country_code_exists: Boolean
    country_code_in: [String]
    type_lt: String
    country_code_lt: String
    is_verified_exists: Boolean
    no_exists: Boolean
    name_in: [String]
    OR: [StaffPhoneQueryInput!]
    country_code_ne: String
    country_code: String
    name_lte: String
    no_gt: String
    country_code_nin: [String]
    name: String
    type_in: [String]
    name_gte: String
    no_in: [String]
    no_lt: String
    type_lte: String
    name_nin: [String]
    is_verified_ne: Boolean
    no_lte: String
    AND: [StaffPhoneQueryInput!]
    is_verified: Boolean
    name_gt: String
    name_exists: Boolean
    name_lt: String
    no_ne: String
    country_code_lte: String
    country_code_gt: String
    country_code_gte: String
    type_nin: [String]
    type_ne: String
    no_nin: [String]
    type: String
    type_gte: String
    type_gt: String
    no_gte: String
    type_exists: Boolean
    no: String
    name_ne: String
  }
  
  enum SiteSortByInput {
    PAYMENT_STATUS_ASC
    PAYMENT_STATUS_ID_DESC
    ACCOUNT_STATUS_DESC
    CREATED_AT_ASC
    DELETED_AT_ASC
    GOOGLEANALYTICSCODE_ASC
    SUBCRIPTION_ID_DESC
    _ID_ASC
    CREATED_AT_DESC
    DEFAULT_LANGUAGE_ASC
    DEFAULT_LANGUAGE_DESC
    GOOGLEANALYTICSCODE_DESC
    NAME_ASC
    NAME_DESC
    PAYMENT_STATUS_ID_ASC
    ACCOUNT_STATUS_ASC
    CREATED_BY_ASC
    DELETED_AT_DESC
    PAYMENT_STATUS_DESC
    SUBCRIPTION_ID_ASC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    _ID_DESC
    CREATED_BY_DESC
  }
  
  input BusinessinfoPolicyUpdateInput {
    appointment_unset: Boolean
    cancellation: String
    cancellation_unset: Boolean
    terms_and_condition: String
    terms_and_condition_unset: Boolean
    appointment: String
  }
  
  input LocationsettingUpdateInput {
    updated_at_unset: Boolean
    created_at_unset: Boolean
    _id: ObjectId
    site_id: LocationsettingSite_idRelationInput
    active_unset: Boolean
    deleted_at_unset: Boolean
    deleted_unset: Boolean
    location_id: LocationsettingLocation_idRelationInput
    oncall: LocationsettingOncallUpdateInput
    video: LocationsettingVideoUpdateInput
    created_by: LocationsettingCreated_byRelationInput
    deleted: Boolean
    oncall_unset: Boolean
    video_unset: Boolean
    _id_unset: Boolean
    created_by_unset: Boolean
    site_id_unset: Boolean
    created_at: DateTime
    inperson_unset: Boolean
    location_id_unset: Boolean
    active: Boolean
    inperson: LocationsettingInpersonUpdateInput
    deleted_at: DateTime
    updated_at: DateTime
    workspace_id: LocationsettingWorkspace_idRelationInput
    workspace_id_unset: Boolean
  }
  
  input BusinesscategoryParant_category_idRelationInput {
    create: BusinesscategoryInsertInput
    link: ObjectId
  }
  
  input UserSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  type TimingRecurringRule {
    freq: String
    repeatEvery: Int
    until: DateTime
  }
  
  enum PermissionSortByInput {
    NAME_DESC
    SITE_ID_ASC
    SITE_ID_DESC
    SYSTEM_NAME_DESC
    SYSTEM_NAME_ASC
    WORKSPACE_ID_ASC
    WORKSPACE_ID_DESC
    _ID_ASC
    _ID_DESC
    CATEGORY_ASC
    CATEGORY_DESC
    NAME_ASC
  }
  
  input StaffStaff_detail_idRelationInput {
    create: [StaffdetailInsertInput]
    link: [ObjectId]
  }
  
  input AddressWorkspace_idRelationInput {
    create: [WorkspaceInsertInput]
    link: [ObjectId]
  }
  
  input StaffdetailSyncInsertInput {
    key: String
    type: String
  }
  
  input UserWorkspace_idsRelationInput {
    link: [ObjectId]
    create: [WorkspaceInsertInput]
  }
  
  type DeleteManyPayload {
    deletedCount: Int!
  }
  
  input StaffdetailSyncUpdateInput {
    key: String
    key_unset: Boolean
    type: String
    type_unset: Boolean
  }
  
  input AddressPhoneQueryInput {
    country_code_nin: [String]
    no_exists: Boolean
    Ext_lt: String
    country_code_gte: String
    no_ne: String
    Ext_in: [String]
    Ext_nin: [String]
    name_ne: String
    name_exists: Boolean
    type_gt: String
    type_lte: String
    Ext_gte: String
    country_code_ne: String
    country_code_exists: Boolean
    name_in: [String]
    type_in: [String]
    type_ne: String
    country_code_gt: String
    no_lt: String
    name: String
    country_code_in: [String]
    type_gte: String
    Ext_exists: Boolean
    name_lt: String
    no_lte: String
    no_gte: String
    type_lt: String
    Ext_ne: String
    no_nin: [String]
    type: String
    name_gt: String
    type_exists: Boolean
    country_code_lt: String
    no_gt: String
    no: String
    AND: [AddressPhoneQueryInput!]
    OR: [AddressPhoneQueryInput!]
    country_code_lte: String
    Ext_gt: String
    Ext_lte: String
    name_nin: [String]
    country_code: String
    type_nin: [String]
    name_lte: String
    no_in: [String]
    Ext: String
    name_gte: String
  }
  
  enum AddressSortByInput {
    _ID_ASC
    ADDRESS2_ASC
    ADDRESS2_DESC
    CITY_DESC
    COUNTRY_DESC
    CREATED_BY_ASC
    LONGITUDE_ASC
    EMAIL_ASC
    STATE_DESC
    TYPE_DESC
    UPDATED_AT_DESC
    ZIPCODE_ASC
    _ID_DESC
    COUNTRY_ASC
    SITE_ID_ASC
    TYPE_ASC
    EMAIL_DESC
    SITE_ID_DESC
    UPDATED_AT_ASC
    ZIPCODE_DESC
    ACCOUNT_STATUS_ASC
    ADDRESS1_DESC
    CITY_ASC
    DELETED_AT_DESC
    LATITUDE_ASC
    STATE_ASC
    ACCOUNT_STATUS_DESC
    ADDRESS1_ASC
    CREATED_AT_ASC
    CREATED_AT_DESC
    DELETED_AT_ASC
    CREATED_BY_DESC
    LATITUDE_DESC
    LONGITUDE_DESC
  }
  
  type Role {
    _id: ObjectId
    active: Boolean
    createdOn_utc: DateTime
    delete: Boolean
    is_system_role: Boolean
    name: String
    permission_ids: [Permission]
    site_id: Site
    system_name: String
    workspace_id: Workspace
  }
  
  input RoleUpdateInput {
    name: String
    _id: ObjectId
    site_id_unset: Boolean
    permission_ids_unset: Boolean
    is_system_role: Boolean
    site_id: RoleSite_idRelationInput
    workspace_id_unset: Boolean
    name_unset: Boolean
    active_unset: Boolean
    system_name: String
    system_name_unset: Boolean
    delete_unset: Boolean
    createdOn_utc: DateTime
    createdOn_utc_unset: Boolean
    _id_unset: Boolean
    delete: Boolean
    active: Boolean
    workspace_id: RoleWorkspace_idRelationInput
    is_system_role_unset: Boolean
    permission_ids: RolePermission_idsRelationInput
  }
  
  input LocationsettingInpersonBuinsess_idRelationInput {
    create: BusinessInsertInput
    link: ObjectId
  }
  
  input PermissionInsertInput {
    _id: ObjectId
    category: String
    name: String
    site_id: PermissionSite_idRelationInput
    system_name: String
    workspace_id: PermissionWorkspace_idRelationInput
  }
  
  input StaffCreated_byRelationInput {
    link: ObjectId
    create: StaffInsertInput
  }
  
  type Workspace {
    _id: ObjectId
    accessible: Boolean
    active: Boolean
    color_code: String
    created_at: DateTime
    created_by: ObjectId
    default_language: String
    delete: Boolean
    deleted_at: DateTime
    display_name: String
    display_order: Int
    is_owner: Boolean
    name: String
    new_business: Boolean
    site_id: Site
    time_zone: String
    type: String
    updated_at: DateTime
  }
  
  input SiteInsertInput {
    active: Boolean
    subcription_id: ObjectId
    googleAnalyticsCode: String
    accessible: Boolean
    suspended: Boolean
    default_language: String
    deleted_at: DateTime
    payment_status: String
    created_by: ObjectId
    payment_status_id: String
    account_status: String
    delete: Boolean
    created_at: DateTime
    name: String
    updated_at: DateTime
    _id: ObjectId
  }
  
  input WorkspaceInsertInput {
    deleted_at: DateTime
    new_business: Boolean
    type: String
    name: String
    display_name: String
    display_order: Int
    updated_at: DateTime
    is_owner: Boolean
    site_id: WorkspaceSite_idRelationInput
    created_by: ObjectId
    time_zone: String
    color_code: String
    delete: Boolean
    created_at: DateTime
    accessible: Boolean
    default_language: String
    _id: ObjectId
    active: Boolean
  }
  
  input BusinessinfoInsertInput {
    updated_at: DateTime
    _id: ObjectId
    accessible: Boolean
    timing_ids: [ObjectId]
    bookingLinks: String
    delete: Boolean
    is_tax: Boolean
    tax_no: String
    deleted_at: DateTime
    created_by: BusinessinfoCreated_byRelationInput
    business_category: BusinessinfoBusiness_categoryRelationInput
    date_format: String
    restrictedDays: [DateTime]
    time_zone: String
    workspace_id: BusinessinfoWorkspace_idRelationInput
    created_at: DateTime
    first_day: Int
    address_ids: BusinessinfoAddress_idsRelationInput
    business_hour_end: Int
    site_id: BusinessinfoSite_idRelationInput
    policy: BusinessinfoPolicyInsertInput
    timeFormat: Int
    business_hour_start: Int
    tax_percentage: Int
    active: Boolean
  }
  
  input LocationsettingVideoInsertInput {
    type: String
    integration_id: String
  }
  
  input StaffdetailSyncQueryInput {
    type_lt: String
    type_lte: String
    key_gt: String
    type_gt: String
    key_nin: [String]
    type_gte: String
    type_in: [String]
    key: String
    AND: [StaffdetailSyncQueryInput!]
    type_ne: String
    key_lt: String
    key_in: [String]
    key_exists: Boolean
    type: String
    type_exists: Boolean
    OR: [StaffdetailSyncQueryInput!]
    key_ne: String
    key_gte: String
    type_nin: [String]
    key_lte: String
  }
  
  type Timing {
    _id: ObjectId
    breaktime: [TimingBreaktime]
    business_hour: Boolean
    created_at: DateTime
    created_by: Staff
    custom_hour: Boolean
    deleted_at: DateTime
    end_time: String
    include_weekends: Boolean
    is_override_block: Boolean
    location_setting_ids: [Locationsetting]
    name: String
    recurringRule: TimingRecurringRule
    service_ids: [ObjectId]
    site_id: Site
    start_time: String
    time_zone: String
    timing_order: Int
    type: String
    updated_at: DateTime
    work_day_duration: Int
    work_day_id: Int
    work_day_name: String
    workspace_ids: [Workspace]
  }
  
  enum RoleSortByInput {
    WORKSPACE_ID_DESC
    CREATEDON_UTC_ASC
    NAME_ASC
    NAME_DESC
    SYSTEM_NAME_DESC
    WORKSPACE_ID_ASC
    SYSTEM_NAME_ASC
    _ID_ASC
    _ID_DESC
    CREATEDON_UTC_DESC
    SITE_ID_ASC
    SITE_ID_DESC
  }
  
  enum LocationSortByInput {
    TYPE_ASC
    CREATED_AT_DESC
    DELETED_AT_DESC
    CREATED_AT_ASC
    DELETED_AT_ASC
    NAME_ASC
    NAME_DESC
    TYPE_DESC
    UPDATED_AT_ASC
    _ID_ASC
    _ID_DESC
    UPDATED_AT_DESC
  }
  
  input AddressSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input LocationInsertInput {
    deleted_at: DateTime
    type: String
    active: Boolean
    deleted: Boolean
    type_param: Boolean
    name: String
    _id: ObjectId
    updated_at: DateTime
    app_integration_need: Boolean
    created_at: DateTime
  }
  
  input RoleInsertInput {
    name: String
    system_name: String
    createdOn_utc: DateTime
    is_system_role: Boolean
    workspace_id: RoleWorkspace_idRelationInput
    active: Boolean
    site_id: RoleSite_idRelationInput
    _id: ObjectId
    permission_ids: RolePermission_idsRelationInput
    delete: Boolean
  }
  
  input StaffSocial_networkUpdateInput {
    network: String
    network_unset: Boolean
    link: String
    link_unset: Boolean
  }
  
  input LocationsettingOncallQueryInput {
    client_will_call_exists: Boolean
    client_will_call_ne: Boolean
    staff_will_call: Boolean
    staff_will_call_ne: Boolean
    staff_will_call_exists: Boolean
    AND: [LocationsettingOncallQueryInput!]
    OR: [LocationsettingOncallQueryInput!]
    client_will_call: Boolean
  }
  
  enum WorkspaceSortByInput {
    DISPLAY_ORDER_DESC
    TIME_ZONE_DESC
    CREATED_BY_DESC
    _ID_DESC
    COLOR_CODE_DESC
    DEFAULT_LANGUAGE_DESC
    DELETED_AT_DESC
    NAME_DESC
    UPDATED_AT_ASC
    UPDATED_AT_DESC
    _ID_ASC
    DISPLAY_NAME_DESC
    DISPLAY_ORDER_ASC
    TIME_ZONE_ASC
    TYPE_ASC
    CREATED_AT_DESC
    CREATED_AT_ASC
    CREATED_BY_ASC
    DEFAULT_LANGUAGE_ASC
    DELETED_AT_ASC
    DISPLAY_NAME_ASC
    NAME_ASC
    SITE_ID_ASC
    COLOR_CODE_ASC
    TYPE_DESC
    SITE_ID_DESC
  }
  
  input AddressCreated_byRelationInput {
    create: StaffInsertInput
    link: ObjectId
  }
  
  input BusinessinfoWorkspace_idRelationInput {
    create: [WorkspaceInsertInput]
    link: [ObjectId]
  }
  
  input BusinessSocial_networkUpdateInput {
    network: String
    network_unset: Boolean
    link: String
    link_unset: Boolean
  }
  
  type UpdateManyPayload {
    matchedCount: Int!
    modifiedCount: Int!
  }
  
  type Staff {
    _id: ObjectId
    avatar_or_icon: String
    avatar_or_icon_path: String
    color_code: String
    created_at: DateTime
    created_by: Staff
    deleted_at: DateTime
    description: String
    display_name: String
    email: String
    email_verified_date_time: DateTime
    employement_from: DateTime
    employement_to: DateTime
    experience_month: Int
    experience_year: Int
    first_name: String
    gender: String
    is_active: Boolean
    is_email_verified: Boolean
    last_name: String
    name: String
    phone: [StaffPhone]
    showSocialShare: Boolean
    site_id: Site
    site_owener: Boolean
    slug: String
    social_network: [StaffSocial_network]
    sortingId: Int
    staff_detail_id: [Staffdetail]
    title: String
    updated_at: DateTime
    user_id: User
    workspace_ids: [Workspace]
  }
  
  enum TimingSortByInput {
    START_TIME_DESC
    TIMING_ORDER_ASC
    END_TIME_ASC
    NAME_DESC
    TIMING_ORDER_DESC
    WORK_DAY_DURATION_ASC
    CREATED_BY_DESC
    TIME_ZONE_DESC
    UPDATED_AT_ASC
    WORK_DAY_DURATION_DESC
    WORK_DAY_NAME_ASC
    TYPE_ASC
    UPDATED_AT_DESC
    _ID_ASC
    _ID_DESC
    DELETED_AT_ASC
    SITE_ID_DESC
    TYPE_DESC
    CREATED_AT_ASC
    NAME_ASC
    SITE_ID_ASC
    START_TIME_ASC
    WORK_DAY_ID_ASC
    CREATED_AT_DESC
    END_TIME_DESC
    WORK_DAY_ID_DESC
    CREATED_BY_ASC
    DELETED_AT_DESC
    TIME_ZONE_ASC
    WORK_DAY_NAME_DESC
  }
  
  input TimingSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input StaffdetailQueryInput {
    is_active_exists: Boolean
    paid_plan_commission: Boolean
    _id_ne: ObjectId
    _id_gte: ObjectId
    created_by: StaffQueryInput
    created_by_exists: Boolean
    timing_ids_in: [TimingQueryInput]
    created_at_gte: DateTime
    is_sync_enabled_exists: Boolean
    created_at_in: [DateTime]
    updated_at_nin: [DateTime]
    sortingId_gt: Int
    updated_at_ne: DateTime
    AND: [StaffdetailQueryInput!]
    staff_commission: Boolean
    address_ids_in: [AddressQueryInput]
    deafult_calendar_view_lt: String
    booking_url_lt: String
    deleted_at_gt: DateTime
    is_active_lt: String
    deleted_at_lte: DateTime
    is_active_ne: String
    created_at_lt: DateTime
    sortingId_nin: [Int]
    business_timings_ne: Boolean
    deafult_calendar_view_lte: String
    deleted_at_gte: DateTime
    deleted_at: DateTime
    _id_lte: ObjectId
    created_at: DateTime
    _id: ObjectId
    deafult_calendar_view_in: [String]
    sortingId_gte: Int
    booking_url_gt: String
    updated_at_gte: DateTime
    sortingId_in: [Int]
    services_id_in: [String]
    workspace_id_exists: Boolean
    updated_at_lte: DateTime
    invitationStatus_exists: Boolean
    sortingId_exists: Boolean
    services_id_nin: [String]
    updated_at: DateTime
    is_active_in: [String]
    _id_exists: Boolean
    deleted_at_in: [DateTime]
    sortingId_lt: Int
    is_sync_enabled_ne: Boolean
    is_active_lte: String
    created_at_exists: Boolean
    deleted_at_nin: [DateTime]
    invitationStatus_nin: [String]
    updated_at_exists: Boolean
    invitationStatus_ne: String
    _id_lt: ObjectId
    deafult_calendar_view_nin: [String]
    business_timings_exists: Boolean
    deafult_calendar_view: String
    address_ids_nin: [AddressQueryInput]
    is_service_provider_ne: Boolean
    is_login_exists: Boolean
    is_service_provider: Boolean
    business_id_in: [BusinessQueryInput]
    OR: [StaffdetailQueryInput!]
    business_timings: Boolean
    _id_in: [ObjectId]
    updated_at_lt: DateTime
    sortingId: Int
    business_id_exists: Boolean
    booking_url: String
    invitationStatus_lte: String
    booking_url_in: [String]
    invitationStatus_lt: String
    deleted_at_ne: DateTime
    workspace_id_in: [WorkspaceQueryInput]
    business_id: [BusinessQueryInput]
    invitationStatus_gt: String
    is_active: String
    workspace_id: [WorkspaceQueryInput]
    workspace_id_nin: [WorkspaceQueryInput]
    deleted_at_exists: Boolean
    staff_commission_exists: Boolean
    paid_plan_commission_ne: Boolean
    is_login_ne: Boolean
    sortingId_ne: Int
    address_ids_exists: Boolean
    timing_ids: [TimingQueryInput]
    timing_ids_nin: [TimingQueryInput]
    site_id_exists: Boolean
    is_service_provider_exists: Boolean
    business_id_nin: [BusinessQueryInput]
    deafult_calendar_view_exists: Boolean
    booking_url_ne: String
    paid_plan_commission_exists: Boolean
    updated_at_gt: DateTime
    _id_gt: ObjectId
    booking_url_lte: String
    deafult_calendar_view_ne: String
    staff_commission_ne: Boolean
    is_login: Boolean
    booking_url_nin: [String]
    timing_ids_exists: Boolean
    created_at_ne: DateTime
    updated_at_in: [DateTime]
    sync_exists: Boolean
    created_at_lte: DateTime
    is_active_gt: String
    sortingId_lte: Int
    deafult_calendar_view_gte: String
    booking_url_exists: Boolean
    invitationStatus_in: [String]
    sync_in: [StaffdetailSyncQueryInput]
    _id_nin: [ObjectId]
    services_id_exists: Boolean
    address_ids: [AddressQueryInput]
    created_at_nin: [DateTime]
    is_active_gte: String
    sync: [StaffdetailSyncQueryInput]
    sync_nin: [StaffdetailSyncQueryInput]
    invitationStatus_gte: String
    booking_url_gte: String
    created_at_gt: DateTime
    services_id: [String]
    deafult_calendar_view_gt: String
    site_id: SiteQueryInput
    is_sync_enabled: Boolean
    invitationStatus: String
    is_active_nin: [String]
    deleted_at_lt: DateTime
  }
  
  input PermissionQueryInput {
    category_lt: String
    category_nin: [String]
    system_name_nin: [String]
    system_name_lte: String
    _id_in: [ObjectId]
    name_nin: [String]
    category_in: [String]
    _id_lte: ObjectId
    system_name: String
    workspace_id: WorkspaceQueryInput
    _id_gt: ObjectId
    category_gte: String
    name_in: [String]
    name_lt: String
    OR: [PermissionQueryInput!]
    system_name_exists: Boolean
    category_gt: String
    system_name_lt: String
    name_ne: String
    system_name_in: [String]
    _id: ObjectId
    category_lte: String
    _id_exists: Boolean
    workspace_id_exists: Boolean
    name_gt: String
    _id_nin: [ObjectId]
    _id_gte: ObjectId
    name_exists: Boolean
    name: String
    system_name_ne: String
    name_gte: String
    name_lte: String
    _id_ne: ObjectId
    _id_lt: ObjectId
    site_id: SiteQueryInput
    site_id_exists: Boolean
    system_name_gte: String
    system_name_gt: String
    AND: [PermissionQueryInput!]
    category: String
    category_ne: String
    category_exists: Boolean
  }
  
  type LocationsettingVideo {
    integration_id: String
    type: String
  }
  
  input LocationsettingSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  type Businesscategory {
    _id: ObjectId
    accessible: Boolean
    active: Boolean
    category_name: String
    created_at: DateTime
    created_by: Staff
    deleted: Boolean
    deleted_at: DateTime
    parant_category_id: Businesscategory
    site_id: ObjectId
    type: String
    updated_at: DateTime
  }
  
  input WorkspaceSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input LocationUpdateInput {
    type: String
    active_unset: Boolean
    type_param_unset: Boolean
    _id: ObjectId
    deleted: Boolean
    created_at_unset: Boolean
    deleted_at_unset: Boolean
    type_unset: Boolean
    updated_at: DateTime
    name_unset: Boolean
    updated_at_unset: Boolean
    name: String
    type_param: Boolean
    _id_unset: Boolean
    deleted_unset: Boolean
    deleted_at: DateTime
    active: Boolean
    app_integration_need_unset: Boolean
    app_integration_need: Boolean
    created_at: DateTime
  }
  
  input SiteUpdateInput {
    suspended_unset: Boolean
    _id_unset: Boolean
    created_by: ObjectId
    account_status: String
    payment_status: String
    subcription_id_unset: Boolean
    active_unset: Boolean
    name: String
    delete: Boolean
    created_by_unset: Boolean
    deleted_at_unset: Boolean
    accessible: Boolean
    created_at: DateTime
    default_language_unset: Boolean
    suspended: Boolean
    googleAnalyticsCode: String
    name_unset: Boolean
    subcription_id: ObjectId
    account_status_unset: Boolean
    deleted_at: DateTime
    default_language: String
    payment_status_unset: Boolean
    updated_at: DateTime
    created_at_unset: Boolean
    updated_at_unset: Boolean
    active: Boolean
    payment_status_id_unset: Boolean
    delete_unset: Boolean
    accessible_unset: Boolean
    googleAnalyticsCode_unset: Boolean
    payment_status_id: String
    _id: ObjectId
  }
  
  enum LocationsettingSortByInput {
    WORKSPACE_ID_ASC
    _ID_ASC
    _ID_DESC
    CREATED_BY_ASC
    WORKSPACE_ID_DESC
    SITE_ID_ASC
    UPDATED_AT_DESC
    CREATED_BY_DESC
    DELETED_AT_ASC
    DELETED_AT_DESC
    LOCATION_ID_DESC
    SITE_ID_DESC
    UPDATED_AT_ASC
    CREATED_AT_ASC
    CREATED_AT_DESC
    LOCATION_ID_ASC
  }
  
  input StaffQueryInput {
    showSocialShare: Boolean
    email_exists: Boolean
    experience_month: Int
    avatar_or_icon_in: [String]
    name_in: [String]
    color_code: String
    employement_to_gt: DateTime
    first_name_nin: [String]
    last_name_exists: Boolean
    user_id: UserQueryInput
    avatar_or_icon_path_lt: String
    slug_lte: String
    deleted_at_lte: DateTime
    email_gt: String
    email_verified_date_time_lt: DateTime
    _id: ObjectId
    slug_gt: String
    created_at_gte: DateTime
    experience_month_in: [Int]
    email_lt: String
    description_gt: String
    last_name_gt: String
    showSocialShare_exists: Boolean
    avatar_or_icon_path_gt: String
    experience_month_nin: [Int]
    created_at_nin: [DateTime]
    avatar_or_icon_path_lte: String
    color_code_nin: [String]
    phone_in: [StaffPhoneQueryInput]
    slug_exists: Boolean
    user_id_exists: Boolean
    created_by: StaffQueryInput
    staff_detail_id_in: [StaffdetailQueryInput]
    experience_month_gt: Int
    is_email_verified_ne: Boolean
    title_in: [String]
    description: String
    email_verified_date_time_exists: Boolean
    email: String
    sortingId_ne: Int
    employement_to_lte: DateTime
    employement_from_nin: [DateTime]
    description_exists: Boolean
    email_verified_date_time_nin: [DateTime]
    employement_from_ne: DateTime
    avatar_or_icon_path_in: [String]
    gender_lt: String
    AND: [StaffQueryInput!]
    updated_at_lte: DateTime
    workspace_ids: [WorkspaceQueryInput]
    _id_nin: [ObjectId]
    display_name_gt: String
    color_code_ne: String
    sortingId: Int
    employement_from_exists: Boolean
    sortingId_gte: Int
    _id_in: [ObjectId]
    first_name_gte: String
    email_nin: [String]
    sortingId_exists: Boolean
    _id_lt: ObjectId
    gender_gte: String
    site_owener: Boolean
    experience_month_exists: Boolean
    experience_month_ne: Int
    first_name_lt: String
    name_gte: String
    title_lt: String
    social_network: [StaffSocial_networkQueryInput]
    description_nin: [String]
    updated_at_gte: DateTime
    _id_exists: Boolean
    name_ne: String
    title_ne: String
    name_exists: Boolean
    site_owener_exists: Boolean
    employement_from: DateTime
    is_email_verified_exists: Boolean
    display_name_lt: String
    employement_to_ne: DateTime
    is_email_verified: Boolean
    employement_to: DateTime
    color_code_exists: Boolean
    color_code_lte: String
    description_gte: String
    first_name: String
    experience_year_exists: Boolean
    employement_to_nin: [DateTime]
    _id_lte: ObjectId
    deleted_at_in: [DateTime]
    staff_detail_id: [StaffdetailQueryInput]
    email_ne: String
    gender_exists: Boolean
    description_in: [String]
    avatar_or_icon_nin: [String]
    updated_at: DateTime
    first_name_in: [String]
    title_nin: [String]
    first_name_exists: Boolean
    created_at_in: [DateTime]
    avatar_or_icon_path: String
    sortingId_lt: Int
    avatar_or_icon_gt: String
    employement_to_exists: Boolean
    social_network_exists: Boolean
    gender_in: [String]
    name_nin: [String]
    email_verified_date_time_gte: DateTime
    slug: String
    phone_nin: [StaffPhoneQueryInput]
    description_lte: String
    experience_year_ne: Int
    workspace_ids_exists: Boolean
    first_name_lte: String
    created_by_exists: Boolean
    display_name_exists: Boolean
    color_code_gt: String
    email_verified_date_time_lte: DateTime
    avatar_or_icon_exists: Boolean
    experience_year: Int
    display_name_gte: String
    workspace_ids_nin: [WorkspaceQueryInput]
    phone: [StaffPhoneQueryInput]
    _id_gte: ObjectId
    avatar_or_icon_path_ne: String
    site_id_exists: Boolean
    display_name_lte: String
    gender_lte: String
    display_name_ne: String
    description_lt: String
    slug_in: [String]
    staff_detail_id_exists: Boolean
    deleted_at: DateTime
    experience_year_lte: Int
    site_owener_ne: Boolean
    gender_nin: [String]
    last_name_gte: String
    color_code_in: [String]
    experience_year_gte: Int
    is_active_ne: Boolean
    display_name: String
    social_network_in: [StaffSocial_networkQueryInput]
    avatar_or_icon_path_nin: [String]
    deleted_at_exists: Boolean
    last_name_ne: String
    title_gt: String
    experience_month_lte: Int
    email_verified_date_time: DateTime
    sortingId_in: [Int]
    employement_from_gt: DateTime
    employement_from_in: [DateTime]
    employement_from_gte: DateTime
    last_name_in: [String]
    email_lte: String
    color_code_gte: String
    employement_to_gte: DateTime
    name_lt: String
    gender_gt: String
    employement_to_in: [DateTime]
    employement_from_lt: DateTime
    slug_gte: String
    created_at_lt: DateTime
    created_at_ne: DateTime
    is_active: Boolean
    employement_from_lte: DateTime
    avatar_or_icon_lt: String
    name: String
    last_name: String
    _id_gt: ObjectId
    avatar_or_icon_path_gte: String
    email_in: [String]
    updated_at_exists: Boolean
    first_name_ne: String
    sortingId_gt: Int
    title: String
    OR: [StaffQueryInput!]
    email_verified_date_time_gt: DateTime
    description_ne: String
    first_name_gt: String
    experience_month_gte: Int
    email_verified_date_time_ne: DateTime
    created_at_gt: DateTime
    avatar_or_icon: String
    email_verified_date_time_in: [DateTime]
    is_active_exists: Boolean
    sortingId_lte: Int
    experience_year_in: [Int]
    slug_lt: String
    staff_detail_id_nin: [StaffdetailQueryInput]
    slug_ne: String
    experience_month_lt: Int
    email_gte: String
    last_name_lte: String
    created_at: DateTime
    name_lte: String
    title_exists: Boolean
    updated_at_gt: DateTime
    avatar_or_icon_ne: String
    _id_ne: ObjectId
    sortingId_nin: [Int]
    deleted_at_gte: DateTime
    gender: String
    deleted_at_nin: [DateTime]
    deleted_at_lt: DateTime
    updated_at_ne: DateTime
    experience_year_lt: Int
    display_name_nin: [String]
    title_lte: String
    last_name_nin: [String]
    avatar_or_icon_path_exists: Boolean
    deleted_at_gt: DateTime
    updated_at_in: [DateTime]
    updated_at_lt: DateTime
    slug_nin: [String]
    created_at_exists: Boolean
    experience_year_nin: [Int]
    updated_at_nin: [DateTime]
    avatar_or_icon_lte: String
    workspace_ids_in: [WorkspaceQueryInput]
    phone_exists: Boolean
    color_code_lt: String
    deleted_at_ne: DateTime
    avatar_or_icon_gte: String
    experience_year_gt: Int
    display_name_in: [String]
    social_network_nin: [StaffSocial_networkQueryInput]
    gender_ne: String
    employement_to_lt: DateTime
    showSocialShare_ne: Boolean
    last_name_lt: String
    name_gt: String
    created_at_lte: DateTime
    title_gte: String
    site_id: SiteQueryInput
  }
  
  scalar DateTime
  
  type AddressPhone {
    Ext: String
    country_code: String
    name: String
    no: String
    type: String
  }
  
  enum BusinesscategorySortByInput {
    CATEGORY_NAME_ASC
    CREATED_BY_ASC
    _ID_ASC
    _ID_DESC
    CREATED_AT_DESC
    SITE_ID_DESC
    DELETED_AT_ASC
    DELETED_AT_DESC
    PARANT_CATEGORY_ID_ASC
    PARANT_CATEGORY_ID_DESC
    TYPE_ASC
    UPDATED_AT_DESC
    CATEGORY_NAME_DESC
    CREATED_BY_DESC
    TYPE_DESC
    UPDATED_AT_ASC
    CREATED_AT_ASC
    SITE_ID_ASC
  }
  
  input TimingInsertInput {
    end_time: String
    business_hour: Boolean
    include_weekends: Boolean
    site_id: TimingSite_idRelationInput
    created_at: DateTime
    _id: ObjectId
    location_setting_ids: TimingLocation_setting_idsRelationInput
    created_by: TimingCreated_byRelationInput
    work_day_name: String
    is_override_block: Boolean
    custom_hour: Boolean
    work_day_id: Int
    deleted_at: DateTime
    name: String
    service_ids: [ObjectId]
    workspace_ids: TimingWorkspace_idsRelationInput
    breaktime: [TimingBreaktimeInsertInput]
    type: String
    timing_order: Int
    updated_at: DateTime
    recurringRule: TimingRecurringRuleInsertInput
    time_zone: String
    start_time: String
    work_day_duration: Int
  }
  
  input UserQueryInput {
    is_owener: Boolean
    site_id_exists: Boolean
    paccess_in: [ObjectId]
    _id_lte: ObjectId
    role_ids: [RoleQueryInput]
    workspace_ids: [WorkspaceQueryInput]
    workspace_ids_exists: Boolean
    role_ids_in: [RoleQueryInput]
    role_ids_nin: [RoleQueryInput]
    paccess_exists: Boolean
    active: Boolean
    _id: ObjectId
    paccess_ne: ObjectId
    AND: [UserQueryInput!]
    active_ne: Boolean
    OR: [UserQueryInput!]
    _id_in: [ObjectId]
    _id_exists: Boolean
    role_ids_exists: Boolean
    is_owener_ne: Boolean
    delete_ne: Boolean
    is_owener_exists: Boolean
    delete_exists: Boolean
    _id_ne: ObjectId
    _id_gt: ObjectId
    _id_lt: ObjectId
    active_exists: Boolean
    paccess: ObjectId
    paccess_nin: [ObjectId]
    workspace_ids_in: [WorkspaceQueryInput]
    _id_nin: [ObjectId]
    paccess_lte: ObjectId
    site_id: SiteQueryInput
    paccess_gte: ObjectId
    workspace_ids_nin: [WorkspaceQueryInput]
    paccess_lt: ObjectId
    _id_gte: ObjectId
    delete: Boolean
    paccess_gt: ObjectId
  }
  
  type User {
    _id: ObjectId
    active: Boolean
    delete: Boolean
    is_owener: Boolean
    paccess: ObjectId
    role_ids: [Role]
    site_id: Site
    workspace_ids: [Workspace]
  }
  
  input StaffWorkspace_idsRelationInput {
    link: [ObjectId]
    create: [WorkspaceInsertInput]
  }
  
  input BusinessInsertInput {
    created_at: DateTime
    showSocialShare: Boolean
    staff_size: Int
    updated_at: DateTime
    _id: ObjectId
    description: String
    active: Boolean
    avatar_or_icon_path: String
    color_code: String
    site_id: BusinessSite_idRelationInput
    type: String
    workspace_id: BusinessWorkspace_idRelationInput
    accessible: Boolean
    name: String
    web_url: String
    display_name: String
    deleted_at: DateTime
    email_signature: String
    avatar_or_icon: String
    business_info_ids: BusinessBusiness_info_idsRelationInput
    business_branch: String
    social_network: [BusinessSocial_networkInsertInput]
    created_by: BusinessCreated_byRelationInput
    delete: Boolean
  }
  
  type Query {
    address(query: AddressQueryInput): Address
    addresses(query: AddressQueryInput, limit: Int = 100, sortBy: AddressSortByInput): [Address]!
    business(query: BusinessQueryInput): Business
    businesscategories(sortBy: BusinesscategorySortByInput, query: BusinesscategoryQueryInput, limit: Int = 100): [Businesscategory]!
    businesscategory(query: BusinesscategoryQueryInput): Businesscategory
    businesses(query: BusinessQueryInput, limit: Int = 100, sortBy: BusinessSortByInput): [Business]!
    businessinfo(query: BusinessinfoQueryInput): Businessinfo
    businessinfos(query: BusinessinfoQueryInput, limit: Int = 100, sortBy: BusinessinfoSortByInput): [Businessinfo]!
    location(query: LocationQueryInput): Location
    locations(query: LocationQueryInput, limit: Int = 100, sortBy: LocationSortByInput): [Location]!
    locationsetting(query: LocationsettingQueryInput): Locationsetting
    locationsettings(query: LocationsettingQueryInput, limit: Int = 100, sortBy: LocationsettingSortByInput): [Locationsetting]!
    permission(query: PermissionQueryInput): Permission
    permissions(sortBy: PermissionSortByInput, query: PermissionQueryInput, limit: Int = 100): [Permission]!
    role(query: RoleQueryInput): Role
    roles(query: RoleQueryInput, limit: Int = 100, sortBy: RoleSortByInput): [Role]!
    site(query: SiteQueryInput): Site
    sites(query: SiteQueryInput, limit: Int = 100, sortBy: SiteSortByInput): [Site]!
    staff(query: StaffQueryInput): Staff
    staffdetail(query: StaffdetailQueryInput): Staffdetail
    staffdetails(sortBy: StaffdetailSortByInput, query: StaffdetailQueryInput, limit: Int = 100): [Staffdetail]!
    staffs(sortBy: StaffSortByInput, query: StaffQueryInput, limit: Int = 100): [Staff]!
    timeformat(query: TimeformatQueryInput): Timeformat
    timeformats(query: TimeformatQueryInput, limit: Int = 100, sortBy: TimeformatSortByInput): [Timeformat]!
    timing(query: TimingQueryInput): Timing
    timings(limit: Int = 100, sortBy: TimingSortByInput, query: TimingQueryInput): [Timing]!
    user(query: UserQueryInput): User
    users(query: UserQueryInput, limit: Int = 100, sortBy: UserSortByInput): [User]!
    workspace(query: WorkspaceQueryInput): Workspace
    workspaces(query: WorkspaceQueryInput, limit: Int = 100, sortBy: WorkspaceSortByInput): [Workspace]!
  }
  
  input LocationsettingQueryInput {
    deleted_at_gt: DateTime
    deleted_at_nin: [DateTime]
    created_by: StaffQueryInput
    _id_exists: Boolean
    active: Boolean
    deleted: Boolean
    created_at_lt: DateTime
    updated_at_in: [DateTime]
    OR: [LocationsettingQueryInput!]
    video: LocationsettingVideoQueryInput
    workspace_id_exists: Boolean
    inperson: LocationsettingInpersonQueryInput
    created_at_in: [DateTime]
    created_by_exists: Boolean
    deleted_ne: Boolean
    updated_at_exists: Boolean
    deleted_at_gte: DateTime
    deleted_at_lt: DateTime
    _id_lte: ObjectId
    site_id_exists: Boolean
    deleted_at_ne: DateTime
    video_exists: Boolean
    created_at_gt: DateTime
    updated_at_lte: DateTime
    updated_at_ne: DateTime
    updated_at_gte: DateTime
    deleted_at: DateTime
    active_exists: Boolean
    _id_gt: ObjectId
    active_ne: Boolean
    site_id: SiteQueryInput
    created_at_exists: Boolean
    inperson_exists: Boolean
    _id_lt: ObjectId
    updated_at_lt: DateTime
    _id_ne: ObjectId
    deleted_at_in: [DateTime]
    _id: ObjectId
    created_at: DateTime
    location_id: LocationQueryInput
    _id_gte: ObjectId
    oncall_exists: Boolean
    _id_nin: [ObjectId]
    AND: [LocationsettingQueryInput!]
    location_id_exists: Boolean
    created_at_nin: [DateTime]
    oncall: LocationsettingOncallQueryInput
    deleted_at_exists: Boolean
    deleted_exists: Boolean
    workspace_id: WorkspaceQueryInput
    deleted_at_lte: DateTime
    created_at_lte: DateTime
    created_at_ne: DateTime
    created_at_gte: DateTime
    _id_in: [ObjectId]
    updated_at: DateTime
    updated_at_gt: DateTime
    updated_at_nin: [DateTime]
  }
  
  input StaffdetailInsertInput {
    address_ids: StaffdetailAddress_idsRelationInput
    deleted_at: DateTime
    sync: [StaffdetailSyncInsertInput]
    invitationStatus: String
    is_login: Boolean
    staff_commission: Boolean
    workspace_id: StaffdetailWorkspace_idRelationInput
    services_id: [String]
    timing_ids: StaffdetailTiming_idsRelationInput
    created_by: StaffdetailCreated_byRelationInput
    is_active: String
    is_service_provider: Boolean
    site_id: StaffdetailSite_idRelationInput
    is_sync_enabled: Boolean
    created_at: DateTime
    paid_plan_commission: Boolean
    booking_url: String
    sortingId: Int
    updated_at: DateTime
    business_id: StaffdetailBusiness_idRelationInput
    _id: ObjectId
    business_timings: Boolean
    deafult_calendar_view: String
  }
  
  input AddressPhoneUpdateInput {
    type: String
    country_code: String
    no: String
    country_code_unset: Boolean
    name: String
    type_unset: Boolean
    Ext: String
    Ext_unset: Boolean
    name_unset: Boolean
    no_unset: Boolean
  }
  
  input RoleSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  type Business {
    _id: ObjectId
    accessible: Boolean
    active: Boolean
    avatar_or_icon: String
    avatar_or_icon_path: String
    business_branch: String
    business_info_ids: [Businessinfo]
    color_code: String
    created_at: DateTime
    created_by: Staff
    delete: Boolean
    deleted_at: DateTime
    description: String
    display_name: String
    email_signature: String
    name: String
    showSocialShare: Boolean
    site_id: Site
    social_network: [BusinessSocial_network]
    staff_size: Int
    type: String
    updated_at: DateTime
    web_url: String
    workspace_id: [Workspace]
  }
  
  input StaffdetailBusiness_idRelationInput {
    create: [BusinessInsertInput]
    link: [ObjectId]
  }
  
  input BusinessSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input LocationsettingOncallInsertInput {
    client_will_call: Boolean
    staff_will_call: Boolean
  }
  
  input PermissionSite_idRelationInput {
    create: SiteInsertInput
    link: ObjectId
  }
  
  input WorkspaceUpdateInput {
    display_order: Int
    accessible_unset: Boolean
    display_order_unset: Boolean
    name_unset: Boolean
    created_at: DateTime
    display_name_unset: Boolean
    created_by_unset: Boolean
    is_owner: Boolean
    active_unset: Boolean
    site_id_unset: Boolean
    delete_unset: Boolean
    _id: ObjectId
    default_language: String
    name: String
    is_owner_unset: Boolean
    type_unset: Boolean
    default_language_unset: Boolean
    active: Boolean
    display_order_inc: Int
    deleted_at: DateTime
    _id_unset: Boolean
    type: String
    delete: Boolean
    deleted_at_unset: Boolean
    created_by: ObjectId
    color_code_unset: Boolean
    new_business_unset: Boolean
    color_code: String
    created_at_unset: Boolean
    updated_at: DateTime
    accessible: Boolean
    new_business: Boolean
    site_id: WorkspaceSite_idRelationInput
    time_zone: String
    time_zone_unset: Boolean
    display_name: String
    updated_at_unset: Boolean
  }
  
  input BusinessCreated_byRelationInput {
    create: StaffInsertInput
    link: ObjectId
  }
  
  input BusinessinfoAddress_idsRelationInput {
    create: [AddressInsertInput]
    link: [ObjectId]
  }
  
  input AddressPhoneInsertInput {
    name: String
    no: String
    type: String
    Ext: String
    country_code: String
  }
  
  input StaffdetailTiming_idsRelationInput {
    create: [TimingInsertInput]
    link: [ObjectId]
  }
  
  input BusinesscategoryInsertInput {
    deleted: Boolean
    site_id: ObjectId
    parant_category_id: BusinesscategoryParant_category_idRelationInput
    _id: ObjectId
    active: Boolean
    category_name: String
    deleted_at: DateTime
    type: String
    updated_at: DateTime
    accessible: Boolean
    created_at: DateTime
    created_by: BusinesscategoryCreated_byRelationInput
  }
  
  input LocationsettingInsertInput {
    updated_at: DateTime
    deleted: Boolean
    deleted_at: DateTime
    location_id: LocationsettingLocation_idRelationInput
    active: Boolean
    _id: ObjectId
    oncall: LocationsettingOncallInsertInput
    site_id: LocationsettingSite_idRelationInput
    workspace_id: LocationsettingWorkspace_idRelationInput
    video: LocationsettingVideoInsertInput
    created_at: DateTime
    created_by: LocationsettingCreated_byRelationInput
    inperson: LocationsettingInpersonInsertInput
  }
  
  input TimingRecurringRuleUpdateInput {
    freq_unset: Boolean
    repeatEvery: Int
    repeatEvery_inc: Int
    repeatEvery_unset: Boolean
    until: DateTime
    until_unset: Boolean
    freq: String
  }
  
  input TimeformatUpdateInput {
    site_id_unset: Boolean
    business_hour_end_inc: Int
    first_day_unset: Boolean
    timeFormat: Int
    business_hour_end: Int
    workspace_id: ObjectId
    business_hour_end_unset: Boolean
    business_hour_start_inc: Int
    date_format_unset: Boolean
    first_day_inc: Int
    timeFormat_unset: Boolean
    business_hour_start: Int
    site_id: ObjectId
    time_zone: String
    _id_unset: Boolean
    time_zone_unset: Boolean
    workspace_id_unset: Boolean
    business_hour_start_unset: Boolean
    first_day: Int
    _id: ObjectId
    date_format: String
    timeFormat_inc: Int
  }
  
  input SiteQueryInput {
    _id_gte: ObjectId
    _id_in: [ObjectId]
    updated_at_gte: DateTime
    created_at_in: [DateTime]
    created_at_ne: DateTime
    deleted_at_nin: [DateTime]
    googleAnalyticsCode_lt: String
    default_language_in: [String]
    payment_status: String
    payment_status_id_ne: String
    subcription_id_gte: ObjectId
    payment_status_exists: Boolean
    suspended: Boolean
    default_language_lt: String
    payment_status_gte: String
    updated_at_lt: DateTime
    subcription_id_lt: ObjectId
    payment_status_nin: [String]
    googleAnalyticsCode_gte: String
    active: Boolean
    delete_exists: Boolean
    created_by_gt: ObjectId
    created_at_gte: DateTime
    name_nin: [String]
    OR: [SiteQueryInput!]
    updated_at_gt: DateTime
    deleted_at_lt: DateTime
    _id_nin: [ObjectId]
    account_status_in: [String]
    googleAnalyticsCode_in: [String]
    created_by_lte: ObjectId
    accessible: Boolean
    created_at_lt: DateTime
    payment_status_lt: String
    deleted_at_in: [DateTime]
    created_by_ne: ObjectId
    account_status_nin: [String]
    updated_at_in: [DateTime]
    created_at_lte: DateTime
    _id_ne: ObjectId
    suspended_ne: Boolean
    created_by_in: [ObjectId]
    delete_ne: Boolean
    subcription_id_ne: ObjectId
    AND: [SiteQueryInput!]
    deleted_at: DateTime
    created_by_gte: ObjectId
    updated_at_lte: DateTime
    name_in: [String]
    suspended_exists: Boolean
    default_language_lte: String
    subcription_id_nin: [ObjectId]
    accessible_ne: Boolean
    created_at_exists: Boolean
    created_at_nin: [DateTime]
    payment_status_id_lte: String
    subcription_id_exists: Boolean
    payment_status_ne: String
    payment_status_in: [String]
    _id_gt: ObjectId
    deleted_at_gte: DateTime
    default_language_gt: String
    payment_status_id_lt: String
    default_language_ne: String
    created_by_lt: ObjectId
    account_status_gt: String
    default_language_exists: Boolean
    payment_status_id_nin: [String]
    name_exists: Boolean
    updated_at_nin: [DateTime]
    delete: Boolean
    googleAnalyticsCode_exists: Boolean
    accessible_exists: Boolean
    account_status_gte: String
    account_status_exists: Boolean
    name: String
    created_by_nin: [ObjectId]
    payment_status_id_in: [String]
    active_ne: Boolean
    name_ne: String
    created_by: ObjectId
    subcription_id_gt: ObjectId
    account_status_lt: String
    created_at: DateTime
    payment_status_gt: String
    _id_lte: ObjectId
    payment_status_lte: String
    name_lt: String
    active_exists: Boolean
    deleted_at_exists: Boolean
    deleted_at_gt: DateTime
    googleAnalyticsCode_lte: String
    googleAnalyticsCode_gt: String
    payment_status_id: String
    account_status_ne: String
    subcription_id: ObjectId
    deleted_at_ne: DateTime
    account_status: String
    subcription_id_in: [ObjectId]
    _id: ObjectId
    name_gte: String
    account_status_lte: String
    googleAnalyticsCode: String
    payment_status_id_exists: Boolean
    default_language: String
    deleted_at_lte: DateTime
    _id_exists: Boolean
    created_by_exists: Boolean
    default_language_nin: [String]
    _id_lt: ObjectId
    payment_status_id_gt: String
    name_gt: String
    name_lte: String
    updated_at_exists: Boolean
    googleAnalyticsCode_ne: String
    updated_at: DateTime
    payment_status_id_gte: String
    updated_at_ne: DateTime
    default_language_gte: String
    googleAnalyticsCode_nin: [String]
    subcription_id_lte: ObjectId
    created_at_gt: DateTime
  }
  
  input LocationsettingVideoQueryInput {
    type_ne: String
    integration_id_lte: String
    OR: [LocationsettingVideoQueryInput!]
    integration_id_exists: Boolean
    type_gt: String
    integration_id_in: [String]
    integration_id_ne: String
    type: String
    type_lt: String
    integration_id_lt: String
    integration_id_nin: [String]
    AND: [LocationsettingVideoQueryInput!]
    integration_id: String
    type_lte: String
    type_in: [String]
    type_gte: String
    integration_id_gt: String
    integration_id_gte: String
    type_nin: [String]
    type_exists: Boolean
  }
  
  enum StaffSortByInput {
    TITLE_ASC
    USER_ID_ASC
    DISPLAY_NAME_DESC
    EXPERIENCE_YEAR_DESC
    FIRST_NAME_DESC
    GENDER_DESC
    _ID_ASC
    EXPERIENCE_MONTH_DESC
    EXPERIENCE_YEAR_ASC
    DESCRIPTION_DESC
    EMPLOYEMENT_TO_ASC
    EMPLOYEMENT_TO_DESC
    GENDER_ASC
    COLOR_CODE_ASC
    CREATED_AT_DESC
    DELETED_AT_ASC
    DESCRIPTION_ASC
    EMAIL_DESC
    NAME_DESC
    EXPERIENCE_MONTH_ASC
    SITE_ID_ASC
    UPDATED_AT_DESC
    AVATAR_OR_ICON_DESC
    COLOR_CODE_DESC
    EMAIL_VERIFIED_DATE_TIME_DESC
    EMPLOYEMENT_FROM_DESC
    LAST_NAME_ASC
    SLUG_ASC
    SLUG_DESC
    SORTING_ID_DESC
    CREATED_BY_DESC
    DELETED_AT_DESC
    DISPLAY_NAME_ASC
    UPDATED_AT_ASC
    USER_ID_DESC
    CREATED_BY_ASC
    EMAIL_VERIFIED_DATE_TIME_ASC
    SITE_ID_DESC
    AVATAR_OR_ICON_PATH_DESC
    CREATED_AT_ASC
    EMAIL_ASC
    EMPLOYEMENT_FROM_ASC
    FIRST_NAME_ASC
    _ID_DESC
    AVATAR_OR_ICON_ASC
    AVATAR_OR_ICON_PATH_ASC
    TITLE_DESC
    LAST_NAME_DESC
    NAME_ASC
    SORTING_ID_ASC
  }
  
  input BusinessBusiness_info_idsRelationInput {
    link: [ObjectId]
    create: [BusinessinfoInsertInput]
  }
  
  input StaffdetailCreated_byRelationInput {
    create: StaffInsertInput
    link: ObjectId
  }
  
  input BusinessinfoUpdateInput {
    business_category_unset: Boolean
    _id: ObjectId
    site_id_unset: Boolean
    policy: BusinessinfoPolicyUpdateInput
    bookingLinks_unset: Boolean
    address_ids: BusinessinfoAddress_idsRelationInput
    delete: Boolean
    accessible_unset: Boolean
    created_at_unset: Boolean
    business_hour_end_unset: Boolean
    timing_ids_unset: Boolean
    created_by_unset: Boolean
    _id_unset: Boolean
    tax_percentage_inc: Int
    is_tax_unset: Boolean
    bookingLinks: String
    business_category: BusinessinfoBusiness_categoryRelationInput
    workspace_id_unset: Boolean
    updated_at_unset: Boolean
    active: Boolean
    accessible: Boolean
    active_unset: Boolean
    timing_ids: [ObjectId]
    deleted_at_unset: Boolean
    business_hour_end: Int
    first_day_inc: Int
    timeFormat: Int
    timeFormat_unset: Boolean
    time_zone: String
    workspace_id: BusinessinfoWorkspace_idRelationInput
    policy_unset: Boolean
    restrictedDays: [DateTime]
    updated_at: DateTime
    address_ids_unset: Boolean
    time_zone_unset: Boolean
    delete_unset: Boolean
    site_id: BusinessinfoSite_idRelationInput
    business_hour_start_unset: Boolean
    timeFormat_inc: Int
    created_by: BusinessinfoCreated_byRelationInput
    tax_no_unset: Boolean
    first_day: Int
    created_at: DateTime
    deleted_at: DateTime
    is_tax: Boolean
    date_format: String
    date_format_unset: Boolean
    first_day_unset: Boolean
    tax_percentage_unset: Boolean
    business_hour_end_inc: Int
    business_hour_start_inc: Int
    restrictedDays_unset: Boolean
    tax_percentage: Int
    tax_no: String
    business_hour_start: Int
  }
  
  input StaffSocial_networkQueryInput {
    link_in: [String]
    link: String
    network_lte: String
    network_in: [String]
    network_lt: String
    AND: [StaffSocial_networkQueryInput!]
    link_exists: Boolean
    network_exists: Boolean
    link_ne: String
    network_gt: String
    link_gte: String
    network_gte: String
    link_gt: String
    link_nin: [String]
    network: String
    link_lt: String
    network_ne: String
    link_lte: String
    network_nin: [String]
    OR: [StaffSocial_networkQueryInput!]
  }
  
  type Permission {
    _id: ObjectId
    category: String
    name: String
    site_id: Site
    system_name: String
    workspace_id: Workspace
  }
  
  input BusinessinfoBusiness_categoryRelationInput {
    create: [BusinesscategoryInsertInput]
    link: [ObjectId]
  }
  
  input LocationsettingLocation_idRelationInput {
    link: ObjectId
    create: LocationInsertInput
  }
  
  type StaffPhone {
    country_code: String
    is_verified: Boolean
    name: String
    no: String
    type: String
  }
  
  input AddressUpdateInput {
    state: String
    active: Boolean
    address1_unset: Boolean
    phone: [AddressPhoneUpdateInput]
    site_id_unset: Boolean
    email: String
    workspace_id_unset: Boolean
    address2_unset: Boolean
    accessible_unset: Boolean
    created_by_unset: Boolean
    deleted_at_unset: Boolean
    phone_unset: Boolean
    address1: String
    city_unset: Boolean
    zipCode: String
    created_by: AddressCreated_byRelationInput
    deleted_at: DateTime
    zipCode_unset: Boolean
    _id: ObjectId
    longitude: String
    type_unset: Boolean
    business_head_ofice: Boolean
    account_status_unset: Boolean
    address2: String
    created_at: DateTime
    delete: Boolean
    business_branch_unset: Boolean
    latitude: String
    country_unset: Boolean
    latitude_unset: Boolean
    account_status: String
    default_address_unset: Boolean
    site_id: AddressSite_idRelationInput
    longitude_unset: Boolean
    updated_at: DateTime
    country: String
    business_head_ofice_unset: Boolean
    default_address: Boolean
    accessible: Boolean
    delete_unset: Boolean
    _id_unset: Boolean
    state_unset: Boolean
    workspace_id: AddressWorkspace_idRelationInput
    active_unset: Boolean
    business_branch: Boolean
    created_at_unset: Boolean
    type: String
    city: String
    updated_at_unset: Boolean
    email_unset: Boolean
  }
  
  input RolePermission_idsRelationInput {
    link: [ObjectId]
    create: [PermissionInsertInput]
  }
  
  input TimingBreaktimeUpdateInput {
    start_time: String
    start_time_unset: Boolean
    end_time: String
    end_time_unset: Boolean
  }
  