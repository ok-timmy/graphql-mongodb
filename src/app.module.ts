import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
