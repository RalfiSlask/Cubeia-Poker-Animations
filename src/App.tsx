import UserComponent from './components/UserComponent';

function App() {
  return (
    <>
      <main className="flex flex-col items-center w-full pt-20 gap-20">
        <h1 className="text-2xl">Cubeia Poker Animations</h1>
        <section className="w-full flex justify-center">
          <UserComponent />
        </section>
      </main>
    </>
  );
}

export default App;
