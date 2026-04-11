import { Component } from '@angular/core';
import { CustomLinkDirective } from "../../shared/custom-link.directive";

@Component({
  selector: 'app-external-links',
  imports: [CustomLinkDirective],
  templateUrl: './external-links.component.html',
  styleUrl: './external-links.component.css',
})
export class ExternalLinksComponent {}
