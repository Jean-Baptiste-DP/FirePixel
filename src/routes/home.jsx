import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex-col flex">
        <h1>Hello !</h1>

        <Link to="/screen" className="my-2">Screen</Link>
        <Link to="/phone">Phone</Link>
      </div>
    </>
  )
}
