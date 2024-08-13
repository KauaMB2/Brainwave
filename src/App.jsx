import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App