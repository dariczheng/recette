import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RECETTES } from '../recettes.data';

@Component({
  selector: 'app-recette-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss'],
})
export class RecetteDetailComponent {
  private activatedRoute = inject(ActivatedRoute);
  recette = RECETTES.find(
    (r) => r.nom === (this.activatedRoute.snapshot.params['nom'] || '')
  );
}
