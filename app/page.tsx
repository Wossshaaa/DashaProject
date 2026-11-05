

export default function Home() {
   return (
    <main className="min-h-screen bg-white text-[#1a2a52]">
      <header className="flex items-center justify-between px-6 py-5">
        <p className="text-2xl font-bold">BOXPACK</p>
        <nav className="hidden gap-6 md:flex">
          <a href="#steps">Как начать</a>
          <a href="#services">Услуги</a>
          <a href="#benefits">Преимущества</a>
        </nav>
      </header>

      <section className="bg-[#1a2a52] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-2xl text-4xl font-bold md:text-6xl">
            Фулфилмент, который дарит сроки и репутацию
          </h1>
          <p className="mt-6 max-w-xl text-lg">
            Хранение, упаковка и доставка заказов для вашего бизнеса.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-lg bg-[#72d8e8] px-6 py-3 font-bold text-[#1a2a52]"
          >
            Наши услуги
          </a>

          {/* Плашки с цифрами/преимуществами */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-2">Контроль заказов</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-3xl font-bold">99%</p>
              <p className="mt-2">Точность комплектации</p>
            </div>
            <div className="rounded-xl bg-white/10 p-5">
              <p className="text-3xl font-bold">1 день</p>
              <p className="mt-2">Быстрая обработка</p>
            </div>
          </div>

          <div className="mt-8 flex min-h-48 items-center justify-center rounded-xl bg-white/10">
            Место для видео
          </div>
        </div>
      </section>
    </main>
   );
}
