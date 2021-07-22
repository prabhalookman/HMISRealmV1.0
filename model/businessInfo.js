import mongoose from 'mongoose'

const businessInfoSchema = new mongoose.Schema({
  address_ids: [String],
  timing_ids: [String],
  time_zone: String,
  timeFormat: Number,
  date_format: String,
  first_day: Number,
  business_hour_start: Number,
  business_hour_end: Number,
  business_category_ids: [String],
  restrictedDays: [String],
  active: Boolean,
  accessible: Boolean,
  deleted: Boolean,
  booking_links: String,
  is_tax: Boolean,
  tax_no: String,
  tax_percentage: Number,
  policy: {
    appointment: String,
    cancellation: String,
    terms_and_condition: String
  },
  site_id: String,
  workspace_ids: [String],
  created_by: String,
  created_at: String,
  updated_at: String,
  deleted_at: String
})

const BusinessInfo = mongoose.model('BusinessInfo', businessInfoSchema)
module.exports = BusinessInfo;