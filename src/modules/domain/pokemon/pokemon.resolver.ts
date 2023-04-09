import { PokemonEntity } from '../entity/pokemon.entity';
import { PokemonService } from './pokemon.service';
import {Query,Args,Mutation,Resolver} from '@nestjs/graphql'

@Resolver(of=>PokemonEntity)
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}
  @Query()
  async pokemons(){
    return this.pokemonService.getPokemons();
  }

  @Query()
  async pokemon(@Args('id') id:string){
    return this.pokemonService.show(id);
  }
  @Mutation()
  async create(@Args('name') name:string,@Args('type') type:string){
    
    return await this.pokemonService.createPokemon({name,type});
  }
  @Mutation()
  async delete(@Args('id') id:string){
    await this.pokemonService.delete(id)
    return {delete:true };
  }
}
