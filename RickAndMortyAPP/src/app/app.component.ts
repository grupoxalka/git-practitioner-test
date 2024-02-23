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

  characters: Array<any> = []; //data = undefined
  ngOnInit(): void {
    this.characterService.getData().subscribe((data) => {
      console.log(data); //data = content
      this.characters = data;
    });
    console.log(this.characters);
  }
}
