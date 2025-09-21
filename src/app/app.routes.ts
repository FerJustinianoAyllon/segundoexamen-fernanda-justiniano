import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Ui } from './pages/ui/ui';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children: [
            {
                path: '',
                component:Home,
                title:'Segundo Examen'
            },
           {
                path: 'ui',            
                component: Ui,
                title: 'Demostración de Componentes'
           }
        ]
    }
];
