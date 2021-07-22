import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
  title: String,
  name: String,
  slug: String,
  first_name: String,
  last_name: String,
  phone: [
    {
      name: String,
      staff_type: String,
      country_code: String,
      no: Number,
      is_verified: Boolean
    }
  ],
  email: String,
  is_email_verified: Boolean,
  email_verified_date_time: String,
  employement_from: String,
  employement_to: String,
  experience_month: Number,
  experience_year: Number,
  gender: String,
  description: String,
  display_name: String,
  color_code: Number,
  avatar_or_icon: String,
  avatar_or_icon_path: String,
  showSocialShare: Boolean,
  social_network: [
    {
      network: String,
      link: String
    }
  ],
  sorting_id: Number,
  is_active: Boolean,
  site_owener: Boolean,
  workspace_ids: [String],
  site_id: String,
  created_by: String,
  created_at: String,
  updated_at: String,
  deleted_at: String,
  staff_detail_id: [String],
  user_id: String
})

const Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff;