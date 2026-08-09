import { Stack } from "./components";



const App = () => {
  return (
      <main className="min-h-screen bg-slate-950 text-white p-10 flex flex-col items-center gap-12">
          <header className="text-center">
              <h1 className="text-4xl font-bold">Component Library</h1>
              <p className="text-slate-400 mt-2">Interactive UI components showcase</p>
          </header>

          <section className="flex flex-col items-center gap-4">
              <h2 className="text-xl font-semibold">Stack Component</h2>
              <div className="w-52 h-52">
                  <Stack sendToBackOnClick autoplay pauseOnHover/>
              </div>
          </section>
    </main>
  )
}

export default App