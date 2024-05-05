import { observer } from '@legendapp/state/react';
import { Redirect } from 'expo-router';

import { $user } from '@/context/authContext';

export default observer(() => {
  if ($user.get()?.user_id) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/sign-in" />;
  }
});
