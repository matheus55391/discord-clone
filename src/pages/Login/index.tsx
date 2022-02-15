import { 
    LoginBody, 
    Main

} from "./styles"

import { LoginForm } from "../../shared/components"
import { LoginQrCode } from "../../shared/components/LoginQrCode"

export const Login = () => {

    return(

        <LoginBody>
            <Main 
                initial={{
                    opacity: 0.2
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 10
                }}

            >
                <LoginForm/>
                <LoginQrCode/>
            </Main>
            
        </LoginBody>

    )
}

//<LoginForm/>