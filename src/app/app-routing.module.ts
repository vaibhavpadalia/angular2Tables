import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'customerlist', component: CustomerListComponent },
    { path: '', component: WelcomeComponent},
    { path: 'showdetails/:id/:firstName/:lastName/:email/:isActive/:dateCreated/:dateUpdated', component: ShowDetailsComponent },
    { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [CustomerListComponent, WelcomeComponent , ShowDetailsComponent];
