import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [{

    path: "",
    title: "Home Page",
    component: HomeComponent
},
{

    path: "users",
    title: "Users Page",
    component: UsersComponent
},
{

    path: "users/:id",
    title: "Users Dynamic Page",
    component: UserComponent
},
    // {
    //     path: '**',
    //     title : "Error Not Found",
    //     component: NotFoundComponent
    //   }

];
