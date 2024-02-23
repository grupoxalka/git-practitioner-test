import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/components/card/card.component';
import { CharacterService } from './shared/services/character.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    CardComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'RickAndMortyAPP';

  constructor(private characterService: CharacterService) {}
  counts: any = {};
  characters: Array<any> = []; //data = undefined
  
  ngOnInit(): void {
    this.characterService.getData().subscribe((data) => {
      console.log(data); //data = content
      this.characters = data;
      // Por cada personaje, obtenemos el nombre del episodio
      this.characters.forEach((character) => {
        this.characterService
          .getEpisode(character.episode[0])
          .subscribe((episodeName) => {
            character.episodeName = episodeName;
            console.log(episodeName);
          });
      });
    });
    // Obtener los recuentos
    this.characterService.getCounts().subscribe((counts) => {
      this.counts = counts;
    });
  }
}
