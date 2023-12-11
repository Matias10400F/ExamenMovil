// local-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageKey = 'posts';

  constructor() {}

  getPosts(): any[] {
    const storedPosts = localStorage.getItem(this.localStorageKey);
    return storedPosts ? JSON.parse(storedPosts) : [];
  }

  addPost(post: any): void {
    const storedPosts = this.getPosts();
    storedPosts.push(post);
    localStorage.setItem(this.localStorageKey, JSON.stringify(storedPosts));
  }

  clearPosts(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
