import { observable } from '@legendapp/state';
import { configureObservablePersistence, persistObservable } from '@legendapp/state/persist';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';
import { router } from 'expo-router';

interface User {
  user_id: string;
  username: string;
  role_id: RoleId;
  user_status: string;
}

interface RoleId {
  roleId: string;
  roleName: string;
}

configureObservablePersistence({
  pluginLocal: ObservablePersistMMKV,
});

export const $user = observable<User | null>(null);

persistObservable($user, {
  local: 'CarWashApp_user',
});

export async function signOut() {
  router.replace('/sign-in');
  $user.delete();
}
