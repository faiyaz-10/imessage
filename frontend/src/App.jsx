import "./App.css";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  return (
    <div>
      <h1>My App</h1>

      <header>
        <show when="signed-out">
          <SignInButton mode="modal"/>
          <SignUpButton mode="modal"/>
        </show>
        <show when="signed-in">
          <UserButton/>
        </show>
      </header>
    </div>
  );
}
export default App;