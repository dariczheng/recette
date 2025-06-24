import { Component } from '@angular/core';
import { Recette, RECETTES } from '../recettes.data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'recette';
  recettes: Recette[] = RECETTES;
}
