import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponent implements OnInit {
  currentPath = '';
  items: NbMenuItem[] = [
    {
      title: 'Buscar repositórios',
      icon: 'search-outline',
      link: '/dashboard/search',
    },
    {
      title: 'Repositórios salvos',
      icon: 'save-outline',
      link: '/dashboard/repositories',
    },
  ];
  constructor(
    private router: Router,
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'left');
  }

}
