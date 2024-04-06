import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (_route, _state) => {
 
  return false;
};
