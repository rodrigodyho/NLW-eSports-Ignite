interface ButtonProps {
  tittle: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.tittle}
    </button>

  )
}

function App() {
  return (
    <div>
      <Button tittle="Send 1"/>
      <Button tittle="Send 2"/>
      <Button tittle="Send 3"/>
      <Button tittle="Send 4"/>
      <Button tittle="Send 5"/>


    </div>
  )
}

export default App
