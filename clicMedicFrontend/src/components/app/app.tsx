import AppLayout from '.';

import { ContextController } from './contextController';
import { Auth } from '@clicMedic/module/auth/auth';

export const AppUI = () => {
  return (
    <ContextController>
      <AppLayout>
        <Auth />
      </AppLayout>
    </ContextController>
  );
};
