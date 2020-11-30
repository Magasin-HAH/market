import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
  isDisplay1 = true;
  isDisplay2 = false;
  isDisplay3 = false;
  constructor() {}
  items: any = [
    {
      title: "Delice Boisson Jus Fruits Blancs 1L.bmp",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Fruits Blancs 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Granite 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Granite 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Orange 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Orange 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Pêche 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pêche 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Pomme Verte 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pomme Verte 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Halwa Chamia Amandes 400gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Fruits Secs Boite 850gr.bmp",
    },
    {
      title: "Halwa Chamia Amandes 185gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Pistaches 850g.bmp",
    },
  ];
  items2: any = [
    {
      title: "Delice Boisson Jus Pêche 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pêche 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Pomme Verte 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pomme Verte 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Halwa Chamia Amandes 400gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Fruits Secs Boite 850gr.bmp",
    },
    {
      title: "Halwa Chamia Amandes 185gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Pistaches 850g.bmp",
    },
    {
      title: "Delice Boisson Jus Fruits Blancs 1L.bmp",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Fruits Blancs 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Granite 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Granite 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Orange 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Orange 1L.bmp",
    },
  ];
  items3: any = [
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Halwa Chamia Amandes 400gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Fruits Secs Boite 850gr.bmp",
    },
    {
      title: "Halwa Chamia Amandes 185gr",
      price: "4.350 dt",
      imageUrl: "/assets/image/Halwa Chamia Pistaches 850g.bmp",
    },
    {
      title: "Delice Boisson Jus Fruits Blancs 1L.bmp",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Fruits Blancs 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Granite 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Granite 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Orange 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Orange 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Pêche 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pêche 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Poire 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Poire 1L.bmp",
    },
    {
      title: "Delice Boisson Jus Pomme Verte 1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Delice Boisson Jus Pomme Verte 1L.bmp",
    },
  ];
  ngOnInit(): void {}
  toggleDisplay1() {
    this.isDisplay1 = true;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
  }
  toggleDisplay2() {
    this.isDisplay1 = false;
    this.isDisplay2 = true;
    this.isDisplay3 = false;
  }
  toggleDisplay3() {
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = true;
  }
}
