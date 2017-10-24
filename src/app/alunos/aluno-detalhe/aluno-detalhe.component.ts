import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // );

    this.inscricao = this.route.data.subscribe(
      (info) => {
        this.aluno = info.aluno;
      });
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
