import DuckUrl from '@/assets/duck.jpg';

export default function Duck() {
  return (
    <div>
      <img src={DuckUrl} width={200} />
      <img src='/duck-public.jpg' width={200} />
    </div>
  );
}
