class ProductQuiz {
  constructor() {
    this._productId = null;
    this._limit = 3;
    this._domain = null;
  }

  set productId(productId) {
    this._productId = productId;
  }

  get productId() {
    return this._productId;
  }

  set limit(limit) {
    this._limit = limit;
  }

  get limit() {
    return this._limit;
  }

  set domain(storeUrl) {
    // Parse the URL or fallback to a default URL
    this._domain = this.parseUrl(storeUrl) || window.Shopify.routes.root;
  }

  get domain() {
    return this._domain;
  }

  parseUrl(url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.href;
    } catch (error) {
      console.error("Error parsing URL:", error);
      return null;
    }
  }

  randomProducts() {
    const produts = [
      7831344808187, 7666039390459, 7721244623099, 7666060296443, 7721326018811,
    ];

    const randomProduct = produts[Math.floor(Math.random() * produts.length)];

    return randomProduct;
  }

  async productRecommendApi() {
    if (!this._productId) {
      console.error("Product ID is missing");
      return Promise.reject("Product ID is missing");
    }

    const url = `${this.domain}/recommendations/products.json?product_id=${this.productId}&limit=${this.limit}&intent=related`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product recommendations:", error);
      return Promise.reject(error);
    }
  }

  formatMoney(money) {
    // Convert money to cents
    const cents = money * 100;
    // Format money to USD
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    // Return formatted money
    return formatter.format(cents / 100);
  }
}
