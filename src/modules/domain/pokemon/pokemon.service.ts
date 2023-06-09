import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonEntity } from '../entity/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(@InjectRepository(PokemonEntity) private readonly PokemonRepository: Repository<PokemonEntity>) {
  }

  async createPokemon(data: any): Promise<PokemonEntity> {
    let pokemon = new PokemonEntity();
    pokemon.name = data.name;
    pokemon.pokedex = data.pokedex;
    pokemon.type = data.type;
    await pokemon.save();
    return pokemon;
  }

  async delete(id): Promise<PokemonEntity> {
    const pokemon:any = await PokemonEntity.findOne(id);
    this.PokemonRepository.delete(pokemon);
    return pokemon;
  }

  async update(id, data: any): Promise<PokemonEntity> {
    const pokemon = await PokemonEntity.findOne(id);
    pokemon.name = data.name;
    pokemon.pokedex = data.pokedex;
    pokemon.type = data.type;
    await pokemon.save();
    return pokemon;
  }

  async show(id: string) {
    return await this.PokemonRepository.findOne({ where: { id } });
  }

  async getPokemons() {
    return await this.PokemonRepository.find();
  }
}