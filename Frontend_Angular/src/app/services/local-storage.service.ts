import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  clear() {
    this.storage.clear();
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  delete(key: string) {
    this.storage.removeItem(key);
  }
}
