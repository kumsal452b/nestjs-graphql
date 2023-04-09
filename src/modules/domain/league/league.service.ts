import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeagueEntity } from '../entity/league.entity';

@Injectable()
export class LeagueService {
  constructor(@InjectRepository(LeagueEntity) private readonly LeagueRepository: Repository<LeagueEntity>) {
  }

  async createLeague(data: any): Promise<LeagueEntity> {
    let league = new LeagueEntity();
    league.name = data.name;
    await league.save();
    return league;
  }

  async delete(id): Promise<LeagueEntity> {
    const league:any = await LeagueEntity.findOne(id);
    this.LeagueRepository.delete(league);
    return league;
  }

  async update(id, data: any): Promise<LeagueEntity> {
    const league = await LeagueEntity.findOne(id);
    league.name = data.name;
    await league.save();
    return league;
  }

  async show(id: string) {
    return await this.LeagueRepository.findOne({ where: { id } });
  }

  async getLeagues() {
    return await this.LeagueRepository.find();
  }
}