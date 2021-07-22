import mongoose from 'mongoose'

const staffDetailsSchema = new mongoose.Schema({
  is_service_provider: Boolean,
  booking_url: String,
  email_signature: String,
  deafult_calendar_view: String,
  business_timings: Boolean,
  business_ids: [String],
  staff_commission: Boolean,
  paid_plan_commission: Boolean,
  product_commission: String,
  service_commission: String,
  voucher_commission: String,
  is_sync_enabled: Boolean,
  sync: [
    {
      staff_syc_type: String,
      key: String
    }
  ],
  workspace_id: [String],
  created_by: String,
  created_at: String,
  updated_at: String,
  deleted_at: String,
  site_id: String,
  address_ids: [String],
  timing_ids: [String],
  active: Boolean,
  delete: Boolean,
  invitation_status_accept: Boolean,
  is_login: Boolean,
  sorting_id: Number,
  event_ids: [String]
})

const StaffDetails = mongoose.model('StaffDetails', staffDetailsSchema)
module.exports = StaffDetails;