import { Component, OnInit, Input } from '@angular/core';
import {MatFormField} from '@angular/material/form-field'
import {MatFormFieldModule} from '@angular/material/form-field';
import { Contato } from 'src/app/interfaces/contato';
import { ContatoService } from 'src/app/services/contato.service';



@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  constructor(private ContatoService: ContatoService) { }

  contactPage = {
      nome: "",
      email: "",
      assunto: "", 
      telefone: "",
      mensagem: ""
  }
  teste =" input de teste"

  @Input() title =  "Contato"
  @Input() size = '5'
  @Input() width = '300px'
  @Input() color


  ngOnInit(): void {


  }

  sendContato(){
    const mensagemEnviar = "<h1>Contato via Site</h1> <strong>Nome / Razão Social: </strong>" + this.contactPage.nome + "<br /> <strong>E-mail: </strong>" + this.contactPage.email + "<br /> <strong>Assunto: </strong>" + this.contactPage.assunto + "<br /> <strong>Telefone: </strong>" + this.contactPage.telefone + "<br /> <strong> Mensagem: </strong><p>" + this.contactPage.mensagem + "</p>"
  

                let email = {
                  to: "pmorais.almeida@gmail.com; thales.morais21@gmail.com",
                  from: "sistema@priscilamorais.com",
                  subject: this.contactPage.assunto,
                  message: mensagemEnviar
                }

    this.ContatoService.sendMail(email).subscribe(()=>{
      this.ContatoService.saveContact(this.contactPage).subscribe(()=>{

      })
      alert("E-mail enviado com sucesso em breve entraremos em contato")
    })
    
  }





}
