// src/app/pages/complete/complete.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from '@rxjs/Observable';
import { Subscription } from '@rxjs/Subscription';
import { Store } from '@ngrx/store';
import { RESET } from './../../actions/pet-tag.actions';
import { PetTag } from './../../models/pet-tag.model';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html'
})
export class CompleteComponent implements OnInit, OnDestroy {
  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>, public auth: AuthService) {
    this.tagState$ = store.select('petTag');
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: RESET
    });
  }

}