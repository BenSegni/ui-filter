import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PageOneComponent } from "./pages/page-one/page-one.component";
import { PageTwoComponent } from "./pages/page-two/page-two.component";
import { PageThreeComponent } from "./pages/page-three/page-three.component";

const routes: Route[] = [
    {
        path: '',
        redirectTo: 'page-one',
        pathMatch: 'full'
    },
    {
        path: 'page-one',
        component: PageOneComponent
    },
    {
        path: 'page-two',
        component: PageTwoComponent
    },
    {
        path: 'page-three',
        component: PageThreeComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}