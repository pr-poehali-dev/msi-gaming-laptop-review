import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">TechStore</h1>
          <nav className="flex gap-6">
            <a href="#advantages" className="text-sm font-medium hover:text-accent transition-colors">Преимущества</a>
            <a href="#description" className="text-sm font-medium hover:text-accent transition-colors">Описание</a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">Цены</a>
          </nav>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Игровой ноутбук MSI B12UCX
              </h2>
              <p className="text-xl text-muted-foreground">
                Мощный процессор Intel Core i5, видеокарта RTX 2050 и 16GB оперативной памяти — всё для комфортной игры и работы
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <a href="https://market.yandex.ru/cc/8e9YXC" target="_blank" rel="noopener noreferrer">
                    Купить на Яндекс.Маркете
                  </a>
                </Button>
                <Button size="lg" variant="outline">
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/8d04f2f2-0924-47ed-becc-bae721debfbc/files/c92a816e-6654-4ba5-9a75-6b2085110291.jpg" 
                alt="MSI Gaming Laptop"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-accent" size={32} />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Официальная гарантия производителя на всю технику. Быстрый сервис и поддержка.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-accent" size={32} />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Доставка по всей России. Курьером до двери или самовывоз из пунктов выдачи.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" className="text-accent" size={32} />
                </div>
                <CardTitle>Широкий выбор</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Более 10 000 товаров: ноутбуки, смартфоны, планшеты и аксессуары от ведущих брендов.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="description" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Технические характеристики
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">MSI B12UCX-2633XRU</CardTitle>
                <CardDescription>Игровой ноутбук 15.6"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Cpu" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Процессор</p>
                        <p className="text-sm text-muted-foreground">Intel Core i5 12-го поколения</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Tv" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Видеокарта</p>
                        <p className="text-sm text-muted-foreground">NVIDIA GeForce RTX 2050</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="MemoryStick" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Оперативная память</p>
                        <p className="text-sm text-muted-foreground">16 GB DDR4</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="HardDrive" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Накопитель</p>
                        <p className="text-sm text-muted-foreground">512 GB SSD NVMe</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Monitor" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Дисплей</p>
                        <p className="text-sm text-muted-foreground">15.6" Full HD IPS 144Hz</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Laptop" className="text-accent mt-1" size={20} />
                      <div>
                        <p className="font-medium">Операционная система</p>
                        <p className="text-sm text-muted-foreground">DOS (без ОС)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t mt-6">
                  <p className="text-muted-foreground">
                    Этот ноутбук идеален для игр в Full HD, работы с графикой и многозадачности. 
                    Высокая частота обновления экрана 144Hz обеспечивает плавное изображение в динамичных играх.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Варианты покупки
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Базовый</CardTitle>
                <CardDescription>Единоразовая оплата</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-primary">69 990 ₽</p>
                  <p className="text-sm text-muted-foreground mt-1">Полная стоимость</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Гарантия 1 год
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Бесплатная доставка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Консультация специалиста
                  </li>
                </ul>
                <Button className="w-full">Купить сейчас</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent shadow-lg scale-105">
              <CardHeader>
                <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  ПОПУЛЯРНО
                </div>
                <CardTitle className="text-xl">Рассрочка 6 месяцев</CardTitle>
                <CardDescription>Без переплат</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-primary">11 665 ₽</p>
                  <p className="text-sm text-muted-foreground mt-1">× 6 месяцев</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Гарантия 1 год
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Бесплатная доставка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    0% переплаты
                  </li>
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90">Оформить рассрочку</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Рассрочка 12 месяцев</CardTitle>
                <CardDescription>Минимальный платёж</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-primary">5 832 ₽</p>
                  <p className="text-sm text-muted-foreground mt-1">× 12 месяцев</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Гарантия 1 год
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Бесплатная доставка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Одобрение за 5 минут
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Оформить рассрочку</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechStore</h3>
              <p className="text-sm opacity-90">
                Надёжный партнёр в мире цифровых технологий. Качественная техника по честным ценам.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@techstore.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Режим работы</h4>
              <p className="text-sm opacity-90">
                Пн-Пт: 9:00 - 21:00<br />
                Сб-Вс: 10:00 - 18:00
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2024 TechStore. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
