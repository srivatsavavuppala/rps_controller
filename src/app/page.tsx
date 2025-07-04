import RpsPlayground from "@/components/rps/RpsPlayground";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-background overflow-hidden font-body">
      <header className="p-4 border-b shrink-0">
        <h1 className="text-3xl font-headline font-bold text-center text-primary tracking-tight">
          RPS Playground
        </h1>
        <p className="text-center text-muted-foreground mt-1 text-sm">
          An interactive simulation where you control the chaos. Set the number of elements, adjust the speed, and watch them battle!
        </p>
      </header>
      <RpsPlayground />
    </main>
  );
}
