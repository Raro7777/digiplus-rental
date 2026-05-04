type Props = { name: string; errors?: Record<string, string[] | undefined> };

export function FieldError({ name, errors }: Props) {
  const list = errors?.[name];
  if (!list?.length) return null;
  return (
    <p className="mt-1 text-xs text-red-600" role="alert">
      {list[0]}
    </p>
  );
}
