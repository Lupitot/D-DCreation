import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RenduapiComponent } from './pages/rendu-api/rendu-api.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "renduapi",
        component: RenduapiComponent

    },
    {
        path: "**",
        redirectTo: ''
    }
];

