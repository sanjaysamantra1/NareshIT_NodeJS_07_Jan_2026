import User from '../models/user_model.js';

export const resolvers = {
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id)
    },
    Mutation: {
        createUser: async (_, { name, email, gender, sal }) => {
            const user = new User({ name, email, gender, sal });
            return await user.save();
        },
        deleteUser: async (_, { id }) => {
            await User.findByIdAndDelete(id);
            return `User ${id} Deleted Successfully`
        }
    }
}