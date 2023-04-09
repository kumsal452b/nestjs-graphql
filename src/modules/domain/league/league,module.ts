import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueService } from './league.service';
import { LeagueEntity } from '../entity/league.entity';
import { LeagueResolver } from './league.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([LeagueEntity])],
  providers: [LeagueService, LeagueResolver],
  exports: [LeagueService, LeagueResolver],
})
export class LeagueModule {}
