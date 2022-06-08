import { useState } from 'react';

// forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [value, () => setValue((value) => value + 1)];
}

export default useForceUpdate;
