import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisArriendosPage } from './mis-arriendos.page';

describe('MisArriendosPage', () => {
  let component: MisArriendosPage;
  let fixture: ComponentFixture<MisArriendosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisArriendosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
