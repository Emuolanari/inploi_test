export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#83D1A6] via-[#86DCCA] to-[#F6f9EB]">
      <div className="flex justify-end mr-16 mt-10">
        <button className="bg-primary text-white text-sm py-2 px-6 rounded-md">
          Login
        </button>
      </div>
      <div className="flex flex-col flex-auto justify-center items-center mt-5">
        <p className="text-4xl font-bold">Find a job you love 🫶</p>
        <p className="text-4xl font-bold">with Paradigmo.</p>
      </div>
    </div>
  )
}
