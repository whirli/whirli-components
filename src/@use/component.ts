// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

interface Component {
  uniqueId: string;
}

export default function useComponent(): Component {
  const uniqueId: string = uuidv4();

  return {
    uniqueId,
  };
}
