import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { AuthGuard } from './services/auth.guard';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NoContentComponent },
];
