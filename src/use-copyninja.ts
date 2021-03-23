import * as React from 'react';
import useClippy from 'use-clippy';
const _ = require('lodash');

interface Clipboard {
  readText(): Promise<string>;
  writeText(text: string): Promise<void>;
}

// interface ClipboardDataWindow extends Window {
//   clipboardData: DataTransfer | null;
// }

type ClipboardEventListener =
  EventListenerObject | null | ((event: ClipboardEvent) => void);

interface ClipboardEventTarget extends EventTarget {
  addEventListener(type: 'copy', eventListener: ClipboardEventListener): void;
  addEventListener(type: 'cut', eventListener: ClipboardEventListener): void;
  addEventListener(type: 'paste', eventListener: ClipboardEventListener): void;
  removeEventListener(type: 'copy', eventListener: ClipboardEventListener):
    void;
  removeEventListener(type: 'cut', eventListener: ClipboardEventListener):
    void;
  removeEventListener(type: 'paste', eventListener: ClipboardEventListener):
    void;
}

interface ClipboardNavigator extends Navigator {
  clipboard: Clipboard & ClipboardEventTarget;
}

type CopyninjaTuple = [
  string[],
  (clipboard: string) => void,
  string,
];

type VoidFunction = () => void;


// const hasClipboardData = (w: Window): w is ClipboardDataWindow =>
//   Object.prototype.hasOwnProperty.call(w, 'clipboardData');
// 
// const getClipboardData = (w: ClipboardDataWindow | Window): DataTransfer | null => {
//   if (hasClipboardData(w)) {
//     return w.clipboardData;
//   }
//   return null;
// };

const isClipboardApiEnabled = (navigator: Navigator): navigator is ClipboardNavigator => (
  typeof navigator === 'object' &&
  typeof navigator.clipboard === 'object'
);

const useCopyninja = (): CopyninjaTuple => {
  const [clipboard, syncClipboard] = useClippy();

  const [copyninja, setCopyninja] = React.useState([] as string[]);
  
  React.useEffect((): void | VoidFunction => {
    console.log('React.useEffect??:', clipboard)
    if (_.isEmpty(clipboard)) return;
    setCopyninja([...copyninja, clipboard])
  }, [ clipboard ]);

  const addCopyninja = React.useCallback(async (text: string): Promise<void> => {
    try {
      console.log('text:', text)
      syncClipboard(text);
    }
    catch (e) {
      if (isClipboardApiEnabled(navigator)) {
        try {
          await navigator.clipboard.writeText(text);
          syncClipboard(text);
        }
        catch (_err) { }
      }
    }
  }, []);

  return [copyninja, addCopyninja, clipboard];
};

// Required for TypeScript to output a correct .d.ts file.
export default useCopyninja;

module.exports = useCopyninja;
module.exports.default = useCopyninja;
