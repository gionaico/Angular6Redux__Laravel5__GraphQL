import { GraphqlModule } from './graphql.module';

describe('GraphqlModule', () => {
  let graphqlModule: GraphqlModule;

  beforeEach(() => {
    graphqlModule = new GraphqlModule();
  });

  it('should create an instance', () => {
    expect(graphqlModule).toBeTruthy();
  });
});
