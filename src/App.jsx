import { UsButton } from "./components/ui/button";
import { InputEmail,InputNameAndLastName,InputPassword} from "./components/ui/input";


export default function App() {

  return (
    <>
    <InputEmail children={"Email"}/>
    <InputNameAndLastName name={"Nome"} lastName={"Sobrenome"}/>
    <InputPassword/>
    <UsButton children={"Confirmar"}/>
    </>
  )
}
