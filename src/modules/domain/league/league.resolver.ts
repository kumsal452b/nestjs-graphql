import { LeagueEntity } from '../entity/league.entity';
import { LeagueService } from './league.service';
import {Query,Args,Mutation,Resolver} from '@nestjs/graphql'

@Resolver(of=>LeagueEntity)
export class LeagueResolver {
  constructor(private readonly leagueService: LeagueService) {}
  @Query()
  async leagues(){
    return this.leagueService.getLeagues();
  }

  @Query()
  async pokemon(@Args('id') id:string){

    return this.leagueService.show(id);
  }
  @Mutation()
  async create(@Args('name') name:string,@Args('type') type:string){
    
    return await this.leagueService.createLeague({name,type});
  }
  @Mutation()
  async delete(@Args('id') id:string){
    await this.leagueService.delete(id)
    return {delete:true };
  }
}
