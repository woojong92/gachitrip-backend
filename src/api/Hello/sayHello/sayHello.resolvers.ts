import { SayHelloResponse, SayHelloQueryArgs } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
            return {
                text: `Hello ${args.name}`,
                error: false
            }
        }
    }
}

export default resolvers;