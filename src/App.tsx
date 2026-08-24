import { Stack, TiltedCard ,StarBorder,DecryptedText,TrueFocus} from "./components";



const App = () => {
  return (
      <main className="min-h-screen bg-slate-950 text-white p-10 flex flex-col items-center gap-12">
          <header className="text-center">
              <h1 className="text-4xl font-bold">Component Library</h1>
              <p className="text-slate-400 mt-2">Interactive UI components showcase</p>
          </header>

          <div className="flex flex-wrap items-center justify-center gap-16">
              <section className="flex flex-col items-center gap-4">
              <h2 className="text-xl font-semibold">Stack Component</h2>
              <div className="w-52 h-52">
                  <Stack sendToBackOnClick autoplay pauseOnHover/>
              </div>
              </section>
              
              <section className="flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold">Tilted Card Component</h2>
                  <TiltedCard
                      imageSrc="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      altText="Madison Beer"
                      captionText="Madison Beer"
                      containerHeight="200px"
                      containerWidth="200px"
                      imageHeight="200px"
                      imageWidth="200px"
                      rotateAmplitude={12}
                      scaleOnHover={1.05}
                      showTooltip={true}
                  />
              </section>

              <section className="flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold">Star Border</h2>
                  <div className="flex flex-col gap-4">
                      <StarBorder color="#a855f7" speed="5s" >
                          Hover Me
                      </StarBorder>

                      <StarBorder color="#38bdf8" speed="3s">
                          Fast Speed
                      </StarBorder>
                  </div>
              </section>
                <hr />
              <section className="flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold">Decrypted Text</h2>
                  <div className="flex flex-col gap-4">
                      <DecryptedText text="Hello, World!" speed={100} />
                      <DecryptedText text="React is awesome!" speed={50} />
                  </div>
              </section>
              
              <section className=" flex flex-col items-center gap-4">
                  <h2 className="text-xl font-semibold">Focus</h2>

                  <div className="flex flex-col gap-4">
                      <TrueFocus sentence="React TypeScript" manualMode={true} blurAmout={5} borderColor="#5227FF" animationDuration={0.5} pauseBetweenAnimations={1} />
                  </div>
              </section>
          </div>
    </main>
  )
}

export default App