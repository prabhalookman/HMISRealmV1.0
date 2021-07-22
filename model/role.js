import mongoose from 'mongoose'
const roleSchema = new mongoose.Schema({
    name: String,
    active: Boolean,
    delete: Boolean,
    is_system_role: Boolean,
    system_name: String,
    site_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Site' },
    workspace_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' },
    createdOn_utc: String,
    permission_ids: [String]
})

const Role = mongoose.model('Role', roleSchema)
module.exports = Role;