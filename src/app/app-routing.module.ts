import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LoginRoutes } from './login/login-routing.module';
import { UsersRoutes } from './users/users-routing.module';
import { OrdersRoutes } from './orders/orders.routing.module';
import { HomeRoutes } from './home/login-routing.module';
import { EditUserRoutes } from './edit-user/login-routing.module';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},
	...LoginRoutes,
	...UsersRoutes,
	...OrdersRoutes,
	...HomeRoutes,
	...EditUserRoutes
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}