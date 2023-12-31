"use client"

function DownloadCV() {
  return (
    <div className='flex flex-row items-center justify-center'>
      <div className='cursor-pointer button-shockwave' onClick={() => {window.open("/assets/cv/Andi_Winata_CV.pdf", '_blank')}} >
        <p className='text-xs text-center'>Download CV</p>
      </div>
    </div>
  )
}

export default DownloadCV