import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { StudentsModule } from './modules/students/students.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    StudentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
