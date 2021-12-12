export const resolvers = {
  Mutation: {
    registerUser: (parent: undefined, args: any) => {
      return args.firstName + " " + args.lastName;
    },
  },
};
