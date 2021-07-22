import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    is_owener: Boolean,
    workspace_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workspace' }],
    active: Boolean,
    delete: Boolean,
    site_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Site' },
    role_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
    paccess: String
})

const User = mongoose.model('User', userSchema)
module.exports = User;