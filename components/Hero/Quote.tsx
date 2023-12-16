import getQuote from '@/lib/getQuotes';

async function Quote() {
  const quote = await getQuote();
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col gap-2 lg:w-[80%] w-[52%]'>
        <p className="text-lg text-left md:text-2xl max-sm:text-justify">&ldquo;{quote.q}&rdquo;</p>
        <p className="w-full text-base max-sm:text-right">&mdash; {quote.a}</p>
        <div className='text-xs'>
          Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank" className='underline text-amber-600'>ZenQuotes API</a>
        </div>
      </div>
    </div>
  );
}

export default Quote