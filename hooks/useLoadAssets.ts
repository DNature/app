import * as Font from 'expo-font';
import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export type FontSource = Parameters<typeof Font.loadAsync>[0];

const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
  React.useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

export const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = React.useState(false);
  usePromiseAll(
    [
      Font.loadAsync(fonts),
      Font.loadAsync({
        ...Ionicons.font
      }),
      ...assets.map((asset) => Asset.loadAsync(asset))
    ],
    () => setReady(true)
  );
  return ready;
};
