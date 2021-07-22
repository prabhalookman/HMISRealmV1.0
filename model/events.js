import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  name: String,
  event_one_on_one: Boolean,
  event_group: Boolean,
  event_round_robin: Boolean,
  event_collective: Boolean,
  event_type: String,
  description: String,
  active: Boolean,
  deleted: Boolean,
  color_code: String,
  display_name: String,
  booking_url: String,
  is_recurring: Boolean,
  avatar_or_icon: String,
  avatar_or_icon_path: String,
  event_category_id: String,
  allow_waitlist: Boolean,
  staff_conformation: Boolean,
  allow_multiple_appointment: Boolean,
  no_of_multiple_appointment: Number,
  display_booking_page: Boolean,
  prefered_gender: String,
  display_order: Number,
  commission_enabled: Boolean,
  extra_time_in_seconds: Number,
  extra_time_type: String,
  room_required: Boolean,
  resource_required: Boolean,
  room_id: String,
  rosource_id: String,
  sorting_id: Number,
  voucher_expiration_period: String,
  limit_booking: Boolean,
  booking_limit: Number,
  occupancy: Number,
  running_status: Boolean,
  scheduling_notice: {
    limit: Number,
    sch_notice_type: String
  },
  time_zone: String,
  duration_hours: Number,
  duration_minutes: Number,
  buffer_before_min: Number,
  buffer_after_min: Number,
  latest_appointment: Number,
  advanced_appointment: Number,
  hide_duration_on_booking_page: Boolean,
  enable_appointment_at_fixed_time: Boolean,
  multiple_duration: Boolean,
  max_duration_in_seconds: Number,
  min_duration_in_seconds: Number,
  date_range_enable: Boolean,
  availability_range: {
    date_range: {
      from: String,
      to: String
    },
    advance: {
      no: Number,
      advance_type: String
    },
    Indefinitely: Boolean
  },
  currency: String,
  enable_accept_payments: Boolean,
  accept_deposits: Boolean,
  payment_type: String,
  deposit: Number,
  taxable: Boolean,
  tax_percentage: Number,
  require_payment_for_events: Boolean,
  payment_show_in_booking_page: Boolean,
  staff_commission: Boolean,
  staff_commission_percentage: Number,
  voucher_enabled: Boolean,
  multiple_pricing_enabled: Boolean,
  voucher_id: String,
  service_pricing_by_staff_enabled: Boolean,
  advance_pricing_ids: [String],
  timing_ids: [String],
  staff_ids: [String],
  add_on_ids: [String],
  included: [
    {
      name: String,
      description: String,
      included_type: String,
      extra_price: Boolean,
      price: Number
    }
  ],
  excluded: [
    {
      name: String,
      description: String,
      excluded_type: String,
      extra_price: Boolean,
      price: Number
    }
  ],
  site_id: String,
  created_by: String,
  created_at: String,
  updated_at: String,
  deleted_at: String,
  workspace_id: String,
  advanced_pricing: Boolean
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event;