const CategorySelector = (props: { item: string }) => {
  return (
    <div className="rounded-lg bg-neutral-200 px-4 py-2">
      <span className="text-nowrap text-sm text-black">{props.item}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen flex-col font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-screen flex-1 flex-grow flex-col gap-10 p-2">
        <input
          type="text"
          className="w-full rounded-lg bg-neutral-100 px-4 py-2 text-black placeholder:text-gray-500"
          placeholder="O que você está procurando?"
        />

        <img
          src="https://img.freepik.com/fotos-gratis/acima-veja-deliciosas-frutas-e-vegetais_23-2149235866.jpg?t=st=1726529736~exp=1726533336~hmac=5d0eb09b108daac35182dc7d3dced8f72da00f6cdd8089ecd7cb70477770938f&w=1800"
          className="w-screen rounded"
        />

        <div className="flex flex-col">
          <h3>Categorias</h3>
          <div className="mt-2 flex flex-row flex-nowrap gap-4 overflow-x-auto pb-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((item, index) => {
              return <CategorySelector item={`${item} Teste`} key={index} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
