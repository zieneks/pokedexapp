export interface CacheRecord<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export function setCache<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): void {
  try {
    const record: CacheRecord<T> = {
      data,
      timestamp: Date.now(),
      ttl
    };
    localStorage.setItem(key, JSON.stringify(record));
  } catch (error) {
    console.warn('Failed to set cache:', error);
    try {
      const record: CacheRecord<T> = {
        data,
        timestamp: Date.now(),
        ttl
      };
      sessionStorage.setItem(key, JSON.stringify(record));
    } catch (sessionError) {
      console.error('Failed to set cache in sessionStorage:', sessionError);
    }
  }
}

export function getCache<T>(key: string): T | null {
  try {
    const recordStr = localStorage.getItem(key);
    if (recordStr) {
      const record: CacheRecord<T> = JSON.parse(recordStr);
      if (Date.now() - record.timestamp < record.ttl) {
        return record.data;
      } else {
        localStorage.removeItem(key);
      }
    }
  } catch (error) {
    console.warn('Failed to get cache from localStorage:', error);
  }

  try {
    const recordStr = sessionStorage.getItem(key);
    if (recordStr) {
      const record: CacheRecord<T> = JSON.parse(recordStr);
      if (Date.now() - record.timestamp < record.ttl) {
        return record.data;
      } else {
        sessionStorage.removeItem(key);
      }
    }
  } catch (error) {
    console.warn('Failed to get cache from sessionStorage:', error);
  }

  return null;
}

