import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema({
  address1: String, 
  address2: String, 
  city: String, 
  state: String, 
  country: String, 
  zipCode: String, 
  latitude: String, 
  longitude: String, 
  type: String, 
  business_branch: Boolean, 
  address_phone: [
    {
    name: String,
    phone_type: String,
    country_code: String,
    no: String, 
    Ext: String
    }
  ], 
  email: String, 
  customer_id: String, 
  account_status: String, 
  active: Boolean, 
  accessible: Boolean, 
  delete: Boolean, 
  site_id: String, 
  workspace_ids: [String], 
  created_by: String, 
  created_at: String, 
  updated_at: String, 
  deleted_at: String, 
  default_address: Boolean, 
  business_head_ofice: Boolean  
})

const Address = mongoose.model('Address', addressSchema)
module.exports = Address;