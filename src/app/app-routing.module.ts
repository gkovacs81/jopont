import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";

const routes: Routes = [
  // no layout views
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
