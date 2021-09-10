import { Module } from '@nestjs/common';
import { FictionController } from './controller/fiction.controller';
import { FictionService } from './service/fiction.service';
import { AnimeController } from './controller/anime.controller';
import { AnimeService } from './service/anime.service';
@Module({
  imports: [],
  controllers: [FictionController, AnimeController],
  providers: [FictionService, AnimeService],
})
export class AppModule {}
