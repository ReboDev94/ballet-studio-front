export function getTokenStorage(): string {
  const token = localStorage.getItem('token');
  return token || '';
}

export function setTokenStorage(token: string): void {
  localStorage.setItem('token', token);
}

export function removeTokenStorage(): void {
  localStorage.removeItem('token');
}
