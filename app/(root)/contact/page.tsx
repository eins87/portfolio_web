import ContactMeForm from '@/components/ContactMeForm'

function Contact() {
  return (
    <section className='flex flex-col items-center place-items-center'>
      <div className='flex flex-col rounded-xl p-3 w-[95%] max-w-md border-2 border-gray-400 backdrop-blur-md'>
        <h1 className='text-2xl font-bold text-center'>Contact Me</h1>
        <p className='text-sm font-light text-center'>Get in touch</p>
        <div className="flex flex-col w-full pt-5">
          <ContactMeForm />
        </div>
      </div>
    </section>
  )
}

export default Contact