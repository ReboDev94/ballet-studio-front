export const getCustomErrors = (message: string) => {
  const error = { type: 'custom', message };
  const config = { shouldFocus: true };
  return { error, config };
};
