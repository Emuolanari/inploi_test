import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className="flex justify-between mx-10 pt-5">
        <Image src="/Paradigmo_Logo.png" alt="logo" height={50} width={50} />
        <button className="bg-[#65BC67] text-white text-base p-3 rounded-sm">
          Login
        </button>
      </div>
      <div className="flex flex-col items-center bg-green-600">
        <p className="text-4xl font-bold">Find a job you love 🫶</p>
        <p className="text-4xl font-bold">with Paradigmo</p>
      </div>
    </div>
  )
}
