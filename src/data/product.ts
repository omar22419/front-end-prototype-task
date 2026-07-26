import type { Product } from "../types/product";

export const cameraProducts: Product[] = [
  {
    id: "cam-v4",
    title: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1784835991/7377c4c026acb3c476e41ccec1e0376490ee2cb9_1_giyfbl.png",
    badge: "Save 22%",
    price: 27.98,
    compareAtPrice: 35.98,
    learnMore: "#",
    isSelected: true,
    selectedVariantId: "white",
    variants: [
      {
        id: "white",
        name: "White",
        color: "#FFFFFF",
        quantity: 1,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836496/483cbb867e0bd5a75fa3ea080af66126b709f997_jnvdgg.png"
      },
      {
        id: "grey",
        name: "Grey",
        color: "#8A8A8A",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836367/2989bafdebb392f5c271645b0aa3977ff131a2f7_hbusls.png"
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836367/dfa724c811c98887e295ddf6d1b842bf7f555246_zuvhzv.png"
      },
    ],
  },

  {
    id: "pan-v3",
    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1784835990/6e1650a4902c8e51d612c6363434bb36c8d74688_db8b1m.png",
    badge: "Save 12%",
    price: 34.98,
    compareAtPrice: 39.98,
    learnMore: "#",
    isSelected: true,
    selectedVariantId: "white",
    variants: [
      {
        id: "white",
        name: "White",
        color: "#FFFFFF",
        quantity: 2,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836497/a0088c61da6ff66f06d71bdbe9496a53344f2c0e_upu4ct.png"
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836496/9635a12db624c130033a4166489f19d4dd442883_lfaizq.png"
      },
    ],
  },

  {
    id: "floodlight",
    title: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° wide-angle view for your garage.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1784835990/96d92fa4f08e0bdd9fa6fd7b1e59231ec3d3d38b_e7sypr.png",
    badge: "Save 22%",
    price: 69.98,
    compareAtPrice: 89.98,
    learnMore: "#",
    isSelected: false,
    selectedVariantId: "white",
    variants: [
      {
        id: "white",
        name: "White",
        color: "#FFFFFF",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836642/50a6f9b3cf2a431126be6488ddfca6647e979827_xlar9l.png"
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836642/7d83d6ff32c0ddf80e1096fa37910875072ca87a_gnucut.png"
      },
    ],
  },

  {
    id: "doorbell",
    title: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1784835990/0d7c4e5400ad8bef25d0ac786f415794250cefd5_z3thzq.png",
    price: 69.98,
    learnMore: "#",
    isSelected: false,
    selectedVariantId: "Black",
  },

  {
    id: "battery",
    title: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1784835990/25ced552047f1e871354f9620f3a60c5948b3b1a_vtslqs.png",
    price: 89.98,
    learnMore: "#",
    isSelected: false,
    selectedVariantId: "white",
    variants: [
      {
        id: "white",
        name: "White",
        color: "#FFFFFF",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836724/25ced552047f1e871354f9620f3a60c5948b3b1a_1_a8hlt4.png"
      },
      {
        id: "black",
        name: "Black",
        color: "#000000",
        quantity: 0,
        image:"https://res.cloudinary.com/duexs5wps/image/upload/v1784836724/5a86d03ace4842214c1d63d582b0c618fc4bdedf_d2vb6d.png"
      },
    ],
  },
];