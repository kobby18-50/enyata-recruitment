import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
    client_id : {
        type : Number,
        required : [true, 'Client Id is required']
    },

    incident_desc : {
        type : String,
        required : [true, 'Incident Description is required']
    },

    city : {
        type : String,
        required : [true, 'City is required'],
    },

    country : {
        type : String,
        required : [true, 'Country is required']
    },

    wheatherReport : Object
})

export default mongoose.model('Incident', IncidentSchema)