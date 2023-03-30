export default function PageTitle({ title }: { title: string }) {
  return (
    <div className='border-b border-t border-zinc-600'>
      <h1 className='container py-6 uppercase text-xl'>{title}</h1>
    </div>
  );
}
