import { Schema, model } from 'mongoose';

const TaskSchema = Schema (
    {
        title: {
            type: String,
            required: true,
            trim: true, // quita espacios extras, es un método string
            unique: true
        },
        description: {
            type: String,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model('Task', TaskSchema);