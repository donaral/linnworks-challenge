import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '../node_modules/@angular/router';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component'; 
import { LoginComponent } from './app/login/login.component';
import { NavMenuComponent } from './app/nav-menu/nav-menu.component';

describe( 'AppComponent', () => {
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
//    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  
  ];
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent
      ],
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));    

  it('should have correct title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Duygu');
  }));  
    
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ...');
  }));  
});

// describe('LoginComponent')

// LoginComponent,
// NavMenuComponent
