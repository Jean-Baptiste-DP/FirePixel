export default function Phone() {
    return (
      <>
        <div className="hidden sm:block">
          Cette page n'est pas censée être consultée depuis un écran aussi grand !
        </div>

        <div className="block sm:hidden">
          <h1 className="text-3xl text-blue-700">
            Hello from Phone !
          </h1>
        </div>
      </>
    );
  }