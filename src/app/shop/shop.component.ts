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
  isDisplay4 = false;
  isDisplay5 = false;

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
  epicerie: any = [
    {
      title: "Epicerie/Ail Semoule Ducros_60g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Ail Semoule Ducros_60g.jpg",
    },
    {
      title: "Flocons d_avoine feuilles larges Hahne_500g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/Flocons d_avoine feuilles larges Hahne_500g.jpg",
    },
    {
      title: "Basilic Ducros_12g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Basilic Ducros_12g.jpg",
    },
    {
      title: "Cacahuettes grillées Naturel_100g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Cacahuettes grillées Naturel_100g.jpg",
    },
    {
      title: "Cap_d_Or_poischiches_400g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Cap_d_Or_poischiches_400g.png",
    },
    {
      title:
        "Eau de Géranium Rosat distillée 100_ naturelle Quintessences_0.5L",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/Eau de Géranium Rosat distillée 100_ naturelle Quintessences_0.5L.jpg",
    },
    {
      title: "El_Firma_Artichauts_Bio_Huile_d_olive_400gr",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/El_Firma_Artichauts_Bio_Huile_d_olive_400gr.jpg",
    },
    {
      title: "Fèves Bio El Firma_250g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Fèves Bio El Firma_250g.jpg",
    },
    {
      title: "Filets de Maquereaux à l_huile d_olive Sidi Daoud_170g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/Filets de Maquereaux à l_huile d_olive Sidi Daoud_170g.jpg",
    },
    {
      title: "Haricots verts très fins Sicam_400g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/Haricots verts très fins Sicam_400g.jpg",
    },
    {
      title: "Harissa Diari 100 _ Naturel Zgolli_350g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Epicerie/Harissa Diari 100 _ Naturel Zgolli_350g.jpg",
    },
    {
      title: "Mayonnaise en flacon Remia_500ml",
      price: "4.350 dt",
      imageUrl: "/assets/image/Epicerie/Mayonnaise en flacon Remia_500ml.jpg",
    },
  ];
  boisson: any = [
    {
      title: "Delice_Boisson_Jus_Lemonadha_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Delice_Boisson_Jus_Lemonadha_1L.png",
    },
    {
      title: "Delice_Boisson_Jus_Lemonadha_1L",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Boison/Rouiba_Boisson_Cocktail_Fruit_Light_1L.jpg",
    },
    {
      title: "Tropico_Cocktail_Fruit_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Tropico_Cocktail_Fruit_1L.jpg",
    },
    {
      title: "Delice_Boisson_Jus_Orange_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Delice_Boisson_Jus_Orange_1L.png",
    },
    {
      title: "Delice_Nectar_Mangue_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Delice_Nectar_Mangue_1L.png",
    },
    {
      title: "Rouiba_Excellence_Jus_Pomme_1L_Bottle",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Boison/Rouiba_Excellence_Jus_Pomme_1L_Bottle.jpg",
    },
    {
      title: "Rouiba_Excellence_Jus_Raisin_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Rouiba_Excellence_Jus_Raisin_1L.jpg",
    },
    {
      title: "Tropico_Cocktail_Fruit_20cl",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Tropico_Cocktail_Fruit_20cl.jpg",
    },
    {
      title: "Rouiba_Excellence_Nectar_Poire_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Rouiba_Excellence_Nectar_Poire_1L.jpg",
    },
    {
      title: "Tropico_Milky_20cl",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Tropico_Milky_20cl.jpg",
    },
    {
      title: "Delice_Boisson_Jus_Granite_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Delice_Boisson_Jus_Granite_1L.png",
    },
    {
      title: "Rouiba_Boisson_Orange_Light_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Boison/Rouiba_Boisson_Orange_Light_1L.jpg",
    },
  ];
  ptiteDej: any = [
    {
      title: "Batonnets cerealiers et pâte à tartiner Nutella _ Go_52g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Batonnets cerealiers et pâte à tartiner Nutella _ Go_52g.jpg",
    },
    {
      title: "Ben_Yedder_cafe_turc_pure_250g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Ben_Yedder_cafe_turc_pure_250g.jpg",
    },
    {
      title: "Biscuit fourré à la crème de cacao Biskrem_40g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Biscuit fourré à la crème de cacao Biskrem_40g.jpg",
    },
    {
      title: "Booms Blé soufflé Chocolat Gepro_s_220g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Booms Blé soufflé Chocolat Gepro_s_220g.jpg",
    },
    {
      title: "Café Expresso Bondin Torréfié à l_Italienne_250g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Café Expresso Bondin Torréfié à l_Italienne_250g.jpg",
    },
    {
      title: "Café Soluble en Poudre Bondin_50g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Café Soluble en Poudre Bondin_50g.jpg",
    },
    {
      title: "Céréales Crunch au Riz et Chocolat Nestlé_375g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Céréales Crunch au Riz et Chocolat Nestlé_375g.jpg",
    },
    {
      title: "Chocolat en poudre Ciokofast Crastan_250g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Chocolat en poudre Ciokofast Crastan_250g.jpg",
    },
    {
      title: "Corn Flakes Sante_250g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Petit déjeuner/Corn Flakes Sante_250g.jpg",
    },
    {
      title: "Crêpe d_Or Fourrée Saveur Framboise St Michel_270g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/Crêpe d_Or Fourrée Saveur Framboise St Michel_270g.jpg",
    },
    {
      title: "doypack-Nour-dattes_250g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Petit déjeuner/doypack-Nour-dattes_250g.png",
    },
    {
      title: "KAMY Thé - Vert - Aromatisé - A la menthe_25pcs",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Petit déjeuner/KAMY Thé - Vert - Aromatisé - A la menthe_25pcs.jpg",
    },
  ];
  feculents: any = [
    {
      title: "Barquette polystyrene Nour dattes_200g",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Féculents/Barquette polystyrene Nour dattes_200g.png",
    },
    {
      title: "Coffrets Nour-datte-400g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Coffrets Nour-datte-400g.png",
    },
    {
      title: "Pâtes Cannelloni Warda_250g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Pâtes Cannelloni Warda_250g.jpg",
    },
    {
      title: "Randa_Borghol_Gros",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Randa_Borghol_Gros.png",
    },
    {
      title: "Randa_Spaghetti_1",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Randa_Spaghetti_1.png",
    },
    {
      title: "Randa-Farine-pizza-1kg",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Randa-Farine-pizza-1kg.png",
    },
    {
      title: "Randa_Millet",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Randa_Millet.png",
    },
    {
      title: "Soupe d_Orge Friga_500g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Soupe d_Orge Friga_500g.jpg",
    },
    {
      title: "Sucre Glace Randa_750g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Sucre Glace Randa_750g.jpg",
    },
    {
      title: "Warda_farine_pain_complet_500g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Warda_farine_pain_complet_500g.jpg",
    },
    {
      title: "Warda_Hlelem_500g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Warda_Hlelem_500g.png",
    },
    {
      title: "Warda_Nwasser_500g",
      price: "4.350 dt",
      imageUrl: "/assets/image/Féculents/Warda_Nwasser_500g.png",
    },
  ];
  huile: any = [
    {
      title: "huile-d-olive-extra-vierge-tanit-450ml",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Huile/huile-d-olive-extra-vierge-tanit-450ml.jpg",
    },
    {
      title: "huile-d-olive-tunisienne-tanit-extra-vierge 0.85 L",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Huile/huile-d-olive-tunisienne-tanit-extra-vierge 0.85 L.jpg",
    },
    {
      title: "huile-d-olive-tunisienne-tanit-extra-vierge_5L",
      price: "4.350 dt",
      imageUrl:
        "/assets/image/Huile/huile-d-olive-tunisienne-tanit-extra-vierge_5L.jpg",
    },
    {
      title: "huile-d-olive-vierge_875 ml",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/huile-d-olive-vierge_875 ml.jpg",
    },
    {
      title: "Ruspina_Huile_d_olive_Extra_Vierge_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/Ruspina_Huile_d_olive_Extra_Vierge_1L.jpg",
    },
    {
      title: "Ruspina_Huile_d_olive_Extra_Vierge_5L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/Ruspina_Huile_d_olive_Extra_Vierge_5L.jpg",
    },
    {
      title: "Ruspina_Huile_d_olive_Vierge_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/Ruspina_Huile_d_olive_Vierge_1L.jpg",
    },
    {
      title: "Ruspina_Huile_d_olive_Vierge_5L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/Ruspina_Huile_d_olive_Vierge_5L.jpg",
    },
    {
      title: "Ruspina_Huile_d_olive_Vierge_Bio_1L",
      price: "4.350 dt",
      imageUrl: "/assets/image/Huile/Ruspina_Huile_d_olive_Vierge_Bio_1L.jpg",
    },
  ];
  ngOnInit(): void {}
  toggleDisplay1() {
    this.isDisplay1 = true;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
    this.isDisplay4 = false;
    this.isDisplay5 = false;
  }
  toggleDisplay2() {
    this.isDisplay1 = false;
    this.isDisplay2 = true;
    this.isDisplay3 = false;
    this.isDisplay4 = false;
    this.isDisplay5 = false;
  }
  toggleDisplay3() {
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = true;
    this.isDisplay4 = false;
    this.isDisplay5 = false;
  }
  toggleDisplay4() {
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
    this.isDisplay4 = true;
    this.isDisplay5 = false;
  }
  toggleDisplay5() {
    this.isDisplay1 = false;
    this.isDisplay2 = false;
    this.isDisplay3 = false;
    this.isDisplay4 = false;
    this.isDisplay5 = true;
  }
}
