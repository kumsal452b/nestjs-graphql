import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PokemonEntity } from "../entity/pokemon.entity";
import { PokemonService } from "./pokemon.service";
import { PokemonResolver } from "./pokemon.resolver";

@Module({
    imports:[TypeOrmModule.forFeature([PokemonEntity])],
    providers:[PokemonService,PokemonResolver],
    exports:[PokemonService,PokemonResolver]
})
export class PokemonModule{}