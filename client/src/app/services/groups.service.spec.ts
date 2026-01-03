import { TestBed } from '@angular/core/testing';

import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let service: GroupsService;

  // mock groups items
  const mockGroups = [
    {
      title: 'Item 1',
      description: 'Description for Item 1',
      icon: 'https://picsum.photos/200?random=1000',
      color: '#ff0000',
    },
    {
      title: 'Item 2',
      description: 'Description for Item 2',
      icon: 'https://picsum.photos/200?random=1001',
      color: '#00ff00',
    },
    {
      title: 'Item 3',
      description: 'Description for Item 3',
      icon: 'https://picsum.photos/200?random=1002',
      color: '#0000ff',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsService);

    // spy on load method to set mock data
    spyOn(service, 'load').and.callFake(async () => {
      (service as any)._groups.set(mockGroups);
    });

    // call load to initialize with mock data
    service.load();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if title already exists', () => {
    expect(service.titleAlreadyExists('Item 1')).toBeTrue();
    expect(service.titleAlreadyExists('Item 4')).toBeFalse();
  });
});
