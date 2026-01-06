import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupComponent } from './new-group.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GroupEntriesService } from '../../services/group-entries.service';

describe('NewGroupComponent', () => {
  let component: NewGroupComponent;
  let fixture: ComponentFixture<NewGroupComponent>;

  beforeEach(async () => {
    const activatedRouteStub = {
      data: of({ group: { id: 'test-id', name: 'Test Group' } }),
    };

    const groupEntriesServiceStub = {
      groupsEntries: () => [],
      loadByGroupId: jasmine.createSpy('loadByGroupId'),
      enableRealtime: jasmine.createSpy('enableRealtime'),
      add: jasmine.createSpy('add'),
    };

    await TestBed.configureTestingModule({
      imports: [NewGroupComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: GroupEntriesService, useValue: groupEntriesServiceStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
