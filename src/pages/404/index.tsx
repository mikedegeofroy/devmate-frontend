export const Page404 = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-3xl font-semibold tracking-tight'>
          Error 404
        </h1>
        <p className='text-sm text-muted-foreground'>
          Oh no! Something went wrong!
        </p>
      </div>
    </div>
  );
};
