import ButtonGradient from "./assets/svg/ButtonGradient"
import Button from "./components/Button"
import Header from "./components/Header"


const App = () => {
  return (
    <>
      <Header />
      <div className="pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">Something</Button>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App