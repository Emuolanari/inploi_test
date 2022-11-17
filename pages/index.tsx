import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between mx-16 pt-5">
        <Image src="/Paradigmo_Logo.png" alt="logo" height={35} width={35} />
        <button className="bg-primary text-white text-sm px-6 rounded-md">
          Login
        </button>
      </div>
      <div className="flex flex-col flex-auto justify-center items-center mt-5 min-h-fit">
        <p className="text-4xl font-bold">Find a job you love 🫶</p>
        <p className="text-4xl font-bold">with Paradigmo.</p>
      </div>
    </div>
  )
}
