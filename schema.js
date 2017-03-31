import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const PeopleType = new GraphQLObjectType({
  fields: () => ({
    id: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})

export default new GraphQLSchema({
  query: PeopleType,
});
