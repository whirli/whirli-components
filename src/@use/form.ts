interface Form {
  getErrorId: (name: string, error: string) => string | undefined;
}

export default function useComponent(): Form {
  const getErrorId = (name: string, error: string | null): string | undefined =>
    error ? `${name}-error` : undefined;

  return {
    getErrorId,
  };
}
