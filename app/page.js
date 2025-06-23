import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1058px] min-h-screen flex flex-col items-start justify-start mx-auto px-4 sm:px-8 text-[var(--text-color)] text-3xl sm:text-5xl">
      <section className="w-full mt-32">
        <div className="flex flex-col justify-center items-center">
          <p className="font-serif-instrument">This is Kepnora</p>
          <p className="text-center w-full max-w-[476px] mt-12 text-base sm:text-lg text-[var(--text-secondary)]">
            eta 8 months
          </p>
        </div>
      </section>
    </main>
  );
}
