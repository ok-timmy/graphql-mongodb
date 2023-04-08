import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GraphQLModule, AuthModule],
  controllers: [UserController],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
