import { Quote } from '@/lib/types';

let zenquote = '' as string
process.env.NODE_ENV === "development" 
? zenquote = process.env.ZENQUOTE_API_DEV as string
: zenquote = process.env.ZENQUOTE_API_PROD as string

async function getQuote() {
  const response = await fetch(zenquote, {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Origin': 'localhost:3000',
    },
    next: { revalidate: 21600 }
  });
  if (!response.ok) {
    throw new Error('Error fetching quote');
  }
  const data = await response.json();
  const obj = Math.floor(Math.random() * data.length);
  return data[obj] as Quote;  
}
export default getQuote;