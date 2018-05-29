import { NgModule } from '@angular/core';
import { SufgLoginComponent } from './sufg-login/sufg-login';
import { SufgCadastrarUsuarioComponent } from './sufg-cadastrar-usuario/sufg-cadastrar-usuario';
import { SufgUsuarioComponent } from './sufg-usuario/sufg-usuario';
@NgModule({
	declarations: [SufgLoginComponent,
    SufgCadastrarUsuarioComponent,
    SufgUsuarioComponent],
	imports: [],
	exports: [SufgLoginComponent,
    SufgCadastrarUsuarioComponent,
    SufgUsuarioComponent]
})
export class ComponentsModule {}
