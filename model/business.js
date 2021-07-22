import mongoose from 'mongoose'

const businessSchema = new mongoose.Schema({
  type: String,
  display_name: String,
  business_branch: String,
  description: String,
  name: String,
  staff_size: Number,
  color_code: String,
  avatar_or_icon: String,
  avatar_or_icon_path: String,
  active: Boolean,
  accessible: Boolean,
  deleted: Boolean,
  email_signature: String,
  showSocialShare: Boolean,
  social_network: [
    {
      network: String,
      link: String
    }
  ],
  site_id: String,
  workspace_ids: [String],
  created_by: String,
  created_at: String,
  updated_at: String,
  deleted_at: String,
  business_info_ids: [String],
  web_url: String

})

const Business = mongoose.model('Business', businessSchema)
module.exports = Business;