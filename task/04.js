class NewsFeed {
    constructor() {
      this.newsArray = [];
    }
  
    get count() {
      return this.newsArray.length;
    }
  
    addNews(news) {
      this.newsArray.push(news);
    }
  
    removeNews(index) {
      this.newsArray.splice(index, 1);
    }
  
    displayAllNews() {
      this.newsArray.forEach((news) => news.print());
    }
  
    sortNewsByDate() {
      this.newsArray.sort((a, b) => b.publishDate - a.publishDate);
    }
  
    searchNewsByTag(tag) {
      return this.newsArray.filter((news) => news.tags.includes(tag));
    }
  }
  
  const newsFeed = new NewsFeed();
  newsFeed.addNews(
    new News("Подія", "Сталася подія.", ["подія"], "2024-08-26")
  );
  newsFeed.addNews(
    new News("Оновлення", "Було внесено оновлення.", ["оновлення"], "2024-08-22")
  );
  
  console.log(`Загальна кількість новин: ${newsFeed.count}`);
  newsFeed.displayAllNews();
  newsFeed.sortNewsByDate();
  console.log("Після сортування:");
  newsFeed.displayAllNews();
  
  console.log('Пошук за тегом "подія":');
  const eventNews = newsFeed.searchNewsByTag("подія");
  eventNews.forEach((news) => news.print());
  