import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent} from './movie.details.component';

describe('Movie.DetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the lifecycle hook: ngOnInit', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });
});
