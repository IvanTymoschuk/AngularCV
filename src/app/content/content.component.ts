import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as icons from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent  {

  faTelegram = icons.faTelegram;
  faGithub = icons.faGithub;
  faLinked = icons.faLinkedin;
  faGmail = icons.faMailchimp;

  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
