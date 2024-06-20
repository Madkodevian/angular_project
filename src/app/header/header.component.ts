import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked{

  constructor() {}



  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges initialized');
  }

  ngOnInit(): void {
    // Implementación del método ngOnInit
    // Aquí puedes inicializar cualquier lógica que necesites
    console.log('HeaderComponent initialized');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck initialized');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit initialized');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked initialized');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy initialized');
  }
}

