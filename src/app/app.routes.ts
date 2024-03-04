import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormCreationPersoComponent} from './pages/form-creation-perso/form-creation-perso.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "form-creation-perso",
        component: FormCreationPersoComponent
    },
    {
        path: "**",
        redirectTo: ''
    }
];

