import { Module } from '@nestjs/common';
import { FictionController } from './controller/fiction.controller';
import { FictionService } from './service/fiction.service';
import { AnimeController } from './controller/anime.controller';
import { AnimeService } from './service/anime.service';
import { ComicController } from './controller/comic.controller';
import { ComicService } from './service/comic.service';
@Module({
  imports: [],
  controllers: [FictionController, AnimeController, ComicController],
  providers: [FictionService, AnimeService, ComicService],
})
export class AppModule {}
