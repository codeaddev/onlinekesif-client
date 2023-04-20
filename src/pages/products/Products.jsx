import React from "react";
import ProductItem from "./ProductItem";
import "./products.scss";

function Products() {
  const products = [
    {
      id: "01",
      title: "Logamax Plus GB172i 24-30-35 kW",
      desc: "Yenilikçi tasarım, yüksek performans ve düşük yakıt tüketimi: Logamax plus GB172i Yoğuşmalı Kombi.",
      list: [
        { id: "01", li: "Enerji Verimliliği - Isıtma (%)	91" },
        { id: "02", li: "Isıtma Kapasitesi (kW)	34,90" },
        { id: "03", li: "Kullanım Suyu Debisi (l/dk)	16" },
        { id: "04", li: "Enerji Verimliliği - Su Isıtma (%)	85" },
        { id: "05", li: "Genişlik / Yükseklik / Derinlik (mm)	437 / 640 / 256" },
      ],
      capacity: [
        { id: "01", li: "24" },
        { id: "02", li: "28" },
        { id: "03", li: "35" },
      ],
      img: "https://www.w3schools.com/howto/img_avatar.png",
      comment: [
        {
          id: "01",
          text: "süper ürün",
          author: "Faruk",
          avatar: "",
          time: new Date(),
        },
        {
          id: "02",
          text: "Yenilikçi tasarım, yüksek performans ve düşük yakıt tüketimi: Logamax plus GB172i Yoğuşmalı Kombi.Yenilikçi tasarım, yüksek performans ve düşük yakıt tüketimi: Logamax plus GB172i Yoğuşmalı Kombi.Yenilikçi tasarım, yüksek performans ve düşük yakıt tüketimi: Logamax plus GB172i Yoğuşmalı Kombi.Yenilikçi tasarım, yüksek performans ve düşük yakıt tüketimi: Logamax plus GB172i Yoğuşmalı Kombi.",
          author: "Furkan",
          avatar: "",
          time: new Date(),
        },
        {
          id: "03",
          text: "normal ürün",
          author: "Oğuz",
          avatar: "",
          time: new Date(),
        },
      ],
      likes: [
        { id: "01", author: "Faruk", time: new Date() },
        { id: "02", author: "Furkan", time: new Date() },
        { id: "03", author: "Oğuz", time: new Date() },
      ],
    },
  ];

  return (
    <div className="products">
      {products.map((i) => {
        return <ProductItem key={i.id} item={i} />;
      })}
    </div>
  );
}

export default Products;
