import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider/HeroSlider";
const Index = () => {
  const data = [
    {
      _id: "62825cbd65c0b9f0edd85f15",
      catagory: "Hero_Slider",
      name: "K.G.F: Chapter 2",
      info: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their savior, the government sees him as a threat to law and order; enemies are clamoring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy.",
      Type: ["Action", "Thriller"],
      duration: "2h 48m",
      writer: "Prashanth Neel",
      director: "Prashanth Neel",
      cast: " Yash, Sanjay, DuttSrinidhi, Shetty",
      date: "2022-04-14",
      rating: "5",
      language: "Hindi",
      trailer: "https://www.youtube.com/watch?v=JKa05nyUmuQ",
      download_link: "https://pixeldrain.com//api/file/kiNgcodt",
      banner_image: "https://i.ibb.co/nbBJfx7/KGF-chapter2.jpg",
    },
    {
      _id: "62825e4165c0b9f0edd85f16",
      catagory: "Hero_Slider",
      name: "Beast",
      info: "After a shopping mall in Chennai is hijacked by terrorists who hold the visitors as hostages, Veera Raghavan, a spy also trapped in the mall, decides to save the hostages by eliminating the terrorists.",
      Type: ["Action", "Comedy"],
      duration: "2h 35m",
      writer: "Nelson Dilipkumar",
      director: "Nelson Dilipkumar",
      cast: "Thalapathy, VijayPooja Hegde, K. Selvaraghavan",
      date: "2022-04-13",
      rating: "5",
      language: "Hindi",
      trailer: "https://www.youtube.com/watch?v=YFJUiIU7OGc",
      download_link: "https://pixeldrain.com//api/file/C846RQ94",
      banner_image:
        "https://i.ibb.co/4jnyYXf/252600-untitled-design-2022-04-05t194549468.webp",
    },
    {
      _id: "6282626465c0b9f0edd85f19",
      catagory: "Hero_Slider",
      name: "Spider-Man: No Way Home",
      info: "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.",
      Type: ["Action", "Sci-fi"],
      duration: "2h 28m",
      writer: "Jon Watts",
      director: "Chris McKennaErik SommersStan Lee",
      cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
      date: "2021-12-17",
      rating: "5",
      language: "English",
      trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA",
      download_link: "https://pixeldrain.com//api/file/kxwP2XbK",
      banner_image: "https://i.ibb.co/VLLVPFz/maxresdefault.jpg",
    },
    {
      _id: "6282640d65c0b9f0edd85f1b",
      catagory: "Hero_Slider",
      name: "Uncharted",
      info: "Street-smart Nathan Drake (Tom Holland) is recruited by seasoned treasure hunter Victor \"Sully\" Sullivan (Mark Wahlberg) to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada. What starts as a heist job for the duo becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada (Antonio Banderas), who believes he and his family are the rightful heirs. If Nate and Sully can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure and perhaps even Nate's long-lost brother...but only if they can learn to work together.",
      Type: ["Action", "Adventure"],
      duration: "1h 56m",
      writer: " Ruben Fleischer",
      director: "Rafe Judkins, Art Marcum, Matt Holloway",
      cast: "Tom Holland, Mark Wahlberg, Antonio Banderas",
      date: "2022-02-18",
      rating: "5",
      language: "English",
      trailer: "https://www.youtube.com/watch?v=eHp3MbsCbMg",
      download_link: "https://pixeldrain.com//api/file/ykALkrLK",
      banner_image: "https://i.ibb.co/QMRCHBp/maxresdefault-1.jpg",
    },
  ];

  return (
    <>
      <HeroSlider  content={data} />
    </>
  );
};

export default Index;
