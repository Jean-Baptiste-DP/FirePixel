export default function Screen() {
  return (
    <>
        <div className="block sm:hidden">
          Cette page n'est pas censée être consultée depuis un écran aussi petit !
        </div>

        <div className="hidden sm:block">
          <h1 className="text-3xl text-red-700">
            Hello from Screen !
          </h1>
        </div>
      </>
  );
}