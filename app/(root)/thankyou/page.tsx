import Btn_return from '@/components/ContactMe/button_return'

function thankYou() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='text-4xl font-bold text-center'>
        Thank you for your message!
      </div>
      <div className='text-2xl text-center'>
        I will get back to you as soon as possible.
      </div>
      <div>
        <Btn_return />
      </div>
    </section>
  )
}

export default thankYou