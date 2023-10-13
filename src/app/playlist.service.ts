import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private dbName = 'playlistDB';
  private storeName = 'tracks';
  
  constructor() {
    this.initializeDatabase();
  }

  private async initializeDatabase() {
    const db = await this.openDatabase();
    db.close();
  }

  private async openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = (event) => {
        reject('Error opening database');
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };

      request.onupgradeneeded = (event) => {
        const db: IDBDatabase = request.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  async saveTrack(track: { name: string, path: string, image: string }) {
    const db = await this.openDatabase();
    const transaction = db.transaction([this.storeName], 'readwrite');
    const store = transaction.objectStore(this.storeName);
    store.add(track);
    transaction.oncomplete = () => {
      db.close();
    };
  }

  async getTracks(): Promise<{ name: string, path: string }[]> {
    const db = await this.openDatabase();
    const transaction = db.transaction([this.storeName], 'readonly');
    const store = transaction.objectStore(this.storeName);

    return new Promise((resolve, reject) => {
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = (event) => {
        reject('Error getting tracks');
      };
    });
  }
}