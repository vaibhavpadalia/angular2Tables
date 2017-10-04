import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'customerlist', component: CustomerListComponent },
    { path: '', component: WelcomeComponent},
    { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [CustomerListComponent, WelcomeComponent ];
